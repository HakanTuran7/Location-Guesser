/*

Name: location.js
Purpose: Contains all JavaScript functions utilised within the application.
         (Script related to the Player progress chart is contained within the player stats HTML pages).

*/

'use strict';

// Create a link between index.html and gamemode.html.
function clickplaybutton() {
    location.href = 'gamemode.html';
}

// Create a link between gamemode.html and difficulty.html
function clickgamemodebutton() {
    location.href = 'difficulty.html';
}

// Create a link between playerstats.html and index.html
function clickreturn() {
    location.href = 'index.html';
}

// Create a link between index.html and playerstat.html
function clickstats() {
    location.href = 'playerstat.html';
}

// Set gamemode item to 'True' when 'flags' is selected
function selectedflags() {
    sessionStorage.setItem("gamemode", "True");
}

// Set gamemode item to 'False' when 'countries' is selected
function selectedcountries() {
    sessionStorage.setItem("gamemode", "False");
}

// Create a link between difficulty.html and rounds.html
function clickedifficultybutton() {
    location.href = 'rounds.html';
}

// Create a link between endpage.html and index.html
function clickHomebutton() {
    location.href = 'index.html';
}

// Set 'infinite' item to 'True' when infinite rounds is selected
function selectedinfiniterounds() {
    sessionStorage.setItem("infinite", "True");
}

// Create a link between rounds.html and imageshown.html
function clickroundbutton() {
    location.href = 'imageshown.html';
}

// Create a link between imageshown.html and game.html
function clickcontinuebutton() {
    location.href = 'game.html';
}

// Create a link between playerstatscountries.html and playerstatsflags.html to playerstat.html
function mainstatreturn() {
    location.href = 'playerstat.html';
}

// Create a link between playerstat.html and playerstatscountries.html
function tocountrystats() {
    location.href = 'playerstatscountries.html';
}

// Create a link between playerstat.html and playerstatsflags.html
function toflagstats() {
    location.href = 'playerstatsflags.html';
}

// Set 'chosendifficulty' storage item to 'easy' difficulty selected.
function easydifficulty() {
    sessionStorage.setItem("chosendifficulty", "easy");
}

// Set 'chosendifficulty' storage item to 'medium' difficulty selected.
function mediumdifficulty() {
    sessionStorage.setItem("chosendifficulty", "medium");
}

// Set 'chosendifficulty' storage item to 'hard' difficulty selected.
function harddifficulty() {
    sessionStorage.setItem("chosendifficulty", "hard");
}

// Set the round number item to '1' if null
function setround() {
    if (localStorage.getItem("round") === null) {
        let round = 1;
        localStorage.round = JSON.stringify(round);
    }
}

// Array of countries from Interactive map. Created from retreving all ids in the SVG data
const countries = ['Afghanistan','Angola','Albania','United Arab Emirates','Argentina','Armenia','Australia','Austria','Azerbaijan','Burundi','Belgium','Benin','Burkina Faso','Bangladesh','Bulgaria','Bosnia and Herzegovina','Belarus','Belize','Bolivia','Brazil','Brunei Darussalam','Bhutan','Botswana','Central African Republic','Canada','Switzerland','China',"Côte D'Ivoire",'Cameroon','Democratic Republic of the Congo','Republic of Congo','Colombia','Costa Rica','Cuba','Czech Republic','Germany','Djibouti','Denmark','Dominican Republic','Algeria','Ecuador','Egypt','Eritrea','Estonia','Ethiopia','Finland','Gabon','United Kingdom','Georgia','Ghana','Guinea','The Gambia','Guinea-Bissau','Equatorial Guinea','Greece','Greenland','Guatemala','Guyana','Honduras','Croatia','Haiti','Hungary','Indonesia','India','Ireland','Iran','Iraq','Iceland','Israel','Italy','Jamaica','Jordan','Japan','Kazakhstan','Kenya','Kyrgyzstan','Cambodia','South Korea','Kuwait','Lao PDR','Lebanon','Liberia','Libya','Sri Lanka','Lesotho','Lithuania','Luxembourg','Latvia','Morocco','Moldova','Madagascar','Mexico','Macedonia','Mali','Myanmar','Montenegro','Mongolia','Mozambique','Mauritania','Malawi','Malaysia','Namibia','Niger','Nigeria','Nicaragua','Norway','Nepal','Oman','Pakistan','Panama','Peru','Philippines','Papua New Guinea','Poland','North Korea','Paraguay','Palestine','Qatar','Romania','Rwanda','Western Sahara','Saudi Arabia','Sudan','South Sudan','Senegal','Sierra Leone','El Salvador','Serbia','Suriname','Slovakia','Slovenia','Sweden','Swaziland','Syria','Chad','Togo','Thailand','Tajikistan','Turkmenistan','Timor-Leste','Tunisia','Turkey','Taiwan','Tanzania','Uganda','Ukraine','Uruguay','Uzbekistan','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe','Somalia','Kosovo','South Africa','New Zealand','Chile','Netherlands','Portugal','Russia','Spain','France','United States','French Guiana','Aruba','Anguilla','American Samoa','Antigua and Barbuda','Bahrain','Bahamas','Saint-Barthélemy','Bermuda','Barbados','Comoros','Cape Verde','Curaçao','Cayman Islands','Cyprus','Dominica','Falkland Islands','Faeroe Islands','Federated States of Micronesia','Grenada','Guam','Saint Kitts and Nevis','Saint Lucia','Saint-Martin','Maldives','Marshall Islands','Malta','Northern Mariana Islands','Montserrat','Mauritius','New Caledonia','Nauru','Palau','Puerto Rico','French Polynesia','Solomon Islands','São Tomé and Príncipe','Sint Maarten','Seychelles','Turks and Caicos Islands','Tonga','Trinidad and Tobago','Tuvalu','Saint Vincent and the Grenadines','British Virgin Islands','United States Virgin Islands','Vanuatu','Samoa','Netherlands','St. Eustatius (Netherlands)','Saba (Netherlands)','Martinique','Canary Islands (Spain)','Mayotte','Reunion','Guadeloupe','Fiji'];

// Map of key and values with countries and country codes
const flags = new Map();
flags.set("United Arab Emirates", "ae");
flags.set("Afghanistan", "af");
flags.set("Antigua And Barbuda", "ag");
flags.set("Anguilla", "ai");
flags.set("Albania", "al");
flags.set("Armenia", "am");
flags.set("Angola", "ao");
flags.set("Argentina", "ar");
flags.set("American Samoa", "as");
flags.set("Austria", "at");
flags.set("Australia", "au");
flags.set("Aruba", "aw");
flags.set("Azerbaijan", "az");
flags.set("Bosnia and Herzegovina", "ba");
flags.set("Barbados", "bb");
flags.set("Bangladesh", "bd");
flags.set("Belgium", "be");
flags.set("Burkina Faso", "bf");
flags.set("Bulgaria", "bg");
flags.set("Bahrain", "bh");
flags.set("Burundi", "bi");
flags.set("Benin", "bj");
flags.set("Bermuda", "bm");
flags.set("Brunei Darussalam", "bn");
flags.set("Bolivia", "bo");
flags.set("Brazil", "br");
flags.set("Bahamas", "bs");
flags.set("Bhutan", "bt");
flags.set("Botswana", "bw");
flags.set("Belarus", "by");
flags.set("Belize", "bz");
flags.set("Canada", "ca");
flags.set("Central African Republic", "cf");
flags.set("Democratic Republic of The Congo", "cd");
flags.set("Republic of Congo", "cg");
flags.set("Switzerland", "ch");
flags.set("Côte D'Ivoire", "ci");
flags.set("Chile", "cl");
flags.set("Cameroon", "cm");
flags.set("China", "cn");
flags.set("Colombia", "co");
flags.set("Costa Rica", "cr");
flags.set("Cuba", "cu");
flags.set("Curaçao", "cw");
flags.set("Cape Verde", "cv");
flags.set("Cyprus", "cy");
flags.set("Czech Republic", "cz");
flags.set("Germany", "de");
flags.set("Djibouti", "dj");
flags.set("Denmark", "dk");
flags.set("Dominica", "dm");
flags.set("Dominican Republic", "do");
flags.set("Algeria", "dz");
flags.set("Ecuador", "ec");
flags.set("Estonia", "ee");
flags.set("Egypt", "eg");
flags.set("Western Sahara", "eh");
flags.set("Eritrea", "er");
flags.set("Spain", "es");
flags.set("Ethiopia", "et");
flags.set("Finland", "fi");
flags.set("Fiji", "fj");
flags.set("Falkland Islands", "fk");
flags.set("Federated States of Micronesia", "fm");
flags.set("Faroe Islands", "fo");
flags.set("France", "fr");
flags.set("Gabon", "ga");
flags.set("Grenada", "gd");
flags.set("Georgia", "ge");
flags.set("French Guiana", "gf");
flags.set("Ghana", "gh");
flags.set("Gibraltar", "gi");
flags.set("Greenland", "gl");
flags.set("The Gambia", "gm");
flags.set("Guinea", "gn");
flags.set("Guadeloupe", "gp");
flags.set("Equatorial Guinea", "gq");
flags.set("Greece", "gr");
flags.set("Guatemala", "gt");
flags.set("Guam", "gu");
flags.set("Guinea-Bissau", "gw");
flags.set("Guyana", "gy");
flags.set("Honduras", "hn");
flags.set("Croatia", "hr");
flags.set("Haiti", "ht");
flags.set("Hungary", "hu");
flags.set("Indonesia", "id");
flags.set("Ireland", "ie");
flags.set("Israel", "il");
flags.set("India", "in");
flags.set("Iraq", "iq");
flags.set("Iran", "ir");
flags.set("Iceland", "is");
flags.set("Italy", "it");
flags.set("Jamaica", "jm");
flags.set("Jordan", "jo");
flags.set("Japan", "jp");
flags.set("Kenya", "ke");
flags.set("Kyrgyzstan", "kg");
flags.set("Cambodia", "kh");
flags.set("Comoros", "km");
flags.set("Saint Kitts & Nevis", "kn");
flags.set("North Korea", "kp");
flags.set("South Korea", "kr");
flags.set("Kuwait", "kw");
flags.set("Cayman Islands", "ky");
flags.set("Kazakhstan", "kz");
flags.set("Lebanon", "lb");
flags.set("Saint Lucia", "lc");
flags.set("Sri Lanka", "lk");
flags.set("Liberia", "lr");
flags.set("Lesotho", "ls");
flags.set("Lithuania", "lt");
flags.set("Luxembourg", "lu");
flags.set("Latvia", "lv");
flags.set("Libya", "ly");
flags.set("Morocco", "ma");
flags.set("Moldova", "md");
flags.set("Madagascar", "mg");
flags.set("Marshall Islands", "mh");
flags.set("Macedonia", "mk");
flags.set("Mali", "ml");
flags.set("Myanmar", "mm");
flags.set("Mongolia", "mn");
flags.set("Northern Mariana Islands", "mp");
flags.set("Martinique", "mq");
flags.set("Mauritania", "mr");
flags.set("Montserrat", "ms");
flags.set("Malta", "mt");
flags.set("Mauritius", "mu");
flags.set("Maldives", "mv");
flags.set("Malawi", "mw");
flags.set("Mexico", "mx");
flags.set("Malaysia", "my");
flags.set("Mozambique", "mz");
flags.set("Namibia", "na");
flags.set("New Caledonia", "nc");
flags.set("Niger", "ne");
flags.set("Nigeria", "ng");
flags.set("Nicaragua", "ni");
flags.set("Netherlands", "nl");
flags.set("Norway", "no");
flags.set("Nepal", "np");
flags.set("Nauru", "nr");
flags.set("New Zealand", "nz");
flags.set("Oman", "om");
flags.set("Panama", "pa");
flags.set("Peru", "pe");
flags.set("Polynesia", "pf");
flags.set("Papua New Guinea", "pg");
flags.set("Philippines", "ph");
flags.set("Pakistan", "pk");
flags.set("Poland", "pl");
flags.set("Puerto Rico", "pr");
flags.set("Portugal", "pt");
flags.set("Palau", "pw");
flags.set("Paraguay", "py");
flags.set("Qatar", "qa");
flags.set("Reunion", "re");
flags.set("Romania", "ro");
flags.set("Russia", "ru");
flags.set("Rwanda", "rw");
flags.set("Saudi Arabia", "sa");
flags.set("Solomon Islands", "sb");
flags.set("Seychelles", "sc");
flags.set("Sudan", "sd");
flags.set("Sweden", "se");
flags.set("Slovenia", "si");
flags.set("Slovakia", "sk");
flags.set("Sierra Leone", "sl");
flags.set("Senegal", "sn");
flags.set("Somalia", "so");
flags.set("Suriname", "sr");
flags.set("São Tomé and Príncipe", "st");
flags.set("El Salvador", "sv");
flags.set("Syria", "sy");
flags.set("Swaziland", "sz");
flags.set("Turks And Caicos Islands", "tc");
flags.set("Chad", "td");
flags.set("Togo", "tg");
flags.set("Thailand", "th");
flags.set("Tadjikistan", "tj");
flags.set("Turkmenistan", "tm");
flags.set("Tunisia", "tn");
flags.set("Tonga", "to");
flags.set("Turkey", "tr");
flags.set("Trinidad And Tobago", "tt");
flags.set("Tuvalu", "tv");
flags.set("Taiwan", "tw");
flags.set("Tanzania", "tz");
flags.set("Ukraine", "ua");
flags.set("Uganda", "ug");
flags.set("United Kingdom", "uk");
flags.set("United States", "us");
flags.set("Uruguay", "uy");
flags.set("Uzbekistan", "uz");
flags.set("Saint Vincent & Grenadines", "vc");
flags.set("Venezuela", "ve");
flags.set("British Virgin Islands", "vg");
flags.set("United States Virgin Islands", "vi");
flags.set("Vietnam", "vn");
flags.set("Vanuatu", "vu");
flags.set("Samoa", "ws");
flags.set("Yemen", "ye");
flags.set("Mayotte", "yt");
flags.set("South Africa", "za");
flags.set("Zambia", "zm");
flags.set("Zimbabwe", "zw");
flags.set("Lao PDR", "la");
flags.set("Montenegro", "me");
flags.set("Palestine", "ps");
flags.set("South Sudan", "ss");
flags.set("Serbia", "rs");
flags.set("Timor-Leste", "tl");
flags.set("Kosovo", "xk");
flags.set("Saint-Barthélemy", "bl");
flags.set("Saint-Martin", "mf");
flags.set("St. Eustatius (Netherlands)", "bq");
flags.set("Saba (Netherlands)", "bq");
flags.set("Canary Islands (Spain)", "ic");

// Create a 1 country array if '1' round is selected
function getonecountry() {
    let selectedcountryarray = [];
    selectedcountryarray.push(countries[Math.floor(Math.random() * countries.length)]);
    sessionStorage.setItem("selectedcountryarray", JSON.stringify(selectedcountryarray));
}

// Create a 3 country array if '3' rounds is selected
function getthreecountry() {
    let countriestemp = countries.slice();
    let selectedcountryarray = [];

    for (let i = 0; i < 3; i++) {
        let selectedcountry = countriestemp[Math.floor(Math.random() * countriestemp.length)];
        countriestemp.pop(selectedcountry);
        selectedcountryarray.push(selectedcountry);
    }
    sessionStorage.setItem("selectedcountryarray", JSON.stringify(selectedcountryarray));
}

// Create a 5 country array if '5' rounds is selected
function getfiveecountry() {
    let countriestemp = countries.slice();
    let selectedcountryarray = [];

    for (let i = 0; i < 5; i++) {
        let selectedcountry = countriestemp[Math.floor(Math.random() * countriestemp.length)];
        countriestemp.pop(selectedcountry);
        selectedcountryarray.push(selectedcountry);
    }
    sessionStorage.setItem("selectedcountryarray", JSON.stringify(selectedcountryarray));
}

// Reset 'infiniterounds' item when game is reset
function resetinfiniterounds() {
    sessionStorage.setItem("infinite", "False");
}

// Hide 'player progress chart' save message if not playing 'infinite' rounds mode
function hidesavebutton() {
    if (sessionStorage.getItem("infinite") === "True") {
        document.getElementById("autosavemessage").style.display = "block";
    } else {
        document.getElementById("autosavemessage").style.display = "none";
    }
}

// Create an 80 country array if 'infinite' rounds is selected
function getinfinitecountry() {
    sessionStorage.setItem("infinite", "True");
    let countriestemp = countries.slice();
    let selectedcountryarray = [];

    for (let i = 0; i < 80; i++) {
        let selectedcountry = countriestemp[Math.floor(Math.random() * countriestemp.length)];
        countriestemp.pop(selectedcountry);
        selectedcountryarray.push(selectedcountry);
    }
    sessionStorage.setItem("selectedcountryarray", JSON.stringify(selectedcountryarray));
}

/*
  Select an API to utilise.
  If 'flags' mode then get flags from 'https://flagpedia.net' by inserting the country code into the API URL
  if 'countries' mode then call fetchimage()
  Once obtained, set the image.src to the fetched image

  Unplash API: https://unsplash.com/developers
  Flagpedia: https://flagpedia.net/download/api

 */
window.addEventListener("DOMContentLoaded", async () => {
    if (sessionStorage.getItem("gamemode") === "True") {
        let selectedcountryarray = sessionStorage.getItem("selectedcountryarray");
        selectedcountryarray = JSON.parse(selectedcountryarray);
        var countrycode = flags.get(selectedcountryarray[0]);

        if (countrycode === undefined) {return}

        const image = document.getElementById('APIimage');
        if (image || image != null) { // Check if the image exists to stop error, as function continuously runs
            image.src = "https://flagcdn.com/w640/" + countrycode + ".png";
        }
    } else {
        const image = document.getElementById('APIimage');
        if (image || image != null) { // Check if the image exists to stop error, as function continuously runs
            image.src = await fetchimage();
        }
    }
});

/*
  Fetch the country image from the Unsplash API by inserting the country name into the API URL with the client id key.
  A random array of images is created and a single image is returned.
  Try Catch statement used for errors when fetching images
 */
async function fetchimage() {
    try {
        let url = "";
        let gamemodetype = sessionStorage.getItem("gamemode");
        let selectedcountryarray = sessionStorage.getItem("selectedcountryarray");
        selectedcountryarray = JSON.parse(selectedcountryarray);
        let firstcountry = selectedcountryarray[0].replace(/ /g, "_"); // replaces spaces in country names with underline
        url = 'https://api.unsplash.com/search/photos?query=' + firstcountry + '&client_id=es03-4SsJY9EfXuRksaoVjjm8I85DGqU3rBXKe7EDYA';
        let random = Math.floor(Math.random() * 5);
        return fetch(url)
            .then((res) => res.json())
            .then((data) => {
                let collectedimages = data.results[random];
                return collectedimages.urls.regular;
            })
            .catch(err => console.log(err));
    }
    catch(e){
    }
}

/*
  Provide functionality to the interactive map on game.html.
  Include multiple event listeners for mouse actions; hover, click etc.
  Modify the corresponding CSS from location.css by using the country event ids
 */
function map() {
    document.querySelectorAll('.allPaths').forEach(event => {
        event.addEventListener("mouseover", function () {

            if (event.id === sessionStorage.getItem("clicked")) {
                document.getElementById('countryname2').innerText = event.id;
                document.getElementById('countryname').style.opacity = 1;
            } else {
                event.style.fill = "green";
                document.getElementById('countryname2').innerText = event.id;
                document.getElementById('countryname').style.opacity = 1;
            }
        })
        event.addEventListener("mouseleave", function () {

            if (event.id === sessionStorage.getItem("clicked")) {
                document.getElementById('countryname').style.opacity = 0;
            } else {
                event.style.fill = "#ececec";
                document.getElementById('countryname').style.opacity = 0;
            }
        })
        event.addEventListener("click", function () {

            let clicked = (sessionStorage.getItem("clicked"));
            if (clicked === '') {} else {

                // adding \ to spaces in clicked
                let spaceout = clicked.replace(/\s/g, '\\ ');

                let array = document.querySelectorAll("[id= " + spaceout + "]");
                for (let i = 0; i < array.length; i++) {
                    array[i].setAttribute('style', 'background-color:#ececec;');
                }
            }

            document.getElementById('chosencountry2').innerText = "Selected: " + event.id;
            event.style.fill = "#00008B";
            sessionStorage.setItem("individualguess", event.id);
            sessionStorage.setItem("clicked", event.id);
        })
    })
}

// Reset the clicked country variable after each round
function resetclickedvariable() {
    sessionStorage.setItem("clicked", '');
}

// Reset the player guess item after each round
function resetplayerguess() {
    sessionStorage.setItem("individualguess", '');
}

// Update the round number item after each round
function updateRound() {
    let round = localStorage.getItem("round");
    round = JSON.parse(round);
    round++;
    localStorage.setItem("round", JSON.stringify(round));
}

// Display the updated round number item after each round by modifying the element 'roundno' innertext
function showround() {
    document.getElementById("roundno").innerText = "Round " + localStorage.getItem("round");
}

// Reset the round number item to 1 after each game
function resetround() {
    let round = localStorage.getItem("round");
    localStorage.setItem("round", JSON.stringify(1));
}

/*
  Check player's answer and display text / icon based on if answer is correct or incorrect.
  - Correct = green tick
  - Incorrect or run out of time = red cross
  Completed by modifying the 'tickorcross' element src
 */
function correctorincorrect() {
    let selectedcountryarray = sessionStorage.getItem("selectedcountryarray");
    selectedcountryarray = JSON.parse(selectedcountryarray);

    const individualguess = sessionStorage.getItem('individualguess');

    let playerscore = sessionStorage.getItem("playerscore");
    playerscore = JSON.parse(playerscore);

    document.getElementById("playerGuess").innerText = "Your Guess: " + individualguess;
    document.getElementById("answer").innerText = "Answer: " + selectedcountryarray[0];

    if (sessionStorage.getItem("outoftime") === "true") {
        document.getElementById('tickorcross').src = "cross.png";
        document.getElementById('correctorincorrecttext').innerText = " Out of Time!";
        document.getElementById("playerGuess").style.visibility = 'hidden';
        sessionStorage.setItem("outoftime", "False");
    } else if (individualguess === selectedcountryarray[0]) {
        totalcorrectcounter();
        document.getElementById('tickorcross').src = "tick.png";
        document.getElementById('correctorincorrecttext').innerText = "You are Correct!";
        document.getElementById("playerGuess").style.color = 'green';
        playerscore++;
        sessionStorage.setItem("playerscore", JSON.stringify(playerscore));
    } else {
        document.getElementById('tickorcross').src = "cross.png";
        document.getElementById('correctorincorrecttext').innerText = "You are Incorrect!";
        document.getElementById("playerGuess").style.color = 'red';
    }

    selectedcountryarray.shift();

    sessionStorage.setItem("selectedcountryarray", JSON.stringify(selectedcountryarray));
}

// Direct the player to round.html (Next Round) or endpage.html (Endpage) based on number of countries left to guess
function nextroundorexit() {
    let selectedcountryarray = sessionStorage.getItem("selectedcountryarray");
    selectedcountryarray = JSON.parse(selectedcountryarray);

    if (sessionStorage.getItem("infinite") === "True" && document.getElementById("correctorincorrecttext").innerText === "You are Incorrect!") {
        location.href = 'endpage.html';
    } else {

        if (selectedcountryarray.length === 0) {
            location.href = 'endpage.html';
        } else {
            location.href = 'imageshown.html';
        }
    }
}

// Instantiate and reset the player score item
function instanteplayerscore() {
    let playerscore = 0;
    sessionStorage.setItem("playerscore", JSON.stringify(playerscore));
}

// Display the player's final score
function finalplayerscore() {
    let playerscore = sessionStorage.getItem("playerscore");
    playerscore = JSON.parse(playerscore);
    document.getElementById('playerscore').innerText = 'Final Score: ' + playerscore;
}

/*
 Check session variable for diffculty, onload of each round check diffculty again.
 Allocate player guessing time depending on difficulty selected by player.
 Time in (ms)
 */
function checkdifficulty() {
    let chosendifficulty = sessionStorage.getItem("chosendifficulty");
    if (chosendifficulty === "easy") {
        window.setTimeout(outoftime, 60000);
    } else if (chosendifficulty === "medium") {
        window.setTimeout(outoftime, 30000);
    } else {
        window.setTimeout(outoftime, 10000);
    }
}

// Create a link between 'game.html' and 'correctorincorrect.html'
function answer() {
    location.href = 'correctorincorrect.html';
}

/*
  Call answer() function when player runs out of time
  Sets 'outoftime' item to 'true'
 */
function outoftime() {
    sessionStorage.setItem("outoftime", "true");
    answer();
}

// Clear previously defined timeout
function cleartimeout() {
    window.clearTimeout();
}

/*
   Start and update timebar shown on game.html
   Interval based on players selected difficulty
   Clear time interval after bar reaches 100%
   Interval time in (ms)

   Time bar code based on https://www.w3schools.com/howto/howto_js_progressbar.asp (w3 schools progress bar)
 */
function starttimebar() {
    let x = 0;
    let interval = 0;
    let chosendifficulty = sessionStorage.getItem("chosendifficulty");

    if (chosendifficulty === "easy") {
        interval = 600;
    } else if (chosendifficulty === "medium") {
        interval = 300;
    } else {
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

/*
  Check if localstorage items are set and initialsie them if null
  Function performed at the start of the game on index.html to ensure all items are set before playing
 */
function playerinstantiate() {

    if (localStorage.getItem("infiniteroundnumberflags") === null) {
        let roundnumber = 0;
        localStorage.infiniteroundnumberflags = JSON.stringify(roundnumber);
    }

    if (localStorage.getItem("infiniteroundnumbercountries") === null) {
        let roundnumber = 0;
        localStorage.infiniteroundnumbercountries = JSON.stringify(roundnumber);
    }

    if (localStorage.getItem("playerscoresflags") === null) {
        let player_scores = [];
        localStorage.playerscoresflags = JSON.stringify(player_scores);
    }

    if (localStorage.getItem("roundnumberarrayflags") === null) {
        let roundnumberarray = [];
        localStorage.roundnumberarrayflags = JSON.stringify(roundnumberarray);
    }

    if (localStorage.getItem("playerscorescountries") === null) {
        let player_scores = [];
        localStorage.playerscorescountries = JSON.stringify(player_scores);
    }

    if (localStorage.getItem("roundnumberarraycountries") === null) {
        let roundnumberarray = [];
        localStorage.roundnumberarraycountries = JSON.stringify(roundnumberarray);
    }

    if (localStorage.getItem("roundnumber") === null) {
        let roundnumber = 0;
        localStorage.roundnumber = JSON.stringify(roundnumber);
    }

    if (localStorage.getItem("flagtimings") === null) {
        let flagtimings = [];
        localStorage.flagtimings = JSON.stringify(flagtimings);
    }

    if (localStorage.getItem("countriestimings") === null) {
        let countriestimings = [];
        localStorage.countriestimings = JSON.stringify(countriestimings);
    }

    if (localStorage.getItem("totalroundscountry") === null) {
        let player_scores = 0;
        localStorage.totalroundscountry = JSON.stringify(player_scores);
    }

    if (localStorage.getItem("totalcorrectcountry") === null) {
        let player_scores = 0;
        localStorage.totalcorrectcountry = JSON.stringify(player_scores);
    }

    if (localStorage.getItem("totalroundsflags") === null) {
        let player_scores = 0;
        localStorage.totalroundsflags = JSON.stringify(player_scores);
    }

    if (localStorage.getItem("totalcorrectflags") === null) {
        let player_scores = 0;
        localStorage.totalcorrectflags = JSON.stringify(player_scores);
    }
}

/*
  Check if 'infinite' round item is true
  Check gamemode and save score to player progress array
  If 'flags' then call autosavescoreflags();
  If 'Countries' then call autosavescorecountries();
 */
function checkifinfinite() {
    if (sessionStorage.getItem("infinite") === "True") {
        if (sessionStorage.getItem("gamemode") === "True") {
            autosavescoreflags();
        } else {
            autosavescorecountries();
        }
    } else {}
}

/*
  Save player's current 'infinite' score to inifite flags score array
  Check if storage is defined/supported
  If so, get local storage array item, add score and set local storage array item again
  Else alert player that local storage is not supported on browser
 */
function autosavescoreflags() {

    // check if supported in browser
    if (typeof (Storage) !== "undefined") {
        let playerscore = sessionStorage.getItem("playerscore");

        let player_scores2 = JSON.parse(localStorage.getItem("playerscoresflags"));
        player_scores2.push(playerscore);
        localStorage.setItem("playerscoresflags", JSON.stringify(player_scores2));

        let roundnumberarray2 = JSON.parse(localStorage.getItem("roundnumberarrayflags"));
        let roundnumber2 = JSON.parse(localStorage.getItem("infiniteroundnumberflags"));

        roundnumber2++;
        roundnumberarray2.push(roundnumber2);

        localStorage.setItem("roundnumberarrayflags", JSON.stringify(roundnumberarray2));
        localStorage.setItem("infiniteroundnumberflags", JSON.stringify(roundnumber2));

    } else {
        alert("Web Storage is not supported on this browser.");
    }
}

/*
  Save player's current 'infinite' score to inifite countries score array
  Check if storage is defined/supported
  If so, get local storage array item, add score and set local storage array item again
  Else alert player that local storage is not supported on browser
 */
function autosavescorecountries() {

    // check if supported in browser
    if (typeof (Storage) !== "undefined") {
        let playerscore = sessionStorage.getItem("playerscore");

        let player_scores2 = JSON.parse(localStorage.getItem("playerscorescountries"));
        player_scores2.push(playerscore);
        localStorage.setItem("playerscorescountries", JSON.stringify(player_scores2));

        let roundnumberarray2 = JSON.parse(localStorage.getItem("roundnumberarraycountries"));
        let roundnumber2 = JSON.parse(localStorage.getItem("infiniteroundnumbercountries"));

        roundnumber2++;
        roundnumberarray2.push(roundnumber2);

        localStorage.setItem("roundnumberarraycountries", JSON.stringify(roundnumberarray2));
        localStorage.setItem("infiniteroundnumbercountries", JSON.stringify(roundnumber2));

    } else {
        alert("Web Storage is not supported on this browser.");
    }
}

// Average player guess time variables
let start;
let end;
let guesstime;

// Start the timer during the country select stage i.e. 'game.html'
function startimer() {
    start = new Date();
}

/*
  Timer function for average guessing time.
  Ends the timer after the country select stage
  Checks for the type of game mode. 'True' = flags, 'False' = countries
  If 'flags' then add time to 'flagtimings' storage item
  If 'countries' then add time to 'countriestimings' storage item
 */
function endtimer() {
    end = new Date();
    guesstime = Math.round((end - start) / 1000);

    // if flags then add to flag time
    if (sessionStorage.getItem("gamemode") === "True") {
        let currentarray = JSON.parse(localStorage.getItem("flagtimings"));
        currentarray.push(guesstime);
        localStorage.setItem("flagtimings", JSON.stringify(currentarray));
    } else {
        let currentarray = JSON.parse(localStorage.getItem("countriestimings"));
        currentarray.push(guesstime);
        localStorage.setItem("countriestimings", JSON.stringify(currentarray));
    }
}

/*
  Set the player stats for countries
  Each HTML box contains a differnt stat from the local storage
  Each HTML box selected by id and modified using '.innertext'
  For the infinite scores, 'Math' is utilised to perform basic mathematical functions to the countries infinite score array
 */
function setstatscountry() {
    let avgtimecountries = JSON.parse(localStorage.getItem("countriestimings"));
    let sumcountries = 0;
    for (let i = 0; i < avgtimecountries.length; i++) {
        sumcountries += parseInt(avgtimecountries[i]);
    }
    let avgcountries = Math.round(sumcountries / avgtimecountries.length * 10) / 10;
    document.getElementById("avgtimecountries").innerText = String.fromCodePoint(0x1F554) + "\nAverage Guess Time:\n" + avgcountries + "s";

    let totalroundscountries = JSON.parse(localStorage.getItem("totalroundscountries"));
    document.getElementById("totalroundscountries").innerText = String.fromCodePoint(0x1F60E) + "\n\nTotal Rounds: \n" + totalroundscountries;

    let totalcorrectcountries = JSON.parse(localStorage.getItem("totalcorrectcountries"));
    document.getElementById("totalcorrectcountries").innerText = String.fromCodePoint(0x2705) + "\n\nTotal Correct (%): \n" +   Math.round((totalcorrectcountries / totalroundscountries) * 100);

    let playerscoresoverall = JSON.parse(localStorage.getItem("playerscorescountries"));
    let highest = Math.max.apply(Math, playerscoresoverall);
    let lowest = Math.min.apply(Math, playerscoresoverall);
    let sum = 0;

    for (let i = 0; i < playerscoresoverall.length; i++) {
        sum += parseInt(playerscoresoverall[i]);
    }

    let avg = Math.round(sum / playerscoresoverall.length * 10) / 10;
    document.getElementById("highestcountries").innerText = "Highest Score: \n" + highest;
    document.getElementById("lowestcountries").innerText = "Lowest Score: \n" + lowest;
    document.getElementById("avgcountries").innerText = "Avg Score: \n" + avg;
}

/*
  Set the player stats for flags
  Each HTML box contains a differnt stat from the local storage
  Each HTML box selected by id and modified using '.innertext'
  For the infinite scores, 'Math' is utilised to perform basic mathematical functions to the flags infinite score array
 */
function setstatsflag() {
    let avgtimeflags = JSON.parse(localStorage.getItem("flagtimings"));
    let sumflags = 0;
    for (let i = 0; i < avgtimeflags.length; i++) {
        sumflags += parseInt(avgtimeflags[i]);
    }
    let avgflags = Math.round(sumflags / avgtimeflags.length * 10) / 10;
    document.getElementById("avgtimeflags").innerText = String.fromCodePoint(0x1F554) + "\nAverage Guess Time:\n" + avgflags + "s";

    let totalroundsflags = JSON.parse(localStorage.getItem("totalroundsflags"));
    document.getElementById("totalroundsflags").innerText = String.fromCodePoint(0x1F60E) + "\n\nTotal Rounds: \n" + totalroundsflags;

    let totalcorrectflags = JSON.parse(localStorage.getItem("totalcorrectflags"));
    document.getElementById("totalcorrectflags").innerText = String.fromCodePoint(0x2705) + "\n\nTotal Correct (%): \n" + Math.round((totalcorrectflags / totalroundsflags) * 100);

    let playerscoresoverall = JSON.parse(localStorage.getItem("playerscoresflags"));
    let highest = Math.max.apply(Math, playerscoresoverall);
    let lowest = Math.min.apply(Math, playerscoresoverall);
    let sum = 0;
    for (let i = 0; i < playerscoresoverall.length; i++) {
        sum += parseInt(playerscoresoverall[i]);
    }
    let avg = Math.round(sum / playerscoresoverall.length * 10) / 10;
    document.getElementById("highestflags").innerText = "Highest Score: \n" + highest;
    document.getElementById("lowestflags").innerText = "Lowest Score: \n" + lowest;
    document.getElementById("avgflags").innerText = "Avg Score: \n" + avg;
}

/*
  Check gamemode and update total rounds played
  Checks for the type of game mode. 'True' = flags, 'False' = countries
  If 'flags' then add time to 'totalroundsflags' storage item
  If 'countries' then add time to 'totalroundscountries' storage item
 */
function totalroundcounter() {
    if (sessionStorage.getItem("gamemode") === "True") {
        let totalrounds = JSON.parse(localStorage.getItem("totalroundsflags"));
        totalrounds++;
        localStorage.setItem("totalroundsflags", JSON.stringify(totalrounds));
    } else {
        let totalrounds = JSON.parse(localStorage.getItem("totalroundscountries"));
        totalrounds++;
        localStorage.setItem("totalroundscountries", JSON.stringify(totalrounds));
    }
}

/*
Check gamemode and update total correct rounds
Checks for the type of game mode. 'True' = flags, 'False' = countries
If 'flags' then add time to 'totalcorrectflags' storage item
If 'countries' then add time to 'totalcorrectcountries' storage item
*/
function totalcorrectcounter() {
    if (sessionStorage.getItem("gamemode") === "True") {
        let totalcorrect = JSON.parse(localStorage.getItem("totalcorrectflags"));
        totalcorrect++;
        localStorage.setItem("totalcorrectflags", JSON.stringify(totalcorrect));
    } else {
        let totalcorrect = JSON.parse(localStorage.getItem("totalcorrectcountries"));
        totalcorrect++;
        localStorage.setItem("totalcorrectcountries", JSON.stringify(totalcorrect));
    }
}
