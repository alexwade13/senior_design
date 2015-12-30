$(document).ready(function() {

    $("#sidebar").accordion();
    //jQuery('.tabs .tab-links a').on( 'click', function(e) {
    //var currentAttrValue = jQuery(this).attr('href');

    // Show/Hide tabs
    //jQuery( '.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();

    // Change/remove current tab to active
    //jQuery(this).parent('li').addClass('active').siblings().removeClass('active');


    //e.preventDefault();
    //});

    //e.preventDefault();
   
    console.log("hello");
    document.getElementById('export-button').onclick = function() {
        window.confirm("You are exporting");
    }

      document.getElementById('import-button').onclick = function() {
        window.confirm("You are importing");
    }
    
 });
