// =======================================================
// Self-contained IndexedDB Helper Functions
// =======================================================
/**
 * Checks if the current browser session is running in a PWA-like display mode.
 * @returns {boolean} True if installed (standalone, fullscreen, or minimal-ui), false otherwise (browser tab).
 */
function isPWA() {
    const displayModes = ["fullscreen", "standalone", "minimal-ui"];

    // Check modern browsers (Chrome, Edge, Firefox, modern Safari on iOS)
    if (window.matchMedia) {
        const anyMatch = displayModes.some((mode) => window.matchMedia(`(display-mode: ${mode})`).matches);
        if (anyMatch) {
            return true;
        }
    }

    // Fallback for older iOS Safari before matchMedia support was reliable
    // navigator.standalone is an iOS-specific property
    if (('standalone' in navigator) && (navigator.standalone)) {
        return true;
    }

    // If none of the above are true, it's likely a normal browser tab
    return false;
}

// --- Example Usage ---



function newConsoleLog(message) {

}
words = {
    "en-US": [
        "by", //0
        "nostalgiaTok", //1
        "peiLamed", //2
        "what's your name?", //3
        "next", //4
        "Your", //5
        "nostalgia", //6
        "what time period are you nostalgic for?<br><span class='nstLower'>(ex 2022, summer 2023, mar 2021 - spring 2023)</span>", //7
        "what creator?<br><span class='nstLower'>(stick to one, can be changed later)</span>", //8
        "what topic?<br><span class='nstLower'>(stick to one, can be changed later)</span>", //9
        "'s ", //10
        "", //11
        "", //12
        "if you wanna save your nostalgia for later, name it here", //13
        "or not, thats ok", //14
        "fishing out your videos", //15
        "a whole lot of 'em", //16
        "player", //17
        "ts plays videos", //18
        "loading...", //19
        "", //20
        "choose this one&nbsp;-&nbsp;", //21
        "delete this one&nbsp;", //22
        "view saved nostalgias", //23
        "next one&nbsp;-&nbsp;", //24
        "options", //25
        "➢", //26
        "more of ts", //27
        "search again", //28
        "open video", //29
        "change name", //30
        "unseen vids only", //31
        "what's good, ", //32
        "anqrzfeubxkmlpwhdvocty", //33
        "abcd_efghijklmn_opqrstudvwxyz_", //34
        "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", //35
        "nvm", //36
        "Last time you used nostalgiaTok", //37
        "drag me to the option you want", //38
        "spring", //39
        "summer", //40
        "fall", //41
        "winter", //42
        "early", //43
        "mid", //44
        "late", //45
        "jan", //46
        "feb", //47
        "mar", //48
        "apr", //49
        "may", //50
        "jun", //51
        "jul", //52
        "aug", //53
        "sep", //54
        "oct", //55
        "nov", //56
        "dec", //57
        "january", //58
        "february", //59
        "march", //60
        "april", //61
        "may", //62
        "june", //63
        "july", //64
        "august", //65
        "september", //66
        "october", //67
        "november", //68
        "december", //69
        "past 2021 plzz", //70
        "well, before this year plzz", //71
        "between 2021 - now plzz", //72
        "sorry, try again plzz", //73
        "tysm btw ☺", //74
        "oopsie!", //75
        `Something didn't work<br>try searching again`, //76
        "all watched", //77
        "you watched all the videos for this search", //78
        "still loading", //79
        "the player will auto-scroll when videos arrive", //80
        "✅ -> ❌", //81
        "❌ -> ✅", //82
        "hold again to toggle 2x speed", //83
        "Advertisement", //84
        "Product of 🇸🇱", //85
        "Go Fullscreen", //86
        "Exit this menu", //87
        "Credits", //88
        "or click the '𐄛' menu --> 'Install App'", //Windows chrome 89
        "or click the '𐄛' menu --> 'Apps' --> 'Install this site as an app'", //windows edge 90
        "or click the '𐄛' menu  --> 'Cast, Save, and Share' --> 'Install App'", //mac chrome 91
        "or click the share menu  --> 'Add to dock'", //mac safari 92
        "or click the share menu --> 'Install App' or 'Add to Home screen' ", //android chrome 93
        "Click the share menu --> Add to home screen", //ios mobile and firefox mobile 94
        "I'm not exactly sure how to do it on your browser <br> but look for an 'Add to homescreen'-esque or 'Install app'-esque button in the share menu or browser menu and click that", //other 95
        "Click 'Install nostalgiaTok'<br>", //add-on for the first 5... 96
        "Hit this button <br> <button id='nstFirefoxFullscreen'>「 」</button>", //firefox desktop 97 
        "made by ddyson bang-ura (aka peiLamed / פילמד) <br><br>  help from stack overflow & a little bit of ai debugging <br><br>  designed by peiLamed <br><br>  product of sierra leone 🇸🇱 <br><br>  free palestine 🇵🇸🇸🇩🇨🇩", //98
        "see directions", //99
        "「」 |  『』 | Fullscreen Available :)", //100
        "use me instead :)", //101
        "share video", //102
        "your video is loading", //103
        "thx btw :)", //104
        "copied, thx 4 sharing :)", //105
        "enjoy this blast from the past", //106
        "sharing doesnt work on your browser, so i copied the link instead <br> thanks for sharing btw", //107
        "search similar", //108
        "search history", //109
        "search new", //110
        "searching..." //111
    ],

    "en": [
        "by", "nostalgiaTok", "FM Da$ani", "what's your name?", "(next)",
        "Your", "nostalgia", "what time period are you nostalgic for?",
        "what creators (if any) (use commas)?",
        "what topics (if any) (use commas)?",
        "'s ", "", ""
    ],

    "fr": [
        "par", "nostalgiaTok", "FM Da$ani", "Comment tu t'appelles ?", "(suivant)",
        "Ton", "nostalgie", "Pour quelle période ressens-tu de la nostalgie ?",
        "Quels créateurs (le cas échéant) (sépare par des virgules) ?",
        "Quels sujets (le cas échéant) (sépare par des virgules) ?",
        "de ", "", ""
    ],

    "es": [
        "por", "nostalgiaTok", "FM Da$ani", "¿Cómo te llamas?", "(siguiente)",
        "Tu", "", "¿De qué época sientes nostalgia?",
        "¿Qué creadores (si los hay) (usa comas)?",
        "¿Qué temas (si los hay) (usa comas)?",
        "", "nostalgia", " de "
    ],

    "ja": [
        "〜によって", "nostalgiaTok", "FM Da$ani", "あなたの名前は何ですか？", "(次)",
        "あなたの", "", "どの時代にノスタルジーを感じますか？",
        "どのクリエイター（いる場合）（カンマで区切って）？",
        "どのトピック（ある場合）（カンマで区切って）？",
        "", "ノスタルジア", " の "
    ],

    "ar": [
        "من", "FM Da$ani", "nostalgiaTok", "ما اسمك؟", "(التالي)",
        "لك", "", "ما الفترة الزمنية التي تشعر بالحنين إليها؟",
        "ما المبدعين (إن وجد) (استخدم الفواصل)؟",
        "ما المواضيع (إن وجد) (استخدم الفواصل)؟",
        "", "الحنين", " لـ "
    ],

    "he": [
        "מִן", "FM Da$ani", "nostalgiaTok", "מה השם שלך?", "(בא)",
        "שלך", "", "לאיזו תקופה אתה מתגעגע?",
        "אילו יוצרים (אם בכלל) (השתמש בפסיקים)?",
        "אילו נושאים (אם בכלל) (השתמש בפסיקים)?",
        "", "נוסטלגיה", " של "
    ]
}
 async function reqA() {
    let urli ="https://script.google.com/macros/s/AKfycbzZFj_09O6q6EQpHZepUbUbiOe8aO-6eWEQT92VJ1wshJiu-3TdlSpXPsrVTFniNbykxw/exec";

    try {
        const response = await fetch(urli);

        if (!response.ok) {
            return [6,'Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg']
        }
       

        const result = await response.text();
        return result.split('\n');   
    } catch (error) {
       return [error,'Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg','Aj-nPW-VEuo','U2beixNMeWA','NpcrGA3Mafg']
    }
}
var Ads;
async function setA(){
 Ads = await reqA();
}
setA();
var canYT = false;
var player;
var playPause = 0;
var autoplay = 1;
var withinSpeedUp = false;
var currentPlace = 0;
var allVideos = [];
var additions = {
    "en-US": [" ", "<b>&nbsp;  </b>", "<a> </a>"],
    "en": [" ", "<b>&nbsp;  </b>", "<a> </a>"],
    "ar": [" ", "<a>&nbsp;  </a>", "<b> </b>"],
    "he": [" ", "<a>&nbsp;  </a>", "<b> </b>"],
    "es": [" ", "<b>&nbsp;  </b>", "<a> </a>"],
    "fr": [" ", "<b>&nbsp;  </b>", "<a> </a>"]
}
var nextToken = "";
var currentToken = "";
var gE3mode;
var secondFunnyN = 41.23;
var funnyN = 0;
funnyN = secondFunnyN;
var doNow = false;
doNow = true;
var happeningNow = false;
var editMode = false;
function jumpLogo() {
    var logo = document.querySelector("#titleBar");
    for (var i of logo.children[0].children) {
        i.style.display = "none";
    }
    logo.style.transition = "0.25s";
    logo.style.transitionTimingFunction = "ease-in";
    var l = logo.style.top;
    logo.style.top = "20dvh";
    setTimeout(function (l) { logo.style.transform = "rotateZ(360deg)"; }, 200, l);
    setTimeout(function () {
        logo.style.transitionTimingFunction = "ease-out";
        logo.style.top = l;

        for (let j = 0; j < 4; j++) {
            setTimeout(function () {
                var ll = logo.getBoundingClientRect().width;
                var x = logo.children[0].children[j];
                x.style.transition = "0.5s"
                x.style.display = "";
                x.style.opacity = 0;
                logo.style.width = ll + "px";
                setTimeout(function () {
                    x.style.opacity = 1;
                    logo.style.width = "max-content";
                }, 25 * nsTimesNumber * j);
            }, 50 * nsTimesNumber * j);
        }
    }, 450 * nsTimesNumber);
    setTimeout(function () {
        logo.style.transition = "0.5s";
        logo.style.top = 0;
        logo.style.transition = "0.5s";
        var ll = logo.getBoundingClientRect().width;
        logo.style.width = ll + "px";
        document.querySelector("#textEnter").style.left = "calc(2 * var(--margin))";
        setTimeout(function () {
            logo.style.left = 0;
            setTimeout(function () {
                logo.style.width = "100dvw";
            }, 250 * nsTimesNumber)
        }, 500 * nsTimesNumber)
    }, 1000 * nsTimesNumber)

}
var stopdouble = false;
var wiggle = "";
var SF = false;
var isTE = false;
var speedVar = 0;
var isPD = false;
var handleSpeed = [1,2];
var nostalgiaTokVideos = [];
var tsVideo = {
    creator: "theragingitalian",
    topic: "funny",
    link: "www.tiktok.com/xyz"
}
var newPref = {
    reduced: "",
    excluded: "",
    increased: ""
}
function startFollow() {
    SF = false;
    document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
    document.querySelector('#swDrag').innerHTML = words[navigator.language][31];
    document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
    document.querySelector('#swDrag').innerText = "";
    SF = true;
  //  document.querySelector('#swDrag').style.width = "calc(100dvw - (2 * var(--margin)) - " + document.querySelector('#swDrag').getBoundingClientRect().x + "px)";

}
function endFollow() {
    SF = false;
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#creator')) {
        editModeAnimation();
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#swTopic')) {
        window.open("https://youtube.com/shorts/" + allVideos[currentPlace]);
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#exitsw')) {
       //change name
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#sharenos')) {
           if(false){

                }else{
                    var bool = localStorage.getItem('nostalgiaTokAllowOldVideos');
                    if(bool == "false"){
                       localStorage.setItem('nostalgiaTokAllowOldVideos','true');    
                       words[navigator.language][31] = (localStorage.getItem('nostalgiaTokAllowOldVideos')=="true"?"✅":"❌") + words[navigator.language][31].replace('✅','').replace('❌','');
                    }else{
                        localStorage.setItem('nostalgiaTokAllowOldVideos','false');
                        words[navigator.language][31] = (localStorage.getItem('nostalgiaTokAllowOldVideos')=="true"?"✅":"❌") + words[navigator.language][31].replace('✅','').replace('❌','');
                           }
                    
                }
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#nstFs')) {
       howToFullscreen();
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#nstCredits')) {
       howToFullscreen(true, [88,98]);
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#nstExit')) {
      
    }
    if (document.querySelector('#swDrag').parentNode == document.querySelector('#nstShare')) {
        var Bbb = document.createElement('button');
        Bbb.addEventListener('click', async () => {
  const shareData = {
    title: 'nostalgiaTok',
    text: words[navigator.language][106],
    url: window.location.href.split('?')[0]+"?share="+encodeURIComponent(allVideos[currentPlace].replace('📺',''))+"&user="+encodeURIComponent(JSON.stringify(user)) 
  };

  // 1. Check if the browser supports the Web Share API
  if (navigator.share) {
    try {
      // 2. Invoke the native sharing menu
      await navigator.share(shareData);
      console.log('Content shared successfully!');
    } catch (error) {
      // Handles user cancellation or system errors
      console.log('Sharing failed or was canceled:', error.message);
       fallbackShare(shareData);
    }
  } else {
    // 3. Fallback behavior if Web Share API is missing
    fallbackShare(shareData);
  }
});

function fallbackShare(data) {
  // Example: Fallback to copying the link to the clipboard
  navigator.clipboard.writeText(data.url);
  howToFullscreen(true,[102,107]);
}
        document.body.append(Bbb);
        Bbb.click();
        Bbb.remove();
      evaluateFullscreenReminder(105);
    }
    if(document.querySelector('#swDrag').parentNode == document.querySelector('#creator') || document.querySelector('#swDrag').parentNode == document.querySelector('#swTopic') || document.querySelector('#swDrag').parentNode == document.querySelector('#sharenos')|| document.querySelector('#swDrag').parentNode == document.querySelector('#nstCredits')|| document.querySelector('#swDrag').parentNode == document.querySelector('#nstFs')|| document.querySelector('#swDrag').parentNode == document.querySelector('#nstExit') || document.querySelector('#swDrag').parentNode == document.querySelector('#nstShare')){
    document.querySelector('#touchOverlay').style.display = "block";
    setTimeout(function () {
        document.querySelector('#touchOverlay').style.display = "block";
    },100)
    document.querySelector('#swipeScreen').style.opacity = 0;
    document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
    document.querySelector('#swDrag').innerText = words[navigator.language][38];
    setTimeout(function () { document.querySelector('#swipeScreen').style.display = "none"; }, 100)
}
}
var Arr = [];
var posinar = 0;
var whatYouScrolled = [];
var oldSearches = [];
var canEMAog = true;
function openAh() {
    var ah = document.querySelector('#allHold');
    ah.style.transition = "0.5s";
    ah.style.top = "0";
    ah.style.left = "0";
    ah.style.width = "100dvw";
    ah.style.height = "100dvh";
    ah.setAttribute('onclick', '');
    document.querySelector('#playground').style.opacity = 0;
    document.querySelector('#uvula').style.opacity = 0;
    document.querySelector('#uvula').style.display = "none";
}
function endSwipeFunc(){
     document.querySelector('#touchOverlay').style.display = "block";
    setTimeout(function () {
        document.querySelector('#touchOverlay').style.display = "block";
    },100)
    document.querySelector('#swipeScreen').style.opacity = 0;
    document.querySelector('#swFirst').append(document.querySelector('#swDrag'));
    document.querySelector('#swDrag').innerText = "";
    setTimeout(function () { document.querySelector('#swipeScreen').style.display = "none"; }, 100)
}
var hTFInterval;
var hTFInt = 0;
var hTFCurrPlace;
var hTFallVideos = [];
var hTFCover;
var hTFMessage;
function hTFEnd(){
   player.unMute();
hTFCover.style.opacity = "0";
setTimeout(function(){
    hTFCover.remove()
}, 500)
hTFMessage.style.opacity = "0";
setTimeout(function(){
    hTFMessage.remove()
}, 500)
document.querySelector('#allHold').style.marginLeft = "0vw";
}
function howToFullscreen(a,b){
    setTimeout(function(){
    player.mute();
    document.querySelector('#allHold').style.marginLeft = "-50vw";
    hTFCover = document.createElement('div');
    hTFCover.style.mask = "linear-gradient(to right, black 1%, transparent 99%)";
    hTFCover.style.width = "50dvw";
    hTFCover.style.height = "100dvh";
    hTFCover.style.left = "0";
    hTFCover.style.top = "0";
    hTFCover.style.zIndex = "100000";
    hTFCover.style.position = "absolute";
    hTFCover.style.opacity = "0";
    hTFCover.style.transition = "0.5s";
    setTimeout(function(){
    hTFCover.style.opacity = "1";
    },50)
    document.body.append(hTFCover);
    hTFMessage = document.createElement('div');
    hTFMessage.setAttribute('class','hTFMessage');
    hTFMessage.append(document.createElement('b'));
    hTFMessage.append(document.createElement('p'))
    if(a){
        hTFMessage.querySelector('b').innerText = words[navigator.language][b[0]];
        hTFMessage.querySelector('p').innerHTML = words[navigator.language][b[1]];
    }else{
         hTFMessage.querySelector('b').innerText = words[navigator.language][86];
       var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
       // Source - https://stackoverflow.com/a/19176790
// Posted by Havaligi Sathish, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-02, License - CC BY-SA 4.0
var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName="Windows 8.1";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
// Source - https://stackoverflow.com/a/26358856
// Posted by Nimesh, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-02, License - CC BY-SA 4.0
var bowserr = "unknown";
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
    bowserr = ('Opera');
  } else if (navigator.userAgent.indexOf("Edg") != -1) {
    bowserr = ('Edge');
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    bowserr = ('Chrome');
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    bowserr = ('Safari');
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    bowserr = ('Firefox');
  } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
  {
    bowserr = ('IE');
  } else {
    bowserr = ('unknown');
  }

  //From David Adams @ codeshack.io
const isMobile = () => {
  // Check if the new API is supported
  if (navigator.userAgentData) {
    return navigator.userAgentData.mobile;
  }
  
  // Fallback for Safari/Firefox (see Solution 3)
  return /Mobi|Android/i.test(navigator.userAgent);
};
var numberToBeSeen = 95;
if(OSName.includes('Windows') && bowserr == "Chrome" && isMobile() == false){
    numberToBeSeen = 89;
}
if(OSName.includes('Windows') && bowserr == "Edge" && isMobile() == false){
    numberToBeSeen = 90;
}
if((OSName == "Mac/iOS" || OSName == "Unix") && bowserr == "Chrome" && isMobile() == false){
    numberToBeSeen = 91;
}
if((OSName == "Mac/iOS" || OSName == "Unix") && bowserr == "Safari" && isMobile() == false){
    numberToBeSeen = 92;
}
if(isMobile() && bowserr == "Chrome" && iOS == false){
    numberToBeSeen = 93;
}
if(isMobile() && iOS){
    numberToBeSeen = 94;
}
if(isMobile() == false && bowserr == "Firefox"){
    numberToBeSeen == 97
}
if(numberToBeSeen < 94){
hTFMessage.querySelector('p').innerHTML = words[navigator.language][96] + words[navigator.language][numberToBeSeen];
}else{
    hTFMessage.querySelector('p').innerHTML = words[navigator.language][numberToBeSeen];
}
    }
    var Bb = document.createElement('button');
    Bb.innerText = "✅";
    var extraPress = "";
    if(a && (b[0] == 77 || b[0] == 75)){
        extraPress = "; evaluateFullscreenReminder(28);"
    }
    Bb.setAttribute('onclick','hTFEnd()'+extraPress)
    hTFMessage.append(Bb);
    document.body.append(hTFMessage);
    hTFCover.style.opacity = "0";
    hTFCover.style.transition = "0.5s";
    setTimeout(function(){
    hTFCover.style.opacity = "1";
    },50)
},100)
}
function editModeAnimation() {
    player.pauseVideo();
    document.querySelector('#pgTitle').style.opacity = 1;
    document.querySelector('#pgTitle').querySelector('b').innerText = words[navigator.language][109];
    document.querySelector('#pgTitle').querySelector('button').innerText = "X";
    setTimeout(function () {
        document.querySelector('#pgTitle').style.display = "flex";
        document.querySelector("#allHold").style.border = "1px solid var(--accent)"
    }, 500);
    oldUser.year = user.year;
    oldUser.preferences = user.preferences;
    oldUser.topics = user.topics;
    onScroll = true;
    if (canEMAog) {
        canEMAog = false;
         //Step 1, shrink body
        var ah = document.querySelector('#allHold');
        ah.setAttribute('onclick','openAh();')
        ah.style.transition = "0.5s";
        var pg = document.querySelector('#playground');
        pg.scrollTo(0, pg.scrollHeight);
        var pg1 = pg.querySelectorAll('.pgMain')[pg.querySelectorAll('.pgMain').length - 1];
        if ([...pg.querySelectorAll('.pgMain')].length > 1) {
            var pqb = [...pg.querySelectorAll('.pgMain')[0].querySelectorAll('button')];
            pqb[0].style.display = "block";
            pqb[1].innerText = words[navigator.language][108];
            pqb[1].setAttribute('class', 'primaryButton');
        }
        var swr = window.innerWidth / window.innerHeight;
        // Source - https://stackoverflow.com/a/41371037
        // Posted by Brett DeWoody, modified by community. See post 'Timeline' for change history
        // Retrieved 2026-04-15, License - CC BY-SA 4.0

        document.documentElement.style.setProperty("--screenWidthRatio", swr);
        var pgData = [...pg1.querySelectorAll('.pgData')];
        for (var i in pgData) {
            pgData[i].innerText = pgFormat(user[['year', 'preferences', 'topics'][i]])
        }
        var ahBcr = pg1.querySelector('.pgCover').getBoundingClientRect();
        ah.style.width = ahBcr.width + "px";
        ah.style.top = "calc(" + (pg1.getBoundingClientRect().top) + "px + 1em)";
        ah.style.left = ahBcr.x + "px";
        ah.style.height = ahBcr.height + "px";
        ah.style.borderRadius = "5px";
        ah.style.zIndex = 300;
        pg.style.opacity = 1;
        ah.style.border = "1px solid var(--swText)";
        setTimeout(function () {
            ah.style.transition = "0s";
            pg1.append(ah);
            ah.style.top = "calc(" + (pg1.offsetTop) + "px + 1em)";
            canEMAog = true;
        }, 500)
    }
}
var canEMA = true;
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
function pgFormat(text) {
    var tbr = text.split(',');
    for (var i in tbr) {
        tbr[i].replace(/ /g, '');
        tbr[i] = toTitleCase(tbr[i]);
    }
    if (i == "") {
        tbr.splice(i, 1)
    }
    tbr = tbr.join(', ');
    return tbr;
}
var oldUser = {};
function eMA2(simmilar, pgGivenData, neww) {
    var pg = document.querySelector('#playground');
    pg.scrollTo(0, pg.scrollHeight);
    if (canEMA) {
        canEMA = false;
        var ah = document.querySelector('#allHold');
        var pg = document.querySelector('#playground');
        var pg1 = pg.querySelectorAll('.pgMain')[pg.querySelectorAll('.pgMain').length - 1];
        //Step 2, make animation
        pg.scrollTop = 0;
        //to put in a timeout
        var pg2 = pg1.cloneNode(true);
        var button = pg1.querySelector('#pgSN');
        button.style.transition = "0.5s";
        button.style.opacity = "0";
        setTimeout(function () {
            button.remove()
        }, 1000)
        var pqb = [...pg2.querySelectorAll('button')];
        pqb[0].style.display = "block";
        pqb[1].innerText = words[navigator.language][108];
        pqb[1].setAttribute('class', 'primaryButton');
        var pqb2 = [...pg1.querySelectorAll('button')];
        pqb2[0].setAttribute('class', 'special');
        pqb2[1].setAttribute('class', 'special');
        
        var pg = document.querySelector('#playground');
        pg.scrollTo(0, pg.scrollHeight);
        pg.append(pg2);
        // Source - https://stackoverflow.com/a/11715670
        // Posted by Zhihao, modified by community. See post 'Timeline' for change history
        // Retrieved 2026-04-16, License - CC BY-SA 4.0

        pg.scrollTo(0, pg.scrollHeight);

        pg2.style.transition = "0s";
        pg2.style.opacity = 0;
        //switch the directions
        if (pg2.getAttribute('dir') == 'right') {
            pg2.querySelector('.pgP').style.left = "calc(100dvw - var(--margin) - " + pg2.querySelector('.pgP').getBoundingClientRect().width + "px)";
            pg2.querySelector('.pgCover').style.left = "var(--margin)";
            pg2.setAttribute('dir', 'left');
        } else {
            pg2.querySelector('.pgP').style.left = "var(--margin)";
            pg2.querySelector('.pgCover').style.left = "calc(100dvw - var(--margin) - (2*var(--margin) * var(--screenWidthRatio)))";
            pg2.setAttribute('dir', 'right');
        }
        pg.scrollTo(0, pg.scrollHeight);

        setTimeout(function () {
            pg.scrollTo(0, pg.scrollHeight);

            pg2.style.transition = "0.5s";
            pg2.style.opacity = 1;
            setTimeout(function () {
                //pg2.style.marginTop = "-6em";
                pg2.querySelector('#allHold').remove();
                var pg = document.querySelector('#playground');
                pg.scrollTo(0, pg.scrollHeight);
                //add the data
                var pg2Data = [...pg2.querySelectorAll('.pgData')];
                for (var i in pg2Data) {
                    pg2Data[i].innerText = pgFormat(user[['year', 'preferences', 'topics'][i]])
                }
                //animate the allHold
                ah.style.transition = "0s";
                ah.style.top = "calc(" + (pg1.getBoundingClientRect().top) + "px + 1em)";
                document.body.append(pg1.querySelector('#allHold'));
                ah = document.querySelector('#allHold');

                var ahBcr = ah.getBoundingClientRect();
                ah.style.width = ahBcr.width;
                var pg = document.querySelector('#playground');
                pg.scrollTo(0, pg.scrollHeight);
                ah.style.transition = "0.3s";
                //kghghj
                // ah.style.top = "calc(" + (pg1.getBoundingClientRect().top) + "px + 1em)";

                ah.style.top = "calc(" + (pg2.getBoundingClientRect().top) + "px + 1em)";
                ah.style.left = ahBcr.x + "px";
                ah.style.height = ahBcr.height;
                ah.style.transition = "0.5s";

                pg.scrollTo(0, pg.scrollHeight);
                ahBcr = pg2.querySelector('.pgCover').getBoundingClientRect();
                var ahBcrOG = pg1.querySelector('.pgCover').getBoundingClientRect();
                ah.style.width = ahBcr.width + "px";
                ah.style.top = "calc(" + (pg2.getBoundingClientRect().top) + "px + 1em)";
                ah.style.left = ahBcr.x + "px";
                ah.style.height = ahBcr.height + "px";
                editModeFunction(simmilar, pgGivenData, neww);
            }, 500);
            setTimeout(function () {
                ah.style.transition = "0s";
                ah = document.querySelector('#allHold');
                var ahBcr = ah.getBoundingClientRect();
                ah.style.width = ahBcr.width;
                pg.scrollTo(0, pg.scrollHeight);
                ah.style.top = "calc(" + (pg2.getBoundingClientRect().top) + "px + 1em)";
                ah.style.left = ahBcr.x + "px";
                ah.style.height = ahBcr.height;
                ah.style.transition = "0.5s";
                ah.style.top = "0";
                ah.style.left = "0";
                ah.style.width = "100dvw";
                ah.style.height = "100dvh";
                document.querySelector('#uvula').style.opacity = "1";
                document.querySelector('.uBall').style.overflow = "hidden";
                document.querySelector('#uvula').style.zIndex = "1";
                document.querySelector('#textEnter').style.opacity = "0.8";
                canEMA = true;
            }, 1000)
        }, 50)
    }

}
function pgCancel(text) {
    var ah = document.querySelector('#allHold');
    var pg = document.querySelector('#playground');
    var pg1 = pg.querySelectorAll('.pgMain')[pg.querySelectorAll('.pgMain').length - 1];
    user.year = oldUser.year;
    user.preferences = oldUser.preferences;
    user.topics = oldUser.topics;
    if (text == "X") {
        ah.style.transition = "0s";
        ah = document.querySelector('#allHold');
        var ahBcr = ah.getBoundingClientRect();
        ah.style.width = ahBcr.width;
        pg.scrollTo(0, pg.scrollHeight);
        ah.style.top = "calc(" + (pg1.getBoundingClientRect().top) + "px + 1em)";
        ah.style.left = ahBcr.x + "px";
        ah.style.height = ahBcr.height + "px";
        ah.style.width = ahBcr.width + "px";
        document.body.append(ah);
        ah.style.transition = "0.5s";
        setTimeout(function () {
            ah.style.top = "0";
            ah.style.left = "0";
            ah.style.width = "100dvw";
            ah.style.height = "100dvh";
            canEMA = true;
           document.querySelector('#pgTitle').style.opacity = 0;
            setTimeout(function () {
                document.querySelector('#pgTitle').style.display = "none";
                document.querySelector("#allHold").style.border = ""
            }, 500);
        }, 100);
    } else {
        document.querySelector('#uvula').style.display = "none";
        pg1.remove();
        if ([...document.querySelectorAll('.pgButtonHold')].length < 2) {
            document.querySelector('.pgButtonHold').innerHTML = `<button class="notspecial primaryButton" onclick="eMA2(true, this)">`+words[navigator.language][28]+`</button><button id="pgSN" class="notspecial pgButton" onclick="eMA2(true, this, true)">`+words[navigator.language][110]+`</button>`
        } else {
            document.querySelector('.primaryButton').setAttribute('class', '');
        }
       
        document.querySelector('.uBall').innerHTML = `<div class='teShape'></div><div class='teShape'></div>`;
        swapTe(17, function () { }, 18, function () { }, true);
        document.querySelector('#textEnter').innerHTML += ` <div id="displayVideos">
            <div id="videoFrame" src="" frameborder="0" allow="autoplay">
            </div>
            <div id="buttonHolder">
                <div id="leftButton" class="sideButton" words="25"></div>
            </div>
        </div>`;
         var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navigator.language][84]+'↘';
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                            
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = '↘';
                                            }
                                
                                      // console     
                                      player.destroy();
        onYouTubeIframeAPIReady();
        //player.loadVideoById(allVideos[currentPlace]);
        document.querySelector('#fullscreenButton').style.display = "block";
        runAnimation(true, true);
        editModeAnimation();
        var pgt = document.querySelector('#pgTitle');
        pgt.querySelector('button').innerText = "X";
        
        pgt.querySelector('b').innerText = words[navigator.language][109];
         if ([...document.querySelectorAll('.pgButtonHold')].length <= 2) {
            document.querySelector('.pgButtonHold').innerHTML = `<button  class="notspecial primaryButton" onclick="eMA2(true, this)">`+words[navigator.language][28]+`</button><button id="pgSN" class="notspecial pgButton" onclick="eMA2(true, this, true)">`+words[navigator.language][110]+`</button>`
                }
    }
  setTimeout(function(){  if (allVideos[currentPlace] == "Error") {
                                            giveError();
                                        }  else {
                                              var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navigator.language][84]+'↘';
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                            
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = '↘';
                                            }
                                             player.loadVideoById(avcp);
                                          // alert([allVideos[currentPlace], currentPlace])
                                          try{
                                           document.querySelector('#loadNext').setAttribute('src','https://youtube.com/embed/'+allVideos[((currentPlace)+1)].replace('📺',''));
                                          }
                                          catch(e){
                                            console.log(e);
                                          }
                                           // alert([allVideos[((currentPlace)+1)], currentPlace+1, document.querySelector('#loadNext').getAttribute('src')])
                                         console.error(allVideos);
                                        }},600)
}

function editModeFunction(simmilar, pgGivenData, neww) {
try{
    document.querySelector('#uvula').style.zIndex = "1";
    //document.querySelector('#playground').scrollTo(0, 0);
    onScroll = false;
    var ah = document.querySelector('#allHold');
    ah.setAttribute('onclick', '');
    var pggd = [...pgGivenData.parentNode.parentNode.querySelectorAll('.pgData')];
    for (var i in pggd) {
        user[['year', 'preferences', 'topics'][i]] = pggd[i].innerText;
    }
    //
    
    //
}
catch(e){
    console.log(e);
}
document.querySelector('#playground').style.opacity = 0;
    if (simmilar) {
         document.querySelector('#uvula').style.zIndex = "1";
        document.querySelector('#uvula').style.display = "block";
        document.querySelector('.uBall').innerHTML = "";
        var pg = document.querySelector('#pgTitle');
        pg.querySelector('button').innerText = "<";
        pg.querySelector('b').innerText = words[navigator.language][111];

        var teTee = document.querySelector('#textEnter');
        var uv = document.querySelector('#uvula');
        var ul = document.querySelector('#uLine');

        teTee.style.left = "100dvw";
        setTimeout(function () {
            teTee.innerHTML = `
<b id="teTitle" words="7">what time period are you nostalgic for?</b>
        <input n="0" type="text" class="hasBorder" id="teInput" />
<button id="teButton" words="4" onclick='  if (doneAnimation) {
      var thisVall = validateDate(document.querySelector("#teInput").value);
      if (!thisVall.includes("Year Error")) {
          user.year = thisVall;
          makeShapes(user.year, "       ", "y", true);
          swapTe(8, generatePreferences, 4, generatePreferences);
          document.querySelector("#teButton").removeAttribute("onclick", "");
      } else {
          handleError(thisVall)
      }
  }' style="display: block; opacity: 1;">next</button>
<button id="viewSaved"></button>
        <button id="teButton" words="4" onclick='  if (doneAnimation) {
      var thisVall = validateDate(document.querySelector("#teInput").value);
      if (!thisVall.includes("Year Error")) {
          user.year = thisVall;
          makeShapes(user.year, "       ", "y", true);
          swapTe(8, generatePreferences, 4, generatePreferences);
          document.querySelector("#teButton").removeAttribute("onclick", "");
      } else {
          handleError(thisVall)
      }
  }'></button>

        <button id="saveThis"></button>
    `;
            var dv = document.createElement('div');
            dv.setAttribute('id', 'displayVideos');
            dv.innerHTML = ` <div id="videoFrame" src="" frameborder="0" allow="autoplay">
            </div>
            <div id="buttonHolder">
                <div id="leftButton" class="sideButton" words="25"></div>
            </div>`;
            document.body.querySelector('#allHold').append(dv);
            onYouTubeIframeAPIReady();
            document.querySelector("#leftButton").setAttribute("onclick", "displaySwipe('l')");
         //   document.querySelector("#rightButton").setAttribute("onclick", "displaySwipe('r')");
            setTimeout(function () {
                document.documentElement.scrollTop = 0;
                document.documentElement.scrollLeft = 0;
                document.querySelector("#allHold").style.overflow = "hidden";
            }, 100);
            teTee.style.height = "";
            teTee.style.bottom = "";
            teTee.style.left = "";
            teTee.style.width = "";
            teTee.style.backgroundColor = "";
            try {
                document.querySelector('#displayVideos').style.display = "none";
            }
            catch (e) {
                console.log(e);
            }
            try {
                document.querySelector('#touchOverlay').style.display = "none";
            }
            catch (e) {
                console.log(e);
            }
                try {
                    document.querySelector("#teTitle").style.opacity = 1;
                }
                catch (e) {
                    console.log(e);
                }
                    try {
                        document.querySelector("#teButton").style.opacity = 1;
                    }
                    catch (e) {
                        console.log(e);
                    }
            doneAnimation = true;
            uv.style.top = "";
            uv.style.display = "block";
            ul.style.height = "";
            ul.style.top = "";
            //document.querySelector('#fullscreenButton').style.display = "none";
            if (!neww) {
                editMode = true;
                swapTe(shVar[isSharing][0], function () {
                    if (doneAnimation) {
                        var thisVall = validateDate(document.querySelector("#teInput").value);
                        if (!thisVall.includes("Year Error")) {
                            user.year = thisVall;
                            makeShapes(user.year, "       ", "y", true);
                            swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                            document.querySelector("#teButton").removeAttribute("onclick", "");

                        } else {
                            handleError(thisVall)
                        }
                    }
                }, shVar[isSharing][1], function () {
                    if (doneAnimation) {
                        var thisVall = validateDate(document.querySelector("#teInput").value);
                        if (!thisVall.includes("Year Error")) {
                            user.year = thisVall;
                            makeShapes(user.year, "       ", "y", true);
                            swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                            document.querySelector("#teButton").removeAttribute("onclick", "");

                        } else {
                            handleError(thisVall)
                        }
                    }
                });
                setTimeout(function () { jintI = 0; fkAround2() }, 550);
             
            } else {
                swapTe(shVar[isSharing][0], function () {
                    if (doneAnimation) {
                        var thisVall = validateDate(document.querySelector("#teInput").value);
                        if (!thisVall.includes("Year Error")) {
                            user.year = thisVall;
                            makeShapes(user.year, "       ", "y", true);
                            swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                            document.querySelector("#teButton").removeAttribute("onclick", "");
                        } else {
                            handleError(thisVall)
                        }
                    }
                }, shVar[isSharing][1], function () {
                    if (doneAnimation) {
                        var thisVall = validateDate(document.querySelector("#teInput").value);
                        if (!thisVall.includes("Year Error")) {
                            user.year = thisVall;
                            makeShapes(user.year, "       ", "y", true);
                            swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                            document.querySelector("#teButton").removeAttribute("onclick", "");
                        } else {
                            handleError(thisVall)
                        }
                    }
                });
                setTimeout(function () { document.querySelector('#teInput').value = ""}, 300);
               
            }
            setTimeout(function () {
                if (!neww) {
                    document.querySelector('#teInput').value = backValidateDate(user.year);
                } else {
                    editMode = false;
                }
                 document.querySelector('#uvula').style.zIndex = "1";
            }, 1000)
            for (var i of [...document.querySelectorAll('[words]')]) {
                try {
                    ah = additions[this.navigator.language][i.getAttribute('words')].split(" ")
                }
                catch (e) {
                    newConsoleLog(e);
                    ah = ["", ""]
                }
                try {
                    i.innerHTML = ah[0] + words[this.navigator.language][i.getAttribute('words')] + ah[1];
                }
                catch (e) {
                    newConsoleLog(e);
                    i.innerHTML = ah[0] + words["en-US"][i.getAttribute('words')] + ah[1];
                }
            }
        }, 1000)
        
    }
}
var sVl;
var sVt;
var fullsc;
var itzLater = false;
var onScroll = false;
var nsTimesNumber = 1;

window.addEventListener('scroll', () => {
    if (onScroll) {
        // Get the current vertical scroll position (in pixels)
        var sht = document.querySelector('#pgTitle');
        var tb = document.querySelector('#titleBar');
        if (tb.getBoundingClientRect().top + tb.getBoundingClientRect().height > 0) { sht.style.top = "calc(1em + " + tb.getBoundingClientRect().top + tb.getBoundingClientRect().height + "px)" } else { sht.style.top = 0 }
    }
});
window.addEventListener('touchmove', function (e) {
    if (!e.target.closest('.scrollable')) {
        e.preventDefault(); // Prevents page scrolling
    }
}, { passive: false });
var isSharing = "false";
var shVar = {
    "true": [15,0,15,0],
    "false": [7,4,8,4]
}
function nameClick(a){
    if(a == "false"){
        evaluateFullscreenReminder(101);
    }else{
        window.open('https://ddyson08.github.io/nostalgiatok/index.html')
    }
}
var shareVarr;
window.onload = function () {
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var shareUrl = decodeURIComponent(urlParams.get('share'));
if(shareUrl!=="null"){
     
     shareVarr = shareUrl;
     words[navigator.language][32] = words[navigator.language][103];
     words[navigator.language][3] = words[navigator.language][103];
     isSharing = "true";
     console.log(window.isSharing);
setTimeout(function(){
    
    document.querySelector('#uvula').style.display = "block";
    document.querySelector('#uvula').style.opacity = "1";
    user = JSON.parse(decodeURIComponent(urlParams.get('user')));
    makeShapes(user.year,'   ','y',true);
    makeShapes(user.topics,'   ','y',true);
    makeShapes(user.preferences,'   ','y',true);
    setTimeout(function(){runAnimation();},500);
},1000);
}



    if(localStorage.getItem('nostalgiaTokAllowOldVideos') == null){
        localStorage.setItem('nostalgiaTokAllowOldVideos',false);
    }
    if(localStorage.getItem('nostalgiaTokOldVideos') == null){
        localStorage.setItem('nostalgiaTokOldVideos','');
    }
    if (localStorage.getItem('nostalgiaTokName') !== null) {
        nsTimesNumber = 1;
    }
    let root = document.documentElement;

  
        root.style.setProperty('--screenWidthRatio',(screen.width/screen.height));

 

    fullsc = 'no';
    sVl = {
        no: ["calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) + calc((100dvh - 10em) * (9/16)))", "calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) - 0.5em)", "calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) + calc((100dvh - 10em) * (9/16)))"],
        yes: ["calc(100dvw - 0.25em)", "-0.25em", "calc(100dvw - 0.25em)"]
    }
    sVt = {
        no: ["calc(100dvh - 10em + 4em)", "3.5em"],
        yes: ["calc(100dvh - 0.25em)", "0.25em"]
    }
    var Arr = [];
    var posinar = 0;
    var whatYouScrolled = [];
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // User prefers dark mode
        newConsoleLog('Dark mode is preferred');
        const root = document.documentElement;
        root.style.setProperty('--bg', 'HSL(60, 2%, 2%)');
        root.style.setProperty('--accent', 'HSL(152, 6%, 15%)');
        root.style.setProperty('--second', 'HSL(340, 100%, 10%)');
        root.style.setProperty('--text', 'HSL(60, 10%, 60%)');
        root.style.setProperty('--oj', ' HSL(11, 42%, 20%)');
        root.style.setProperty('--swText', 'HSL(152, 6%, 50%)');
        root.style.setProperty('--lightText', 'HSL(60, 56%, 10%)');
        root.style.setProperty('--lightText', 'HSL(60, 56%, 10%)');
        root.style.setProperty('--emphText', 'HSL(152, 6%, 40%)');
        root.style.setProperty('--emphBg', 'HSL(60, 2%, 96%)');
        root.style.setProperty('--contrast', 'HSL(60, 2%, 7%)');
        /*
         * :root {
    --bg: HSL(60, 56%, 90%);
    --accent: HSL(152, 6%, 70%);
    --second: HSL(340, 85%, 60%);
    --text: HSL(60, 56%, 90%);
    --font: 'GlacialIndifference';
    --ballSize: 10em;
    --oj: HSL(11, 42%, 58%);
    --swText: HSL(152, 6%, 50%);
    --lightTxt: HSL(60, 56%, 90%);
}
*/
    }
    newConsoleLog(1);
    for (var ii of jintArr) {
        var fg = Array.from(words[navigator.language][33]);
        fg[ii] = words[this.navigator.language][34][Math.floor(Math.random() * words[this.navigator.language][34].length)];
        words[navigator.language][33] = fg.join('');
    }
    newConsoleLog(2);
    document.querySelector("#allHold").onpointermove = event => {
      //  document.querySelector('#touchOverlay').style.display = "none";
        const { clientX, clientY } = event;
        if (SF) {
            newConsoleLog('q')
            lilWidth = clientY
            var closest = [10000000, '']; for (var i of list) { var Aa = document.querySelector(i).getBoundingClientRect(); var Aaa = Aa.y + Aa.height / 2; if (closest[0] > Math.abs(lilWidth - Aaa)) { closest[0] = Math.abs(lilWidth - Aaa); closest[1] = i; newConsoleLog(closest) } }
            if (closest[1] == "#creator") {
                document.querySelector('#swDrag').innerText = "-->";
               
               // document.querySelector('#touchOverlay').style.display = "block";
            }
            if (closest[1] == "#swTopic") {
                document.querySelector('#swDrag').innerText = allVideos[currentPlace];
              
               // document.querySelector('#touchOverlay').style.display = "block";
            }
            if (closest[1] == "#exitsw") {
                var inp = document.createElement('input');
                var exii = document.querySelector('#exitsw');
                exii.setAttribute('onmouseup','SF = false; this.querySelector("input").focus(); this.querySelector("input").click();');
                exii.setAttribute('ontouchend','SF = false; this.querySelector("input").focus(); this.querySelector("input").click();');
                inp.setAttribute('onkeyup',`if(event.keyCode == 13){ var vall = document.querySelector('#inpName').value;if(vall!==undefined){if(false){}else{localStorage.setItem('nostalgiaTokName',vall)}} SF = true; endSwipeFunc();}`)
                inp.setAttribute('id','inpName');
                if(false){

                }else{
                   
                    
                inp.setAttribute('placeholder',localStorage.getItem('nostalgiaTokName'))
                }
               document.querySelector('#swDrag').innerHTML = '';
                document.querySelector('#swDrag').append(inp);
            }
            if (closest[1] == "#sharenos") {
                if(false){

                }else{
                    var bool = localStorage.getItem('nostalgiaTokAllowOldVideos');
                    if(bool == "true"){
                      document.querySelector('#swDrag').innerText = words[navigator.language][82];
                      
                    }else{
                       document.querySelector('#swDrag').innerText = words[navigator.language][81];
                          }
                    
                }
                
               
            }
            if (closest[1] == "#nstFs") {
                document.querySelector('#swDrag').innerText = words[navigator.language][99];
            }
            if(closest[1] == "#nstCredits"){
                document.querySelector('#swDrag').innerText = words[navigator.language][85];
            }
            if(closest[1] == "#nstExit"){
                document.querySelector('#swDrag').innerText = "-->";
            }
            if(closest[1] == "#nstShare"){
                document.querySelector('#swDrag').innerText = words[navigator.language][104];
            }
            document.querySelector('#swDrag').style.width = "calc(100dvw - (2 * var(--margin)) - " + document.querySelector('#swDrag').getBoundingClientRect().x + "px)";
            document.querySelector(closest[1]).append(document.querySelector('#swDrag'))

        }
    }
    newConsoleLog(3);
    if (localStorage.getItem('nostalgiaTokName') !== null) {
        document.querySelector('#teInput').setAttribute('class', 'noBorder')
        document.querySelector('#teTitle').style.textDecoration = "none";
        document.querySelector('#textEnter').style.left = "calc(2 * var(--margin))";
        document.querySelector('#textEnter').style.width = " calc(100dvw - (4 * var(--margin)) - 2em)";
        document.querySelector('#teButton').style.display = "none";
        userName = localStorage.getItem('nostalgiaTokName');
        document.querySelector('#teTitle').innerHTML = words[navigator.language][32] + localStorage.getItem('nostalgiaTokName') + "?";
        setTimeout(function () {
            var ni = document.querySelector("#uNameplate");
            ni.style.color = "var(--accent)";
            ni.style.transition = "0.5s";
            ni.style.width = "0px";
            setTimeout(function () {
                ni.innerText = words[navigator.language][11] + words[navigator.language][12] + userName + words[navigator.language][10] + words[navigator.language][6];
                ni.style.color = "var(--text)";
                ni.style.width = "max-content";
                ni.style.left = "calc(50% + 0.5em)"
                setTimeout(function () {
                    ni.style.transition = "1s";
                    ni.style.left = "calc(50% - " + (ni.getBoundingClientRect().width / 2) +"px + 0.5em)"
                }, 500);
            }, 500);
            swapTe(shVar[isSharing][0], function () {
                if (doneAnimation) {
                    var thisVall = validateDate(document.querySelector("#teInput").value);
                    if (!thisVall.includes("Year Error")) {
                        user.year = thisVall;
                        makeShapes(user.year, "       ", "y", true);
                        swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                        document.querySelector("#teButton").removeAttribute("onclick", "");
                    } else {
                        handleError(thisVall)
                    }
                }
            }, shVar[isSharing][1], function () {
                if (doneAnimation) {
                    var thisVall = validateDate(document.querySelector("#teInput").value);
                    if (!thisVall.includes("Year Error")) {
                        user.year = thisVall;
                        makeShapes(user.year, "       ", "y", true);
                        swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                        document.querySelector("#teButton").removeAttribute("onclick", "");
                    } else {
                        handleError(thisVall)
                    }
                }
            });
            newConsoleLog(4);
            setTimeout(function () {
                fkAround();
            }, 500);
            document.querySelector("#uvula").style.opacity = "1";
            startPendulum();
            document.documentElement.scrollTop = 0;
            document.documentElement.scrollLeft = 0;
            document.querySelector("#allHold").style.overflow = "hidden";
        }, 2000, {})
        newConsoleLog(5);
        this.setTimeout(function () {
            document.querySelector('#teTitle').innerHTML = words[navigator.language][32] + localStorage.getItem('nostalgiaTokName') + "?";
            document.querySelector('#textEnter').style.left = "calc(2 * var(--margin))";
            document.querySelector('#textEnter').style.width = " calc(100dvw - (4 * var(--margin)) - 2em)";
        }, 1000);
    }
    newConsoleLog(6);
    for (var i of [...document.querySelectorAll('[words]')]) {
        try {
            ah = additions[this.navigator.language][i.getAttribute('words')].split(" ")
        }
        catch (e) {
            newConsoleLog(e);
            ah = ["", ""]
        }
        try {
            i.innerHTML = ah[0] + words[this.navigator.language][i.getAttribute('words')] + ah[1];
        }
        catch (e) {
            newConsoleLog(e);
            i.innerHTML = ah[0] + words["en-US"][i.getAttribute('words')] + ah[1];
        }
    }
    newConsoleLog(7);

    if (!itzLater) {
        jumpLogo();
    }
    pendulum = document.querySelector("#uvula");
    wiggleNumber = 1;
    funnyC = 1; newConsoleLog('HERE');
  
    newConsoleLog(8);
    function startPendulum() {
      //  var start = performance.now();
        wiggle = setInterval(function () {
            if (funnyC !== 0) {
                pendulum.style.transform = "rotateZ(" + (15 * (Math.cos(0.005 * ((funnyN*30) * 0.5)))) + "deg)";
				if(doNow){
					newConsoleLog(pendulum.style.transform);
					doNow = false;
				}
				funnyN +=1;
            }
        }, 18); // ~60fps
    }
    newConsoleLog(9);
    function stopPendulum() {
        clearInterval(wiggle);
        var UVU = document.querySelector('#uvula');
        UVU.style.transform = "";
        UVU.style.transform = "0.5s";
    }
    newConsoleLog(10);
    newConsoleLog(11);
    document.querySelector("#teInput").addEventListener("keyup", function (e) {
        slowLimit = 5;
        wiggleNumber = 10;
        canCount = true; 
        if (e.keyCode == 13) {
            enterName();
        }
    });
    newConsoleLog(12);
    document.querySelector("#teInput").addEventListener("click", function (e) {
        document.querySelector("#uvula").style.opacity = "1";
        startPendulum()
    });
    newConsoleLog(13);
    document.querySelector("#teButton").addEventListener("click", function (e) {
        enterName();
    });
    newConsoleLog(14);
    document.querySelector("#leftButton").setAttribute("onclick", "displaySwipe('l')");
  //  document.querySelector("#rightButton").setAttribute("onclick", "displaySwipe('r')");
    setTimeout(function () {
        document.documentElement.scrollTop = 0;
        document.documentElement.scrollLeft = 0;
        document.querySelector("#allHold").style.overflow = "hidden";
    }, 100);
    newConsoleLog(15);
};
ns = 0;
var is8 = true;
slowLimit = 0;
canCount = false;
canWiggleMore = false;
canWiggleLess = false;
slow = setInterval(function () {
    if (canCount) {
        ns += 1;
    }
    if (ns > slowLimit) {
        wiggleNumber = 1;
        ns = 0;
        canCount = false;
    }
}, 10);
var tmo = [];
function swapTe(n, f, m, g, t) {
    //  if (!stopdouble || n >= 19) {
    stopdouble = true;
    newConsoleLog('NNN' + n)
    newConsoleLog(['numa', n, f, m, g, t])
    if (n == 8) {
        is8 = false;
    }
    var ne = document.querySelector("#textEnter");
    var nee = ne.cloneNode(true);
    nee.style.left = "100dvw";
    if (n == 15 || n == 17) {
        nee.innerHTML = `<b id='teTitle'></b><button id='teButton'></button>`
    }
    nee.querySelector("#teTitle").innerHTML = words[navigator.language][n];
    if (n == 15 || n == 17 || n == 19 || n == 20) {
        if (nee.querySelector("input") !== null) {
            nee.querySelector("input").remove();
        }
    } else {
        const inputEl = nee.querySelector("input");
        inputEl.value = '';
       
        inputEl.setAttribute("onkeyup", "if (event.keyCode == 13) { var raeleigh = " + f + "; this.blur(); setTimeout(function(){raeleigh()},100)}");
    }
    if (t) {
        nee.style.height = "calc(var(--ballSize) + 1em)  ";
    }
    nee.querySelector("button").innerHTML = words[navigator.language][m];
    //nee.querySelector("button").addEventListener("click", g);
    if (n == 19 || n >= 19) {
        if (nee.querySelector("button") !== null) {
            nee.querySelector("button").remove();
        }
    }
    if (!([...document.querySelector("#allHold").querySelectorAll('.teTextEnter')].length > 1) && !([...document.querySelector("#allHold").querySelectorAll('.te2')].length > 1)) {
        var inputEl = nee.querySelector("input");
        if (editMode) {
            if (n == 7) {
                inputEl.value = backValidateDate(user.year);
            }
            if (n == 8) {
                inputEl.value = user.preferences;
            }
            if (n == 9) {
                inputEl.value = user.topics;
            }
        }
        document.querySelector("#allHold").append(nee);
    }
    var inputEl = nee.querySelector("input");
    if (editMode) {
        if (n == 7) {
            inputEl.value = backValidateDate(user.year);
        }
        if (n == 8) {
            inputEl.value = user.preferences;
        }
        if (n == 9) {
            inputEl.value = user.topics;
        }
    }
    ne.style.left = "-100dvw";
    document.querySelector('#teButton').setAttribute('onclick', "var raeleigh = " + g + "; raeleigh();");
    if (n !== 7 && document.querySelector('#teButton') !== "undefined") {
        document.querySelector('#teButton').style.display = "block";
    } else {
        document.querySelector('#teButton').style.display = "none";
    }
    tmo.push(setTimeout(function () {
        if (n >= 19) {
            newConsoleLog("made it >=19");
            try {
                nee.querySelector("#b1").remove();
            } catch (e) {
            }
            try {
                nee.querySelector("#b2").remove();
            } catch (e) {
            }
            try {
                nee.querySelector("#b3").remove();
            } catch (e) {
            }
            try {
                nee.querySelector("#b4").remove();
            } catch (e) {
            }
            if (nee.querySelector('#viewSaved') !== null) {
                nee.querySelector('#viewSaved').remove();
            }
            var b1 = document.createElement('button');
            b1.setAttribute('onclick', 'nextSaved()');
            b1.setAttribute('class', 'primaryButton');
            b1.setAttribute('id', 'b1');
            b1.innerHTML = words[navigator.language][24];
            var b2 = document.createElement('button');
            b2.setAttribute('onclick', 'chooseSaved()');
            b2.setAttribute('class', 'primaryButton');
            b2.setAttribute('id', 'b2');
            b2.innerHTML = words[navigator.language][21];
            var b3 = document.createElement('button');
            b3.setAttribute('onclick', 'delSaved()');
            b3.setAttribute('id', 'b3');
            b3.innerHTML = words[navigator.language][22];
            var b4 = document.createElement('button');
            b4.setAttribute('onclick', 'nvm()');
            b4.setAttribute('id', 'b4');
            b4.innerHTML = words[navigator.language][36];
            setTimeout(function () {
                nee.append(b2);
                nee.append(b1);
                nee.append(b3);
                nee.append(b4);
            }, 50);

        }

        ne.style.backgroundColor = "blue";
        newConsoleLog(ne);
        ne.remove();
        if (document.querySelectorAll('.teTextEnter').length > 1) {
            document.querySelectorAll('.teTextEnter')[1].remove();
            try {
                document.querySelectorAll('.teTextEnter')[1].remove();
            }
            catch (e) {
                newConsoleLog(e);
            }
        }
        nee.style.left = "calc(2 * var(--margin))";
        if (n >= 15 && n <= 18) {
            newConsoleLog(n);
            nee.style.left = "0em";
            nee.style.width = "100dvw";
            nee.style.bottom = "0"
            nee.style.height = "calc(2 * var(--ballSize))  "
            nee.setAttribute('class', 'te2');
        }
        try {
            document.querySelector('#teInput').setAttribute('class', 'hasBorder');
            document.querySelector('#teTitle').style.textDecoration = "";
            if (n !== 7 && document.querySelector('#teButton') !== "undefined") {
                document.querySelector('#teButton').style.display = "block";
            } else {
                document.querySelector('#teButton').style.display = "none";
            }
        }
        catch (e) { newConsoleLog(e) }
        newConsoleLog('NNN' + n)
        if (n !== 7 ) {
            try{
            document.querySelector('#teButton').style.display = "block";
            }
            catch(e){}
        } else {
            document.querySelector('#teButton').style.display = "none";
        }
        if (t) {
            nee.style.height = "calc(var(--ballSize) + 1em)  ";
        }
        if (n == 15 || n == 17) {
            if (nee.querySelector("input") !== null) {
                nee.querySelector("input").addEventListener("keyup", function (e) {
                    slowLimit += 1;
                    wiggleNumber = 10;
                    canCount = true;
                });
            }

        }

        if (n < 8) {
            if (window.localStorage.getItem('nostalgiaTokSaved') !== null) {
                nee.innerHTML += `<button style="display: block" id="viewSaved" class = "vs2" onclick="swapTe(19,function(){},25,function(){}); getSaved();">` + words[navigator.language][23] + `</button>`
            }
            var inputEl = nee.querySelector("input");
            if (editMode) {
                if (n == 7) {
                    inputEl.value = backValidateDate(user.year);
                }
                if (n == 8) {
                    inputEl.value = user.preferences;
                }
                if (n == 9) {
                    inputEl.value = user.topics;
                }
            }
        } else {
            newConsoleLog('>=8')
            try {
                document.querySelector("#viewSaved").remove();
                document.querySelector("#viewSaved").remove();
            } catch (e) {
                newConsoleLog('errr' + e);
            }
        }
        document.querySelector('#teButton').setAttribute('onclick', "var raeleigh = " + g + "; raeleigh();");
        stopdouble = false;
    }, 250));
    // }
}
var userName = "";
async function saveNew(val) {
    //  newConsoleLog(val);
    if (false) {
        await appendToStringStore('[NOSTALGIATOKSPLIT]' + val + '[NTS2]' + JSON.stringify(user))
    } else {
        var jsu = localStorage.getItem('nostalgiaTokSaved');
        if (jsu !== null) {
            localStorage.setItem('nostalgiaTokSaved', jsu + '[NOSTALGIATOKSPLIT]' + val + '[NTS2]' + JSON.stringify(user));
        }
        else {
            localStorage.setItem('nostalgiaTokSaved', val + '[NTS2]' + JSON.stringify(user));
        }
       
    }
}

function nextSaved() {
    console.warn("1 cleanup:", document.querySelector('#textEnter').innerHTML);
    if (!happeningNow) {
        happeningNow = true;
        funnyC = 0;
        savefunnyn = funnyN;
        var tempvar = Math.abs(funnyN - (20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075))) * 18;
            //console.log(tempvar +":"+ (15 * ((20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075)));
            const closest0 = (20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075));
            
        newConsoleLog(savefunnyn + 'soupppppppppp');
        var msi = setInterval(function () {
            document.querySelector('#uvula').style.transform = "rotateZ(" + (15 * (Math.cos(0.005 * ((funnyN * 30) * 0.5)))) + "deg)";
            if (funnyN >= closest0) {
                funnyN -= 1;
                if (funnyN < closest0) {
                    clearInterval(msi);
                }
            } else {
                funnyN += 1;
                if (funnyN > closest0) {
                    clearInterval(msi);
                }
            }

        }, 18);
    } else {
        var tempvar = 0;
    }
    setTimeout(function () {
        console.warn("2 cleanup:", document.querySelector('#textEnter').innerHTML);
        // funnyN = 0;
        posinar += 1;
        //document.getElementById('uvula').style.transform = ""
        document.getElementById('uvula').style.transition = "opacity 0.1s, top 0.1s, z-index 0.1s, background-color 0.1s, margin-top 0.1s, width 1s, height 0.1s, position 0.1s, left 0.1s, margin-left 0.1s, filter 0.1s";
        //var uvuPlace = document.getElementById('uBall').getBoundingClientRect();
        setTimeout(function () {
            var minHeight;
            var mH;
            for (var Yuval of document.querySelector('.uBall').children) {
                if ([...document.querySelector('.uBall').children].indexOf(Yuval) == 0) {
                    minHeight = parseFloat(Yuval.style.top);
                    mH = Yuval;
                } else {
                    if ((parseFloat(Yuval.style.top) < minHeight) && Yuval.getBoundingClientRect().width >= 1) {
                        minHeight = parseFloat(Yuval.style.top);
                        mH = Yuval;
                    }
                }
            }
            var q;
            var qq;
            var qqq;
            var q4;
            setTimeout(function () {
                console.warn("3 cleanup:", document.querySelector('#textEnter').innerHTML);
                q = mH.children[0];
                q.style.filter = "blur(0.25em)";
                console.error(q);
                qq = q.getBoundingClientRect();
                qqq = document.querySelector('.uBall').getBoundingClientRect();
                q4 = document.querySelector('.uBall');
                q4.style.transition = "2s";
                /*document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 0.1s, filter 1s  ";
                document.querySelector('.uBall').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 0.1s, filter 1s  ";
                setTimeout(function () {
                    document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, transform 0s, margin-left 1s, filter 1s  ";
                    document.querySelector('.uBall').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, transform 0s, margin-left 1s, filter 1s  ";

                }, 1500);
                */
               // document.getElementById('uvula').style.transform = "rotateZ(0deg)"
                //funnyN = secondFunnyN;
                document.querySelector("#allHold").append(q);
                q.setAttribute('style', 'left:' + (qq.x) + 'px; top:' + (qq.y) + 'px; opacity: 1; background-color: var(--accent); width:' + (qq.width) + 'px; height:' + (qq.height) + 'px; filter: blur(0.25em);');
            }, 50)
            setTimeout(function () {
                console.warn("4 cleanup:", document.querySelector('#textEnter').innerHTML);
                q.setAttribute('style', 'transition: 2s; left:' + (qqq.x) + 'px; top:' + (qqq.y) + 'px; opacity: 1; background-color: var(--accent); width:' + (qqq.width) + 'px; height:' + (qqq.height) + 'px; z-index: 1000; filter: blur(0.25em);');
                document.querySelector('.uBall').setAttribute('style', 'position: fixed; opacity: 0; left: -70dvw; top:-20dvh; width: 180dvw; height: 180dvw; filter: blur(0.25em);');
              //  document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, transform 0s, margin-left 1s, filter 1s  ";
            }, 100);
            setTimeout(function () {
                console.warn("5 cleanup:", document.querySelector('#textEnter').innerHTML);
                q.setAttribute('style', '');
                document.querySelector('#uvula').append(q);
                document.querySelector('.uBall').setAttribute('class', 'palestine');
                var Gaza = document.querySelector('.palestine');
                document.querySelector("#allHold").append(Gaza);
                Gaza.style.opacity = 0;
                Gaza.style.position = "absolute";
                Gaza.style.backgroundColor = "var(--bg)";
                Gaza.style.top = "-150dvh";
                Gaza.style.filter = "blur(0.25em)";
                Gaza.style.width = "100dvw";
                Gaza.style.height = "100dvh";
                genNext(false, false, true);
                var nBb = document.createElement('button'); nBb.setAttribute('id', 'teButton'); document.querySelector('#textEnter').append(nBb);
                // document.querySelector('.uBall').style.filter = "";
                swapTe(20, function () { }, 25, function () { });
                document.getElementById('uvula').style.transition = "opacity 0s, top 0s, z-index 0s, background-color 0s, margin-top 0s, width 0s, height 0s, position 0s, left 0s, margin-left 0s, filter 0s";
                setTimeout(function () {
                    console.warn("6 cleanup:", document.querySelector('#textEnter').innerHTML);
                    funnyC = 1; newConsoleLog('HERE');
                    happeningNow = false;
                }, 50);
            }, 900);
        }, 10);
        setTimeout(function () {
            var ooh = document.querySelector('#uLine');
            var mem = document.querySelector('#uNameplate');
            mem.style.marginTop = "calc(-50dvh + 1.5em + 10dvh - (var(--ballSize) / 2))";
            ooh.style.height = "calc(10dvh - (var(--ballSize) / 2))";
            setTimeout(function () {
                mem.style.marginTop = "";
                ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                document.getElementById('uvula').style.transition = "opacity 0s, top 0s, z-index 0s, background-color 0s, margin-top 0s, width 0s, height 0s, position 0s, left 0s, margin-left 0s, filter 0s";
                console.warn("7 cleanup:", document.querySelector('#textEnter').innerHTML);
            }, 500);
        }, 50)
        //document.getElementById('uvula').style.transition = "opacity 0s, top 0s, z-index 0s, background-color 0s, margin-top 0s, width 0s, height 0s, position 0s, left 0s, margin-left 0s, filter 0s";
    }, tempvar)
}
function genNext(t, two, x) {
    console.warn("8 cleanup:", document.querySelector('#textEnter').innerHTML);
    // Select all elements that have an 'id' attribute
    const allElementsWithIds = document.querySelectorAll('[id]');

    // Create a Set to store unique IDs encountered
    const seenIds = new Set();

    // Iterate through the selected elements
    allElementsWithIds.forEach(element => {
        const id = element.id;

        // If the ID has been seen before, remove the current element
        if (seenIds.has(id) && element.getAttribute('special') !== "true") {
           // newConsoleLog(element.getAttribute('special'))
            element.remove();
        } else {
            // If the ID is new, add it to the Set
            seenIds.add(id);
        }
    });
if(Arr[posinar % Arr.length].split('[NTS2]').length < 2){
    Arr.splice(posinar % Arr.length, 1);
    localStorage.setItem('nostalgiaTokSaved',Arr.join('[NOSTALGIATOKSPLIT]'));
}
    document.querySelector('#uvula').append(document.querySelector('.uBall'));
    var clone = document.querySelector('.uBall').cloneNode();
    clone.style.zIndex = "1000";
    words[navigator.language][20] = Arr[posinar % Arr.length].split('[NTS2]')[0].replace('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE]',words[navigator.language][37]) + "<br><span class='nstLower'>(" + (parseFloat(posinar % Arr.length) + 1) + " / " + Arr.length + ")</span>";
    var obj = JSON.parse(Arr[posinar % Arr.length].split('[NTS2]')[1]);
    makeShapes(obj.year, ' ', 'y', false, clone);
    makeShapes(obj.preferences, ',', 'p', false, clone);
    makeShapes(obj.topics, ',', 't', false, clone);
   // posinar += 1;
    if (!t) {
        genNext(true, clone, x);
        console.warn(clone);
    } else {
        if (!x) {
          document.querySelector('.uBall').remove();
            document.querySelector('#uvula').append(two);
            console.warn(two);
        }
        if (posinar) {
            setTimeout(function () {
                console.warn("9 cleanup:", document.querySelector('#textEnter').innerHTML);
                newConsoleLog([document.querySelector('.uBall').innerHTML, document.querySelector('.uBall').children])
                var minHeight;
                var mH;
                for (var Yuval of document.querySelector('.uBall').children) {
                    if ([...document.querySelector('.uBall').children].indexOf(Yuval) == 0) {
                        minHeight = parseFloat(Yuval.style.top);
                        mH = Yuval;
                    } else {
                        if ((parseFloat(Yuval.style.top) < minHeight) && Yuval.getBoundingClientRect().width >= 1) {
                            minHeight = parseFloat(Yuval.style.top);
                            mH = Yuval;
                        }
                    }
                }
                clone.style.width = "0px";
                clone.style.length = "0px";
                clone.style.opacity = "0";
                clone.style.transition = "0.5s";
                    mH.append(clone);
                    clone.setAttribute('id', 'clonedUball' + Math.random());
                    //document.querySelector("#allHold").append(clone);
                    console.warn([mH, clone]);
                    clone.style.width = "50%";
                    clone.style.height = "50%"
                    clone.style.top = "25%";
                    clone.style.opacity = "1";
                    clone.style.left = "25%";
                    clone.setAttribute("special", "true");
                    for (var i of clone.querySelectorAll('.teShape')) {
                        i.style.transition = "0s";
                        i.style.left = (parseFloat(i.style.left) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.top = (parseFloat(i.style.top) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.width = (parseFloat(i.style.width) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.height = (parseFloat(i.style.height) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                    }
            }, 1100);
        } else {
            setTimeout(function () {
                console.warn("9 cleanup:", document.querySelector('#textEnter').innerHTML);
                newConsoleLog([document.querySelector('.uBall').innerHTML, document.querySelector('.uBall').querySelector('.teShape')])
                var minHeight;
                var mH;
                for (var Yuval of document.querySelector('.uBall').querySelectorAll('.teShape')) {
                    if ([...document.querySelector('.uBall').querySelectorAll('.teShape')].indexOf(Yuval) == 0) {
                        minHeight = parseFloat(Yuval.style.top);
                        mH = Yuval;
                    } else {
                        if ((parseFloat(Yuval.style.top) < minHeight) && Yuval.getBoundingClientRect().width >= 1) {
                            minHeight = parseFloat(Yuval.style.top);
                            mH = Yuval;
                        }
                    }
                }
                mH.append(clone);
                clone.style.width = "0px";
                clone.style.length = "0px";
                clone.style.opacity = "0";
                clone.style.transition = "0.5s";
                    console.warn([mH, clone]);
                    clone.setAttribute('id', 'clonedUball');
                    clone.style.width = "50%";
                    clone.style.opacity = "1";
                    clone.style.height = "50%";
                    clone.style.top = "25%";
                    clone.style.left = "25%";
                    clone.setAttribute("special", "true");
                    for (var i of clone.querySelectorAll('.teShape')) {
                        i.style.transition = "0s";
                        i.style.left = (parseFloat(i.style.left) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.top = (parseFloat(i.style.top) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.width = (parseFloat(i.style.width) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                        i.style.height = (parseFloat(i.style.height) / parseFloat(window.getComputedStyle(document.querySelector("#allHold")).getPropertyValue('--ballSize'))) * 100 + "%";
                    }
            }, 1100);
        }
    }
}
async function getSaved() {
    if (true) {
        Arr = localStorage.getItem('nostalgiaTokSaved').split('[NOSTALGIATOKSPLIT]');
        if (Arr[0] == "null") {
            Arr.shift();
        }
       genNext(false);
        var pl = document.createElement('div');
        pl.setAttribute('class', 'palestine');
        pl.style.opacity = 0;
        pl.style.position = "absolute";
        pl.style.backgroundColor = "var(--bg)";
        pl.style.top = "-150dvh";
        pl.style.width = "100dvw";
        pl.style.height = "100dvh";
        document.querySelector("#allHold").append(pl);
        swapTe(20, function () { }, 25, function () { });
       // setTimeout(function () { nextSaved();},1000)
    } else {
        var nArr = await readStringStore();
        Arr = nArr.split('[NOSTALGIATOKSPLIT]');
        Arr.shift();
        genNext(false);
        swapTe(20, function () { }, 25, function () { });
    }
}

list = ['#creator', '#swTopic', '#exitsw','#sharenos','#nstFs','#nstCredits','#nstExit', '#nstShare'];
function generatePreferences() {
    user.preferences = document.querySelector("#teInput").value;
    makeShapes(user.preferences, ',', 'p', true);
   

    swapTe(9, function () {

        user.topics = document.querySelector("#teInput").value;
        makeShapes(user.topics, ',', 't', true);
        allVideos = [];
        
        swapTe(13, function () {
            saveNew(document.querySelector('input').value);
            swapTe(15, function () { }, 16, function () { }, true)
            runAnimation()
        }, 14, function () {
            swapTe(15, function () { }, 16, function () { }, true)
            runAnimation()
        })
    }, 4, function () {
        user.topics = document.querySelector('input').value;

        makeShapes(user.topics, ',', 't', true);
        swapTe(13, function () {
            saveNew(document.querySelector('input').value);
            swapTe(15, function () { }, 16, function () { }, true)
            runAnimation()
        }, 14, function () {
            swapTe(15, function () { }, 16, function () { }, true)
            runAnimation()
        })
    });


}
user = {
    year: '',
    preferences: '',
    topics: '',

}
var ra = false;
function runAnimation(bypass, bypass2) {
     for (var j of [...document.querySelectorAll('.videoOrbit')]) {
        j.remove();
    }
    if(!bypass2){
    currentPlace = 0;
    }
    if(document.querySelector('iframe#videoFrame') == null){
    requestVideos(currentToken);                      
    }              
    document.querySelector('#pgTitle').style.opacity = 0;
    setTimeout(function () {
        document.querySelector('#pgTitle').style.display = "none";
        document.querySelector("#allHold").style.border = ""
    }, 500);
    var multiplier = 1;
    if (bypass) {
        multiplier = 0.1
    }
 if (false) {
      //  await appendToStringStore('[NOSTALGIATOKSPLIT][NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user))
 } else {
    if(localStorage.getItem('nostalgiaTokSaved')){
     if (localStorage.getItem('nostalgiaTokSaved').split('[NOSTALGIATOKSPLIT]') !== undefined) {
         var totalNST = localStorage.getItem('nostalgiaTokSaved').split('[NOSTALGIATOKSPLIT]');
     } else {
         var totalNST = "";
     }
     if (totalNST[0].includes('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE]')) {
         totalNST[0] = '[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user)
     }
     else {
             totalNST.unshift('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user))
     }
     localStorage.setItem('nostalgiaTokSaved', totalNST.join('[NOSTALGIATOKSPLIT]'));
    }else{
        localStorage.setItem('nostalgiaTokSaved', '""');
        if (localStorage.getItem('nostalgiaTokSaved').split('[NOSTALGIATOKSPLIT]') !== undefined) {
         var totalNST = localStorage.getItem('nostalgiaTokSaved').split('[NOSTALGIATOKSPLIT]');
     } else {
         var totalNST = "";
     }
     if (totalNST[0].includes('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE]')) {
         totalNST[0] = '[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user)
     }
     else {
             totalNST.unshift('[NOSTALGIATOK973LASTTIMEINUSERLANGUAGE][NTS2]' + JSON.stringify(user))
     }
     localStorage.setItem('nostalgiaTokSaved', totalNST.join('[NOSTALGIATOKSPLIT]'));
    }
    }
    ra = true;
    setTimeout(function () {
try{
        if (!happeningNow) {
            happeningNow = true;
            funnyC = 0;
            savefunnyn = funnyN;
            var tempvar = Math.abs(funnyN - (20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075))) * 18;
            //console.log(tempvar +":"+ (15 * ((20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075)));
            const closest0 = (20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075));
            newConsoleLog(savefunnyn + 'soupppppppppp');
            var msi = setInterval(function () {
                document.querySelector('#uvula').style.transform = "rotateZ(" + (15 * (Math.cos(0.005 * ((funnyN * 30) * 0.5)))) + "deg)";
                if (funnyN >= closest0) {
                    funnyN -= 1;
                    if (funnyN < closest0) {
                        clearInterval(msi);
                    }
                } else {
                    funnyN += 1;
                    if (funnyN > closest0) {
                        clearInterval(msi);
                    }
                }
            
            

            }, 18);
        
            
        } else {
            var tempvar = 0;
        }
        } catch(e){
            //alert(e);
            newConsoleLog(e);
        }
        var q = document.querySelector('#uvula');
     //   document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 1s, filter 1s";
      //  document.querySelector('.uBall').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 1s, filter 1s";
        setTimeout(function () {
            //document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform: 0s, filter 1s";
            //document.querySelector('.uBall').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform: 0s, filter 1s";

        }, tempvar);
        //document.querySelector('#uvula').style.transform = "rotateZ(0deg)";
        var ooh = document.querySelector('#uLine');
        var mem = document.querySelector('#uMiniball');
        setTimeout(function () {
            q.style.top = "calc(1em)";
            ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
            ooh.style.top = "calc(50% + 30dvh - (var(--ballSize) / 2))";
            mem.style.top = "calc(50% - var(--margin) + 20dvh)";
            funnyC = 0;
            setTimeout(function () {

                //funnyN = 0;


                //document.querySelector('#uvula').style.transform = "rotateZ(0deg)";

                setTimeout(function () {
                    q.style.top = "calc(-50dvh + 4em)";
                    ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                    ooh.style.top = "calc(50%)"
                    mem.style.top = "calc(50% - 0.5em)";

                   // document.querySelector('#uvula').style.transform = "rotateZ(0deg)";
                    var n = document.querySelectorAll(".teShape");
                    var nn = n[Math.floor(Math.random() * [...n].length)]
                    nn.style.backgroundColor = "var(--oj)";
                    nn.style.opacity = "1";
                    // nn.style.filter = "";
                    setTimeout(function () {
                        q.style.top = "calc(1em)";
                        ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
                        ooh.style.top = "calc(50% + 30dvh - (var(--ballSize) / 2))";
                        mem.style.top = "calc(50% - var(--margin) + 20dvh)";
                        
                        for (var i of document.querySelectorAll(".teShape")) {
                            if (Math.random() < 0.5) {
                                i.style.backgroundColor = "var(--oj)";
                                i.style.opacity = "1";

                                //  i.innerHTML = "";
                                i.style.filter = "";
                                /*  if (i.children.length == 0) {
                                      var three = i.getBoundingClientRect().width * 0.3;
                                      var tee = document.createElement('div');
                                      tee.setAttribute('style', `
                                          width: 0; 
                                          height: 0; 
                                          border-top: `+ three + `px solid var(--oj);
                                          border-bottom: `+ three + `px solid var(--oj);
                                          
                                          border-left: `+ three + `px solid var(--accent);
                                      `);
                                      i.append(tee);
                                  }
                                      */
                            }
                        }
                        setTimeout(function () {
                            q.style.top = "calc(-50dvh + 4em)";
                            ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                            ooh.style.top = "calc(50%)"
                            mem.style.top = "calc(50% - 0.5em)";
                          /*  for (var i of document.querySelectorAll(".teShape")) {
                                var r = Math.floor(Math.random() * 3);
                                if (r == 0) {
                                    i.style.backgroundColor = "var(--oj)";
                                    i.style.opacity = "1";
                                    i.style.filter = "";
                                    /* var three = i.getBoundingClientRect().width * 0.3;
                                     var tee = document.createElement('div');
                                     tee.setAttribute('style', `
           width: 0; 
           height: 0; 
           border-top: `+three+`px solid var(--oj);
           border-bottom: `+ three +`px solid var(--oj);
           
           border-left: `+ three +`px solid var(--accent);
         `);
         
                                     i.append(tee);
                                     
                                }
                                if (r == 1) {
                                    i.style.backgroundColor = "var(--oj)";
                                    i.style.opacity = "0.5";
                                    //i.innerHTML="";
                                    //i.style.filter = "blur(0.25em)";
                                    /*   if (i.children.length == 0) {
                                           var three = i.getBoundingClientRect().width * 0.3;
                                           var tee = document.createElement('div');
                                           tee.setAttribute('style', `
             width: 0; 
             height: 0; 
             opacity: 50%;
             border-top: `+ three + `px solid var(--oj);
             border-bottom: `+ three + `px solid var(--oj);
             
             border-left: `+ three + `px solid var(--accent);
           `);
                                           i.append(tee);
                                       }
                                           
                                }
                    }
                        */
                            setTimeout(function () {
                                q.style.top = "calc(1em)";
                                ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
                                ooh.style.top = "calc(50% + 30dvh - (var(--ballSize) / 2))";
                                mem.style.top = "calc(50% - var(--margin) + 20dvh)";
                                for (var ayi of document.querySelectorAll(".teShape")) {

                                    ayi.style.backgroundColor = "var(--oj)";
                                    ayi.style.opacity = "1";

                                    //  i.innerHTML = "";
                                    ayi.style.filter = "";
                                    /*  if (i.children.length == 0) {
                                          var three = i.getBoundingClientRect().width * 0.3;
                                          var tee = document.createElement('div');
                                          tee.setAttribute('style', `
                                              width: 0; 
                                              height: 0; 
                                              border-top: `+ three + `px solid var(--oj);
                                              border-bottom: `+ three + `px solid var(--oj);
                                              
                                              border-left: `+ three + `px solid var(--accent);
                                          `);
                                          i.append(tee);
                                      }
                                          */

                                }
                                setTimeout(function () {
                                    q.style.top = "calc(-50dvh + 4em)";
                                    ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                                    ooh.style.top = "calc(50%)"
                                    mem.style.top = "calc(50% - 0.5em)";
                                   /* for (var i of document.querySelectorAll(".teShape")) {
                                        if (i.style.backgroundColor != "var(--oj)") {
                                            i.style.backgroundColor = "var(--oj)";
                                            i.style.opacity = "0.5";
                                            // i.innerHTML = "";
                                            // i.style.filter = "blur(0.25em)";
                                            if (i.children.length == 0) {
                                                var three = i.getBoundingClientRect().width * 0.3;
                                            }
                                            break;
                                        }
                                    }*/
                                   document.querySelector('.uBall').style.overflow = "visible";
                                    setTimeout(function () {
                                        q.style.top = "calc(1em)";
                                        ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
                                        ooh.style.top = "calc(50% + 30dvh - (var(--ballSize) / 2))";
                                        mem.style.top = "calc(50% - var(--margin) + 20dvh)";
                                       
                                        setTimeout(function () {
                                            q.style.top = "calc(-50dvh + 4em)";
                                            ooh.style.height = "calc(50dvh - (var(--ballSize) / 2))";
                                            ooh.style.top = "calc(50%)"
                                            mem.style.top = "calc(50% - 0.5em)";
                                            if (!bypass) {
                                                swapTe(17, function () { }, 18, function () { }, true);
                                            }

                                            setTimeout(function () {
                                                q.style.top = "calc(1em)";
                                                ooh.style.height = "calc(20dvh - (var(--ballSize) / 2))";
                                                ooh.style.top = "calc(50% + 30dvh - (var(--ballSize) / 2))";
                                                mem.style.top = "calc(50% - var(--margin) + 20dvh)";
                                                document.querySelector('#textEnter').style.background = "";
                                               
                                                

                                                /* setTimeout(function(){var v = q.getBoundingClientRect()
                                                 for(var j of [...document.querySelector('.uBall').children]){
                                                         if(j.getBoundingClientRect().height+j.getBoundingClientRect().y > v.y+v.height){
                                                             j.style.transition = "0.1s";
                                                             j.style.opacity = "0";
                                                         }
                                                     }}, 600) */
                                                setTimeout(function () {
                                                    document.querySelector('.uBall').style.overflow = "visible";
                                                    for (var ji of document.querySelectorAll(".teShape")) {
                                                        ji.style.transition = "1s";
                                                        ji.style.width = "calc(2 * var(--ballSize))";
                                                        ji.style.height = "calc(2 * var(--ballSize))";
                                                        ji.style.marginLeft = "calc(-1 * var(--ballSize))";
                                                        ji.style.marginTop = "calc(-1 * var(--ballSize))"
                                                        //ji.style.filter = "blur(2em)";
                                                        ji.style.opacity = "0"
                                                        ji.style.borderRadius = "50%";
                                                    }
                                                    setTimeout(function () {

                                                        for (var jji of document.querySelectorAll(".teShape")) {
                                                            jji.remove();

                                                        }
                                                    }, 1000)
                                                }, 500);
                                                
                                                setTimeout(function () {
                                                    
                                                    var t = document.querySelector('#textEnter')
                                                   t.style.backgroundColor = "var(--bg)";
                                                    t.style.color = "var(--bg)";
                                                  
                                                    
                                                    t.style.background = "radial-gradient( circle at 100%, var(--bg), rgba(0,0,0,0.2) 50%, var(--bg) 75%, rgba(0,0,0,0.05) 75% );";
                                                   
                                                    setTimeout(function () {
                                                        t.style.bottom = 0;
                                                        setTimeout(function () {
                                                            t.style.height = "calc(100dvh - 4em)";
                                                            t.style.maxHeight = "calc(100dvh - 4em)";
                                                            t.style.opacity = "1";
                                                            setTimeout(function () {
                                                                t.style.left = 0;
                                                                t.style.width = "100dvw";
                                                                setTimeout(function () {
                                                                    t.style.height = "100dvh";
                                                                    t.style.maxHeight = "100dvh"
                                                                    t.style.bottom = "-var(--margin)";
                                                                    document.querySelector('#uvula').style.zIndex = 1;
                                                                    var v = document.querySelector('#displayVideos');
                                                                    v.style.opacity = "1";
                                                                    v.style.display = "block";
                                                                   // document.querySelector('#leftButton').style.width = "calc(" + document.querySelector('#rightButton').getBoundingClientRect().width + "px - 1em)";
                                                                    t.append(v);
                                                                    funnyC = 1; newConsoleLog('HERE');
                                                                    v.style.top = "6em";
                                                                    var tOo = document.querySelector('#touchOverlay');
                                                                    tOo.style.top = "4em";
                                                                    tOo.style.display = "block";
                                                                    v.style.bottom = "2em";
                                                                    happeningNow = false;
                                                                    var TOOO = document.querySelector('#touchOverlay');
                                                                    var TOOO2 = TOOO.cloneNode(true);
                                                                    TOOO.replaceWith(TOOO2);
                                                                    TOOO = document.querySelector('#touchOverlay');
document.querySelector('.uBall').style.overflow = "hidden";

                                                                    document.querySelector('#teTitle').style = "opacity:0; transition: 1s;";
                                                                   TOOO.addEventListener('touchstart', function (event) {
                                                                        isTE = false;
                                                                        console.log("ts");
                                                                        initialTouchX = event.touches[0].clientX;
                                                                        initialTouchY = event.touches[0].clientY;
                                                                        setTimeout(function(){if(isTE == false){
                                                                    isPD = true;
                                                                    withinSpeedUp = true;
                                                                            speedVar++;
                                                                             document.querySelector('#fullscreenButton').innerHTML = `<p id="riseup">`+words[navigator.language][83]+`</p>`;
                                                                            //document.querySelector('#fullscreenButton').style.backdropFilter = "blur(10px)";
                                                                            document.querySelector('#fullscreenButton').style.width = "calc(calc(100dvh - 10em) * (9/16))";
                                                                            document.querySelector('#riseup').style.marginTop = "3em";
                                                                            document.querySelector('#riseup').style.opacity = "0";
                                                                            setTimeout(function(){document.querySelector('#riseup').style.marginTop = "0em"; document.querySelector('#riseup').style.opacity = "1";},500);
                                                                            setTimeout(function(){document.querySelector('#riseup').remove()},1500)
                                                                           var playbackRate = handleSpeed[speedVar%2];
var data = {event: 'command', func: 'setPlaybackRate', args: [playbackRate, true]};
var message = JSON.stringify(data);
document.querySelector('#videoFrame').contentWindow.postMessage(message, '*');
                                                                        }},500);
                                                                    });

                                                                    // TOUCH END
                                                                    TOOO.addEventListener('touchend', function (event) {
                                                                        
                                                                        isTE = true;
                                                                            if(!isPD){
                                                                               
                                                                          const element = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
                                                                if (!(element && element.getAttribute('id') == 'fullscreenButton') && withinSpeedUp == false) {
                                                                      //playPause +=1; 
                                                                      if(!withinSpeedUp){
                                                                    if(playPause % 2 == 0){
                                                                        player.playVideo(); playPause++;
                                                                    }else{
                                                                        player.pauseVideo(); playPause++;
                                                                    }
                                                                }
                                                                }else{
                                                                    document.getElementById('fullscreenButton').click();
                                                                }
                                                                withinSpeedUp = false;
                                                            }
                                                            isPD = false;
                                                                        console.log("te");
                                                                        finalTouchX = event.changedTouches[0].clientX;
                                                                        finalTouchY = event.changedTouches[0].clientY;
                                                                    try{
                                                                     document.querySelector('#riseup').remove();
                                                                        }catch(e){console.log(e)}
                                                                     document.querySelector('#fullscreenButton').setAttribute('style','');
                                                                      document.querySelector('#fullscreenButton').innerText = "↘";
                                                                      handleTouch(initialTouchX, finalTouchX, swipeUp, swipeDown);
                                                                    
                                                                    });

                                                                    // MOUSE DOWN
                                                                    TOOO.addEventListener('mousedown', function (event) {
                                                                        isTE = false;
                                                                        console.log("ts");
                                                                        initialTouchX = event.clientX;
                                                                        initialTouchY = event.clientY;
                                                                        setTimeout(function(){if(isTE == false){
                                                                            withinSpeedUp = true;
                                                                    isPD = true;
                                                                            speedVar++;
                                                                             document.querySelector('#fullscreenButton').innerHTML = `<p id="riseup">`+words[navigator.language][83]+`</p>`;
                                                                            //document.querySelector('#fullscreenButton').style.backdropFilter = "blur(10px)";
                                                                            document.querySelector('#fullscreenButton').style.width = "calc(calc(100dvh - 10em) * (9/16))";
                                                                            document.querySelector('#riseup').style.marginTop = "3em";
                                                                            document.querySelector('#riseup').style.opacity = "0";
                                                                            setTimeout(function(){document.querySelector('#riseup').style.marginTop = "0em"; document.querySelector('#riseup').style.opacity = "1";},500);
                                                                            setTimeout(function(){document.querySelector('#riseup').remove()},1500);
                                                                          var playbackRate = handleSpeed[speedVar%2];
                                                                            console.log([handleSpeed[speedVar%2],speedVar, speedVar%2])
var data = {event: 'command', func: 'setPlaybackRate', args: [playbackRate, true]};
var message = JSON.stringify(data);
document.querySelector('#videoFrame').contentWindow.postMessage(message, '*');
                                                                        }},500);
                                                                    });

                                                                    // TOUCH END
                                                                    TOOO.addEventListener('mouseup', function (event) {
                                                                      
                                                                        isTE = true;
                                                                          if(!isPD){
                                                                            
                                                                          const element = document.elementFromPoint(event.clientX, event.clientY);
                                                                if (!(element && element.getAttribute('id') == 'fullscreenButton')) {
                                                                     // playPause +=1; 
                                                                     if(!withinSpeedUp){
                                                                    if(playPause % 2 == 0){
                                                                        player.playVideo(); playPause++;
                                                                    }else{
                                                                        player.pauseVideo(); playPause++;
                                                                    }
                                                                }
                                                                }else{
                                                                    document.getElementById('fullscreenButton').click();
                                                                }
                                                                withinSpeedUp = false;
                                                            }
                                                            isPD = false;
                                                                        console.log("te");
                                                                        finalTouchX = event.clientX;
                                                                        finalTouchY = event.clientY;
                                                                        try{
                                                                     document.querySelector('#riseup').remove();
                                                                        }catch(e){console.log(e)}
                                                                      document.querySelector('#fullscreenButton').setAttribute('style','');
                                                                       document.querySelector('#fullscreenButton').innerText = "↘";
                                                                        handleTouch(initialTouchX, finalTouchX, swipeUp, swipeDown);
                                                                    
                                                                    });

 isSharing = "false";
                                                                    TOOO.addEventListener('click', function (event) {
                                                                        autoplay = 0; 
                                                                
                                                                    });
                                                                    try{
                                                                    player.loadVideoById(allVideos[currentPlace].replace('📺',''))
                                                                    player.playVideo();
                                                                    }
                                                                    catch(e){}
                    
                                                                }, 500 * multiplier)
                                                            }, 50 * multiplier)
                                                        }, 50 * multiplier)
                                                    }, 625 * multiplier)
                                                }, 950 * multiplier)
                                            }, 850 * multiplier)
                                        }, 250 * multiplier)
                                    }, 250 * multiplier)
                                }, 250 * multiplier)
                            }, 250 * multiplier)
                        }, 250 * multiplier)
                    }, 250 * multiplier)
                }, 250 * multiplier)
            }, 550 * multiplier)
        }, tempvar);


    }, 500);
}
function requestTheFullscreen(a) {
    var video = document.querySelector('#videoFrame');
    var touchOverlay = document.querySelector('#touchOverlay');
    var fullscreenButton = document.querySelector('#fullscreenButton');
    var Tee = document.querySelector('#textEnter');
    Tee.style.transition = "0s";
    if (a) {
        fullsc = 'yes';
		document.querySelector('#uvula').style.display = "none";
    video.style.width = "100dvw";
    video.style.height = "100dvh";
    video.style.left = "0";
    video.style.top = "-4em";
     touchOverlay.style.width = "100dvw";
    touchOverlay.style.height = "100dvh";
    touchOverlay.style.left = "0";
    touchOverlay.style.top = "0";
    Tee.style.zIndex = "152";
    video.style.zIndex = "152";
    touchOverlay.style.zIndex = "153";
        fullscreenButton.setAttribute('onclick', 'requestTheFullscreen(false)');
        fullscreenButton.innerText = '↖';
        for (var yes of [...document.querySelectorAll('.yes')]) {
            yes.style.opacity = 1;
        }
        for (var no of [...document.querySelectorAll('.no')]) {
            no.style.opacity = 0;
        }
    } else {
        fullsc = 'no';
        video.style.width = "calc(calc(100dvh - 10em) * (9/16))";
        video.style.height = "calc(-10em + 100dvh)";
        video.style.left = "calc((100dvw - ((100dvh - 10em) * (9/16)))/2)";
        video.style.top = "0em";
        touchOverlay.style.width = "calc(calc(100dvh - 10em) * (9/16))";
        touchOverlay.style.height = "calc(100dvh - 10em)";
        touchOverlay.style.left = "calc((100dvw - ((100dvh - 10em) * (9/16)))/2)"
        touchOverlay.style.top = "4em";
        fullscreenButton.setAttribute('onclick', 'requestTheFullscreen(true)')
        fullscreenButton.innerText = '↘';
         Tee.style.zIndex = "0";
    video.style.zIndex = "0";
        touchOverlay.style.zIndex = "1";
        for (var yes of [...document.querySelectorAll('.yes')]) {
            yes.style.opacity = 0;
        }
        for (var no of [...document.querySelectorAll('.no')]) {
            no.style.opacity = 1;
        }
    }
}
function removeAllEventListeners(element) {
    if (!(element instanceof Element)) {
        throw new Error("Provided argument is not a DOM element.");
    }
    const newElement = element.cloneNode(true); // true = clone children
    element.parentNode.replaceChild(newElement, element);
    return newElement; // Return the new element reference
}
var dontRun = false;
function reverseUball() {
    if (!happeningNow) {
        happeningNow = true;
        funnyC = 0;
        savefunnyn = funnyN;
         var tempvar = Math.abs(funnyN - (20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075))) * 18;
            //console.log(tempvar +":"+ (15 * ((20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075)));
            const closest0 = (20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075));
            
        newConsoleLog(savefunnyn + 'soupppppppppp');
        var msi = setInterval(function () {
            document.querySelector('#uvula').style.transform = "rotateZ(" + (15 * (Math.cos(0.005 * ((funnyN * 30) * 0.5)))) + "deg)";
            if (funnyN >= closest0) {
                funnyN -= 1;
                if (funnyN < closest0) {
                    clearInterval(msi);
                }
            } else {
                funnyN += 1;
                if (funnyN > closest0) {
                    clearInterval(msi);
                }
            }

        }, 18);
    } else {
        var tempvar = 0;
    }
    setTimeout(function () {
        // funnyN = 0;
       // document.querySelector('#uvula').style.transform = "";
        var countt = 0;
        var plLength = document.querySelectorAll(".palestine").length;
        var plList = [...document.querySelectorAll(".palestine")].reverse().slice(-5);
        for (let el of plList) { el.style.transition = "0.5s"; el.style.opacity = "0"; el.style.top = "0px"; }
        // 2. Force browser to commit the initial state
        void document.querySelector("#allHold").offsetHeight;
        var count2 = 0;
        for (var ie = 0; ie < plLength; ie++) {
            countt = ie;
            let i = plList[ie];
            setTimeout(function () {
                try {
                    i.style.transition = "0.5s";
                    newConsoleLog('GAZA' + i);
                    var juheeValues = document.querySelector('.uBall').getBoundingClientRect();
                    i.setAttribute('style', '');
                    i.style.transition = "0.5s";
                    i.style.top = "0";
                    i.style.left = "0";
                    i.style.width = "calc(40dvw + 100dvw)";
                    i.style.height = "calc(40dvw + 100dvh)";
                    i.style.opacity = 0;
                    i.style.backgroundColor = "var(--bg)";
                    i.style.zIndex = "100";
                    setTimeout(function () {
                        i.style.transition = "0.5s";
                        i.style.top = juheeValues.y + "px";
                        i.style.left = juheeValues.x + "px";
                        i.style.width = juheeValues.width + "px";
                        i.style.height = juheeValues.height + "px";
                        i.style.opacity = 1;
                        i.style.filter = "";
                        i.style.backgroundColor = "var(--accent)";
                        count2++;
                        i.style.zIndex = (100 * count2)
                    }, 50);
                }
                catch (ee) {
                    newConsoleLog(ee);
                }
            }, ((1000 / plList.length) * countt) + 500)
        }
        setTimeout(function () {
            document.querySelector('#background').style.top = "-50dvh";
            setTimeout(function () {
                document.querySelector('.uBall').innerHTML = "";
                funnyC = 1; newConsoleLog('HERE');
                funnyN = 20.94395;
                doNow = true;
                for (var jh of document.querySelectorAll('.palestine')) {
                    jh.remove();
                }
                funnyC = 1; newConsoleLog('HERE');
                happeningNow = false;
            }, (1000));
            var e1 = document.createElement('button');
            e1.setAttribute('id', 'teButton');
            e1.style.opacity = 1;
            var e2 = document.createElement('input');
            e2.setAttribute('id', 'teInput');
            document.querySelector('#textEnter').append(e2);
            document.querySelector('#textEnter').append(e1);
            document.querySelector('#textEnter').querySelector('button').remove();
            document.querySelector('#textEnter').querySelector('button').remove();
            document.querySelector('#textEnter').querySelector('button').remove();
            //.querySelector('#textEnter').querySelector('input').remove();
            try {
                document.querySelector('#textEnter').querySelector('button').remove();
            }
            catch (e) {
                newConsoleLog(e);
            }
            try {
                document.querySelector('#textEnter').querySelector('#b4').remove();
            }
            catch (e) {
                newConsoleLog(e);
            }
            try {
                document.querySelector('#textEnter').querySelector('#b3').remove();
            }
            catch (e) {
                newConsoleLog(e);
            }
            try {
                document.querySelector('#textEnter').querySelector('#b2').remove();
            }
            catch (e) {
                newConsoleLog(e);
            }
            try {
                document.querySelector('#textEnter').querySelector('#b1').remove();
            }
            catch (e) {
                newConsoleLog(e);
            }
            //document.querySelector('#textEnter').append(document.querySelector('#textEnter').querySelector('button'));

             swapTe(shVar[isSharing][0], function () {
        if (doneAnimation) {
            var thisVall = validateDate(document.querySelector("#teInput").value);
            if (!thisVall.includes("Year Error")) {
                user.year = thisVall;
                makeShapes(user.year, "       ", "y", true);
                swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                document.querySelector("#teButton").removeAttribute("onclick", "");
            } else {
                handleError(thisVall)
            }
        }

    }, shVar[isSharing][1], function () {
        if (doneAnimation) {
            var thisVall = validateDate(document.querySelector("#teInput").value);
            if (!thisVall.includes("Year Error")) {
                user.year = thisVall;
                makeShapes(user.year, "       ", "y", true);
                swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                document.querySelector("#teButton").removeAttribute("onclick", "");
            } else {
                handleError(thisVall)
            }
        }
    });
            setTimeout(function () {
                removeAllEventListeners(document.querySelector('#teInput'));
                document.querySelector('#teInput').addEventListener('keyup', fkAround2);
                dontRun = false;
            }, 505);
        }, (1000))
    }, tempvar);
}
function nvm() {
    if (!dontRun) {
        posinar = 0;
        document.querySelector('#b4').innerText += "✅";
        dontRun = true;
        /* var biggest = 0;
         for (var k of [...document.querySelector('.uBall').children]) {
             if (k.getBoundingClientRect().width > biggest) {
                 biggest = k.getBoundingClientRect().width;
             }
         }
         for (var j of [...document.querySelector('.uBall').children]) {
             j.style.transition = ((j.getBoundingClientRect().width / biggest)*30) + "s";
         }
         for (var i of [...document.querySelector('.uBall').children]) {
             i.style.marginLeft = (i.getBoundingClientRect().width / 2);
             i.style.marginTop = (i.getBoundingClientRect().height / 2);
             i.style.opacity = "0";
             i.style.width = "0";
             i.style.height = "0px";
         }
        */
        var bg = document.querySelector('#background');
        bg.style.top = "0px";
        setTimeout(function () {
            reverseUball();
        }, 250)

    }
}
function delSaved() {
    Arr.splice((posinar - 1) % Arr.length, 1);
    if (true) {
        localStorage.setItem('nostalgiaTokSaved', Arr.join('[NOSTALGIATOKSPLIT]'));
    } else {
        var nArr = Arr.join('[NOSTALGIATOKSPLIT]');
        openTheDatabase().then(async function () {
            await appendToStringStore(nArr);
        });
    }
    nextSaved();
}
function chooseSaved() {
    ra = true;
    swapTe(15, function () { }, 16, function () { }, true);
    user = JSON.parse((Arr[posinar % Arr.length].split('[NTS2]')[1]))
    runAnimation();
    var minHeight;
    var mH;
    for (var Yuval of document.querySelector('.uBall').children) {
        if ([...document.querySelector('.uBall').children].indexOf(Yuval) == 0) {
            minHeight = parseFloat(Yuval.style.top);
            mH = Yuval;
        } else {
            if ((parseFloat(Yuval.style.top) < minHeight) && Yuval.getBoundingClientRect().width >= 1) {
                minHeight = parseFloat(Yuval.style.top);
                mH = Yuval;
            }
        }
    }
    mH.children[0].style.width = "0";
    mH.children[0].style.height = "0";
    mH.children[0].style.transition = "0.5s";
    setTimeout(function () {
        mH.children[0].remove();
    },1000)
}
var jint = true;
var jintArr = words[navigator.language][35].split(',').reverse();
var jintI = 0;
var doneAnimation = false;
function fkAround2() {
    try {
        document.querySelector('#teInput').removeEventListener('keyup', fkAround2);
    } catch (e) {
        console.log(e);
    }
    var newH = 0;
    if (document.querySelector('.vs2') == null) {
        var newW = document.createElement('button');
        newW.innerText = words[navigator.language][33];
        document.querySelector('#textEnter').append(newW);
        newH = newW.getBoundingClientRect().height;
        newW.remove();
        document.querySelector('#teInput').style.marginBottom = "calc(var(--margin) + 5px + " + newH + "px)";
        document.querySelector('#teInput').style.transition = "0s";
    } else {
        document.querySelector('#teInput').style.marginBottom = "calc(var(--margin) + 5px + " + document.querySelector('.vs2').getBoundingClientRect.height + "px)";
        document.querySelector('#teInput').style.transition = "0s";
    }
    setTimeout(function () {
        document.querySelector('#teInput').style.transition = "0s";
        document.querySelector('#teInput').style.marginBottom = "1em";
        document.querySelector("#teButton").style.display = "block";
        document.querySelector("#teButton").innerText = words[navigator.language][33];
        setTimeout(function () {
            document.querySelector("#teButton").style.opacity = "1";
            document.querySelector('#teInput').style.transition = 0;
        }, 30);


        newConsoleLog('palestine1');
        var a = true;
        let jintt = setInterval(function () {
            newConsoleLog('palestine');
            newConsoleLog([
                jintI,
                document.querySelector("#teButton").innerText
            ])
            var amharic = Array.from(document.querySelector("#teButton").innerText)
            amharic.splice(jintArr[jintI], 1);
            document.querySelector("#teButton").innerText = amharic.join('');
            if (a === true) {
                newConsoleLog(a);
                jintI++;
            }
            if (jintI > 17) { a = false; doneAnimation = true; clearInterval(jintt) }
        }, 30);

    }, 30);
}
var secondfunnyN = 20.94395;
function fkAround() {
    jintI = 0;
    document.querySelector("#teButton").style.display = "none";
    document.querySelector('#teInput').addEventListener('keyup', fkAround2)
}
function enterName() {
    var i = document.querySelector("#teInput");
    userName = i.value;
    if (userName == "") {
        userName = words[navigator.language][5]
    } else {

    }
    var ni = document.querySelector("#uNameplate");
    ni.style.color = "var(--accent)";
    ni.style.transition = "0.5s";
    ni.style.width = "0px";
    setTimeout(function () {
        ni.style.color = "var(--text)";
        ni.style.width = "max-content";
        ni.style.left = "calc(50% + 0.5em)";
        ni.innerText = words[navigator.language][11] + words[navigator.language][12] + userName + words[navigator.language][10] + words[navigator.language][6];
        setTimeout(function () {
            ni.style.transition = "1s";
            ni.style.left = "calc(50% - " + (ni.getBoundingClientRect().width / 2) + "px + 0.5em)"
        }, 500);
    }, 1000);
    swapTe(shVar[isSharing][0], function () {
        if (doneAnimation) {
            var thisVall = validateDate(document.querySelector("#teInput").value);
            if (!thisVall.includes("Year Error")) {
                user.year = thisVall;
                makeShapes(user.year, "       ", "y", true);
                swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                document.querySelector("#teButton").removeAttribute("onclick", "");
            } else {
                handleError(thisVall)
            }
        }

    }, shVar[isSharing][0], function () {
        if (doneAnimation) {
            var thisVall = validateDate(document.querySelector("#teInput").value);
            if (!thisVall.includes("Year Error")) {
                user.year = thisVall;
                makeShapes(user.year, "       ", "y", true);
                swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                document.querySelector("#teButton").removeAttribute("onclick", "");
            } else {
                handleError(thisVall)
            }
        }
    });
    setTimeout(function () {
        fkAround();
    }, 2000 * nsTimesNumber)
    localStorage.setItem('nostalgiaTokName', userName);
}
var shapes = ['circle', 'rounded square'];
var savefunnyn = 0;
function makeShapes(n, y, extra, t, c) {
    var newShi = true;
    var a;
    if (t) {
        a = document.querySelector('.uBall');
    } else {
        a = c;
    }
    var properties = [];
    newConsoleLog([a.innerHTML, t]);
    var Shapez = [];
    var Shapez2 = [];
    var tempvar;
    for (var i of n.split(y)) {
        var m = new Math.seedrandom(i + (n.split(y).indexOf(i)) + extra);
        var Mm = m().toString();
        q = Math.floor(m() * 1000000000).toString();
        for (var k of Mm) {
            if (k == "0") {
                k = "1"
            }
        }
        Mm = parseFloat(Mm);
        console.error(m())
        q = q.toString();
        console.log(['QQQ'+q, (0.1*parseInt(q.slice(7,8))*2) + 3 + "em"])
        switch (shapes[Math.floor(parseInt(q[0]) / 5)]) {
            case "circle":
                properties[0] = "50%;"
                break;
            /*case "square":
                properties[0] = "";
                break;
            case "triangle":
                properties[0] = `transform: skew(20deg);`
                break;*/
            case "rounded square":
                properties[0] = "5px";
                break;
        }
        //newConsoleLog(properties)
        pp = ((parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--ballSize').replace("em", "")) * 0.70) / 999 - (0.02 / 999) + (parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--ballSize').replace("em", "")) * 0.17) / 999);
        properties = [properties[0], (parseInt(q.slice(1, 4)) * pp + 0.01 / 999), (parseInt(q.slice(4, 7)) * pp + 0.01 / 999), (0.1*parseInt(q.slice(7,8))*2) + 3 + "em", (parseInt(q.slice(7, 8)) * 50) - 100 + "deg"];
        Shapez2.push(properties);
        var sh = document.createElement('div');
        sh.setAttribute('style', 'border-radius:' + properties[0])
        newConsoleLog(properties);
        Shapez.push(sh);
        console.warn(Shapez);
        // if (t) {
        if (posinar == 0) {
            if (!happeningNow) {
                happeningNow = true;
                funnyC = 0;
                savefunnyn = funnyN;
                var tempvar = Math.abs(funnyN - (20.94 + Math.floor(funnyN / ((Math.PI) / 0.075)) * ((Math.PI) / 0.075))) * 18;
                //console.log(tempvar +":"+ (15 * ((20.94 + Math.floor(funnyN / ((Math.PI)/0.075))*((Math.PI)/0.075)));
                const closest0 = (20.94 + Math.floor(funnyN / ((Math.PI) / 0.075)) * ((Math.PI) / 0.075));

                newConsoleLog(savefunnyn + 'soupppppppppp');
                var msi = setInterval(function () {
                    document.querySelector('#uvula').style.transform = "rotateZ(" + (15 * (Math.cos(0.005 * ((funnyN * 30) * 0.5)))) + "deg)";
                    if (funnyN >= closest0) {
                        funnyN -= 1;
                        if (funnyN < closest0) {
                            clearInterval(msi);
                        }
                    } else {
                        funnyN += 1;
                        if (funnyN > closest0) {
                            clearInterval(msi);
                        }
                    }

                }, 18);
            } else {
                tempvar = 5
            }
            /*document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 1s, filter 1s";
            document.querySelector('.uBall').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 1s, filter 1s";
            setTimeout(function () {
                document.querySelector('#uvula').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 0s, filter 1s";
                document.querySelector('.uBall').style.transition = "opacity 1s, top 1s, z-index 1s, background-color 1s, margin-top 1s, width 1s, height 1s, position 1s, left 1s, margin-left 1s, transform 0s, filter 1s";
 
            }, 1000);
            */
            //document.querySelector('#uvula').style.transform = "rotateZ(0deg)";

        } else {
            console.log('HERE');

            a.append(sh);
            sh.style.left = properties[1] + "em";
            sh.style.opacity = "1";
            sh.style.top = properties[2] + "em";
            sh.style.height = properties[3];
            sh.style.width = properties[3];
            sh.style.zIndex = "50";
            sh.style.transform = "rotateZ(" + properties[4] + ")";
            sh.style.border = "0px solid black";
            sh.setAttribute('class', 'teShape');
            funnyC = 1;
            newShi = false;
        }
        // }
        if (newShi) {
            setTimeout(function () {
                let twin1 = sh;
                let ppy1 = properties;
                if (posinar > 0) {
                    if (t) {
                        document.querySelector('.uBall').style.filter = "blur(0.25em)";
                        setTimeout(function () {
                            twin1.style.left = "calc(50dvw - var(--ballSize)/2 + " + ppy1[1] + "em)";
                            twin1.style.opacity = "1";
                            twin1.style.top = "calc(" + ppy1[2] + "em + " + document.querySelector('#uvula').getBoundingClientRect().height + "px " + " - " + Math.abs(parseFloat(document.querySelector('#uvula').getBoundingClientRect().y)) + "px - var(--ballSize))"
                            twin1.style.height = ppy1[3];
                            twin1.style.width = ppy1[3];
                            twin1.style.zIndex = "50";
                            twin1.style.transform = "rotateZ(" + ppy1[4] + ")";
                            twin1.setAttribute('class', 'teShape');
                            twin1.style.borderRadius = properties[0];
                            newConsoleLog(properties[0])
                            let twin = twin1;
                            let ppy = ppy1;
                            setTimeout(
                                function (twin, ppy) {
                                    document.querySelector('.uBall').style.filter = "";
                                    a.append(twin);
                                    // document.querySelector('#uvula').style.transition = "0.5s";
                                    //twin.style.transition = "0s";


                                    twin.style.left = ppy[1] + "em";
                                    twin.style.top = ppy[2] + "em";
                                    twin.style.height = ppy[3];
                                    twin.style.width = ppy[3];
                                    twin.style.transform = "rotate(" + ppy[4] + ")";
                                    newConsoleLog([twin.style.transform, "rotateZ(" + ppy[4] + ")", ppy[4]])
                                    twin.style.transition = "0.5s";
                                    twin.style.zIndex = "5";
                                    twin.style.border = "0px solid black"
                                    twin.setAttribute('class', 'teShape');
                                    twin1.style.borderRadius = properties[0];
                                    newConsoleLog(properties[0])
                                    // funnyC = 0;


                                    //funnyN = secondFunnyN;
                                    doNow = true;
                                    for (var yi of document.querySelector('.uBall').children) {
                                        yi.style.boxShadow = "inset 0px 0px 10px rgba(0, 0, 0, 0.5)";
                                    }


                                }, 500, twin, ppy)
                        }, 50, twin1, ppy1)
                    }
                } else {

                    setTimeout(function () {
                        twin1.style.left = "calc(50dvw - var(--ballSize)/2 + " + ppy1[1] + "em)";
                        twin1.style.opacity = "1";
                        twin1.style.top = "calc(" + ppy1[2] + "em + " + document.querySelector('#uvula').getBoundingClientRect().height + "px " + " - " + Math.abs(parseFloat(document.querySelector('#uvula').getBoundingClientRect().y)) + "px - var(--ballSize))"
                        twin1.style.height = ppy1[3];
                        twin1.style.width = ppy1[3];
                        twin1.style.zIndex = "50";
                        twin1.style.transform = "rotateZ(" + ppy1[4] + "deg)"
                        twin1.setAttribute('class', 'teShape');
                        twin1.style.borderRadius = properties[0];
                        newConsoleLog(properties[0])
                        let twin = twin1;
                        let ppy = ppy1;
                        setTimeout(
                            function (twin, ppy) {
                                a.append(twin);
                                // document.querySelector('#uvula').style.transition = "0.5s";

                                twin.style.transition = "0s";
                                twin.style.left = ppy[1] + "em";
                                twin.style.top = ppy[2] + "em";
                                twin.style.height = ppy[3];
                                twin.style.width = ppy[3];
                                twin.style.transform = "rotateZ(" + ppy[4] + ")";
                                newConsoleLog[twin.style.transform, "rotateZ(" + ppy[4] + ")", ppy[4]]
                                twin.style.transition = "0.5s";
                                twin.style.zIndex = "5";
                                twin.style.border = "0px solid black"
                                twin.setAttribute('class', 'teShape');
                                twin1.style.borderRadius = properties[0];
                                newConsoleLog(properties[0])
                                setTimeout(function () {
                                    funnyC = 1; newConsoleLog('HERE');
                                    happeningNow = false;
                                    doNow = true;
                                }, Math.abs(tempvar - 1000 + 500))
                                for (var yi of document.querySelector('.uBall').children) {
                                    yi.style.boxShadow = "inset 0px 0px 10px rgba(0, 0, 0, 0.5)";
                                }
                            }, 500, twin, ppy)
                    }, 50, twin1, ppy1)
                }
            }, tempvar)

        }
        if (t && posinar == 0) {
            var sh3 = [...Shapez];
            setTimeout(function () {
                for (var j of Shapez) {
                    let sh = j
                    var sh2 = j.style;
                    document.querySelector("#allHold").append(sh);
                    sh.style.borderRadius = properties[0];
                    sh.setAttribute('class', 'teShape');
                    sh.style.top = "90dvh";
                    sh.style.left = "50dvw";
                    sh.style.height = "0dvh";
                    sh.style.left = "0dvw";
                    sh.style.transition = "0.5s";
                    sh.style.position = "absolute";
                    sh.style.transform = "rotate(" + properties[4] + ")";
                    sh.style.borderRadius = properties[0];

                }
            }, tempvar); setTimeout(function () {
                setTimeout(function () {
                    for (sh of Shapez) {
                        let ppyy = Shapez2[Shapez.indexOf(sh)]
                        sh.style.left = "calc(50dvw - var(--ballSize)/2 + " + ppyy[1] + "em)";
                        sh.style.opacity = "1";
                        sh.style.top = "calc(" + ppyy[2] + "em + " + document.querySelector('#uvula').getBoundingClientRect().height + "px " + " - " + Math.abs(parseFloat(document.querySelector('#uvula').getBoundingClientRect().y)) + "px - var(--ballSize))"
                        sh.style.height = ppyy[3];
                        sh.style.width = ppyy[3];
                        sh.style.zIndex = "50";
                        sh.style.transform = "rotateZ(" + ppyy[4] + ")";
                        sh.setAttribute('class', 'teShape');
                        sh.style.borderRadius = properties[0];
                        newConsoleLog(properties[0])
                        let twin = sh;
                        let ppy = ppyy;
                        setTimeout(
                            function (twin, ppy) {
                                document.querySelector('.uBall').style.filter = "";
                                a.append(twin);
                                // document.querySelector('#uvula').style.transition = "0.5s";
                                //twin.style.transition = "0s";


                                twin.style.left = ppy[1] + "em";
                                twin.style.top = ppy[2] + "em";
                                twin.style.height = ppy[3];
                                twin.style.width = ppy[3];
                                twin.style.transform = "rotate(" + ppy[4] + ")";
                                newConsoleLog([twin.style.transform, "rotateZ(" + ppy[4] + ")", ppy[4]])
                                twin.style.transition = "0.5s";
                                twin.style.zIndex = "5";
                                twin.style.border = "0px solid black"
                                twin.setAttribute('class', 'teShape');
                                sh.style.borderRadius = properties[0];
                                newConsoleLog(properties[0])
                                // funnyC = 0;


                                //funnyN = secondFunnyN;
                                doNow = true;
                                for (var yi of document.querySelector('.uBall').children) {
                                    yi.style.boxShadow = "inset 0px 0px 10px rgba(0, 0, 0, 0.5)";
                                }


                            }, 500, twin, ppy)
                    }
                }, 50)

            }, tempvar)
        }
    }
}

function displaySwipe(lr) {
    document.querySelector('#touchOverlay').style.display = "none";
    var swsc = document.querySelector('#swipeScreen');
    swsc.setAttribute('style', `
    opacity: 1;
    left: 0;
    top: var(--margin);
    position: absolute;
    z-index: 500;
    width: 100dvw;
    height: calc(100dvh - var(--margin));
    padding: calc(var(--margin));
   `)
    swsc.style.display = "block";
    // document.querySelector('#swDrag').style.width = "calc(100dvw - (2 * var(--margin)) - " + document.querySelector('#swDrag').getBoundingClientRect().x + "px)";
   
    setTimeout(function () {
        swsc.style.opacity = 1;

        if (lr == "l") {
            swsc.querySelector('p').innerText = words[navigator.language][25].replace('(', '').replace(')', '') + "↓";
        } else {
            swsc.querySelector('p').innerText = words[navigator.language][27].replace('(', '').replace(')', '') + "↓";
        }
    }, 100);
}

var tsMTs = [];
var tsMT = 0;
var canSwipe = true;
var initialTouchX, initialTouchY,
    finalTouchX, finalTouchY;
var swipeThreshold = 100;
var dynamicStyle =
    document.createElement("style");
document.querySelector("#allHold").
    appendChild(dynamicStyle);


function handleTouch(startX, endX,
    onSwipeLeft, onSwipeRight) {
    var horizontalDistance =
        finalTouchX - initialTouchX;
    var verticalDistance =
        finalTouchY - initialTouchY;
    console.log([finalTouchX, initialTouchX, (finalTouchX - initialTouchX), horizontalDistance, swipeThreshold, (horizontalDistance < (-1 * swipeThreshold))])

    if (Math.abs(verticalDistance) >
        Math.abs(horizontalDistance) &&
        Math.abs(verticalDistance) >
        swipeThreshold) {
        if (finalTouchY -
            initialTouchY < 0) {
            swipeUp();
        } else {
            swipeDown();
        }
    } else {
        if (horizontalDistance < (-1 * swipeThreshold)) {
           // alert('left');
            editMode = true;
            editModeFunction()
        }
    }
}
function evaluateFullscreenReminder(n){
    var fsNumber = 0;
    try{
        fsNumber = parseInt(localStorage.getItem("nstFSRN"));
    }
    catch(e){
        localStorage.setItem("nstFSRN",0);
    }
    if((fsNumber % 15 == 0 && fsNumber !== 0) || fsNumber == 3 || n){
        var activeItem = document.querySelector('#leftButton');
        var valueOg = activeItem.innerText;
        activeItem.style.color = "var(--second)";
        var wnl100 = words[navigator.language][100].split('|');

        setTimeout(function(){
            activeItem.style.color = "var(--text)";
            if(!n){
            activeItem.innerText = [wnl100[0],wnl100[1]][fsNumber % 2] + wnl100[2];
            }else{
                activeItem.innerText = words[navigator.language][n];
            }
            activeItem.style.borderBottom = "0.1em solid var(--second)";
            setTimeout(function(){
                activeItem.style.borderBottom = "0.1em solid var(--text)";
                setTimeout(function(){
                    activeItem.style.borderBottom = "0.1em solid var(--emphasizedText)";
                     setTimeout(function(){
            activeItem.style.borderBottom = "0.1em solid var(--second)";
            setTimeout(function(){
                activeItem.style.borderBottom = "0.1em solid var(--text)";
                setTimeout(function(){
                    activeItem.style.borderBottom = "0.1em solid var(--emphasizedText)";
                    setTimeout(function(){ activeItem.style.borderBottom = "0.1em solid var(--second)"; activeItem.style.color = "var(--second)";  
                    setTimeout(function(){activeItem.style.color = "var(--text)"; activeItem.innerText = valueOg;},500);
                    },500)
                    },500)
                },500)
            },500);
                    },500)
                },500)
            },500);
    }
    fsNumber++;
    localStorage.setItem("nstFSRN",fsNumber);
}
function swipeUp() {
    if(currentPlace >= allVideos.length - 1){
        if(nextToken!==""){
            giveError3();
        }else{
            giveError2();
        }
        /*document.querySelector('.giveError').style.borderBottom="1px dotted var(--emphasizedText)";
        setTimeout(function(){document.querySelector('.giveError').style.border=""},250)*/
    }else{
        if(!isPWA()){
        evaluateFullscreenReminder();
        }
     for(var i of document.querySelectorAll('.giveError')){
        i.remove();
    }
    currentPlace += 1;
    try{
    document.querySelector('#giveError').remove();
    }
    catch(e){

    }
    if (canSwipe) {
        //var bcr = document.querySelector('#videoFrame').boundingClientRect();
        canSwipe = false;

        var orbit = document.createElement('div');
        var orbitf = document.createElement('div');
        if (fullsc == 'yes') {
            orbit.style.opacity = "0";
            orbitf.style.opacity = "0.25";
        } else {
            orbitf.style.opacity = "0";
            orbit.style.opacity = "0.25";
        }
        orbit.setAttribute('class', 'videoOrbit no');
        orbit.style.borderRadius = "5px";
        orbit.style.zIndex = "200";
        orbit.style.width = "0.5em";
        orbit.style.height = "0.5em";
        // orbit.style.opacity = "1";
        orbit.style.backgroundColor = "var(--swText)";
        orbit.style.position = "absolute";
        orbit.style.left = sVl['no'][0];
        orbit.style.top = sVt['no'][1];
        orbitf.setAttribute('class', 'videoOrbit yes');
        orbitf.style.borderRadius = "5px";
        orbitf.style.zIndex = "200";
        orbitf.style.width = "0.5em";
        orbitf.style.height = "0.5em";
        // orbitf.style.opacity = "1";
        orbitf.style.backgroundColor = "var(--swText)";
        orbitf.style.position = "absolute";
        orbitf.style.left = sVl['yes'][0];
        orbitf.style.top = sVt['yes'][1];
        tsMT = Math.random();
        if(tsMT < 0.3){
            tsMT = 0.3;
        }
        orbit.style.transition = "0.25s";
        // orbit.setAttribute('class', "videoOrbit");
        document.querySelector("#allHold").append(orbit);
        orbitf.style.transition = "0.25s";
        // orbitf.setAttribute('class', "videoOrbit");
        document.querySelector("#allHold").append(orbitf);
        tsMTs.push(tsMT);
        setTimeout(function () {
            // Move RIGHT
            orbit.style.left = sVl['no'][0];
            orbit.style.top = sVt['no'][0];
            orbitf.style.left = sVl['yes'][0];
            orbitf.style.top = sVt['yes'][0];
            setTimeout(function () {
                // Move UP
                orbit.style.transform = "rotate(90deg)";
                orbit.style.left = sVl['no'][1];
                orbit.style.top = sVt['no'][0];
                orbitf.style.left = sVl['yes'][1];
                orbitf.style.top = sVt['yes'][0];

                setTimeout(function () {
                    // Move LEFT
                    orbit.style.transform = "rotate(180deg)";
                    orbit.style.left = sVl['no'][1];
                    orbit.style.top = sVt['no'][1];
                    orbitf.style.left = sVl['yes'][1];
                    orbitf.style.top = sVt['yes'][1];

                    setTimeout(function () {
                        // Move DOWN
                        orbit.style.transform = "rotate(270deg)";
                        orbit.style.left = sVl['no'][2];
                        orbit.style.top = sVt['no'][1];
                        orbitf.style.left = sVl['yes'][2];
                        orbitf.style.top = sVt['yes'][1];

                        setTimeout(function () {
                            orbit.style.transform = "rotate(360deg)";
                           
                                    localStorage.setItem('nostalgiaTokOldVideos', localStorage.getItem('nostalgiaTokOldVideos') + "|SPLIT|"+allVideos[currentPlace]);
                              
                        }, 125);

                    }, 250);

                }, 250);

            }, 250);

        }, 250);

        setTimeout(function () {
                var bigJuf = orbitf.cloneNode();
                var theBigJuf = orbitf.getBoundingClientRect();

                var bigJu = orbit.cloneNode();
                var theBigJu = orbit.getBoundingClientRect();

                bigJu.style.left = theBigJu.x + "px";
                newConsoleLog(theBigJu.left);
                bigJu.style.top = theBigJu.y + "px";
                newConsoleLog(theBigJu.top);
                document.querySelector("#allHold").append(bigJu);
                newConsoleLog([theBigJu, tsMT]);
                bigJu.style.backgroundColor = "var(--swText)";
                var bigJu2 = orbit.cloneNode();
                bigJu2.style.left = theBigJu.x + "px";
                document.querySelector("#allHold").append(bigJu2);
                bigJu2.style.top = theBigJu.y + "px";
                bigJu2.style.backgroundColor = "var(--swText)";
                // bigJu2.style.opacity = "0.2";
                bigJu2.setAttribute('id', 'j' + tsMT.toString().replace('.', 'o'));
                orbit.remove();
                bigJu.style.transition = "0.1s";

                bigJuf.style.left = theBigJuf.x + "px";
                newConsoleLog(theBigJuf.left);
                bigJuf.style.top = theBigJuf.y + "px";
                newConsoleLog(theBigJuf.top);
                document.querySelector("#allHold").append(bigJuf);
                newConsoleLog([theBigJuf, tsMT]);
                bigJuf.style.backgroundColor = "var(--swText)";
                var bigJu2f = orbitf.cloneNode();
                bigJu2f.style.left = theBigJuf.x + "px";
                document.querySelector("#allHold").append(bigJu2f);
                bigJu2f.style.top = theBigJuf.y + "px";
                bigJu2f.style.backgroundColor = "var(--swText)";
                //bigJu2f.style.opacity = "0.2";
                bigJu2f.setAttribute('id', 'j' + tsMT.toString().replace('.', 'o'));
                orbitf.remove();
                bigJuf.style.transition = "0.1s";
                if (fullsc == 'yes') {
                    bigJu2f.style.opacity = "0.25";
                    bigJu2.style.opacity = "0";
                } else {
                    bigJu2.style.opacity = "0.25";
                    bigJu2f.style.opacity = "0";

                }

                setTimeout(function () {
                    if (fullsc == 'no') {
                        bigJu.style.opacity = 1;
                        bigJu.style.width = "calc((100dvh - 10em) * (9/16))";
                        bigJu.style.height = "calc(100dvh - 10em)";
                        bigJu.style.left = "calc((100dvw - ((100dvh - 10em) * (9/16)))/2)";
                        bigJu.style.borderRadius = "5px";
                        bigJu.style.top = "4em";
                        bigJu.style.transform = "rotate(360deg)";
                        bigJu.style.backgroundColor = "var(--swText)";
                        bigJu.style.opacity = 1;
                        setTimeout(function () {
                            bigJu.style.transition = "0.1s";
                            setTimeout(function () {
                                bigJu.style.backgroundColor = "var(--accent)";
if (currentPlace < allVideos.length-3) {
                                        
                                        if (allVideos[currentPlace] == "Error") {
                                            giveError();
                                        }  else {
                                            var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navigator.language][84]+'↘';
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                            
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = '↘';
                                            }
                                
                                             player.loadVideoById(avcp);
                                          // alert([allVideos[currentPlace], currentPlace])
                                          try{
                                           document.querySelector('#loadNext').setAttribute('src','https://youtube.com/embed/'+allVideos[((currentPlace)+1)].replace('📺',''));
                                          }
                                          catch(e){
                                            console.log(e);
                                          }
                                           // alert([allVideos[((currentPlace)+1)], currentPlace+1, document.querySelector('#loadNext').getAttribute('src')])
                                         console.error(allVideos);
                                        }
                                    } else {
                                       // alert(5);
                                        if (allVideos[currentPlace] == "Error") {
                                            giveError();
                                        } else {
                                           // alert(6);
                                            //document.querySelector('#videoFrame').setAttribute('src', "https://youtube.com/embed/" + allVideos[currentPlace] + `?autoplay=`+autoplay);
                                          
                                          currentToken = nextToken;
                                                requestVideos(currentToken);
                                            
                                        }
                                    }
                                setTimeout(function () {
                                    
                                    bigJu.remove();
                                    bigJuf.remove();
                                }, 100);
                            }, 100)
                            canSwipe = true;
                        }, 200)
                    } else {
                        bigJuf.style.opacity = 1;
                        bigJuf.style.width = "100dvw";
                        bigJuf.style.height = "100dvh";
                        bigJuf.style.left = "0";
                        bigJuf.style.borderRadius = "5px";
                        bigJuf.style.top = "0";
                        bigJuf.style.transform = "rotate(360deg)";
                        bigJuf.style.backgroundColor = "var(--swText)";
                        bigJuf.style.opacity = 1;
                        setTimeout(function () {
                            bigJuf.style.transition = "0.1s";
                            setTimeout(function () {
                               // alert(1);
                                bigJuf.style.backgroundColor = "var(--accent)";
//alert(2);
  if (currentPlace < allVideos.length - 3) {
                                        
                                        if (allVideos[currentPlace] == "Error") {
                                            giveError();
                                        }  else {
                                            
                                           var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navigator.language][84]+'↘';
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                            
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = '↘';
                                            }
                                
                                             
                                             player.loadVideoById(avcp);
                                          // alert([allVideos[currentPlace], currentPlace])
                                          try{
                                           document.querySelector('#loadNext').setAttribute('src','https://youtube.com/embed/'+allVideos[((currentPlace)+1)].replace('📺',''));
                                          }
                                          catch(e){
                                            console.log(e);
                                          }
                                          // alert([allVideos[currentPlace], currentPlace])
                                           // alert([allVideos[((currentPlace)+1)], currentPlace+1, document.querySelector('#loadNext').getAttribute('src')])
                                         console.error(allVideos);
                                        }
                                    } else {
                                       // alert(5);
                                        if (allVideos[currentPlace] == "Error") {
                                            giveError();
                                        } else {
                                           // alert(6);
                                            //document.querySelector('#videoFrame').setAttribute('src', "https://youtube.com/embed/" + allVideos[currentPlace] + `?autoplay=`+autoplay);
                                          
                                         currentToken = nextToken;
                                                requestVideos(currentToken);
                                            
                                        }
                                    }
                                setTimeout(function () {
                                   // alert(3);
                                    
                                   // alert(4);
                                  
                                    bigJuf.remove();
                                    bigJu.remove();
                                }, 100);
                            }, 100)
                            canSwipe = true;
                        }, 200)
                    }
                }, 100)

            }, (tsMT * 1000))
}
    }
};
function swipeDown() {
     for(var i of document.querySelectorAll('.giveError')){
        i.remove();
    }
     try{
    document.querySelector('#giveError').remove();
    }
    catch(e){

    }
    currentPlace -= 1;
    if (canSwipe) {
        canSwipe = false;
        if (fullsc == 'yes') {
            var orbit = [...document.querySelectorAll('.yes')];
            orbit = orbit[orbit.length - 1];
            var otherOrbit = [...document.querySelectorAll('.no')];
            otherOrbit = otherOrbit[otherOrbit.length - 1];
            otherOrbit.remove();
        } else {
            var orbit = [...document.querySelectorAll('.no')];
            orbit = orbit[orbit.length - 1];
            var otherOrbit = [...document.querySelectorAll('.yes')];
            otherOrbit = otherOrbit[otherOrbit.length - 1];
            otherOrbit.remove();
        }
       
        orbit.style.transition = "0.25s";
        var o2 = orbit.getBoundingClientRect();
        var bj = document.createElement('div');
        if (fullsc == "no") {
            bj.style.width = "calc((100dvh - 10em) * (9/16))";
            bj.style.height = "calc(100dvh - 10em)";
            bj.style.left = "calc((100dvw - ((100dvh - 10em) * (9/16)))/2)";
            bj.style.borderRadius = "5px";
            bj.style.top = "4em";
        } else {
            bj.style.width = "100dvw";
            bj.style.height = "100dvh";
            bj.style.left = "0";
            bj.style.borderRadius = "5px";
            bj.style.top = "var(--margin)";
        }
        bj.style.transform = "rotate(360deg)";
        bj.style.transition = "0.125s";
        bj.style.backgroundColor = "var(--swText)";
        bj.style.position = "absolute";
        bj.style.zIndex = 10000;
        bj.style.opacity = 0.5;
        document.querySelector("#allHold").append(bj);
       // orbit.style.opacity = 0;
        setTimeout(function () {
            bj.style.left = o2.left + "px";
            bj.style.top = o2.top + "px";
            bj.style.width = o2.width + "px";
            bj.style.height = o2.height + "px";
            bj.style.transform = "rotate(0deg)";
            bj.style.borderRadius = "5px";
            setTimeout(function () {
                bj.remove(); if (currentPlace == -1) { currentPlace = 0; } else {
                    if (allVideos[currentPlace] == "Error") {
                        giveError();
                    } else {
                        //document.querySelector('#videoFrame').setAttribute('src', "https://youtube.com/embed/" + allVideos[currentPlace] + `?autoplay=`+autoplay);
                        player.loadVideoById(allVideos[currentPlace]);
                        
                                          try{
                                           document.querySelector('#loadNext').setAttribute('src','https://youtube.com/embed/'+allVideos[((currentPlace)+1)]);
                                          }
                                          catch(e){
                                            console.log(e);
                                          }//   alert([allVideos[((currentPlace)+1)], currentPlace+1, document.querySelector('#loadNext').getAttribute('src')]);
                                       console.error(allVideos);   
                                           
                    }
                }}, 255)
            if (o2.x >= window.innerWidth / 2 && o2.y < (window.innerHeight - (6 * (parseFloat(getComputedStyle(orbit.parentNode).fontSize))
            ))) {
               // bj.remove();
                setTimeout(function () {
                    orbit.style.left = sVl[fullsc][2];
                    orbit.style.top = sVt[fullsc][1];
                }, 125);
                
                setTimeout(function () {
                    orbit.remove();
                    canSwipe = true;

                   // bj.remove();
                }, 250)
            }
            if (o2.x < window.innerWidth / 2 && o2.y < (window.innerHeight - (6 * (parseFloat(getComputedStyle(orbit.parentNode).fontSize))
            ))) {
                setTimeout(function () {
                   // bj.remove();
                    orbit.style.transform = "rotate(90deg)";
                    orbit.style.left = sVl[fullsc][1];
                    orbit.style.top = sVt[fullsc][0];
                   
                    setTimeout(function () {

                        orbit.style.left = sVl[fullsc][0];
                        orbit.style.top = sVt[fullsc][0];
                        setTimeout(function () {

                            orbit.style.left = sVl[fullsc][2];
                            orbit.style.top = sVt[fullsc][1];
                            
                            setTimeout(function () {
                                orbit.remove();
                                canSwipe = true;
                                //bj.remove();
                            }, 125)
                        }, 125);
                    }, 125);
                }, 125);
            }

            if (o2.y >= (window.innerHeight - (6.1 * (parseFloat(getComputedStyle(orbit.parentNode).fontSize))
            ))) {
                setTimeout(function () {
                   // bj.remove();

                    orbit.style.left = sVl[fullsc][0];
                    orbit.style.top = sVt[fullsc][0];
                    
                    setTimeout(function () {
                        
                        orbit.style.left = sVl[fullsc][2];
                        orbit.style.top = sVt[fullsc][1];
                       
                        setTimeout(function () {
                            orbit.remove();
                            canSwipe = true;
                           // bj.remove();
                        }, 125)
                    }, 125);
                }, 125);
            }
        }, 125);

        /*
        canSwipe = false;
        //var bcr = document.querySelector('#videoFrame').boundingClientRect();
        var orbit = document.createElement('div');
        orbit.style.borderRadius = "50%";
        orbit.style.width = "0.5em";
        orbit.style.height = "0.5em";
        orbit.style.backgroundColor = "var(--swText)";
        orbit.style.position = "absolute";
        orbit.style.left = sV[0];
        newConsoleLog('svo' + sV[0]);
        orbit.style.top = sV[1];
        orbit.style.zIndex = "100";
        tsMT = (tsMTs[tsMTs.length - 1]);
        tsMTs.pop();
        orbit.style.transition = (tsMT) + "s";
        newConsoleLog(orbit.style.transition);
        document.querySelector("#allHold").append(orbit);
        setTimeout(function () {
            // Move LEFT
            orbit.style.left = "calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) - 0.5em)";
            orbit.style.top = "calc(100dvh - 10em + 4em + 0.5em)";

            setTimeout(function () {
                // Move UP
                orbit.style.transform = "rotate(-90deg)";
                orbit.style.left = "calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) - 0.5em)";
                orbit.style.top = "3.5em";

                setTimeout(function () {
                    // Move RIGHT
                    orbit.style.transform = "rotate(-180deg)";
                    orbit.style.left = "calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) + calc((100dvh - 10em) * (9/16)) + 0.5em)";
                    orbit.style.top = "3.5em";

                    setTimeout(function () {
                        // Move DOWN
                        orbit.style.transform = "rotate(-270deg)";
                        orbit.style.left = "calc(((100dvw - ((100dvh - 10em) * (9/16)))/2) + calc((100dvh - 10em) * (9/16)) + 0.5em)";
                        orbit.style.top = "calc(100dvh - 10em + 4em + 0.5em)";

                        setTimeout(function () {
                            orbit.style.transform = "rotate(-360deg)";
                        }, 250);

                    }, 250);

                }, 250);

            }, 250);

        }, 250);

        setTimeout(function () {
            var bigJu = orbit.cloneNode();
            var theBigJu = orbit.getBoundingClientRect();
            bigJu.style.left = theBigJu.left;
            bigJu.style.top = theBigJu.top;
            document.querySelector("#allHold").append(bigJu);
            bigJu.style.backgroundColor = "var(--swText)";
            orbit.remove();
            bigJu.style.transition = "0.1s";
            document.querySelector('#j' + tsMTs[tsMTs.length - 1].toString().replace('.', 'o')).remove();
            tsMTs.pop();
            setTimeout(function () {
                bigJu.style.width = sV[6];
                bigJu.style.height = sV[7];
                bigJu.style.left = sV[8];
                bigJu.style.top = sV[9];
                bigJu.style.transform = "rotate(360deg)";
                bigJu.style.backgroundColor = "var(--swText)";
                setTimeout(function () {
                    bigJu.remove();
                    canSwipe = true;
                }, 100)
            }, 100)
        }, (tsMT * 1000))
        */
    }
};

function validateDate(tex) {
	if(tex.includes("~")){
		return tex;
	}else{
    var text = tex.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (text.includes("-")) {
        var retText = text.split('-');
        var retValue = validateDate(retText[0]).split('~')[0] + "~" + validateDate(retText[1]).split('~')[1];
        console.log([retText[0], retText[1]])
        if (retValue.includes('Year Error: Out of bounds')) {
            return ("Year Error: Out of bounds");
        }
        if (retValue.includes("Year Error: Too low") && !retValue.includes("Year Error: Too high")) {
            console.log(retValue);
            return ("Year Error: Too low");
        }
        if (retValue.includes("Year Error: Too high") && !retValue.includes("Year Error: Too low")) {
            return ("Year Error: Too high");
        }
        if (retValue.includes("Year Error: Too low") && retValue.includes("Year Error: Too high")) {
            return ("Year Error: Both outta bounds");
        }
        var retValue2 = validateDate(retText[0]).split('~')[1] + "~" + validateDate(retText[1]).split('~')[0];
        var firstOne = new Date(retValue2.split('~')[0]);
        var secondOne = new Date(retValue2.split('~')[1]);
        console.log([validateDate(retText[0]).split('~')[1] + "~" + validateDate(retText[1]).split('~')[0], firstOne, secondOne])
        if (firstOne.getTime() > secondOne.getTime()) {
            retValue = retValue2.split('~')[1] + "~" + retValue2.split('~')[0]
        }
        return retValue;
    } else {
        try { 
        var tbr = "";
        var theYear = parseFloat(text.match(/(\d+)/)[0]);
        if (theYear.toString().length < 3) {
            theYear = 2000 + theYear;
        }
        var d = new Date();
            if (theYear < 2019) {
                return ("Year Error: Too low~Year Error: Too low")
            }
            if (theYear > d.getFullYear()) {
                return ("Year Error: Too high~Year Error: Too high")
            }
    }
        catch (e) {
            return ("Year Error: Can't read data~Year Error: Can't read data")
        }
        //spring
        if (text.includes(words[navigator.language][39])) {
            tbr = "03/15/XXXX ~ 05/31/XXXX"
        }
        //summer
        if (text.includes(words[navigator.language][40])) {
            tbr = "06/01/XXXX ~ 09/01/XXXX"
        }
        //fall
        if (text.includes(words[navigator.language][41])) {
            tbr = "09/01/XXXX ~ 11/30/XXXX"
        }
        //winter
        if (text.includes(words[navigator.language][42])) {
            tbr = "12/01/XXXX ~ 03/14/XXXY"
        }
        if (text.includes(words[navigator.language][43])) {
            tbr = "01/01/XXXX ~ 03/31/XXXX"
        }
        if (text.includes(words[navigator.language][44])) {
            tbr = "04/01/XXXX ~ 09/30/XXXX"
        }
        if (text.includes(words[navigator.language][45])) {
            tbr = "10/01/XXXX ~ 12/31/XXXX"
        }
        //jan 
        if (text.toLowerCase().includes(words[navigator.language][46]) || text.includes(words[navigator.language][46+12])) {
            tbr = "01/01/XXXX ~ 02/01/XXXX"
        }
        //feb
        if (text.includes(words[navigator.language][47]) || text.includes(words[navigator.language][47 + 12])) {
            tbr = "02/01/XXXX ~ 03/01/XXXX"
        }
        //mar
        if (text.includes(words[navigator.language][48]) || text.includes(words[navigator.language][48 + 12])) {
            tbr = "03/01/XXXX ~ 04/01/XXXX"
        }
        //apr
        if (text.includes(words[navigator.language][49]) || text.includes(words[navigator.language][49 + 12])) {
            tbr = "04/01/XXXX ~ 05/01/XXXX"
        }
        //may
        if (text.includes(words[navigator.language][50]) || text.includes(words[navigator.language][50 + 12])) {
            tbr = "05/01/XXXX ~ 06/01/XXXX"
        }
        //jun
        if (text.includes(words[navigator.language][51]) || text.includes(words[navigator.language][51 + 12])) {
            tbr = "06/01/XXXX ~ 07/01/XXXX"
        }
        //july
        if (text.includes(words[navigator.language][52]) || text.includes(words[navigator.language][52 + 12])) {
            tbr = "07/01/XXXX ~ 08/01/XXXX"
        }
        //aug
        if (text.includes(words[navigator.language][53]) || text.includes(words[navigator.language][53 + 12])) {
            tbr = "08/01/XXXX ~ 09/01/XXXX"
        }
        //sep
        if (text.includes(words[navigator.language][54]) || text.includes(words[navigator.language][54 + 12])) {
            tbr = "09/01/XXXX ~ 10/01/XXXX"
        }
        //oct
        if (text.includes(words[navigator.language][55]) || text.includes(words[navigator.language][55 + 12])) {
            tbr = "10/01/XXXX ~ 11/01/XXXX"
        }
        //nov
        if (text.includes(words[navigator.language][56]) || text.includes(words[navigator.language][56 + 12])) {
            tbr = "11/01/XXXX ~ 12/01/XXXX"
        }
        //dec
        if (text.includes(words[navigator.language][57]) || text.includes(words[navigator.language][57 + 12])) {
            tbr = "12/01/XXXX ~ 1/01/XXXY"
        }
        //quarantine
        if (text.includes(words[navigator.language][58 + 12])) {
            tbr = "03/17/2020 ~ 01/01/2022"
        }
        if (tbr == '') {
            tbr = "01/01/XXXX ~ 01/01/XXXY";
        }
        tbr = tbr.replace(/XXXX/g, theYear).replace(/XXXY/g, theYear + 1)
        return tbr;
    }
    return tbr;
}
}
/*var words = {
    "en-US": [
        "by", //0
        "nostalgiaTok", //1
        "peiLamed", //2
        "what's your name?", //3
        "next", //4
        "Your", //5
        "nostalgia", //6
        "what time period are you nostalgic for?<br><span class='nstLower'>(ex 2022, summer 2023, mar 2021 - spring 2023)</span>", //7
        "what creator?<br><span class='nstLower'>(stick to one, can be changed later)</span>", //8
        "what topic?<br><span class='nstLower'>(stick to one, can be changed later)</span>", //9
        "'s ", //10
        "", //11
        "", //12
        "if you wanna save your nostalgia for later, name it here", //13
        "or not, thats ok", //14
        "fishing out your videos", //15
        "a whole lot of 'em", //16
        "player", //17
        "ts plays videos", //18
        "loading...", //19
        "", //20
        "choose this one&nbsp;-&nbsp;", //21
        "delete this one&nbsp;", //22
        "view saved nostalgias", //23
        "next one&nbsp;-&nbsp;", //24
        "options", //25
        "➢", //26
        "more of ts", //27
        "search again", //28
        "share video", //29
        "open video", //30
        "share nostalgiaTok", //31
        "what's good, ", //32
        "anqrzfeubxkmlpwhdvocty", //33
        "abcd_efghijklmn_opqrstudvwxyz_", //34
        "0,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,21", //35
        "nvm", //36
        "Last time you used nostalgiaTok", //37
        "search this now", //38
        "spring", //39
        "summer", //40
        "winter", //41
        "fall", //42
        "early", //43
        "mid", //44
        "late", //45
        "jan", //46
        "feb", //47
        "mar", //48
        "apr", //49
        "may", //50
        "jun", //51
        "jul", //52
        "aug", //53
        "sep", //54
        "oct", //55
        "nov", //56
        "dec", //57
        "january", //58
        "february", //59
        "march", //60
        "april", //61
        "may", //62
        "june", //63
        "july", //64
        "august", //65
        "september", //66
        "october", //67
        "november", //68
        "december", //69
        "past 2021 plzz", //70
        "well, before this year plzz", //71
        "between 2021 - now plzz", //72
        "sorry, try again plzz", //73
        "tysm btw ☺", //74
        "oopsie!", //75
        `Something didn't work<br>Hit "options" and then drag the box to "search again" to do another search`, //76
        "thats it ngl", //77
        "you've watched all the videos for this query", //78
        "videos are still coming in", //79
        "this will automatically scroll when they arrive" //80
    ],

    "en": [
        "by", "nostalgiaTok", "FM Da$ani", "what's your name?", "(next)",
        "Your", "nostalgia", "what time period are you nostalgic for?",
        "what creators (if any) (use commas)?",
        "what topics (if any) (use commas)?",
        "'s ", "", ""
    ],

    "fr": [
        "par", "nostalgiaTok", "FM Da$ani", "Comment tu t'appelles ?", "(suivant)",
        "Ton", "nostalgie", "Pour quelle période ressens-tu de la nostalgie ?",
        "Quels créateurs (le cas échéant) (sépare par des virgules) ?",
        "Quels sujets (le cas échéant) (sépare par des virgules) ?",
        "de ", "", ""
    ],

    "es": [
        "por", "nostalgiaTok", "FM Da$ani", "¿Cómo te llamas?", "(siguiente)",
        "Tu", "", "¿De qué época sientes nostalgia?",
        "¿Qué creadores (si los hay) (usa comas)?",
        "¿Qué temas (si los hay) (usa comas)?",
        "", "nostalgia", " de "
    ],

    "ja": [
        "〜によって", "nostalgiaTok", "FM Da$ani", "あなたの名前は何ですか？", "(次)",
        "あなたの", "", "どの時代にノスタルジーを感じますか？",
        "どのクリエイター（いる場合）（カンマで区切って）？",
        "どのトピック（ある場合）（カンマで区切って）？",
        "", "ノスタルジア", " の "
    ],

    "ar": [
        "من", "FM Da$ani", "nostalgiaTok", "ما اسمك؟", "(التالي)",
        "لك", "", "ما الفترة الزمنية التي تشعر بالحنين إليها؟",
        "ما المبدعين (إن وجد) (استخدم الفواصل)؟",
        "ما المواضيع (إن وجد) (استخدم الفواصل)؟",
        "", "الحنين", " لـ "
    ],

    "he": [
        "מִן", "FM Da$ani", "nostalgiaTok", "מה השם שלך?", "(בא)",
        "שלך", "", "לאיזו תקופה אתה מתגעגע?",
        "אילו יוצרים (אם בכלל) (השתמש בפסיקים)?",
        "אילו נושאים (אם בכלל) (השתמש בפסיקים)?",
        "", "נוסטלגיה", " של "
    ]
}*/
function backValidateDate(tex, first) {
    var text = tex.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
   console.log(text);
    if (text.includes("~")) {
      if((parseFloat(tex.split('~')[0].split('/')[2]) == (parseInt(tex.split('~')[1].split('/')[2])-1)) && tex.split('~')[0].includes('01/01/') && tex.split('~')[1].includes('01/01/')){
        return parseFloat(tex.split('~')[0].split('/')[2]);
      }
        var retValue = backValidateDate(tex.split('~')[0], true) + "- " + backValidateDate(tex.split('~')[1], false);
        return retValue;
    } else {
        var tbr = "";
        var theYear = text.split('/')[2];
        if (theYear.length < 3) {
            theYear = 2000 + theYear;
        }
       
           
   
        //spring
        if(first){
        if (text.includes("03/15/"+theYear)) {
            tbr = words[navigator.language][39];
        }
        //summer
        if (text.includes("06/01/"+theYear)) {
            tbr = words[navigator.language][40];
        }
        //fall
        if (text.includes("09/01/"+theYear)) {
            tbr = words[navigator.language][41]
        }
        //winter
        if (text.includes("12/01/"+theYear)) {
            tbr = words[navigator.language][42]
        }
        if (text.includes("01/01/"+theYear)) {
            tbr = words[navigator.language][43];
        }
        if (text.includes("04/01/"+theYear)) {
            tbr = words[navigator.language][44];
        }
        if (text.includes("10/01/"+theYear)) {
            tbr = words[navigator.language][45];
        }
        //jan 
        if (text.toLowerCase().includes("01/01/"+theYear)) {
            tbr = words[navigator.language][46];
        }
        //feb
        if (text.includes("02/01/"+theYear)) {
            tbr = words[navigator.language][47];
        }
        //mar
        if (text.includes("03/01/"+theYear)) {
            tbr = words[navigator.language][48];
        }
        //apr
        if (text.includes("04/01/"+theYear)) {
            tbr = words[navigator.language][49];
        }
        //may
        if (text.includes("05/01/"+theYear)) {
            tbr = words[navigator.language][50];
        }
        //jun
        if (text.includes("06/01/"+theYear)) {
            tbr = words[navigator.language][51];
        }
        //july
        if (text.includes("07/01/"+theYear)) {
            tbr = words[navigator.language][52];
        }
        //aug
        if (text.includes("08/01/"+theYear)) {
            tbr = words[navigator.language][53];
        }
        //sep
        if (text.includes("09/01/"+theYear)) {
            tbr = words[navigator.language][54]
        }
        //oct
        if (text.includes("10/01/"+theYear)) {
            tbr = words[navigator.language][55]
        }
        //nov
        if (text.includes("11/01/"+theYear)) {
            tbr = words[navigator.language][56];
        }
        //dec
        if (text.includes("12/01/"+theYear)) {
            tbr = words[navigator.language][57];
        }
        tbr+=" "+theYear;
        //quarantine
        if (text.includes("03/17/2020")) {
            tbr = words[navigator.language][58 + 12];
        }
        if (tbr == "01/01/"+theYear) {
            tbr = theYear;
        }
    }else{
         if (text.includes("05/31/"+theYear)) {
            tbr = words[navigator.language][39];
        }
        //summer
        if (text.includes("09/01/"+theYear)) {
            tbr = words[navigator.language][40];
        }
        //fall
        if (text.includes("11/30/"+theYear)) {
            tbr = words[navigator.language][41];
        }
        //winter
        if (text.includes("03/14/"+theYear)) {
            tbr = words[navigator.language][42];
        }
        if (text.includes("03/31/"+theYear)) {
            tbr = words[navigator.language][43];
        }
        if (text.includes("09/30/"+theYear)) {
            tbr = words[navigator.language][44];
        }
        if (text.includes("02/31/"+theYear)) {
            tbr = words[navigator.language][45];
        }
        //jan 
        if (text.toLowerCase().includes("02/01/"+theYear)) {
            tbr = words[navigator.language][46];
        }
        //feb
        if (text.includes("03/01/"+theYear)) {
            tbr = words[navigator.language][47];
        }
        //mar
        if (text.includes("04/01/"+theYear)) {
            tbr = words[navigator.language][48];
        }
        //apr
        if (text.includes("05/01/"+theYear)) {
            tbr = words[navigator.language][49];
        }
        //may
        if (text.includes("06/01/"+theYear)) {
            tbr = words[navigator.language][50];
        }
        //jun
        if (text.includes("07/01/"+theYear)) {
            tbr = words[navigator.language][51];
        }
        //july
        if (text.includes("08/01/"+theYear)) {
            tbr = words[navigator.language][52];
        }
        //aug
        if (text.includes("09/01/"+theYear)) {
            tbr = words[navigator.language][53];
        }
        //sep
        if (text.includes("10/01/"+theYear)) {
            tbr = words[navigator.language][54];
        }
        //oct
        if (text.includes("11/01/"+theYear)) {
            tbr = words[navigator.language][55];
        }
        //nov
        if (text.includes("12/01/"+theYear)) {
            tbr = words[navigator.language][56];
        }
        //dec
        tbr+=" "+theYear;
        if (text.includes("01/01/"+theYear)) {
            tbr = words[navigator.language][57];
             tbr+=" "+(theYear-1);
        }
       
        //quarantine
        if (text.includes("01/01/2022")) {
            tbr = words[navigator.language][58 + 12]
        }
        if (tbr == "01/01/XXXY") {
            tbr = theYear + 1;
        }
    }
        return tbr.charAt(0).toUpperCase() + tbr.slice(1);
    }
}
function handleError(Error) {
    console.log(Error)
    if (Error.includes('Too low')) {
        console.log(['too low', 70])
        words[navigator.language][7] = words[navigator.language][70] + '<br>' + words[navigator.language][7].split('<br>')[1]
    }
    if (Error.includes('Too high')) {
        console.log(['too high', 71])
        words[navigator.language][7] = words[navigator.language][71] + '<br>' + words[navigator.language][7].split('<br>')[1]
    }
    if (Error.includes("Can't read data")) {
        console.log([' cant read', 73])
        words[navigator.language][7] = words[navigator.language][73] + '<br>' + words[navigator.language][7].split('<br>')[1]
    }
    if (Error.includes("Both outta bounds")) {
        console.log(['both', 72])
        words[navigator.language][7] = words[navigator.language][72] + '<br>' + words[navigator.language][7].split('<br>')[1]
    }
    swapTe(shVar[isSharing][0], function () {
        if (doneAnimation) {
            var thisVall = validateDate(document.querySelector("#teInput").value);
            if (!thisVall.includes("Year Error")) {
                user.year = thisVall;
                makeShapes(user.year, "       ", "y", true);
                swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                document.querySelector("#teButton").removeAttribute("onclick", "");

            } else {
                handleError(thisVall)
            }
        }
    }, shVar[isSharing][1], function () {
        if (doneAnimation) {
            var thisVall = validateDate(document.querySelector("#teInput").value);
            if (!thisVall.includes("Year Error")) {
                user.year = thisVall;
                makeShapes(user.year, "       ", "y", true);
                swapTe(shVar[isSharing][2], generatePreferences, shVar[isSharing][3], generatePreferences);
                document.querySelector("#teButton").removeAttribute("onclick", "");

            } else {
                handleError(thisVall)
            }
        }
    });
    setTimeout(
        function () {
            while ([...document.querySelectorAll('.vs2')].length > 1) {
                [...document.querySelectorAll('.vs2')][0].remove();
            };
            var QQ = document.querySelector('.vs2');
           /* var newButtonNext = document.createElement('button');
            newButtonNext.setAttribute('onclick', `var raeleigh = function () {
                if (doneAnimation) {
                    var thisVall = validateDate(document.querySelector("#teInput").value);
                    if (!thisVall.includes("Year Error")) {
                        user.year = thisVall;
                        makeShapes(user.year, "       ", "y", true);
                        swapTe(8, generatePreferences, 4, generatePreferences);
                        document.querySelector("#teButton").removeAttribute("onclick", "");
                    } else {
                        handleError(thisVall)
                    }
                }
            }; raeleigh();`);
            newButtonNext.setAttribute('words', 4);
            newButtonNext.setAttribute('id', 'teButton');
            newButtonNext.innerText = words[navigator.language][4];
            document.querySelector('#textEnter').append(newButtonNext);
            newButtonNext.style.opacity = "1";
            newButtonNext.style.display = "block";
            */
            jintI = 0;
            fkAround2();
            document.querySelector('#textEnter').append(QQ);
           while ([...document.querySelector('#textEnter').querySelectorAll('[words = "4"]')].length > 1) {
               [...document.querySelector('#textEnter').querySelectorAll('[words = "4"]')][0].remove();
           };
        }, 505
    )
}
var ogArr = [];
var ogArr2 = [];
var gotNew = false;
//text = text.toLowerCase();
async function requestVideos(value) {
    //alert('twinnn'+value);
    var getFromNet = true;
    var userEnc = encodeURIComponent(user.year)+encodeURIComponent(user.preferences)+encodeURIComponent(user.topics);

        var pages = [];
        try{
            nextToken = localStorage.getItem('next_'+userEnc);
        }
        catch(e){
            
        }
        try{
            pages = localStorage.getItem('pag_'+userEnc).split('[PAGSPLIT]');
        }
        catch(e){
            localStorage.setItem('pag_'+userEnc,value)
        }
       // alert([currentToken,value])
        if(pages.includes(value)){
            try{
                
            allVideos = localStorage.getItem('nst_'+userEnc).split('[NSTSPLIT]');
                 getFromNet = false;
            
           
            
                
            }
            catch(e){
                localStorage.setItem('nst_'+userEnc,'');
            }
        }else{
            try{
            localStorage.getItem('nst_'+userEnc).split('[NSTSPLIT]');
            }
            catch(e){
                localStorage.setItem('nst_'+userEnc,'');
            }
        }
        console.log[getFromNet,allVideos,'TWIZZZZYYYYY']
    if (getFromNet) {
        try {
            const result = await requestVideosInner(value);
            var sanitized = result.split('NEXT_TOKEN:')[0];
            sanitized = sanitized.replace(/\n/g,'');
            nextToken = result.split('NEXT_TOKEN:')[1];
            localStorage.setItem('next_'+userEnc,nextToken);
            var tbaa = [];
                for (var i of sanitized.split(' ~ ')) {
                    tbaa.push(i);
                    console.log(i);
                }
                tbaa = [...tbaa.sort(() => Math.random() - 0.5)];
            allVideos = [...allVideos, ...tbaa];


            localStorage.setItem('nst_'+userEnc,localStorage.getItem('nst_'+userEnc,'')+'[NSTSPLIT]'+allVideos.join('[NSTSPLIT]'));
            localStorage.setItem('pag_'+userEnc,localStorage.getItem('pag_'+userEnc,'')+'[PAGSPLIT]'+value);
           gotNew = true;
        } catch (err) {
            console.error(err);
            allVideos[0] = "ERROR";
            giveError();
        }
    }
    if(nextToken == "" || !gotNew){
            allVideos = [...allVideos.sort(() => Math.random() - 0.5)];
    }
    allVideos = allVideos.filter((item, index) => allVideos.indexOf(item) === index);
    const newArr = allVideos.filter(item => !item.startsWith("📺"));
    allVideos = [...newArr];
    try{
var interval = parseFloat(Ads[0]); // e.g. "5"
var offset = 3;                    // your +3 start
var position = 0;                  // counts items in the final stream
var result = [];

for (var i = 0; i < allVideos.length; i++) {
  // add the next video
  result.push(allVideos[i]);
  position++;

  // logical position with your +3 offset
  var logicalPos = position + offset;

  // time to insert an ad?
  if (logicalPos % interval === 0) {
    // pick a random ad (skip index 0)
    var inn = Math.floor(Math.random() * (Ads.length - 1)) + 1;
    result.push('📺' + Ads[inn]);
    position++; // ad also takes a slot
  }
}

// replace original list
allVideos = result;

}
catch(e){
  console.log(e);
}
            var tbss = "";
            ogArr = [...allVideos];
            console.log(allVideos);
            var innerBool = true;
            if(false){

            }else{
                if(localStorage.getItem('nostalgiaTokAllowOldVideos') == "true"){
                    innerBool = false;
                }
            }
            if(innerBool){
                var innerValls = localStorage.getItem('nostalgiaTokOldVideos');
                var offset = 0;
            for(var excludeWatched in allVideos){
                console.log([allVideos[excludeWatched-offset],innerValls,innerValls.includes(allVideos[excludeWatched-offset])])
                if(innerValls.includes(allVideos[excludeWatched-offset])){
                    allVideos.splice(excludeWatched-offset,1);
                    offset++;
                }
            }
            }
            console.log(allVideos);
            ogArr2 = [...allVideos];
			var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

			allVideos = [...new Set(allVideos)]
            console.log(result);
            if(isSharing!=="false"){
                console.log(allVideos);
allVideos.unshift(shareVarr);
console.log(allVideos);
            }
        
    
}

async function requestVideosInner(value) {
    let url =
        "https://script.google.com/macros/s/AKfycbyRGI3dRtizuTd9bAfHw6xu7VzwpBQobP9o6ULFSMht5laEduw5QtoHHRVoC_qAJHo/exec"
        + "?year=" + encodeURIComponent(user.year)
        + "&creator=" + encodeURIComponent(user.preferences)
        + "&topic=" + encodeURIComponent(user.topics);
    if (value!=="") {
        url = url + "&token=" + encodeURIComponent(nextToken);
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            allVideos[0] = "ERROR";
        }
        console.log(response);

        const result = await response.text();
        return result;   
    } catch (error) {
        console.error(error.message);
        allVideos[0] = "ERROR";
        
    }
}
function giveError() {
    howToFullscreen(true, [75,76])
}
function giveError2() {
    howToFullscreen(true, [79,80])
}
function giveError3() {
   howToFullscreen(true, [77,78])
}

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var ErrCount = 0;
      function onYouTubeIframeAPIReady() {
        if(allVideos.length == 0){
            allVideos == [...Ads[1]];
        }
     var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navigator.language][84]+'↘';
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                            
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = '↘';
                                            }
		try{
        player = new YT.Player('videoFrame', {
          height: '390',
          width: '640',
          videoId: avcp,
          playerVars: {
            'playsinline': 1,
            'autoplay': 1,
            'muted': autoplay,
            'loop':1,
            'playlist': avcp,
            'showcontrols': 0
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': function(event) {
                giveError();
            }
          }
        });
    }
    catch(e){
        console.log(e);
        if(ErrCount < 4){
            ErrCount++;
            console.log('EC<4');
        currentPlace += 1;
        onYouTubeIframeAPIReady();
        }else{
            giveError();
            ErrCount = 0;
        }


}
       }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        if(allVideos.length == 0){
            allVideos == [...Ads[1]];
        }
          var avcp = allVideos[currentPlace];
                                            if(allVideos[currentPlace].startsWith('📺') || allVideos[currentPlace] == "ERROR"){
                                                
                                                document.querySelector('#fullscreenButton').innerText = words[navigator.language][84]+'↘';
                                                avcp = allVideos[currentPlace].replace('📺','');
                                                if(allVideos[currentPlace] == "ERROR"){
                                                    avcp = Ads[1];
                                                }
                                            
                                            }else{
                                                 document.querySelector('#fullscreenButton').innerText = '↘';
                                            }
                                            var TOOO = document.querySelector('#touchOverlay');
                                            TOOO.style.transition ="0";
                                            TOOO.style.marginLeft = "-1000vw";
                                            player.loadVideoById(avcp)
                                            setTimeout(function(){ TOOO.style.marginLeft = "";},200)
        readyy = true;
        player.pauseVideo();
                                        
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        //alert(5);
    if (event.data == YT.PlayerState.PAUSED) {
       
        console.error(playPause)
        if(withinSpeedUp){
            player.playVideo();
        }
    }
     if (event.data == YT.PlayerState.PLAYING) {
       
        console.error(playPause)
    }
}
function incPlayPause(){
   // playPause++;
}
      