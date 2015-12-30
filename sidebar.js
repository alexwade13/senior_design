$(document).ready(function(){

    // Highlight Hovered TRs
    $("#coursetable tbody tr td:first-child").each(function(index) {
        if(typeof $(this).attr("colspan") === "undefined") {
            $(this).parent().hover(
                function() {
                    $(this).css("background-color", "#FEFFCC");
                },
                function() {
                    $(this).css("background-color", "");
                }
        );
        }
    });

    // Table header for AtC button
    $("#coursetable tbody tr:first th:last").after("<th class='ddlabel' scope='row'>Add To<br>Calendar</th>");

    // Create "Add to Calendar" button
    var addATC = function() {
        var $lastTD = $("tr").find("td:last");
        $lastTD.each(function(index) {
            if($(this).children(0).prop("tagName") === "FONT") {
                $(this).attr("colspan", String(parseInt($(this).attr("colspan")) - 3));
            }
            else if($(this).children(0).prop("tagName") === "FORM"){
                $(this).after("<input type='submit' value='Add to Calendar' class='button atcbutton'>");
            }
        });
    }; addATC();

    // Minified sidebar
    var sidebarHTML = '<div id="sidebar"> <h2 class="active">Calendar</h2> <div id="calendar"> <div id="calheader"> <button id="prev">Previous</button> <button id="display">Info</button> <button id="clear">Clear</button> <button id="next">Next</button><br></div><div id="timeslot" class="weekday timeslot"> <div id="mainTime" class="timebox timeslot th"></div><div id="main8AM" class="timebox timeslot">8<wbr>AM</div><div id="main9AM" class="timebox timeslot">9<wbr>AM</div><div id="main10AM" class="timebox timeslot">10<wbr>AM</div><div id="main11AM" class="timebox timeslot">11<wbr>AM</div><div id="main12PM" class="timebox timeslot">12<wbr>PM</div><div id="main1PM" class="timebox timeslot">1<wbr>PM</div><div id="main2PM" class="timebox timeslot">2<wbr>PM</div><div id="main3PM" class="timebox timeslot">3<wbr>PM</div><div id="main4PM" class="timebox timeslot">4<wbr>PM</div><div id="main5PM" class="timebox timeslot">5<wbr>PM</div><div id="main6PM" class="timebox timeslot">6<wbr>PM</div><div id="main7PM" class="timebox timeslot">7<wbr>PM</div><div id="main8PM" class="timebox timeslot">8<wbr>PM</div><div id="main9PM" class="timebox timeslot">9<wbr>PM</div></div><div id="monday" class="weekday"> <div id="monTime" class="timebox th">Mon</div><div id="mon8AM" class="timebox"></div><div id="mon830AM" class="timebox halfhour"></div><div id="mon9AM" class="timebox"></div><div id="mon930AM" class="timebox halfhour"></div><div id="mon10AM" class="timebox"></div><div id="mon1030AM" class="timebox halfhour"></div><div id="mon11AM" class="timebox"></div><div id="mon1130AM" class="timebox halfhour"></div><div id="mon12PM" class="timebox"></div><div id="mon1230PM" class="timebox halfhour"></div><div id="mon1PM" class="timebox"></div><div id="mon130PM" class="timebox halfhour"></div><div id="mon2PM" class="timebox"></div><div id="mon230PM" class="timebox halfhour"></div><div id="mon3PM" class="timebox"></div><div id="mon330PM" class="timebox halfhour"></div><div id="mon4PM" class="timebox"></div><div id="mon430PM" class="timebox halfhour"></div><div id="mon5PM" class="timebox"></div><div id="mon530PM" class="timebox halfhour"></div><div id="mon6PM" class="timebox"></div><div id="mon630PM" class="timebox halfhour"></div><div id="mon7PM" class="timebox"></div><div id="mon730PM" class="timebox halfhour"></div><div id="mon8PM" class="timebox"></div><div id="mon830PM" class="timebox halfhour"></div><div id="mon9PM" class="timebox"></div><div id="mon930PM" class="timebox halfhour"></div></div><div id="tuesday" class="weekday"> <div id="tuesTime" class="timebox th">Tues</div><div id="tues8AM" class="timebox"></div><div id="tues830AM" class="timebox halfhour"></div><div id="tues9AM" class="timebox"></div><div id="tues930AM" class="timebox halfhour"></div><div id="tues10AM" class="timebox"></div><div id="tues1030AM" class="timebox halfhour"></div><div id="tues11AM" class="timebox"></div><div id="tues1130AM" class="timebox halfhour"></div><div id="tues12PM" class="timebox"></div><div id="tues1230PM" class="timebox halfhour"></div><div id="tues1PM" class="timebox"></div><div id="tues130PM" class="timebox halfhour"></div><div id="tues2PM" class="timebox"></div><div id="tues230PM" class="timebox halfhour"></div><div id="tues3PM" class="timebox"></div><div id="tues330PM" class="timebox halfhour"></div><div id="tues4PM" class="timebox"></div><div id="tues430PM" class="timebox halfhour"></div><div id="tues5PM" class="timebox"></div><div id="tues530PM" class="timebox halfhour"></div><div id="tues6PM" class="timebox"></div><div id="tues630PM" class="timebox halfhour"></div><div id="tues7PM" class="timebox"></div><div id="tues730PM" class="timebox halfhour"></div><div id="tues8PM" class="timebox"></div><div id="tues830PM" class="timebox halfhour"></div><div id="tues9PM" class="timebox"></div><div id="tues930PM" class="timebox halfhour"></div></div><div id="wednesday" class="weekday"> <div id="wedTime" class="timebox th">Wed</div><div id="wed8AM" class="timebox"></div><div id="wed830AM" class="timebox halfhour"></div><div id="wed9AM" class="timebox"></div><div id="wed930AM" class="timebox halfhour"></div><div id="wed10AM" class="timebox"></div><div id="wed1030AM" class="timebox halfhour"></div><div id="wed11AM" class="timebox"></div><div id="wed1130AM" class="timebox halfhour"></div><div id="wed12PM" class="timebox"></div><div id="wed1230PM" class="timebox halfhour"></div><div id="wed1PM" class="timebox"></div><div id="wed130PM" class="timebox halfhour"></div><div id="wed2PM" class="timebox"></div><div id="wed230PM" class="timebox halfhour"></div><div id="wed3PM" class="timebox"></div><div id="wed330PM" class="timebox halfhour"></div><div id="wed4PM" class="timebox"></div><div id="wed430PM" class="timebox halfhour"></div><div id="wed5PM" class="timebox"></div><div id="wed530PM" class="timebox halfhour"></div><div id="wed6PM" class="timebox"></div><div id="wed630PM" class="timebox halfhour"></div><div id="wed7PM" class="timebox"></div><div id="wed730PM" class="timebox halfhour"></div><div id="wed8PM" class="timebox"></div><div id="wed830PM" class="timebox halfhour"></div><div id="wed9PM" class="timebox"></div><div id="wed930PM" class="timebox halfhour"></div></div><div id="thursday" class="weekday"> <div id="thursTime" class="timebox th">Thurs</div><div id="thurs8AM" class="timebox"></div><div id="thurs830AM" class="timebox halfhour"></div><div id="thurs9AM" class="timebox"></div><div id="thurs930AM" class="timebox halfhour"></div><div id="thurs10AM" class="timebox"></div><div id="thurs1030AM" class="timebox halfhour"></div><div id="thurs11AM" class="timebox"></div><div id="thurs1130AM" class="timebox halfhour"></div><div id="thurs12PM" class="timebox"></div><div id="thurs1230PM" class="timebox halfhour"></div><div id="thurs1PM" class="timebox"></div><div id="thurs130PM" class="timebox halfhour"></div><div id="thurs2PM" class="timebox"></div><div id="thurs230PM" class="timebox halfhour"></div><div id="thurs3PM" class="timebox"></div><div id="thurs330PM" class="timebox halfhour"></div><div id="thurs4PM" class="timebox"></div><div id="thurs430PM" class="timebox halfhour"></div><div id="thurs5PM" class="timebox"></div><div id="thurs530PM" class="timebox halfhour"></div><div id="thurs6PM" class="timebox"></div><div id="thurs630PM" class="timebox halfhour"></div><div id="thurs7PM" class="timebox"></div><div id="thurs730PM" class="timebox halfhour"></div><div id="thurs8PM" class="timebox"></div><div id="thurs830PM" class="timebox halfhour"></div><div id="thurs9PM" class="timebox"></div><div id="thurs930PM" class="timebox halfhour"></div></div><div id="friday" class="weekday"> <div id="friTime" class="timebox th">Fri</div><div id="fri8AM" class="timebox"></div><div id="fri830AM" class="timebox halfhour"></div><div id="fri9AM" class="timebox"></div><div id="fri930AM" class="timebox halfhour"></div><div id="fri10AM" class="timebox"></div><div id="fri1030AM" class="timebox halfhour"></div><div id="fri11AM" class="timebox"></div><div id="fri1130AM" class="timebox halfhour"></div><div id="fri12PM" class="timebox"></div><div id="fri1230PM" class="timebox halfhour"></div><div id="fri1PM" class="timebox"></div><div id="fri130PM" class="timebox halfhour"></div><div id="fri2PM" class="timebox"></div><div id="fri230PM" class="timebox halfhour"></div><div id="fri3PM" class="timebox"></div><div id="fri330PM" class="timebox halfhour"></div><div id="fri4PM" class="timebox"></div><div id="fri430PM" class="timebox halfhour"></div><div id="fri5PM" class="timebox"></div><div id="fri530PM" class="timebox halfhour"></div><div id="fri6PM" class="timebox"></div><div id="fri630PM" class="timebox halfhour"></div><div id="fri7PM" class="timebox"></div><div id="fri730PM" class="timebox halfhour"></div><div id="fri8PM" class="timebox"></div><div id="fri830PM" class="timebox halfhour"></div><div id="fri9PM" class="timebox"></div><div id="fri930PM" class="timebox halfhour"></div></div></div><h2>Custom Search</h2> <div id="search"> <div id="section1"> <label for="q0" class="visuallyhidden"></label> <div> <select class="search-criteria" id="f0" title="Choose which field to search"> <option value="CRN" selected="selected">CRN</option> <option value="instructor">Professor</option> <option value="CCC">CCC</option> <option value="course">Course</option> <option value="title">Title</option> <option value="department">Department</option> <option value="before-time">Before</option> <option value="after-time">After</option> </select> <label class="check-label"><input type="checkbox" class="NOTcheck" name="not0" id="not0" value="NOT">NOT</label> </div><input class="text searchBox medium asSearchBoxf" id="q0" name="q0" type="text"> </div><div class="selectContainer small"> <select class="and-or" id="c1" name="c1" title="Choose a boolean relationship between two search queries"> <option value="AND" selected="selected">AND</option> <option value="OR">OR</option> </select> </div><div id="section2"> <label for="q1" class="visuallyhidden"></label> <div class="selectContainer small"> <select class="search-criteria" id="f1" title="Choose which field to search"> <option value="CRN" selected="selected">CRN</option> <option value="instructor">Professor</option> <option value="CCC">CCC</option> <option value="course">Course</option> <option value="title">Title</option> <option value="department">Department</option> <option value="before-time">Before this Time</option> <option value="after-time">After this Time</option> </select> <label class="check-label"><input type="checkbox" class="NOTcheck" name="not1" id="not1" value="NOT">NOT</label> </div><input class="text searchBox medium asSearchBoxf" id="q1" name="q1" type="text"> </div><div class="selectContainer small"> <select class="and-or" id="c2" name="c2" title="Choose a boolean relationship between two search queries"> <option value="AND" selected="selected">AND</option> <option value="OR">OR</option> </select> </div><div id="asFieldRow2"> <label for="q2" class="visuallyhidden"></label> <div class="selectContainer small"> <select class="search-criteria" id="f2" title="Choose which field to search"> <option value="CRN" selected="selected">CRN</option> <option value="instructor">Professor</option> <option value="CCC">CCC</option> <option value="course">Course</option> <option value="title">Title</option> <option value="department">Department</option> <option value="before-time">Before this Time</option> <option value="after-time">After this Time</option> </select> <label class="check-label"><input type="checkbox" class="NOTcheck" name="not2" id="not2" value="NOT">NOT</label> </div><input class="text searchBox medium asSearchBoxf" id="q2" name="q2" type="text"> </div><div class="row"> <button type="button" class="button" id="search-button" title="Seach with these Parameters">Search</button> <button type="button" class="button" id="suggest-button" title="Seach for courses that fit in your schedule">Suggest Courses</button> </div></div><h2>CRN Clipboard / Export</h2> <div id="CRNs"><div id="CRN"></div><button type="button" name="export-button" id="export-button">Export This Calendar as a CSV</button></div></div>';
    
    // Adding the sidebar div
    $("body").wrapInner("<div class='original'></div>");
    $(".original").prepend("<div class='conflictpopup'><p class='popupmessage'></p><button class='popupbutton' id='copt1'>Cancel</button><button class='popupbutton' id='copt2'>Create New Calendar</button><button class='popupbutton' id='copt3'>Replace Current</button></div>");
    $(".conflictpopup").css("display", "none");
    $(".popupbutton").click(function() {
        $(".conflictpopup").css("display", "none");
        $(".atcbutton").prop("disabled", false);
    });
    
    // Inject sidebar HTML
    $(".original").after(sidebarHTML);
    
    // Enable accordion functionality for sidebar tabs
    $("#sidebar").accordion({
        animate: false       
    });

    // Adding the logo
    imageURL = chrome.extension.getURL('images/icon.png');
    $("#sidebar").prepend("<img id='cseIcon' src='" + imageURL + "' height='80' width='80'>");
    $("#cseIcon").after("<h3 class='iconTitle'>Course Selection<br>Sidebar</h3>");

    // Adding "More Info" and removing irrelevant information
    $("tr[align='center']").children("th:nth-child(13)").after("<th class='ddlabel' scope='row'>More Info</th>");
    $("tr[align='center']").children("th:nth-child(13)").remove();
    $("tr[align='center']").children("th:nth-child(12)").remove();
    $("tr[align='center']").children("th:nth-child(10)").remove();
    $("tr[align='center']").children("th:nth-child(9)").remove();
    $("tr[align='center']").children("th:nth-child(8)").remove();
    $("tr[align='left']").children("td:nth-child(13)").after("<td class='more'><a>More</a><div class='popup'><ul class='popupul'><li class='wl'></li><li class='rs'></li><li class='prm'></li><li class='cd'></li><li class='cg'></li></ul></div></td>");
    $("tr[align='left']").each(function(){
        var guide = $(this).children("td:nth-child(13)").children("a:nth-child(1)").attr("href");
        $(this).children("td:nth-child(13)").remove();
        var desc = $(this).children("td:nth-child(12)").children("a:nth-child(1)").attr("href");
        $(this).children("td:nth-child(12)").remove();
        var prm = $(this).children("td:nth-child(10)").text();
        $(this).children("td:nth-child(10)").remove();
        var resSeats = $(this).children("td:nth-child(9)").text();
        $(this).children("td:nth-child(9)").remove();
        var waitList = $(this).children("td:nth-child(8)").text();
        $(this).children("td:nth-child(8)").remove();
        $(this).find(".wl").text("Wait List: " + waitList);
        $(this).find(".rs").text("Reserved Seats: " + resSeats);
        $(this).find(".prm").text("Permission: " + prm);
        if(typeof desc === "undefined") $(this).find(".cd").text("No Description");
        else $(this).find(".cd").append("<a href='" + desc + "'>Description</a>");
        if(typeof guide === "undefined") $(this).find(".cg").text("No Guide");
        else $(this).find(".cg").append("<a href='" + guide + "'>Guide</a>");
    });
    $(".more").mouseover(function() {
        $(this).children(".popup").show();
    }).mouseout(function() {
        $(this).children(".popup").hide();
    });
    
    // ####################################################### CUSTOM SEARCH TAB FUNCTIONALITY #######################################################
    // Populate the given selectMenu with all the possible options for CCC requirements
    var fillCCCDropdown = function(selectMenu) {
        
        var opt = document.createElement('option');
        opt.text = 'ARHC (Arts and Humanities)';
        opt.value = 'ARHC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'AHLG (Arts and Humanities Learning Goals)';
        opt.value = 'AHLG';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'CBL (Community Based Learning)';
        opt.value = 'CBL';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'DUSC (Diversity in the U.S.)';
        opt.value = 'DUSC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'GLSP (Engineering Global and Societal Perspectives)';
        opt.value = 'GLSP';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'EGHU (Engineering Humanities)';
        opt.value = 'EGHU';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'EGSS (Engineering Social Science)';
        opt.value = 'EGSS';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'EVCN (Environmental Connections)';
        opt.value = 'EVCN';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'FRST (First Year Course)';
        opt.value = 'FRST';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'CCFL (Foreign Language)';
        opt.value = 'CCFL';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'FOUN (Foundation Seminar)';
        opt.value = 'FOUN';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'GBCC (Global Connections)';
        opt.value = 'GBCC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'IP (Integrated Perspectives)';
        opt.value = 'IP';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'LBSC (Lab Science)';
        opt.value = 'LBSC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'NSMC (Natural Science and Mathematics)';
        opt.value = 'NSMC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'NMLG (Natural Science and Mathematics Learning Goals)';
        opt.value = 'NMLG';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'CCQR (Quantitative Reasoning)';
        opt.value = 'CCQR';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'SL (Service Learning Course)';
        opt.value = 'SL';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'SLSC (Social Science)';
        opt.value = 'SLSC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'SSLG (Social Science Learning Goals)';
        opt.value = 'SSLG';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'W1 (Writing Level 1)';
        opt.value = 'W1';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'W2 (Writing Level 2)';
        opt.value = 'W2';
        selectMenu.add(opt);
    };
    
    // Populate the given selectMenu with all the possible options for Departments
    var fillDepartmentDropdown = function(selectMenu) {

        var opt = document.createElement('option');
        opt.text = 'ACFM (Acct & Financial Management)';
        opt.value = 'ACFM';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'ANBE (Animal Behavior)';
        opt.value = 'ANBE';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'ANTH (Anthropology)';
        opt.value = 'ANTH';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'ARBC (Arabic)';
        opt.value = 'ARBC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'ARTH (Art History)';
        opt.value = 'ARTH';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'ARST (Art Studio)';
        opt.value = 'ARST';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'ASTR (Astronomy)';
        opt.value = 'ASTR';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'BIOL (Biology)';
        opt.value = 'BIOL';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'BMEG (Biomedical Engineering)';
        opt.value = 'BMEG';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'OFFL (Bucknell London Semester)';
        opt.value = 'OFFL';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'OFFD (Bucknell en Esapana (Granada))';
        opt.value = 'OFFD';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'OFFF (Bucknell en France)';
        opt.value = 'OFFF';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'OFFAT (Bucknell in Athens)';
        opt.value = 'OFFAT';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'OFFDC (Bucknell in D.C.)';
        opt.value = 'OFFDC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'OFFGH (Buckenll in Ghana)';
        opt.value = 'OFFGH';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'CHEG (Chemical Engineering)';
        opt.value = 'CHEG';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'CHEM (Chemistry)';
        opt.value = 'CHEM';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'CHIN (Chinese)';
        opt.value = 'CHIN';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'CEEG (Civil & Environmental Engr.)';
        opt.value = 'CEEG';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'CLAS (Classics)';
        opt.value = 'CLAS';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'CSCI (Computer Science)';
        opt.value = 'CSCI';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'DANC (Dance)';
        opt.value = 'DANC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'EAST (East Asian Studies)';
        opt.value = 'EAST';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'ECON (Economics)';
        opt.value = 'ECON';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'EDUC (Education)';
        opt.value = 'EDUC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'ECEG (Electrical & Computer Engr.)';
        opt.value = 'ECEG';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'ENGR (Engineering)';
        opt.value = 'ENGR';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'ENGL (English)';
        opt.value = 'ENGL';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'ENST (Environmental Studies)';
        opt.value = 'ENST';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'FLMS (Film/Media Studies)';
        opt.value = 'FLMS';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'FOUN (Foundation Seminar)';
        opt.value = 'FOUN';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'FREN (French)';
        opt.value = 'FREN';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'GEOG (Geography)';
        opt.value = 'GEOG';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'GEOL (Geology)';
        opt.value = 'GEOL';
        selectMenu.add(opt);
    
        opt = document.createElement('option');
        opt.text = 'GRMN (German)';
        opt.value = 'GRMN';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'GLBM (Global Management)';
        opt.value = 'GLBM';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'GREK (Greek)';
        opt.value = 'GREK';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'HEBR (Hebrew)';
        opt.value = 'HEBR';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'HIST (History)';
        opt.value = 'HIST';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'HUMN (Humanities)';
        opt.value = 'HUMN';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'IDPT (Interdepartmental)';
        opt.value = 'IDPT';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'IREL (International Relations)';
        opt.value = 'IREL';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'ITAL (Italian)';
        opt.value = 'ITAL';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'JAPN (Japanese)';
        opt.value = 'JAPN';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'LATN (Latin)';
        opt.value = 'LATN';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'LAMS (Latin American Studies)';
        opt.value = 'LAMS';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'LEGL (Legal Studies)';
        opt.value = 'LEGL';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'LING (Linguistics)';
        opt.value = 'LING';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'MGMT (Management)';
        opt.value = 'MGMT';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'MSUS (Managing for Sustainability)';
        opt.value = 'MSUS';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'MIDE (Markets, Innovation & Design)';
        opt.value = 'MIDE';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'MATH (Mathematics)';
        opt.value = 'MATH';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'CHEM (Chemistry)';
        opt.value = 'CSCI';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'MATH';
        opt.value = 'MATH';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'MECH (Mechanical Engineering)';
        opt.value = 'MECH';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'MILS (Military Science)';
        opt.value = 'MILS';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'MUSC (Music)';
        opt.value = 'MUSC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'NEUR (Neuroscience)';
        opt.value = 'NEUR';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'OFFG (Nicaragua/Central America)';
        opt.value = 'OFFG';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'OCST (Off Campus Study)';
        opt.value = 'OCST';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'PHIL (Philosophy)';
        opt.value = 'PHIL';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'PHYS (Physics)';
        opt.value = 'PHYS';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'POLS (Political Science)';
        opt.value = 'POLS';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'PSYC (Psychology)';
        opt.value = 'PSYC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'RELI (Religion)';
        opt.value = 'RELI';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'RESC (Residential Colleges)';
        opt.value = 'RESC';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'RUSS (Russian)';
        opt.value = 'RUSS';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'SIGN (Sign Language)';
        opt.value = 'SIGN';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'SOCI (Sociology)';
        opt.value = 'SOCI';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'SPAN (Spanish)';
        opt.value = 'SPAN';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'THEA (Theatre)';
        opt.value = 'THEA';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = 'UNIV (University Course)';
        opt.value = 'UNIV';
        selectMenu.add(opt);

        opt = document.createElement('option');
        opt.text = "WMST (Women's and Gender Studies)";
        opt.value = 'WMST';
        selectMenu.add(opt);

    };
    
    var f0 = document.getElementById('f0'), 
        f1 = document.getElementById('f1'),
        f2 = document.getElementById('f2');
    
    // Change input field based on type of search: First drop-down menu (f0)
    f0.onclick = function() { 

        // Remove placeholder text entry field
        var form = document.getElementById('section1');
        var textbox = document.getElementById('q0');
        form.removeChild(textbox);

        // Search by Department - change input field to select menu
        if (f0.value === "department"){
            var selectMenu = document.createElement('select');
            selectMenu.setAttribute('size', '1');
            selectMenu.setAttribute('class', 'search-options');
            selectMenu.setAttribute('id', 'q0');
            form.appendChild(selectMenu);
            selectMenu = document.getElementById('q0');

            fillDepartmentDropdown(selectMenu);
        
        // Search by CCC - change input field to select menu
        } else if (f0.value === "CCC"){
            var selectMenu = document.createElement('select');
            selectMenu.setAttribute('size', '1');
            selectMenu.setAttribute('class', 'search-options');
            selectMenu.setAttribute('id', 'q0');
            form.appendChild(selectMenu);
            selectMenu = document.getElementById('q0');

            fillCCCDropdown(selectMenu);

        // Search by Time - set input field to formatted textbox (--:--_M)
        } else if (f0.value === "before-time" || f0.value === "after-time"){
            var timeEntry = document.createElement('input');
            timeEntry.setAttribute('type', 'time');
            timeEntry.setAttribute('class', 'searchBox');
            timeEntry.setAttribute('id', 'q0');
            form.appendChild(timeEntry);

        // Search by CRN/Instructor/Course/Title - set input field to textbox
        }  else if (f0.value === "CRN" || f0.value === "instructor" || 
                    f0.value === "course" || f0.value === "title"){
            var _combo = document.createElement('input');
            _combo.setAttribute('type', 'text');
            _combo.setAttribute('class', 'searchBox');
            _combo.setAttribute('id', 'q0');
            form.appendChild(_combo);
        }
    };

    // Change input field based on type of search: Second drop-down menu (f1)
    f1.onclick = function() {
        
        // Remove placeholder text entry field
        var form = document.getElementById('section2');
        var textbox = document.getElementById('q1');
        form.removeChild(textbox);

        // Search by Department - change input field to select menu
        if (f1.value === "department"){
            var selectMenu = document.createElement('select');
            selectMenu.setAttribute('size', '1');
            selectMenu.setAttribute('class', 'search-options');
            selectMenu.setAttribute('id', 'q1');
            form.appendChild(selectMenu);
            selectMenu = document.getElementById('q1');

            fillDepartmentDropdown(selectMenu);

        // Search by CCC - change input field to select menu
        } else  if (f1.value === "CCC"){
            var selectMenu = document.createElement('select');
            selectMenu.setAttribute('size', '1');
            selectMenu.setAttribute('class', 'search-options');
            selectMenu.setAttribute('id', 'q1');
            form.appendChild(selectMenu);
            selectMenu = document.getElementById('q1');

            fillCCCDropdown(selectMenu);
         
        // Search by Time - change input field to formatted textbox
        } else if (f1.value === "before-time" || f1.value === "after-time"){
            var timeEntry = document.createElement('input');
            timeEntry.setAttribute('type', 'time');
            timeEntry.setAttribute('class', 'searchBox');
            timeEntry.setAttribute('id', 'q1');
            form.appendChild(timeEntry);

        // Search by CRN/Instructor/Course/Title - change input field to textbox
        }  else if (f1.value === "CRN" || f1.value === "instructor" || 
                f1.value === "course" || f1.value === "title"){
            var _combo = document.createElement('input');
            _combo.setAttribute('type', 'text');
            _combo.setAttribute('class', 'searchBox');
            _combo.setAttribute('id', 'q1');
            form.appendChild(_combo);
        }
    };

    // Change input field based on type of search: Third drop-down menu (f2)
    f2.onclick = function() {

        // Remove placeholder text entry field
        var form = document.getElementById('asFieldRow2');
        var textbox = document.getElementById('q2');
        form.removeChild(textbox);

        // Search by Department - change input field to select menu
        if (f2.value === "department"){
            var selectMenu = document.createElement('select');
            selectMenu.setAttribute('size', '1');
            selectMenu.setAttribute('class', 'search-options');
            selectMenu.setAttribute('id', 'q2');
            form.appendChild(selectMenu);
            selectMenu = document.getElementById('q2');

            fillDepartmentDropdown(selectMenu);

        // Search by CCC - change input field to select menu
        } else if (f2.value === "CCC"){
            var selectMenu = document.createElement('select');
            selectMenu.setAttribute('size', '1');
            selectMenu.setAttribute('class', 'search-options');
            selectMenu.setAttribute('id', 'q2');
            form.appendChild(selectMenu);
            selectMenu = document.getElementById('q2');

            fillCCCDropdown(selectMenu);

        // Search by Time - change input field to formatted textbox
        } else if (f2.value === "before-time" || f2.value === "after-time"){
            var timeEntry = document.createElement('input');
            timeEntry.setAttribute('type', 'time');
            timeEntry.setAttribute('class', 'searchBox');
            timeEntry.setAttribute('id', 'q2');
            form.appendChild(timeEntry);

        // Search by CRN/Instructor/Course/Title - change input field to textbox
        }  else if (f2.value === "CRN" || f2.value === "instructor" || 
                    f2.value === "course" || f2.value === "title") {
            var _combo = document.createElement('input');
            _combo.setAttribute('type', 'text');
            _combo.setAttribute('class', 'searchBox');
            _combo.setAttribute('id', 'q2');
            form.appendChild(_combo);
        }
    }; 

    // Set up "Suggest a Course" button functionality
    //   (displays only courses that are open and do not conflict with the current schedule)
    document.getElementById('suggest-button').onclick = function() {
        var resultList = getSearchResults();
        var suggestResultList = {};
        var s = 0;
        var classObj;
        var i;
        for (var index in resultList) {
            classObj = resultList[index];
            var conflict = false;
            var cTimes = parseTime(classObj.time.substring(1, classObj.time.length - 1).split("|"));
            for (i in cTimes) {
                var cTime = cTimes[i];
                if (cTime.trim() !== "text" && $(cTime).css("background-color").trim() !== "rgb(255, 255, 255)") {
                    conflict = true;
                    break;
                }
            }
            if (!conflict && classObj.seatsAvail !== "Closed"){ 
                suggestResultList[s] = classObj;
                s += 1;
            }
        }
        updatePageResults(suggestResultList);
    };

    // Set up "Search" button functionality
    document.getElementById('search-button').onclick = function() {
        var resultList = getSearchResults();
        updatePageResults(resultList);
    };

    // Gets the results of the search based on the 3 fields 
    var getSearchResults = function() {

        var resultList = {};

        var searchType0 = document.getElementById('f0').value;
        var searchContent0 = document.getElementById('q0').value;
        var notBool0 = document.getElementById('not0').checked;

        var searchType1 = document.getElementById('f1').value;
        var searchContent1 = document.getElementById('q1').value;
        var notBool1 = document.getElementById('not1').checked;

        var searchType2 = document.getElementById('f2').value;
        var searchContent2 = document.getElementById('q2').value;
        var notBool2 = document.getElementById('not2').checked;

        var logical1 = document.getElementById('c1').value;
        var logical2 = document.getElementById('c2').value;

        var searchTerm = "";

        if (searchContent0 !== "") {    //do not search if the first field is empty
            if (searchContent1 !== "") {
                if (logical1 === "AND") {
                    if (searchContent2 !== ""){ //3 search conditions                   
                        if (logical2 === "AND"){ // AND - AND
                            resultList = andSearch(andSearch(searchOptions(searchType0, searchContent0, notBool0), searchOptions(searchType1, searchContent1, notBool1)), searchOptions(searchType2, searchContent2, notBool2));
                            searchTerm += formatSearchTerm(searchType0, searchContent0, notBool0) +  " AND " + formatSearchTerm(searchType1, searchContent1, notBool1) + " AND " + formatSearchTerm(searchType2, searchContent2, notBool2) ;
                        } else { // AND - OR
                            resultList = orSearch(andSearch(searchOptions(searchType0, searchContent0, notBool0), searchOptions(searchType1, searchContent1, notBool1)), searchOptions(searchType2, searchContent2,notBool2));
                            searchTerm += formatSearchTerm(searchType0 , searchContent0 , notBool0) +  " AND " + formatSearchTerm(searchType1, searchContent1, notBool1) + " OR " + formatSearchTerm(searchType2, searchContent2, notBool2) ;
                        }
                    } else { // AND (2 search conditions)
                        resultList = andSearch(searchOptions(searchType0, searchContent0, notBool0), searchOptions(searchType1, searchContent1, notBool1));
                        searchTerm += formatSearchTerm(searchType0 , searchContent0 , notBool0) +  " AND " + formatSearchTerm(searchType1 ,searchContent1 ,notBool1) ;
                    }
                } else { // OR
                    if (searchContent2 !== ""){ //3 search conditions
                        if (logical2 === "AND"){ // OR - AND
                            resultList = andSearch(orSearch(searchOptions(searchType0, searchContent0, notBool0), searchOptions(searchType1, searchContent1, notBool1)), searchOptions(searchType2, searchContent2, notBool2));
                            searchTerm += formatSearchTerm(searchType0, searchContent0, notBool0) +  " OR " + formatSearchTerm(searchType1 , searchContent1 , notBool1) + " AND " + formatSearchTerm(searchType2, searchContent2 , notBool2) ;
                        } else { // OR - OR
                            resultList = orSearch(orSearch(searchOptions(searchType0, searchContent0, notBool0), searchOptions(searchType1, searchContent1, notBool1)), searchOptions(searchType2, searchContent2, notBool2));
                            searchTerm += formatSearchTerm(searchType0 , searchContent0 , notBool0) +  " OR " + formatSearchTerm(searchType1 ,searchContent1 , notBool1) + " OR " + formatSearchTerm(searchType2 ,searchContent2 , notBool2 );
                        }
                    } else { // OR (2 search conditions)

                        resultList = orSearch(searchOptions(searchType0, searchContent0, notBool0), searchOptions(searchType1, searchContent1, notBool1));
                        searchTerm += formatSearchTerm(searchType0 ,searchContent0 ,notBool0) +  " OR " + formatSearchTerm(searchType1, searchContent1, notBool1);
                    }
                }
            } else { //1 search condition
                resultList = searchOptions(searchType0, searchContent0);
                searchTerm += formatSearchTerm(searchType0, searchContent0, notBool0) ;
            }
        }

        $("h4:first").next().text("LOOKUP CRITERIA: " + searchTerm);
        return resultList;
    };

    // Format the entered search for the 'LOOKUP CRITERIA' at the top of the webpage
    var formatSearchTerm = function(searchType, searchContent, notBool) {
      if (searchType === "before-time"){
        if (notBool) {
          return " NOT BEFORE " + searchContent;
        } else {
          return " BEFORE " + searchContent;
        }
      } else if (searchType === "after-time") {
        if (notBool) {
          return " NOT AFTER " + searchContent;
        } else {
          return " AFTER " + searchContent;
        }
      } else {
        if (notBool) {
          return searchType + " NOT " + searchContent;
        } else {
          return searchType + " = " + searchContent;
        }
      }
    };

    // Fill the page with the results from custom search
    var updatePageResults = function(resultList) {

        var x;
        var addedCRNs = [];
        $("tr[align='left']").remove();
        for (x in resultList) {
            var course = resultList[x];

            var curCRN = course.CRN;
            if (addedCRNs.indexOf(curCRN) < 0) {   //this course has not been added yet
                
                addedCRNs.push(curCRN);
                var tr = "<tr align='left'>";
                tr += "<td class='dddefault'>" + course.CRN + "</td>";
                tr += "<td nowrap class='dddefault'>" + course.course + "</td>";
                tr += "<td class='dddefault'>" + course.title + "</td>";
                tr += "<td nowrap class='dddefault'>" + "\n" + course.time.split('|').slice(1, -1).join("\n<br>") + "\n" + "</td>";
                tr += "<td nowrap class='dddefault'>" + course.room.split('|').slice(1, -1).join("<br>") + "</td>";
                tr += "<td class='dddefault'>" + course.instructor + "</td>";
                tr += "<td class='dddefault'> <p class='rightaligntext'>" + course.seatsAvail + "</p></td>";
                tr += "<td class='dddefault'>" + course.CCC + "</td>";
                tr += "<td class='more'><a>More</a><div class='popup'><ul class='popupul'>";
                tr += "<li class='wl'>Wait List: " + course.waitList + "</li>";
                tr += "<li class='rs'>Reserved Seats: " + course.seatsRes + "</li>";
                tr += "<li class='prm'>Permission: " + course.prm + "</li>";
                if (course.descLink !== "NONE") tr += "<li class='cd'><a href='" + course.descLink + "'>Description</a></li>";
                else tr += "<li class='cd'>No Description</li>";
                if (course.guideLink !== "NONE") tr += "<li class='cg'><a href='" + course.guide + "'>Guide</a></li>";
                else tr += "<li class='cg'>No Guide</li>";
                tr += "</ul></div></td>";
                tr += "<td class='dddefault'><form action='https://securex.bncollege.com/webapp/wcs/stores/servlet/TBListView?cm_mmc=RI-_-737-_-A-_-1' method='POST' target='_blank'>";
                tr += "<input type='hidden' name='termMapping' value='N'>";
                tr += "<input type='hidden' name='catalogId' value='10001'>";
                tr += "<input type='hidden' name='storeId' value='63056'>";
                var value = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><textbookorder><school id=\"63056\" /><courses><course dept=\"" + course.course.split(" ")[0] + "\" num=\"" + course.course.split(" ")[1] + "\" sect=\"" + course.course.split(" ")[2] + "\" term=\"" + course.bookTerm + "\"/></courses></textbookorder>";
                tr += "<input type='hidden' name='courseXml' value='" + value + "'>";
                tr += "<input type='submit' value='Books' class='button'></form></td>";
                tr += "</tr>";
                $("#coursetable tbody").append(tr);
            
            }
        }

        $(".more").mouseover(function() {
            $(this).children(".popup").show();
        }).mouseout(function() {
            $(this).children(".popup").hide();
        });

        addATC();
        addButtonListener();

    };

    // Calls the appropriate search function based on the input from the user 
    var searchOptions = function(type, content, notBool) {
        if (!notBool){
            switch (type) {
                case "CRN":
                    return CRNSearch(content, exClasses);
                    break;
                case "CCC":
                    return CCCSearch(content, exClasses);
                    break;
                case "course":
                    return courseSearch(content, exClasses);
                    break;
                case "title":
                    return titleSearch(content, exClasses);
                    break
                case "instructor":
                    return instructorSearch(content, exClasses);
                    break;
                case "department":
                    return departmentSearch(content, exClasses);
                    break;
                case "before-time":
                    return timeSearch([false, content], exClasses);
                    break;
                case "after-time":
                    return timeSearch([true, content], exClasses);
                    break;
                default:
                    var noSearch = {};
                    return noSearch;
                    break;
            }
        } else { //NOT has been checked - notBool = true
            switch (type) {
                case "CRN":

                    return notSearch(CRNSearch(content, exClasses), exClasses);
                    break;
                case "CCC":
                    return notSearch(CCCSearch(content, exClasses), exClasses);
                    break;
                case "course":
                    return notSearch(courseSearch(content, exClasses), exClasses);
                    break;
                case "title":
                    return notSearch(titleSearch(content, exClasses), exClasses);
                    break
                case "instructor":
                    return notSearch(instructorSearch(content, exClasses), exClasses);
                    break;
                case "department":
                    return notSearch(departmentSearch(content, exClasses), exClasses);
                    break;
                  case "before-time":
                    return notSearch(timeSearch([false, content], exClasses), exClasses);
                    break;
                case "after-time":
                    return notSearch(timeSearch([true, content], exClasses), exClasses);
                    break;
                default:
                    var noSearch = {};
                    return noSearch;
                    break;
            }
        }
    }; 
    
    //  ####################################################### MULTIPLE CALENDARS FUNCTIONALITY #######################################################
    var currentCalendar = 0;
    var storage = chrome.storage.sync;

    // Checking for first time user
    storage.get(function(result) {
        if(Object.keys(result).length === 0) {
            storage.set({0:{}});
            clearStorage();
        }
    });

    // Updates value of ATC button ("Add to Calendar" or "Remove")
    var updateBtnVals = function() {
        storage.get(function(result){
            var courses = result[currentCalendar];
            var crns = [];
            var i;
            for(i in courses) {
               crns.push(courses[i].CRN);
            }
            $("tr[align='left']").each(function() {
                var td = $(this);

                var crn = $(this).children()[0].textContent;
                if(crns.indexOf(crn) >= 0) {
                    td.children(".atcbutton").val("Remove");
                }
                else {
                    td.children(".atcbutton").val("Add to Calendar");
                }
            });
        });
    };

    // Add existing courses to the calendar
    var updateCalendar = function() {
        $(".timebox").css("background-color","white");
        $(".timebox").not(".th").not(".timeslot").text("");
        storage.get(function(result){
            
            // Selected from Bucknell's Brand Colors - 
            // http://www.bucknell.edu/communications/tools-and-resources/guidelines-and-policies/graphics-standards/bucknell-brand-colors.html
            var colors = ["#EA760A", "#FECA3D", "#9F1926", "#561857", "#0090B8", "#005E2C", "#CDD57B", "#A08326"];
            
            var courses = result[currentCalendar];
            var i;
            var colorIndex = 0;
            for(i in courses) {
                var course = courses[i];
                if(isNaN(Number(course))) {
                    var courseColor = colors[colorIndex%8];
                    colorIndex += 1;
                    var courseTime = course.time.substring(1, course.time.length - 1).split("|");
                    var divs = parseTime(courseTime);

                    var div;
                    var text = false;
                    var num = false;
                    for(div in divs) {
                        var id = divs[div];
                        if(id[0] === "#") {
                            $(id).css("background-color",courseColor);
                            if(text) {
                                $(id).text(course.course.split(" ")[0]);
                                num = true;
                                text = false;
                            }
                            else if(num) {
                                $(id).text(course.course.split(" ")[1]);
                                num = false;
                            }
                        }
                        else {
                            text = true;
                        }
                   }

                }
            }
            updateCRN();    // Update CRN every time a course is added
            updateBtnVals();
        });
    };

    updateCalendar();

     // Add existing courses to the calendar
    var updateCRN = function() {
        $("#CRN").empty();
        storage.get(function(result){
            var courses = result[currentCalendar];
            var i;
            for(i in courses) {
                var course = courses[i];
                if(isNaN(Number(course))) {
                    var courseCRN = "<p class='pCRN'>" + i + " - " + course.title + "</p>";
                    $("#CRN").append(courseCRN);
                }
            }
        });
    };

    // Clears the sync storage of current callendar
    var clearStorage = function() {
        storage.get(function(result) {
            result[currentCalendar] = {};
            storage.set(result, function() {
                updateCalendar();
                updateCalHeader();
            });
        });
    };

    // Prints the sync storage object (FOR DEBUGGING)
    var printStorage = function() {
        storage.get(function(result){console.log(result);});
    };

    $('#clear').click(function(){
        storage.get(function(result) {
            if(Object.keys(result).length === 1) {
                clearStorage();
            }
            else {
                var len = Object.keys(result).length;
                for(var i = currentCalendar; i < len - 1; i++) {
                    result[i] = result[i+1];
                }
                if(currentCalendar === (len -1)) {
                    currentCalendar = currentCalendar - 1;
                }
                storage.set(result, function() {
                    storage.remove((len-1).toString(), function() {
                        updateCalHeader();
                        updateCalendar();
                    });
                   
                });
            }
        });
    });
    
    // Set up "Next" button
    $("#next").click(function(){
        nextCalendar();
    });   
    
    // Switch to next calendar
    var nextCalendar = function() {
        storage.get(function(result) {
            if (Object.keys(result[currentCalendar]).length !== 0 || Object.keys(result).length - 1 !== currentCalendar) {
                updateObj(currentCalendar + 1);
                var obj = {};
                obj[currentCalendar] = {};
                $.extend(true,result,obj);
                storage.set(result, function() { updateCalendar();});
            } 
            updateCalHeader();
        });
    };
    // Set up "Previous" button to switch to previous calendar
    $("#prev").click(function(){
        storage.get(function(result) {
            if(currentCalendar !== 0) {
                updateObj(currentCalendar  - 1 );
                storage.set(result, function() { updateCalendar();});
            }
            updateCalHeader();
        });
    });

    // Updates the calendar header as well as clear/remove button
    var updateCalHeader = function() {
        storage.get(function(result) {
           var numCalendars = Object.keys(result).length; 
           var calHead = "Calendar (" + (currentCalendar + 1) + "/" + numCalendars + ")";
           $(".ui-accordion-header ").first().text(calHead);
           if(numCalendars === 1) {
               $("#clear").text("Clear");
           }
           else {
               $("#clear").text("Remove");
           }
        });   
    };
    updateCalHeader();

    // Displays course information on the webpage for courses on the current calendar
    $("#display").click(function(){
        storage.get(function(result) {
            updatePageResults(result[currentCalendar]);
            updateCalendar();
        });
    });

    var updateObj = function(newCurrent) {
        currentCalendar = newCurrent;
    };

    // Calculates the difference between two time strings assuming they are in
    // intervals of 30 and that both times are in the same day
    var timeDifference = function(sh, sm, eh, em) {
        var startHour = Number(sh);
        var startMinute = Number(sm);
        var endHour = Number(eh);
        var endMinute = Number(em);
        startHour = (startHour > endHour) ? 0 - (12 - startHour) : startHour;
        var difference;

        if(startHour === endHour && startMinute === endMinute) return 0;
        else if(startHour === endHour && startMinute !== endMinute) return 0.5;
        else {
            difference = endHour - startHour;
            if(startMinute === endMinute) return difference;
            else if(startMinute > endMinute) return difference - 0.5;
            else return difference + 0.5;
        }
    };

    // Adds one hour to a string number
    var addOneHour = function(h) {
        var hour = Number(h);
        hour = (hour === 12) ? 1 : hour + 1;
        return hour.toString();
    };

    // Parses an array of time strings and returns an array of strings corresponding to the
    // ids of the div elements for that time string.
    // Accepts an "New text!"array of time strings in the form: ["TR 9:30-10:52am", "T 11:00-11:52am"]
    var parseTime = function(timeStrings) {
        var i;
        var divs = [];
        for (i in timeStrings) {
            var timeString = timeStrings[i].split(" ");
            if(timeString.indexOf("TBA") === -1) {
                var days = timeString[0];
                var times = timeString[1];
                var char, prefix, startHour, startMinute, endHour, endMinute, ampm;
                for (char in days){
                    var day = days[char];
                    switch (day) {
                        case "M":
                            prefix = "#mon";
                            break;
                        case "T":
                            prefix = "#tues";
                            break;
                        case "W":
                            prefix = "#wed";
                            break;
                        case "R":
                            prefix = "#thurs";
                            break;
                        case "F":
                            prefix = "#fri";
                            break;
                    }
                    var start = times.split("-")[0];
                    startHour = start.split(":")[0];
                    startMinute = (start.split(":")[1] === "30") ? "30" : "";
                    var end = times.split("-")[1].substring(0, times.split("-")[1].length - 2);
                    endHour = end.split(":")[0];
                    var eM = end.split(":")[1];
                    if(eM === "52") {
                        endMinute = "";
                        endHour = (endHour === "12") ? "1" : (Number(endHour) + 1).toString();
                    }
                    else {
                        endMinute = "30";
                    }
                    ampm = times.split("-")[1].slice(-2).toUpperCase();

                    // use this timeDifference value to figure out the middle
                    // to put the course name
                    var td = timeDifference(startHour, startMinute, endHour, endMinute);

                    var mid = Math.floor(td);

                    while(td !== 0) {
                        if(startHour === endHour && startMinute === endMinute) break;
                        if(td*2 === mid + 1) {
                            divs.push("text");
                        }
                        if (ampm === "PM" &&
                           (Number(startHour) > Number(endHour) || Number(endHour) === 12) &&
                           Number(startHour) !== 12) {
                            divs.push(prefix + startHour + startMinute + "AM");
                        }
                        else {
                            divs.push(prefix + startHour + startMinute + ampm);
                        }

                        if(startMinute === "30") {
                            startMinute = "";
                            startHour = addOneHour(startHour);
                        }
                        else startMinute = "30";
                        td = timeDifference(startHour, startMinute, endHour, endMinute);
                    }
                }
            }
        }
        return divs;
    };

    var globalNewObj = {};
    
    var lastObj = {};
    var conflictingCRNs = [];

    // Clicking on "Add to Calendar" will create a course object of the current
    // class and then add that object to chrome's sync storage.
    // Clicking on "Remove" will remove that course object from the storage.
    var addButtonListener = function() {
        $(".atcbutton").click(function(){
            var atcButton = $(this);
            storage.get(function(result) {
                if(atcButton.val() === "Add to Calendar") {

                    var tds = atcButton.parent("tr").children();
                    var classObj = {};
                    classObj.CRN = tds[0].textContent.trim();
                    classObj.course = tds[1].textContent.trim();
                    classObj.title = tds[2].textContent.trim();
                    classObj.time = tds[3].textContent.replace(/\n/g, "|");
                    classObj.room = tds[4].textContent.replace(/\n/g, "|");
                    classObj.instructor = tds[5].textContent.replace(/\n/g, "");
                    classObj.seatsAvail = tds[6].textContent.trim();
                    classObj.waitList = tds[7].textContent.trim();
                    classObj.seatsRes = tds[8].textContent.trim();
                    classObj.prm = tds[9].textContent.trim();
                    classObj.CCC = tds[10].textContent.trim();

                    lastObj = jQuery.extend(true, {}, classObj);


                    var conflict = false;
                    var cTimes = parseTime(classObj.time.substring(1, classObj.time.length - 1).split("|"));
                    for (var cur in Object.keys(result[currentCalendar])) {
                        var crn = Object.keys(result[currentCalendar])[cur];
                        var tempTimes = parseTime(result[currentCalendar][crn].time.substring(1, result[currentCalendar][crn].time.length - 1).split("|"));

                        for (var aTime in tempTimes){
                            var tempTime = tempTimes[aTime];

                            for (var i in cTimes) {
                                var cTime = cTimes[i];
                                if(tempTime === cTime && tempTime !== "text" && cTime !== "text") {
                                    conflictingCRNs.push(crn);
                                    $(".conflictpopup").css("display", "block");  
                                    $(".atcbutton").prop("disabled", true);
                                    $(".popupmessage").text("Cannot add " + classObj.course + " because another class is already scheduled for that time. Would you like to replace the conflicting course in your calendar, create a new calendar with this course instead of the conflicting course, or cancel?");
                                    conflict = true;

                                    break;
                                }
                            }
                        }
                    }

               
                    if(!conflict) {
                        storage.get(function(result){
                            result[currentCalendar][classObj.CRN] = classObj;
                            storage.set(result, function() {
                                updateCalendar();
                            });
                        });
                    }
                }
                else if(atcButton.val() === "Remove") {
                    var crn = atcButton.parent("tr").children()[0].textContent;
                    delete result[currentCalendar][crn];
                    storage.set(result, function() {
                        updateCalendar();
                    });
                }
            });

       });
   }; addButtonListener();

   // ####################################################### CONFLICT RESOLUTION FUNCTIONALITY #######################################################
   // "Cancel" option
    $("#copt1").click(function(){
        conflictingCRNs.length = 0;
    });

    // "New Calendar" option
    $("#copt2").click(function(){
        storage.get(function(result) {
            var origCalendar = jQuery.extend(true, {}, result[currentCalendar]);
            currentCalendar = Object.keys(result).length;
            
            if ($.isEmptyObject(result[currentCalendar - 1])) {
                currentCalendar--;
            };
            
            var obj = {};
            obj[currentCalendar] = origCalendar;

            $.extend(true,result,obj);

            //delete conflict
            for (var i = 0; i < conflictingCRNs.length; i++){
                delete origCalendar[conflictingCRNs[i]];
            }
            conflictingCRNs.length = 0;
            origCalendar[lastObj.CRN] = lastObj;
            result[currentCalendar] =jQuery.extend(true, {}, origCalendar);
            storage.set(result, function() {
                updateCalendar();
                updateCalHeader();
            });
            
        });
    });

    // "Update Current Calendar" option 
    $("#copt3").click(function(){
        storage.get(function(result){
            for (var i = 0; i < conflictingCRNs.length; i++){
                delete result[currentCalendar][conflictingCRNs[i]];
            }
            conflictingCRNs.length = 0;
            result[currentCalendar][lastObj.CRN] = lastObj;
            storage.set(result, function() {
                updateCalendar();
                updateCalHeader();
            });
        });
        
    });
   
    // ####################################################### EXPORT TO .CSV FUNCTIONALITY #######################################################
   
    // http://stackoverflow.com/questions/21012580/is-it-possible-to-write-data-to-file-using-only-javascript
    // Compile schedule data into an ObjectURL, return the URL used to download it
    var schedule_data = null, make_file = function(schedule_data) {
        
        var blob = new Blob([schedule_data], {type: 'text/plain'});
        if ( schedule_data !== null ) {
            window.URL.revokeObjectURL(blob);
        }
        url = window.URL.createObjectURL(blob);
        return url;
    };

    // Converts String time to int hours; time passed as "--:--_M"
    function toHours(time) {
	var offset = 1200;
        var chunks = time.split(":");
        var ampm = chunks[1].substring(2,4);
        var temp_str = chunks[0]+chunks[1].substring(0,2);
 
        // AM time
	if ( ampm.toLowerCase()==="am" ) {
            if (temp_str==="1200") {
                return 0;
            } else {
                return parseInt(temp_str);
            }
        } else { // PM time
            if (parseInt(temp_str)>=1200 && parseInt(temp_str)<1300) {
                return parseInt(temp_str);
            } else {
                return offset + parseInt(temp_str);
            }
	}
    }

    // Converts int hours to String time
    function toTime(hrs) {
	var temp = hrs.toString();
        var length = temp.length;
        var time;
        
        if (length===1) {
            time = "12:0" + temp + "am";
        } else if (length===2) {
            time = "12:" + temp + "am";
        } else if (length===3) {
            time = temp.substring(0,1) + ":" + temp.substring(1,3) + "am";
        } else if (length===4) {
            if (hrs>1200) {
                hrs-=1200;
                temp = hrs.toString();
                time = temp.substring(0,1) + ":" + temp.substring(1,3) + "pm";
            } else if (hrs===1200) {
                time = "12:00pm";
            } else {
                time = temp.substring(0,2) + ":" + temp.substring(2,4) + "am";
            }
        }
	return time;
    }

    // Returns the int timeslot of calendar index i (i=0 > upper left corner, i+1 = next column, same row, i+6=next row, same column)
    function getTimeslotHrsOf(i) {
	var hrs = 8;
        var row = Math.floor(i/6);
        var end = "00";
        if (row%2===1) {
            end = "30";
        }
        hrs += Math.floor(row/2);
        var time = hrs.toString() + end;
        time = parseInt(time);
	return time;
    }

    // Course object: .course eg: "CSCI 203 02", "CSCI 203 01", "CSCI 206L 60" ; .time eg: "|MWF 2:00-2:52pm|", "|MWF 11:00-11:52am|", "|T 10:00-11:52am|"
    // Returns an array of course sessions, each session formatted as: [course title, day, start hrs, end hrs]
    function getCourseSessions(course) {
        var sessions = [];
        var temp = course.time.substring(1,course.time.length-1); // trim outer '|'s
        
        // Handles courses with multiple time listings like "|MWF 11:00-11:52am|W 7:00-7:52pm|" and removes "|"s from around time otherwise
        var items = temp.split("|"); 
        for ( var sesh in items ) {
            var item = items[sesh];
            var days = item.split(" ")[0];
            var time = item.split(" ")[1];
            var chunks = time.split("-");
            var ampm = chunks[1].substring(chunks[1].length-2,chunks[1].length);
            var start;
            var end = toHours(chunks[1]);
            var temp_strs = chunks[0].split(":");
	    var temp_str = temp_strs[0]+temp_strs[1];
            
            // Class ends in PM
            if (ampm.toLowerCase()==="pm") {
                
                // class begins at 12:00pm
                if ( toHours(chunks[0]+"am")===0 ) {
                    start = 1200;
                } else if ( toHours(chunks[0]+"pm") > toHours(chunks[1]) ) { // class begins in AM
                    start = toHours(chunks[0]+"am");
                } else {
                    start = toHours(chunks[0]+"pm");
                }
            }
            
            // Class ends in AM
            if (ampm.toLowerCase()==="am") {
                start = toHours(chunks[0]+ampm);
            }
            
            for ( var i=0; i<days.length; i++ ) {
                var array_item = [course.course, days.substring(i,i+1), start, end];
                sessions.push(array_item);
            }
        }
        return sessions;
    }
    
    // Build schedule as string to be exported to .CSV
    function collectData(courses) {
        
        var data = "Time,Monday,Tuesday,Wednesday,Thursday,Friday\n";
        var sessions = [];
        var temp = [];
        for ( var i in courses ) {
            temp = getCourseSessions(courses[i]);
            for ( var j in temp ) {
                sessions.push(temp[j]);
                //console.log(temp[j]);
            }
        }
        // 28 rows * 6 columns = 168
        for ( var i=0; i<168; i++ ) {
	    var timeslot = getTimeslotHrsOf(i);
            if ( i%6===0 ) {
                if ( i%12===0 ) {
                    data += toTime(timeslot);
                }
	    } else {
        
	        for ( var j in sessions ) { // iterate through list of sessions yet to be placed
                    var start = sessions[j][2];
                    var end = sessions[j][3];
                    
                    // if row's timeslot matches session's timeslot
		    if ( timeslot>=start && timeslot<=end ) { 
                        // if column's index corresponds to session's day 
                        if ( (sessions[j][1]==="M" && i%6===1) || (sessions[j][1]==="T" && i%6===2) ||
                             (sessions[j][1]==="W" && i%6===3) || (sessions[j][1]==="R" && i%6===4) ||
                             (sessions[j][1]==="F" && i%6===5) ) {
                            data += sessions[j][0].substring(0, sessions[j][0].length-3);
                            break;
                        }
                    }
	        }
	    }
            
	    if (i%6===5) {
		data += "\n";
	    } else {
		data += ",";
	    }
	}
        return data;
    }
    
    // Set up "Export to .CSV" button
    document.getElementById("export-button").onclick = function () {
        storage.get( function(result) {
            var link = document.createElement("a"); 
            link.download = "ScheduleData.csv";
            var data = collectData(result[currentCalendar]);
            link.href = make_file(data);
            link.click();
        });
    };
    
    // ############################################################## SEARCH LOGIC ##############################################################
    /*
    * Every search function in here returns in one of two ways: a objectionary if successful, an empty objectionary if not
    */
   
    $.getJSON("https://api.myjson.com/bins/3vg1s", function(response) {
        exClasses = response;
    });

    // Search the given list of classes, return class whose CRN matches searchTerm
    var CRNSearch = function(searchTerm, classes) {
        var returnObject = {};
        for ( var i = 0; i < Object.keys(classes).length; i++ ) {
            if (classes[i].CRN === searchTerm) {
                returnObject[Object.keys(returnObject).length] = classes[i];
                //break b/c only one possible term should be in the objectionary
                break;
            }
        }
        return returnObject;
    };

    // Search given list of classes, return all classes taught by instructor(s) matching searchTerm
    var instructorSearch = function(searchTerm, classes) {
        var names = searchTerm.split(" ");
        var temp = searchTerm.split(" ");
        var returnObject = {};
        var teacherNames;
        for ( var j = 0; j < names.length; j++ ) {
            names[j] = names[j].toLowerCase();
            returnObject = {};
            for ( var i = 0; i < Object.keys(classes).length; i++ ) {
                teacherNames = classes[i].instructor.split(" ");
                temp = false;
                for ( var q = 0; q < teacherNames.length; q++ ) {
                    teacherNames[q] = teacherNames[q].toLowerCase();

                    if (teacherNames[q].indexOf(names[j]) !== -1) {
                        temp = true;
                    }
                }
                if (temp) {
                    returnObject[Object.keys(returnObject).length] = classes[i];
                }
            }
            classes = returnObject;
        }
        return returnObject;
    };

    // Search given list of classes, return all classes fulfilling the given CCC requirement
    var CCCSearch = function(searchTerm, classes) {
        var returnObject = {};
        for ( var i = 0; i < Object.keys(classes).length; i++ ) {
            if (classes[i].CCC.indexOf(searchTerm) > -1) {
                returnObject[Object.keys(returnObject).length] = classes[i];
            }
        }
        return returnObject;
    };

    // Parses a time given as string and returns an equivalent date object
    //http://stackoverflow.com/questions/141348/what-is-the-best-way-to-parse-a-time-into-a-date-object-from-user-input-in-javas
    var parseTimeString = function (timeString) {
        if (timeString === '') return null;
        var time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i);
        if (time === null) return null;

        var hours = parseInt(time[1],10);
        if (hours === 12 && !time[4]) {
              hours = 0;
        }
        else {
            hours += (hours < 12 && time[4])? 12 : 0;
        }
        var d = new Date();

        d.setHours(hours);
        d.setMinutes(parseInt(time[3],10) || 0);
        d.setSeconds(0, 0);
        return d;
    };


    //search term is an array containing 2 values, first a truth value of if its classes after a time (true)
    //or classes before a time (false), and then a time in military hours.
    var timeSearch = function(searchTerm, classes) {
        var returnObject = {};
        var timeStart;
        var timeEnd;
        var barSpots;
        var dashSpots;
        var timeString;
        var temp = searchTerm[1].split(":");
        if (parseInt(temp[0]) < 12 ) {
            searchTerm[1] += "am";
        } else {
            searchTerm[1] += "pm";
        }

        var searchTime = parseTimeString(searchTerm[1]);

        for ( var i = 0; i < Object.keys(classes).length; i++ ) {
            barSpots = [];
            dashSpots = [];

            for (var j = 0; j < classes[i].time.length; j++) {
                if (classes[i].time.charAt(j) === "|") {
                    barSpots.push(j);
                } else if (classes[i].time.charAt(j) === "-") {
                    dashSpots.push(j);
                }
            }
            //really annoying string parsing
            timeString = classes[i].time;
            for (var q = 0; q < barSpots.length - 1; q++) {
                if (timeString.indexOf("TBA") !== -1) {
                    break;
                }
                //given something like this: |MWF 2:00-2:52pm|R 7:00-7:52pm|, this next line will give
                //parseTimeString the string: MWF 2:00pm on the first pass through, and U 7:00pm on the second pass through
                timeStart = parseTimeString(timeString.substring(barSpots[q],dashSpots[q]).concat(timeString.substring(barSpots[q+1]-2,barSpots[q+1])));

                //given something like this: |MWF 2:00-2:52pm|R 7:00-7:52pm|, this next line will give
                //parseTimeString the string 2:52pm on the first pass through, and 7:52pm on the second pass through
                timeEnd = parseTimeString(timeString.substring(dashSpots[q], barSpots[q + 1]));

                //if time end or start = null, that means the time was "|TBA|", so not applicable to this search
                if (timeEnd === null || timeStart === null) {
                    break;
                }

                //catches cases that think 11-12pm is 11pm to 12 pm
                if (timeEnd.getHours() < timeStart.getHours()) {
                    timeStart.setHours(timeStart.getHours() - 12);
                }

                //if the start time is before the desired time, put in false class list
                if (!searchTerm[0]) {
                    //BEFORE CASE
                    if (timeEnd.getHours() < searchTime.getHours() ) {
                        returnObject[Object.keys(returnObject).length] = classes[i];
                        break;
                    } else if (timeEnd.getHours() === searchTime.getHours() ){
                        if (timeEnd.getMinutes() < searchTime.getMinutes() ) {
                            returnObject[Object.keys(returnObject).length] = classes[i];
                            break;
                        }

                    }
                } else {
                    //AFTER CASE
                    if (timeStart.getHours() > searchTime.getHours() ) {
                        returnObject[Object.keys(returnObject).length] = classes[i];
                        break;
                    } else if (timeStart.getHours() === searchTime.getHours() ){
                        if (timeStart.getMinutes() > searchTime.getMinutes() ) {
                            returnObject[Object.keys(returnObject).length] = classes[i];
                            break;
                        }
                    }
                }
            }
        }
        return returnObject;
    };

    // Search the given classes, return all classes with .course attr matching searchTerm
    var courseSearch = function(searchTerm, classes) {
        var returnObject = {};
        for ( var i = 0; i < Object.keys(classes).length; i++ ) {
            if (classes[i].course.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                returnObject[Object.keys(returnObject).length] = classes[i];
            }
        }
        return returnObject;
    };

    // Search the given classes, return all classes in the given department
    var departmentSearch = function(department, classes) {
        var returnObject = {};
        for ( var i = 0; i < Object.keys(classes).length; i++ ) {
            if (classes[i].course.indexOf(department) !== -1) {
                returnObject[Object.keys(returnObject).length] = classes[i];
            }
        }
        return returnObject;
    };

    // Search the given classes, return all classes matching the given title
    var titleSearch = function(searchTerm, classes) {
        var returnObject = {};
        for ( var i = 0; i < Object.keys(classes).length; i++ ) {
            if (classes[i].title.toUpperCase() === searchTerm.toUpperCase()) {
                returnObject[Object.keys(returnObject).length] = classes[i];
            }
        }
        return returnObject;
    };

    // "AND" functionality - combines two parameters in search
    var andSearch = function(object1, object2) {

        var returnObject = {};

        for ( var i = 0; i < Object.keys(object1).length; i++ ) {
            for ( var q = 0; q < Object.keys(object2).length; q++ ) {
                if(object1[i].CRN === object2[q].CRN) {
                    returnObject[Object.keys(returnObject).length] = object1[i];
                }
            }
        }
        return returnObject;
    };

    // "OR" functionality - combines two parameters in search
    var orSearch = function(object1, object2) {
        var isIn;
        for ( var i = 0; i < Object.keys(object1).length; i++ ) {
            isIn = true;
            for ( var q = 0; q < Object.keys(object2).length; q++ ) {
                if(object1[i].CRN === object2[q].CRN) {
                    isIn = true;
                    break;
                } else {
                    isIn = false;
                }
            }
            if (isIn === false) {
                object2[Object.keys(object2).length] = object1[i];
            }
        }
        return object2;
    };

    // "NOT" functionality - searches for the negated criteria
    var notSearch = function(object1, masterObject) {
        var isIn;
        var object2 = {};
        for ( var i = 0; i < Object.keys(masterObject).length; i++ ) {
            isIn = true;

            for ( var q = 0; q < Object.keys(object1).length; q++ ) {
                if(object1[q].CRN === masterObject[i].CRN) {
                    isIn = true;
                    break;
                } else {
                    isIn = false;
                }
            }
            if (isIn === false) {
                object2[Object.keys(object2).length] = masterObject[i];
            }
        }
        return object2;
    };

});
