'use strict';


function buttonsound(){
    let sound = new Audio('buttonsound.mp3');
    void sound.play();
}


// Creates ink between index.html and gamemode.html.
function clickplaybutton(){

    location.href = 'gamemode.html';
}

// Creates link between gamemode.html and difficulty.html
function clickgamemodebutton(){

    location.href = 'difficulty.html';
}

// Creates link between playerstats.html and index.html
function clickreturn(){

    location.href = 'index.html';
}

// Creates link between index.html and playerstats.html
function clickstats(){

    location.href = 'playerstats.html';
}

// Sets selected gamemode 'flag' item to True
function selectedflags(){
    sessionStorage.setItem("gamemode","True");
}

// Sets selected gamemode 'countries' item to True
function selectedcountries(){
    sessionStorage.setItem("gamemode","False");
}

// Creates link between difficulty.html and rounds.html
function clickedifficultybutton(){
    location.href = 'rounds.html';
}

// Creates link between endpage.html and index.html
function clickHomebutton(){
    location.href = 'index.html';
}

// Sets 'infinite' item to True when infinite rounds is selected
function selectedinfiniterounds(){
    sessionStorage.setItem("infinite","True");
}

// Creates link between rounds.html and imageshown.html
function clickroundbutton(){
    location.href = 'imageshown.html';
}

// Closes current tab
function closetab(){

    window.close();
}




// Sets storage item to difficulty selected by user
function easydifficulty(){
    sessionStorage.setItem("chosendifficulty","easy");
}
function mediumdifficulty(){
    sessionStorage.setItem("chosendifficulty","medium");
}
function harddifficulty(){
    sessionStorage.setItem("chosendifficulty","hard");
}

// Array of countries from Interactive map
const countries2 = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe", "Palestine" ];
const countries = ['Afghanistan','Angola','Albania','United Arab Emirates','Argentina','Armenia','Australia','Austria','Azerbaijan','Burundi','Belgium','Benin','Burkina Faso','Bangladesh','Bulgaria','Bosnia and Herzegovina','Belarus','Belize','Bolivia','Brazil','Brunei Darussalam','Bhutan','Botswana','Central African Republic','Canada','Switzerland','China',"Côte d'Ivoire",'Cameroon','Democratic Republic of the Congo','Republic of Congo','Colombia','Costa Rica','Cuba','Czech Republic','Germany','Djibouti','Denmark','Dominican Republic','Algeria','Ecuador','Egypt','Eritrea','Estonia','Ethiopia','Finland','Gabon','United Kingdom','Georgia','Ghana','Guinea','The Gambia','Guinea-Bissau','Equatorial Guinea','Greece','Greenland','Guatemala','Guyana','Honduras','Croatia','Haiti','Hungary','Indonesia','India','Ireland','Iran','Iraq','Iceland','Israel','Italy','Jamaica','Jordan','Japan','Kazakhstan','Kenya','Kyrgyzstan','Cambodia','South Korea','Kuwait','Lao PDR','Lebanon','Liberia','Libya','Sri Lanka','Lesotho','Lithuania','Luxembourg','Latvia','Morocco','Moldova','Madagascar','Mexico','Macedonia','Mali','Myanmar','Montenegro','Mongolia','Mozambique','Mauritania','Malawi','Malaysia','Namibia','Niger','Nigeria','Nicaragua','Norway','Nepal','Oman','Pakistan','Panama','Peru','Philippines','Papua New Guinea','Poland','North Korea','Paraguay','Palestine','Qatar','Romania','Rwanda','Western Sahara','Saudi Arabia','Sudan','South Sudan','Senegal','Sierra Leone','El Salvador','Serbia','Suriname','Slovakia','Slovenia','Sweden','Swaziland','Syria','Chad','Togo','Thailand','Tajikistan','Turkmenistan','Timor-Leste','Tunisia','Turkey','Taiwan','Tanzania','Uganda','Ukraine','Uruguay','Uzbekistan','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe','Somalia','Kosovo','South Africa','New Zealand','Chile','Netherlands','Portugal','Russia','Spain','France','United States','French Guiana','Aruba','Anguilla','American Samoa','Antigua and Barbuda','Bahrain','Bahamas','Saint-Barthélemy','Bermuda','Barbados','Comoros','Cape Verde','Curaçao','Cayman Islands','Cyprus','Dominica','Falkland Islands','Faeroe Islands','Federated States of Micronesia','Grenada','Guam','Saint Kitts and Nevis','Saint Lucia','Saint-Martin','Maldives','Marshall Islands','Malta','Northern Mariana Islands','Montserrat','Mauritius','New Caledonia','Nauru','Palau','Puerto Rico','French Polynesia','Solomon Islands','São Tomé and Principe','Sint Maarten','Seychelles','Turks and Caicos Islands','Tonga','Trinidad and Tobago','Tuvalu','Saint Vincent and the Grenadines','British Virgin Islands','United States Virgin Islands','Vanuatu','Samoa','Netherlands','St. Eustatius (Netherlands)','Saba (Netherlands)','Martinique','Canary Islands (Spain)','Mayotte','Reunion','Guadeloupe','Fiji'];

// Searches and creates one country array
function getonecountry(){
    let selectedcountryarray = [];
    selectedcountryarray.push(countries[Math.floor(Math.random() * countries.length)]);
    console.log(selectedcountryarray);
    sessionStorage.setItem("selectedcountryarray",JSON.stringify(selectedcountryarray));

}

// Searches and creates a three country array
function getthreecountry(){

    let countriestemp = countries.slice();
    console.log(countriestemp);
    let selectedcountryarray = [];

    for(let i = 0; i < 3; i++){
        console.log(countriestemp.length);
        let selectedcountry = countriestemp[Math.floor(Math.random() * countriestemp.length)];
        countriestemp.pop(selectedcountry);
        selectedcountryarray.push(selectedcountry);
        console.log("tempcountry " + selectedcountry);
    }
    console.log(selectedcountryarray);
    sessionStorage.setItem("selectedcountryarray",JSON.stringify(selectedcountryarray));
}

// Searches and creates a five country array
function getfiveecountry(){

    let countriestemp = countries.slice();
    console.log(countriestemp);
    let selectedcountryarray = [];

    for(let i = 0; i < 5; i++){
        console.log(countriestemp.length);
        let selectedcountry = countriestemp[Math.floor(Math.random() * countriestemp.length)];
        countriestemp.pop(selectedcountry);
        selectedcountryarray.push(selectedcountry);
        console.log("tempcountry " + selectedcountry);
    }
    console.log(selectedcountryarray);
    sessionStorage.setItem("selectedcountryarray",JSON.stringify(selectedcountryarray));
}


// Resets 'infiniterounds' item when game resets
function resetinfiniterounds(){

    sessionStorage.setItem("Infiniterounds","False");

}

//Hides save button on endpage.html page
function hidesavebutton(){

    if (sessionStorage.getItem("Infiniterounds") === "True"){

        document.getElementById("autosavemessage").style.display = "block";

    }else{

        document.getElementById("autosavemessage").style.display = "none";

    }

}

// Searches and creates array of 50 countries
function getinfinitecountry(){

    sessionStorage.setItem("Infiniterounds","True");

    let countriestemp = countries.slice();
    console.log(countriestemp);
    let selectedcountryarray = [];

    for(let i = 0; i < 50; i++){
        console.log(countriestemp.length);
        let selectedcountry = countriestemp[Math.floor(Math.random() * countriestemp.length)];
        countriestemp.pop(selectedcountry);
        selectedcountryarray.push(selectedcountry);
        console.log("tempcountry " + selectedcountry);
    }
    console.log("rawr");
    console.log(selectedcountryarray);
    sessionStorage.setItem("selectedcountryarray",JSON.stringify(selectedcountryarray));

}


// Calls fetchimage() function when page loads
window.addEventListener("DOMContentLoaded", async() => {
    const image = document.getElementById('y');
    const button = document.getElementById('x');
    image.src = await fetchimage();
});


/*
window.addEventListener("DOMContentLoaded", (event) => {
    const image = document.getElementById('y');
    const button = document.getElementById('x');
    const body = document.getElementById("body");


  body.onload= ( async () => {
        image.src = await fetchimage();
    });
});
 */

// Fetches image from Unsplash API or Flag API

// Copyright (c) 2017 Go Squared Ltd. http://www.gosquared.com/
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



async function fetchimage(countryname){

    let url = "";
    let gamemodetype = sessionStorage.getItem("gamemode");

    let selectedcountryarray = sessionStorage.getItem("selectedcountryarray");
    selectedcountryarray = JSON.parse(selectedcountryarray);

    if (gamemodetype === "True"){

        console.log(selectedcountryarray);
        url = 'https://api.unsplash.com/search/photos?query='+selectedcountryarray[0]+'_flag&client_id=es03-4SsJY9EfXuRksaoVjjm8I85DGqU3rBXKe7EDYA';

    }else{
        console.log(selectedcountryarray);
        url = 'https://api.unsplash.com/search/photos?query='+selectedcountryarray[0]+'&client_id=es03-4SsJY9EfXuRksaoVjjm8I85DGqU3rBXKe7EDYA';
    }

    console.log(countryname);
    console.log(url);
    let random = Math.floor(Math.random()*5);
    return fetch(url)
        .then ((res) => res.json())
        .then((data) => {

            let collectedimages = data.results[random];
            return collectedimages.urls.regular;

        })
        .catch(err=>console.log(err));
}


// Creates link between imageshown.html and game.html
function clickcontinuebutton(){
    location.href = 'game.html';
}




// Provides functionality to the interactive map on game.html.
// Includes multiple event listeners for mouse hover, click etc.
// Modifies the corresponding CSS from location.css
function map() {

    document.querySelectorAll('.allPaths').forEach(event => {
        event.addEventListener("mouseover", function () {
            window.onmousemove = function (p) {
                let x = p.clientX;
                let y = p.clientY;
                document.getElementById('name').style.top = y - 20 + "px";
                document.getElementById("name").style.top = x - 20 + "px";
            }
            if(event.id === sessionStorage.getItem("clicked")){
                document.getElementById('countryname2').innerText = event.id;
                document.getElementById('countryname').style.opacity = 1;
            }
            else {
                event.style.fill = "green";
                document.getElementById('countryname2').innerText = event.id;
                document.getElementById('countryname').style.opacity = 1;
            }
        })
        event.addEventListener("mouseleave", function () {

            if(event.id === sessionStorage.getItem("clicked")){
                document.getElementById('countryname').style.opacity = 0;
            }
            else {
                event.style.fill = "#ececec";
                document.getElementById('countryname').style.opacity = 0;
            }
        })
        event.addEventListener("click", function () {

            // console.log("clicked heard");

            let clicked = (sessionStorage.getItem("clicked"));
            if (clicked === ''){

            }else {
                // console.log("old");
                // console.log(clicked);
                // console.log("changing colour");

                // adding \ to spaces in clicked
                console.log("First " + clicked);
                let rawr =  clicked.replace(/\s/g,'\\ ');
                console.log("Second " + rawr);

                let array = document.querySelectorAll("[id= " + rawr +"]" );
                console.log(array);
                for (let i=0; i<array.length; i++) {
                    array[i].setAttribute('style', 'background-color:#ececec;');
                    console.log("found");
                }
            }

            document.getElementById('chosencountry2').innerText = "Selected: " + event.id;
            event.style.fill = "#00008B";
            sessionStorage.setItem("individualguess", event.id);
            sessionStorage.setItem("clicked", event.id);
            console.log("new");
            console.log(sessionStorage.getItem("clicked"));

        })

    })
}

// Resets clicked variable after each round
function resetclickedvariable(){

    sessionStorage.setItem("clicked",'');
    console.log("reset")

}

// Resets player guess after each round
function resetplayerguess(){
    sessionStorage.setItem("individualguess",'');
    console.log("reset")
}




// Updates round number after each round
function updateRound(){
    let round = sessionStorage.getItem("round");
    round = JSON.parse(round);
    round++;
    sessionStorage.setItem("round",JSON.stringify(round));
    document.getElementById("roundno").innerText = "Round " + round;
}


// Resets round number to 0
function resetround(){
    let round = sessionStorage.getItem("round");
    sessionStorage.setItem("round",JSON.stringify(0));
    document.getElementById("roundno").innerText = "Round " + round;
}





// Checks player answer and re-directs to corresponding page.
function correctorincorrect(){

    let selectedcountryarray = sessionStorage.getItem("selectedcountryarray");
    selectedcountryarray = JSON.parse(selectedcountryarray);

    const individualguess = sessionStorage.getItem('individualguess');

    let playerscore = sessionStorage.getItem("playerscore");
    playerscore = JSON.parse(playerscore);

    document.getElementById("playerGuess").innerText = "Your Guess: " + individualguess ;
    document.getElementById("answer").innerText = "Answer: " + selectedcountryarray[0];


    console.log(individualguess);
    console.log(selectedcountryarray);

    if(sessionStorage.getItem("outoftime") === "true"){
        document.getElementById('tickorcross').src = "cross.webp";
        document.getElementById('correctorincorrecttext').innerText = " Out of Time!";
        document.getElementById("playerGuess").style.visibility = 'hidden';
        sessionStorage.setItem("outoftime", "False");
    }
    else if (individualguess === selectedcountryarray[0]){
        document.getElementById('tickorcross').src = "tick.png";
        document.getElementById('correctorincorrecttext').innerText = "You are Correct!";
        document.getElementById("playerGuess").style.color = 'green';
        playerscore++;
        sessionStorage.setItem("playerscore",JSON.stringify(playerscore));
    }
    else {
        document.getElementById('tickorcross').src = "cross.webp";
        document.getElementById('correctorincorrecttext').innerText = "You are Incorrect!";
        document.getElementById("playerGuess").style.color = 'red';
    }

    selectedcountryarray.shift();

    sessionStorage.setItem("selectedcountryarray",JSON.stringify(selectedcountryarray));

}


// Directs player to next round.html or endoage.html
function nextroundorexit(){

    let selectedcountryarray = sessionStorage.getItem("selectedcountryarray");
    selectedcountryarray = JSON.parse(selectedcountryarray);

    console.log(sessionStorage.getItem("infinite"));
    console.log(document.getElementById("correctorincorrecttext").innerText);

    if (sessionStorage.getItem("infinite") === "True" && document.getElementById("correctorincorrecttext").innerText === "You are Incorrect!" ){
        location.href = 'endpage.html';
    }
    else {

        if (selectedcountryarray.length === 0) {
            location.href = 'endpage.html';
        } else {
            location.href = 'imageshown.html';
        }
    }
}



// Instantiates and resets player score
function instanteplayerscore(){
    let playerscore = 0;
    sessionStorage.setItem("playerscore",JSON.stringify(playerscore));

}


// Displays player's final score
function finalplayerscore(){

    let playerscore = sessionStorage.getItem("playerscore");
    playerscore = JSON.parse(playerscore);

    document.getElementById('playerscore').innerText = 'Final Score: ' + playerscore;
}

//



// set session variable for diffculty, onload of each round check diffculty then call one of three functions
// ones below will have time and other function will check variable

// Allocates player guessing time depending on difficulty selected.
function checkdifficulty(){
    let chosendifficulty = sessionStorage.getItem("chosendifficulty");

    console.log( sessionStorage.getItem("chosendifficulty") + "didfucktym ate");

    if (chosendifficulty === "easy"){
        window.setTimeout(outoftime, 60000);
    }
    else if (chosendifficulty === "medium"){
        window.setTimeout(outoftime, 30000);
    }
    else{
        window.setTimeout(outoftime, 10000);
    }

}


// Sends window alert if user has no selected answer
function answer() {
    // const individualguess = sessionStorage.getItem('individualguess');
    // if (individualguess === '') {
    //     alert("Please select a country before time runs out.");
    // } else {
    location.href = 'correctorincorrect.html';


}

// Calls asnwer() function when player runs out of time
function outoftime(){
    sessionStorage.setItem("outoftime","true");
    answer();
}


// Clears previously defined timeout
function cleartimeout(){
    window.clearTimeout();
}


// Starts and progresses timebar shown on game.html
function starttimebar() {
    console.log("start timebar ");
    let x = 0;
    let interval = 0;
    let chosendifficulty = sessionStorage.getItem("chosendifficulty");
    console.log(sessionStorage.getItem("chosendifficulty"));

    if (chosendifficulty === "easy"){
        interval = 600;
    }
    else if (chosendifficulty === "medium"){
        interval = 300;
    }
    else{
        interval = 100;
    }

    if (x === 0) {
        x = 1;
        const htmlbar = document.getElementById("Bar");
        let barwidth = 1;
        const id = setInterval(frame, interval);

        function frame() {
            if (barwidth >= 100) {
                clearInterval(id);
                x = 0;
            } else {
                barwidth++;
                htmlbar.style.width = barwidth + "%";
            }
        }
    }
}





// check if localstorage items are set
function playerinstantiate(){
    if (localStorage.getItem("player_scores") === null) {
        let player_scores = [];
        localStorage.player_scores = JSON.stringify(player_scores);
    }

    if (localStorage.getItem("roundnumberarray") === null) {
        let roundnumberarray = [];
        localStorage.roundnumberarray = JSON.stringify(roundnumberarray);
    }

    if (localStorage.getItem("roundnumber") === null) {
        let roundnumber = 0;
        localStorage.roundnumber = JSON.stringify(roundnumber);
    }
    console.log("all set!");
}

// Saves user's score to localstorage array
function autosavescore() {

    // check if supported in browser
    if (typeof (Storage) !== "undefined") {
        let playerscore = sessionStorage.getItem("playerscore");

        let player_scores2 = JSON.parse(localStorage.getItem("player_scores"));
        player_scores2.push(playerscore);
        console.log("rawr");
        localStorage.setItem("player_scores", JSON.stringify(player_scores2));
        console.log(localStorage.getItem("player_scores"));


        let roundnumberarray2 = JSON.parse(localStorage.getItem("roundnumberarray"));
        let roundnumber2 = JSON.parse(localStorage.getItem("infiniteroundnumber"));

        roundnumber2++;
        roundnumberarray2.push(roundnumber2);

        localStorage.setItem("roundnumberarray", JSON.stringify(roundnumberarray2));
        localStorage.setItem("infiniteroundnumber", JSON.stringify(roundnumber2));

        console.log(localStorage.getItem("roundnumberarray"));
        console.log(localStorage.getItem("infiniteroundnumber"));


    } else {
        alert("Sorry, your browser does not support Web Storage");
    }

    //  let username = prompt("Please enter a name:", "e.g. CoolDudeSurfer30")
    //  localStorage.setItem("username", JSON.stringify(username));

}

// print array of ids in queryselect.
function printid(){

    console.log("rawr");

    let countryarray = [];

    let ids = document.querySelectorAll('[id]');

    Array.prototype.forEach.call(ids, function (el, i) {
        // "el" is your element
        countryarray.push(el.id);
        console.log(el.id); // log the ID

    });

    console.log(countryarray);
}

// sets player stats when page loaded
function setstats(){
    let playerscoresoverall =  JSON.parse(localStorage.getItem("player_scores"));
    console.log(playerscoresoverall);
    let highest =  Math.max.apply(Math, playerscoresoverall);
    let lowest =  Math.min.apply(Math, playerscoresoverall);

    let sum = 0
    for (let i = 0; i < playerscoresoverall.length; i++) {
        sum += parseInt(playerscoresoverall[i]);
    }

    let avg = Math.round(sum / playerscoresoverall.length * 10) / 10;
    document.getElementById("highest").innerText = "•Highest Score: " + highest;
    document.getElementById("lowest").innerText = "•Lowest Score: " + lowest;
    document.getElementById("avg").innerText = "•Avg Score: " + avg;
    console.log("yeahhhhhh");

}
