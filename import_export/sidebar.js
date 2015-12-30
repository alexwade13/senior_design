$(document).ready(function(){

    console.log("Document Ready"); // for debugging purposes

    ////////////////////////
    // INSERTING ELEMENTS //
    ////////////////////////

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

    // Add to Calendar Button
    var $lastTD = $("tr").find("td:last");
    $lastTD.each(function(index) {
        if($(this).children(0).prop("tagName") === "FONT") {
            $(this).attr("colspan", "14");
        }
        else if($(this).children(0).prop("tagName") === "FORM"){
            $(this).after("<input type='submit' value='Add to Calendar' class='button atcbutton'>");
        }
    });

    // Minified sidebar
    var sidebarHTML = ''
    // Adding the sidebar div
    $("body").wrapInner("<div class='original'></div>");
    $(".original").after(sidebarHTML);
    $("#sidebar").accordion({
        heightStyle: "fill"
    });

    // Import button functionality
    document.getElementById('import-button').onclick = function() {
        window.confirm("You are importing");
    };

    var obj = {};
    var storage = chrome.storage.sync;

    // Add existing courses to the calendar
    var updateCalendar = function() {
        $(".timebox").css("background-color","white");
        storage.get(function(result){
            var courses = result;
            var i;
            for(i in courses) {
                var course = courses[i];
                if(isNaN(Number(course))) {
                    var courseTime = course.time.substring(1, course.time.length - 1).split("|");
                    var divs = parseTime(courseTime);
                    var div;
                    for(div in divs) {
                        var id = divs[div];
                        $(id).css("background-color","#EA760A");
                   }
                }
            }
        });
    };

    updateCalendar();

    // Clears the sync storage
    var clearStorage = function() {
        storage.clear();
        obj = {'classesStored': 0};
        storage.set(obj);
        updateCalendar();
    };

    // Prints the sync storage object
    var printStorage = function() {
        storage.get(function(result){console.log(result);});
    };

    // TEMPORARY buttons to show and clear the storage for testing purposes
    $('.page_header').after('<button id="clear">clear storage</button><button id="print">print storage</button>');
    $('#clear').click(function(){
        clearStorage();
        printStorage();
    });
    $("#print").click(function(){
        printStorage();
    });

    // Calculates the difference between two time strings assuming they are in
    // intervals of 30 and that both times are in the same day
    var timeDifference = function(sh, sm, eh, em) {
        var startHour = Number(sh);
        var startMinute = Number(sm);
        var endHour = Number(eh);
        var endMinute = Number(em);
        startHour = (startHour > endHour) ? 12 - startHour : startHour;
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
    // Accepts an array of time strings in the form: ["TR 9:30-10:52am", "T 11:00-11:52am"]
    var parseTime = function(timeStrings) {
        var i;
        var divs = [];
        for (i in timeStrings) {
            var timeString = timeStrings[i].split(" ");
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

                var td = timeDifference(startHour, startMinute, endHour, endMinute);

                while(td !== 0) {
                    if(startHour === endHour && startMinute === endMinute) break;
                    divs.push(prefix + startHour + startMinute + ampm);

                    if(startMinute === "30") {
                        startMinute = "";
                        startHour = addOneHour(startHour);
                    }
                    else {
                        startMinute = "30";
                    }

                    td = timeDifference(startHour, startMinute, endHour, endMinute);
                }

            }

        }
        return divs;
    };

    // Clicking on "Add to Calendar" will create a course object of the current
    // class and then add that object to chrome's sync storage.
    $(".atcbutton").click(function(){
        var tds = $(this).parent("tr").children();
        var classObj = {};
        classObj.CRN = tds[0].textContent.trim();
        classObj.course = tds[1].textContent.trim();
        classObj.title = tds[2].textContent.trim();
        classObj.time = tds[3].textContent.replace(/\n/g, "|");
        classObj.room = tds[4].textContent.replace(/\n/g, "|");
        classObj.instructor = tds[5].textContent.replace(/\n/g, "");
        classObj.seatsAvail = tds[6].textContent.trim();
        classObj.seatsRes = tds[7].textContent.trim();
        classObj.prm = tds[8].textContent.trim();
        classObj.CCC = tds[9].textContent.trim();

        storage.get(function(result){
            var classesStored = result.classesStored;
            obj[classesStored] = classObj;
            classesStored++;
            obj.classesStored = classesStored;
            storage.set(obj, function() {
                updateCalendar();
            });
        });
    });
    
    // http://stackoverflow.com/questions/21012580/is-it-possible-to-write-data-to-file-using-only-javascript
    // Compile schedule data into an ObjectURL, return the URL used to download it
    var schedule_data = null,
        make_file = function(schedule_data) {
            var blob = new Blob([schedule_data], {type: 'text/plain'});
            
            // If we are replacing a previously generated file we need to
            // manually revoke the object URL to avoid memory leaks.
            if ( schedule_data !== null ) {
                window.URL.revokeObjectURL(blob);
            }
            
            url = window.URL.createObjectURL(blob);
            
            //returns a URL you can use as an href
            return url;
        };
    
    var data = "Subject,Start Date,Start Time,End Date,End Time,All Day Event,Description,Location,Private\n";
    storage.get( function(result) {
       var courses = result;
       console.log( Object.getOwnPropertyNames( courses ) );
       for ( var i=0; i<courses["classesStored"]; i++ ) {
           var temp = courses[i].course + "," + "1/1/16" + "," + courses[i].time + "," + courses[i].time + "," + "False" + "," + courses[i].title + "," + courses[i].room + "," + "False" + "," + "False" + "\n";
           data += temp;
       }
       console.log(data);
    });
    
    var link = document.createElement("a"); 
    document.getElementById("export-button").onclick = function () {
	link.download = "ScheduleData.csv";
	link.href = make_file(data);
	link.click();
    }; 
    
    // *** END CHROME SYNC STORAGE ***
});