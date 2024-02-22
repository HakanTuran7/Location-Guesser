'use strict';

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

// Creates link between imageshown.html and game.html
function clickcontinuebutton(){
    location.href = 'game.html';
}

// Closes current tab - doesnt work
function closetab(){
    window.close();
}

// Sets 'chosendifficulty' storage item to difficulty selected by user
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
const countries = ['Afghanistan','Angola','Albania','United Arab Emirates','Argentina','Armenia','Australia','Austria','Azerbaijan','Burundi','Belgium','Benin','Burkina Faso','Bangladesh','Bulgaria','Bosnia and Herzegovina','Belarus','Belize','Bolivia','Brazil','Brunei Darussalam','Bhutan','Botswana','Central African Republic','Canada','Switzerland','China',"Côte d'Ivoire",'Cameroon','Democratic Republic of the Congo','Republic of Congo','Colombia','Costa Rica','Cuba','Czech Republic','Germany','Djibouti','Denmark','Dominican Republic','Algeria','Ecuador','Egypt','Eritrea','Estonia','Ethiopia','Finland','Gabon','United Kingdom','Georgia','Ghana','Guinea','The Gambia','Guinea-Bissau','Equatorial Guinea','Greece','Greenland','Guatemala','Guyana','Honduras','Croatia','Haiti','Hungary','Indonesia','India','Ireland','Iran','Iraq','Iceland','Israel','Italy','Jamaica','Jordan','Japan','Kazakhstan','Kenya','Kyrgyzstan','Cambodia','South Korea','Kuwait','Lao PDR','Lebanon','Liberia','Libya','Sri Lanka','Lesotho','Lithuania','Luxembourg','Latvia','Morocco','Moldova','Madagascar','Mexico','Macedonia','Mali','Myanmar','Montenegro','Mongolia','Mozambique','Mauritania','Malawi','Malaysia','Namibia','Niger','Nigeria','Nicaragua','Norway','Nepal','Oman','Pakistan','Panama','Peru','Philippines','Papua New Guinea','Poland','North Korea','Paraguay','Palestine','Qatar','Romania','Rwanda','Western Sahara','Saudi Arabia','Sudan','South Sudan','Senegal','Sierra Leone','El Salvador','Serbia','Suriname','Slovakia','Slovenia','Sweden','Swaziland','Syria','Chad','Togo','Thailand','Tajikistan','Turkmenistan','Timor-Leste','Tunisia','Turkey','Taiwan','Tanzania','Uganda','Ukraine','Uruguay','Uzbekistan','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe','Somalia','Kosovo','South Africa','New Zealand','Chile','Netherlands','Portugal','Russia','Spain','France','United States','French Guiana','Aruba','Anguilla','American Samoa','Antigua and Barbuda','Bahrain','Bahamas','Saint-Barthélemy','Bermuda','Barbados','Comoros','Cape Verde','Curaçao','Cayman Islands','Cyprus','Dominica','Falkland Islands','Faeroe Islands','Federated States of Micronesia','Grenada','Guam','Saint Kitts and Nevis','Saint Lucia','Saint-Martin','Maldives','Marshall Islands','Malta','Northern Mariana Islands','Montserrat','Mauritius','New Caledonia','Nauru','Palau','Puerto Rico','French Polynesia','Solomon Islands','São Tomé and Principe','Sint Maarten','Seychelles','Turks and Caicos Islands','Tonga','Trinidad and Tobago','Tuvalu','Saint Vincent and the Grenadines','British Virgin Islands','United States Virgin Islands','Vanuatu','Samoa','Netherlands','St. Eustatius (Netherlands)','Saba (Netherlands)','Martinique','Canary Islands (Spain)','Mayotte','Reunion','Guadeloupe','Fiji'];

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
flags.set("Democratic Republic Of The Congo", "cd");
flags.set("Republic of Congo", "cg");
flags.set("Switzerland", "ch");
flags.set("Cote D'Ivoire", "ci");
flags.set("Chile", "cl");
flags.set("Cameroon", "cm");
flags.set("China", "cn");
flags.set("Colombia", "co");
flags.set("Costa Rica", "cr");
flags.set("Cuba", "cu");
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
flags.set("São Tomé and Principe", "st");
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
    console.log(sessionStorage.getItem("infinite"));
    sessionStorage.setItem("infinite","False");
    console.log(sessionStorage.getItem("infinite"));
}

//Hides save button on endpage.html page
function hidesavebutton(){
    if (sessionStorage.getItem("infinite") === "True"){
        document.getElementById("autosavemessage").style.display = "block";
    }else{
        document.getElementById("autosavemessage").style.display = "none";
    }
}

// Searches and creates array of 50 countries
function getinfinitecountry(){
    sessionStorage.setItem("infinite","True");
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
// if flag mode then gets flags from 'https://flagpedia.net'
window.addEventListener("DOMContentLoaded", async() => {
    if (sessionStorage.getItem("gamemode") === "True") {
        let selectedcountryarray = sessionStorage.getItem("selectedcountryarray");
        selectedcountryarray = JSON.parse(selectedcountryarray);
        console.log(selectedcountryarray[0]);
        var countrycode = flags.get(selectedcountryarray[0]);

        if (countrycode === undefined){
            console.log("cant find");
        }

        const image = document.getElementById('y');
        image.src = "https://flagcdn.com/w640/"+countrycode+".png";
        console.log(image.src);
    } else {
        const image = document.getElementById('y');
        //image.style.border  = "1vh solid white";
        const button = document.getElementById('x');
        image.src = await fetchimage();
    }
});



// Fetches image from Unsplash API or Flag API
async function fetchimage(countryname){
    let url = "";
    let gamemodetype = sessionStorage.getItem("gamemode");
    let selectedcountryarray = sessionStorage.getItem("selectedcountryarray");
    selectedcountryarray = JSON.parse(selectedcountryarray);
    let firstcountry = selectedcountryarray[0].replace(/ /g,"_");
    console.log(selectedcountryarray);
    console.log(firstcountry);
    url = 'https://api.unsplash.com/search/photos?query='+firstcountry+'&client_id=es03-4SsJY9EfXuRksaoVjjm8I85DGqU3rBXKe7EDYA';
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

        console.log("size of areray" + selectedcountryarray.length);
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


// checks if the 'infinite' storage item is True
function checkifinfinite(){
    if(sessionStorage.getItem("infinite") === "True"){
        autosavescore();
    }
    else{
    }
}

// Saves user's score to localstorage array
function autosavescore() {

    console.log(sessionStorage.getItem("infinite"));
    console.log("rarwrrrrrrrrrrrrr");

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
