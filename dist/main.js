/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Using Css variable*/
:root {
  --bg-color: white;
  --font-color: black;
  --secondary: #00b0ff;
}

.dark {
  --bg-color: black;
  --font-color: white;
  --secondary: #536dfe;
  --color1: rgb(240, 240, 240);
  --color3: rgb(23, 23, 24) ;
  --color2: rgb(23, 23, 24) ;
}

body {
  background-color: var(--bg-color);
  color: var(--font-color);
  font-family: "DM Sans", sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  --color1: black ;
  --color2: rgb(23, 23, 24) ;
  --color3: rgb(240, 240, 240);
}

.header {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  margin-right: 2%;

  list-style: none;
  position: relative;
 /* padding: 12px 20px;*/
}

.logo {
  display: flex;
  justify-content: center;
  width: 100px;
}

.options {
  display: flex;
  width: max(500px, 50%);
  justify-content: space-around;
  height: 25px;
  font-size: max(15px, 1vw);
  color: var(--font-color);
}

.options > div:hover {
  cursor: pointer;
  color: var(--secondary);
}

.home {
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10%;
}

.slogan {
  font-size: max(3.5vw, 40px);
  display: flex;
  margin-bottom: 20px;
  font-weight: 900;
}

.slogan-para {
  font-size: max(1vw, 20px);
  width: max(80%, 280px);
}

i {
  font-size: 25px;
  width: auto;
  cursor: pointer;
  transform: translate(-50%, -50%);
}

.logo {
  display: flex;
  align-items: center;
}

/* study-material page */
.study,
.roadMaps {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tagline {
  margin-top: 5vh;
  font-size: min(8vw, 70px);
  font-weight: 950;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-bar {
  margin-top: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  border: 2px solid var(--font-color);
  width: max(40vw, 300px);
  padding: 8px;
  padding-left: 15px;
  gap: 10px;
  border-radius: 5px;
}
#course-select {
  background-color: var(--bg-color);
  color: var(--font-color);
  border: none;
  outline: none;
  color: (--font-color);
  font-size: 25px;
  border-left: 1px solid grey;
  padding-left: 10px;
  font-weight: 100;
  width: 80%;
}

.courses,
.roads {
  width: 90%;

  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.courseBox {
  height: 200px;
  width: 300px;
  border: 2px solid var(--font-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color);
}

.glink {
  display: none;
  border-bottom: none;
}
a {
  text-decoration: none;
  color: var(--font-color);
  border-bottom: none;
}
a:visited {
  text-decoration: none;
  color: var(--font-color);
}
a:hover {
  text-decoration: none;
  color: var(--font-color);
}
a:active {
  text-decoration: none;
  color: var(--font-color);
}
.generate {
  padding-bottom: 20px;
}
/*erp management*/
.linkSection {
  margin-top: 5vh;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}
.erpManagement {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.linkSection > div {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--font-color);
  font-size: max(1.2vw, 15px);
  height: max(35px, 5vh);
  width: max(350px, 15vw);
  border-radius: 5px;
  color: var(--font-color);
  background-color: var(--bg-color);
  flex-wrap: wrap;
  cursor: pointer;
}
.linkSection > div:hover {
  color: var(--bg-color);
  background-color: var(--font-color);
  transition: 100ms;
}
.sub-tag {
  font-size: 0.5em;
  font-weight: 200;
  margin-top: 2vh;
  display: flex;
  text-align: center;
}
.faqs {
  display: flex;
  flex-direction: column;
  margin-top: 7vh;
  width: 95%;
  gap: 20px;
}
.faqs > div {
  border: 1px solid var(--font-color);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 15px;
  border-radius: 2px;
}
.sol {
  display: none;
}
.roadBox {
  height: 200px;
  width: 300px;
  border: 2px solid var(--font-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--font-color);
}
.glink-r {
  display: none;
  border: 1px solid var(--font-color);
  background-color: var(--bg-color);
  color: var(--font-color);
  width: 33%;
  padding: 10px;
  justify-content: center;
  border-radius: 5px;
}
.glink-r:hover {
  background-color: var(--font-color);
  color: var(--bg-color);
}
a.ar {
  color: inherit;
}
/* footer */
.footer {
  background-color: rgb(23, 23, 24);
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
}

.reasources {
  display: flex;
  justify-content: center;
  color: white;
  gap: 10px;
  width: 50%;
  flex-wrap: wrap;
}
.reasources > div:hover {
  color: var(--secondary);
  cursor: pointer;
}
.contact > a {
  color: white;
  margin: 10px;
}
.contact > a:hover {
  color: var(--secondary);
}

.foot-logo {
  color: white;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.foot-logo:hover {
  color: var(--secondary);
}
.generate {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/*About us*/
.sloganButton {
  margin-top: 4vw;
  width: max(200px, 20vw);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid var(--secondary);
  border-radius: 10px;
  font-size: max(1.2vw, 20px);
}
.sloganButton:hover {
  background-color: var(--secondary);
  cursor: pointer;
}
.about {
  margin-top: 1vh;
  padding: 5vw;
}
.aboutContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vw;
}
.firstContent,
.secondContent {
  display: flex;
  gap: 15vw;
  padding-bottom: 8vw;
  border-bottom: 1px solid var(--font-color);
}
.secondContent {
  flex-direction: row-reverse;
  border-bottom: none;
}
.textContent {
  display: flex;
  flex-direction: column;
}
.question {
  font-size: 3vw;
  margin-bottom: 20px;
}
.question > span {
  color: var(--secondary);
}
.answer {
  font-size: min(2vw, 30px);
}
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: min(6vw, 80px);
}
.meetTeam {
  width: fit-content;
  font-size: 5.5vw;
  font-weight: 600;
  border-bottom: 2px solid var(--secondary);
}
.teamBay {
  display: flex;
  width: 90%;
  justify-content: space-between;
}
.teamBay > div {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: max(1.2vw, 13px);
  width: 25vw;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid var(--font-color);
  border-radius: 10px;
}
.teamBay > div:hover {
  background-color: var(--secondary);
  cursor: pointer;
}
.teamPeople {
  width: 90%;
  padding: 10px;
  border: 1px solid var(--secondary);
}
.teamPeople > div {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 10%;
}
/*flipcard*/
.person {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flip-card {
  background-color: transparent;
  width: min(25vw, 300px);
  height: min(25vw, 300px);
  perspective: 1000px;
  margin-bottom: 0.8vw;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  border-radius: 10px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
.flip-card-front > img{
  border-radius: 10px;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  color: var(--font-color);
}

/* Style the back side */
.flip-card-back {
  background-color: var(--secondary);
  color: var(--font-color);
  font-size: max(1.2vw, 13px);
  transform: rotateY(180deg);
}
.flip-card-back > span{
  margin-bottom: 2.5vw;
}
.socials {
  display: flex;
  justify-content: center;
  gap: max(1vw, 10%);
  width: 70%;
}
.socials > a > i {
  font-size: max(2vw, 15px);
}
.person > span {
  font-size: max(1.3vw, 13px);
}
/*slider*/

#slider {
  position: relative;
  width: 60%;
  min-height: 30vw;
  margin: 80px auto;
  font-family: "DM sans", sans-serif;
  perspective: 1400px;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
}

input[type="radio"] {
  display: none;
  position: absolute;
  top: 108%;
  width: 4vw;
  height: 18px;
  margin: 0 15px 0 0;
  opacity: 0.6;
  cursor: pointer;
}

/*input[type=radio]:nth-child(5) {
  margin-right: 0px;
}

input[type=radio]:checked {
  opacity: 1;
}*/

h2 {
  font-size: 2.5vw;
  color: white;
  margin: 0;
  margin-bottom: 20px;
}

p {
  width: 50%;
  font-size: min(30px, 1.5vw);
}

#slider label {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  color: white;
  font-weight: normal;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  transition: transform 400ms ease;
  box-sizing: border-box;
  padding: 20px;
}
.sliderContent {
  display: flex;
  align-items: center;
  gap: 40px;
  height: 100%;
}
#slide1 {
  background: #066892;
}
.dark #slide1 {
  background: #232e6f;
}

#slide2 {
  background: #0d97d2;
}
.dark #slide2 {
  background: #384ab2;
}

#slide3 {
  background: #00b0ff;
}
.dark #slide3 {
  background: #536dfe;
}
/*
#slide4 {
  background: slateblue;
}

#slide5 {
  background: violet;
}*/

/* Slider Functionality */

/* Active Slide */
#s1:checked ~ #slide1,
#s2:checked ~ #slide2,
#s3:checked ~ #slide3,
#s4:checked ~ #slide4,
#s5:checked ~ #slide5 {
  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
  transform: translate3d(0%, 0, 0px);
}

/* Next Slide */
#s1:checked ~ #slide2,
#s2:checked ~ #slide3,
#s3:checked ~ #slide4,
#s4:checked ~ #slide5,
#s5:checked ~ #slide1 {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
  transform: translate3d(15%, 0, -100px);
}

/* Next to Next Slide */
#s1:checked ~ #slide3,
#s2:checked ~ #slide4,
#s3:checked ~ #slide5,
#s4:checked ~ #slide1,
#s5:checked ~ #slide2 {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  transform: translate3d(30%, 0, -250px);
}

/* Previous to Previous Slide */
#s1:checked ~ #slide4,
#s2:checked ~ #slide5,
#s3:checked ~ #slide1,
#s4:checked ~ #slide2,
#s5:checked ~ #slide3 {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  transform: translate3d(-30%, 0, -250px);
}

/* Previous Slide */
#s1:checked ~ #slide5,
#s2:checked ~ #slide1,
#s3:checked ~ #slide2,
#s4:checked ~ #slide3,
#s5:checked ~ #slide4 {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
  transform: translate3d(-15%, 0, -100px);
}

/*Responsive*/
@media screen and (max-width: 800px) {
  /*homepage taglines*/
  body {
    align-items: center;
  }
  #image {
    display: none;
  }
  .home {
    padding-left: 0;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .slogan {
    text-align: center;
  }
  .slogan-para {
    text-align: center;
  }
  /*slider*/
  #slider {
    margin-top: 40px;
    margin-bottom: 20px;
    min-height: 50vh;
    width: 70%;
  }
  #slider label {
    height: 100%;
  }
  .sliderContent {
    flex-direction: column;
    gap: 5px;
    height: 100%;
    align-items: center;
  }
  h2 {
    font-size: max(2.6vw, 14px);
  }
  p {
    width: 80%;
    font-size: max(2.2vw, 11px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  input[type="radio"] {
    position: absolute;
    top: 104%;
  }
}

/*hamburger menu*/
.options  {display: flex;}
/* .options div {padding-left: 30px;}
/*.options div #home #erp #road #study {
    display: inline-block;
    text-decoration: none;
    color: var(--color1);
    text-align: left;
    transition: 0.15s ease-in-out;
    position: relative;
    text-transform: uppercase;
}
.options div #home 
 #erp #road #study::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color1);
    transition: 0.15s ease-in-out;
}
.options div #home #erp #road  #study:hover:after {width: 100%;}*/
.open-menu , .close-menu {
    position: absolute;
    color: var(--color1);
    cursor: pointer;
    font-size: 1.5rem;
    display: none;
}
.open-menu {
  position: absolute;
    top: 76%;
    left: 52%;
    transform: translateY(-50%);
}
.close-menu {
  color: var(--color1);
    top: 40px;
    right: 35px;
}
#check {display: none;}
@media(max-width: 610px){
  .options {
    font-weight: bold;
    font-size: larger;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50vh;
      position: fixed;
      top: 0;
      right: -100%;
      z-index: 100;
      background-color: var(--color3);
      transition: all 0.2s ease-in-out;
  }
  .options div {margin-top: 40px;}
   /* .options div #home #erp #road  #study {padding: 10px;}*/
    .open-menu , .close-menu {display: block;}
    #check:checked ~ .options {right: 0;}
}`, "",{"version":3,"sources":["webpack://./src/Style.css"],"names":[],"mappings":"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EACV,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,mCAAmC;EACnC,sBAAsB;AACxB;AACA;EACE,cAAc;AAChB;AACA,WAAW;AACX;EACE,iCAAiC;EACjC,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,UAAU;EACV,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA,WAAW;AACX;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,eAAe;EACf,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;;EAEE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,0CAA0C;AAC5C;AACA;EACE,2BAA2B;EAC3B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,yCAAyC;AAC3C;AACA;EACE,aAAa;EACb,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,2BAA2B;EAC3B,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,mCAAmC;EACnC,mBAAmB;AACrB;AACA;EACE,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,UAAU;EACV,aAAa;EACb,kCAAkC;AACpC;AACA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;AACA,WAAW;AACX;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,6BAA6B;EAC7B,uBAAuB;EACvB,wBAAwB;EACxB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA,iEAAiE;AACjE;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA,8EAA8E;AAC9E;EACE,0BAA0B;AAC5B;;AAEA,qCAAqC;AACrC;;EAEE,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,mCAAmC,EAAE,WAAW;EAChD,2BAA2B;AAC7B;AACA;EACE,mBAAmB;AACrB;;AAEA,wDAAwD;AACxD;EACE,wBAAwB;AAC1B;;AAEA,wBAAwB;AACxB;EACE,kCAAkC;EAClC,wBAAwB;EACxB,2BAA2B;EAC3B,0BAA0B;AAC5B;AACA;EACE,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,2BAA2B;AAC7B;AACA,SAAS;;AAET;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,iBAAiB;EACjB,kCAAkC;EAClC,mBAAmB;EACnB,4BAA4B;EAC5B,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;;;;;;EAME;;AAEF;EACE,gBAAgB;EAChB,YAAY;EACZ,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,OAAO;EACP,MAAM;EACN,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,sBAAsB;EACtB,gCAAgC;EAChC,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,YAAY;AACd;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;;;;;;;EAOE;;AAEF,yBAAyB;;AAEzB,iBAAiB;AACjB;;;;;EAKE,yEAAyE;EACzE,kCAAkC;AACpC;;AAEA,eAAe;AACf;;;;;EAKE,uEAAuE;EACvE,sCAAsC;AACxC;;AAEA,uBAAuB;AACvB;;;;;EAKE,wCAAwC;EACxC,sCAAsC;AACxC;;AAEA,+BAA+B;AAC/B;;;;;EAKE,wCAAwC;EACxC,uCAAuC;AACzC;;AAEA,mBAAmB;AACnB;;;;;EAKE,uEAAuE;EACvE,uCAAuC;AACzC;;AAEA,aAAa;AACb;EACE,oBAAoB;EACpB;IACE,mBAAmB;EACrB;EACA;IACE,aAAa;EACf;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;EACA,SAAS;EACT;IACE,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;IAChB,UAAU;EACZ;EACA;IACE,YAAY;EACd;EACA;IACE,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,mBAAmB;EACrB;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,UAAU;IACV,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;EACpB;EACA;IACE,kBAAkB;IAClB,SAAS;EACX;AACF;;AAEA,iBAAiB;AACjB,WAAW,aAAa,CAAC;AACzB;;;;;;;;;;;;;;;;;;;;;iEAqBiE;AACjE;IACI,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,aAAa;AACjB;AACA;EACE,kBAAkB;IAChB,QAAQ;IACR,SAAS;IACT,2BAA2B;AAC/B;AACA;EACE,oBAAoB;IAClB,SAAS;IACT,WAAW;AACf;AACA,QAAQ,aAAa,CAAC;AACtB;EACE;IACE,iBAAiB;IACjB,iBAAiB;MACf,sBAAsB;MACtB,mBAAmB;MACnB,uBAAuB;MACvB,WAAW;MACX,YAAY;MACZ,eAAe;MACf,MAAM;MACN,YAAY;MACZ,YAAY;MACZ,+BAA+B;MAC/B,gCAAgC;EACpC;EACA,cAAc,gBAAgB,CAAC;GAC9B,0DAA0D;IACzD,0BAA0B,cAAc,CAAC;IACzC,2BAA2B,QAAQ,CAAC;AACxC","sourcesContent":["/*Using Css variable*/\r\n:root {\r\n  --bg-color: white;\r\n  --font-color: black;\r\n  --secondary: #00b0ff;\r\n}\r\n\r\n.dark {\r\n  --bg-color: black;\r\n  --font-color: white;\r\n  --secondary: #536dfe;\r\n  --color1: rgb(240, 240, 240);\r\n  --color3: rgb(23, 23, 24) ;\r\n  --color2: rgb(23, 23, 24) ;\r\n}\r\n\r\nbody {\r\n  background-color: var(--bg-color);\r\n  color: var(--font-color);\r\n  font-family: \"DM Sans\", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  \r\n  --color1: black ;\r\n  --color2: rgb(23, 23, 24) ;\r\n  --color3: rgb(240, 240, 240);\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  align-items: center;\r\n  margin-right: 2%;\r\n\r\n  list-style: none;\r\n  position: relative;\r\n /* padding: 12px 20px;*/\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100px;\r\n}\r\n\r\n.options {\r\n  display: flex;\r\n  width: max(500px, 50%);\r\n  justify-content: space-around;\r\n  height: 25px;\r\n  font-size: max(15px, 1vw);\r\n  color: var(--font-color);\r\n}\r\n\r\n.options > div:hover {\r\n  cursor: pointer;\r\n  color: var(--secondary);\r\n}\r\n\r\n.home {\r\n  margin-top: 10vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-left: 10%;\r\n}\r\n\r\n.slogan {\r\n  font-size: max(3.5vw, 40px);\r\n  display: flex;\r\n  margin-bottom: 20px;\r\n  font-weight: 900;\r\n}\r\n\r\n.slogan-para {\r\n  font-size: max(1vw, 20px);\r\n  width: max(80%, 280px);\r\n}\r\n\r\ni {\r\n  font-size: 25px;\r\n  width: auto;\r\n  cursor: pointer;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/* study-material page */\r\n.study,\r\n.roadMaps {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.tagline {\r\n  margin-top: 5vh;\r\n  font-size: min(8vw, 70px);\r\n  font-weight: 950;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.search-bar {\r\n  margin-top: 5vh;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  border: 2px solid var(--font-color);\r\n  width: max(40vw, 300px);\r\n  padding: 8px;\r\n  padding-left: 15px;\r\n  gap: 10px;\r\n  border-radius: 5px;\r\n}\r\n#course-select {\r\n  background-color: var(--bg-color);\r\n  color: var(--font-color);\r\n  border: none;\r\n  outline: none;\r\n  color: (--font-color);\r\n  font-size: 25px;\r\n  border-left: 1px solid grey;\r\n  padding-left: 10px;\r\n  font-weight: 100;\r\n  width: 80%;\r\n}\r\n\r\n.courses,\r\n.roads {\r\n  width: 90%;\r\n\r\n  margin-top: 50px;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 30px;\r\n}\r\n\r\n.courseBox {\r\n  height: 200px;\r\n  width: 300px;\r\n  border: 2px solid var(--font-color);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n}\r\n\r\n.glink {\r\n  display: none;\r\n  border-bottom: none;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n  border-bottom: none;\r\n}\r\na:visited {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n}\r\na:hover {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n}\r\na:active {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n}\r\n.generate {\r\n  padding-bottom: 20px;\r\n}\r\n/*erp management*/\r\n.linkSection {\r\n  margin-top: 5vh;\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n.erpManagement {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.linkSection > div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid var(--font-color);\r\n  font-size: max(1.2vw, 15px);\r\n  height: max(35px, 5vh);\r\n  width: max(350px, 15vw);\r\n  border-radius: 5px;\r\n  color: var(--font-color);\r\n  background-color: var(--bg-color);\r\n  flex-wrap: wrap;\r\n  cursor: pointer;\r\n}\r\n.linkSection > div:hover {\r\n  color: var(--bg-color);\r\n  background-color: var(--font-color);\r\n  transition: 100ms;\r\n}\r\n.sub-tag {\r\n  font-size: 0.5em;\r\n  font-weight: 200;\r\n  margin-top: 2vh;\r\n  display: flex;\r\n  text-align: center;\r\n}\r\n.faqs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 7vh;\r\n  width: 95%;\r\n  gap: 20px;\r\n}\r\n.faqs > div {\r\n  border: 1px solid var(--font-color);\r\n  display: flex;\r\n  align-items: flex-start;\r\n  flex-direction: column;\r\n  padding: 15px;\r\n  border-radius: 2px;\r\n}\r\n.sol {\r\n  display: none;\r\n}\r\n.roadBox {\r\n  height: 200px;\r\n  width: 300px;\r\n  border: 2px solid var(--font-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n}\r\n.glink-r {\r\n  display: none;\r\n  border: 1px solid var(--font-color);\r\n  background-color: var(--bg-color);\r\n  color: var(--font-color);\r\n  width: 33%;\r\n  padding: 10px;\r\n  justify-content: center;\r\n  border-radius: 5px;\r\n}\r\n.glink-r:hover {\r\n  background-color: var(--font-color);\r\n  color: var(--bg-color);\r\n}\r\na.ar {\r\n  color: inherit;\r\n}\r\n/* footer */\r\n.footer {\r\n  background-color: rgb(23, 23, 24);\r\n  padding: 15px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n}\r\n\r\n.reasources {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: white;\r\n  gap: 10px;\r\n  width: 50%;\r\n  flex-wrap: wrap;\r\n}\r\n.reasources > div:hover {\r\n  color: var(--secondary);\r\n  cursor: pointer;\r\n}\r\n.contact > a {\r\n  color: white;\r\n  margin: 10px;\r\n}\r\n.contact > a:hover {\r\n  color: var(--secondary);\r\n}\r\n\r\n.foot-logo {\r\n  color: white;\r\n  font-size: 25px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n}\r\n.foot-logo:hover {\r\n  color: var(--secondary);\r\n}\r\n.generate {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n/*About us*/\r\n.sloganButton {\r\n  margin-top: 4vw;\r\n  width: max(200px, 20vw);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  border: 1px solid var(--secondary);\r\n  border-radius: 10px;\r\n  font-size: max(1.2vw, 20px);\r\n}\r\n.sloganButton:hover {\r\n  background-color: var(--secondary);\r\n  cursor: pointer;\r\n}\r\n.about {\r\n  margin-top: 1vh;\r\n  padding: 5vw;\r\n}\r\n.aboutContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10vw;\r\n}\r\n.firstContent,\r\n.secondContent {\r\n  display: flex;\r\n  gap: 15vw;\r\n  padding-bottom: 8vw;\r\n  border-bottom: 1px solid var(--font-color);\r\n}\r\n.secondContent {\r\n  flex-direction: row-reverse;\r\n  border-bottom: none;\r\n}\r\n.textContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.question {\r\n  font-size: 3vw;\r\n  margin-bottom: 20px;\r\n}\r\n.question > span {\r\n  color: var(--secondary);\r\n}\r\n.answer {\r\n  font-size: min(2vw, 30px);\r\n}\r\n.team {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: min(6vw, 80px);\r\n}\r\n.meetTeam {\r\n  width: fit-content;\r\n  font-size: 5.5vw;\r\n  font-weight: 600;\r\n  border-bottom: 2px solid var(--secondary);\r\n}\r\n.teamBay {\r\n  display: flex;\r\n  width: 90%;\r\n  justify-content: space-between;\r\n}\r\n.teamBay > div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: max(1.2vw, 13px);\r\n  width: 25vw;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  border: 1px solid var(--font-color);\r\n  border-radius: 10px;\r\n}\r\n.teamBay > div:hover {\r\n  background-color: var(--secondary);\r\n  cursor: pointer;\r\n}\r\n.teamPeople {\r\n  width: 90%;\r\n  padding: 10px;\r\n  border: 1px solid var(--secondary);\r\n}\r\n.teamPeople > div {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10%;\r\n}\r\n/*flipcard*/\r\n.person {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.flip-card {\r\n  background-color: transparent;\r\n  width: min(25vw, 300px);\r\n  height: min(25vw, 300px);\r\n  perspective: 1000px;\r\n  margin-bottom: 0.8vw;\r\n}\r\n\r\n/* This container is needed to position the front and back side */\r\n.flip-card-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  transition: transform 0.8s;\r\n  transform-style: preserve-3d;\r\n}\r\n\r\n/* Do an horizontal flip when you move the mouse over the flip box container */\r\n.flip-card:hover .flip-card-inner {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n/* Position the front and back side */\r\n.flip-card-front,\r\n.flip-card-back {\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-backface-visibility: hidden; /* Safari */\r\n  backface-visibility: hidden;\r\n}\r\n.flip-card-front > img{\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Style the front side (fallback if image is missing) */\r\n.flip-card-front {\r\n  color: var(--font-color);\r\n}\r\n\r\n/* Style the back side */\r\n.flip-card-back {\r\n  background-color: var(--secondary);\r\n  color: var(--font-color);\r\n  font-size: max(1.2vw, 13px);\r\n  transform: rotateY(180deg);\r\n}\r\n.flip-card-back > span{\r\n  margin-bottom: 2.5vw;\r\n}\r\n.socials {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: max(1vw, 10%);\r\n  width: 70%;\r\n}\r\n.socials > a > i {\r\n  font-size: max(2vw, 15px);\r\n}\r\n.person > span {\r\n  font-size: max(1.3vw, 13px);\r\n}\r\n/*slider*/\r\n\r\n#slider {\r\n  position: relative;\r\n  width: 60%;\r\n  min-height: 30vw;\r\n  margin: 80px auto;\r\n  font-family: \"DM sans\", sans-serif;\r\n  perspective: 1400px;\r\n  transform-style: preserve-3d;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 108%;\r\n  width: 4vw;\r\n  height: 18px;\r\n  margin: 0 15px 0 0;\r\n  opacity: 0.6;\r\n  cursor: pointer;\r\n}\r\n\r\n/*input[type=radio]:nth-child(5) {\r\n  margin-right: 0px;\r\n}\r\n\r\ninput[type=radio]:checked {\r\n  opacity: 1;\r\n}*/\r\n\r\nh2 {\r\n  font-size: 2.5vw;\r\n  color: white;\r\n  margin: 0;\r\n  margin-bottom: 20px;\r\n}\r\n\r\np {\r\n  width: 50%;\r\n  font-size: min(30px, 1.5vw);\r\n}\r\n\r\n#slider label {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  color: white;\r\n  font-weight: normal;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  flex-direction: column;\r\n  transition: transform 400ms ease;\r\n  box-sizing: border-box;\r\n  padding: 20px;\r\n}\r\n.sliderContent {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n  height: 100%;\r\n}\r\n#slide1 {\r\n  background: #066892;\r\n}\r\n.dark #slide1 {\r\n  background: #232e6f;\r\n}\r\n\r\n#slide2 {\r\n  background: #0d97d2;\r\n}\r\n.dark #slide2 {\r\n  background: #384ab2;\r\n}\r\n\r\n#slide3 {\r\n  background: #00b0ff;\r\n}\r\n.dark #slide3 {\r\n  background: #536dfe;\r\n}\r\n/*\r\n#slide4 {\r\n  background: slateblue;\r\n}\r\n\r\n#slide5 {\r\n  background: violet;\r\n}*/\r\n\r\n/* Slider Functionality */\r\n\r\n/* Active Slide */\r\n#s1:checked ~ #slide1,\r\n#s2:checked ~ #slide2,\r\n#s3:checked ~ #slide3,\r\n#s4:checked ~ #slide4,\r\n#s5:checked ~ #slide5 {\r\n  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);\r\n  transform: translate3d(0%, 0, 0px);\r\n}\r\n\r\n/* Next Slide */\r\n#s1:checked ~ #slide2,\r\n#s2:checked ~ #slide3,\r\n#s3:checked ~ #slide4,\r\n#s4:checked ~ #slide5,\r\n#s5:checked ~ #slide1 {\r\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  transform: translate3d(15%, 0, -100px);\r\n}\r\n\r\n/* Next to Next Slide */\r\n#s1:checked ~ #slide3,\r\n#s2:checked ~ #slide4,\r\n#s3:checked ~ #slide5,\r\n#s4:checked ~ #slide1,\r\n#s5:checked ~ #slide2 {\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n  transform: translate3d(30%, 0, -250px);\r\n}\r\n\r\n/* Previous to Previous Slide */\r\n#s1:checked ~ #slide4,\r\n#s2:checked ~ #slide5,\r\n#s3:checked ~ #slide1,\r\n#s4:checked ~ #slide2,\r\n#s5:checked ~ #slide3 {\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n  transform: translate3d(-30%, 0, -250px);\r\n}\r\n\r\n/* Previous Slide */\r\n#s1:checked ~ #slide5,\r\n#s2:checked ~ #slide1,\r\n#s3:checked ~ #slide2,\r\n#s4:checked ~ #slide3,\r\n#s5:checked ~ #slide4 {\r\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  transform: translate3d(-15%, 0, -100px);\r\n}\r\n\r\n/*Responsive*/\r\n@media screen and (max-width: 800px) {\r\n  /*homepage taglines*/\r\n  body {\r\n    align-items: center;\r\n  }\r\n  #image {\r\n    display: none;\r\n  }\r\n  .home {\r\n    padding-left: 0;\r\n  }\r\n  .text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  .slogan {\r\n    text-align: center;\r\n  }\r\n  .slogan-para {\r\n    text-align: center;\r\n  }\r\n  /*slider*/\r\n  #slider {\r\n    margin-top: 40px;\r\n    margin-bottom: 20px;\r\n    min-height: 50vh;\r\n    width: 70%;\r\n  }\r\n  #slider label {\r\n    height: 100%;\r\n  }\r\n  .sliderContent {\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    height: 100%;\r\n    align-items: center;\r\n  }\r\n  h2 {\r\n    font-size: max(2.6vw, 14px);\r\n  }\r\n  p {\r\n    width: 80%;\r\n    font-size: max(2.2vw, 11px);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n  }\r\n  input[type=\"radio\"] {\r\n    position: absolute;\r\n    top: 104%;\r\n  }\r\n}\r\n\r\n/*hamburger menu*/\r\n.options  {display: flex;}\r\n/* .options div {padding-left: 30px;}\r\n/*.options div #home #erp #road #study {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: var(--color1);\r\n    text-align: left;\r\n    transition: 0.15s ease-in-out;\r\n    position: relative;\r\n    text-transform: uppercase;\r\n}\r\n.options div #home \r\n #erp #road #study::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 1px;\r\n    background-color: var(--color1);\r\n    transition: 0.15s ease-in-out;\r\n}\r\n.options div #home #erp #road  #study:hover:after {width: 100%;}*/\r\n.open-menu , .close-menu {\r\n    position: absolute;\r\n    color: var(--color1);\r\n    cursor: pointer;\r\n    font-size: 1.5rem;\r\n    display: none;\r\n}\r\n.open-menu {\r\n  position: absolute;\r\n    top: 76%;\r\n    left: 52%;\r\n    transform: translateY(-50%);\r\n}\r\n.close-menu {\r\n  color: var(--color1);\r\n    top: 40px;\r\n    right: 35px;\r\n}\r\n#check {display: none;}\r\n@media(max-width: 610px){\r\n  .options {\r\n    font-weight: bold;\r\n    font-size: larger;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      width: 100%;\r\n      height: 50vh;\r\n      position: fixed;\r\n      top: 0;\r\n      right: -100%;\r\n      z-index: 100;\r\n      background-color: var(--color3);\r\n      transition: all 0.2s ease-in-out;\r\n  }\r\n  .options div {margin-top: 40px;}\r\n   /* .options div #home #erp #road  #study {padding: 10px;}*/\r\n    .open-menu , .close-menu {display: block;}\r\n    #check:checked ~ .options {right: 0;}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/Style.css":
/*!***********************!*\
  !*** ./src/Style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./Style.css */ "./node_modules/css-loader/dist/cjs.js!./src/Style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/reasources/10.png":
/*!*******************************!*\
  !*** ./src/reasources/10.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e06d3f5e0485d7c981ec.png";

/***/ }),

/***/ "./src/reasources/9.png":
/*!******************************!*\
  !*** ./src/reasources/9.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22ea43c2b7c0f287f84f.png";

/***/ }),

/***/ "./src/reasources/computer.svg":
/*!*************************************!*\
  !*** ./src/reasources/computer.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65df72cc6f8a3ee1cae1.svg";

/***/ }),

/***/ "./src/reasources/darkmode.svg":
/*!*************************************!*\
  !*** ./src/reasources/darkmode.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7e5aee6776a70d96efc.svg";

/***/ }),

/***/ "./src/reasources/goal.svg":
/*!*********************************!*\
  !*** ./src/reasources/goal.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b90b6194cacc9331bdc.svg";

/***/ }),

/***/ "./src/reasources/helpLight.svg":
/*!**************************************!*\
  !*** ./src/reasources/helpLight.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed792d7154d81d708796.svg";

/***/ }),

/***/ "./src/reasources/journey.svg":
/*!************************************!*\
  !*** ./src/reasources/journey.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7de33925849c04f25298.svg";

/***/ }),

/***/ "./src/reasources/lightmode.svg":
/*!**************************************!*\
  !*** ./src/reasources/lightmode.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aee3578e9dc63b42aa04.svg";

/***/ }),

/***/ "./src/reasources/opensource.svg":
/*!***************************************!*\
  !*** ./src/reasources/opensource.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae5fc0e744b4a9f0066a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Style.css */ "./src/Style.css");
/* harmony import */ var _src_reasources_10_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/reasources/10.png */ "./src/reasources/10.png");
/* harmony import */ var _src_reasources_9_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/reasources/9.png */ "./src/reasources/9.png");
/* harmony import */ var _src_reasources_darkmode_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/reasources/darkmode.svg */ "./src/reasources/darkmode.svg");
/* harmony import */ var _src_reasources_lightmode_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/reasources/lightmode.svg */ "./src/reasources/lightmode.svg");
/* harmony import */ var _src_reasources_goal_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/reasources/goal.svg */ "./src/reasources/goal.svg");
/* harmony import */ var _src_reasources_journey_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/reasources/journey.svg */ "./src/reasources/journey.svg");
/* harmony import */ var _src_reasources_opensource_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/reasources/opensource.svg */ "./src/reasources/opensource.svg");
/* harmony import */ var _src_reasources_computer_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/reasources/computer.svg */ "./src/reasources/computer.svg");
/* harmony import */ var _src_reasources_helpLight_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/reasources/helpLight.svg */ "./src/reasources/helpLight.svg");











//Intial logo generation
document.getElementById("lg").src = _src_reasources_10_png__WEBPACK_IMPORTED_MODULE_1__;
document.getElementById("ft-logo").src = _src_reasources_9_png__WEBPACK_IMPORTED_MODULE_2__;
//intial homepage pic generation
const img = document.getElementById("image");
img.src = _src_reasources_lightmode_svg__WEBPACK_IMPORTED_MODULE_4__;
document.getElementById("goal").src = _src_reasources_goal_svg__WEBPACK_IMPORTED_MODULE_5__;
document.getElementById("journey").src = _src_reasources_journey_svg__WEBPACK_IMPORTED_MODULE_6__;
document.getElementById("os").src = _src_reasources_opensource_svg__WEBPACK_IMPORTED_MODULE_7__;
//DarkMode LightMode Toggle
const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const options = document.getElementById("options");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  document.body.classList.toggle("dark");
  const logo = document.getElementById("lg");
  const img = document.getElementById("image");

  //see which mode it is
  let isDarkMode = body.classList.contains("dark");

  if (isDarkMode) {
    logo.src = _src_reasources_9_png__WEBPACK_IMPORTED_MODULE_2__;
    if (img) {
      img.src = _src_reasources_darkmode_svg__WEBPACK_IMPORTED_MODULE_3__;
    }
  } else {
    logo.src = _src_reasources_10_png__WEBPACK_IMPORTED_MODULE_1__;
    if (img) {
      img.src = _src_reasources_lightmode_svg__WEBPACK_IMPORTED_MODULE_4__;
    }
  }
});

let generate = document.querySelector(".generate");
const hoe = document.getElementById("home");
const stud = document.getElementById("study");
const road = document.getElementById("road");
const erp = document.getElementById("erp");

//Generate homePage dynamically
let homegen = () => {
  const isDarkMode = body.classList.contains("dark");
  hoe.style.borderBottom = "2px solid var(--font-color)";
  stud.style.borderBottom = "none";
  road.style.borderBottom = "none";
  erp.style.borderBottom = "none";
  generate.innerHTML = `<div class="home">
    <div class="content">
        <div class="text">
            <div class="slogan">
              Simplify academics with us
            </div>
            <div class="slogan-para">
                Welcome to SnuAcademia, the ultimate student designed website that helps in simplifying study life
                at SNU
            </div>
            <div class="sloganButton">About us</div>
        </div>
    </div>
    <img id="image" src='${_src_reasources_lightmode_svg__WEBPACK_IMPORTED_MODULE_4__}' style="width:50%;margin-right: 10%;">
</div>
<section id="slider">
        <input type="radio" name="slider" id="s1" checked />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <label for="s1" id="slide1"
          ><h2>Our Goal</h2>
          <div class="sliderContent">
            <img src="${_src_reasources_goal_svg__WEBPACK_IMPORTED_MODULE_5__}" width="50%" />
            <p>
              SnuAcademia aims to assist students throughout their academic
              journey with study materials, notes, PYQs, and assignments. Our
              website also addresses common questions about ERP, Blackboard, and
              other general queries for freshers.
            </p>
          </div>
        </label>
        <label for="s2" id="slide2"
          ><h2>Our Journey</h2>
          <div class="sliderContent">
            <img src="${_src_reasources_journey_svg__WEBPACK_IMPORTED_MODULE_6__}" width="50%" />
            <p>
              Our journey began on a random afternoon in our hostel room, where
              we started working on this project with the support of our peers.
            </p>
          </div>
        </label>
        <label for="s3" id="slide3"
          ><h2>Open Source Contribution</h2>
          <div class="sliderContent">
            <img src="${_src_reasources_opensource_svg__WEBPACK_IMPORTED_MODULE_7__}" width="40%" />
            <p>
              Our website is open-source, allowing students to access and
              contribute to the source code through our GitHub repository. We
              welcome your participation and collaboration in making our
              platform even better.
            </p>
          </div>
        </label>
      </section>`;

  const img = document.getElementById("image");
  if (isDarkMode) {
    if (img) {
      img.src = _src_reasources_darkmode_svg__WEBPACK_IMPORTED_MODULE_3__;
    }
  } else {
    if (img) {
      img.src = _src_reasources_lightmode_svg__WEBPACK_IMPORTED_MODULE_4__;
    }
  }
};

document.getElementById("home").addEventListener("click", homegen);
document.getElementById("homef").addEventListener("click", homegen);
document.querySelector(".foot-logo").addEventListener("click", homegen);
document.querySelector(".logo").addEventListener("click", homegen);
//generate Study Material Tab
let studyGen = () => {
  hoe.style.borderBottom = "none";
  stud.style.borderBottom = "2px solid var(--font-color)";
  road.style.borderBottom = "none";
  erp.style.borderBottom = "none";
  generate.innerHTML = `<div class="study">
    <div class="tagline">
        <span>Where Textbooks</span>
        <span>And Dreams Collide</span>
        <span class="sub-tag">Explore, Discover, and Shape Your Academic Journey with Limitless Possibilities</span>
    </div>
    <div class="search-bar">
        <span><i class="bi bi-search" style="font-size: max(20px,1.5vw);" ></i></span>
        <input type="text" id="course-select" placeholder="Search..." data-search>
    </div>
    <div class="courses">
        
    </div>
</div>`;

  const generateCourses = (array, linkArray) => {
    let courses = document.querySelector(".courses");
    let searchBar = document.getElementById("course-select");

    searchBar.addEventListener("input", () => {
      //input being typed inside the search bar
      const searchText = searchBar.value.toLowerCase();

      // Clear existing courses
      courses.innerHTML = "";

      for (let index = 0; index < array.length; index++) {
        const courseName = array[index].toLowerCase();
        const link = linkArray[index];

        if (courseName.includes(searchText)) {
          let courseDiv = document.createElement("div");
          courseDiv.classList.add("courseBox");
          courses.appendChild(courseDiv);
          courseDiv.innerHTML = `<span id="course-${index}">${array[index]}</span>
          <span class="glink"  id="link-${index}"><a href="${link}" target="_blank">Content</a></span>`;

          courseDiv.addEventListener("mouseover", () => {
            document.getElementById(`course-${index}`).style.display = "none";
            document.getElementById(`link-${index}`).style.display = "flex";
          });
          courseDiv.addEventListener("mouseout", () => {
            document.getElementById(`course-${index}`).style.display = "flex";
            document.getElementById(`link-${index}`).style.display = "none";
          });
        }
      }
    });
    //To generate courses when you load up page
    searchBar.dispatchEvent(new Event("input"));
  };

  //example arrays
  let courseArr = ["DES101", "FAC202", "MEC104", "MKT202", "OHM401", "STM204"];
  let linkArr = [
    "https://drive.google.com/drive/folders/1pfWH0J2ek7yxTMbmoCv-4YQPB5XKOLHr?usp=sharing",
    "https://drive.google.com/drive/folders/1q7UsKWFg5odT6rX57T4LArhSY5eLa2RJ?usp=sharing",
    "https://drive.google.com/drive/folders/1NlrHKCP52b53OQiYcdBgO7NvL9eQ81zv?usp=sharing",
    "https://drive.google.com/drive/folders/1tzIs2ux6lR1u8eT9fTAD-5JXBkhAGqrb?usp=drive_link",
    "https://drive.google.com/drive/folders/1_-mkdQHCqpPceiQeZw7j91r0hVcUhmhJ?usp=sharing",
    "https://drive.google.com/drive/folders/1Z9BqJC1vCnMxFSRT8YMafB1sdlLAv8mu?usp=sharing",
  ];
  generateCourses(courseArr, linkArr);
};
document.getElementById("study").addEventListener("click", studyGen);
document.getElementById("studyf").addEventListener("click", studyGen);

//Generate Roadmap
const roadGen = () => {
  hoe.style.borderBottom = "none";
  stud.style.borderBottom = "none";
  road.style.borderBottom = "2px solid var(--font-color)";
  erp.style.borderBottom = "none";
  generate.innerHTML = `<div class="roadMaps">
  <div class="tagline">
      <span>Choose</span>
      <span>Your Academic Trail</span>
      <span class="sub-tag">Chart Your Academic Journey: Explore Major and Minor Paths</span>
  </div>
  <div class="search-bar">
      <span><i class="bi bi-search" style="font-size: max(20px,1.5vw);" ></i></span>
      <input type="text" id="course-select" placeholder="Search..." data-search>
  </div>
  <div class="roads">
      
  </div>`;
  let roadArr = ["CSE", "ECE", "EEE", "MECH", "BMS", "ECO"];
  generateRoad(roadArr);
};

const generateRoad = (array) => {
  let roads = document.querySelector(".roads");
  let searchBar = document.getElementById("course-select");

  searchBar.addEventListener("input", () => {
    //input being typed inside the search bar
    const searchText = searchBar.value.toLowerCase();

    // Clear existing courses
    roads.innerHTML = "";

    for (let index = 0; index < array.length; index++) {
      const branchName = array[index].toLowerCase();
      //const link = linkArray[index];
      if (branchName.includes(searchText)) {
        let mapDiv = document.createElement("div");
        mapDiv.classList.add("roadBox");
        roads.appendChild(mapDiv);
        mapDiv.innerHTML = `<span id="course-${index}">${array[index]}</span>
          <div style="display:flex; justify-content: space-around; width:80%" >
          <span class="glink-r"  id="majorLink-${index}"><a class='ar' href="https://www.google.com/" target="_blank">Major</a></span>
          <span class="glink-r" id="minorLink-${index}"><a class='ar'href="https://www.google.com/" target="_blank">Minor</a></span>
          </div>`;

        mapDiv.addEventListener("mouseover", () => {
          document.getElementById(`course-${index}`).style.display = "none";
          document.getElementById(`majorLink-${index}`).style.display = "flex";
          document.getElementById(`minorLink-${index}`).style.display = "flex";
        });
        mapDiv.addEventListener("mouseout", () => {
          document.getElementById(`course-${index}`).style.display = "flex";
          document.getElementById(`majorLink-${index}`).style.display = "none";
          document.getElementById(`minorLink-${index}`).style.display = "none";
        });
      }
    }
  });
  //To generate courses when you load up page
  searchBar.dispatchEvent(new Event("input"));
};

document.getElementById("road").addEventListener("click", roadGen);
document.getElementById("roadf").addEventListener("click", roadGen);

//Generate Erp Management Tab
const erpGen = () => {
  hoe.style.borderBottom = "none";
  stud.style.borderBottom = "none";
  road.style.borderBottom = "none";
  erp.style.borderBottom = "2px solid var(--font-color)";
  generate.innerHTML = `<div class="erpManagement">
  <div class="tagline">
      <span>Simplify</span>
      <span> Your Snu Experience</span>
      <span class="sub-tag" >Commonly asked FAQs </span>
  </div>
  <div class="linkSection">
      <div id="erpLink">Erp</div>
      <div id="fastLink">Fastrack</div>
      <div id="hosteLink">Hostel Management</div>
      <div id="bbLink">Blackboard</div>
  </div>
  <div class="faqs">
      <div class>
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
              <span>What is Erp?</span>
              <i class="bi bi-caret-down-fill"></i>
          </div>
          <div class="sol">random image/video</div>                    
      </div>
  </div>
</div>`;
  let linkSection = document.querySelector(".linkSection");
  let links = linkSection.getElementsByTagName("div");
  let faqs = document.querySelector(".faqs");

  function faqFill(array) {
    faqs.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      let faqDiv = document.createElement("div");
      faqDiv.innerHTML = `<div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
      <span>${element.question}</span>
      <span><i id='drop-${i}' class="bi bi-caret-down-fill"></i></span>
      </div>
      <div class="sol" id='sol-${i}'>${element.answer}</div>`;
      faqs.appendChild(faqDiv);
      faqDiv.addEventListener("click", () => {
        const sol = document.getElementById(`sol-${i}`);
        const arrow = document.getElementById(`drop-${i}`);
        if (sol.style.display == "flex") {
          sol.style.display = "none";
          arrow.classList = "bi-caret-down-fill";
        } else {
          sol.style.display = "flex";
          arrow.classList = "bi-caret-up-fill";
        }
      });
    }
  }
  faqs.innerHTML = "";
  //Example arrays
  let erpFaqs = [
    {
      question: "What is ERP?",
      answer:
        "The Shiv Nadar University ERP portal is a web-based application that provides students, faculty, and staff with access to a variety of university services. The portal includes features such as student self-service, faculty self-service, staff self-service, and parent-student portal.",
    },
    {
      question: "How to log in to the ERP?",
      answer:
        "To log in to your ERP, you must enter your SNU net ID (e.g.- xy123) and password.",
    },
    {
      question: "How to add courses to planner?",
      answer:
        "Upon logging into the ERP, navigate to the 'Academic Planning' section located in the left-hand menu bar, or directly access the 'Plan' option at the top of the page alongside other options like search and enroll. Proceed to click on 'Browse Catalog' and use the text box to input the first letter of the subject you desire to select a course from. All available subject options will be displayed, where you can then click the dropdown button to choose your desired course and click on 'Add Planner' to include it in your planner.",
    },
    {
      question: "Where to see your timetable from?",
      answer:
        "In the ERP system, locate the 'Enrollment' option on the left-hand side of the page, situated under the menu box. Click on the 'My Weekly Schedule' option to access your timetable for the current week.",
    },
    {
      question: "How to check GPA?",
      answer:
        "In the ERP system, find the 'Enrollment' option on the left-hand side of the page, which is located under the menu box. Click on 'Term Statistics' and choose the semester for which you wish to check your GPA. Then, review your GPA for the selected semester.",
    },
    {
      question:
        "How to check the total credits completed and total credits left?",
      answer:
        'Find the "My Academics" option in the ERP system along with other options like "Enrol," "Plan," etc. near the top of the page. Then select "View My Advisement Report." This report will show the credits you have already earned as well as the credits you still need to finish.',
    },
  ];
  let fastrackFaqs = [
    {
      question: "What is Fastrack?",
      answer:
        'To leave the campus for a day or longer, you must obtain approval from the warden. This approval is referred to as "fastrack."',
    },
    {
      question: "How do I apply for Fastrack?",
      answer:
        'Please access the SNULinks website and find the "login" option. Once logged in, you will see a variety of choices. Click on the "fastrack" option to access the form for requesting permission to leave the campus, whether it is for personal or official reasons.',
    },
    {
      question: "What to do in case Fastrack is rejected?",
      answer:
        "If your fastrack request is rejected for any reason, you have two options: You can review the form to see if there are any mistakes, correct them, and resubmit it for approval. Alternatively, if you need to leave urgently, you can directly approach the reception of your hostel and request an early approval from them.",
    },
  ];
  let hostelFaqs = [
    {
      question: "How to choose roommates?",
      answer: "The option to remove roommates is no longer valid as of 2023",
    },
    {
      question: "How to select your room?",
      answer:
        "Please visit the SNULinks website and locate the 'login' option. After logging in, you will be presented with various choices. Click on the 'Hostel Management System' option, and from there, find the 'Room Selection Request' option. During the room selection days assigned by the management, this selection will redirect you to a page where you can choose your room.",
    },
  ];
  let blackboardFaqs = [
    {
      question: "What is Blackboard?",
      answer:
        "Blackboard is an online learning management system (LMS) used by professors to provide course materials, including notes, assignments, announcements, and other resources to students in a digital format.",
    },
    {
      question: "How to log in blackboard?",
      answer:
        "To access the Blackboard platform at SNU, you have two options. Firstly, you can navigate to SNU links and search for the 'Blackboard' option on the website. Alternatively, you may directly search for 'SNU Blackboard' on the internet. Once you find the Blackboard portal, log in using your SNU email ID and password to gain access to the platform..",
    },
    {
      question: "How to add courses to favorites?",
      answer:
        "After logging in to your Blackboard account, find the 'Courses' option located on the left-hand side of the screen and click on it. This action will display a list of all the courses you are currently enrolled in. To mark a course as a favorite, look for the star button situated on the right-hand side of each course heading. Click on the star button to add the course to your favorites list.",
    },
    {
      question: "How can I submit assignments on Blackboard?",
      answer:
        "Normally, the link for submitting assignments can be found in the 'Activity Section' of the course page, along with the deadline for submission. If you are unable to locate the link there, you can follow these steps: First, click on the 'Courses' option on the left-hand side of the screen. Next, find the specific course for which you want to submit the assignment. Once you have selected the course, navigate to the 'Content Section' of the course page and look for the link to the assignment submission.",
    },
    {
      question: "How to access content on blackboard?",
      answer:
        "Usually, the most recent content is visible on the 'Activity Stream.' However, if you want to access all the content available for a particular course, follow these steps: Go to the 'Courses' section and choose the specific course you wish to view the content of. Look for the 'Content' section, typically located on the left-hand side of the screen. By accessing this section, you will be able to see all the content related to the selected course.",
    },
  ];
  document.getElementById("erpLink").addEventListener("click", function () {
    faqFill(erpFaqs);
  });
  document.getElementById("fastLink").addEventListener("click", function () {
    faqFill(fastrackFaqs);
  });
  document.getElementById("hosteLink").addEventListener("click", function () {
    faqFill(hostelFaqs);
  });
  document.getElementById("bbLink").addEventListener("click", function () {
    faqFill(blackboardFaqs);
  });
};

document.getElementById("erp").addEventListener("click", () => {
  erpGen();
});
document.getElementById("erpf").addEventListener("click", () => {
  erpGen();
});

const aboutGen = () => {
  generate.innerHTML = `<div class="about">
  <div class="aboutContent">
    <div class="firstContent">
      <div class="textContent">
        <div class="question">What is <span>SnuAcademia</span>?</div>
        <div class="answer">
          Unlock the doors to knowledge and embark on a journey of
          intellectual growth with SnuAcademia, your premier online
          education platform. Whether you're a curious learner, a
          dedicated student, or a lifelong enthusiast.
        </div>
      </div>
      <img src="${_src_reasources_computer_svg__WEBPACK_IMPORTED_MODULE_8__}" alt="" width="25%" />
    </div>
    <div class="secondContent">
      <div class="textContent">
        <div class="question">
          How<span> SnuAcademia </span>can help you?
        </div>
        <div class="answer">
          An education website can significantly enhance your learning
          journey by providing a diverse range of resources tailored to
          various subjects and learning styles, offering flexible
          scheduling and self-paced progress tracking, connecting you with
          expert instructors.
        </div>
      </div>
      <img src=${_src_reasources_helpLight_svg__WEBPACK_IMPORTED_MODULE_9__} alt="" width="25%" />
    </div>
  </div>
  <div class="team">
    <div class="meetTeam">MEET THE TEAM</div>
    <div class="teamBay">
      <div>Core</div>
      <div>Dev Team</div>
      <div>Content Team</div>
    </div>
    <div class="teamPeople">
      <div data-active="active">
        <div class="person">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../src/reasources/vamsi.jpg"
                  alt="Avatar"
                  height="100%"
                />
              </div>
              <div class="flip-card-back">
                <span>"It is what it is"</span>
                <div class="socials">
                  <a href="https://www.instagram.com/" target="_blank"
                    ><i class="bi bi-instagram"></i
                  ></a>
                  <a href="https://in.linkedin.com/" target="_blank"
                    ><i class="bi bi-linkedin"></i
                  ></a>
                  <a
                    href="https://github.com/VamsiKaparthi/Snuacademia/tree/main"
                    target="_blank"
                    ><i class="bi bi-github"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <span>Vamsi Kaparthi</span>
          <span>Cofounder</span>
        </div>
        <div class="person">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../src/reasources/vamsi.jpg"
                  alt="Avatar"
                  height="100%"
                />
              </div>
              <div class="flip-card-back">
                <span>"It is what it is"</span>
                <div class="socials">
                  <a href="https://www.instagram.com/" target="_blank"
                    ><i class="bi bi-instagram"></i
                  ></a>
                  <a href="https://in.linkedin.com/" target="_blank"
                    ><i class="bi bi-linkedin"></i
                  ></a>
                  <a
                    href="https://github.com/VamsiKaparthi/Snuacademia/tree/main"
                    target="_blank"
                    ><i class="bi bi-github"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <span>Vamsi Kaparthi</span>
          <span>Cofounder</span>
        </div>
      </div>
      <div data-active="inactive"></div>
      <div data-active="inactive"></div>
    </div>
  </div>
</div>`;
  let teamBay = document.querySelector(".teamBay");
};

// let team = {
//   [{
//     firstName:"Vamsi", lastName:"Kaparthi", designation: "Cofounder", insta: "https://www.instagram.com/__vamsi__17/", linkedin: "https://www.linkedin.com/in/vamsi-kaparthi-371730222", git:"https://github.com/VamsiKaparthi", img:
//   },
//   {

//   }
// ]
// }

document.addEventListener("click", function (event) {
  const aboutButton = event.target.closest(".sloganButton");
  if (aboutButton) {
    aboutGen(); // Generate "About Us" content
  }
});
const radioButtons = document.querySelectorAll("input[type=radio]");

const slideShow = () => {
  for (let i = 0; i < radioButtons.length; i++) {
    setInterval(() => {}, 3000);
  }
};
slideShow();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGFBQWE7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLDZDQUE2QyxlQUFlO0FBQzVELDhCQUE4QjtBQUM5QiwrQkFBK0I7QUFDL0IsQ0FBQyxPQUFPLHVGQUF1RixNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxzQkFBc0IsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFdBQVcsTUFBTSxhQUFhLGFBQWEsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLFNBQVMsWUFBWSxhQUFhLE9BQU8sWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLHFCQUFxQiwwQkFBMEIsUUFBUSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFB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O0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseURBQVEsQ0FBQztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBEQUFPLEVBQUU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0Msd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9zcmMvU3R5bGUuY3NzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vc3JjL1N0eWxlLmNzcz9iNmE4Iiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypVc2luZyBDc3MgdmFyaWFibGUqL1xyXG46cm9vdCB7XHJcbiAgLS1iZy1jb2xvcjogd2hpdGU7XHJcbiAgLS1mb250LWNvbG9yOiBibGFjaztcclxuICAtLXNlY29uZGFyeTogIzAwYjBmZjtcclxufVxyXG5cclxuLmRhcmsge1xyXG4gIC0tYmctY29sb3I6IGJsYWNrO1xyXG4gIC0tZm9udC1jb2xvcjogd2hpdGU7XHJcbiAgLS1zZWNvbmRhcnk6ICM1MzZkZmU7XHJcbiAgLS1jb2xvcjE6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAtLWNvbG9yMzogcmdiKDIzLCAyMywgMjQpIDtcclxuICAtLWNvbG9yMjogcmdiKDIzLCAyMywgMjQpIDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBmb250LWZhbWlseTogXCJETSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIFxyXG4gIC0tY29sb3IxOiBibGFjayA7XHJcbiAgLS1jb2xvcjI6IHJnYigyMywgMjMsIDI0KSA7XHJcbiAgLS1jb2xvcjM6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG5cclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIC8qIHBhZGRpbmc6IDEycHggMjBweDsqL1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5vcHRpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBtYXgoNTAwcHgsIDUwJSk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogbWF4KDE1cHgsIDF2dyk7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcblxyXG4ub3B0aW9ucyA+IGRpdjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4uaG9tZSB7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG59XHJcblxyXG4uc2xvZ2FuIHtcclxuICBmb250LXNpemU6IG1heCgzLjV2dywgNDBweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5zbG9nYW4tcGFyYSB7XHJcbiAgZm9udC1zaXplOiBtYXgoMXZ3LCAyMHB4KTtcclxuICB3aWR0aDogbWF4KDgwJSwgMjgwcHgpO1xyXG59XHJcblxyXG5pIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBzdHVkeS1tYXRlcmlhbCBwYWdlICovXHJcbi5zdHVkeSxcclxuLnJvYWRNYXBzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udGFnbGluZSB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIGZvbnQtc2l6ZTogbWluKDh2dywgNzBweCk7XHJcbiAgZm9udC13ZWlnaHQ6IDk1MDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc2VhcmNoLWJhciB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcclxuICB3aWR0aDogbWF4KDQwdncsIDMwMHB4KTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGdhcDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuI2NvdXJzZS1zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICgtLWZvbnQtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmNvdXJzZXMsXHJcbi5yb2FkcyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuXHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMzBweDtcclxufVxyXG5cclxuLmNvdXJzZUJveCB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG5cclxuLmdsaW5rIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbmE6dmlzaXRlZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcbmE6YWN0aXZlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcbi5nZW5lcmF0ZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLyplcnAgbWFuYWdlbWVudCovXHJcbi5saW5rU2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uZXJwTWFuYWdlbWVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxpbmtTZWN0aW9uID4gZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDE1cHgpO1xyXG4gIGhlaWdodDogbWF4KDM1cHgsIDV2aCk7XHJcbiAgd2lkdGg6IG1heCgzNTBweCwgMTV2dyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubGlua1NlY3Rpb24gPiBkaXY6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogMTAwbXM7XHJcbn1cclxuLnN1Yi10YWcge1xyXG4gIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZhcXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuLmZhcXMgPiBkaXYge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4uc29sIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5yb2FkQm94IHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuLmdsaW5rLXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB3aWR0aDogMzMlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5nbGluay1yOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG59XHJcbmEuYXIge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbi8qIGZvb3RlciAqL1xyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDIzLCAyNCk7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnJlYXNvdXJjZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGdhcDogMTBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ucmVhc291cmNlcyA+IGRpdjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb250YWN0ID4gYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4uY29udGFjdCA+IGE6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4uZm9vdC1sb2dvIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG4uZm9vdC1sb2dvOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxufVxyXG4uZ2VuZXJhdGUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKkFib3V0IHVzKi9cclxuLnNsb2dhbkJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNHZ3O1xyXG4gIHdpZHRoOiBtYXgoMjAwcHgsIDIwdncpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMjBweCk7XHJcbn1cclxuLnNsb2dhbkJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFib3V0IHtcclxuICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgcGFkZGluZzogNXZ3O1xyXG59XHJcbi5hYm91dENvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTB2dztcclxufVxyXG4uZmlyc3RDb250ZW50LFxyXG4uc2Vjb25kQ29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDE1dnc7XHJcbiAgcGFkZGluZy1ib3R0b206IDh2dztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuLnNlY29uZENvbnRlbnQge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi50ZXh0Q29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5xdWVzdGlvbiB7XHJcbiAgZm9udC1zaXplOiAzdnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ucXVlc3Rpb24gPiBzcGFuIHtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxufVxyXG4uYW5zd2VyIHtcclxuICBmb250LXNpemU6IG1pbigydncsIDMwcHgpO1xyXG59XHJcbi50ZWFtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IG1pbig2dncsIDgwcHgpO1xyXG59XHJcbi5tZWV0VGVhbSB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGZvbnQtc2l6ZTogNS41dnc7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcclxufVxyXG4udGVhbUJheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4udGVhbUJheSA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMTNweCk7XHJcbiAgd2lkdGg6IDI1dnc7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnRlYW1CYXkgPiBkaXY6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50ZWFtUGVvcGxlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcclxufVxyXG4udGVhbVBlb3BsZSA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEwJTtcclxufVxyXG4vKmZsaXBjYXJkKi9cclxuLnBlcnNvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZsaXAtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IG1pbigyNXZ3LCAzMDBweCk7XHJcbiAgaGVpZ2h0OiBtaW4oMjV2dywgMzAwcHgpO1xyXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC44dnc7XHJcbn1cclxuXHJcbi8qIFRoaXMgY29udGFpbmVyIGlzIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xyXG4uZmxpcC1jYXJkLWlubmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4vKiBEbyBhbiBob3Jpem9udGFsIGZsaXAgd2hlbiB5b3UgbW92ZSB0aGUgbW91c2Ugb3ZlciB0aGUgZmxpcCBib3ggY29udGFpbmVyICovXHJcbi5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXHJcbi5mbGlwLWNhcmQtZnJvbnQsXHJcbi5mbGlwLWNhcmQtYmFjayB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBTYWZhcmkgKi9cclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmZsaXAtY2FyZC1mcm9udCA+IGltZ3tcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgZnJvbnQgc2lkZSAoZmFsbGJhY2sgaWYgaW1hZ2UgaXMgbWlzc2luZykgKi9cclxuLmZsaXAtY2FyZC1mcm9udCB7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgYmFjayBzaWRlICovXHJcbi5mbGlwLWNhcmQtYmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDEzcHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcbi5mbGlwLWNhcmQtYmFjayA+IHNwYW57XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41dnc7XHJcbn1cclxuLnNvY2lhbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiBtYXgoMXZ3LCAxMCUpO1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuLnNvY2lhbHMgPiBhID4gaSB7XHJcbiAgZm9udC1zaXplOiBtYXgoMnZ3LCAxNXB4KTtcclxufVxyXG4ucGVyc29uID4gc3BhbiB7XHJcbiAgZm9udC1zaXplOiBtYXgoMS4zdncsIDEzcHgpO1xyXG59XHJcbi8qc2xpZGVyKi9cclxuXHJcbiNzbGlkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1pbi1oZWlnaHQ6IDMwdnc7XHJcbiAgbWFyZ2luOiA4MHB4IGF1dG87XHJcbiAgZm9udC1mYW1pbHk6IFwiRE0gc2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIHBlcnNwZWN0aXZlOiAxNDAwcHg7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTA4JTtcclxuICB3aWR0aDogNHZ3O1xyXG4gIGhlaWdodDogMThweDtcclxuICBtYXJnaW46IDAgMTVweCAwIDA7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyppbnB1dFt0eXBlPXJhZGlvXTpudGgtY2hpbGQoNSkge1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcclxuICBvcGFjaXR5OiAxO1xyXG59Ki9cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIuNXZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxucCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmb250LXNpemU6IG1pbigzMHB4LCAxLjV2dyk7XHJcbn1cclxuXHJcbiNzbGlkZXIgbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2U7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5zbGlkZXJDb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4jc2xpZGUxIHtcclxuICBiYWNrZ3JvdW5kOiAjMDY2ODkyO1xyXG59XHJcbi5kYXJrICNzbGlkZTEge1xyXG4gIGJhY2tncm91bmQ6ICMyMzJlNmY7XHJcbn1cclxuXHJcbiNzbGlkZTIge1xyXG4gIGJhY2tncm91bmQ6ICMwZDk3ZDI7XHJcbn1cclxuLmRhcmsgI3NsaWRlMiB7XHJcbiAgYmFja2dyb3VuZDogIzM4NGFiMjtcclxufVxyXG5cclxuI3NsaWRlMyB7XHJcbiAgYmFja2dyb3VuZDogIzAwYjBmZjtcclxufVxyXG4uZGFyayAjc2xpZGUzIHtcclxuICBiYWNrZ3JvdW5kOiAjNTM2ZGZlO1xyXG59XHJcbi8qXHJcbiNzbGlkZTQge1xyXG4gIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcclxufVxyXG5cclxuI3NsaWRlNSB7XHJcbiAgYmFja2dyb3VuZDogdmlvbGV0O1xyXG59Ki9cclxuXHJcbi8qIFNsaWRlciBGdW5jdGlvbmFsaXR5ICovXHJcblxyXG4vKiBBY3RpdmUgU2xpZGUgKi9cclxuI3MxOmNoZWNrZWQgfiAjc2xpZGUxLFxyXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTIsXHJcbiNzMzpjaGVja2VkIH4gI3NsaWRlMyxcclxuI3M0OmNoZWNrZWQgfiAjc2xpZGU0LFxyXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTUge1xyXG4gIGJveC1zaGFkb3c6IDAgMTNweCAyNnB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAxMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCwgMHB4KTtcclxufVxyXG5cclxuLyogTmV4dCBTbGlkZSAqL1xyXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTIsXHJcbiNzMjpjaGVja2VkIH4gI3NsaWRlMyxcclxuI3MzOmNoZWNrZWQgfiAjc2xpZGU0LFxyXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTUsXHJcbiNzNTpjaGVja2VkIH4gI3NsaWRlMSB7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNSUsIDAsIC0xMDBweCk7XHJcbn1cclxuXHJcbi8qIE5leHQgdG8gTmV4dCBTbGlkZSAqL1xyXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTMsXHJcbiNzMjpjaGVja2VkIH4gI3NsaWRlNCxcclxuI3MzOmNoZWNrZWQgfiAjc2xpZGU1LFxyXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTEsXHJcbiNzNTpjaGVja2VkIH4gI3NsaWRlMiB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwJSwgMCwgLTI1MHB4KTtcclxufVxyXG5cclxuLyogUHJldmlvdXMgdG8gUHJldmlvdXMgU2xpZGUgKi9cclxuI3MxOmNoZWNrZWQgfiAjc2xpZGU0LFxyXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTUsXHJcbiNzMzpjaGVja2VkIH4gI3NsaWRlMSxcclxuI3M0OmNoZWNrZWQgfiAjc2xpZGUyLFxyXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTMge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAlLCAwLCAtMjUwcHgpO1xyXG59XHJcblxyXG4vKiBQcmV2aW91cyBTbGlkZSAqL1xyXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTUsXHJcbiNzMjpjaGVja2VkIH4gI3NsaWRlMSxcclxuI3MzOmNoZWNrZWQgfiAjc2xpZGUyLFxyXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTMsXHJcbiNzNTpjaGVja2VkIH4gI3NsaWRlNCB7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAtMTAwcHgpO1xyXG59XHJcblxyXG4vKlJlc3BvbnNpdmUqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC8qaG9tZXBhZ2UgdGFnbGluZXMqL1xyXG4gIGJvZHkge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgI2ltYWdlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5ob21lIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbiAgLnRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc2xvZ2FuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNsb2dhbi1wYXJhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLypzbGlkZXIqL1xyXG4gICNzbGlkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbiAgI3NsaWRlciBsYWJlbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5zbGlkZXJDb250ZW50IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDVweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogbWF4KDIuNnZ3LCAxNHB4KTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZm9udC1zaXplOiBtYXgoMi4ydncsIDExcHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTA0JTtcclxuICB9XHJcbn1cclxuXHJcbi8qaGFtYnVyZ2VyIG1lbnUqL1xyXG4ub3B0aW9ucyAge2Rpc3BsYXk6IGZsZXg7fVxyXG4vKiAub3B0aW9ucyBkaXYge3BhZGRpbmctbGVmdDogMzBweDt9XHJcbi8qLm9wdGlvbnMgZGl2ICNob21lICNlcnAgI3JvYWQgI3N0dWR5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ub3B0aW9ucyBkaXYgI2hvbWUgXHJcbiAjZXJwICNyb2FkICNzdHVkeTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcclxuICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5vcHRpb25zIGRpdiAjaG9tZSAjZXJwICNyb2FkICAjc3R1ZHk6aG92ZXI6YWZ0ZXIge3dpZHRoOiAxMDAlO30qL1xyXG4ub3Blbi1tZW51ICwgLmNsb3NlLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yMSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm9wZW4tbWVudSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3NiU7XHJcbiAgICBsZWZ0OiA1MiU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuLmNsb3NlLW1lbnUge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgcmlnaHQ6IDM1cHg7XHJcbn1cclxuI2NoZWNrIHtkaXNwbGF5OiBub25lO31cclxuQG1lZGlhKG1heC13aWR0aDogNjEwcHgpe1xyXG4gIC5vcHRpb25zIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAub3B0aW9ucyBkaXYge21hcmdpbi10b3A6IDQwcHg7fVxyXG4gICAvKiAub3B0aW9ucyBkaXYgI2hvbWUgI2VycCAjcm9hZCAgI3N0dWR5IHtwYWRkaW5nOiAxMHB4O30qL1xyXG4gICAgLm9wZW4tbWVudSAsIC5jbG9zZS1tZW51IHtkaXNwbGF5OiBibG9jazt9XHJcbiAgICAjY2hlY2s6Y2hlY2tlZCB+IC5vcHRpb25zIHtyaWdodDogMDt9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9TdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCO0FBQ3JCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7O0VBRWpCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCOztFQUVoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxl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UztJQUNULDJCQUEyQjtBQUMvQjtBQUNBO0VBQ0Usb0JBQW9CO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7QUFDQSxRQUFRLGFBQWEsQ0FBQztBQUN0QjtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtNQUNmLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLFdBQVc7TUFDWCxZQUFZO01BQ1osZUFBZTtNQUNmLE1BQU07TUFDTixZQUFZO01BQ1osWUFBWTtNQUNaLCtCQUErQjtNQUMvQixnQ0FBZ0M7RUFDcEM7RUFDQSxjQUFjLGdCQUFnQixDQUFDO0dBQzlCLDBEQUEwRDtJQUN6RCwwQkFBMEIsY0FBYyxDQUFDO0lBQ3pDLDJCQUEyQixRQUFRLENBQUM7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypVc2luZyBDc3MgdmFyaWFibGUqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tYmctY29sb3I6IHdoaXRlO1xcclxcbiAgLS1mb250LWNvbG9yOiBibGFjaztcXHJcXG4gIC0tc2Vjb25kYXJ5OiAjMDBiMGZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayB7XFxyXFxuICAtLWJnLWNvbG9yOiBibGFjaztcXHJcXG4gIC0tZm9udC1jb2xvcjogd2hpdGU7XFxyXFxuICAtLXNlY29uZGFyeTogIzUzNmRmZTtcXHJcXG4gIC0tY29sb3IxOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxyXFxuICAtLWNvbG9yMzogcmdiKDIzLCAyMywgMjQpIDtcXHJcXG4gIC0tY29sb3IyOiByZ2IoMjMsIDIzLCAyNCkgO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIFxcclxcbiAgLS1jb2xvcjE6IGJsYWNrIDtcXHJcXG4gIC0tY29sb3IyOiByZ2IoMjMsIDIzLCAyNCkgO1xcclxcbiAgLS1jb2xvcjM6IHJnYigyNDAsIDI0MCwgMjQwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxyXFxuXFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAvKiBwYWRkaW5nOiAxMnB4IDIwcHg7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IG1heCg1MDBweCwgNTAlKTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgZm9udC1zaXplOiBtYXgoMTVweCwgMXZ3KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMgPiBkaXY6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xvZ2FuIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDMuNXZ3LCA0MHB4KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsb2dhbi1wYXJhIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDF2dywgMjBweCk7XFxyXFxuICB3aWR0aDogbWF4KDgwJSwgMjgwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG5pIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzdHVkeS1tYXRlcmlhbCBwYWdlICovXFxyXFxuLnN0dWR5LFxcclxcbi5yb2FkTWFwcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi50YWdsaW5lIHtcXHJcXG4gIG1hcmdpbi10b3A6IDV2aDtcXHJcXG4gIGZvbnQtc2l6ZTogbWluKDh2dywgNzBweCk7XFxyXFxuICBmb250LXdlaWdodDogOTUwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc2VhcmNoLWJhciB7XFxyXFxuICBtYXJnaW4tdG9wOiA1dmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIHdpZHRoOiBtYXgoNDB2dywgMzAwcHgpO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4jY291cnNlLXNlbGVjdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY29sb3I6ICgtLWZvbnQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmV5O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5jb3Vyc2VzLFxcclxcbi5yb2FkcyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcblxcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb3Vyc2VCb3gge1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdsaW5rIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcbmE6dmlzaXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcbmE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcbi5nZW5lcmF0ZSB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuLyplcnAgbWFuYWdlbWVudCovXFxyXFxuLmxpbmtTZWN0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDV2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG4uZXJwTWFuYWdlbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5saW5rU2VjdGlvbiA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMTVweCk7XFxyXFxuICBoZWlnaHQ6IG1heCgzNXB4LCA1dmgpO1xcclxcbiAgd2lkdGg6IG1heCgzNTBweCwgMTV2dyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5saW5rU2VjdGlvbiA+IGRpdjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiAxMDBtcztcXHJcXG59XFxyXFxuLnN1Yi10YWcge1xcclxcbiAgZm9udC1zaXplOiAwLjVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICBtYXJnaW4tdG9wOiAydmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZmFxcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi10b3A6IDd2aDtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5mYXFzID4gZGl2IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxufVxcclxcbi5zb2wge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnJvYWRCb3gge1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcbi5nbGluay1yIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIHdpZHRoOiAzMyU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5nbGluay1yOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuYS5hciB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuLyogZm9vdGVyICovXFxyXFxuLmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDIzLCAyNCk7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVhc291cmNlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG4ucmVhc291cmNlcyA+IGRpdjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRhY3QgPiBhIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuLmNvbnRhY3QgPiBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdC1sb2dvIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuLmZvb3QtbG9nbzpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuLmdlbmVyYXRlIHtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLypBYm91dCB1cyovXFxyXFxuLnNsb2dhbkJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA0dnc7XFxyXFxuICB3aWR0aDogbWF4KDIwMHB4LCAyMHZ3KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMjBweCk7XFxyXFxufVxcclxcbi5zbG9nYW5CdXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmFib3V0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDF2aDtcXHJcXG4gIHBhZGRpbmc6IDV2dztcXHJcXG59XFxyXFxuLmFib3V0Q29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwdnc7XFxyXFxufVxcclxcbi5maXJzdENvbnRlbnQsXFxyXFxuLnNlY29uZENvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTV2dztcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA4dnc7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcbi5zZWNvbmRDb250ZW50IHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcbi50ZXh0Q29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnF1ZXN0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3Z3O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuLnF1ZXN0aW9uID4gc3BhbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuLmFuc3dlciB7XFxyXFxuICBmb250LXNpemU6IG1pbigydncsIDMwcHgpO1xcclxcbn1cXHJcXG4udGVhbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IG1pbig2dncsIDgwcHgpO1xcclxcbn1cXHJcXG4ubWVldFRlYW0ge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiA1LjV2dztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuLnRlYW1CYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi50ZWFtQmF5ID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMTNweCk7XFxyXFxuICB3aWR0aDogMjV2dztcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4udGVhbUJheSA+IGRpdjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4udGVhbVBlb3BsZSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxyXFxufVxcclxcbi50ZWFtUGVvcGxlID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwJTtcXHJcXG59XFxyXFxuLypmbGlwY2FyZCovXFxyXFxuLnBlcnNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mbGlwLWNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB3aWR0aDogbWluKDI1dncsIDMwMHB4KTtcXHJcXG4gIGhlaWdodDogbWluKDI1dncsIDMwMHB4KTtcXHJcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjh2dztcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhpcyBjb250YWluZXIgaXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXFxyXFxuLmZsaXAtY2FyZC1pbm5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xcclxcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xcclxcbi5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cXHJcXG4uZmxpcC1jYXJkLWZyb250LFxcclxcbi5mbGlwLWNhcmQtYmFjayB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBTYWZhcmkgKi9cXHJcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmZsaXAtY2FyZC1mcm9udCA+IGltZ3tcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlIHRoZSBmcm9udCBzaWRlIChmYWxsYmFjayBpZiBpbWFnZSBpcyBtaXNzaW5nKSAqL1xcclxcbi5mbGlwLWNhcmQtZnJvbnQge1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgYmFjayBzaWRlICovXFxyXFxuLmZsaXAtY2FyZC1iYWNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMTNweCk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXHJcXG59XFxyXFxuLmZsaXAtY2FyZC1iYWNrID4gc3BhbntcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIuNXZ3O1xcclxcbn1cXHJcXG4uc29jaWFscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IG1heCgxdncsIDEwJSk7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG4uc29jaWFscyA+IGEgPiBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDJ2dywgMTVweCk7XFxyXFxufVxcclxcbi5wZXJzb24gPiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuM3Z3LCAxM3B4KTtcXHJcXG59XFxyXFxuLypzbGlkZXIqL1xcclxcblxcclxcbiNzbGlkZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwdnc7XFxyXFxuICBtYXJnaW46IDgwcHggYXV0bztcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gc2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBwZXJzcGVjdGl2ZTogMTQwMHB4O1xcclxcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMDglO1xcclxcbiAgd2lkdGg6IDR2dztcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyppbnB1dFt0eXBlPXJhZGlvXTpudGgtY2hpbGQoNSkge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59Ki9cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDIuNXZ3O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgMS41dncpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2xpZGVyIGxhYmVsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgZWFzZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG4uc2xpZGVyQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuI3NsaWRlMSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDY2ODkyO1xcclxcbn1cXHJcXG4uZGFyayAjc2xpZGUxIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMzJlNmY7XFxyXFxufVxcclxcblxcclxcbiNzbGlkZTIge1xcclxcbiAgYmFja2dyb3VuZDogIzBkOTdkMjtcXHJcXG59XFxyXFxuLmRhcmsgI3NsaWRlMiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMzg0YWIyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2xpZGUzIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMGIwZmY7XFxyXFxufVxcclxcbi5kYXJrICNzbGlkZTMge1xcclxcbiAgYmFja2dyb3VuZDogIzUzNmRmZTtcXHJcXG59XFxyXFxuLypcXHJcXG4jc2xpZGU0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NsaWRlNSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2aW9sZXQ7XFxyXFxufSovXFxyXFxuXFxyXFxuLyogU2xpZGVyIEZ1bmN0aW9uYWxpdHkgKi9cXHJcXG5cXHJcXG4vKiBBY3RpdmUgU2xpZGUgKi9cXHJcXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTEsXFxyXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUyLFxcclxcbiNzMzpjaGVja2VkIH4gI3NsaWRlMyxcXHJcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTQsXFxyXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGU1IHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTNweCAyNnB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAxMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOZXh0IFNsaWRlICovXFxyXFxuI3MxOmNoZWNrZWQgfiAjc2xpZGUyLFxcclxcbiNzMjpjaGVja2VkIH4gI3NsaWRlMyxcXHJcXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTQsXFxyXFxuI3M0OmNoZWNrZWQgfiAjc2xpZGU1LFxcclxcbiNzNTpjaGVja2VkIH4gI3NsaWRlMSB7XFxyXFxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTUlLCAwLCAtMTAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOZXh0IHRvIE5leHQgU2xpZGUgKi9cXHJcXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTMsXFxyXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGU0LFxcclxcbiNzMzpjaGVja2VkIH4gI3NsaWRlNSxcXHJcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTEsXFxyXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwJSwgMCwgLTI1MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJldmlvdXMgdG8gUHJldmlvdXMgU2xpZGUgKi9cXHJcXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTQsXFxyXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGU1LFxcclxcbiNzMzpjaGVja2VkIH4gI3NsaWRlMSxcXHJcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTIsXFxyXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUzIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMCUsIDAsIC0yNTBweCk7XFxyXFxufVxcclxcblxcclxcbi8qIFByZXZpb3VzIFNsaWRlICovXFxyXFxuI3MxOmNoZWNrZWQgfiAjc2xpZGU1LFxcclxcbiNzMjpjaGVja2VkIH4gI3NsaWRlMSxcXHJcXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTIsXFxyXFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUzLFxcclxcbiNzNTpjaGVja2VkIH4gI3NsaWRlNCB7XFxyXFxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgLTEwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLypSZXNwb25zaXZlKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgLypob21lcGFnZSB0YWdsaW5lcyovXFxyXFxuICBib2R5IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gICNpbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuaG9tZSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIH1cXHJcXG4gIC50ZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5zbG9nYW4ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuc2xvZ2FuLXBhcmEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAvKnNsaWRlciovXFxyXFxuICAjc2xpZGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNTB2aDtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gIH1cXHJcXG4gICNzbGlkZXIgbGFiZWwge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAuc2xpZGVyQ29udGVudCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWF4KDIuNnZ3LCAxNHB4KTtcXHJcXG4gIH1cXHJcXG4gIHAge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBmb250LXNpemU6IG1heCgyLjJ2dywgMTFweCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwNCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qaGFtYnVyZ2VyIG1lbnUqL1xcclxcbi5vcHRpb25zICB7ZGlzcGxheTogZmxleDt9XFxyXFxuLyogLm9wdGlvbnMgZGl2IHtwYWRkaW5nLWxlZnQ6IDMwcHg7fVxcclxcbi8qLm9wdGlvbnMgZGl2ICNob21lICNlcnAgI3JvYWQgI3N0dWR5IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG4ub3B0aW9ucyBkaXYgI2hvbWUgXFxyXFxuICNlcnAgI3JvYWQgI3N0dWR5OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLm9wdGlvbnMgZGl2ICNob21lICNlcnAgI3JvYWQgICNzdHVkeTpob3ZlcjphZnRlciB7d2lkdGg6IDEwMCU7fSovXFxyXFxuLm9wZW4tbWVudSAsIC5jbG9zZS1tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3IxKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLm9wZW4tbWVudSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNzYlO1xcclxcbiAgICBsZWZ0OiA1MiU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG59XFxyXFxuLmNsb3NlLW1lbnUge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxyXFxuICAgIHRvcDogNDBweDtcXHJcXG4gICAgcmlnaHQ6IDM1cHg7XFxyXFxufVxcclxcbiNjaGVjayB7ZGlzcGxheTogbm9uZTt9XFxyXFxuQG1lZGlhKG1heC13aWR0aDogNjEwcHgpe1xcclxcbiAgLm9wdGlvbnMge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogNTB2aDtcXHJcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIHJpZ2h0OiAtMTAwJTtcXHJcXG4gICAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIC5vcHRpb25zIGRpdiB7bWFyZ2luLXRvcDogNDBweDt9XFxyXFxuICAgLyogLm9wdGlvbnMgZGl2ICNob21lICNlcnAgI3JvYWQgICNzdHVkeSB7cGFkZGluZzogMTBweDt9Ki9cXHJcXG4gICAgLm9wZW4tbWVudSAsIC5jbG9zZS1tZW51IHtkaXNwbGF5OiBibG9jazt9XFxyXFxuICAgICNjaGVjazpjaGVja2VkIH4gLm9wdGlvbnMge3JpZ2h0OiAwO31cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcclxuaW1wb3J0IGxvZ28xIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy8xMC5wbmdcIjtcclxuaW1wb3J0IGxvZ28yIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy85LnBuZ1wiO1xyXG5pbXBvcnQgZHBpYyBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvZGFya21vZGUuc3ZnXCI7XHJcbmltcG9ydCBscGljIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9saWdodG1vZGUuc3ZnXCI7XHJcbmltcG9ydCBzcGljMSBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvZ29hbC5zdmdcIjtcclxuaW1wb3J0IHNwaWMyIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9qb3VybmV5LnN2Z1wiO1xyXG5pbXBvcnQgc3BpYzMgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzL29wZW5zb3VyY2Uuc3ZnXCI7XHJcbmltcG9ydCBjb21wdXRlciBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvY29tcHV0ZXIuc3ZnXCI7XHJcbmltcG9ydCBoZWxwUGljIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9oZWxwTGlnaHQuc3ZnXCI7XHJcblxyXG4vL0ludGlhbCBsb2dvIGdlbmVyYXRpb25cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZ1wiKS5zcmMgPSBsb2dvMTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdC1sb2dvXCIpLnNyYyA9IGxvZ28yO1xyXG4vL2ludGlhbCBob21lcGFnZSBwaWMgZ2VuZXJhdGlvblxyXG5jb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpO1xyXG5pbWcuc3JjID0gbHBpYztcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb2FsXCIpLnNyYyA9IHNwaWMxO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpvdXJuZXlcIikuc3JjID0gc3BpYzI7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3NcIikuc3JjID0gc3BpYzM7XHJcbi8vRGFya01vZGUgTGlnaHRNb2RlIFRvZ2dsZVxyXG5jb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZURhcmtcIik7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW9uc1wiKTtcclxuXHJcbnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImJpLW1vb25cIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZ1wiKTtcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpO1xyXG5cclxuICAvL3NlZSB3aGljaCBtb2RlIGl0IGlzXHJcbiAgbGV0IGlzRGFya01vZGUgPSBib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIik7XHJcblxyXG4gIGlmIChpc0RhcmtNb2RlKSB7XHJcbiAgICBsb2dvLnNyYyA9IGxvZ28yO1xyXG4gICAgaWYgKGltZykge1xyXG4gICAgICBpbWcuc3JjID0gZHBpYztcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbG9nby5zcmMgPSBsb2dvMTtcclxuICAgIGlmIChpbWcpIHtcclxuICAgICAgaW1nLnNyYyA9IGxwaWM7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmxldCBnZW5lcmF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VuZXJhdGVcIik7XHJcbmNvbnN0IGhvZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcclxuY29uc3Qgc3R1ZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3R1ZHlcIik7XHJcbmNvbnN0IHJvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvYWRcIik7XHJcbmNvbnN0IGVycCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJwXCIpO1xyXG5cclxuLy9HZW5lcmF0ZSBob21lUGFnZSBkeW5hbWljYWxseVxyXG5sZXQgaG9tZWdlbiA9ICgpID0+IHtcclxuICBjb25zdCBpc0RhcmtNb2RlID0gYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrXCIpO1xyXG4gIGhvZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKVwiO1xyXG4gIHN0dWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgcm9hZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcclxuICBlcnAuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgZ2VuZXJhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJob21lXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbG9nYW5cIj5cclxuICAgICAgICAgICAgICBTaW1wbGlmeSBhY2FkZW1pY3Mgd2l0aCB1c1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsb2dhbi1wYXJhXCI+XHJcbiAgICAgICAgICAgICAgICBXZWxjb21lIHRvIFNudUFjYWRlbWlhLCB0aGUgdWx0aW1hdGUgc3R1ZGVudCBkZXNpZ25lZCB3ZWJzaXRlIHRoYXQgaGVscHMgaW4gc2ltcGxpZnlpbmcgc3R1ZHkgbGlmZVxyXG4gICAgICAgICAgICAgICAgYXQgU05VXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xvZ2FuQnV0dG9uXCI+QWJvdXQgdXM8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGltZyBpZD1cImltYWdlXCIgc3JjPScke2xwaWN9JyBzdHlsZT1cIndpZHRoOjUwJTttYXJnaW4tcmlnaHQ6IDEwJTtcIj5cclxuPC9kaXY+XHJcbjxzZWN0aW9uIGlkPVwic2xpZGVyXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzbGlkZXJcIiBpZD1cInMxXCIgY2hlY2tlZCAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2xpZGVyXCIgaWQ9XCJzMlwiIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzbGlkZXJcIiBpZD1cInMzXCIgLz5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiczFcIiBpZD1cInNsaWRlMVwiXHJcbiAgICAgICAgICA+PGgyPk91ciBHb2FsPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJDb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzcGljMX1cIiB3aWR0aD1cIjUwJVwiIC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFNudUFjYWRlbWlhIGFpbXMgdG8gYXNzaXN0IHN0dWRlbnRzIHRocm91Z2hvdXQgdGhlaXIgYWNhZGVtaWNcclxuICAgICAgICAgICAgICBqb3VybmV5IHdpdGggc3R1ZHkgbWF0ZXJpYWxzLCBub3RlcywgUFlRcywgYW5kIGFzc2lnbm1lbnRzLiBPdXJcclxuICAgICAgICAgICAgICB3ZWJzaXRlIGFsc28gYWRkcmVzc2VzIGNvbW1vbiBxdWVzdGlvbnMgYWJvdXQgRVJQLCBCbGFja2JvYXJkLCBhbmRcclxuICAgICAgICAgICAgICBvdGhlciBnZW5lcmFsIHF1ZXJpZXMgZm9yIGZyZXNoZXJzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJzMlwiIGlkPVwic2xpZGUyXCJcclxuICAgICAgICAgID48aDI+T3VyIEpvdXJuZXk8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlckNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3NwaWMyfVwiIHdpZHRoPVwiNTAlXCIgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgT3VyIGpvdXJuZXkgYmVnYW4gb24gYSByYW5kb20gYWZ0ZXJub29uIGluIG91ciBob3N0ZWwgcm9vbSwgd2hlcmVcclxuICAgICAgICAgICAgICB3ZSBzdGFydGVkIHdvcmtpbmcgb24gdGhpcyBwcm9qZWN0IHdpdGggdGhlIHN1cHBvcnQgb2Ygb3VyIHBlZXJzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJzM1wiIGlkPVwic2xpZGUzXCJcclxuICAgICAgICAgID48aDI+T3BlbiBTb3VyY2UgQ29udHJpYnV0aW9uPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJDb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzcGljM31cIiB3aWR0aD1cIjQwJVwiIC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIE91ciB3ZWJzaXRlIGlzIG9wZW4tc291cmNlLCBhbGxvd2luZyBzdHVkZW50cyB0byBhY2Nlc3MgYW5kXHJcbiAgICAgICAgICAgICAgY29udHJpYnV0ZSB0byB0aGUgc291cmNlIGNvZGUgdGhyb3VnaCBvdXIgR2l0SHViIHJlcG9zaXRvcnkuIFdlXHJcbiAgICAgICAgICAgICAgd2VsY29tZSB5b3VyIHBhcnRpY2lwYXRpb24gYW5kIGNvbGxhYm9yYXRpb24gaW4gbWFraW5nIG91clxyXG4gICAgICAgICAgICAgIHBsYXRmb3JtIGV2ZW4gYmV0dGVyLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L3NlY3Rpb24+YDtcclxuXHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKTtcclxuICBpZiAoaXNEYXJrTW9kZSkge1xyXG4gICAgaWYgKGltZykge1xyXG4gICAgICBpbWcuc3JjID0gZHBpYztcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGltZykge1xyXG4gICAgICBpbWcuc3JjID0gbHBpYztcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVnZW4pO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVmXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lZ2VuKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290LWxvZ29cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVnZW4pO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVnZW4pO1xyXG4vL2dlbmVyYXRlIFN0dWR5IE1hdGVyaWFsIFRhYlxyXG5sZXQgc3R1ZHlHZW4gPSAoKSA9PiB7XHJcbiAgaG9lLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gIHN0dWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIycHggc29saWQgdmFyKC0tZm9udC1jb2xvcilcIjtcclxuICByb2FkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gIGVycC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcclxuICBnZW5lcmF0ZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInN0dWR5XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGFnbGluZVwiPlxyXG4gICAgICAgIDxzcGFuPldoZXJlIFRleHRib29rczwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5BbmQgRHJlYW1zIENvbGxpZGU8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWItdGFnXCI+RXhwbG9yZSwgRGlzY292ZXIsIGFuZCBTaGFwZSBZb3VyIEFjYWRlbWljIEpvdXJuZXkgd2l0aCBMaW1pdGxlc3MgUG9zc2liaWxpdGllczwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1iYXJcIj5cclxuICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImJpIGJpLXNlYXJjaFwiIHN0eWxlPVwiZm9udC1zaXplOiBtYXgoMjBweCwxLjV2dyk7XCIgPjwvaT48L3NwYW4+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb3Vyc2Utc2VsZWN0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBkYXRhLXNlYXJjaD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvdXJzZXNcIj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuICBjb25zdCBnZW5lcmF0ZUNvdXJzZXMgPSAoYXJyYXksIGxpbmtBcnJheSkgPT4ge1xyXG4gICAgbGV0IGNvdXJzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdXJzZXNcIik7XHJcbiAgICBsZXQgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2Utc2VsZWN0XCIpO1xyXG5cclxuICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAvL2lucHV0IGJlaW5nIHR5cGVkIGluc2lkZSB0aGUgc2VhcmNoIGJhclxyXG4gICAgICBjb25zdCBzZWFyY2hUZXh0ID0gc2VhcmNoQmFyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAvLyBDbGVhciBleGlzdGluZyBjb3Vyc2VzXHJcbiAgICAgIGNvdXJzZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCBjb3Vyc2VOYW1lID0gYXJyYXlbaW5kZXhdLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtBcnJheVtpbmRleF07XHJcblxyXG4gICAgICAgIGlmIChjb3Vyc2VOYW1lLmluY2x1ZGVzKHNlYXJjaFRleHQpKSB7XHJcbiAgICAgICAgICBsZXQgY291cnNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIGNvdXJzZURpdi5jbGFzc0xpc3QuYWRkKFwiY291cnNlQm94XCIpO1xyXG4gICAgICAgICAgY291cnNlcy5hcHBlbmRDaGlsZChjb3Vyc2VEaXYpO1xyXG4gICAgICAgICAgY291cnNlRGl2LmlubmVySFRNTCA9IGA8c3BhbiBpZD1cImNvdXJzZS0ke2luZGV4fVwiPiR7YXJyYXlbaW5kZXhdfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2xpbmtcIiAgaWQ9XCJsaW5rLSR7aW5kZXh9XCI+PGEgaHJlZj1cIiR7bGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Db250ZW50PC9hPjwvc3Bhbj5gO1xyXG5cclxuICAgICAgICAgIGNvdXJzZURpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvdXJzZS0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvdXJzZURpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY291cnNlLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL1RvIGdlbmVyYXRlIGNvdXJzZXMgd2hlbiB5b3UgbG9hZCB1cCBwYWdlXHJcbiAgICBzZWFyY2hCYXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XHJcbiAgfTtcclxuXHJcbiAgLy9leGFtcGxlIGFycmF5c1xyXG4gIGxldCBjb3Vyc2VBcnIgPSBbXCJERVMxMDFcIiwgXCJGQUMyMDJcIiwgXCJNRUMxMDRcIiwgXCJNS1QyMDJcIiwgXCJPSE00MDFcIiwgXCJTVE0yMDRcIl07XHJcbiAgbGV0IGxpbmtBcnIgPSBbXHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzFwZldIMEoyZWs3eXhUTWJtb0N2LTRZUVBCNVhLT0xIcj91c3A9c2hhcmluZ1wiLFxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xcTdVc0tXRmc1b2RUNnJYNTdUNExBcmhTWTVlTGEyUko/dXNwPXNoYXJpbmdcIixcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMU5sckhLQ1A1MmI1M09RaVljZEJnTzdOdkw5ZVE4MXp2P3VzcD1zaGFyaW5nXCIsXHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzF0eklzMnV4NmxSMXU4ZVQ5ZlRBRC01SlhCa2hBR3FyYj91c3A9ZHJpdmVfbGlua1wiLFxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xXy1ta2RRSENxcFBjZWlRZVp3N2o5MXIwaFZjVWhtaEo/dXNwPXNoYXJpbmdcIixcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMVo5QnFKQzF2Q25NeEZTUlQ4WU1hZkIxc2RsTEF2OG11P3VzcD1zaGFyaW5nXCIsXHJcbiAgXTtcclxuICBnZW5lcmF0ZUNvdXJzZXMoY291cnNlQXJyLCBsaW5rQXJyKTtcclxufTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHVkeVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3R1ZHlHZW4pO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0dWR5ZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3R1ZHlHZW4pO1xyXG5cclxuLy9HZW5lcmF0ZSBSb2FkbWFwXHJcbmNvbnN0IHJvYWRHZW4gPSAoKSA9PiB7XHJcbiAgaG9lLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gIHN0dWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgcm9hZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKVwiO1xyXG4gIGVycC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcclxuICBnZW5lcmF0ZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInJvYWRNYXBzXCI+XHJcbiAgPGRpdiBjbGFzcz1cInRhZ2xpbmVcIj5cclxuICAgICAgPHNwYW4+Q2hvb3NlPC9zcGFuPlxyXG4gICAgICA8c3Bhbj5Zb3VyIEFjYWRlbWljIFRyYWlsPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInN1Yi10YWdcIj5DaGFydCBZb3VyIEFjYWRlbWljIEpvdXJuZXk6IEV4cGxvcmUgTWFqb3IgYW5kIE1pbm9yIFBhdGhzPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzZWFyY2gtYmFyXCI+XHJcbiAgICAgIDxzcGFuPjxpIGNsYXNzPVwiYmkgYmktc2VhcmNoXCIgc3R5bGU9XCJmb250LXNpemU6IG1heCgyMHB4LDEuNXZ3KTtcIiA+PC9pPjwvc3Bhbj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb3Vyc2Utc2VsZWN0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBkYXRhLXNlYXJjaD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicm9hZHNcIj5cclxuICAgICAgXHJcbiAgPC9kaXY+YDtcclxuICBsZXQgcm9hZEFyciA9IFtcIkNTRVwiLCBcIkVDRVwiLCBcIkVFRVwiLCBcIk1FQ0hcIiwgXCJCTVNcIiwgXCJFQ09cIl07XHJcbiAgZ2VuZXJhdGVSb2FkKHJvYWRBcnIpO1xyXG59O1xyXG5cclxuY29uc3QgZ2VuZXJhdGVSb2FkID0gKGFycmF5KSA9PiB7XHJcbiAgbGV0IHJvYWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb2Fkc1wiKTtcclxuICBsZXQgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2Utc2VsZWN0XCIpO1xyXG5cclxuICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIC8vaW5wdXQgYmVpbmcgdHlwZWQgaW5zaWRlIHRoZSBzZWFyY2ggYmFyXHJcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gc2VhcmNoQmFyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgY291cnNlc1xyXG4gICAgcm9hZHMuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGJyYW5jaE5hbWUgPSBhcnJheVtpbmRleF0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgLy9jb25zdCBsaW5rID0gbGlua0FycmF5W2luZGV4XTtcclxuICAgICAgaWYgKGJyYW5jaE5hbWUuaW5jbHVkZXMoc2VhcmNoVGV4dCkpIHtcclxuICAgICAgICBsZXQgbWFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBtYXBEaXYuY2xhc3NMaXN0LmFkZChcInJvYWRCb3hcIik7XHJcbiAgICAgICAgcm9hZHMuYXBwZW5kQ2hpbGQobWFwRGl2KTtcclxuICAgICAgICBtYXBEaXYuaW5uZXJIVE1MID0gYDxzcGFuIGlkPVwiY291cnNlLSR7aW5kZXh9XCI+JHthcnJheVtpbmRleF19PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IHdpZHRoOjgwJVwiID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2xpbmstclwiICBpZD1cIm1ham9yTGluay0ke2luZGV4fVwiPjxhIGNsYXNzPSdhcicgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TWFqb3I8L2E+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbGluay1yXCIgaWQ9XCJtaW5vckxpbmstJHtpbmRleH1cIj48YSBjbGFzcz0nYXInaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TWlub3I8L2E+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgbWFwRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvdXJzZS0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtYWpvckxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWlub3JMaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1hcERpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvdXJzZS0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtYWpvckxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWlub3JMaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy9UbyBnZW5lcmF0ZSBjb3Vyc2VzIHdoZW4geW91IGxvYWQgdXAgcGFnZVxyXG4gIHNlYXJjaEJhci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKTtcclxufTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9hZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm9hZEdlbik7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9hZGZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvYWRHZW4pO1xyXG5cclxuLy9HZW5lcmF0ZSBFcnAgTWFuYWdlbWVudCBUYWJcclxuY29uc3QgZXJwR2VuID0gKCkgPT4ge1xyXG4gIGhvZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcclxuICBzdHVkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gIHJvYWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgZXJwLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpXCI7XHJcbiAgZ2VuZXJhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJlcnBNYW5hZ2VtZW50XCI+XHJcbiAgPGRpdiBjbGFzcz1cInRhZ2xpbmVcIj5cclxuICAgICAgPHNwYW4+U2ltcGxpZnk8L3NwYW4+XHJcbiAgICAgIDxzcGFuPiBZb3VyIFNudSBFeHBlcmllbmNlPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInN1Yi10YWdcIiA+Q29tbW9ubHkgYXNrZWQgRkFRcyA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImxpbmtTZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJlcnBMaW5rXCI+RXJwPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJmYXN0TGlua1wiPkZhc3RyYWNrPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJob3N0ZUxpbmtcIj5Ib3N0ZWwgTWFuYWdlbWVudDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiYmJMaW5rXCI+QmxhY2tib2FyZDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJmYXFzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB3aWR0aDogMTAwJTtcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5XaGF0IGlzIEVycD88L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1jYXJldC1kb3duLWZpbGxcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2xcIj5yYW5kb20gaW1hZ2UvdmlkZW88L2Rpdj4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICBsZXQgbGlua1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmtTZWN0aW9uXCIpO1xyXG4gIGxldCBsaW5rcyA9IGxpbmtTZWN0aW9uLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpO1xyXG4gIGxldCBmYXFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXFzXCIpO1xyXG5cclxuICBmdW5jdGlvbiBmYXFGaWxsKGFycmF5KSB7XHJcbiAgICBmYXFzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBlbGVtZW50ID0gYXJyYXlbaV07XHJcbiAgICAgIGxldCBmYXFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBmYXFEaXYuaW5uZXJIVE1MID0gYDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHdpZHRoOiAxMDAlO1wiPlxyXG4gICAgICA8c3Bhbj4ke2VsZW1lbnQucXVlc3Rpb259PC9zcGFuPlxyXG4gICAgICA8c3Bhbj48aSBpZD0nZHJvcC0ke2l9JyBjbGFzcz1cImJpIGJpLWNhcmV0LWRvd24tZmlsbFwiPjwvaT48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic29sXCIgaWQ9J3NvbC0ke2l9Jz4ke2VsZW1lbnQuYW5zd2VyfTwvZGl2PmA7XHJcbiAgICAgIGZhcXMuYXBwZW5kQ2hpbGQoZmFxRGl2KTtcclxuICAgICAgZmFxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNvbC0ke2l9YCk7XHJcbiAgICAgICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZHJvcC0ke2l9YCk7XHJcbiAgICAgICAgaWYgKHNvbC5zdHlsZS5kaXNwbGF5ID09IFwiZmxleFwiKSB7XHJcbiAgICAgICAgICBzb2wuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgYXJyb3cuY2xhc3NMaXN0ID0gXCJiaS1jYXJldC1kb3duLWZpbGxcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc29sLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgIGFycm93LmNsYXNzTGlzdCA9IFwiYmktY2FyZXQtdXAtZmlsbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZhcXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAvL0V4YW1wbGUgYXJyYXlzXHJcbiAgbGV0IGVycEZhcXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgRVJQP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgXCJUaGUgU2hpdiBOYWRhciBVbml2ZXJzaXR5IEVSUCBwb3J0YWwgaXMgYSB3ZWItYmFzZWQgYXBwbGljYXRpb24gdGhhdCBwcm92aWRlcyBzdHVkZW50cywgZmFjdWx0eSwgYW5kIHN0YWZmIHdpdGggYWNjZXNzIHRvIGEgdmFyaWV0eSBvZiB1bml2ZXJzaXR5IHNlcnZpY2VzLiBUaGUgcG9ydGFsIGluY2x1ZGVzIGZlYXR1cmVzIHN1Y2ggYXMgc3R1ZGVudCBzZWxmLXNlcnZpY2UsIGZhY3VsdHkgc2VsZi1zZXJ2aWNlLCBzdGFmZiBzZWxmLXNlcnZpY2UsIGFuZCBwYXJlbnQtc3R1ZGVudCBwb3J0YWwuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gbG9nIGluIHRvIHRoZSBFUlA/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICBcIlRvIGxvZyBpbiB0byB5b3VyIEVSUCwgeW91IG11c3QgZW50ZXIgeW91ciBTTlUgbmV0IElEIChlLmcuLSB4eTEyMykgYW5kIHBhc3N3b3JkLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGFkZCBjb3Vyc2VzIHRvIHBsYW5uZXI/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICBcIlVwb24gbG9nZ2luZyBpbnRvIHRoZSBFUlAsIG5hdmlnYXRlIHRvIHRoZSAnQWNhZGVtaWMgUGxhbm5pbmcnIHNlY3Rpb24gbG9jYXRlZCBpbiB0aGUgbGVmdC1oYW5kIG1lbnUgYmFyLCBvciBkaXJlY3RseSBhY2Nlc3MgdGhlICdQbGFuJyBvcHRpb24gYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSBhbG9uZ3NpZGUgb3RoZXIgb3B0aW9ucyBsaWtlIHNlYXJjaCBhbmQgZW5yb2xsLiBQcm9jZWVkIHRvIGNsaWNrIG9uICdCcm93c2UgQ2F0YWxvZycgYW5kIHVzZSB0aGUgdGV4dCBib3ggdG8gaW5wdXQgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgc3ViamVjdCB5b3UgZGVzaXJlIHRvIHNlbGVjdCBhIGNvdXJzZSBmcm9tLiBBbGwgYXZhaWxhYmxlIHN1YmplY3Qgb3B0aW9ucyB3aWxsIGJlIGRpc3BsYXllZCwgd2hlcmUgeW91IGNhbiB0aGVuIGNsaWNrIHRoZSBkcm9wZG93biBidXR0b24gdG8gY2hvb3NlIHlvdXIgZGVzaXJlZCBjb3Vyc2UgYW5kIGNsaWNrIG9uICdBZGQgUGxhbm5lcicgdG8gaW5jbHVkZSBpdCBpbiB5b3VyIHBsYW5uZXIuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJXaGVyZSB0byBzZWUgeW91ciB0aW1ldGFibGUgZnJvbT9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgIFwiSW4gdGhlIEVSUCBzeXN0ZW0sIGxvY2F0ZSB0aGUgJ0Vucm9sbG1lbnQnIG9wdGlvbiBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHBhZ2UsIHNpdHVhdGVkIHVuZGVyIHRoZSBtZW51IGJveC4gQ2xpY2sgb24gdGhlICdNeSBXZWVrbHkgU2NoZWR1bGUnIG9wdGlvbiB0byBhY2Nlc3MgeW91ciB0aW1ldGFibGUgZm9yIHRoZSBjdXJyZW50IHdlZWsuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gY2hlY2sgR1BBP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgXCJJbiB0aGUgRVJQIHN5c3RlbSwgZmluZCB0aGUgJ0Vucm9sbG1lbnQnIG9wdGlvbiBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHBhZ2UsIHdoaWNoIGlzIGxvY2F0ZWQgdW5kZXIgdGhlIG1lbnUgYm94LiBDbGljayBvbiAnVGVybSBTdGF0aXN0aWNzJyBhbmQgY2hvb3NlIHRoZSBzZW1lc3RlciBmb3Igd2hpY2ggeW91IHdpc2ggdG8gY2hlY2sgeW91ciBHUEEuIFRoZW4sIHJldmlldyB5b3VyIEdQQSBmb3IgdGhlIHNlbGVjdGVkIHNlbWVzdGVyLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246XHJcbiAgICAgICAgXCJIb3cgdG8gY2hlY2sgdGhlIHRvdGFsIGNyZWRpdHMgY29tcGxldGVkIGFuZCB0b3RhbCBjcmVkaXRzIGxlZnQ/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICAnRmluZCB0aGUgXCJNeSBBY2FkZW1pY3NcIiBvcHRpb24gaW4gdGhlIEVSUCBzeXN0ZW0gYWxvbmcgd2l0aCBvdGhlciBvcHRpb25zIGxpa2UgXCJFbnJvbCxcIiBcIlBsYW4sXCIgZXRjLiBuZWFyIHRoZSB0b3Agb2YgdGhlIHBhZ2UuIFRoZW4gc2VsZWN0IFwiVmlldyBNeSBBZHZpc2VtZW50IFJlcG9ydC5cIiBUaGlzIHJlcG9ydCB3aWxsIHNob3cgdGhlIGNyZWRpdHMgeW91IGhhdmUgYWxyZWFkeSBlYXJuZWQgYXMgd2VsbCBhcyB0aGUgY3JlZGl0cyB5b3Ugc3RpbGwgbmVlZCB0byBmaW5pc2guJyxcclxuICAgIH0sXHJcbiAgXTtcclxuICBsZXQgZmFzdHJhY2tGYXFzID0gW1xyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIEZhc3RyYWNrP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgJ1RvIGxlYXZlIHRoZSBjYW1wdXMgZm9yIGEgZGF5IG9yIGxvbmdlciwgeW91IG11c3Qgb2J0YWluIGFwcHJvdmFsIGZyb20gdGhlIHdhcmRlbi4gVGhpcyBhcHByb3ZhbCBpcyByZWZlcnJlZCB0byBhcyBcImZhc3RyYWNrLlwiJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyBkbyBJIGFwcGx5IGZvciBGYXN0cmFjaz9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgICdQbGVhc2UgYWNjZXNzIHRoZSBTTlVMaW5rcyB3ZWJzaXRlIGFuZCBmaW5kIHRoZSBcImxvZ2luXCIgb3B0aW9uLiBPbmNlIGxvZ2dlZCBpbiwgeW91IHdpbGwgc2VlIGEgdmFyaWV0eSBvZiBjaG9pY2VzLiBDbGljayBvbiB0aGUgXCJmYXN0cmFja1wiIG9wdGlvbiB0byBhY2Nlc3MgdGhlIGZvcm0gZm9yIHJlcXVlc3RpbmcgcGVybWlzc2lvbiB0byBsZWF2ZSB0aGUgY2FtcHVzLCB3aGV0aGVyIGl0IGlzIGZvciBwZXJzb25hbCBvciBvZmZpY2lhbCByZWFzb25zLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJXaGF0IHRvIGRvIGluIGNhc2UgRmFzdHJhY2sgaXMgcmVqZWN0ZWQ/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICBcIklmIHlvdXIgZmFzdHJhY2sgcmVxdWVzdCBpcyByZWplY3RlZCBmb3IgYW55IHJlYXNvbiwgeW91IGhhdmUgdHdvIG9wdGlvbnM6IFlvdSBjYW4gcmV2aWV3IHRoZSBmb3JtIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55IG1pc3Rha2VzLCBjb3JyZWN0IHRoZW0sIGFuZCByZXN1Ym1pdCBpdCBmb3IgYXBwcm92YWwuIEFsdGVybmF0aXZlbHksIGlmIHlvdSBuZWVkIHRvIGxlYXZlIHVyZ2VudGx5LCB5b3UgY2FuIGRpcmVjdGx5IGFwcHJvYWNoIHRoZSByZWNlcHRpb24gb2YgeW91ciBob3N0ZWwgYW5kIHJlcXVlc3QgYW4gZWFybHkgYXBwcm92YWwgZnJvbSB0aGVtLlwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGxldCBob3N0ZWxGYXFzID0gW1xyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gY2hvb3NlIHJvb21tYXRlcz9cIixcclxuICAgICAgYW5zd2VyOiBcIlRoZSBvcHRpb24gdG8gcmVtb3ZlIHJvb21tYXRlcyBpcyBubyBsb25nZXIgdmFsaWQgYXMgb2YgMjAyM1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIHNlbGVjdCB5b3VyIHJvb20/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICBcIlBsZWFzZSB2aXNpdCB0aGUgU05VTGlua3Mgd2Vic2l0ZSBhbmQgbG9jYXRlIHRoZSAnbG9naW4nIG9wdGlvbi4gQWZ0ZXIgbG9nZ2luZyBpbiwgeW91IHdpbGwgYmUgcHJlc2VudGVkIHdpdGggdmFyaW91cyBjaG9pY2VzLiBDbGljayBvbiB0aGUgJ0hvc3RlbCBNYW5hZ2VtZW50IFN5c3RlbScgb3B0aW9uLCBhbmQgZnJvbSB0aGVyZSwgZmluZCB0aGUgJ1Jvb20gU2VsZWN0aW9uIFJlcXVlc3QnIG9wdGlvbi4gRHVyaW5nIHRoZSByb29tIHNlbGVjdGlvbiBkYXlzIGFzc2lnbmVkIGJ5IHRoZSBtYW5hZ2VtZW50LCB0aGlzIHNlbGVjdGlvbiB3aWxsIHJlZGlyZWN0IHlvdSB0byBhIHBhZ2Ugd2hlcmUgeW91IGNhbiBjaG9vc2UgeW91ciByb29tLlwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGxldCBibGFja2JvYXJkRmFxcyA9IFtcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyBCbGFja2JvYXJkP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgXCJCbGFja2JvYXJkIGlzIGFuIG9ubGluZSBsZWFybmluZyBtYW5hZ2VtZW50IHN5c3RlbSAoTE1TKSB1c2VkIGJ5IHByb2Zlc3NvcnMgdG8gcHJvdmlkZSBjb3Vyc2UgbWF0ZXJpYWxzLCBpbmNsdWRpbmcgbm90ZXMsIGFzc2lnbm1lbnRzLCBhbm5vdW5jZW1lbnRzLCBhbmQgb3RoZXIgcmVzb3VyY2VzIHRvIHN0dWRlbnRzIGluIGEgZGlnaXRhbCBmb3JtYXQuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gbG9nIGluIGJsYWNrYm9hcmQ/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICBcIlRvIGFjY2VzcyB0aGUgQmxhY2tib2FyZCBwbGF0Zm9ybSBhdCBTTlUsIHlvdSBoYXZlIHR3byBvcHRpb25zLiBGaXJzdGx5LCB5b3UgY2FuIG5hdmlnYXRlIHRvIFNOVSBsaW5rcyBhbmQgc2VhcmNoIGZvciB0aGUgJ0JsYWNrYm9hcmQnIG9wdGlvbiBvbiB0aGUgd2Vic2l0ZS4gQWx0ZXJuYXRpdmVseSwgeW91IG1heSBkaXJlY3RseSBzZWFyY2ggZm9yICdTTlUgQmxhY2tib2FyZCcgb24gdGhlIGludGVybmV0LiBPbmNlIHlvdSBmaW5kIHRoZSBCbGFja2JvYXJkIHBvcnRhbCwgbG9nIGluIHVzaW5nIHlvdXIgU05VIGVtYWlsIElEIGFuZCBwYXNzd29yZCB0byBnYWluIGFjY2VzcyB0byB0aGUgcGxhdGZvcm0uLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGFkZCBjb3Vyc2VzIHRvIGZhdm9yaXRlcz9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgIFwiQWZ0ZXIgbG9nZ2luZyBpbiB0byB5b3VyIEJsYWNrYm9hcmQgYWNjb3VudCwgZmluZCB0aGUgJ0NvdXJzZXMnIG9wdGlvbiBsb2NhdGVkIG9uIHRoZSBsZWZ0LWhhbmQgc2lkZSBvZiB0aGUgc2NyZWVuIGFuZCBjbGljayBvbiBpdC4gVGhpcyBhY3Rpb24gd2lsbCBkaXNwbGF5IGEgbGlzdCBvZiBhbGwgdGhlIGNvdXJzZXMgeW91IGFyZSBjdXJyZW50bHkgZW5yb2xsZWQgaW4uIFRvIG1hcmsgYSBjb3Vyc2UgYXMgYSBmYXZvcml0ZSwgbG9vayBmb3IgdGhlIHN0YXIgYnV0dG9uIHNpdHVhdGVkIG9uIHRoZSByaWdodC1oYW5kIHNpZGUgb2YgZWFjaCBjb3Vyc2UgaGVhZGluZy4gQ2xpY2sgb24gdGhlIHN0YXIgYnV0dG9uIHRvIGFkZCB0aGUgY291cnNlIHRvIHlvdXIgZmF2b3JpdGVzIGxpc3QuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJIb3cgY2FuIEkgc3VibWl0IGFzc2lnbm1lbnRzIG9uIEJsYWNrYm9hcmQ/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICBcIk5vcm1hbGx5LCB0aGUgbGluayBmb3Igc3VibWl0dGluZyBhc3NpZ25tZW50cyBjYW4gYmUgZm91bmQgaW4gdGhlICdBY3Rpdml0eSBTZWN0aW9uJyBvZiB0aGUgY291cnNlIHBhZ2UsIGFsb25nIHdpdGggdGhlIGRlYWRsaW5lIGZvciBzdWJtaXNzaW9uLiBJZiB5b3UgYXJlIHVuYWJsZSB0byBsb2NhdGUgdGhlIGxpbmsgdGhlcmUsIHlvdSBjYW4gZm9sbG93IHRoZXNlIHN0ZXBzOiBGaXJzdCwgY2xpY2sgb24gdGhlICdDb3Vyc2VzJyBvcHRpb24gb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBzY3JlZW4uIE5leHQsIGZpbmQgdGhlIHNwZWNpZmljIGNvdXJzZSBmb3Igd2hpY2ggeW91IHdhbnQgdG8gc3VibWl0IHRoZSBhc3NpZ25tZW50LiBPbmNlIHlvdSBoYXZlIHNlbGVjdGVkIHRoZSBjb3Vyc2UsIG5hdmlnYXRlIHRvIHRoZSAnQ29udGVudCBTZWN0aW9uJyBvZiB0aGUgY291cnNlIHBhZ2UgYW5kIGxvb2sgZm9yIHRoZSBsaW5rIHRvIHRoZSBhc3NpZ25tZW50IHN1Ym1pc3Npb24uXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gYWNjZXNzIGNvbnRlbnQgb24gYmxhY2tib2FyZD9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgIFwiVXN1YWxseSwgdGhlIG1vc3QgcmVjZW50IGNvbnRlbnQgaXMgdmlzaWJsZSBvbiB0aGUgJ0FjdGl2aXR5IFN0cmVhbS4nIEhvd2V2ZXIsIGlmIHlvdSB3YW50IHRvIGFjY2VzcyBhbGwgdGhlIGNvbnRlbnQgYXZhaWxhYmxlIGZvciBhIHBhcnRpY3VsYXIgY291cnNlLCBmb2xsb3cgdGhlc2Ugc3RlcHM6IEdvIHRvIHRoZSAnQ291cnNlcycgc2VjdGlvbiBhbmQgY2hvb3NlIHRoZSBzcGVjaWZpYyBjb3Vyc2UgeW91IHdpc2ggdG8gdmlldyB0aGUgY29udGVudCBvZi4gTG9vayBmb3IgdGhlICdDb250ZW50JyBzZWN0aW9uLCB0eXBpY2FsbHkgbG9jYXRlZCBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHNjcmVlbi4gQnkgYWNjZXNzaW5nIHRoaXMgc2VjdGlvbiwgeW91IHdpbGwgYmUgYWJsZSB0byBzZWUgYWxsIHRoZSBjb250ZW50IHJlbGF0ZWQgdG8gdGhlIHNlbGVjdGVkIGNvdXJzZS5cIixcclxuICAgIH0sXHJcbiAgXTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycExpbmtcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZhcUZpbGwoZXJwRmFxcyk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYXN0TGlua1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgZmFxRmlsbChmYXN0cmFja0ZhcXMpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9zdGVMaW5rXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmYXFGaWxsKGhvc3RlbEZhcXMpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmJMaW5rXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmYXFGaWxsKGJsYWNrYm9hcmRGYXFzKTtcclxuICB9KTtcclxufTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZXJwR2VuKCk7XHJcbn0pO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycGZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBlcnBHZW4oKTtcclxufSk7XHJcblxyXG5jb25zdCBhYm91dEdlbiA9ICgpID0+IHtcclxuICBnZW5lcmF0ZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImFib3V0XCI+XHJcbiAgPGRpdiBjbGFzcz1cImFib3V0Q29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpcnN0Q29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dENvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb25cIj5XaGF0IGlzIDxzcGFuPlNudUFjYWRlbWlhPC9zcGFuPj88L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyXCI+XHJcbiAgICAgICAgICBVbmxvY2sgdGhlIGRvb3JzIHRvIGtub3dsZWRnZSBhbmQgZW1iYXJrIG9uIGEgam91cm5leSBvZlxyXG4gICAgICAgICAgaW50ZWxsZWN0dWFsIGdyb3d0aCB3aXRoIFNudUFjYWRlbWlhLCB5b3VyIHByZW1pZXIgb25saW5lXHJcbiAgICAgICAgICBlZHVjYXRpb24gcGxhdGZvcm0uIFdoZXRoZXIgeW91J3JlIGEgY3VyaW91cyBsZWFybmVyLCBhXHJcbiAgICAgICAgICBkZWRpY2F0ZWQgc3R1ZGVudCwgb3IgYSBsaWZlbG9uZyBlbnRodXNpYXN0LlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGltZyBzcmM9XCIke2NvbXB1dGVyfVwiIGFsdD1cIlwiIHdpZHRoPVwiMjUlXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNlY29uZENvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRleHRDb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uXCI+XHJcbiAgICAgICAgICBIb3c8c3Bhbj4gU251QWNhZGVtaWEgPC9zcGFuPmNhbiBoZWxwIHlvdT9cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyXCI+XHJcbiAgICAgICAgICBBbiBlZHVjYXRpb24gd2Vic2l0ZSBjYW4gc2lnbmlmaWNhbnRseSBlbmhhbmNlIHlvdXIgbGVhcm5pbmdcclxuICAgICAgICAgIGpvdXJuZXkgYnkgcHJvdmlkaW5nIGEgZGl2ZXJzZSByYW5nZSBvZiByZXNvdXJjZXMgdGFpbG9yZWQgdG9cclxuICAgICAgICAgIHZhcmlvdXMgc3ViamVjdHMgYW5kIGxlYXJuaW5nIHN0eWxlcywgb2ZmZXJpbmcgZmxleGlibGVcclxuICAgICAgICAgIHNjaGVkdWxpbmcgYW5kIHNlbGYtcGFjZWQgcHJvZ3Jlc3MgdHJhY2tpbmcsIGNvbm5lY3RpbmcgeW91IHdpdGhcclxuICAgICAgICAgIGV4cGVydCBpbnN0cnVjdG9ycy5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbWcgc3JjPSR7aGVscFBpY30gYWx0PVwiXCIgd2lkdGg9XCIyNSVcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInRlYW1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZWV0VGVhbVwiPk1FRVQgVEhFIFRFQU08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZWFtQmF5XCI+XHJcbiAgICAgIDxkaXY+Q29yZTwvZGl2PlxyXG4gICAgICA8ZGl2PkRldiBUZWFtPC9kaXY+XHJcbiAgICAgIDxkaXY+Q29udGVudCBUZWFtPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZWFtUGVvcGxlXCI+XHJcbiAgICAgIDxkaXYgZGF0YS1hY3RpdmU9XCJhY3RpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGVyc29uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWZyb250XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3NyYy9yZWFzb3VyY2VzL3ZhbXNpLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWJhY2tcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlwiSXQgaXMgd2hhdCBpdCBpc1wiPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1pbnN0YWdyYW1cIj48L2lcclxuICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW4ubGlua2VkaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktbGlua2VkaW5cIj48L2lcclxuICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1ZhbXNpS2FwYXJ0aGkvU251YWNhZGVtaWEvdHJlZS9tYWluXCJcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWdpdGh1YlwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3Bhbj5WYW1zaSBLYXBhcnRoaTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPkNvZm91bmRlcjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGVyc29uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWZyb250XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3NyYy9yZWFzb3VyY2VzL3ZhbXNpLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWJhY2tcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlwiSXQgaXMgd2hhdCBpdCBpc1wiPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1pbnN0YWdyYW1cIj48L2lcclxuICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW4ubGlua2VkaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktbGlua2VkaW5cIj48L2lcclxuICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1ZhbXNpS2FwYXJ0aGkvU251YWNhZGVtaWEvdHJlZS9tYWluXCJcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWdpdGh1YlwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3Bhbj5WYW1zaSBLYXBhcnRoaTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPkNvZm91bmRlcjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgZGF0YS1hY3RpdmU9XCJpbmFjdGl2ZVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGRhdGEtYWN0aXZlPVwiaW5hY3RpdmVcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gIGxldCB0ZWFtQmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZWFtQmF5XCIpO1xyXG59O1xyXG5cclxuLy8gbGV0IHRlYW0gPSB7XHJcbi8vICAgW3tcclxuLy8gICAgIGZpcnN0TmFtZTpcIlZhbXNpXCIsIGxhc3ROYW1lOlwiS2FwYXJ0aGlcIiwgZGVzaWduYXRpb246IFwiQ29mb3VuZGVyXCIsIGluc3RhOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vX192YW1zaV9fMTcvXCIsIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi92YW1zaS1rYXBhcnRoaS0zNzE3MzAyMjJcIiwgZ2l0OlwiaHR0cHM6Ly9naXRodWIuY29tL1ZhbXNpS2FwYXJ0aGlcIiwgaW1nOlxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG5cclxuLy8gICB9XHJcbi8vIF1cclxuLy8gfVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGNvbnN0IGFib3V0QnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuc2xvZ2FuQnV0dG9uXCIpO1xyXG4gIGlmIChhYm91dEJ1dHRvbikge1xyXG4gICAgYWJvdXRHZW4oKTsgLy8gR2VuZXJhdGUgXCJBYm91dCBVc1wiIGNvbnRlbnRcclxuICB9XHJcbn0pO1xyXG5jb25zdCByYWRpb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1yYWRpb11cIik7XHJcblxyXG5jb25zdCBzbGlkZVNob3cgPSAoKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYWRpb0J1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHt9LCAzMDAwKTtcclxuICB9XHJcbn07XHJcbnNsaWRlU2hvdygpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9