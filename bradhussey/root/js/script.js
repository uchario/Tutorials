/* Script.js */


function calculateTip() {
    
    // Store the data of inputs
    'use strict';
    var billAmount = document.getElementById("billAmount").value,
        serviceQuality = document.getElementById("serviceQuality").value,
        numPeople = document.getElementById("totalPeople").value,
        total = (billAmount * serviceQuality / numPeople);
    
    // Quick validation
    if (billAmount === "" || serviceQuality === 0) {
        return window.alert("Please enter some values to get this baby up and running!");
    }
    
    // Check to see if this input is empty or <= 1
    if (numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    
    // Do some math!
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    //window.alert(total);
    
    // Display the tip!
    document.getElementById("totalTip").style.display = 'block';
    document.getElementById("tip").innerHTML = total;
}//end calculateTip

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function () { calculateTip(); };

