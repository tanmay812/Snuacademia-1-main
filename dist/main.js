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
      <img src="../src/reasources/computer.svg" alt="" width="25%" />
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
      <img src="../src/reasources/helpLight.svg" alt="" width="25%" />
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
};

document.addEventListener("click", function (event) {
  const aboutButton = event.target.closest(".sloganButton");
  if (aboutButton) {
    aboutGen(); // Generate "About Us" content
  }
});
const radioButtons = document.querySelectorAll("input[type=radio]");

const slideShow = () => {
  for (let i = 0; i < radioButtons.length; i++) {
    setInterval(() => {
      console.log(i);
    }, 3000);
  }
};
slideShow();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsc0JBQXNCLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sV0FBVyxNQUFNLGFBQWEsYUFBYSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsU0FBUyxZQUFZLGFBQWEsT0FBTyxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFB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QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NudWFjYWRlbWlhLy4vc3JjL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL3NyYy9TdHlsZS5jc3M/YjZhOCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qVXNpbmcgQ3NzIHZhcmlhYmxlKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogd2hpdGU7XG4gIC0tZm9udC1jb2xvcjogYmxhY2s7XG4gIC0tc2Vjb25kYXJ5OiAjMDBiMGZmO1xufVxuXG4uZGFyayB7XG4gIC0tYmctY29sb3I6IGJsYWNrO1xuICAtLWZvbnQtY29sb3I6IHdoaXRlO1xuICAtLXNlY29uZGFyeTogIzUzNmRmZTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBmb250LWZhbWlseTogXCJETSBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBtYXgoNTAwcHgsIDUwJSk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogbWF4KDE1cHgsIDF2dyk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLm9wdGlvbnMgPiBkaXY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuXG4uaG9tZSB7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG59XG5cbi5zbG9nYW4ge1xuICBmb250LXNpemU6IG1heCgzLjV2dywgNDBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5zbG9nYW4tcGFyYSB7XG4gIGZvbnQtc2l6ZTogbWF4KDF2dywgMjBweCk7XG4gIHdpZHRoOiBtYXgoODAlLCAyODBweCk7XG59XG5cbmkge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIHN0dWR5LW1hdGVyaWFsIHBhZ2UgKi9cbi5zdHVkeSxcbi5yb2FkTWFwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFnbGluZSB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgZm9udC1zaXplOiBtaW4oOHZ3LCA3MHB4KTtcbiAgZm9udC13ZWlnaHQ6IDk1MDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWFyY2gtYmFyIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICB3aWR0aDogbWF4KDQwdncsIDMwMHB4KTtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGdhcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI2NvdXJzZS1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogKC0tZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmV5O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5jb3Vyc2VzLFxuLnJvYWRzIHtcbiAgd2lkdGg6IDkwJTtcblxuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDMwcHg7XG59XG5cbi5jb3Vyc2VCb3gge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4uZ2xpbmsge1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuYTp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuLmdlbmVyYXRlIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4vKmVycCBtYW5hZ2VtZW50Ki9cbi5saW5rU2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5lcnBNYW5hZ2VtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saW5rU2VjdGlvbiA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDE1cHgpO1xuICBoZWlnaHQ6IG1heCgzNXB4LCA1dmgpO1xuICB3aWR0aDogbWF4KDM1MHB4LCAxNXZ3KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlua1NlY3Rpb24gPiBkaXY6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogMTAwbXM7XG59XG4uc3ViLXRhZyB7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZhcXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA3dmg7XG4gIHdpZHRoOiA5NSU7XG4gIGdhcDogMjBweDtcbn1cbi5mYXFzID4gZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uc29sIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yb2FkQm94IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbi5nbGluay1yIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB3aWR0aDogMzMlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmdsaW5rLXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbn1cbmEuYXIge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi8qIGZvb3RlciAqL1xuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMjMsIDI0KTtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLnJlYXNvdXJjZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5yZWFzb3VyY2VzID4gZGl2OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWN0ID4gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRhY3QgPiBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG5cbi5mb290LWxvZ28ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuLmZvb3QtbG9nbzpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLmdlbmVyYXRlIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLypBYm91dCB1cyovXG4uc2xvZ2FuQnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNHZ3O1xuICB3aWR0aDogbWF4KDIwMHB4LCAyMHZ3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAyMHB4KTtcbn1cbi5zbG9nYW5CdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWJvdXQge1xuICBtYXJnaW4tdG9wOiAxdmg7XG4gIHBhZGRpbmc6IDV2dztcbn1cbi5hYm91dENvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwdnc7XG59XG4uZmlyc3RDb250ZW50LFxuLnNlY29uZENvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1dnc7XG4gIHBhZGRpbmctYm90dG9tOiA4dnc7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbn1cbi5zZWNvbmRDb250ZW50IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLnRleHRDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5xdWVzdGlvbiB7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnF1ZXN0aW9uID4gc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLmFuc3dlciB7XG4gIGZvbnQtc2l6ZTogbWluKDJ2dywgMzBweCk7XG59XG4udGVhbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogbWluKDZ2dywgODBweCk7XG59XG4ubWVldFRlYW0ge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogNS41dnc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLnRlYW1CYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udGVhbUJheSA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAxM3B4KTtcbiAgd2lkdGg6IDI1dnc7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnRlYW1CYXkgPiBkaXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGVhbVBlb3BsZSB7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XG59XG4udGVhbVBlb3BsZSA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTAlO1xufVxuLypmbGlwY2FyZCovXG4ucGVyc29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGlwLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IG1pbigyNXZ3LCAzMDBweCk7XG4gIGhlaWdodDogbWluKDI1dncsIDMwMHB4KTtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMC44dnc7XG59XG5cbi8qIFRoaXMgY29udGFpbmVyIGlzIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xuLmZsaXAtY2FyZC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXG4uZmxpcC1jYXJkLWZyb250LFxuLmZsaXAtY2FyZC1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC8qIFNhZmFyaSAqL1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi8qIFN0eWxlIHRoZSBmcm9udCBzaWRlIChmYWxsYmFjayBpZiBpbWFnZSBpcyBtaXNzaW5nKSAqL1xuLmZsaXAtY2FyZC1mcm9udCB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLyogU3R5bGUgdGhlIGJhY2sgc2lkZSAqL1xuLmZsaXAtY2FyZC1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBmb250LXNpemU6IG1heCgxLjJ2dywgMTNweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLnNvY2lhbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiBtYXgoNXB4LCAxMCUpO1xuICB3aWR0aDogNzAlO1xufVxuLnNvY2lhbHMgPiBhID4gaSB7XG4gIGZvbnQtc2l6ZTogbWF4KDJ2dywgMTVweCk7XG59XG4ucGVyc29uID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogbWF4KDEuM3Z3LCAxM3B4KTtcbn1cbi8qc2xpZGVyKi9cblxuI3NsaWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwJTtcbiAgbWluLWhlaWdodDogMzB2dztcbiAgbWFyZ2luOiA4MHB4IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIkRNIHNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcGVyc3BlY3RpdmU6IDE0MDBweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMDglO1xuICB3aWR0aDogNHZ3O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qaW5wdXRbdHlwZT1yYWRpb106bnRoLWNoaWxkKDUpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xuICBvcGFjaXR5OiAxO1xufSovXG5cbmgyIHtcbiAgZm9udC1zaXplOiAyLjV2dztcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnAge1xuICB3aWR0aDogNTAlO1xuICBmb250LXNpemU6IG1pbigzMHB4LCAxLjV2dyk7XG59XG5cbiNzbGlkZXIgbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgZWFzZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5zbGlkZXJDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jc2xpZGUxIHtcbiAgYmFja2dyb3VuZDogIzA2Njg5Mjtcbn1cbi5kYXJrICNzbGlkZTEge1xuICBiYWNrZ3JvdW5kOiAjMjMyZTZmO1xufVxuXG4jc2xpZGUyIHtcbiAgYmFja2dyb3VuZDogIzBkOTdkMjtcbn1cbi5kYXJrICNzbGlkZTIge1xuICBiYWNrZ3JvdW5kOiAjMzg0YWIyO1xufVxuXG4jc2xpZGUzIHtcbiAgYmFja2dyb3VuZDogIzAwYjBmZjtcbn1cbi5kYXJrICNzbGlkZTMge1xuICBiYWNrZ3JvdW5kOiAjNTM2ZGZlO1xufVxuLypcbiNzbGlkZTQge1xuICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XG59XG5cbiNzbGlkZTUge1xuICBiYWNrZ3JvdW5kOiB2aW9sZXQ7XG59Ki9cblxuLyogU2xpZGVyIEZ1bmN0aW9uYWxpdHkgKi9cblxuLyogQWN0aXZlIFNsaWRlICovXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTEsXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTIsXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTMsXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTQsXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTUge1xuICBib3gtc2hhZG93OiAwIDEzcHggMjZweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMTJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwcHgpO1xufVxuXG4vKiBOZXh0IFNsaWRlICovXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTIsXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTMsXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTQsXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTUsXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTEge1xuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNSUsIDAsIC0xMDBweCk7XG59XG5cbi8qIE5leHQgdG8gTmV4dCBTbGlkZSAqL1xuI3MxOmNoZWNrZWQgfiAjc2xpZGUzLFxuI3MyOmNoZWNrZWQgfiAjc2xpZGU0LFxuI3MzOmNoZWNrZWQgfiAjc2xpZGU1LFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUxLFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUyIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMCUsIDAsIC0yNTBweCk7XG59XG5cbi8qIFByZXZpb3VzIHRvIFByZXZpb3VzIFNsaWRlICovXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTQsXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTUsXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTEsXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTIsXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTMge1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMCUsIDAsIC0yNTBweCk7XG59XG5cbi8qIFByZXZpb3VzIFNsaWRlICovXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTUsXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTEsXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTIsXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTMsXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTQge1xuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAtMTAwcHgpO1xufVxuXG4vKlJlc3BvbnNpdmUqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLypob21lcGFnZSB0YWdsaW5lcyovXG4gIGJvZHkge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgI2ltYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ob21lIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgLnRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5zbG9nYW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc2xvZ2FuLXBhcmEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAvKnNsaWRlciovXG4gICNzbGlkZXIge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgI3NsaWRlciBsYWJlbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5zbGlkZXJDb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IG1heCgyLjZ2dywgMTRweCk7XG4gIH1cbiAgcCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmb250LXNpemU6IG1heCgyLjJ2dywgMTFweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwNCU7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7QUFDckI7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUEsd0JBQXdCO0FBQ3hCOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7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QUF1QztBQUN6Qzs7QUFFQSxtQkFBbUI7QUFDbkI7Ozs7O0VBS0UsdUVBQXVFO0VBQ3ZFLHVDQUF1QztBQUN6Qzs7QUFFQSxhQUFhO0FBQ2I7RUFDRSxvQkFBb0I7RUFDcEI7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0EsU0FBUztFQUNUO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qVXNpbmcgQ3NzIHZhcmlhYmxlKi9cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiB3aGl0ZTtcXG4gIC0tZm9udC1jb2xvcjogYmxhY2s7XFxuICAtLXNlY29uZGFyeTogIzAwYjBmZjtcXG59XFxuXFxuLmRhcmsge1xcbiAgLS1iZy1jb2xvcjogYmxhY2s7XFxuICAtLWZvbnQtY29sb3I6IHdoaXRlO1xcbiAgLS1zZWNvbmRhcnk6ICM1MzZkZmU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxufVxcblxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiBtYXgoNTAwcHgsIDUwJSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogbWF4KDE1cHgsIDF2dyk7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5vcHRpb25zID4gZGl2OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uaG9tZSB7XFxuICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG59XFxuXFxuLnNsb2dhbiB7XFxuICBmb250LXNpemU6IG1heCgzLjV2dywgNDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5zbG9nYW4tcGFyYSB7XFxuICBmb250LXNpemU6IG1heCgxdncsIDIwcHgpO1xcbiAgd2lkdGg6IG1heCg4MCUsIDI4MHB4KTtcXG59XFxuXFxuaSB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogc3R1ZHktbWF0ZXJpYWwgcGFnZSAqL1xcbi5zdHVkeSxcXG4ucm9hZE1hcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFnbGluZSB7XFxuICBtYXJnaW4tdG9wOiA1dmg7XFxuICBmb250LXNpemU6IG1pbig4dncsIDcwcHgpO1xcbiAgZm9udC13ZWlnaHQ6IDk1MDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNlYXJjaC1iYXIge1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICB3aWR0aDogbWF4KDQwdncsIDMwMHB4KTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI2NvdXJzZS1zZWxlY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uY291cnNlcyxcXG4ucm9hZHMge1xcbiAgd2lkdGg6IDkwJTtcXG5cXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uY291cnNlQm94IHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5nbGluayB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5hOnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG4uZ2VuZXJhdGUge1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi8qZXJwIG1hbmFnZW1lbnQqL1xcbi5saW5rU2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiA1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmVycE1hbmFnZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubGlua1NlY3Rpb24gPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDE1cHgpO1xcbiAgaGVpZ2h0OiBtYXgoMzVweCwgNXZoKTtcXG4gIHdpZHRoOiBtYXgoMzUwcHgsIDE1dncpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubGlua1NlY3Rpb24gPiBkaXY6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxufVxcbi5zdWItdGFnIHtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbWFyZ2luLXRvcDogMnZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZhcXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiA3dmg7XFxuICB3aWR0aDogOTUlO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uZmFxcyA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4uc29sIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5yb2FkQm94IHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG4uZ2xpbmstciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICB3aWR0aDogMzMlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uZ2xpbmstcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcbmEuYXIge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi8qIGZvb3RlciAqL1xcbi5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAyMywgMjQpO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnJlYXNvdXJjZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnJlYXNvdXJjZXMgPiBkaXY6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb250YWN0ID4gYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcbi5jb250YWN0ID4gYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmZvb3QtbG9nbyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcbi5mb290LWxvZ286aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcbi5nZW5lcmF0ZSB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi8qQWJvdXQgdXMqL1xcbi5zbG9nYW5CdXR0b24ge1xcbiAgbWFyZ2luLXRvcDogNHZ3O1xcbiAgd2lkdGg6IG1heCgyMDBweCwgMjB2dyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDIwcHgpO1xcbn1cXG4uc2xvZ2FuQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hYm91dCB7XFxuICBtYXJnaW4tdG9wOiAxdmg7XFxuICBwYWRkaW5nOiA1dnc7XFxufVxcbi5hYm91dENvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHZ3O1xcbn1cXG4uZmlyc3RDb250ZW50LFxcbi5zZWNvbmRDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1dnc7XFxuICBwYWRkaW5nLWJvdHRvbTogOHZ3O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG4uc2Vjb25kQ29udGVudCB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4udGV4dENvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5xdWVzdGlvbiB7XFxuICBmb250LXNpemU6IDN2dztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5xdWVzdGlvbiA+IHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcbi5hbnN3ZXIge1xcbiAgZm9udC1zaXplOiBtaW4oMnZ3LCAzMHB4KTtcXG59XFxuLnRlYW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiBtaW4oNnZ3LCA4MHB4KTtcXG59XFxuLm1lZXRUZWFtIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogNS41dnc7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxufVxcbi50ZWFtQmF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udGVhbUJheSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDEzcHgpO1xcbiAgd2lkdGg6IDI1dnc7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnRlYW1CYXkgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRlYW1QZW9wbGUge1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG4udGVhbVBlb3BsZSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMCU7XFxufVxcbi8qZmxpcGNhcmQqL1xcbi5wZXJzb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZmxpcC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IG1pbigyNXZ3LCAzMDBweCk7XFxuICBoZWlnaHQ6IG1pbigyNXZ3LCAzMDBweCk7XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMC44dnc7XFxufVxcblxcbi8qIFRoaXMgY29udGFpbmVyIGlzIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xcbi5mbGlwLWNhcmQtaW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi8qIERvIGFuIGhvcml6b250YWwgZmxpcCB3aGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIHRoZSBmbGlwIGJveCBjb250YWluZXIgKi9cXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcblxcbi8qIFBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXFxuLmZsaXAtY2FyZC1mcm9udCxcXG4uZmxpcC1jYXJkLWJhY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBTYWZhcmkgKi9cXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLyogU3R5bGUgdGhlIGZyb250IHNpZGUgKGZhbGxiYWNrIGlmIGltYWdlIGlzIG1pc3NpbmcpICovXFxuLmZsaXAtY2FyZC1mcm9udCB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi8qIFN0eWxlIHRoZSBiYWNrIHNpZGUgKi9cXG4uZmxpcC1jYXJkLWJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAxM3B4KTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG4uc29jaWFscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IG1heCg1cHgsIDEwJSk7XFxuICB3aWR0aDogNzAlO1xcbn1cXG4uc29jaWFscyA+IGEgPiBpIHtcXG4gIGZvbnQtc2l6ZTogbWF4KDJ2dywgMTVweCk7XFxufVxcbi5wZXJzb24gPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogbWF4KDEuM3Z3LCAxM3B4KTtcXG59XFxuLypzbGlkZXIqL1xcblxcbiNzbGlkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1pbi1oZWlnaHQ6IDMwdnc7XFxuICBtYXJnaW46IDgwcHggYXV0bztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gc2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwZXJzcGVjdGl2ZTogMTQwMHB4O1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDEwOCU7XFxuICB3aWR0aDogNHZ3O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKmlucHV0W3R5cGU9cmFkaW9dOm50aC1jaGlsZCg1KSB7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XFxuICBvcGFjaXR5OiAxO1xcbn0qL1xcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMi41dnc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5wIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LXNpemU6IG1pbigzMHB4LCAxLjV2dyk7XFxufVxcblxcbiNzbGlkZXIgbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5zbGlkZXJDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jc2xpZGUxIHtcXG4gIGJhY2tncm91bmQ6ICMwNjY4OTI7XFxufVxcbi5kYXJrICNzbGlkZTEge1xcbiAgYmFja2dyb3VuZDogIzIzMmU2ZjtcXG59XFxuXFxuI3NsaWRlMiB7XFxuICBiYWNrZ3JvdW5kOiAjMGQ5N2QyO1xcbn1cXG4uZGFyayAjc2xpZGUyIHtcXG4gIGJhY2tncm91bmQ6ICMzODRhYjI7XFxufVxcblxcbiNzbGlkZTMge1xcbiAgYmFja2dyb3VuZDogIzAwYjBmZjtcXG59XFxuLmRhcmsgI3NsaWRlMyB7XFxuICBiYWNrZ3JvdW5kOiAjNTM2ZGZlO1xcbn1cXG4vKlxcbiNzbGlkZTQge1xcbiAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xcbn1cXG5cXG4jc2xpZGU1IHtcXG4gIGJhY2tncm91bmQ6IHZpb2xldDtcXG59Ki9cXG5cXG4vKiBTbGlkZXIgRnVuY3Rpb25hbGl0eSAqL1xcblxcbi8qIEFjdGl2ZSBTbGlkZSAqL1xcbiNzMTpjaGVja2VkIH4gI3NsaWRlMSxcXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTIsXFxuI3MzOmNoZWNrZWQgfiAjc2xpZGUzLFxcbiNzNDpjaGVja2VkIH4gI3NsaWRlNCxcXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTUge1xcbiAgYm94LXNoYWRvdzogMCAxM3B4IDI2cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDEycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDBweCk7XFxufVxcblxcbi8qIE5leHQgU2xpZGUgKi9cXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTIsXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUzLFxcbiNzMzpjaGVja2VkIH4gI3NsaWRlNCxcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTUsXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUxIHtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNSUsIDAsIC0xMDBweCk7XFxufVxcblxcbi8qIE5leHQgdG8gTmV4dCBTbGlkZSAqL1xcbiNzMTpjaGVja2VkIH4gI3NsaWRlMyxcXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTQsXFxuI3MzOmNoZWNrZWQgfiAjc2xpZGU1LFxcbiNzNDpjaGVja2VkIH4gI3NsaWRlMSxcXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTIge1xcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAlLCAwLCAtMjUwcHgpO1xcbn1cXG5cXG4vKiBQcmV2aW91cyB0byBQcmV2aW91cyBTbGlkZSAqL1xcbiNzMTpjaGVja2VkIH4gI3NsaWRlNCxcXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTUsXFxuI3MzOmNoZWNrZWQgfiAjc2xpZGUxLFxcbiNzNDpjaGVja2VkIH4gI3NsaWRlMixcXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTMge1xcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwJSwgMCwgLTI1MHB4KTtcXG59XFxuXFxuLyogUHJldmlvdXMgU2xpZGUgKi9cXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTUsXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUxLFxcbiNzMzpjaGVja2VkIH4gI3NsaWRlMixcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTMsXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGU0IHtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAtMTAwcHgpO1xcbn1cXG5cXG4vKlJlc3BvbnNpdmUqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAvKmhvbWVwYWdlIHRhZ2xpbmVzKi9cXG4gIGJvZHkge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgI2ltYWdlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5ob21lIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgfVxcbiAgLnRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLnNsb2dhbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5zbG9nYW4tcGFyYSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC8qc2xpZGVyKi9cXG4gICNzbGlkZXIge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgfVxcbiAgI3NsaWRlciBsYWJlbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIC5zbGlkZXJDb250ZW50IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiBtYXgoMi42dncsIDE0cHgpO1xcbiAgfVxcbiAgcCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDIuMnZ3LCAxMXB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTA0JTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcbmltcG9ydCBsb2dvMSBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvMTAucG5nXCI7XG5pbXBvcnQgbG9nbzIgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzLzkucG5nXCI7XG5pbXBvcnQgZHBpYyBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvZGFya21vZGUuc3ZnXCI7XG5pbXBvcnQgbHBpYyBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvbGlnaHRtb2RlLnN2Z1wiO1xuaW1wb3J0IHNwaWMxIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9nb2FsLnN2Z1wiO1xuaW1wb3J0IHNwaWMyIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9qb3VybmV5LnN2Z1wiO1xuaW1wb3J0IHNwaWMzIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9vcGVuc291cmNlLnN2Z1wiO1xuXG4vL0ludGlhbCBsb2dvIGdlbmVyYXRpb25cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGdcIikuc3JjID0gbG9nbzE7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ0LWxvZ29cIikuc3JjID0gbG9nbzI7XG4vL2ludGlhbCBob21lcGFnZSBwaWMgZ2VuZXJhdGlvblxuY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKTtcbmltZy5zcmMgPSBscGljO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb2FsXCIpLnNyYyA9IHNwaWMxO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqb3VybmV5XCIpLnNyYyA9IHNwaWMyO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvc1wiKS5zcmMgPSBzcGljMztcbi8vRGFya01vZGUgTGlnaHRNb2RlIFRvZ2dsZVxuY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVEYXJrXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW9uc1wiKTtcblxudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImJpLW1vb25cIik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxnXCIpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpO1xuXG4gIC8vc2VlIHdoaWNoIG1vZGUgaXQgaXNcbiAgbGV0IGlzRGFya01vZGUgPSBib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIik7XG5cbiAgaWYgKGlzRGFya01vZGUpIHtcbiAgICBsb2dvLnNyYyA9IGxvZ28yO1xuICAgIGlmIChpbWcpIHtcbiAgICAgIGltZy5zcmMgPSBkcGljO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsb2dvLnNyYyA9IGxvZ28xO1xuICAgIGlmIChpbWcpIHtcbiAgICAgIGltZy5zcmMgPSBscGljO1xuICAgIH1cbiAgfVxufSk7XG5cbmxldCBnZW5lcmF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VuZXJhdGVcIik7XG5jb25zdCBob2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG5jb25zdCBzdHVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHVkeVwiKTtcbmNvbnN0IHJvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvYWRcIik7XG5jb25zdCBlcnAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycFwiKTtcblxuLy9HZW5lcmF0ZSBob21lUGFnZSBkeW5hbWljYWxseVxubGV0IGhvbWVnZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGlzRGFya01vZGUgPSBib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIik7XG4gIGhvZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKVwiO1xuICBzdHVkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICByb2FkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICBlcnAuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIGdlbmVyYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiaG9tZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xvZ2FuXCI+XG4gICAgICAgICAgICAgIFNpbXBsaWZ5IGFjYWRlbWljcyB3aXRoIHVzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbG9nYW4tcGFyYVwiPlxuICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gU251QWNhZGVtaWEsIHRoZSB1bHRpbWF0ZSBzdHVkZW50IGRlc2lnbmVkIHdlYnNpdGUgdGhhdCBoZWxwcyBpbiBzaW1wbGlmeWluZyBzdHVkeSBsaWZlXG4gICAgICAgICAgICAgICAgYXQgU05VXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbG9nYW5CdXR0b25cIj5BYm91dCB1czwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aW1nIGlkPVwiaW1hZ2VcIiBzcmM9JyR7bHBpY30nIHN0eWxlPVwid2lkdGg6NTAlO21hcmdpbi1yaWdodDogMTAlO1wiPlxuPC9kaXY+XG48c2VjdGlvbiBpZD1cInNsaWRlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNsaWRlclwiIGlkPVwiczFcIiBjaGVja2VkIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2xpZGVyXCIgaWQ9XCJzMlwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2xpZGVyXCIgaWQ9XCJzM1wiIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJzMVwiIGlkPVwic2xpZGUxXCJcbiAgICAgICAgICA+PGgyPk91ciBHb2FsPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyQ29udGVudFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3NwaWMxfVwiIHdpZHRoPVwiNTAlXCIgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTbnVBY2FkZW1pYSBhaW1zIHRvIGFzc2lzdCBzdHVkZW50cyB0aHJvdWdob3V0IHRoZWlyIGFjYWRlbWljXG4gICAgICAgICAgICAgIGpvdXJuZXkgd2l0aCBzdHVkeSBtYXRlcmlhbHMsIG5vdGVzLCBQWVFzLCBhbmQgYXNzaWdubWVudHMuIE91clxuICAgICAgICAgICAgICB3ZWJzaXRlIGFsc28gYWRkcmVzc2VzIGNvbW1vbiBxdWVzdGlvbnMgYWJvdXQgRVJQLCBCbGFja2JvYXJkLCBhbmRcbiAgICAgICAgICAgICAgb3RoZXIgZ2VuZXJhbCBxdWVyaWVzIGZvciBmcmVzaGVycy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGZvcj1cInMyXCIgaWQ9XCJzbGlkZTJcIlxuICAgICAgICAgID48aDI+T3VyIEpvdXJuZXk8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJDb250ZW50XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7c3BpYzJ9XCIgd2lkdGg9XCI1MCVcIiAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE91ciBqb3VybmV5IGJlZ2FuIG9uIGEgcmFuZG9tIGFmdGVybm9vbiBpbiBvdXIgaG9zdGVsIHJvb20sIHdoZXJlXG4gICAgICAgICAgICAgIHdlIHN0YXJ0ZWQgd29ya2luZyBvbiB0aGlzIHByb2plY3Qgd2l0aCB0aGUgc3VwcG9ydCBvZiBvdXIgcGVlcnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJzM1wiIGlkPVwic2xpZGUzXCJcbiAgICAgICAgICA+PGgyPk9wZW4gU291cmNlIENvbnRyaWJ1dGlvbjwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzcGljM31cIiB3aWR0aD1cIjQwJVwiIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT3VyIHdlYnNpdGUgaXMgb3Blbi1zb3VyY2UsIGFsbG93aW5nIHN0dWRlbnRzIHRvIGFjY2VzcyBhbmRcbiAgICAgICAgICAgICAgY29udHJpYnV0ZSB0byB0aGUgc291cmNlIGNvZGUgdGhyb3VnaCBvdXIgR2l0SHViIHJlcG9zaXRvcnkuIFdlXG4gICAgICAgICAgICAgIHdlbGNvbWUgeW91ciBwYXJ0aWNpcGF0aW9uIGFuZCBjb2xsYWJvcmF0aW9uIGluIG1ha2luZyBvdXJcbiAgICAgICAgICAgICAgcGxhdGZvcm0gZXZlbiBiZXR0ZXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L3NlY3Rpb24+YDtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpO1xuICBpZiAoaXNEYXJrTW9kZSkge1xuICAgIGlmIChpbWcpIHtcbiAgICAgIGltZy5zcmMgPSBkcGljO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaW1nKSB7XG4gICAgICBpbWcuc3JjID0gbHBpYztcbiAgICB9XG4gIH1cbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZWdlbik7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVmXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lZ2VuKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdC1sb2dvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lZ2VuKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZWdlbik7XG4vL2dlbmVyYXRlIFN0dWR5IE1hdGVyaWFsIFRhYlxubGV0IHN0dWR5R2VuID0gKCkgPT4ge1xuICBob2Uuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIHN0dWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIycHggc29saWQgdmFyKC0tZm9udC1jb2xvcilcIjtcbiAgcm9hZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgZXJwLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICBnZW5lcmF0ZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInN0dWR5XCI+XG4gICAgPGRpdiBjbGFzcz1cInRhZ2xpbmVcIj5cbiAgICAgICAgPHNwYW4+V2hlcmUgVGV4dGJvb2tzPC9zcGFuPlxuICAgICAgICA8c3Bhbj5BbmQgRHJlYW1zIENvbGxpZGU8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3ViLXRhZ1wiPkV4cGxvcmUsIERpc2NvdmVyLCBhbmQgU2hhcGUgWW91ciBBY2FkZW1pYyBKb3VybmV5IHdpdGggTGltaXRsZXNzIFBvc3NpYmlsaXRpZXM8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1iYXJcIj5cbiAgICAgICAgPHNwYW4+PGkgY2xhc3M9XCJiaSBiaS1zZWFyY2hcIiBzdHlsZT1cImZvbnQtc2l6ZTogbWF4KDIwcHgsMS41dncpO1wiID48L2k+PC9zcGFuPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvdXJzZS1zZWxlY3RcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIGRhdGEtc2VhcmNoPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb3Vyc2VzXCI+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuPC9kaXY+YDtcblxuICBjb25zdCBnZW5lcmF0ZUNvdXJzZXMgPSAoYXJyYXksIGxpbmtBcnJheSkgPT4ge1xuICAgIGxldCBjb3Vyc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3Vyc2VzXCIpO1xuICAgIGxldCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZS1zZWxlY3RcIik7XG5cbiAgICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIC8vaW5wdXQgYmVpbmcgdHlwZWQgaW5zaWRlIHRoZSBzZWFyY2ggYmFyXG4gICAgICBjb25zdCBzZWFyY2hUZXh0ID0gc2VhcmNoQmFyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvdXJzZXNcbiAgICAgIGNvdXJzZXMuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjb3Vyc2VOYW1lID0gYXJyYXlbaW5kZXhdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rQXJyYXlbaW5kZXhdO1xuXG4gICAgICAgIGlmIChjb3Vyc2VOYW1lLmluY2x1ZGVzKHNlYXJjaFRleHQpKSB7XG4gICAgICAgICAgbGV0IGNvdXJzZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY291cnNlRGl2LmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VCb3hcIik7XG4gICAgICAgICAgY291cnNlcy5hcHBlbmRDaGlsZChjb3Vyc2VEaXYpO1xuICAgICAgICAgIGNvdXJzZURpdi5pbm5lckhUTUwgPSBgPHNwYW4gaWQ9XCJjb3Vyc2UtJHtpbmRleH1cIj4ke2FycmF5W2luZGV4XX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbGlua1wiICBpZD1cImxpbmstJHtpbmRleH1cIj48YSBocmVmPVwiJHtsaW5rfVwiIHRhcmdldD1cIl9ibGFua1wiPkNvbnRlbnQ8L2E+PC9zcGFuPmA7XG5cbiAgICAgICAgICBjb3Vyc2VEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY291cnNlLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY291cnNlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY291cnNlLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvL1RvIGdlbmVyYXRlIGNvdXJzZXMgd2hlbiB5b3UgbG9hZCB1cCBwYWdlXG4gICAgc2VhcmNoQmFyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xuICB9O1xuXG4gIC8vZXhhbXBsZSBhcnJheXNcbiAgbGV0IGNvdXJzZUFyciA9IFtcIkRFUzEwMVwiLCBcIkZBQzIwMlwiLCBcIk1FQzEwNFwiLCBcIk1LVDIwMlwiLCBcIk9ITTQwMVwiLCBcIlNUTTIwNFwiXTtcbiAgbGV0IGxpbmtBcnIgPSBbXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xcGZXSDBKMmVrN3l4VE1ibW9Ddi00WVFQQjVYS09MSHI/dXNwPXNoYXJpbmdcIixcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzFxN1VzS1dGZzVvZFQ2clg1N1Q0TEFyaFNZNWVMYTJSSj91c3A9c2hhcmluZ1wiLFxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMU5sckhLQ1A1MmI1M09RaVljZEJnTzdOdkw5ZVE4MXp2P3VzcD1zaGFyaW5nXCIsXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xdHpJczJ1eDZsUjF1OGVUOWZUQUQtNUpYQmtoQUdxcmI/dXNwPWRyaXZlX2xpbmtcIixcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzFfLW1rZFFIQ3FwUGNlaVFlWnc3ajkxcjBoVmNVaG1oSj91c3A9c2hhcmluZ1wiLFxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMVo5QnFKQzF2Q25NeEZTUlQ4WU1hZkIxc2RsTEF2OG11P3VzcD1zaGFyaW5nXCIsXG4gIF07XG4gIGdlbmVyYXRlQ291cnNlcyhjb3Vyc2VBcnIsIGxpbmtBcnIpO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3R1ZHlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0dWR5R2VuKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3R1ZHlmXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdHVkeUdlbik7XG5cbi8vR2VuZXJhdGUgUm9hZG1hcFxuY29uc3Qgcm9hZEdlbiA9ICgpID0+IHtcbiAgaG9lLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICBzdHVkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICByb2FkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpXCI7XG4gIGVycC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgZ2VuZXJhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJyb2FkTWFwc1wiPlxuICA8ZGl2IGNsYXNzPVwidGFnbGluZVwiPlxuICAgICAgPHNwYW4+Q2hvb3NlPC9zcGFuPlxuICAgICAgPHNwYW4+WW91ciBBY2FkZW1pYyBUcmFpbDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3ViLXRhZ1wiPkNoYXJ0IFlvdXIgQWNhZGVtaWMgSm91cm5leTogRXhwbG9yZSBNYWpvciBhbmQgTWlub3IgUGF0aHM8L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic2VhcmNoLWJhclwiPlxuICAgICAgPHNwYW4+PGkgY2xhc3M9XCJiaSBiaS1zZWFyY2hcIiBzdHlsZT1cImZvbnQtc2l6ZTogbWF4KDIwcHgsMS41dncpO1wiID48L2k+PC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb3Vyc2Utc2VsZWN0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBkYXRhLXNlYXJjaD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJyb2Fkc1wiPlxuICAgICAgXG4gIDwvZGl2PmA7XG4gIGxldCByb2FkQXJyID0gW1wiQ1NFXCIsIFwiRUNFXCIsIFwiRUVFXCIsIFwiTUVDSFwiLCBcIkJNU1wiLCBcIkVDT1wiXTtcbiAgZ2VuZXJhdGVSb2FkKHJvYWRBcnIpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVSb2FkID0gKGFycmF5KSA9PiB7XG4gIGxldCByb2FkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm9hZHNcIik7XG4gIGxldCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZS1zZWxlY3RcIik7XG5cbiAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgLy9pbnB1dCBiZWluZyB0eXBlZCBpbnNpZGUgdGhlIHNlYXJjaCBiYXJcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gc2VhcmNoQmFyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBDbGVhciBleGlzdGluZyBjb3Vyc2VzXG4gICAgcm9hZHMuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGJyYW5jaE5hbWUgPSBhcnJheVtpbmRleF0udG9Mb3dlckNhc2UoKTtcbiAgICAgIC8vY29uc3QgbGluayA9IGxpbmtBcnJheVtpbmRleF07XG4gICAgICBpZiAoYnJhbmNoTmFtZS5pbmNsdWRlcyhzZWFyY2hUZXh0KSkge1xuICAgICAgICBsZXQgbWFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFwRGl2LmNsYXNzTGlzdC5hZGQoXCJyb2FkQm94XCIpO1xuICAgICAgICByb2Fkcy5hcHBlbmRDaGlsZChtYXBEaXYpO1xuICAgICAgICBtYXBEaXYuaW5uZXJIVE1MID0gYDxzcGFuIGlkPVwiY291cnNlLSR7aW5kZXh9XCI+JHthcnJheVtpbmRleF19PC9zcGFuPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB3aWR0aDo4MCVcIiA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbGluay1yXCIgIGlkPVwibWFqb3JMaW5rLSR7aW5kZXh9XCI+PGEgY2xhc3M9J2FyJyBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NYWpvcjwvYT48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbGluay1yXCIgaWQ9XCJtaW5vckxpbmstJHtpbmRleH1cIj48YSBjbGFzcz0nYXInaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TWlub3I8L2E+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgbWFwRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb3Vyc2UtJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1ham9yTGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWlub3JMaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvdXJzZS0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWFqb3JMaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtaW5vckxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIC8vVG8gZ2VuZXJhdGUgY291cnNlcyB3aGVuIHlvdSBsb2FkIHVwIHBhZ2VcbiAgc2VhcmNoQmFyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb2FkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb2FkR2VuKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9hZGZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvYWRHZW4pO1xuXG4vL0dlbmVyYXRlIEVycCBNYW5hZ2VtZW50IFRhYlxuY29uc3QgZXJwR2VuID0gKCkgPT4ge1xuICBob2Uuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIHN0dWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIHJvYWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIGVycC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKVwiO1xuICBnZW5lcmF0ZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImVycE1hbmFnZW1lbnRcIj5cbiAgPGRpdiBjbGFzcz1cInRhZ2xpbmVcIj5cbiAgICAgIDxzcGFuPlNpbXBsaWZ5PC9zcGFuPlxuICAgICAgPHNwYW4+IFlvdXIgU251IEV4cGVyaWVuY2U8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInN1Yi10YWdcIiA+Q29tbW9ubHkgYXNrZWQgRkFRcyA8L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibGlua1NlY3Rpb25cIj5cbiAgICAgIDxkaXYgaWQ9XCJlcnBMaW5rXCI+RXJwPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiZmFzdExpbmtcIj5GYXN0cmFjazwvZGl2PlxuICAgICAgPGRpdiBpZD1cImhvc3RlTGlua1wiPkhvc3RlbCBNYW5hZ2VtZW50PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiYmJMaW5rXCI+QmxhY2tib2FyZDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZhcXNcIj5cbiAgICAgIDxkaXYgY2xhc3M+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjsgd2lkdGg6IDEwMCU7XCI+XG4gICAgICAgICAgICAgIDxzcGFuPldoYXQgaXMgRXJwPzwvc3Bhbj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1jYXJldC1kb3duLWZpbGxcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNvbFwiPnJhbmRvbSBpbWFnZS92aWRlbzwvZGl2PiAgICAgICAgICAgICAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gO1xuICBsZXQgbGlua1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmtTZWN0aW9uXCIpO1xuICBsZXQgbGlua3MgPSBsaW5rU2VjdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKTtcbiAgbGV0IGZhcXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhcXNcIik7XG5cbiAgZnVuY3Rpb24gZmFxRmlsbChhcnJheSkge1xuICAgIGZhcXMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGFycmF5W2ldO1xuICAgICAgbGV0IGZhcURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmYXFEaXYuaW5uZXJIVE1MID0gYDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHdpZHRoOiAxMDAlO1wiPlxuICAgICAgPHNwYW4+JHtlbGVtZW50LnF1ZXN0aW9ufTwvc3Bhbj5cbiAgICAgIDxzcGFuPjxpIGlkPSdkcm9wLSR7aX0nIGNsYXNzPVwiYmkgYmktY2FyZXQtZG93bi1maWxsXCI+PC9pPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNvbFwiIGlkPSdzb2wtJHtpfSc+JHtlbGVtZW50LmFuc3dlcn08L2Rpdj5gO1xuICAgICAgZmFxcy5hcHBlbmRDaGlsZChmYXFEaXYpO1xuICAgICAgZmFxRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzb2wtJHtpfWApO1xuICAgICAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkcm9wLSR7aX1gKTtcbiAgICAgICAgaWYgKHNvbC5zdHlsZS5kaXNwbGF5ID09IFwiZmxleFwiKSB7XG4gICAgICAgICAgc29sLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBhcnJvdy5jbGFzc0xpc3QgPSBcImJpLWNhcmV0LWRvd24tZmlsbFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgYXJyb3cuY2xhc3NMaXN0ID0gXCJiaS1jYXJldC11cC1maWxsXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmYXFzLmlubmVySFRNTCA9IFwiXCI7XG4gIC8vRXhhbXBsZSBhcnJheXNcbiAgbGV0IGVycEZhcXMgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyBFUlA/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiVGhlIFNoaXYgTmFkYXIgVW5pdmVyc2l0eSBFUlAgcG9ydGFsIGlzIGEgd2ViLWJhc2VkIGFwcGxpY2F0aW9uIHRoYXQgcHJvdmlkZXMgc3R1ZGVudHMsIGZhY3VsdHksIGFuZCBzdGFmZiB3aXRoIGFjY2VzcyB0byBhIHZhcmlldHkgb2YgdW5pdmVyc2l0eSBzZXJ2aWNlcy4gVGhlIHBvcnRhbCBpbmNsdWRlcyBmZWF0dXJlcyBzdWNoIGFzIHN0dWRlbnQgc2VsZi1zZXJ2aWNlLCBmYWN1bHR5IHNlbGYtc2VydmljZSwgc3RhZmYgc2VsZi1zZXJ2aWNlLCBhbmQgcGFyZW50LXN0dWRlbnQgcG9ydGFsLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGxvZyBpbiB0byB0aGUgRVJQP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIlRvIGxvZyBpbiB0byB5b3VyIEVSUCwgeW91IG11c3QgZW50ZXIgeW91ciBTTlUgbmV0IElEIChlLmcuLSB4eTEyMykgYW5kIHBhc3N3b3JkLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGFkZCBjb3Vyc2VzIHRvIHBsYW5uZXI/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiVXBvbiBsb2dnaW5nIGludG8gdGhlIEVSUCwgbmF2aWdhdGUgdG8gdGhlICdBY2FkZW1pYyBQbGFubmluZycgc2VjdGlvbiBsb2NhdGVkIGluIHRoZSBsZWZ0LWhhbmQgbWVudSBiYXIsIG9yIGRpcmVjdGx5IGFjY2VzcyB0aGUgJ1BsYW4nIG9wdGlvbiBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIGFsb25nc2lkZSBvdGhlciBvcHRpb25zIGxpa2Ugc2VhcmNoIGFuZCBlbnJvbGwuIFByb2NlZWQgdG8gY2xpY2sgb24gJ0Jyb3dzZSBDYXRhbG9nJyBhbmQgdXNlIHRoZSB0ZXh0IGJveCB0byBpbnB1dCB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBzdWJqZWN0IHlvdSBkZXNpcmUgdG8gc2VsZWN0IGEgY291cnNlIGZyb20uIEFsbCBhdmFpbGFibGUgc3ViamVjdCBvcHRpb25zIHdpbGwgYmUgZGlzcGxheWVkLCB3aGVyZSB5b3UgY2FuIHRoZW4gY2xpY2sgdGhlIGRyb3Bkb3duIGJ1dHRvbiB0byBjaG9vc2UgeW91ciBkZXNpcmVkIGNvdXJzZSBhbmQgY2xpY2sgb24gJ0FkZCBQbGFubmVyJyB0byBpbmNsdWRlIGl0IGluIHlvdXIgcGxhbm5lci5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoZXJlIHRvIHNlZSB5b3VyIHRpbWV0YWJsZSBmcm9tP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIkluIHRoZSBFUlAgc3lzdGVtLCBsb2NhdGUgdGhlICdFbnJvbGxtZW50JyBvcHRpb24gb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBwYWdlLCBzaXR1YXRlZCB1bmRlciB0aGUgbWVudSBib3guIENsaWNrIG9uIHRoZSAnTXkgV2Vla2x5IFNjaGVkdWxlJyBvcHRpb24gdG8gYWNjZXNzIHlvdXIgdGltZXRhYmxlIGZvciB0aGUgY3VycmVudCB3ZWVrLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGNoZWNrIEdQQT9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJJbiB0aGUgRVJQIHN5c3RlbSwgZmluZCB0aGUgJ0Vucm9sbG1lbnQnIG9wdGlvbiBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHBhZ2UsIHdoaWNoIGlzIGxvY2F0ZWQgdW5kZXIgdGhlIG1lbnUgYm94LiBDbGljayBvbiAnVGVybSBTdGF0aXN0aWNzJyBhbmQgY2hvb3NlIHRoZSBzZW1lc3RlciBmb3Igd2hpY2ggeW91IHdpc2ggdG8gY2hlY2sgeW91ciBHUEEuIFRoZW4sIHJldmlldyB5b3VyIEdQQSBmb3IgdGhlIHNlbGVjdGVkIHNlbWVzdGVyLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246XG4gICAgICAgIFwiSG93IHRvIGNoZWNrIHRoZSB0b3RhbCBjcmVkaXRzIGNvbXBsZXRlZCBhbmQgdG90YWwgY3JlZGl0cyBsZWZ0P1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICAnRmluZCB0aGUgXCJNeSBBY2FkZW1pY3NcIiBvcHRpb24gaW4gdGhlIEVSUCBzeXN0ZW0gYWxvbmcgd2l0aCBvdGhlciBvcHRpb25zIGxpa2UgXCJFbnJvbCxcIiBcIlBsYW4sXCIgZXRjLiBuZWFyIHRoZSB0b3Agb2YgdGhlIHBhZ2UuIFRoZW4gc2VsZWN0IFwiVmlldyBNeSBBZHZpc2VtZW50IFJlcG9ydC5cIiBUaGlzIHJlcG9ydCB3aWxsIHNob3cgdGhlIGNyZWRpdHMgeW91IGhhdmUgYWxyZWFkeSBlYXJuZWQgYXMgd2VsbCBhcyB0aGUgY3JlZGl0cyB5b3Ugc3RpbGwgbmVlZCB0byBmaW5pc2guJyxcbiAgICB9LFxuICBdO1xuICBsZXQgZmFzdHJhY2tGYXFzID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgRmFzdHJhY2s/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgICdUbyBsZWF2ZSB0aGUgY2FtcHVzIGZvciBhIGRheSBvciBsb25nZXIsIHlvdSBtdXN0IG9idGFpbiBhcHByb3ZhbCBmcm9tIHRoZSB3YXJkZW4uIFRoaXMgYXBwcm92YWwgaXMgcmVmZXJyZWQgdG8gYXMgXCJmYXN0cmFjay5cIicsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgZG8gSSBhcHBseSBmb3IgRmFzdHJhY2s/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgICdQbGVhc2UgYWNjZXNzIHRoZSBTTlVMaW5rcyB3ZWJzaXRlIGFuZCBmaW5kIHRoZSBcImxvZ2luXCIgb3B0aW9uLiBPbmNlIGxvZ2dlZCBpbiwgeW91IHdpbGwgc2VlIGEgdmFyaWV0eSBvZiBjaG9pY2VzLiBDbGljayBvbiB0aGUgXCJmYXN0cmFja1wiIG9wdGlvbiB0byBhY2Nlc3MgdGhlIGZvcm0gZm9yIHJlcXVlc3RpbmcgcGVybWlzc2lvbiB0byBsZWF2ZSB0aGUgY2FtcHVzLCB3aGV0aGVyIGl0IGlzIGZvciBwZXJzb25hbCBvciBvZmZpY2lhbCByZWFzb25zLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IHRvIGRvIGluIGNhc2UgRmFzdHJhY2sgaXMgcmVqZWN0ZWQ/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiSWYgeW91ciBmYXN0cmFjayByZXF1ZXN0IGlzIHJlamVjdGVkIGZvciBhbnkgcmVhc29uLCB5b3UgaGF2ZSB0d28gb3B0aW9uczogWW91IGNhbiByZXZpZXcgdGhlIGZvcm0gdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnkgbWlzdGFrZXMsIGNvcnJlY3QgdGhlbSwgYW5kIHJlc3VibWl0IGl0IGZvciBhcHByb3ZhbC4gQWx0ZXJuYXRpdmVseSwgaWYgeW91IG5lZWQgdG8gbGVhdmUgdXJnZW50bHksIHlvdSBjYW4gZGlyZWN0bHkgYXBwcm9hY2ggdGhlIHJlY2VwdGlvbiBvZiB5b3VyIGhvc3RlbCBhbmQgcmVxdWVzdCBhbiBlYXJseSBhcHByb3ZhbCBmcm9tIHRoZW0uXCIsXG4gICAgfSxcbiAgXTtcbiAgbGV0IGhvc3RlbEZhcXMgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGNob29zZSByb29tbWF0ZXM/XCIsXG4gICAgICBhbnN3ZXI6IFwiVGhlIG9wdGlvbiB0byByZW1vdmUgcm9vbW1hdGVzIGlzIG5vIGxvbmdlciB2YWxpZCBhcyBvZiAyMDIzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gc2VsZWN0IHlvdXIgcm9vbT9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJQbGVhc2UgdmlzaXQgdGhlIFNOVUxpbmtzIHdlYnNpdGUgYW5kIGxvY2F0ZSB0aGUgJ2xvZ2luJyBvcHRpb24uIEFmdGVyIGxvZ2dpbmcgaW4sIHlvdSB3aWxsIGJlIHByZXNlbnRlZCB3aXRoIHZhcmlvdXMgY2hvaWNlcy4gQ2xpY2sgb24gdGhlICdIb3N0ZWwgTWFuYWdlbWVudCBTeXN0ZW0nIG9wdGlvbiwgYW5kIGZyb20gdGhlcmUsIGZpbmQgdGhlICdSb29tIFNlbGVjdGlvbiBSZXF1ZXN0JyBvcHRpb24uIER1cmluZyB0aGUgcm9vbSBzZWxlY3Rpb24gZGF5cyBhc3NpZ25lZCBieSB0aGUgbWFuYWdlbWVudCwgdGhpcyBzZWxlY3Rpb24gd2lsbCByZWRpcmVjdCB5b3UgdG8gYSBwYWdlIHdoZXJlIHlvdSBjYW4gY2hvb3NlIHlvdXIgcm9vbS5cIixcbiAgICB9LFxuICBdO1xuICBsZXQgYmxhY2tib2FyZEZhcXMgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyBCbGFja2JvYXJkP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIkJsYWNrYm9hcmQgaXMgYW4gb25saW5lIGxlYXJuaW5nIG1hbmFnZW1lbnQgc3lzdGVtIChMTVMpIHVzZWQgYnkgcHJvZmVzc29ycyB0byBwcm92aWRlIGNvdXJzZSBtYXRlcmlhbHMsIGluY2x1ZGluZyBub3RlcywgYXNzaWdubWVudHMsIGFubm91bmNlbWVudHMsIGFuZCBvdGhlciByZXNvdXJjZXMgdG8gc3R1ZGVudHMgaW4gYSBkaWdpdGFsIGZvcm1hdC5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBsb2cgaW4gYmxhY2tib2FyZD9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJUbyBhY2Nlc3MgdGhlIEJsYWNrYm9hcmQgcGxhdGZvcm0gYXQgU05VLCB5b3UgaGF2ZSB0d28gb3B0aW9ucy4gRmlyc3RseSwgeW91IGNhbiBuYXZpZ2F0ZSB0byBTTlUgbGlua3MgYW5kIHNlYXJjaCBmb3IgdGhlICdCbGFja2JvYXJkJyBvcHRpb24gb24gdGhlIHdlYnNpdGUuIEFsdGVybmF0aXZlbHksIHlvdSBtYXkgZGlyZWN0bHkgc2VhcmNoIGZvciAnU05VIEJsYWNrYm9hcmQnIG9uIHRoZSBpbnRlcm5ldC4gT25jZSB5b3UgZmluZCB0aGUgQmxhY2tib2FyZCBwb3J0YWwsIGxvZyBpbiB1c2luZyB5b3VyIFNOVSBlbWFpbCBJRCBhbmQgcGFzc3dvcmQgdG8gZ2FpbiBhY2Nlc3MgdG8gdGhlIHBsYXRmb3JtLi5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBhZGQgY291cnNlcyB0byBmYXZvcml0ZXM/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiQWZ0ZXIgbG9nZ2luZyBpbiB0byB5b3VyIEJsYWNrYm9hcmQgYWNjb3VudCwgZmluZCB0aGUgJ0NvdXJzZXMnIG9wdGlvbiBsb2NhdGVkIG9uIHRoZSBsZWZ0LWhhbmQgc2lkZSBvZiB0aGUgc2NyZWVuIGFuZCBjbGljayBvbiBpdC4gVGhpcyBhY3Rpb24gd2lsbCBkaXNwbGF5IGEgbGlzdCBvZiBhbGwgdGhlIGNvdXJzZXMgeW91IGFyZSBjdXJyZW50bHkgZW5yb2xsZWQgaW4uIFRvIG1hcmsgYSBjb3Vyc2UgYXMgYSBmYXZvcml0ZSwgbG9vayBmb3IgdGhlIHN0YXIgYnV0dG9uIHNpdHVhdGVkIG9uIHRoZSByaWdodC1oYW5kIHNpZGUgb2YgZWFjaCBjb3Vyc2UgaGVhZGluZy4gQ2xpY2sgb24gdGhlIHN0YXIgYnV0dG9uIHRvIGFkZCB0aGUgY291cnNlIHRvIHlvdXIgZmF2b3JpdGVzIGxpc3QuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgY2FuIEkgc3VibWl0IGFzc2lnbm1lbnRzIG9uIEJsYWNrYm9hcmQ/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiTm9ybWFsbHksIHRoZSBsaW5rIGZvciBzdWJtaXR0aW5nIGFzc2lnbm1lbnRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgJ0FjdGl2aXR5IFNlY3Rpb24nIG9mIHRoZSBjb3Vyc2UgcGFnZSwgYWxvbmcgd2l0aCB0aGUgZGVhZGxpbmUgZm9yIHN1Ym1pc3Npb24uIElmIHlvdSBhcmUgdW5hYmxlIHRvIGxvY2F0ZSB0aGUgbGluayB0aGVyZSwgeW91IGNhbiBmb2xsb3cgdGhlc2Ugc3RlcHM6IEZpcnN0LCBjbGljayBvbiB0aGUgJ0NvdXJzZXMnIG9wdGlvbiBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHNjcmVlbi4gTmV4dCwgZmluZCB0aGUgc3BlY2lmaWMgY291cnNlIGZvciB3aGljaCB5b3Ugd2FudCB0byBzdWJtaXQgdGhlIGFzc2lnbm1lbnQuIE9uY2UgeW91IGhhdmUgc2VsZWN0ZWQgdGhlIGNvdXJzZSwgbmF2aWdhdGUgdG8gdGhlICdDb250ZW50IFNlY3Rpb24nIG9mIHRoZSBjb3Vyc2UgcGFnZSBhbmQgbG9vayBmb3IgdGhlIGxpbmsgdG8gdGhlIGFzc2lnbm1lbnQgc3VibWlzc2lvbi5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBhY2Nlc3MgY29udGVudCBvbiBibGFja2JvYXJkP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIlVzdWFsbHksIHRoZSBtb3N0IHJlY2VudCBjb250ZW50IGlzIHZpc2libGUgb24gdGhlICdBY3Rpdml0eSBTdHJlYW0uJyBIb3dldmVyLCBpZiB5b3Ugd2FudCB0byBhY2Nlc3MgYWxsIHRoZSBjb250ZW50IGF2YWlsYWJsZSBmb3IgYSBwYXJ0aWN1bGFyIGNvdXJzZSwgZm9sbG93IHRoZXNlIHN0ZXBzOiBHbyB0byB0aGUgJ0NvdXJzZXMnIHNlY3Rpb24gYW5kIGNob29zZSB0aGUgc3BlY2lmaWMgY291cnNlIHlvdSB3aXNoIHRvIHZpZXcgdGhlIGNvbnRlbnQgb2YuIExvb2sgZm9yIHRoZSAnQ29udGVudCcgc2VjdGlvbiwgdHlwaWNhbGx5IGxvY2F0ZWQgb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBzY3JlZW4uIEJ5IGFjY2Vzc2luZyB0aGlzIHNlY3Rpb24sIHlvdSB3aWxsIGJlIGFibGUgdG8gc2VlIGFsbCB0aGUgY29udGVudCByZWxhdGVkIHRvIHRoZSBzZWxlY3RlZCBjb3Vyc2UuXCIsXG4gICAgfSxcbiAgXTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnBMaW5rXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZmFxRmlsbChlcnBGYXFzKTtcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmFzdExpbmtcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmYXFGaWxsKGZhc3RyYWNrRmFxcyk7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvc3RlTGlua1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZhcUZpbGwoaG9zdGVsRmFxcyk7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJiTGlua1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZhcUZpbGwoYmxhY2tib2FyZEZhcXMpO1xuICB9KTtcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGVycEdlbigpO1xufSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycGZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZXJwR2VuKCk7XG59KTtcblxuY29uc3QgYWJvdXRHZW4gPSAoKSA9PiB7XG4gIGdlbmVyYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYWJvdXRcIj5cbiAgPGRpdiBjbGFzcz1cImFib3V0Q29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJmaXJzdENvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Q29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb25cIj5XaGF0IGlzIDxzcGFuPlNudUFjYWRlbWlhPC9zcGFuPj88L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlclwiPlxuICAgICAgICAgIFVubG9jayB0aGUgZG9vcnMgdG8ga25vd2xlZGdlIGFuZCBlbWJhcmsgb24gYSBqb3VybmV5IG9mXG4gICAgICAgICAgaW50ZWxsZWN0dWFsIGdyb3d0aCB3aXRoIFNudUFjYWRlbWlhLCB5b3VyIHByZW1pZXIgb25saW5lXG4gICAgICAgICAgZWR1Y2F0aW9uIHBsYXRmb3JtLiBXaGV0aGVyIHlvdSdyZSBhIGN1cmlvdXMgbGVhcm5lciwgYVxuICAgICAgICAgIGRlZGljYXRlZCBzdHVkZW50LCBvciBhIGxpZmVsb25nIGVudGh1c2lhc3QuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aW1nIHNyYz1cIi4uL3NyYy9yZWFzb3VyY2VzL2NvbXB1dGVyLnN2Z1wiIGFsdD1cIlwiIHdpZHRoPVwiMjUlXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2Vjb25kQ29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRDb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvblwiPlxuICAgICAgICAgIEhvdzxzcGFuPiBTbnVBY2FkZW1pYSA8L3NwYW4+Y2FuIGhlbHAgeW91P1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlclwiPlxuICAgICAgICAgIEFuIGVkdWNhdGlvbiB3ZWJzaXRlIGNhbiBzaWduaWZpY2FudGx5IGVuaGFuY2UgeW91ciBsZWFybmluZ1xuICAgICAgICAgIGpvdXJuZXkgYnkgcHJvdmlkaW5nIGEgZGl2ZXJzZSByYW5nZSBvZiByZXNvdXJjZXMgdGFpbG9yZWQgdG9cbiAgICAgICAgICB2YXJpb3VzIHN1YmplY3RzIGFuZCBsZWFybmluZyBzdHlsZXMsIG9mZmVyaW5nIGZsZXhpYmxlXG4gICAgICAgICAgc2NoZWR1bGluZyBhbmQgc2VsZi1wYWNlZCBwcm9ncmVzcyB0cmFja2luZywgY29ubmVjdGluZyB5b3Ugd2l0aFxuICAgICAgICAgIGV4cGVydCBpbnN0cnVjdG9ycy5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL3JlYXNvdXJjZXMvaGVscExpZ2h0LnN2Z1wiIGFsdD1cIlwiIHdpZHRoPVwiMjUlXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0ZWFtXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1lZXRUZWFtXCI+TUVFVCBUSEUgVEVBTTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZWFtQmF5XCI+XG4gICAgICA8ZGl2PkNvcmU8L2Rpdj5cbiAgICAgIDxkaXY+RGV2IFRlYW08L2Rpdj5cbiAgICAgIDxkaXY+Q29udGVudCBUZWFtPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRlYW1QZW9wbGVcIj5cbiAgICAgIDxkaXYgZGF0YS1hY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBlcnNvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmQtaW5uZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1mcm9udFwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3NyYy9yZWFzb3VyY2VzL3ZhbXNpLmpwZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmQtYmFja1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlwiSXQgaXMgd2hhdCBpdCBpc1wiPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWxzXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1pbnN0YWdyYW1cIj48L2lcbiAgICAgICAgICAgICAgICAgID48L2E+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbi5saW5rZWRpbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktbGlua2VkaW5cIj48L2lcbiAgICAgICAgICAgICAgICAgID48L2E+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1ZhbXNpS2FwYXJ0aGkvU251YWNhZGVtaWEvdHJlZS9tYWluXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktZ2l0aHViXCI+PC9pXG4gICAgICAgICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuPlZhbXNpIEthcGFydGhpPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkNvZm91bmRlcjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWlubmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmQtZnJvbnRcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuLi9zcmMvcmVhc291cmNlcy92YW1zaS5qcGdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWJhY2tcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cIkl0IGlzIHdoYXQgaXQgaXNcIjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsc1wiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktaW5zdGFncmFtXCI+PC9pXG4gICAgICAgICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW4ubGlua2VkaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWxpbmtlZGluXCI+PC9pXG4gICAgICAgICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9WYW1zaUthcGFydGhpL1NudWFjYWRlbWlhL3RyZWUvbWFpblwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWdpdGh1YlwiPjwvaVxuICAgICAgICAgICAgICAgICAgPjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3Bhbj5WYW1zaSBLYXBhcnRoaTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5Db2ZvdW5kZXI8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGRhdGEtYWN0aXZlPVwiaW5hY3RpdmVcIj48L2Rpdj5cbiAgICAgIDxkaXYgZGF0YS1hY3RpdmU9XCJpbmFjdGl2ZVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmA7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IGFib3V0QnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuc2xvZ2FuQnV0dG9uXCIpO1xuICBpZiAoYWJvdXRCdXR0b24pIHtcbiAgICBhYm91dEdlbigpOyAvLyBHZW5lcmF0ZSBcIkFib3V0IFVzXCIgY29udGVudFxuICB9XG59KTtcbmNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPXJhZGlvXVwiKTtcblxuY29uc3Qgc2xpZGVTaG93ID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhZGlvQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgIH0sIDMwMDApO1xuICB9XG59O1xuc2xpZGVTaG93KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=