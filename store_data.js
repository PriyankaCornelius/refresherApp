'use strict';

function contactsPage() {
    location.replace("./contactinfo.html")
}
function paymentsPage() {
    location.replace("./paymentinfo.html")
}
function addContactDetails() {
    //contact details local storage
    let email = document.getElementById('email').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let subscription_type = document.getElementById('subscription_type').value;
    let street = document.getElementById('street').value;
    let apt = document.getElementById('apt').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;
    let zip_code = document.getElementById('zip_code').value;
    let phno = document.getElementById('phno').value;
    let contact_details = [];
    contact_details.push(fname, lname, subscription_type, street, apt, city, state, country, zip_code, phno);
    localStorage.setItem(email, JSON.stringify(contact_details));
    alert("Contact details have been stored in local storage for future use");
}
function addPaymentDetails() {
   //payment details session storage
    let card_number = document.getElementById('card_number').value;
    let fullname = document.getElementById('fullname').value;
    let exp_date = document.getElementById('exp_date').value;
    let security_code = document.getElementById('security_code').value;
    let payment_details = [];
    payment_details.push(card_number,fullname,exp_date,security_code);
    sessionStorage.setItem(email, JSON.stringify(payment_details));
    alert("Payment details have been stored in session storage to maintain user privacy");

    //clear form and print success
}

function deleteAccount() {
    localStorage.removeItem(document.getElementById('email'));
    alert('You have successfully unsubscribed');
}


        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
                document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
               //alert("Geolocation is not supported by this browser.");
            }
        }

        function showPosition(position) {
            document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude + 
            "<br>Longitude: " + position.coords.longitude;
            //document.getElementById('geolocation').innerHTML="Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
        }
