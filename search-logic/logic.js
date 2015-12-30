
// Small Sample 
//{0:{CRN:"17153",course:"ACFM 220 01",title:"Business Law I",time:"|MWF 2:00-2:52pm|R 7:00-9:52pm|",room:"|TAYL 113||",instructor:"Brann, Paul W.",seatsAvail:"Closed",seatsRes:"",prm:"",CCC:"SLSC"},1:{CRN:"10108",course:"BIOL 121 01",title:"Biology for Non-majors",time:"|MWF 11:00-11:52am|",room:"|VAUG 100|",instructor:"Gates, Julie A.",seatsAvail:"9",seatsRes:"",prm:"",CCC:"FRST LBSC NMLG NSMC"},2:{CRN:"17235",course:"CHIN 101R 42",title:"Recitation-Chinese I",time:"|TR 4:00-4:52pm|",room:"|OLIN 371|",instructor:"STAFF",seatsAvail:"1",seatsRes:"",prm:"",CCC:""},3:{CRN:"18347",course:"EDUC 305 01",title:"Advanced Educational Psych",time:"|TR 1:00-2:22pm|",room:"|OLIN 275|",instructor:"Nottis, Katharyn E.",seatsAvail:"18",seatsRes:"",prm:"",CCC:"SLSC"},4:{CRN:"18350",course:"EDUC 339 01",title:"Inclusive Practices",time:"|TR 1:00-2:22pm|",room:"|OLIN 255|",instructor:"Hoffman, Lynn M.",seatsAvail:"20",seatsRes:"",prm:"",CCC:"SLSC"},5:{CRN:"18641",course:"CSCI 203 04",title:"Intro to Computer Science I",time:"|MWF 3:00-3:52pm|",room:"|BRKI 065|",instructor:"Dancy, Christopher (Chris) L.",seatsAvail:"9",seatsRes:"",prm:"",CCC:"FRST NMLG NSMC"},6:{CRN:"13055",course:"CSCI 479 01",title:"Computer ScienceDesign Project",time:"|MWF 3:00-3:52pm|",room:"|BRKI 165|",instructor:"Meng, Xiannong",seatsAvail:"6",seatsRes:"",prm:"",CCC:"W2"},7:{CRN:"18614",course:"MATH 208 01",title:"Mathematical Explorations",time:"|R 9:30-10:52am|",room:"|OLIN 371|",instructor:"Piggott, Adam",seatsAvail:"15",seatsRes:"",prm:"",CCC:"FRST NSMC"},8:{CRN:"10329",course:"PSYC 209 01",title:"Social Psychology",time:"|MWF 11:00-11:52am|",room:"|OLRY 201|",instructor:"Wade, T. Joel",seatsAvail:"Closed",seatsRes:"",prm:"",CCC:"EGSS SLSC SSLG"},9:{CRN:"17306",course:"SPAN 103 02",title:"Toward Intermediate Spanish",time:"|MWF 3:00-3:52pm|",room:"|VAUG 102|",instructor:"Poust, Alice J.",seatsAvail:"1",seatsRes:"1",prm:"",CCC:"ARHC CCFL EGHU FRST GLSP"}};

var exClasses;
// set to true to get logic debugging information
var debug = false;

$.getJSON("https://api.myjson.com/bins/3vg1s", function(response) {
    exClasses = response;
    if(debug) {
        console.log("CRNSearch");
        console.log(CRNSearch("50005", exClasses));

        console.log("CCCSearch");
        console.log("test".indexOf("q"));
        console.log(CCCSearch("SLSC", exClasses));

        console.log("CourseSearch");
        console.log(courseSearch("ACFM", "220", exClasses));

        console.log("DepartmentSearch");
        console.log(departmentSearch("CSCI", exClasses));

        console.log("titleSearch");
        console.log(titleSearch("Organismal Biology", exClasses));

        console.log("andSearch");
        console.log(andSearch(CCCSearch("NSMC", exClasses),CRNSearch("55470", exClasses)));

        console.log("orSearch!!!!");
        console.log(orSearch(CRNSearch("52530", exClasses),CRNSearch("53540", exClasses)));

        console.log("notSearch");
        console.log(notSearch(CRNSearch("56201", exClasses), exClasses));

        console.log("timeSearch");
        console.log(timeSearch([false ,"11:00"], exClasses));
        
        console.log("instructorSearch");
        console.log(instructorSearch("razet benoit", exClasses));
        console.log(instructorSearch("isleem", exClasses));
    }
});

/*
 * Every search function in here returns in one of two ways: a objectionary if successful, an empty objectionary if not
 */

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

// TODO: CCC search needs to parse CCCs by spaces and check each one
var CCCSearch = function(searchTerm, classes) {
    var returnObject = {};
    for ( var i = 0; i < Object.keys(classes).length; i++ ) {
        if (classes[i].CCC.indexOf(searchTerm) > -1) {
            returnObject[Object.keys(returnObject).length] = classes[i];
        }
    }
    return returnObject;
};

//http://stackoverflow.com/questions/141348/what-is-the-best-way-to-parse-a-time-into-a-date-object-from-user-input-in-javas
var parseTime = function (timeString) {
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


//serach term is an array containing 2 values, first a truth value of if its classes after a time (true)
//or classes before a time (false), and then a time in military hours.
var timeSearch = function(searchTerm, classes) {
    var returnObject = {};
    var falseObject = {};
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
    
    console.log("searchTerm");
    console.log(searchTerm);
    var searchTime = parseTime(searchTerm[1]);
    console.log("searchTime");
    console.log(searchTime);

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
            
            //given something like this: |MWF 2:00-2:52pm|R 7:00-7:52pm|, this next line will give
            //parseTime the string: MWF 2:00pm on the first pass through, and U 7:00pm on the second pass through
            timeStart = parseTime(timeString.substring(barSpots[q],dashSpots[q]).concat(timeString.substring(barSpots[q+1]-2,barSpots[q+1])));

            //given something like this: |MWF 2:00-2:52pm|R 7:00-7:52pm|, this next line will give
            //parseTime the string 2:52pm on the first pass through, and 7:52pm on the second pass through
            timeEnd = parseTime(timeString.substring(dashSpots[q], barSpots[q + 1]));
            //if time end or start = null, that means the time was "|TBA|", so not applicable to this search
            if (timeEnd === null || timeStart === null) {
                break;
            }

            //catches cases that think 11-12pm is 11pm to 12 pm
            if (timeEnd.getHours() < timeStart.getHours()) {
                timeStart.setHours(timeStart.getHours() - 12);
            }

            //if after the search time is desired
            if (searchTerm[0]) {

                //if the start time is before the desired time, put in false class list
                if (timeStart.getHours() < searchTime.getHours() ) {
                    if (timeStart.getMinutes() < searchTime.getMinutes() ) {
                        falseObject[Object.keys(falseObject).length] = classes[i];
                        break;                        
                    }

                }
            //if before the search time is desired
            } else {

                //if the start time is after the desired time, put in false class list
                if (timeEnd.getHours() > searchTime.getHours() ) {
                    if (timeEnd.getMinutes() > searchTime.getMinutes() ) {
                        falseObject[Object.keys(falseObject).length] = classes[i];
                        break;
                    }
                }
            }
        }
    }
    returnObject = notSearch(falseObject,classes);
    return returnObject;
};

var courseSearch = function(searchTerm, classes) {
    var returnObject = {};
    for ( var i = 0; i < Object.keys(classes).length; i++ ) {
        if (classes[i].course.toLower().indexOf(searchTerm.toLower()) !== -1) {
            returnObject[Object.keys(returnObject).length] = classes[i];
        }
    }
    return returnObject;
};

var departmentSearch = function(department, classes) {
    var returnObject = {};
    for ( var i = 0; i < Object.keys(classes).length; i++ ) {
        if (classes[i].course.indexOf(department) !== -1) {
            returnObject[Object.keys(returnObject).length] = classes[i];
        }
    }
    return returnObject;
};

var titleSearch = function(searchTerm, classes) {
    var returnObject = {};
    for ( var i = 0; i < Object.keys(classes).length; i++ ) {
        if (classes[i].title.toUpperCase() === searchTerm.toUpperCase()) {
            returnObject[Object.keys(returnObject).length] = classes[i];
        }
    }
    return returnObject;
};

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
