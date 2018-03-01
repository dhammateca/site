var injectheader = '';

// top row navbar

injectheader += '<nav id="nav">';

injectheader += '<p class="NavBar1">';

injectheader += '<a href="https://paypal.me/dhammadana" class="button" style="color:yellow; background-color:#7F9861;" target="_blank" title="there are many expenses involved in this work: scholarly materials, travel, equipment, software, multiple website costs and maintenance; if you want to help with these things you can donate here">Donate</a>';

injectheader += '<a href="../../index.htm" target="_top" style="display:none;" class="button" title="Ancient Buddhist Texts Home Page">ABT&#160;Home</a>';

injectheader += '<a href="../../Buddhist-Texts/BT-index.htm" target="_top" class="button" title="Original Texts in Pali, Sanskritised Prakrit, and Sanskrit - Comparative Editions of the Texts - Studies of their Collection and Prosody">Original&#160;Texts</a>';

injectheader += '<a href="../../Texts-and-Translations/TT-index.htm" target="_top"  class="button" style="letter-spacing:-1px;" title="Buddhist Texts in the Original Languages, together with Annotated Translations">Texts&#160;&amp;&#160;Translations</a>';

injectheader += '<a href="../../English-Texts/ET-index.htm" target="_top"  class="button" title="Reworked Translations presented with less Notes and in English Only">English</a>';

injectheader += '<a href="../../Textual-Studies/TS-index.htm" target="_top"  class="button" title="Grammar and Prosody Studies including Original Texts on the Subject, and Articles by Various Authors">Grammar</a>';

injectheader += '<a href="../../Reference/RF-index.htm" target="_top"  class="button" title="A Selection of Works useful for Reference">Reference</a>';

injectheader += '<a href="../../Maps/MP-index.htm" target="_top"  class="button" title="A Large Collection of Maps relating to the Buddha\'s Life and Buddhist History">Maps</a>';

injectheader += '<a href="../../Audio/AU-index.htm" target="_top"  class="button" title="A Large Collection of Audio Files, both Short and Long">Audio</a>';

injectheader += '<a href="../../Miscellaneous/Search.htm" target="_top" style="display:none;">&#128270;&#160;&#160;&#160;Search </a></p>';

injectheader += '</nav>';

injectheader += '<p class="short-url center">Short URL: <span></span></p>';

injectheader += '<script src="../../includes/bitlr.js"></script> ';

injectheader += '<script>$.bitlr({apiKey: "23c47f073826eb0cdc1c2abedbb006976e0e0549",link: window.location.href,	anchor: true,	success: function(newLink) {$(".short-url span").html(newLink); },	error: function() {$(".urls").hide();}});</script> ';

injectheader +='<script src="../../includes/jquery.ultimate-burger-menu.js"></script>';

injectheader +='<script>$(document).ready(function(){$("#nav").burgerMenu({animateSpeed: 500});});</script>';

injectheader += '<p class="center"><img src="../../logo.png" alt="ABT logo" style="width:320px; margin:auto; display:none;" /></p>';

document.write(injectheader);

// tooltips
// get all tags of a class

getclass = function(cl) {
 var retnode = [];
 var myclass = new RegExp('\\b'+cl+'\\b');
 var elem = document.getElementsByTagName('*');
 for (var i = 0; i < elem.length; i++) {
 var classes = elem[i].className;
 if (myclass.test(classes)) {
 retnode.push(elem[i]);
 }
 }
 return retnode;
};

window.onload = function(e) {

// add javascript to TT class

 var TT = getclass('TT');
 for (i = 0; i < TT.length; i++) {
 TT[i].setAttribute("onMouseover","this.childNodes[0].style.display='block'; adjustChildDiv(this)");
 TT[i].setAttribute("onMouseout","if (!this.set) {this.childNodes[0].style.display='none';}");
 TT[i].setAttribute("ondblclick","if (this.set) { this.set = null; } else {this.set = 1;}");
 }
};

function adjustChildDiv(elem) {
 var left = -224;
 if(window.innerWidth<elem.offsetLeft + elem.childNodes[0].offsetLeft + elem.childNodes[0].offsetWidth) elem.childNodes[0].style.left = window.innerWidth-elem.offsetLeft-elem.childNodes[0].offsetWidth+'px';
 else if(elem.offsetLeft + elem.childNodes[0].offsetLeft<0) elem.childNodes[0].style.left = left - (elem.offsetLeft + elem.childNodes[0].offsetLeft)+'px';
 else if(window.innerWidth > elem.offsetLeft + left + elem.childNodes[0].offsetWidth && elem.offsetLeft + left > 0) elem.childNodes[0].style.left = left+'px';
};
