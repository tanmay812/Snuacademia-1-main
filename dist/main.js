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
}

.header {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  margin-right: 2%;
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
.socials {
  display: flex;
  justify-content: center;
  gap: max(5px, 10%);
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
  position: relative;
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
    position: relative;
    top: 104%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/Style.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;EACE,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,iCAAiC;EACjC,wBAAwB;EACxB,kCAAkC;EAClC,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,YAAY;EACZ,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA,wBAAwB;AACxB;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,mBAAmB;EACnB,mCAAmC;EACnC,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,iCAAiC;EACjC,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,eAAe;EACf,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;;EAEE,UAAU;;EAEV,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mCAAmC;EACnC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,oBAAoB;AACtB;AACA,iBAAiB;AACjB;EACE,eAAe;EACf,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,SAAS;EACT,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mCAAmC;EACnC,2BAA2B;EAC3B,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,wBAAwB;EACxB,iCAAiC;EACjC,eAAe;EACf,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,mCAAmC;EACnC,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,UAAU;EACV,SAAS;AACX;AACA;EACE,mCAAmC;EACnC,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,YAAY;EACZ,mCAAmC;EACnC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,mCAAmC;EACnC,iCAAiC;EACjC,wBAAwB;EACxB,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,mCAAmC;EACnC,sBAAsB;AACxB;AACA;EACE,cAAc;AAChB;AACA,WAAW;AACX;EACE,iCAAiC;EACjC,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,UAAU;EACV,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA,WAAW;AACX;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,eAAe;EACf,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;;EAEE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,0CAA0C;AAC5C;AACA;EACE,2BAA2B;EAC3B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,yCAAyC;AAC3C;AACA;EACE,aAAa;EACb,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,2BAA2B;EAC3B,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,mCAAmC;EACnC,mBAAmB;AACrB;AACA;EACE,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,UAAU;E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","sourcesContent":["/*Using Css variable*/\n:root {\n  --bg-color: white;\n  --font-color: black;\n  --secondary: #00b0ff;\n}\n\n.dark {\n  --bg-color: black;\n  --font-color: white;\n  --secondary: #536dfe;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--font-color);\n  font-family: \"DM Sans\", sans-serif;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.header {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  align-items: center;\n  margin-right: 2%;\n}\n\n.logo {\n  display: flex;\n  justify-content: center;\n  width: 100px;\n}\n\n.options {\n  display: flex;\n  width: max(500px, 50%);\n  justify-content: space-around;\n  height: 25px;\n  font-size: max(15px, 1vw);\n  color: var(--font-color);\n}\n\n.options > div:hover {\n  cursor: pointer;\n  color: var(--secondary);\n}\n\n.home {\n  margin-top: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 10%;\n}\n\n.slogan {\n  font-size: max(3.5vw, 40px);\n  display: flex;\n  margin-bottom: 20px;\n  font-weight: 900;\n}\n\n.slogan-para {\n  font-size: max(1vw, 20px);\n  width: max(80%, 280px);\n}\n\ni {\n  font-size: 25px;\n  width: auto;\n  cursor: pointer;\n  transform: translate(-50%, -50%);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n}\n\n/* study-material page */\n.study,\n.roadMaps {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.tagline {\n  margin-top: 5vh;\n  font-size: min(8vw, 70px);\n  font-weight: 950;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.search-bar {\n  margin-top: 5vh;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: row;\n  border: 2px solid var(--font-color);\n  width: max(40vw, 300px);\n  padding: 8px;\n  padding-left: 15px;\n  gap: 10px;\n  border-radius: 5px;\n}\n#course-select {\n  background-color: var(--bg-color);\n  color: var(--font-color);\n  border: none;\n  outline: none;\n  color: (--font-color);\n  font-size: 25px;\n  border-left: 1px solid grey;\n  padding-left: 10px;\n  font-weight: 100;\n  width: 80%;\n}\n\n.courses,\n.roads {\n  width: 90%;\n\n  margin-top: 50px;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n}\n\n.courseBox {\n  height: 200px;\n  width: 300px;\n  border: 2px solid var(--font-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--font-color);\n}\n\n.glink {\n  display: none;\n  border-bottom: none;\n}\na {\n  text-decoration: none;\n  color: var(--font-color);\n  border-bottom: none;\n}\na:visited {\n  text-decoration: none;\n  color: var(--font-color);\n}\na:hover {\n  text-decoration: none;\n  color: var(--font-color);\n}\na:active {\n  text-decoration: none;\n  color: var(--font-color);\n}\n.generate {\n  padding-bottom: 20px;\n}\n/*erp management*/\n.linkSection {\n  margin-top: 5vh;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.erpManagement {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.linkSection > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--font-color);\n  font-size: max(1.2vw, 15px);\n  height: max(35px, 5vh);\n  width: max(350px, 15vw);\n  border-radius: 5px;\n  color: var(--font-color);\n  background-color: var(--bg-color);\n  flex-wrap: wrap;\n  cursor: pointer;\n}\n.linkSection > div:hover {\n  color: var(--bg-color);\n  background-color: var(--font-color);\n  transition: 100ms;\n}\n.sub-tag {\n  font-size: 0.5em;\n  font-weight: 200;\n  margin-top: 2vh;\n  display: flex;\n  text-align: center;\n}\n.faqs {\n  display: flex;\n  flex-direction: column;\n  margin-top: 7vh;\n  width: 95%;\n  gap: 20px;\n}\n.faqs > div {\n  border: 1px solid var(--font-color);\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 15px;\n  border-radius: 2px;\n}\n.sol {\n  display: none;\n}\n.roadBox {\n  height: 200px;\n  width: 300px;\n  border: 2px solid var(--font-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--font-color);\n}\n.glink-r {\n  display: none;\n  border: 1px solid var(--font-color);\n  background-color: var(--bg-color);\n  color: var(--font-color);\n  width: 33%;\n  padding: 10px;\n  justify-content: center;\n  border-radius: 5px;\n}\n.glink-r:hover {\n  background-color: var(--font-color);\n  color: var(--bg-color);\n}\na.ar {\n  color: inherit;\n}\n/* footer */\n.footer {\n  background-color: rgb(23, 23, 24);\n  padding: 15px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n}\n\n.reasources {\n  display: flex;\n  justify-content: center;\n  color: white;\n  gap: 10px;\n  width: 50%;\n  flex-wrap: wrap;\n}\n.reasources > div:hover {\n  color: var(--secondary);\n  cursor: pointer;\n}\n.contact > a {\n  color: white;\n  margin: 10px;\n}\n.contact > a:hover {\n  color: var(--secondary);\n}\n\n.foot-logo {\n  color: white;\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.foot-logo:hover {\n  color: var(--secondary);\n}\n.generate {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*About us*/\n.sloganButton {\n  margin-top: 4vw;\n  width: max(200px, 20vw);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid var(--secondary);\n  border-radius: 10px;\n  font-size: max(1.2vw, 20px);\n}\n.sloganButton:hover {\n  background-color: var(--secondary);\n  cursor: pointer;\n}\n.about {\n  margin-top: 1vh;\n  padding: 5vw;\n}\n.aboutContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10vw;\n}\n.firstContent,\n.secondContent {\n  display: flex;\n  gap: 15vw;\n  padding-bottom: 8vw;\n  border-bottom: 1px solid var(--font-color);\n}\n.secondContent {\n  flex-direction: row-reverse;\n  border-bottom: none;\n}\n.textContent {\n  display: flex;\n  flex-direction: column;\n}\n.question {\n  font-size: 3vw;\n  margin-bottom: 20px;\n}\n.question > span {\n  color: var(--secondary);\n}\n.answer {\n  font-size: min(2vw, 30px);\n}\n.team {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: min(6vw, 80px);\n}\n.meetTeam {\n  width: fit-content;\n  font-size: 5.5vw;\n  font-weight: 600;\n  border-bottom: 2px solid var(--secondary);\n}\n.teamBay {\n  display: flex;\n  width: 90%;\n  justify-content: space-between;\n}\n.teamBay > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: max(1.2vw, 13px);\n  width: 25vw;\n  box-sizing: border-box;\n  padding: 10px;\n  border: 1px solid var(--font-color);\n  border-radius: 10px;\n}\n.teamBay > div:hover {\n  background-color: var(--secondary);\n  cursor: pointer;\n}\n.teamPeople {\n  width: 90%;\n  padding: 10px;\n  border: 1px solid var(--secondary);\n}\n.teamPeople > div {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  gap: 10%;\n}\n/*flipcard*/\n.person {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.flip-card {\n  background-color: transparent;\n  width: min(25vw, 300px);\n  height: min(25vw, 300px);\n  perspective: 1000px;\n  margin-bottom: 0.8vw;\n}\n\n/* This container is needed to position the front and back side */\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n/* Do an horizontal flip when you move the mouse over the flip box container */\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg);\n}\n\n/* Position the front and back side */\n.flip-card-front,\n.flip-card-back {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden; /* Safari */\n  backface-visibility: hidden;\n}\n\n/* Style the front side (fallback if image is missing) */\n.flip-card-front {\n  color: var(--font-color);\n}\n\n/* Style the back side */\n.flip-card-back {\n  background-color: var(--secondary);\n  color: var(--font-color);\n  font-size: max(1.2vw, 13px);\n  transform: rotateY(180deg);\n}\n.socials {\n  display: flex;\n  justify-content: center;\n  gap: max(5px, 10%);\n  width: 70%;\n}\n.socials > a > i {\n  font-size: max(2vw, 15px);\n}\n.person > span {\n  font-size: max(1.3vw, 13px);\n}\n/*slider*/\n\n#slider {\n  position: relative;\n  width: 60%;\n  min-height: 30vw;\n  margin: 80px auto;\n  font-family: \"DM sans\", sans-serif;\n  perspective: 1400px;\n  transform-style: preserve-3d;\n  display: flex;\n  justify-content: center;\n}\n\ninput[type=\"radio\"] {\n  position: relative;\n  top: 108%;\n  width: 4vw;\n  height: 18px;\n  margin: 0 15px 0 0;\n  opacity: 0.6;\n  cursor: pointer;\n}\n\n/*input[type=radio]:nth-child(5) {\n  margin-right: 0px;\n}\n\ninput[type=radio]:checked {\n  opacity: 1;\n}*/\n\nh2 {\n  font-size: 2.5vw;\n  color: white;\n  margin: 0;\n  margin-bottom: 20px;\n}\n\np {\n  width: 50%;\n  font-size: min(30px, 1.5vw);\n}\n\n#slider label {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  color: white;\n  font-weight: normal;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  transition: transform 400ms ease;\n  box-sizing: border-box;\n  padding: 20px;\n}\n.sliderContent {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  height: 100%;\n}\n#slide1 {\n  background: #066892;\n}\n.dark #slide1 {\n  background: #232e6f;\n}\n\n#slide2 {\n  background: #0d97d2;\n}\n.dark #slide2 {\n  background: #384ab2;\n}\n\n#slide3 {\n  background: #00b0ff;\n}\n.dark #slide3 {\n  background: #536dfe;\n}\n/*\n#slide4 {\n  background: slateblue;\n}\n\n#slide5 {\n  background: violet;\n}*/\n\n/* Slider Functionality */\n\n/* Active Slide */\n#s1:checked ~ #slide1,\n#s2:checked ~ #slide2,\n#s3:checked ~ #slide3,\n#s4:checked ~ #slide4,\n#s5:checked ~ #slide5 {\n  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);\n  transform: translate3d(0%, 0, 0px);\n}\n\n/* Next Slide */\n#s1:checked ~ #slide2,\n#s2:checked ~ #slide3,\n#s3:checked ~ #slide4,\n#s4:checked ~ #slide5,\n#s5:checked ~ #slide1 {\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);\n  transform: translate3d(15%, 0, -100px);\n}\n\n/* Next to Next Slide */\n#s1:checked ~ #slide3,\n#s2:checked ~ #slide4,\n#s3:checked ~ #slide5,\n#s4:checked ~ #slide1,\n#s5:checked ~ #slide2 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n  transform: translate3d(30%, 0, -250px);\n}\n\n/* Previous to Previous Slide */\n#s1:checked ~ #slide4,\n#s2:checked ~ #slide5,\n#s3:checked ~ #slide1,\n#s4:checked ~ #slide2,\n#s5:checked ~ #slide3 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n  transform: translate3d(-30%, 0, -250px);\n}\n\n/* Previous Slide */\n#s1:checked ~ #slide5,\n#s2:checked ~ #slide1,\n#s3:checked ~ #slide2,\n#s4:checked ~ #slide3,\n#s5:checked ~ #slide4 {\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);\n  transform: translate3d(-15%, 0, -100px);\n}\n\n/*Responsive*/\n@media screen and (max-width: 800px) {\n  /*homepage taglines*/\n  body {\n    align-items: center;\n  }\n  #image {\n    display: none;\n  }\n  .home {\n    padding-left: 0;\n  }\n  .text {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .slogan {\n    text-align: center;\n  }\n  .slogan-para {\n    text-align: center;\n  }\n  /*slider*/\n  #slider {\n    margin-top: 40px;\n    margin-bottom: 20px;\n    min-height: 50vh;\n    width: 70%;\n  }\n  #slider label {\n    height: 100%;\n  }\n  .sliderContent {\n    flex-direction: column;\n    gap: 5px;\n    height: 100%;\n    align-items: center;\n  }\n  h2 {\n    font-size: max(2.6vw, 14px);\n  }\n  p {\n    width: 80%;\n    font-size: max(2.2vw, 11px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n  input[type=\"radio\"] {\n    position: relative;\n    top: 104%;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsc0JBQXNCLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sV0FBVyxNQUFNLGFBQWEsYUFBYSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsU0FBUyxZQUFZLGFBQWEsT0FBTyxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFB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QTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5REFBUSxDQUFDO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMERBQU8sRUFBRTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL3NyYy9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9zcmMvU3R5bGUuY3NzP2I2YTgiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlVzaW5nIENzcyB2YXJpYWJsZSovXG46cm9vdCB7XG4gIC0tYmctY29sb3I6IHdoaXRlO1xuICAtLWZvbnQtY29sb3I6IGJsYWNrO1xuICAtLXNlY29uZGFyeTogIzAwYjBmZjtcbn1cblxuLmRhcmsge1xuICAtLWJnLWNvbG9yOiBibGFjaztcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcbiAgLS1zZWNvbmRhcnk6ICM1MzZkZmU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiRE0gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogbWF4KDUwMHB4LCA1MCUpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IG1heCgxNXB4LCAxdncpO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5vcHRpb25zID4gZGl2OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuLmhvbWUge1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogMTAlO1xufVxuXG4uc2xvZ2FuIHtcbiAgZm9udC1zaXplOiBtYXgoMy41dncsIDQwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uc2xvZ2FuLXBhcmEge1xuICBmb250LXNpemU6IG1heCgxdncsIDIwcHgpO1xuICB3aWR0aDogbWF4KDgwJSwgMjgwcHgpO1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB3aWR0aDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBzdHVkeS1tYXRlcmlhbCBwYWdlICovXG4uc3R1ZHksXG4ucm9hZE1hcHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhZ2xpbmUge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGZvbnQtc2l6ZTogbWluKDh2dywgNzBweCk7XG4gIGZvbnQtd2VpZ2h0OiA5NTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VhcmNoLWJhciB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbiAgd2lkdGg6IG1heCg0MHZ3LCAzMDBweCk7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiNjb3Vyc2Utc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICgtLWZvbnQtY29sb3IpO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JleTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICB3aWR0aDogODAlO1xufVxuXG4uY291cnNlcyxcbi5yb2FkcyB7XG4gIHdpZHRoOiA5MCU7XG5cbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xufVxuXG4uY291cnNlQm94IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLmdsaW5rIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbmE6dmlzaXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbi5nZW5lcmF0ZSB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLyplcnAgbWFuYWdlbWVudCovXG4ubGlua1NlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZXJwTWFuYWdlbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubGlua1NlY3Rpb24gPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAxNXB4KTtcbiAgaGVpZ2h0OiBtYXgoMzVweCwgNXZoKTtcbiAgd2lkdGg6IG1heCgzNTBweCwgMTV2dyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxpbmtTZWN0aW9uID4gZGl2OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IDEwMG1zO1xufVxuLnN1Yi10YWcge1xuICBmb250LXNpemU6IDAuNWVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mYXFzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogN3ZoO1xuICB3aWR0aDogOTUlO1xuICBnYXA6IDIwcHg7XG59XG4uZmFxcyA+IGRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLnNvbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucm9hZEJveCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG4uZ2xpbmstciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5nbGluay1yOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG59XG5hLmFyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4vKiBmb290ZXIgKi9cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDIzLCAyNCk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5yZWFzb3VyY2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogNTAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucmVhc291cmNlcyA+IGRpdjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFjdCA+IGEge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jb250YWN0ID4gYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuXG4uZm9vdC1sb2dvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbi5mb290LWxvZ286aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cbi5nZW5lcmF0ZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi8qQWJvdXQgdXMqL1xuLnNsb2dhbkJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDR2dztcbiAgd2lkdGg6IG1heCgyMDBweCwgMjB2dyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IG1heCgxLjJ2dywgMjBweCk7XG59XG4uc2xvZ2FuQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFib3V0IHtcbiAgbWFyZ2luLXRvcDogMXZoO1xuICBwYWRkaW5nOiA1dnc7XG59XG4uYWJvdXRDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHZ3O1xufVxuLmZpcnN0Q29udGVudCxcbi5zZWNvbmRDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXZ3O1xuICBwYWRkaW5nLWJvdHRvbTogOHZ3O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG59XG4uc2Vjb25kQ29udGVudCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi50ZXh0Q29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucXVlc3Rpb24ge1xuICBmb250LXNpemU6IDN2dztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5xdWVzdGlvbiA+IHNwYW4ge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cbi5hbnN3ZXIge1xuICBmb250LXNpemU6IG1pbigydncsIDMwcHgpO1xufVxuLnRlYW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IG1pbig2dncsIDgwcHgpO1xufVxuLm1lZXRUZWFtIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDUuNXZ3O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcbn1cbi50ZWFtQmF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnRlYW1CYXkgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IG1heCgxLjJ2dywgMTNweCk7XG4gIHdpZHRoOiAyNXZ3O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi50ZWFtQmF5ID4gZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRlYW1QZW9wbGUge1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLnRlYW1QZW9wbGUgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwJTtcbn1cbi8qZmxpcGNhcmQqL1xuLnBlcnNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZmxpcC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiBtaW4oMjV2dywgMzAwcHgpO1xuICBoZWlnaHQ6IG1pbigyNXZ3LCAzMDBweCk7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAuOHZ3O1xufVxuXG4vKiBUaGlzIGNvbnRhaW5lciBpcyBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cbi5mbGlwLWNhcmQtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi8qIERvIGFuIGhvcml6b250YWwgZmxpcCB3aGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIHRoZSBmbGlwIGJveCBjb250YWluZXIgKi9cbi5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4vKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xuLmZsaXAtY2FyZC1mcm9udCxcbi5mbGlwLWNhcmQtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBTYWZhcmkgKi9cbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4vKiBTdHlsZSB0aGUgZnJvbnQgc2lkZSAoZmFsbGJhY2sgaWYgaW1hZ2UgaXMgbWlzc2luZykgKi9cbi5mbGlwLWNhcmQtZnJvbnQge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi8qIFN0eWxlIHRoZSBiYWNrIHNpZGUgKi9cbi5mbGlwLWNhcmQtYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDEzcHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5zb2NpYWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogbWF4KDVweCwgMTAlKTtcbiAgd2lkdGg6IDcwJTtcbn1cbi5zb2NpYWxzID4gYSA+IGkge1xuICBmb250LXNpemU6IG1heCgydncsIDE1cHgpO1xufVxuLnBlcnNvbiA+IHNwYW4ge1xuICBmb250LXNpemU6IG1heCgxLjN2dywgMTNweCk7XG59XG4vKnNsaWRlciovXG5cbiNzbGlkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MCU7XG4gIG1pbi1oZWlnaHQ6IDMwdnc7XG4gIG1hcmdpbjogODBweCBhdXRvO1xuICBmb250LWZhbWlseTogXCJETSBzYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBlcnNwZWN0aXZlOiAxNDAwcHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTA4JTtcbiAgd2lkdGg6IDR2dztcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW46IDAgMTVweCAwIDA7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKmlucHV0W3R5cGU9cmFkaW9dOm50aC1jaGlsZCg1KSB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgb3BhY2l0eTogMTtcbn0qL1xuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMi41dnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5wIHtcbiAgd2lkdGg6IDUwJTtcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgMS41dncpO1xufVxuXG4jc2xpZGVyIGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uc2xpZGVyQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI3NsaWRlMSB7XG4gIGJhY2tncm91bmQ6ICMwNjY4OTI7XG59XG4uZGFyayAjc2xpZGUxIHtcbiAgYmFja2dyb3VuZDogIzIzMmU2Zjtcbn1cblxuI3NsaWRlMiB7XG4gIGJhY2tncm91bmQ6ICMwZDk3ZDI7XG59XG4uZGFyayAjc2xpZGUyIHtcbiAgYmFja2dyb3VuZDogIzM4NGFiMjtcbn1cblxuI3NsaWRlMyB7XG4gIGJhY2tncm91bmQ6ICMwMGIwZmY7XG59XG4uZGFyayAjc2xpZGUzIHtcbiAgYmFja2dyb3VuZDogIzUzNmRmZTtcbn1cbi8qXG4jc2xpZGU0IHtcbiAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xufVxuXG4jc2xpZGU1IHtcbiAgYmFja2dyb3VuZDogdmlvbGV0O1xufSovXG5cbi8qIFNsaWRlciBGdW5jdGlvbmFsaXR5ICovXG5cbi8qIEFjdGl2ZSBTbGlkZSAqL1xuI3MxOmNoZWNrZWQgfiAjc2xpZGUxLFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUyLFxuI3MzOmNoZWNrZWQgfiAjc2xpZGUzLFxuI3M0OmNoZWNrZWQgfiAjc2xpZGU0LFxuI3M1OmNoZWNrZWQgfiAjc2xpZGU1IHtcbiAgYm94LXNoYWRvdzogMCAxM3B4IDI2cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDEycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCwgMHB4KTtcbn1cblxuLyogTmV4dCBTbGlkZSAqL1xuI3MxOmNoZWNrZWQgfiAjc2xpZGUyLFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUzLFxuI3MzOmNoZWNrZWQgfiAjc2xpZGU0LFxuI3M0OmNoZWNrZWQgfiAjc2xpZGU1LFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUxIHtcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTUlLCAwLCAtMTAwcHgpO1xufVxuXG4vKiBOZXh0IHRvIE5leHQgU2xpZGUgKi9cbiNzMTpjaGVja2VkIH4gI3NsaWRlMyxcbiNzMjpjaGVja2VkIH4gI3NsaWRlNCxcbiNzMzpjaGVja2VkIH4gI3NsaWRlNSxcbiNzNDpjaGVja2VkIH4gI3NsaWRlMSxcbiNzNTpjaGVja2VkIH4gI3NsaWRlMiB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAlLCAwLCAtMjUwcHgpO1xufVxuXG4vKiBQcmV2aW91cyB0byBQcmV2aW91cyBTbGlkZSAqL1xuI3MxOmNoZWNrZWQgfiAjc2xpZGU0LFxuI3MyOmNoZWNrZWQgfiAjc2xpZGU1LFxuI3MzOmNoZWNrZWQgfiAjc2xpZGUxLFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUyLFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUzIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAlLCAwLCAtMjUwcHgpO1xufVxuXG4vKiBQcmV2aW91cyBTbGlkZSAqL1xuI3MxOmNoZWNrZWQgfiAjc2xpZGU1LFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUxLFxuI3MzOmNoZWNrZWQgfiAjc2xpZGUyLFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUzLFxuI3M1OmNoZWNrZWQgfiAjc2xpZGU0IHtcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgLTEwMHB4KTtcbn1cblxuLypSZXNwb25zaXZlKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC8qaG9tZXBhZ2UgdGFnbGluZXMqL1xuICBib2R5IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICNpbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaG9tZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIC50ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuc2xvZ2FuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnNsb2dhbi1wYXJhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLypzbGlkZXIqL1xuICAjc2xpZGVyIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gICNzbGlkZXIgbGFiZWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuc2xpZGVyQ29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiBtYXgoMi42dncsIDE0cHgpO1xuICB9XG4gIHAge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZm9udC1zaXplOiBtYXgoMi4ydncsIDExcHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMDQlO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9TdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCO0FBQ3JCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBLHdCQUF3QjtBQUN4Qjs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxVQUFVOztFQUVWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBQ0EsV0FBVztBQUNYO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQiwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDViw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWO0FBQ0EsV0FBVztBQUNYO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUEsaUVBQWlFO0FBQ2pFO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUEsOEVBQThFO0FBQzlFO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLHFDQUFxQztBQUNyQzs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DLEVBQUUsV0FBVztFQUNoRCwyQkFBMkI7QUFDN0I7O0FBRUEsd0RBQXdEO0FBQ3hEO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGtDQUFrQztFQUNsQyx3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBLFNBQVM7O0FBRVQ7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7Ozs7OztFQU1FOztBQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTs7Ozs7OztFQU9FOztBQUVGLHlCQUF5Qjs7QUFFekIsaUJBQWlCO0FBQ2pCOzs7OztFQUtFLHlFQUF5RTtFQUN6RSxrQ0FBa0M7QUFDcEM7O0FBRUEsZUFBZTtBQUNmOzs7OztFQUtFLHVFQUF1RTtFQUN2RSxzQ0FBc0M7QUFDeEM7O0FBRUEsdUJBQXVCO0FBQ3ZCOzs7OztFQUtFLHdDQUF3QztFQUN4QyxzQ0FBc0M7QUFDeEM7O0FBRUEsK0JBQStCO0FBQy9COzs7OztFQUtFLHdDQUF3QztFQUN4Qyx1Q0FBdUM7QUFDekM7O0FBRUEsbUJBQW1CO0FBQ25COzs7OztFQUtFLHVFQUF1RTtFQUN2RSx1Q0FBdUM7QUFDekM7O0FBRUEsYUFBYTtBQUNiO0VBQ0Usb0JBQW9CO0VBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBLFNBQVM7RUFDVDtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlVzaW5nIENzcyB2YXJpYWJsZSovXFxuOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogd2hpdGU7XFxuICAtLWZvbnQtY29sb3I6IGJsYWNrO1xcbiAgLS1zZWNvbmRhcnk6ICMwMGIwZmY7XFxufVxcblxcbi5kYXJrIHtcXG4gIC0tYmctY29sb3I6IGJsYWNrO1xcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcXG4gIC0tc2Vjb25kYXJ5OiAjNTM2ZGZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDIlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogbWF4KDUwMHB4LCA1MCUpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IG1heCgxNXB4LCAxdncpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ub3B0aW9ucyA+IGRpdjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmhvbWUge1xcbiAgbWFyZ2luLXRvcDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcblxcbi5zbG9nYW4ge1xcbiAgZm9udC1zaXplOiBtYXgoMy41dncsIDQwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uc2xvZ2FuLXBhcmEge1xcbiAgZm9udC1zaXplOiBtYXgoMXZ3LCAyMHB4KTtcXG4gIHdpZHRoOiBtYXgoODAlLCAyODBweCk7XFxufVxcblxcbmkge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIHN0dWR5LW1hdGVyaWFsIHBhZ2UgKi9cXG4uc3R1ZHksXFxuLnJvYWRNYXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhZ2xpbmUge1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgZm9udC1zaXplOiBtaW4oOHZ3LCA3MHB4KTtcXG4gIGZvbnQtd2VpZ2h0OiA5NTA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zZWFyY2gtYmFyIHtcXG4gIG1hcmdpbi10b3A6IDV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgd2lkdGg6IG1heCg0MHZ3LCAzMDBweCk7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiNjb3Vyc2Utc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmNvdXJzZXMsXFxuLnJvYWRzIHtcXG4gIHdpZHRoOiA5MCU7XFxuXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLmNvdXJzZUJveCB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZ2xpbmsge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuLmdlbmVyYXRlIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4vKmVycCBtYW5hZ2VtZW50Ki9cXG4ubGlua1NlY3Rpb24ge1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5lcnBNYW5hZ2VtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxpbmtTZWN0aW9uID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAxNXB4KTtcXG4gIGhlaWdodDogbWF4KDM1cHgsIDV2aCk7XFxuICB3aWR0aDogbWF4KDM1MHB4LCAxNXZ3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpbmtTZWN0aW9uID4gZGl2OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IDEwMG1zO1xcbn1cXG4uc3ViLXRhZyB7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mYXFzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogN3ZoO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGdhcDogMjBweDtcXG59XFxuLmZhcXMgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLnNvbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucm9hZEJveCB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuLmdsaW5rLXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgd2lkdGg6IDMzJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmdsaW5rLXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5hLmFyIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4vKiBmb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMjMsIDI0KTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5yZWFzb3VyY2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5yZWFzb3VyY2VzID4gZGl2OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29udGFjdCA+IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4uY29udGFjdCA+IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi5mb290LWxvZ28ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG4uZm9vdC1sb2dvOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG4uZ2VuZXJhdGUge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKkFib3V0IHVzKi9cXG4uc2xvZ2FuQnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDR2dztcXG4gIHdpZHRoOiBtYXgoMjAwcHgsIDIwdncpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAyMHB4KTtcXG59XFxuLnNsb2dhbkJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWJvdXQge1xcbiAgbWFyZ2luLXRvcDogMXZoO1xcbiAgcGFkZGluZzogNXZ3O1xcbn1cXG4uYWJvdXRDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTB2dztcXG59XFxuLmZpcnN0Q29udGVudCxcXG4uc2Vjb25kQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXZ3O1xcbiAgcGFkZGluZy1ib3R0b206IDh2dztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuLnNlY29uZENvbnRlbnQge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLnRleHRDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucXVlc3Rpb24ge1xcbiAgZm9udC1zaXplOiAzdnc7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ucXVlc3Rpb24gPiBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG4uYW5zd2VyIHtcXG4gIGZvbnQtc2l6ZTogbWluKDJ2dywgMzBweCk7XFxufVxcbi50ZWFtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogbWluKDZ2dywgODBweCk7XFxufVxcbi5tZWV0VGVhbSB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDUuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG4udGVhbUJheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnRlYW1CYXkgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAxM3B4KTtcXG4gIHdpZHRoOiAyNXZ3O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi50ZWFtQmF5ID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50ZWFtUGVvcGxlIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuLnRlYW1QZW9wbGUgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAlO1xcbn1cXG4vKmZsaXBjYXJkKi9cXG4ucGVyc29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZsaXAtY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiBtaW4oMjV2dywgMzAwcHgpO1xcbiAgaGVpZ2h0OiBtaW4oMjV2dywgMzAwcHgpO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHZ3O1xcbn1cXG5cXG4vKiBUaGlzIGNvbnRhaW5lciBpcyBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cXG4uZmxpcC1jYXJkLWlubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbn1cXG5cXG4vKiBEbyBhbiBob3Jpem9udGFsIGZsaXAgd2hlbiB5b3UgbW92ZSB0aGUgbW91c2Ugb3ZlciB0aGUgZmxpcCBib3ggY29udGFpbmVyICovXFxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4vKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xcbi5mbGlwLWNhcmQtZnJvbnQsXFxuLmZsaXAtY2FyZC1iYWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLyogU2FmYXJpICovXFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi8qIFN0eWxlIHRoZSBmcm9udCBzaWRlIChmYWxsYmFjayBpZiBpbWFnZSBpcyBtaXNzaW5nKSAqL1xcbi5mbGlwLWNhcmQtZnJvbnQge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgYmFjayBzaWRlICovXFxuLmZsaXAtY2FyZC1iYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMTNweCk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuLnNvY2lhbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiBtYXgoNXB4LCAxMCUpO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuLnNvY2lhbHMgPiBhID4gaSB7XFxuICBmb250LXNpemU6IG1heCgydncsIDE1cHgpO1xcbn1cXG4ucGVyc29uID4gc3BhbiB7XFxuICBmb250LXNpemU6IG1heCgxLjN2dywgMTNweCk7XFxufVxcbi8qc2xpZGVyKi9cXG5cXG4jc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA2MCU7XFxuICBtaW4taGVpZ2h0OiAzMHZ3O1xcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxuICBmb250LWZhbWlseTogXFxcIkRNIHNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGVyc3BlY3RpdmU6IDE0MDBweDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxMDglO1xcbiAgd2lkdGg6IDR2dztcXG4gIGhlaWdodDogMThweDtcXG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyppbnB1dFt0eXBlPXJhZGlvXTpudGgtY2hpbGQoNSkge1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xcbiAgb3BhY2l0eTogMTtcXG59Ki9cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDIuNXZ3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxucCB7XFxuICB3aWR0aDogNTAlO1xcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgMS41dncpO1xcbn1cXG5cXG4jc2xpZGVyIGxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgZWFzZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uc2xpZGVyQ29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI3NsaWRlMSB7XFxuICBiYWNrZ3JvdW5kOiAjMDY2ODkyO1xcbn1cXG4uZGFyayAjc2xpZGUxIHtcXG4gIGJhY2tncm91bmQ6ICMyMzJlNmY7XFxufVxcblxcbiNzbGlkZTIge1xcbiAgYmFja2dyb3VuZDogIzBkOTdkMjtcXG59XFxuLmRhcmsgI3NsaWRlMiB7XFxuICBiYWNrZ3JvdW5kOiAjMzg0YWIyO1xcbn1cXG5cXG4jc2xpZGUzIHtcXG4gIGJhY2tncm91bmQ6ICMwMGIwZmY7XFxufVxcbi5kYXJrICNzbGlkZTMge1xcbiAgYmFja2dyb3VuZDogIzUzNmRmZTtcXG59XFxuLypcXG4jc2xpZGU0IHtcXG4gIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcXG59XFxuXFxuI3NsaWRlNSB7XFxuICBiYWNrZ3JvdW5kOiB2aW9sZXQ7XFxufSovXFxuXFxuLyogU2xpZGVyIEZ1bmN0aW9uYWxpdHkgKi9cXG5cXG4vKiBBY3RpdmUgU2xpZGUgKi9cXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTEsXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUyLFxcbiNzMzpjaGVja2VkIH4gI3NsaWRlMyxcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTQsXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGU1IHtcXG4gIGJveC1zaGFkb3c6IDAgMTNweCAyNnB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAxMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwcHgpO1xcbn1cXG5cXG4vKiBOZXh0IFNsaWRlICovXFxuI3MxOmNoZWNrZWQgfiAjc2xpZGUyLFxcbiNzMjpjaGVja2VkIH4gI3NsaWRlMyxcXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTQsXFxuI3M0OmNoZWNrZWQgfiAjc2xpZGU1LFxcbiNzNTpjaGVja2VkIH4gI3NsaWRlMSB7XFxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTUlLCAwLCAtMTAwcHgpO1xcbn1cXG5cXG4vKiBOZXh0IHRvIE5leHQgU2xpZGUgKi9cXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTMsXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGU0LFxcbiNzMzpjaGVja2VkIH4gI3NsaWRlNSxcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTEsXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUyIHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwJSwgMCwgLTI1MHB4KTtcXG59XFxuXFxuLyogUHJldmlvdXMgdG8gUHJldmlvdXMgU2xpZGUgKi9cXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTQsXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGU1LFxcbiNzMzpjaGVja2VkIH4gI3NsaWRlMSxcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTIsXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUzIHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMCUsIDAsIC0yNTBweCk7XFxufVxcblxcbi8qIFByZXZpb3VzIFNsaWRlICovXFxuI3MxOmNoZWNrZWQgfiAjc2xpZGU1LFxcbiNzMjpjaGVja2VkIH4gI3NsaWRlMSxcXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTIsXFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUzLFxcbiNzNTpjaGVja2VkIH4gI3NsaWRlNCB7XFxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgLTEwMHB4KTtcXG59XFxuXFxuLypSZXNwb25zaXZlKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLypob21lcGFnZSB0YWdsaW5lcyovXFxuICBib2R5IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gICNpbWFnZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuaG9tZSB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gIH1cXG4gIC50ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5zbG9nYW4ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAuc2xvZ2FuLXBhcmEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAvKnNsaWRlciovXFxuICAjc2xpZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgbWluLWhlaWdodDogNTB2aDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG4gICNzbGlkZXIgbGFiZWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuICAuc2xpZGVyQ29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDIuNnZ3LCAxNHB4KTtcXG4gIH1cXG4gIHAge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LXNpemU6IG1heCgyLjJ2dywgMTFweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwNCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vU3R5bGUuY3NzXCI7XG5pbXBvcnQgbG9nbzEgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzLzEwLnBuZ1wiO1xuaW1wb3J0IGxvZ28yIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy85LnBuZ1wiO1xuaW1wb3J0IGRwaWMgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzL2Rhcmttb2RlLnN2Z1wiO1xuaW1wb3J0IGxwaWMgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzL2xpZ2h0bW9kZS5zdmdcIjtcbmltcG9ydCBzcGljMSBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvZ29hbC5zdmdcIjtcbmltcG9ydCBzcGljMiBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvam91cm5leS5zdmdcIjtcbmltcG9ydCBzcGljMyBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvb3BlbnNvdXJjZS5zdmdcIjtcbmltcG9ydCBjb21wdXRlciBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvY29tcHV0ZXIuc3ZnXCI7XG5pbXBvcnQgaGVscFBpYyBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvaGVscExpZ2h0LnN2Z1wiO1xuXG4vL0ludGlhbCBsb2dvIGdlbmVyYXRpb25cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGdcIikuc3JjID0gbG9nbzE7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ0LWxvZ29cIikuc3JjID0gbG9nbzI7XG4vL2ludGlhbCBob21lcGFnZSBwaWMgZ2VuZXJhdGlvblxuY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKTtcbmltZy5zcmMgPSBscGljO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb2FsXCIpLnNyYyA9IHNwaWMxO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqb3VybmV5XCIpLnNyYyA9IHNwaWMyO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvc1wiKS5zcmMgPSBzcGljMztcbi8vRGFya01vZGUgTGlnaHRNb2RlIFRvZ2dsZVxuY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVEYXJrXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW9uc1wiKTtcblxudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImJpLW1vb25cIik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxnXCIpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpO1xuXG4gIC8vc2VlIHdoaWNoIG1vZGUgaXQgaXNcbiAgbGV0IGlzRGFya01vZGUgPSBib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIik7XG5cbiAgaWYgKGlzRGFya01vZGUpIHtcbiAgICBsb2dvLnNyYyA9IGxvZ28yO1xuICAgIGlmIChpbWcpIHtcbiAgICAgIGltZy5zcmMgPSBkcGljO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsb2dvLnNyYyA9IGxvZ28xO1xuICAgIGlmIChpbWcpIHtcbiAgICAgIGltZy5zcmMgPSBscGljO1xuICAgIH1cbiAgfVxufSk7XG5cbmxldCBnZW5lcmF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VuZXJhdGVcIik7XG5jb25zdCBob2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG5jb25zdCBzdHVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHVkeVwiKTtcbmNvbnN0IHJvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvYWRcIik7XG5jb25zdCBlcnAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycFwiKTtcblxuLy9HZW5lcmF0ZSBob21lUGFnZSBkeW5hbWljYWxseVxubGV0IGhvbWVnZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGlzRGFya01vZGUgPSBib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIik7XG4gIGhvZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKVwiO1xuICBzdHVkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICByb2FkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICBlcnAuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIGdlbmVyYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiaG9tZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xvZ2FuXCI+XG4gICAgICAgICAgICAgIFNpbXBsaWZ5IGFjYWRlbWljcyB3aXRoIHVzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbG9nYW4tcGFyYVwiPlxuICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gU251QWNhZGVtaWEsIHRoZSB1bHRpbWF0ZSBzdHVkZW50IGRlc2lnbmVkIHdlYnNpdGUgdGhhdCBoZWxwcyBpbiBzaW1wbGlmeWluZyBzdHVkeSBsaWZlXG4gICAgICAgICAgICAgICAgYXQgU05VXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbG9nYW5CdXR0b25cIj5BYm91dCB1czwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aW1nIGlkPVwiaW1hZ2VcIiBzcmM9JyR7bHBpY30nIHN0eWxlPVwid2lkdGg6NTAlO21hcmdpbi1yaWdodDogMTAlO1wiPlxuPC9kaXY+XG48c2VjdGlvbiBpZD1cInNsaWRlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNsaWRlclwiIGlkPVwiczFcIiBjaGVja2VkIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2xpZGVyXCIgaWQ9XCJzMlwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2xpZGVyXCIgaWQ9XCJzM1wiIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJzMVwiIGlkPVwic2xpZGUxXCJcbiAgICAgICAgICA+PGgyPk91ciBHb2FsPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyQ29udGVudFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3NwaWMxfVwiIHdpZHRoPVwiNTAlXCIgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTbnVBY2FkZW1pYSBhaW1zIHRvIGFzc2lzdCBzdHVkZW50cyB0aHJvdWdob3V0IHRoZWlyIGFjYWRlbWljXG4gICAgICAgICAgICAgIGpvdXJuZXkgd2l0aCBzdHVkeSBtYXRlcmlhbHMsIG5vdGVzLCBQWVFzLCBhbmQgYXNzaWdubWVudHMuIE91clxuICAgICAgICAgICAgICB3ZWJzaXRlIGFsc28gYWRkcmVzc2VzIGNvbW1vbiBxdWVzdGlvbnMgYWJvdXQgRVJQLCBCbGFja2JvYXJkLCBhbmRcbiAgICAgICAgICAgICAgb3RoZXIgZ2VuZXJhbCBxdWVyaWVzIGZvciBmcmVzaGVycy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGZvcj1cInMyXCIgaWQ9XCJzbGlkZTJcIlxuICAgICAgICAgID48aDI+T3VyIEpvdXJuZXk8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJDb250ZW50XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7c3BpYzJ9XCIgd2lkdGg9XCI1MCVcIiAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE91ciBqb3VybmV5IGJlZ2FuIG9uIGEgcmFuZG9tIGFmdGVybm9vbiBpbiBvdXIgaG9zdGVsIHJvb20sIHdoZXJlXG4gICAgICAgICAgICAgIHdlIHN0YXJ0ZWQgd29ya2luZyBvbiB0aGlzIHByb2plY3Qgd2l0aCB0aGUgc3VwcG9ydCBvZiBvdXIgcGVlcnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJzM1wiIGlkPVwic2xpZGUzXCJcbiAgICAgICAgICA+PGgyPk9wZW4gU291cmNlIENvbnRyaWJ1dGlvbjwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzcGljM31cIiB3aWR0aD1cIjQwJVwiIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT3VyIHdlYnNpdGUgaXMgb3Blbi1zb3VyY2UsIGFsbG93aW5nIHN0dWRlbnRzIHRvIGFjY2VzcyBhbmRcbiAgICAgICAgICAgICAgY29udHJpYnV0ZSB0byB0aGUgc291cmNlIGNvZGUgdGhyb3VnaCBvdXIgR2l0SHViIHJlcG9zaXRvcnkuIFdlXG4gICAgICAgICAgICAgIHdlbGNvbWUgeW91ciBwYXJ0aWNpcGF0aW9uIGFuZCBjb2xsYWJvcmF0aW9uIGluIG1ha2luZyBvdXJcbiAgICAgICAgICAgICAgcGxhdGZvcm0gZXZlbiBiZXR0ZXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L3NlY3Rpb24+YDtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpO1xuICBpZiAoaXNEYXJrTW9kZSkge1xuICAgIGlmIChpbWcpIHtcbiAgICAgIGltZy5zcmMgPSBkcGljO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaW1nKSB7XG4gICAgICBpbWcuc3JjID0gbHBpYztcbiAgICB9XG4gIH1cbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZWdlbik7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVmXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lZ2VuKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdC1sb2dvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lZ2VuKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZWdlbik7XG4vL2dlbmVyYXRlIFN0dWR5IE1hdGVyaWFsIFRhYlxubGV0IHN0dWR5R2VuID0gKCkgPT4ge1xuICBob2Uuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIHN0dWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIycHggc29saWQgdmFyKC0tZm9udC1jb2xvcilcIjtcbiAgcm9hZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgZXJwLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICBnZW5lcmF0ZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInN0dWR5XCI+XG4gICAgPGRpdiBjbGFzcz1cInRhZ2xpbmVcIj5cbiAgICAgICAgPHNwYW4+V2hlcmUgVGV4dGJvb2tzPC9zcGFuPlxuICAgICAgICA8c3Bhbj5BbmQgRHJlYW1zIENvbGxpZGU8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3ViLXRhZ1wiPkV4cGxvcmUsIERpc2NvdmVyLCBhbmQgU2hhcGUgWW91ciBBY2FkZW1pYyBKb3VybmV5IHdpdGggTGltaXRsZXNzIFBvc3NpYmlsaXRpZXM8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1iYXJcIj5cbiAgICAgICAgPHNwYW4+PGkgY2xhc3M9XCJiaSBiaS1zZWFyY2hcIiBzdHlsZT1cImZvbnQtc2l6ZTogbWF4KDIwcHgsMS41dncpO1wiID48L2k+PC9zcGFuPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvdXJzZS1zZWxlY3RcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIGRhdGEtc2VhcmNoPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb3Vyc2VzXCI+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuPC9kaXY+YDtcblxuICBjb25zdCBnZW5lcmF0ZUNvdXJzZXMgPSAoYXJyYXksIGxpbmtBcnJheSkgPT4ge1xuICAgIGxldCBjb3Vyc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3Vyc2VzXCIpO1xuICAgIGxldCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZS1zZWxlY3RcIik7XG5cbiAgICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIC8vaW5wdXQgYmVpbmcgdHlwZWQgaW5zaWRlIHRoZSBzZWFyY2ggYmFyXG4gICAgICBjb25zdCBzZWFyY2hUZXh0ID0gc2VhcmNoQmFyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvdXJzZXNcbiAgICAgIGNvdXJzZXMuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjb3Vyc2VOYW1lID0gYXJyYXlbaW5kZXhdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rQXJyYXlbaW5kZXhdO1xuXG4gICAgICAgIGlmIChjb3Vyc2VOYW1lLmluY2x1ZGVzKHNlYXJjaFRleHQpKSB7XG4gICAgICAgICAgbGV0IGNvdXJzZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY291cnNlRGl2LmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VCb3hcIik7XG4gICAgICAgICAgY291cnNlcy5hcHBlbmRDaGlsZChjb3Vyc2VEaXYpO1xuICAgICAgICAgIGNvdXJzZURpdi5pbm5lckhUTUwgPSBgPHNwYW4gaWQ9XCJjb3Vyc2UtJHtpbmRleH1cIj4ke2FycmF5W2luZGV4XX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbGlua1wiICBpZD1cImxpbmstJHtpbmRleH1cIj48YSBocmVmPVwiJHtsaW5rfVwiIHRhcmdldD1cIl9ibGFua1wiPkNvbnRlbnQ8L2E+PC9zcGFuPmA7XG5cbiAgICAgICAgICBjb3Vyc2VEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY291cnNlLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY291cnNlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY291cnNlLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvL1RvIGdlbmVyYXRlIGNvdXJzZXMgd2hlbiB5b3UgbG9hZCB1cCBwYWdlXG4gICAgc2VhcmNoQmFyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xuICB9O1xuXG4gIC8vZXhhbXBsZSBhcnJheXNcbiAgbGV0IGNvdXJzZUFyciA9IFtcIkRFUzEwMVwiLCBcIkZBQzIwMlwiLCBcIk1FQzEwNFwiLCBcIk1LVDIwMlwiLCBcIk9ITTQwMVwiLCBcIlNUTTIwNFwiXTtcbiAgbGV0IGxpbmtBcnIgPSBbXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xcGZXSDBKMmVrN3l4VE1ibW9Ddi00WVFQQjVYS09MSHI/dXNwPXNoYXJpbmdcIixcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzFxN1VzS1dGZzVvZFQ2clg1N1Q0TEFyaFNZNWVMYTJSSj91c3A9c2hhcmluZ1wiLFxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMU5sckhLQ1A1MmI1M09RaVljZEJnTzdOdkw5ZVE4MXp2P3VzcD1zaGFyaW5nXCIsXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xdHpJczJ1eDZsUjF1OGVUOWZUQUQtNUpYQmtoQUdxcmI/dXNwPWRyaXZlX2xpbmtcIixcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzFfLW1rZFFIQ3FwUGNlaVFlWnc3ajkxcjBoVmNVaG1oSj91c3A9c2hhcmluZ1wiLFxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMVo5QnFKQzF2Q25NeEZTUlQ4WU1hZkIxc2RsTEF2OG11P3VzcD1zaGFyaW5nXCIsXG4gIF07XG4gIGdlbmVyYXRlQ291cnNlcyhjb3Vyc2VBcnIsIGxpbmtBcnIpO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3R1ZHlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0dWR5R2VuKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3R1ZHlmXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdHVkeUdlbik7XG5cbi8vR2VuZXJhdGUgUm9hZG1hcFxuY29uc3Qgcm9hZEdlbiA9ICgpID0+IHtcbiAgaG9lLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICBzdHVkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICByb2FkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpXCI7XG4gIGVycC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgZ2VuZXJhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJyb2FkTWFwc1wiPlxuICA8ZGl2IGNsYXNzPVwidGFnbGluZVwiPlxuICAgICAgPHNwYW4+Q2hvb3NlPC9zcGFuPlxuICAgICAgPHNwYW4+WW91ciBBY2FkZW1pYyBUcmFpbDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3ViLXRhZ1wiPkNoYXJ0IFlvdXIgQWNhZGVtaWMgSm91cm5leTogRXhwbG9yZSBNYWpvciBhbmQgTWlub3IgUGF0aHM8L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2VhcmNoLWJhclwiPlxuICAgICAgPHNwYW4+PGkgY2xhc3M9XCJiaSBiaS1zZWFyY2hcIiBzdHlsZT1cImZvbnQtc2l6ZTogbWF4KDIwcHgsMS41dncpO1wiID48L2k+PC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb3Vyc2Utc2VsZWN0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBkYXRhLXNlYXJjaD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJyb2Fkc1wiPlxuICAgICAgXG4gIDwvZGl2PmA7XG4gIGxldCByb2FkQXJyID0gW1wiQ1NFXCIsIFwiRUNFXCIsIFwiRUVFXCIsIFwiTUVDSFwiLCBcIkJNU1wiLCBcIkVDT1wiXTtcbiAgZ2VuZXJhdGVSb2FkKHJvYWRBcnIpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVSb2FkID0gKGFycmF5KSA9PiB7XG4gIGxldCByb2FkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm9hZHNcIik7XG4gIGxldCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZS1zZWxlY3RcIik7XG5cbiAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgLy9pbnB1dCBiZWluZyB0eXBlZCBpbnNpZGUgdGhlIHNlYXJjaCBiYXJcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gc2VhcmNoQmFyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBDbGVhciBleGlzdGluZyBjb3Vyc2VzXG4gICAgcm9hZHMuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGJyYW5jaE5hbWUgPSBhcnJheVtpbmRleF0udG9Mb3dlckNhc2UoKTtcbiAgICAgIC8vY29uc3QgbGluayA9IGxpbmtBcnJheVtpbmRleF07XG4gICAgICBpZiAoYnJhbmNoTmFtZS5pbmNsdWRlcyhzZWFyY2hUZXh0KSkge1xuICAgICAgICBsZXQgbWFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFwRGl2LmNsYXNzTGlzdC5hZGQoXCJyb2FkQm94XCIpO1xuICAgICAgICByb2Fkcy5hcHBlbmRDaGlsZChtYXBEaXYpO1xuICAgICAgICBtYXBEaXYuaW5uZXJIVE1MID0gYDxzcGFuIGlkPVwiY291cnNlLSR7aW5kZXh9XCI+JHthcnJheVtpbmRleF19PC9zcGFuPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB3aWR0aDo4MCVcIiA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbGluay1yXCIgIGlkPVwibWFqb3JMaW5rLSR7aW5kZXh9XCI+PGEgY2xhc3M9J2FyJyBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NYWpvcjwvYT48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbGluay1yXCIgaWQ9XCJtaW5vckxpbmstJHtpbmRleH1cIj48YSBjbGFzcz0nYXInaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TWlub3I8L2E+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgbWFwRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb3Vyc2UtJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1ham9yTGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWlub3JMaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvdXJzZS0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWFqb3JMaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtaW5vckxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIC8vVG8gZ2VuZXJhdGUgY291cnNlcyB3aGVuIHlvdSBsb2FkIHVwIHBhZ2VcbiAgc2VhcmNoQmFyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb2FkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb2FkR2VuKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9hZGZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvYWRHZW4pO1xuXG4vL0dlbmVyYXRlIEVycCBNYW5hZ2VtZW50IFRhYlxuY29uc3QgZXJwR2VuID0gKCkgPT4ge1xuICBob2Uuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIHN0dWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIHJvYWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIGVycC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKVwiO1xuICBnZW5lcmF0ZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImVycE1hbmFnZW1lbnRcIj5cbiAgPGRpdiBjbGFzcz1cInRhZ2xpbmVcIj5cbiAgICAgIDxzcGFuPlNpbXBsaWZ5PC9zcGFuPlxuICAgICAgPHNwYW4+IFlvdXIgU251IEV4cGVyaWVuY2U8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInN1Yi10YWdcIiA+Q29tbW9ubHkgYXNrZWQgRkFRcyA8L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibGlua1NlY3Rpb25cIj5cbiAgICAgIDxkaXYgaWQ9XCJlcnBMaW5rXCI+RXJwPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiZmFzdExpbmtcIj5GYXN0cmFjazwvZGl2PlxuICAgICAgPGRpdiBpZD1cImhvc3RlTGlua1wiPkhvc3RlbCBNYW5hZ2VtZW50PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiYmJMaW5rXCI+QmxhY2tib2FyZDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZhcXNcIj5cbiAgICAgIDxkaXYgY2xhc3M+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjsgd2lkdGg6IDEwMCU7XCI+XG4gICAgICAgICAgICAgIDxzcGFuPldoYXQgaXMgRXJwPzwvc3Bhbj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1jYXJldC1kb3duLWZpbGxcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNvbFwiPnJhbmRvbSBpbWFnZS92aWRlbzwvZGl2PiAgICAgICAgICAgICAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gO1xuICBsZXQgbGlua1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmtTZWN0aW9uXCIpO1xuICBsZXQgbGlua3MgPSBsaW5rU2VjdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKTtcbiAgbGV0IGZhcXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhcXNcIik7XG5cbiAgZnVuY3Rpb24gZmFxRmlsbChhcnJheSkge1xuICAgIGZhcXMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGFycmF5W2ldO1xuICAgICAgbGV0IGZhcURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmYXFEaXYuaW5uZXJIVE1MID0gYDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHdpZHRoOiAxMDAlO1wiPlxuICAgICAgPHNwYW4+JHtlbGVtZW50LnF1ZXN0aW9ufTwvc3Bhbj5cbiAgICAgIDxzcGFuPjxpIGlkPSdkcm9wLSR7aX0nIGNsYXNzPVwiYmkgYmktY2FyZXQtZG93bi1maWxsXCI+PC9pPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNvbFwiIGlkPSdzb2wtJHtpfSc+JHtlbGVtZW50LmFuc3dlcn08L2Rpdj5gO1xuICAgICAgZmFxcy5hcHBlbmRDaGlsZChmYXFEaXYpO1xuICAgICAgZmFxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzb2wtJHtpfWApO1xuICAgICAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkcm9wLSR7aX1gKTtcbiAgICAgICAgaWYgKHNvbC5zdHlsZS5kaXNwbGF5ID09IFwiZmxleFwiKSB7XG4gICAgICAgICAgc29sLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBhcnJvdy5jbGFzc0xpc3QgPSBcImJpLWNhcmV0LWRvd24tZmlsbFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgYXJyb3cuY2xhc3NMaXN0ID0gXCJiaS1jYXJldC11cC1maWxsXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmYXFzLmlubmVySFRNTCA9IFwiXCI7XG4gIC8vRXhhbXBsZSBhcnJheXNcbiAgbGV0IGVycEZhcXMgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyBFUlA/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiVGhlIFNoaXYgTmFkYXIgVW5pdmVyc2l0eSBFUlAgcG9ydGFsIGlzIGEgd2ViLWJhc2VkIGFwcGxpY2F0aW9uIHRoYXQgcHJvdmlkZXMgc3R1ZGVudHMsIGZhY3VsdHksIGFuZCBzdGFmZiB3aXRoIGFjY2VzcyB0byBhIHZhcmlldHkgb2YgdW5pdmVyc2l0eSBzZXJ2aWNlcy4gVGhlIHBvcnRhbCBpbmNsdWRlcyBmZWF0dXJlcyBzdWNoIGFzIHN0dWRlbnQgc2VsZi1zZXJ2aWNlLCBmYWN1bHR5IHNlbGYtc2VydmljZSwgc3RhZmYgc2VsZi1zZXJ2aWNlLCBhbmQgcGFyZW50LXN0dWRlbnQgcG9ydGFsLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGxvZyBpbiB0byB0aGUgRVJQP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIlRvIGxvZyBpbiB0byB5b3VyIEVSUCwgeW91IG11c3QgZW50ZXIgeW91ciBTTlUgbmV0IElEIChlLmcuLSB4eTEyMykgYW5kIHBhc3N3b3JkLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGFkZCBjb3Vyc2VzIHRvIHBsYW5uZXI/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiVXBvbiBsb2dnaW5nIGludG8gdGhlIEVSUCwgbmF2aWdhdGUgdG8gdGhlICdBY2FkZW1pYyBQbGFubmluZycgc2VjdGlvbiBsb2NhdGVkIGluIHRoZSBsZWZ0LWhhbmQgbWVudSBiYXIsIG9yIGRpcmVjdGx5IGFjY2VzcyB0aGUgJ1BsYW4nIG9wdGlvbiBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIGFsb25nc2lkZSBvdGhlciBvcHRpb25zIGxpa2Ugc2VhcmNoIGFuZCBlbnJvbGwuIFByb2NlZWQgdG8gY2xpY2sgb24gJ0Jyb3dzZSBDYXRhbG9nJyBhbmQgdXNlIHRoZSB0ZXh0IGJveCB0byBpbnB1dCB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBzdWJqZWN0IHlvdSBkZXNpcmUgdG8gc2VsZWN0IGEgY291cnNlIGZyb20uIEFsbCBhdmFpbGFibGUgc3ViamVjdCBvcHRpb25zIHdpbGwgYmUgZGlzcGxheWVkLCB3aGVyZSB5b3UgY2FuIHRoZW4gY2xpY2sgdGhlIGRyb3Bkb3duIGJ1dHRvbiB0byBjaG9vc2UgeW91ciBkZXNpcmVkIGNvdXJzZSBhbmQgY2xpY2sgb24gJ0FkZCBQbGFubmVyJyB0byBpbmNsdWRlIGl0IGluIHlvdXIgcGxhbm5lci5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoZXJlIHRvIHNlZSB5b3VyIHRpbWV0YWJsZSBmcm9tP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIkluIHRoZSBFUlAgc3lzdGVtLCBsb2NhdGUgdGhlICdFbnJvbGxtZW50JyBvcHRpb24gb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBwYWdlLCBzaXR1YXRlZCB1bmRlciB0aGUgbWVudSBib3guIENsaWNrIG9uIHRoZSAnTXkgV2Vla2x5IFNjaGVkdWxlJyBvcHRpb24gdG8gYWNjZXNzIHlvdXIgdGltZXRhYmxlIGZvciB0aGUgY3VycmVudCB3ZWVrLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGNoZWNrIEdQQT9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJJbiB0aGUgRVJQIHN5c3RlbSwgZmluZCB0aGUgJ0Vucm9sbG1lbnQnIG9wdGlvbiBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHBhZ2UsIHdoaWNoIGlzIGxvY2F0ZWQgdW5kZXIgdGhlIG1lbnUgYm94LiBDbGljayBvbiAnVGVybSBTdGF0aXN0aWNzJyBhbmQgY2hvb3NlIHRoZSBzZW1lc3RlciBmb3Igd2hpY2ggeW91IHdpc2ggdG8gY2hlY2sgeW91ciBHUEEuIFRoZW4sIHJldmlldyB5b3VyIEdQQSBmb3IgdGhlIHNlbGVjdGVkIHNlbWVzdGVyLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246XG4gICAgICAgIFwiSG93IHRvIGNoZWNrIHRoZSB0b3RhbCBjcmVkaXRzIGNvbXBsZXRlZCBhbmQgdG90YWwgY3JlZGl0cyBsZWZ0P1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICAnRmluZCB0aGUgXCJNeSBBY2FkZW1pY3NcIiBvcHRpb24gaW4gdGhlIEVSUCBzeXN0ZW0gYWxvbmcgd2l0aCBvdGhlciBvcHRpb25zIGxpa2UgXCJFbnJvbCxcIiBcIlBsYW4sXCIgZXRjLiBuZWFyIHRoZSB0b3Agb2YgdGhlIHBhZ2UuIFRoZW4gc2VsZWN0IFwiVmlldyBNeSBBZHZpc2VtZW50IFJlcG9ydC5cIiBUaGlzIHJlcG9ydCB3aWxsIHNob3cgdGhlIGNyZWRpdHMgeW91IGhhdmUgYWxyZWFkeSBlYXJuZWQgYXMgd2VsbCBhcyB0aGUgY3JlZGl0cyB5b3Ugc3RpbGwgbmVlZCB0byBmaW5pc2guJyxcbiAgICB9LFxuICBdO1xuICBsZXQgZmFzdHJhY2tGYXFzID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgRmFzdHJhY2s/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgICdUbyBsZWF2ZSB0aGUgY2FtcHVzIGZvciBhIGRheSBvciBsb25nZXIsIHlvdSBtdXN0IG9idGFpbiBhcHByb3ZhbCBmcm9tIHRoZSB3YXJkZW4uIFRoaXMgYXBwcm92YWwgaXMgcmVmZXJyZWQgdG8gYXMgXCJmYXN0cmFjay5cIicsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgZG8gSSBhcHBseSBmb3IgRmFzdHJhY2s/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgICdQbGVhc2UgYWNjZXNzIHRoZSBTTlVMaW5rcyB3ZWJzaXRlIGFuZCBmaW5kIHRoZSBcImxvZ2luXCIgb3B0aW9uLiBPbmNlIGxvZ2dlZCBpbiwgeW91IHdpbGwgc2VlIGEgdmFyaWV0eSBvZiBjaG9pY2VzLiBDbGljayBvbiB0aGUgXCJmYXN0cmFja1wiIG9wdGlvbiB0byBhY2Nlc3MgdGhlIGZvcm0gZm9yIHJlcXVlc3RpbmcgcGVybWlzc2lvbiB0byBsZWF2ZSB0aGUgY2FtcHVzLCB3aGV0aGVyIGl0IGlzIGZvciBwZXJzb25hbCBvciBvZmZpY2lhbCByZWFzb25zLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IHRvIGRvIGluIGNhc2UgRmFzdHJhY2sgaXMgcmVqZWN0ZWQ/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiSWYgeW91ciBmYXN0cmFjayByZXF1ZXN0IGlzIHJlamVjdGVkIGZvciBhbnkgcmVhc29uLCB5b3UgaGF2ZSB0d28gb3B0aW9uczogWW91IGNhbiByZXZpZXcgdGhlIGZvcm0gdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnkgbWlzdGFrZXMsIGNvcnJlY3QgdGhlbSwgYW5kIHJlc3VibWl0IGl0IGZvciBhcHByb3ZhbC4gQWx0ZXJuYXRpdmVseSwgaWYgeW91IG5lZWQgdG8gbGVhdmUgdXJnZW50bHksIHlvdSBjYW4gZGlyZWN0bHkgYXBwcm9hY2ggdGhlIHJlY2VwdGlvbiBvZiB5b3VyIGhvc3RlbCBhbmQgcmVxdWVzdCBhbiBlYXJseSBhcHByb3ZhbCBmcm9tIHRoZW0uXCIsXG4gICAgfSxcbiAgXTtcbiAgbGV0IGhvc3RlbEZhcXMgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGNob29zZSByb29tbWF0ZXM/XCIsXG4gICAgICBhbnN3ZXI6IFwiVGhlIG9wdGlvbiB0byByZW1vdmUgcm9vbW1hdGVzIGlzIG5vIGxvbmdlciB2YWxpZCBhcyBvZiAyMDIzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gc2VsZWN0IHlvdXIgcm9vbT9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJQbGVhc2UgdmlzaXQgdGhlIFNOVUxpbmtzIHdlYnNpdGUgYW5kIGxvY2F0ZSB0aGUgJ2xvZ2luJyBvcHRpb24uIEFmdGVyIGxvZ2dpbmcgaW4sIHlvdSB3aWxsIGJlIHByZXNlbnRlZCB3aXRoIHZhcmlvdXMgY2hvaWNlcy4gQ2xpY2sgb24gdGhlICdIb3N0ZWwgTWFuYWdlbWVudCBTeXN0ZW0nIG9wdGlvbiwgYW5kIGZyb20gdGhlcmUsIGZpbmQgdGhlICdSb29tIFNlbGVjdGlvbiBSZXF1ZXN0JyBvcHRpb24uIER1cmluZyB0aGUgcm9vbSBzZWxlY3Rpb24gZGF5cyBhc3NpZ25lZCBieSB0aGUgbWFuYWdlbWVudCwgdGhpcyBzZWxlY3Rpb24gd2lsbCByZWRpcmVjdCB5b3UgdG8gYSBwYWdlIHdoZXJlIHlvdSBjYW4gY2hvb3NlIHlvdXIgcm9vbS5cIixcbiAgICB9LFxuICBdO1xuICBsZXQgYmxhY2tib2FyZEZhcXMgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyBCbGFja2JvYXJkP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIkJsYWNrYm9hcmQgaXMgYW4gb25saW5lIGxlYXJuaW5nIG1hbmFnZW1lbnQgc3lzdGVtIChMTVMpIHVzZWQgYnkgcHJvZmVzc29ycyB0byBwcm92aWRlIGNvdXJzZSBtYXRlcmlhbHMsIGluY2x1ZGluZyBub3RlcywgYXNzaWdubWVudHMsIGFubm91bmNlbWVudHMsIGFuZCBvdGhlciByZXNvdXJjZXMgdG8gc3R1ZGVudHMgaW4gYSBkaWdpdGFsIGZvcm1hdC5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBsb2cgaW4gYmxhY2tib2FyZD9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJUbyBhY2Nlc3MgdGhlIEJsYWNrYm9hcmQgcGxhdGZvcm0gYXQgU05VLCB5b3UgaGF2ZSB0d28gb3B0aW9ucy4gRmlyc3RseSwgeW91IGNhbiBuYXZpZ2F0ZSB0byBTTlUgbGlua3MgYW5kIHNlYXJjaCBmb3IgdGhlICdCbGFja2JvYXJkJyBvcHRpb24gb24gdGhlIHdlYnNpdGUuIEFsdGVybmF0aXZlbHksIHlvdSBtYXkgZGlyZWN0bHkgc2VhcmNoIGZvciAnU05VIEJsYWNrYm9hcmQnIG9uIHRoZSBpbnRlcm5ldC4gT25jZSB5b3UgZmluZCB0aGUgQmxhY2tib2FyZCBwb3J0YWwsIGxvZyBpbiB1c2luZyB5b3VyIFNOVSBlbWFpbCBJRCBhbmQgcGFzc3dvcmQgdG8gZ2FpbiBhY2Nlc3MgdG8gdGhlIHBsYXRmb3JtLi5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBhZGQgY291cnNlcyB0byBmYXZvcml0ZXM/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiQWZ0ZXIgbG9nZ2luZyBpbiB0byB5b3VyIEJsYWNrYm9hcmQgYWNjb3VudCwgZmluZCB0aGUgJ0NvdXJzZXMnIG9wdGlvbiBsb2NhdGVkIG9uIHRoZSBsZWZ0LWhhbmQgc2lkZSBvZiB0aGUgc2NyZWVuIGFuZCBjbGljayBvbiBpdC4gVGhpcyBhY3Rpb24gd2lsbCBkaXNwbGF5IGEgbGlzdCBvZiBhbGwgdGhlIGNvdXJzZXMgeW91IGFyZSBjdXJyZW50bHkgZW5yb2xsZWQgaW4uIFRvIG1hcmsgYSBjb3Vyc2UgYXMgYSBmYXZvcml0ZSwgbG9vayBmb3IgdGhlIHN0YXIgYnV0dG9uIHNpdHVhdGVkIG9uIHRoZSByaWdodC1oYW5kIHNpZGUgb2YgZWFjaCBjb3Vyc2UgaGVhZGluZy4gQ2xpY2sgb24gdGhlIHN0YXIgYnV0dG9uIHRvIGFkZCB0aGUgY291cnNlIHRvIHlvdXIgZmF2b3JpdGVzIGxpc3QuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgY2FuIEkgc3VibWl0IGFzc2lnbm1lbnRzIG9uIEJsYWNrYm9hcmQ/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiTm9ybWFsbHksIHRoZSBsaW5rIGZvciBzdWJtaXR0aW5nIGFzc2lnbm1lbnRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgJ0FjdGl2aXR5IFNlY3Rpb24nIG9mIHRoZSBjb3Vyc2UgcGFnZSwgYWxvbmcgd2l0aCB0aGUgZGVhZGxpbmUgZm9yIHN1Ym1pc3Npb24uIElmIHlvdSBhcmUgdW5hYmxlIHRvIGxvY2F0ZSB0aGUgbGluayB0aGVyZSwgeW91IGNhbiBmb2xsb3cgdGhlc2Ugc3RlcHM6IEZpcnN0LCBjbGljayBvbiB0aGUgJ0NvdXJzZXMnIG9wdGlvbiBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHNjcmVlbi4gTmV4dCwgZmluZCB0aGUgc3BlY2lmaWMgY291cnNlIGZvciB3aGljaCB5b3Ugd2FudCB0byBzdWJtaXQgdGhlIGFzc2lnbm1lbnQuIE9uY2UgeW91IGhhdmUgc2VsZWN0ZWQgdGhlIGNvdXJzZSwgbmF2aWdhdGUgdG8gdGhlICdDb250ZW50IFNlY3Rpb24nIG9mIHRoZSBjb3Vyc2UgcGFnZSBhbmQgbG9vayBmb3IgdGhlIGxpbmsgdG8gdGhlIGFzc2lnbm1lbnQgc3VibWlzc2lvbi5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBhY2Nlc3MgY29udGVudCBvbiBibGFja2JvYXJkP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIlVzdWFsbHksIHRoZSBtb3N0IHJlY2VudCBjb250ZW50IGlzIHZpc2libGUgb24gdGhlICdBY3Rpdml0eSBTdHJlYW0uJyBIb3dldmVyLCBpZiB5b3Ugd2FudCB0byBhY2Nlc3MgYWxsIHRoZSBjb250ZW50IGF2YWlsYWJsZSBmb3IgYSBwYXJ0aWN1bGFyIGNvdXJzZSwgZm9sbG93IHRoZXNlIHN0ZXBzOiBHbyB0byB0aGUgJ0NvdXJzZXMnIHNlY3Rpb24gYW5kIGNob29zZSB0aGUgc3BlY2lmaWMgY291cnNlIHlvdSB3aXNoIHRvIHZpZXcgdGhlIGNvbnRlbnQgb2YuIExvb2sgZm9yIHRoZSAnQ29udGVudCcgc2VjdGlvbiwgdHlwaWNhbGx5IGxvY2F0ZWQgb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBzY3JlZW4uIEJ5IGFjY2Vzc2luZyB0aGlzIHNlY3Rpb24sIHlvdSB3aWxsIGJlIGFibGUgdG8gc2VlIGFsbCB0aGUgY29udGVudCByZWxhdGVkIHRvIHRoZSBzZWxlY3RlZCBjb3Vyc2UuXCIsXG4gICAgfSxcbiAgXTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnBMaW5rXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZmFxRmlsbChlcnBGYXFzKTtcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmFzdExpbmtcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmYXFGaWxsKGZhc3RyYWNrRmFxcyk7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvc3RlTGlua1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZhcUZpbGwoaG9zdGVsRmFxcyk7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJiTGlua1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZhcUZpbGwoYmxhY2tib2FyZEZhcXMpO1xuICB9KTtcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGVycEdlbigpO1xufSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycGZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZXJwR2VuKCk7XG59KTtcblxuY29uc3QgYWJvdXRHZW4gPSAoKSA9PiB7XG4gIGdlbmVyYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYWJvdXRcIj5cbiAgPGRpdiBjbGFzcz1cImFib3V0Q29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJmaXJzdENvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Q29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb25cIj5XaGF0IGlzIDxzcGFuPlNudUFjYWRlbWlhPC9zcGFuPj88L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlclwiPlxuICAgICAgICAgIFVubG9jayB0aGUgZG9vcnMgdG8ga25vd2xlZGdlIGFuZCBlbWJhcmsgb24gYSBqb3VybmV5IG9mXG4gICAgICAgICAgaW50ZWxsZWN0dWFsIGdyb3d0aCB3aXRoIFNudUFjYWRlbWlhLCB5b3VyIHByZW1pZXIgb25saW5lXG4gICAgICAgICAgZWR1Y2F0aW9uIHBsYXRmb3JtLiBXaGV0aGVyIHlvdSdyZSBhIGN1cmlvdXMgbGVhcm5lciwgYVxuICAgICAgICAgIGRlZGljYXRlZCBzdHVkZW50LCBvciBhIGxpZmVsb25nIGVudGh1c2lhc3QuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aW1nIHNyYz1cIiR7Y29tcHV0ZXJ9XCIgYWx0PVwiXCIgd2lkdGg9XCIyNSVcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRDb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dENvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uXCI+XG4gICAgICAgICAgSG93PHNwYW4+IFNudUFjYWRlbWlhIDwvc3Bhbj5jYW4gaGVscCB5b3U/XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyXCI+XG4gICAgICAgICAgQW4gZWR1Y2F0aW9uIHdlYnNpdGUgY2FuIHNpZ25pZmljYW50bHkgZW5oYW5jZSB5b3VyIGxlYXJuaW5nXG4gICAgICAgICAgam91cm5leSBieSBwcm92aWRpbmcgYSBkaXZlcnNlIHJhbmdlIG9mIHJlc291cmNlcyB0YWlsb3JlZCB0b1xuICAgICAgICAgIHZhcmlvdXMgc3ViamVjdHMgYW5kIGxlYXJuaW5nIHN0eWxlcywgb2ZmZXJpbmcgZmxleGlibGVcbiAgICAgICAgICBzY2hlZHVsaW5nIGFuZCBzZWxmLXBhY2VkIHByb2dyZXNzIHRyYWNraW5nLCBjb25uZWN0aW5nIHlvdSB3aXRoXG4gICAgICAgICAgZXhwZXJ0IGluc3RydWN0b3JzLlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZyBzcmM9JHtoZWxwUGljfSBhbHQ9XCJcIiB3aWR0aD1cIjI1JVwiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGVhbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJtZWV0VGVhbVwiPk1FRVQgVEhFIFRFQU08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGVhbUJheVwiPlxuICAgICAgPGRpdj5Db3JlPC9kaXY+XG4gICAgICA8ZGl2PkRldiBUZWFtPC9kaXY+XG4gICAgICA8ZGl2PkNvbnRlbnQgVGVhbTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZWFtUGVvcGxlXCI+XG4gICAgICA8ZGl2IGRhdGEtYWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWlubmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmQtZnJvbnRcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuLi9zcmMvcmVhc291cmNlcy92YW1zaS5qcGdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWJhY2tcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cIkl0IGlzIHdoYXQgaXQgaXNcIjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsc1wiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktaW5zdGFncmFtXCI+PC9pXG4gICAgICAgICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW4ubGlua2VkaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWxpbmtlZGluXCI+PC9pXG4gICAgICAgICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9WYW1zaUthcGFydGhpL1NudWFjYWRlbWlhL3RyZWUvbWFpblwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWdpdGh1YlwiPjwvaVxuICAgICAgICAgICAgICAgICAgPjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3Bhbj5WYW1zaSBLYXBhcnRoaTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5Db2ZvdW5kZXI8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGVyc29uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1pbm5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWZyb250XCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3JjL3JlYXNvdXJjZXMvdmFtc2kuanBnXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1iYWNrXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+XCJJdCBpcyB3aGF0IGl0IGlzXCI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWluc3RhZ3JhbVwiPjwvaVxuICAgICAgICAgICAgICAgICAgPjwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luLmxpbmtlZGluLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1saW5rZWRpblwiPjwvaVxuICAgICAgICAgICAgICAgICAgPjwvYT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVmFtc2lLYXBhcnRoaS9TbnVhY2FkZW1pYS90cmVlL21haW5cIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1naXRodWJcIj48L2lcbiAgICAgICAgICAgICAgICAgID48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4+VmFtc2kgS2FwYXJ0aGk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+Q29mb3VuZGVyPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBkYXRhLWFjdGl2ZT1cImluYWN0aXZlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGRhdGEtYWN0aXZlPVwiaW5hY3RpdmVcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gO1xuICBsZXQgdGVhbUJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVhbUJheVwiKTtcbn07XG5cbi8vIGxldCB0ZWFtID0ge1xuLy8gICBbe1xuLy8gICAgIGZpcnN0TmFtZTpcIlZhbXNpXCIsIGxhc3ROYW1lOlwiS2FwYXJ0aGlcIiwgZGVzaWduYXRpb246IFwiQ29mb3VuZGVyXCIsIGluc3RhOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vX192YW1zaV9fMTcvXCIsIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi92YW1zaS1rYXBhcnRoaS0zNzE3MzAyMjJcIiwgZ2l0OlwiaHR0cHM6Ly9naXRodWIuY29tL1ZhbXNpS2FwYXJ0aGlcIiwgaW1nOlxuLy8gICB9LFxuLy8gICB7XG5cbi8vICAgfVxuLy8gXVxuLy8gfVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IGFib3V0QnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuc2xvZ2FuQnV0dG9uXCIpO1xuICBpZiAoYWJvdXRCdXR0b24pIHtcbiAgICBhYm91dEdlbigpOyAvLyBHZW5lcmF0ZSBcIkFib3V0IFVzXCIgY29udGVudFxuICB9XG59KTtcbmNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPXJhZGlvXVwiKTtcblxuY29uc3Qgc2xpZGVTaG93ID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhZGlvQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIHNldEludGVydmFsKCgpID0+IHt9LCAzMDAwKTtcbiAgfVxufTtcbnNsaWRlU2hvdygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9