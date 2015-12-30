import mechanize
import json
import requests
import datetime
from lxml import html
from bs4 import BeautifulSoup

# command to run script every X seconds
# python scrape/scrape.py && while sleep 300; do python scrape/scrape.py; done

URL = "https://www.bannerssb.bucknell.edu/ERPPRD/hwzkschd.P_Bucknell_SchedbyDept"
JSONURL = "https://api.myjson.com/bins/3vg1s"
CRN = 0
COURSE = 1
TITLE = 2
TIME = 3
ROOM = 4
INSTR = 5
SEATS = 6
WAIT = 7
RES = 8
PRM = 9
CCC = 10
DESC = 11
GUIDE = 12
BOOKS = 13

br = mechanize.Browser()
br.set_handle_robots(False)
url = br.open(URL)

# 70 departments
courseSyms = ["ACFM", "ANBE", "ANTH", "ARBC", "ARTH", "ARST", "ASTR", "BIOL",
           "BMEG", "OFFL", "OFFD", "OFFF", "OFFAT", "OFFDC", "CHEG", "CHEM",
           "CHIN", "CEEG", "CLAS", "CSCI", "DANC", "EAST", "ECON", "EDUC",
           "ECEG", "ENGR", "ENGL", "ENST", "FLMS", "FOUN", "FREN", "GEOG",
           "GEOL", "GRMN", "GLBM", "GREK", "HEBR", "HIST", "HUMN", "IDPT",
           "IREL", "ITAL", "JAPN", "LATN", "LAMS", "LEGL", "LING", "MGMT",
           "MSUS", "MIDE", "MATH", "MECH", "MILS", "MUSC", "NEUR", "OFFG",
           "OCST", "PHIL", "PHYS", "POLS", "PSYC", "RELI", "RESC", "RUSS",
           "SIGN", "SOCI", "SPAN", "THEA", "UNIV", "WMST"]

index = 0
courses = {}

for course in courseSyms:
    br.select_form("valform")
    control = br.form.find_control("param1")
    control.value = [course]

    br.submit()

    response = br.response()
    url = response.read()


    soup = BeautifulSoup(url, 'lxml')
    trs = soup.findAll("tr", align="left")
    for tr in trs:
        tds= tr.findChildren("td")
        if (tds[0].get_text().isdigit()):
            # could use some trimming
            courses[index] = {}
            courses[index]["CRN"] = tds[CRN].get_text().strip()
            courses[index]["course"] = tds[COURSE].get_text().strip()
            courses[index]["title"] = tds[TITLE].get_text().strip()
            courses[index]["time"] = tds[TIME].get_text().replace('\n', '|')
            courses[index]["room"] = tds[ROOM].get_text().replace('\n', '|')
            courses[index]["instructor"] = tds[INSTR].get_text().replace('\n', '')
            courses[index]["seatsAvail"] = tds[SEATS].get_text().strip()
            courses[index]["waitList"] = tds[WAIT].get_text().strip();
            courses[index]["seatsRes"] = tds[RES].get_text().strip()
            courses[index]["prm"] = tds[PRM].get_text().strip()
            courses[index]["CCC"] = tds[CCC].get_text().strip()
            desc = tds[DESC].find('a')
            if desc is not None:
                courses[index]["descLink"] = str(desc.get('href'))
            else:
                courses[index]["descLink"] = "NONE"
            guide = tds[GUIDE].find('a')
            if guide is not None:
                courses[index]["guideLink"] = str(guide.get('href'))
            else:
                courses[index]["guideLink"] = "NONE"
            courses[index]["bookTerm"] = str(tds[BOOKS].find('form').find('input', {'name':'courseXml'}).get('value'))[-32:][:3]
            index = index + 1

    br.back()

r = requests.put(JSONURL, json=courses)

f = open('scrape/database.log', 'a')

# Success
if(int(r.status_code) == 200):
    print "Success. (200)"
    output = "updated successfully on "
    output += str(datetime.datetime.now().date())
    output += " at "
    output += str(datetime.datetime.now().time())
    output += " (200)."
    output += "\n"
    f.write(output)

# Failure
else:
    print "Failure. (" + str(r.status_code) + ")"
    output = "failed update on "
    output += str(datetime.datetime.now().date())
    output += " at "
    output += str(datetime.datetime.now().time())
    output += " (" + str(r.status_code) + ")."
    output += "\n"
    f.write(output)
