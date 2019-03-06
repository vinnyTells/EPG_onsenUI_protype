/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//*
ons.disableIconAutoPrefix();
//*/

//*
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        //ons.notification.alert('Hello World!');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');
          
        console.log('Received Event: ' + id);
        //ons.notification.alert("Device is ready ;)");
        
        //if 'deviceready' does not fire, the load screen will continue in loop (?)
       
        setTimeout(function(){
              $('#preloader').fadeOut('slow', function () {
              });
          },2000);
    }
  
};

/*
$(window).on('load', function () {
  setTimeout(function(){
      $('#preloader').fadeOut('slow', function () {
      });
  },2000);

});
        //*/

//require("cordova.plugin.verso-clipboard/[??]")

/*
function getValue (){
  let val = document.querySelector('#password').value;
}
*/

//*
var appL = angular.module("myApp", ['onsen']);
appL.directive("mainApp", function() {
    return {
        templateUrl : "app.html"
        //templateUrl : "help-dialog.html"
        //template: "<h1>Test</h1>"
    };
});

appL.directive("helpTutorial", function() {
    return {
        templateUrl : "help-tutorial.html"
        //template: "<h1>Test</h1>"
    };
});

appL.directive("helpPages", function() {
    return {
        templateUrl : "help-pages.html"
        //template: "<h1>Test</h1>"
    };
});

/*
$(document).ready(function(){
  //ons.notification.alert("Hi");  
});
//*/

$(function(){
// Initialization code

  $( ".top, .list-item__top" ).on( "click", showHide);
  
});  

//*
function showHide() {
  
  var status = document.getElementById("showHide").innerHTML;
  
  var newStatus = (status === 'Hide') ? 'Show' : 'Hide';
  
  document.getElementById("showHide").innerHTML = newStatus;
}
//*/

//*


//

//remove all blanks
function removeFalsy(arr) {
    return arr.filter(Boolean);
}

// This function will generate a new password
function genPassword(){
    let start = [];
    
    let abc = (document.getElementById("check-2").checked) ? ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']:''; 
    let ABC = (document.getElementById("check-1").checked) ? ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']:'';
    let numberS = (document.getElementById("check-3").checked) ? [0,1,2,3,4,5,6,7,8,9]:'';
    let specialChars = (document.getElementById("check-4").checked) ? ['*','&','%','$','#','@']:'';
    
    // Password size   
    let size = document.getElementById("passwordSize").value;
    // A array with all elements checked ( or not) elements 
    let all = start.concat(abc,ABC,numberS,specialChars);
   
   // Remove all empty values and return a new array
    all = removeFalsy(all);
    
    // The value will be the new password 
    let value = "";
    
    // Verify if array is validate    
    if (typeof all !== 'undefined' && all.length > 0){
        // Builds the new password in a loop with random values from 'all'
        for (var i = 0; i < size; i++) {    
            value +=all[Math.floor(Math.random()*all.length)];     
        }
    }
    // Verify if 'value' is empty
    if (value === "") {        
        
        document.getElementById("advise").innerHTML = 'Please select at least one of values types.';
        myToast.toggle()
        window.location.href='#myToast';
        setTimeout(function(){ myToast.hide(); }, 5000);
        //showPopover('#gen');
        //ons.notification.alert('Please select at least one of the password settings.');
        
    }else{
        // Return the new password value
        document.getElementById("password").value = value;
    }
    
} 

// Copy the new password value and verify if this value exists
function copyPswd(){  
  
    //var text = "Hello World!";

    //cordova.plugins.clipboard.copy(text);

    //cordova.plugins.clipboard.paste(function (text) { alert(text); });
  
    let copyValue = document.getElementById("password");
    
    //cordova.plugins.clipboard.copy(copyValue);
  
    copyValue._input.select();
    document.execCommand('copy');    
    
    //*
    let tooltip = document.getElementById("advise");
    
    if (copyValue.value === ''){
        tooltip.innerHTML = "Please generate first.";
        myToast.toggle();
        window.location.href='#myToast';
        setTimeout(function(){ myToast.hide(); }, 2700);
        //showPopover('#cpy');
        //ons.notification.alert("Please generate first.");
        //showDialog();
    }else{
        tooltip.innerHTML = "Copied!!";
        myToast.toggle();
        window.location.href='#myToast'; 
        setTimeout(function(){ myToast.hide(); }, 2000);
        //showPopover('#cpy');
    } 
    //*/  
    
}


// Dialog functions
var showDialog = function() {
  var dialog = document.getElementById('my-dialog');
  dialog.show();
  ///*
  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('dialog.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }//*/
};

var hideDialog = function(id) {
  document
    .getElementById(id)
    .hide();
};

// Modal functions
function showTutorial() {
  var modal = document.querySelector('#tutorial');
  modal.show();

}

function hideTutorial() {
  var modal = document.querySelector('#tutorial');
  modal.hide();

}

//*/

//new ClipboardJS('.btn');

/*
(function () {
  var text = "Hello World!";

cordova.plugins.clipboard.copy(text);

cordova.plugins.clipboard.paste(function (text) { alert(text); });
}
})();

//*/