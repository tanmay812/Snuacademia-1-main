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
  width: max(80%, 300px);
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
  justify-content: center;
}

/*slider*/

#slider {
  position: relative;
  width: 60%;
  height: 30vw;
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
}
`, "",{"version":3,"sources":["webpack://./src/Style.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;EACE,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,iCAAiC;EACjC,wBAAwB;EACxB,kCAAkC;EAClC,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,YAAY;EACZ,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA,wBAAwB;AACxB;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,mBAAmB;EACnB,mCAAmC;EACnC,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,iCAAiC;EACjC,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,eAAe;EACf,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;;EAEE,UAAU;;EAEV,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mCAAmC;EACnC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;AACA;EACE,oBAAoB;AACtB;AACA,iBAAiB;AACjB;EACE,eAAe;EACf,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,SAAS;EACT,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mCAAmC;EACnC,2BAA2B;EAC3B,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,wBAAwB;EACxB,iCAAiC;EACjC,eAAe;EACf,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,mCAAmC;EACnC,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,UAAU;EACV,SAAS;AACX;AACA;EACE,mCAAmC;EACnC,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,YAAY;EACZ,mCAAmC;EACnC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,mCAAmC;EACnC,iCAAiC;EACjC,wBAAwB;EACxB,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,mCAAmC;EACnC,sBAAsB;AACxB;AACA;EACE,cAAc;AAChB;AACA,WAAW;AACX;EACE,iCAAiC;EACjC,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,UAAU;EACV,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA,SAAS;;AAET;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,kCAAkC;EAClC,mBAAmB;EACnB,4BAA4B;EAC5B,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;;;;;;EAME;;AAEF;EACE,gBAAgB;EAChB,YAAY;EACZ,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,OAAO;EACP,MAAM;EACN,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,sBAAsB;EACtB,gCAAgC;EAChC,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,YAAY;AACd;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;;;;;;;EAOE;;AAEF,yBAAyB;;AAEzB,iBAAiB;AACjB;;;;;EAKE,yEAAyE;EACzE,kCAAkC;AACpC;;AAEA,eAAe;AACf;;;;;EAKE,uEAAuE;EACvE,sCAAsC;AACxC;;AAEA,uBAAuB;AACvB;;;;;EAKE,wCAAwC;EACxC,sCAAsC;AACxC;;AAEA,+BAA+B;AAC/B;;;;;EAKE,wCAAwC;EACxC,uCAAuC;AACzC;;AAEA,mBAAmB;AACnB;;;;;EAKE,uEAAuE;EACvE,uCAAuC;AACzC;;AAEA,aAAa;AACb;EACE;IACE,mBAAmB;EACrB;EACA;IACE,aAAa;EACf;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;AACF","sourcesContent":["/*Using Css variable*/\n:root {\n  --bg-color: white;\n  --font-color: black;\n  --secondary: #00b0ff;\n}\n\n.dark {\n  --bg-color: black;\n  --font-color: white;\n  --secondary: #536dfe;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--font-color);\n  font-family: \"DM Sans\", sans-serif;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.header {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  align-items: center;\n  margin-right: 2%;\n}\n\n.logo {\n  display: flex;\n  justify-content: center;\n  width: 100px;\n}\n\n.options {\n  display: flex;\n  width: max(500px, 50%);\n  justify-content: space-around;\n  height: 25px;\n  font-size: max(15px, 1vw);\n  color: var(--font-color);\n}\n\n.options > div:hover {\n  cursor: pointer;\n  color: var(--secondary);\n}\n\n.home {\n  margin-top: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 10%;\n}\n\n.slogan {\n  font-size: max(3.5vw, 40px);\n  display: flex;\n  margin-bottom: 20px;\n  font-weight: 900;\n}\n\n.slogan-para {\n  font-size: max(1vw, 20px);\n  width: max(80%, 300px);\n}\n\ni {\n  font-size: 25px;\n  width: auto;\n  cursor: pointer;\n  transform: translate(-50%, -50%);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n}\n\n/* study-material page */\n.study,\n.roadMaps {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.tagline {\n  margin-top: 5vh;\n  font-size: min(8vw, 70px);\n  font-weight: 950;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.search-bar {\n  margin-top: 5vh;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: row;\n  border: 2px solid var(--font-color);\n  width: max(40vw, 300px);\n  padding: 8px;\n  padding-left: 15px;\n  gap: 10px;\n  border-radius: 5px;\n}\n#course-select {\n  background-color: var(--bg-color);\n  color: var(--font-color);\n  border: none;\n  outline: none;\n  color: (--font-color);\n  font-size: 25px;\n  border-left: 1px solid grey;\n  padding-left: 10px;\n  font-weight: 100;\n  width: 80%;\n}\n\n.courses,\n.roads {\n  width: 90%;\n\n  margin-top: 50px;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n}\n\n.courseBox {\n  height: 200px;\n  width: 300px;\n  border: 2px solid var(--font-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--font-color);\n}\n\n.glink {\n  display: none;\n  border-bottom: none;\n}\na {\n  text-decoration: none;\n  color: var(--font-color);\n  border-bottom: none;\n}\na:visited {\n  text-decoration: none;\n  color: var(--font-color);\n}\na:hover {\n  text-decoration: none;\n  color: var(--font-color);\n}\na:active {\n  text-decoration: none;\n  color: var(--font-color);\n}\n.generate {\n  padding-bottom: 20px;\n}\n/*erp management*/\n.linkSection {\n  margin-top: 5vh;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.erpManagement {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.linkSection > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--font-color);\n  font-size: max(1.2vw, 15px);\n  height: max(35px, 5vh);\n  width: max(350px, 15vw);\n  border-radius: 5px;\n  color: var(--font-color);\n  background-color: var(--bg-color);\n  flex-wrap: wrap;\n  cursor: pointer;\n}\n.linkSection > div:hover {\n  color: var(--bg-color);\n  background-color: var(--font-color);\n  transition: 100ms;\n}\n.sub-tag {\n  font-size: 0.5em;\n  font-weight: 200;\n  margin-top: 2vh;\n  display: flex;\n  text-align: center;\n}\n.faqs {\n  display: flex;\n  flex-direction: column;\n  margin-top: 7vh;\n  width: 95%;\n  gap: 20px;\n}\n.faqs > div {\n  border: 1px solid var(--font-color);\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 15px;\n  border-radius: 2px;\n}\n.sol {\n  display: none;\n}\n.roadBox {\n  height: 200px;\n  width: 300px;\n  border: 2px solid var(--font-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--font-color);\n}\n.glink-r {\n  display: none;\n  border: 1px solid var(--font-color);\n  background-color: var(--bg-color);\n  color: var(--font-color);\n  width: 33%;\n  padding: 10px;\n  justify-content: center;\n  border-radius: 5px;\n}\n.glink-r:hover {\n  background-color: var(--font-color);\n  color: var(--bg-color);\n}\na.ar {\n  color: inherit;\n}\n/* footer */\n.footer {\n  background-color: rgb(23, 23, 24);\n  padding: 15px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n}\n\n.reasources {\n  display: flex;\n  justify-content: center;\n  color: white;\n  gap: 10px;\n  width: 50%;\n  flex-wrap: wrap;\n}\n.reasources > div:hover {\n  color: var(--secondary);\n  cursor: pointer;\n}\n.contact > a {\n  color: white;\n  margin: 10px;\n}\n.contact > a:hover {\n  color: var(--secondary);\n}\n\n.foot-logo {\n  color: white;\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.foot-logo:hover {\n  color: var(--secondary);\n}\n.generate {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n/*slider*/\n\n#slider {\n  position: relative;\n  width: 60%;\n  height: 30vw;\n  margin: 80px auto;\n  font-family: \"DM sans\", sans-serif;\n  perspective: 1400px;\n  transform-style: preserve-3d;\n  display: flex;\n  justify-content: center;\n}\n\ninput[type=\"radio\"] {\n  position: relative;\n  top: 108%;\n  width: 4vw;\n  height: 18px;\n  margin: 0 15px 0 0;\n  opacity: 0.6;\n  cursor: pointer;\n}\n\n/*input[type=radio]:nth-child(5) {\n  margin-right: 0px;\n}\n\ninput[type=radio]:checked {\n  opacity: 1;\n}*/\n\nh2 {\n  font-size: 2.5vw;\n  color: white;\n  margin: 0;\n  margin-bottom: 20px;\n}\n\np {\n  width: 50%;\n  font-size: min(30px, 1.5vw);\n}\n\n#slider label {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  color: white;\n  font-weight: normal;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  transition: transform 400ms ease;\n  box-sizing: border-box;\n  padding: 20px;\n}\n.sliderContent {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  height: 100%;\n}\n#slide1 {\n  background: #066892;\n}\n.dark #slide1 {\n  background: #232e6f;\n}\n\n#slide2 {\n  background: #0d97d2;\n}\n.dark #slide2 {\n  background: #384ab2;\n}\n\n#slide3 {\n  background: #00b0ff;\n}\n.dark #slide3 {\n  background: #536dfe;\n}\n/*\n#slide4 {\n  background: slateblue;\n}\n\n#slide5 {\n  background: violet;\n}*/\n\n/* Slider Functionality */\n\n/* Active Slide */\n#s1:checked ~ #slide1,\n#s2:checked ~ #slide2,\n#s3:checked ~ #slide3,\n#s4:checked ~ #slide4,\n#s5:checked ~ #slide5 {\n  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);\n  transform: translate3d(0%, 0, 0px);\n}\n\n/* Next Slide */\n#s1:checked ~ #slide2,\n#s2:checked ~ #slide3,\n#s3:checked ~ #slide4,\n#s4:checked ~ #slide5,\n#s5:checked ~ #slide1 {\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);\n  transform: translate3d(15%, 0, -100px);\n}\n\n/* Next to Next Slide */\n#s1:checked ~ #slide3,\n#s2:checked ~ #slide4,\n#s3:checked ~ #slide5,\n#s4:checked ~ #slide1,\n#s5:checked ~ #slide2 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n  transform: translate3d(30%, 0, -250px);\n}\n\n/* Previous to Previous Slide */\n#s1:checked ~ #slide4,\n#s2:checked ~ #slide5,\n#s3:checked ~ #slide1,\n#s4:checked ~ #slide2,\n#s5:checked ~ #slide3 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n  transform: translate3d(-30%, 0, -250px);\n}\n\n/* Previous Slide */\n#s1:checked ~ #slide5,\n#s2:checked ~ #slide1,\n#s3:checked ~ #slide2,\n#s4:checked ~ #slide3,\n#s5:checked ~ #slide4 {\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);\n  transform: translate3d(-15%, 0, -100px);\n}\n\n/*Responsive*/\n@media screen and (max-width: 800px) {\n  body {\n    align-items: center;\n  }\n  #image {\n    display: none;\n  }\n  .home {\n    padding-left: 0;\n  }\n  .text {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .slogan {\n    text-align: center;\n  }\n  .slogan-para {\n    text-align: center;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/reasources/lightmode.svg":
/*!**************************************!*\
  !*** ./src/reasources/lightmode.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aee3578e9dc63b42aa04.svg";

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






//Intial logo generation
document.getElementById("lg").src = _src_reasources_10_png__WEBPACK_IMPORTED_MODULE_1__;
document.getElementById("ft-logo").src = _src_reasources_9_png__WEBPACK_IMPORTED_MODULE_2__;
//intial homepage pic generation
const img = document.getElementById("image");
img.src = _src_reasources_lightmode_svg__WEBPACK_IMPORTED_MODULE_4__;
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
            <img src="../src/reasources/goal.svg" width="50%" />
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
            <img src="../src/reasources/journey.svg" width="50%" />
            <p>
              Our journey began on a random afternoon in our hostel room, where
              we started working on this project with the support of our peers.
            </p>
          </div>
        </label>
        <label for="s3" id="slide3"
          ><h2>Open Source Contribution</h2>
          <div class="sliderContent">
            <img src="../src/reasources/opensource.svg" width="40%" />
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sV0FBVyxNQUFNLGFBQWEsYUFBYSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsU0FBUyxZQUFZLGFBQWEsT0FBTyxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLHdEQUF3RCxzQkFBc0Isd0JBQXdCLHlCQUF5QixHQUFHLFdBQVcsc0JBQXNCLHdC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LEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NudWFjYWRlbWlhLy4vc3JjL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL3NyYy9TdHlsZS5jc3M/YjZhOCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qVXNpbmcgQ3NzIHZhcmlhYmxlKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogd2hpdGU7XG4gIC0tZm9udC1jb2xvcjogYmxhY2s7XG4gIC0tc2Vjb25kYXJ5OiAjMDBiMGZmO1xufVxuXG4uZGFyayB7XG4gIC0tYmctY29sb3I6IGJsYWNrO1xuICAtLWZvbnQtY29sb3I6IHdoaXRlO1xuICAtLXNlY29uZGFyeTogIzUzNmRmZTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBmb250LWZhbWlseTogXCJETSBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBtYXgoNTAwcHgsIDUwJSk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogbWF4KDE1cHgsIDF2dyk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLm9wdGlvbnMgPiBkaXY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuXG4uaG9tZSB7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG59XG5cbi5zbG9nYW4ge1xuICBmb250LXNpemU6IG1heCgzLjV2dywgNDBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5zbG9nYW4tcGFyYSB7XG4gIGZvbnQtc2l6ZTogbWF4KDF2dywgMjBweCk7XG4gIHdpZHRoOiBtYXgoODAlLCAzMDBweCk7XG59XG5cbmkge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIHN0dWR5LW1hdGVyaWFsIHBhZ2UgKi9cbi5zdHVkeSxcbi5yb2FkTWFwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFnbGluZSB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgZm9udC1zaXplOiBtaW4oOHZ3LCA3MHB4KTtcbiAgZm9udC13ZWlnaHQ6IDk1MDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWFyY2gtYmFyIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICB3aWR0aDogbWF4KDQwdncsIDMwMHB4KTtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGdhcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI2NvdXJzZS1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogKC0tZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmV5O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5jb3Vyc2VzLFxuLnJvYWRzIHtcbiAgd2lkdGg6IDkwJTtcblxuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDMwcHg7XG59XG5cbi5jb3Vyc2VCb3gge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4uZ2xpbmsge1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuYTp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuLmdlbmVyYXRlIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4vKmVycCBtYW5hZ2VtZW50Ki9cbi5saW5rU2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5lcnBNYW5hZ2VtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saW5rU2VjdGlvbiA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDE1cHgpO1xuICBoZWlnaHQ6IG1heCgzNXB4LCA1dmgpO1xuICB3aWR0aDogbWF4KDM1MHB4LCAxNXZ3KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlua1NlY3Rpb24gPiBkaXY6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogMTAwbXM7XG59XG4uc3ViLXRhZyB7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZhcXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA3dmg7XG4gIHdpZHRoOiA5NSU7XG4gIGdhcDogMjBweDtcbn1cbi5mYXFzID4gZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uc29sIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yb2FkQm94IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbi5nbGluay1yIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB3aWR0aDogMzMlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmdsaW5rLXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbn1cbmEuYXIge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi8qIGZvb3RlciAqL1xuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMjMsIDI0KTtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLnJlYXNvdXJjZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5yZWFzb3VyY2VzID4gZGl2OmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWN0ID4gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRhY3QgPiBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG5cbi5mb290LWxvZ28ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuLmZvb3QtbG9nbzpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLmdlbmVyYXRlIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLypzbGlkZXIqL1xuXG4jc2xpZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDMwdnc7XG4gIG1hcmdpbjogODBweCBhdXRvO1xuICBmb250LWZhbWlseTogXCJETSBzYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBlcnNwZWN0aXZlOiAxNDAwcHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTA4JTtcbiAgd2lkdGg6IDR2dztcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW46IDAgMTVweCAwIDA7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKmlucHV0W3R5cGU9cmFkaW9dOm50aC1jaGlsZCg1KSB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgb3BhY2l0eTogMTtcbn0qL1xuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMi41dnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5wIHtcbiAgd2lkdGg6IDUwJTtcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgMS41dncpO1xufVxuXG4jc2xpZGVyIGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uc2xpZGVyQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI3NsaWRlMSB7XG4gIGJhY2tncm91bmQ6ICMwNjY4OTI7XG59XG4uZGFyayAjc2xpZGUxIHtcbiAgYmFja2dyb3VuZDogIzIzMmU2Zjtcbn1cblxuI3NsaWRlMiB7XG4gIGJhY2tncm91bmQ6ICMwZDk3ZDI7XG59XG4uZGFyayAjc2xpZGUyIHtcbiAgYmFja2dyb3VuZDogIzM4NGFiMjtcbn1cblxuI3NsaWRlMyB7XG4gIGJhY2tncm91bmQ6ICMwMGIwZmY7XG59XG4uZGFyayAjc2xpZGUzIHtcbiAgYmFja2dyb3VuZDogIzUzNmRmZTtcbn1cbi8qXG4jc2xpZGU0IHtcbiAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xufVxuXG4jc2xpZGU1IHtcbiAgYmFja2dyb3VuZDogdmlvbGV0O1xufSovXG5cbi8qIFNsaWRlciBGdW5jdGlvbmFsaXR5ICovXG5cbi8qIEFjdGl2ZSBTbGlkZSAqL1xuI3MxOmNoZWNrZWQgfiAjc2xpZGUxLFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUyLFxuI3MzOmNoZWNrZWQgfiAjc2xpZGUzLFxuI3M0OmNoZWNrZWQgfiAjc2xpZGU0LFxuI3M1OmNoZWNrZWQgfiAjc2xpZGU1IHtcbiAgYm94LXNoYWRvdzogMCAxM3B4IDI2cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDEycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCwgMHB4KTtcbn1cblxuLyogTmV4dCBTbGlkZSAqL1xuI3MxOmNoZWNrZWQgfiAjc2xpZGUyLFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUzLFxuI3MzOmNoZWNrZWQgfiAjc2xpZGU0LFxuI3M0OmNoZWNrZWQgfiAjc2xpZGU1LFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUxIHtcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTUlLCAwLCAtMTAwcHgpO1xufVxuXG4vKiBOZXh0IHRvIE5leHQgU2xpZGUgKi9cbiNzMTpjaGVja2VkIH4gI3NsaWRlMyxcbiNzMjpjaGVja2VkIH4gI3NsaWRlNCxcbiNzMzpjaGVja2VkIH4gI3NsaWRlNSxcbiNzNDpjaGVja2VkIH4gI3NsaWRlMSxcbiNzNTpjaGVja2VkIH4gI3NsaWRlMiB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAlLCAwLCAtMjUwcHgpO1xufVxuXG4vKiBQcmV2aW91cyB0byBQcmV2aW91cyBTbGlkZSAqL1xuI3MxOmNoZWNrZWQgfiAjc2xpZGU0LFxuI3MyOmNoZWNrZWQgfiAjc2xpZGU1LFxuI3MzOmNoZWNrZWQgfiAjc2xpZGUxLFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUyLFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUzIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAlLCAwLCAtMjUwcHgpO1xufVxuXG4vKiBQcmV2aW91cyBTbGlkZSAqL1xuI3MxOmNoZWNrZWQgfiAjc2xpZGU1LFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUxLFxuI3MzOmNoZWNrZWQgfiAjc2xpZGUyLFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUzLFxuI3M1OmNoZWNrZWQgfiAjc2xpZGU0IHtcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgLTEwMHB4KTtcbn1cblxuLypSZXNwb25zaXZlKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIGJvZHkge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgI2ltYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ob21lIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgLnRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5zbG9nYW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc2xvZ2FuLXBhcmEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFCQUFxQjtBQUNyQjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsd0JBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFD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SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlVzaW5nIENzcyB2YXJpYWJsZSovXFxuOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogd2hpdGU7XFxuICAtLWZvbnQtY29sb3I6IGJsYWNrO1xcbiAgLS1zZWNvbmRhcnk6ICMwMGIwZmY7XFxufVxcblxcbi5kYXJrIHtcXG4gIC0tYmctY29sb3I6IGJsYWNrO1xcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcXG4gIC0tc2Vjb25kYXJ5OiAjNTM2ZGZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDIlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogbWF4KDUwMHB4LCA1MCUpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IG1heCgxNXB4LCAxdncpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ub3B0aW9ucyA+IGRpdjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmhvbWUge1xcbiAgbWFyZ2luLXRvcDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcblxcbi5zbG9nYW4ge1xcbiAgZm9udC1zaXplOiBtYXgoMy41dncsIDQwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uc2xvZ2FuLXBhcmEge1xcbiAgZm9udC1zaXplOiBtYXgoMXZ3LCAyMHB4KTtcXG4gIHdpZHRoOiBtYXgoODAlLCAzMDBweCk7XFxufVxcblxcbmkge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIHN0dWR5LW1hdGVyaWFsIHBhZ2UgKi9cXG4uc3R1ZHksXFxuLnJvYWRNYXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhZ2xpbmUge1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgZm9udC1zaXplOiBtaW4oOHZ3LCA3MHB4KTtcXG4gIGZvbnQtd2VpZ2h0OiA5NTA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zZWFyY2gtYmFyIHtcXG4gIG1hcmdpbi10b3A6IDV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgd2lkdGg6IG1heCg0MHZ3LCAzMDBweCk7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiNjb3Vyc2Utc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmNvdXJzZXMsXFxuLnJvYWRzIHtcXG4gIHdpZHRoOiA5MCU7XFxuXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLmNvdXJzZUJveCB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZ2xpbmsge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuYTp2aXNpdGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuLmdlbmVyYXRlIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4vKmVycCBtYW5hZ2VtZW50Ki9cXG4ubGlua1NlY3Rpb24ge1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5lcnBNYW5hZ2VtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxpbmtTZWN0aW9uID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAxNXB4KTtcXG4gIGhlaWdodDogbWF4KDM1cHgsIDV2aCk7XFxuICB3aWR0aDogbWF4KDM1MHB4LCAxNXZ3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpbmtTZWN0aW9uID4gZGl2OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IDEwMG1zO1xcbn1cXG4uc3ViLXRhZyB7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mYXFzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogN3ZoO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGdhcDogMjBweDtcXG59XFxuLmZhcXMgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLnNvbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucm9hZEJveCB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuLmdsaW5rLXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgd2lkdGg6IDMzJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmdsaW5rLXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5hLmFyIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4vKiBmb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMjMsIDI0KTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5yZWFzb3VyY2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5yZWFzb3VyY2VzID4gZGl2OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29udGFjdCA+IGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4uY29udGFjdCA+IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi5mb290LWxvZ28ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG4uZm9vdC1sb2dvOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG4uZ2VuZXJhdGUge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qc2xpZGVyKi9cXG5cXG4jc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDMwdnc7XFxuICBtYXJnaW46IDgwcHggYXV0bztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gc2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwZXJzcGVjdGl2ZTogMTQwMHB4O1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDEwOCU7XFxuICB3aWR0aDogNHZ3O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKmlucHV0W3R5cGU9cmFkaW9dOm50aC1jaGlsZCg1KSB7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XFxuICBvcGFjaXR5OiAxO1xcbn0qL1xcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMi41dnc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5wIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LXNpemU6IG1pbigzMHB4LCAxLjV2dyk7XFxufVxcblxcbiNzbGlkZXIgbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5zbGlkZXJDb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jc2xpZGUxIHtcXG4gIGJhY2tncm91bmQ6ICMwNjY4OTI7XFxufVxcbi5kYXJrICNzbGlkZTEge1xcbiAgYmFja2dyb3VuZDogIzIzMmU2ZjtcXG59XFxuXFxuI3NsaWRlMiB7XFxuICBiYWNrZ3JvdW5kOiAjMGQ5N2QyO1xcbn1cXG4uZGFyayAjc2xpZGUyIHtcXG4gIGJhY2tncm91bmQ6ICMzODRhYjI7XFxufVxcblxcbiNzbGlkZTMge1xcbiAgYmFja2dyb3VuZDogIzAwYjBmZjtcXG59XFxuLmRhcmsgI3NsaWRlMyB7XFxuICBiYWNrZ3JvdW5kOiAjNTM2ZGZlO1xcbn1cXG4vKlxcbiNzbGlkZTQge1xcbiAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xcbn1cXG5cXG4jc2xpZGU1IHtcXG4gIGJhY2tncm91bmQ6IHZpb2xldDtcXG59Ki9cXG5cXG4vKiBTbGlkZXIgRnVuY3Rpb25hbGl0eSAqL1xcblxcbi8qIEFjdGl2ZSBTbGlkZSAqL1xcbiNzMTpjaGVja2VkIH4gI3NsaWRlMSxcXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTIsXFxuI3MzOmNoZWNrZWQgfiAjc2xpZGUzLFxcbiNzNDpjaGVja2VkIH4gI3NsaWRlNCxcXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTUge1xcbiAgYm94LXNoYWRvdzogMCAxM3B4IDI2cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDEycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDBweCk7XFxufVxcblxcbi8qIE5leHQgU2xpZGUgKi9cXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTIsXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUzLFxcbiNzMzpjaGVja2VkIH4gI3NsaWRlNCxcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTUsXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUxIHtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNSUsIDAsIC0xMDBweCk7XFxufVxcblxcbi8qIE5leHQgdG8gTmV4dCBTbGlkZSAqL1xcbiNzMTpjaGVja2VkIH4gI3NsaWRlMyxcXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTQsXFxuI3MzOmNoZWNrZWQgfiAjc2xpZGU1LFxcbiNzNDpjaGVja2VkIH4gI3NsaWRlMSxcXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTIge1xcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAlLCAwLCAtMjUwcHgpO1xcbn1cXG5cXG4vKiBQcmV2aW91cyB0byBQcmV2aW91cyBTbGlkZSAqL1xcbiNzMTpjaGVja2VkIH4gI3NsaWRlNCxcXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTUsXFxuI3MzOmNoZWNrZWQgfiAjc2xpZGUxLFxcbiNzNDpjaGVja2VkIH4gI3NsaWRlMixcXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTMge1xcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwJSwgMCwgLTI1MHB4KTtcXG59XFxuXFxuLyogUHJldmlvdXMgU2xpZGUgKi9cXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTUsXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUxLFxcbiNzMzpjaGVja2VkIH4gI3NsaWRlMixcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTMsXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGU0IHtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAtMTAwcHgpO1xcbn1cXG5cXG4vKlJlc3BvbnNpdmUqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gICNpbWFnZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuaG9tZSB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gIH1cXG4gIC50ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5zbG9nYW4ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAuc2xvZ2FuLXBhcmEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vU3R5bGUuY3NzXCI7XG5pbXBvcnQgbG9nbzEgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzLzEwLnBuZ1wiO1xuaW1wb3J0IGxvZ28yIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy85LnBuZ1wiO1xuaW1wb3J0IGRwaWMgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzL2Rhcmttb2RlLnN2Z1wiO1xuaW1wb3J0IGxwaWMgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzL2xpZ2h0bW9kZS5zdmdcIjtcblxuLy9JbnRpYWwgbG9nbyBnZW5lcmF0aW9uXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxnXCIpLnNyYyA9IGxvZ28xO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdC1sb2dvXCIpLnNyYyA9IGxvZ28yO1xuLy9pbnRpYWwgaG9tZXBhZ2UgcGljIGdlbmVyYXRpb25cbmNvbnN0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIik7XG5pbWcuc3JjID0gbHBpYztcbi8vRGFya01vZGUgTGlnaHRNb2RlIFRvZ2dsZVxuY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVEYXJrXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW9uc1wiKTtcblxudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImJpLW1vb25cIik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxnXCIpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpO1xuXG4gIC8vc2VlIHdoaWNoIG1vZGUgaXQgaXNcbiAgbGV0IGlzRGFya01vZGUgPSBib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIik7XG5cbiAgaWYgKGlzRGFya01vZGUpIHtcbiAgICBsb2dvLnNyYyA9IGxvZ28yO1xuICAgIGlmIChpbWcpIHtcbiAgICAgIGltZy5zcmMgPSBkcGljO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsb2dvLnNyYyA9IGxvZ28xO1xuICAgIGlmIChpbWcpIHtcbiAgICAgIGltZy5zcmMgPSBscGljO1xuICAgIH1cbiAgfVxufSk7XG5cbmxldCBnZW5lcmF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VuZXJhdGVcIik7XG5jb25zdCBob2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG5jb25zdCBzdHVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHVkeVwiKTtcbmNvbnN0IHJvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvYWRcIik7XG5jb25zdCBlcnAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycFwiKTtcblxuLy9HZW5lcmF0ZSBob21lUGFnZSBkeW5hbWljYWxseVxubGV0IGhvbWVnZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGlzRGFya01vZGUgPSBib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIik7XG4gIGhvZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKVwiO1xuICBzdHVkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICByb2FkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICBlcnAuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIGdlbmVyYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiaG9tZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xvZ2FuXCI+XG4gICAgICAgICAgICAgIFNpbXBsaWZ5IGFjYWRlbWljcyB3aXRoIHVzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbG9nYW4tcGFyYVwiPlxuICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gU251QWNhZGVtaWEsIHRoZSB1bHRpbWF0ZSBzdHVkZW50IGRlc2lnbmVkIHdlYnNpdGUgdGhhdCBoZWxwcyBpbiBzaW1wbGlmeWluZyBzdHVkeSBsaWZlXG4gICAgICAgICAgICAgICAgYXQgU05VXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGltZyBpZD1cImltYWdlXCIgc3JjPScke2xwaWN9JyBzdHlsZT1cIndpZHRoOjUwJTttYXJnaW4tcmlnaHQ6IDEwJTtcIj5cbjwvZGl2PlxuPHNlY3Rpb24gaWQ9XCJzbGlkZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzbGlkZXJcIiBpZD1cInMxXCIgY2hlY2tlZCAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNsaWRlclwiIGlkPVwiczJcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNsaWRlclwiIGlkPVwiczNcIiAvPlxuICAgICAgICA8bGFiZWwgZm9yPVwiczFcIiBpZD1cInNsaWRlMVwiXG4gICAgICAgICAgPjxoMj5PdXIgR29hbDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL3JlYXNvdXJjZXMvZ29hbC5zdmdcIiB3aWR0aD1cIjUwJVwiIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgU251QWNhZGVtaWEgYWltcyB0byBhc3Npc3Qgc3R1ZGVudHMgdGhyb3VnaG91dCB0aGVpciBhY2FkZW1pY1xuICAgICAgICAgICAgICBqb3VybmV5IHdpdGggc3R1ZHkgbWF0ZXJpYWxzLCBub3RlcywgUFlRcywgYW5kIGFzc2lnbm1lbnRzLiBPdXJcbiAgICAgICAgICAgICAgd2Vic2l0ZSBhbHNvIGFkZHJlc3NlcyBjb21tb24gcXVlc3Rpb25zIGFib3V0IEVSUCwgQmxhY2tib2FyZCwgYW5kXG4gICAgICAgICAgICAgIG90aGVyIGdlbmVyYWwgcXVlcmllcyBmb3IgZnJlc2hlcnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJzMlwiIGlkPVwic2xpZGUyXCJcbiAgICAgICAgICA+PGgyPk91ciBKb3VybmV5PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyQ29udGVudFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvcmVhc291cmNlcy9qb3VybmV5LnN2Z1wiIHdpZHRoPVwiNTAlXCIgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPdXIgam91cm5leSBiZWdhbiBvbiBhIHJhbmRvbSBhZnRlcm5vb24gaW4gb3VyIGhvc3RlbCByb29tLCB3aGVyZVxuICAgICAgICAgICAgICB3ZSBzdGFydGVkIHdvcmtpbmcgb24gdGhpcyBwcm9qZWN0IHdpdGggdGhlIHN1cHBvcnQgb2Ygb3VyIHBlZXJzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgZm9yPVwiczNcIiBpZD1cInNsaWRlM1wiXG4gICAgICAgICAgPjxoMj5PcGVuIFNvdXJjZSBDb250cmlidXRpb248L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJDb250ZW50XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9yZWFzb3VyY2VzL29wZW5zb3VyY2Uuc3ZnXCIgd2lkdGg9XCI0MCVcIiAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE91ciB3ZWJzaXRlIGlzIG9wZW4tc291cmNlLCBhbGxvd2luZyBzdHVkZW50cyB0byBhY2Nlc3MgYW5kXG4gICAgICAgICAgICAgIGNvbnRyaWJ1dGUgdG8gdGhlIHNvdXJjZSBjb2RlIHRocm91Z2ggb3VyIEdpdEh1YiByZXBvc2l0b3J5LiBXZVxuICAgICAgICAgICAgICB3ZWxjb21lIHlvdXIgcGFydGljaXBhdGlvbiBhbmQgY29sbGFib3JhdGlvbiBpbiBtYWtpbmcgb3VyXG4gICAgICAgICAgICAgIHBsYXRmb3JtIGV2ZW4gYmV0dGVyLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9zZWN0aW9uPmA7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKTtcbiAgaWYgKGlzRGFya01vZGUpIHtcbiAgICBpZiAoaW1nKSB7XG4gICAgICBpbWcuc3JjID0gZHBpYztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGltZykge1xuICAgICAgaW1nLnNyYyA9IGxwaWM7XG4gICAgfVxuICB9XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVnZW4pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZWdlbik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3QtbG9nb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZWdlbik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVnZW4pO1xuLy9nZW5lcmF0ZSBTdHVkeSBNYXRlcmlhbCBUYWJcbmxldCBzdHVkeUdlbiA9ICgpID0+IHtcbiAgaG9lLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICBzdHVkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpXCI7XG4gIHJvYWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIGVycC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgZ2VuZXJhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJzdHVkeVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0YWdsaW5lXCI+XG4gICAgICAgIDxzcGFuPldoZXJlIFRleHRib29rczwvc3Bhbj5cbiAgICAgICAgPHNwYW4+QW5kIERyZWFtcyBDb2xsaWRlPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInN1Yi10YWdcIj5FeHBsb3JlLCBEaXNjb3ZlciwgYW5kIFNoYXBlIFlvdXIgQWNhZGVtaWMgSm91cm5leSB3aXRoIExpbWl0bGVzcyBQb3NzaWJpbGl0aWVzPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtYmFyXCI+XG4gICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiYmkgYmktc2VhcmNoXCIgc3R5bGU9XCJmb250LXNpemU6IG1heCgyMHB4LDEuNXZ3KTtcIiA+PC9pPjwvc3Bhbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb3Vyc2Utc2VsZWN0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBkYXRhLXNlYXJjaD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY291cnNlc1wiPlxuICAgICAgICBcbiAgICA8L2Rpdj5cbjwvZGl2PmA7XG5cbiAgY29uc3QgZ2VuZXJhdGVDb3Vyc2VzID0gKGFycmF5LCBsaW5rQXJyYXkpID0+IHtcbiAgICBsZXQgY291cnNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291cnNlc1wiKTtcbiAgICBsZXQgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2Utc2VsZWN0XCIpO1xuXG4gICAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAvL2lucHV0IGJlaW5nIHR5cGVkIGluc2lkZSB0aGUgc2VhcmNoIGJhclxuICAgICAgY29uc3Qgc2VhcmNoVGV4dCA9IHNlYXJjaEJhci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAvLyBDbGVhciBleGlzdGluZyBjb3Vyc2VzXG4gICAgICBjb3Vyc2VzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY291cnNlTmFtZSA9IGFycmF5W2luZGV4XS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua0FycmF5W2luZGV4XTtcblxuICAgICAgICBpZiAoY291cnNlTmFtZS5pbmNsdWRlcyhzZWFyY2hUZXh0KSkge1xuICAgICAgICAgIGxldCBjb3Vyc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvdXJzZURpdi5jbGFzc0xpc3QuYWRkKFwiY291cnNlQm94XCIpO1xuICAgICAgICAgIGNvdXJzZXMuYXBwZW5kQ2hpbGQoY291cnNlRGl2KTtcbiAgICAgICAgICBjb3Vyc2VEaXYuaW5uZXJIVE1MID0gYDxzcGFuIGlkPVwiY291cnNlLSR7aW5kZXh9XCI+JHthcnJheVtpbmRleF19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2xpbmtcIiAgaWQ9XCJsaW5rLSR7aW5kZXh9XCI+PGEgaHJlZj1cIiR7bGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Db250ZW50PC9hPjwvc3Bhbj5gO1xuXG4gICAgICAgICAgY291cnNlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvdXJzZS0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvdXJzZURpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvdXJzZS0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy9UbyBnZW5lcmF0ZSBjb3Vyc2VzIHdoZW4geW91IGxvYWQgdXAgcGFnZVxuICAgIHNlYXJjaEJhci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKTtcbiAgfTtcblxuICAvL2V4YW1wbGUgYXJyYXlzXG4gIGxldCBjb3Vyc2VBcnIgPSBbXCJERVMxMDFcIiwgXCJGQUMyMDJcIiwgXCJNRUMxMDRcIiwgXCJNS1QyMDJcIiwgXCJPSE00MDFcIiwgXCJTVE0yMDRcIl07XG4gIGxldCBsaW5rQXJyID0gW1xuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMXBmV0gwSjJlazd5eFRNYm1vQ3YtNFlRUEI1WEtPTEhyP3VzcD1zaGFyaW5nXCIsXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xcTdVc0tXRmc1b2RUNnJYNTdUNExBcmhTWTVlTGEyUko/dXNwPXNoYXJpbmdcIixcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzFObHJIS0NQNTJiNTNPUWlZY2RCZ083TnZMOWVRODF6dj91c3A9c2hhcmluZ1wiLFxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMXR6SXMydXg2bFIxdThlVDlmVEFELTVKWEJraEFHcXJiP3VzcD1kcml2ZV9saW5rXCIsXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xXy1ta2RRSENxcFBjZWlRZVp3N2o5MXIwaFZjVWhtaEo/dXNwPXNoYXJpbmdcIixcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzFaOUJxSkMxdkNuTXhGU1JUOFlNYWZCMXNkbExBdjhtdT91c3A9c2hhcmluZ1wiLFxuICBdO1xuICBnZW5lcmF0ZUNvdXJzZXMoY291cnNlQXJyLCBsaW5rQXJyKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0dWR5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdHVkeUdlbik7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0dWR5ZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3R1ZHlHZW4pO1xuXG4vL0dlbmVyYXRlIFJvYWRtYXBcbmNvbnN0IHJvYWRHZW4gPSAoKSA9PiB7XG4gIGhvZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgc3R1ZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgcm9hZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKVwiO1xuICBlcnAuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIGdlbmVyYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicm9hZE1hcHNcIj5cbiAgPGRpdiBjbGFzcz1cInRhZ2xpbmVcIj5cbiAgICAgIDxzcGFuPkNob29zZTwvc3Bhbj5cbiAgICAgIDxzcGFuPllvdXIgQWNhZGVtaWMgVHJhaWw8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInN1Yi10YWdcIj5DaGFydCBZb3VyIEFjYWRlbWljIEpvdXJuZXk6IEV4cGxvcmUgTWFqb3IgYW5kIE1pbm9yIFBhdGhzPC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNlYXJjaC1iYXJcIj5cbiAgICAgIDxzcGFuPjxpIGNsYXNzPVwiYmkgYmktc2VhcmNoXCIgc3R5bGU9XCJmb250LXNpemU6IG1heCgyMHB4LDEuNXZ3KTtcIiA+PC9pPjwvc3Bhbj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY291cnNlLXNlbGVjdFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgZGF0YS1zZWFyY2g+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicm9hZHNcIj5cbiAgICAgIFxuICA8L2Rpdj5gO1xuICBsZXQgcm9hZEFyciA9IFtcIkNTRVwiLCBcIkVDRVwiLCBcIkVFRVwiLCBcIk1FQ0hcIiwgXCJCTVNcIiwgXCJFQ09cIl07XG4gIGdlbmVyYXRlUm9hZChyb2FkQXJyKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUm9hZCA9IChhcnJheSkgPT4ge1xuICBsZXQgcm9hZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvYWRzXCIpO1xuICBsZXQgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3Vyc2Utc2VsZWN0XCIpO1xuXG4gIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIC8vaW5wdXQgYmVpbmcgdHlwZWQgaW5zaWRlIHRoZSBzZWFyY2ggYmFyXG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IHNlYXJjaEJhci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgY291cnNlc1xuICAgIHJvYWRzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBicmFuY2hOYW1lID0gYXJyYXlbaW5kZXhdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAvL2NvbnN0IGxpbmsgPSBsaW5rQXJyYXlbaW5kZXhdO1xuICAgICAgaWYgKGJyYW5jaE5hbWUuaW5jbHVkZXMoc2VhcmNoVGV4dCkpIHtcbiAgICAgICAgbGV0IG1hcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcERpdi5jbGFzc0xpc3QuYWRkKFwicm9hZEJveFwiKTtcbiAgICAgICAgcm9hZHMuYXBwZW5kQ2hpbGQobWFwRGl2KTtcbiAgICAgICAgbWFwRGl2LmlubmVySFRNTCA9IGA8c3BhbiBpZD1cImNvdXJzZS0ke2luZGV4fVwiPiR7YXJyYXlbaW5kZXhdfTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgd2lkdGg6ODAlXCIgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2xpbmstclwiICBpZD1cIm1ham9yTGluay0ke2luZGV4fVwiPjxhIGNsYXNzPSdhcicgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TWFqb3I8L2E+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2xpbmstclwiIGlkPVwibWlub3JMaW5rLSR7aW5kZXh9XCI+PGEgY2xhc3M9J2FyJ2hyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPk1pbm9yPC9hPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5gO1xuXG4gICAgICAgIG1hcERpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY291cnNlLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtYWpvckxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1pbm9yTGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcERpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb3Vyc2UtJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1ham9yTGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWlub3JMaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAvL1RvIGdlbmVyYXRlIGNvdXJzZXMgd2hlbiB5b3UgbG9hZCB1cCBwYWdlXG4gIHNlYXJjaEJhci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKTtcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9hZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm9hZEdlbik7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvYWRmXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb2FkR2VuKTtcblxuLy9HZW5lcmF0ZSBFcnAgTWFuYWdlbWVudCBUYWJcbmNvbnN0IGVycEdlbiA9ICgpID0+IHtcbiAgaG9lLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICBzdHVkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICByb2FkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICBlcnAuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIycHggc29saWQgdmFyKC0tZm9udC1jb2xvcilcIjtcbiAgZ2VuZXJhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJlcnBNYW5hZ2VtZW50XCI+XG4gIDxkaXYgY2xhc3M9XCJ0YWdsaW5lXCI+XG4gICAgICA8c3Bhbj5TaW1wbGlmeTwvc3Bhbj5cbiAgICAgIDxzcGFuPiBZb3VyIFNudSBFeHBlcmllbmNlPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzdWItdGFnXCIgPkNvbW1vbmx5IGFza2VkIEZBUXMgPC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImxpbmtTZWN0aW9uXCI+XG4gICAgICA8ZGl2IGlkPVwiZXJwTGlua1wiPkVycDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImZhc3RMaW5rXCI+RmFzdHJhY2s8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJob3N0ZUxpbmtcIj5Ib3N0ZWwgTWFuYWdlbWVudDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImJiTGlua1wiPkJsYWNrYm9hcmQ8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmYXFzXCI+XG4gICAgICA8ZGl2IGNsYXNzPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHdpZHRoOiAxMDAlO1wiPlxuICAgICAgICAgICAgICA8c3Bhbj5XaGF0IGlzIEVycD88L3NwYW4+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktY2FyZXQtZG93bi1maWxsXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2xcIj5yYW5kb20gaW1hZ2UvdmlkZW88L2Rpdj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YDtcbiAgbGV0IGxpbmtTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rU2VjdGlvblwiKTtcbiAgbGV0IGxpbmtzID0gbGlua1NlY3Rpb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XG4gIGxldCBmYXFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXFzXCIpO1xuXG4gIGZ1bmN0aW9uIGZhcUZpbGwoYXJyYXkpIHtcbiAgICBmYXFzLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGVsZW1lbnQgPSBhcnJheVtpXTtcbiAgICAgIGxldCBmYXFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZmFxRGl2LmlubmVySFRNTCA9IGA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB3aWR0aDogMTAwJTtcIj5cbiAgICAgIDxzcGFuPiR7ZWxlbWVudC5xdWVzdGlvbn08L3NwYW4+XG4gICAgICA8c3Bhbj48aSBpZD0nZHJvcC0ke2l9JyBjbGFzcz1cImJpIGJpLWNhcmV0LWRvd24tZmlsbFwiPjwvaT48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzb2xcIiBpZD0nc29sLSR7aX0nPiR7ZWxlbWVudC5hbnN3ZXJ9PC9kaXY+YDtcbiAgICAgIGZhcXMuYXBwZW5kQ2hpbGQoZmFxRGl2KTtcbiAgICAgIGZhcURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBzb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc29sLSR7aX1gKTtcbiAgICAgICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZHJvcC0ke2l9YCk7XG4gICAgICAgIGlmIChzb2wuc3R5bGUuZGlzcGxheSA9PSBcImZsZXhcIikge1xuICAgICAgICAgIHNvbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgYXJyb3cuY2xhc3NMaXN0ID0gXCJiaS1jYXJldC1kb3duLWZpbGxcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb2wuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgIGFycm93LmNsYXNzTGlzdCA9IFwiYmktY2FyZXQtdXAtZmlsbFwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZmFxcy5pbm5lckhUTUwgPSBcIlwiO1xuICAvL0V4YW1wbGUgYXJyYXlzXG4gIGxldCBlcnBGYXFzID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgRVJQP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIlRoZSBTaGl2IE5hZGFyIFVuaXZlcnNpdHkgRVJQIHBvcnRhbCBpcyBhIHdlYi1iYXNlZCBhcHBsaWNhdGlvbiB0aGF0IHByb3ZpZGVzIHN0dWRlbnRzLCBmYWN1bHR5LCBhbmQgc3RhZmYgd2l0aCBhY2Nlc3MgdG8gYSB2YXJpZXR5IG9mIHVuaXZlcnNpdHkgc2VydmljZXMuIFRoZSBwb3J0YWwgaW5jbHVkZXMgZmVhdHVyZXMgc3VjaCBhcyBzdHVkZW50IHNlbGYtc2VydmljZSwgZmFjdWx0eSBzZWxmLXNlcnZpY2UsIHN0YWZmIHNlbGYtc2VydmljZSwgYW5kIHBhcmVudC1zdHVkZW50IHBvcnRhbC5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBsb2cgaW4gdG8gdGhlIEVSUD9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJUbyBsb2cgaW4gdG8geW91ciBFUlAsIHlvdSBtdXN0IGVudGVyIHlvdXIgU05VIG5ldCBJRCAoZS5nLi0geHkxMjMpIGFuZCBwYXNzd29yZC5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBhZGQgY291cnNlcyB0byBwbGFubmVyP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIlVwb24gbG9nZ2luZyBpbnRvIHRoZSBFUlAsIG5hdmlnYXRlIHRvIHRoZSAnQWNhZGVtaWMgUGxhbm5pbmcnIHNlY3Rpb24gbG9jYXRlZCBpbiB0aGUgbGVmdC1oYW5kIG1lbnUgYmFyLCBvciBkaXJlY3RseSBhY2Nlc3MgdGhlICdQbGFuJyBvcHRpb24gYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSBhbG9uZ3NpZGUgb3RoZXIgb3B0aW9ucyBsaWtlIHNlYXJjaCBhbmQgZW5yb2xsLiBQcm9jZWVkIHRvIGNsaWNrIG9uICdCcm93c2UgQ2F0YWxvZycgYW5kIHVzZSB0aGUgdGV4dCBib3ggdG8gaW5wdXQgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgc3ViamVjdCB5b3UgZGVzaXJlIHRvIHNlbGVjdCBhIGNvdXJzZSBmcm9tLiBBbGwgYXZhaWxhYmxlIHN1YmplY3Qgb3B0aW9ucyB3aWxsIGJlIGRpc3BsYXllZCwgd2hlcmUgeW91IGNhbiB0aGVuIGNsaWNrIHRoZSBkcm9wZG93biBidXR0b24gdG8gY2hvb3NlIHlvdXIgZGVzaXJlZCBjb3Vyc2UgYW5kIGNsaWNrIG9uICdBZGQgUGxhbm5lcicgdG8gaW5jbHVkZSBpdCBpbiB5b3VyIHBsYW5uZXIuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGVyZSB0byBzZWUgeW91ciB0aW1ldGFibGUgZnJvbT9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJJbiB0aGUgRVJQIHN5c3RlbSwgbG9jYXRlIHRoZSAnRW5yb2xsbWVudCcgb3B0aW9uIG9uIHRoZSBsZWZ0LWhhbmQgc2lkZSBvZiB0aGUgcGFnZSwgc2l0dWF0ZWQgdW5kZXIgdGhlIG1lbnUgYm94LiBDbGljayBvbiB0aGUgJ015IFdlZWtseSBTY2hlZHVsZScgb3B0aW9uIHRvIGFjY2VzcyB5b3VyIHRpbWV0YWJsZSBmb3IgdGhlIGN1cnJlbnQgd2Vlay5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBjaGVjayBHUEE/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiSW4gdGhlIEVSUCBzeXN0ZW0sIGZpbmQgdGhlICdFbnJvbGxtZW50JyBvcHRpb24gb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBwYWdlLCB3aGljaCBpcyBsb2NhdGVkIHVuZGVyIHRoZSBtZW51IGJveC4gQ2xpY2sgb24gJ1Rlcm0gU3RhdGlzdGljcycgYW5kIGNob29zZSB0aGUgc2VtZXN0ZXIgZm9yIHdoaWNoIHlvdSB3aXNoIHRvIGNoZWNrIHlvdXIgR1BBLiBUaGVuLCByZXZpZXcgeW91ciBHUEEgZm9yIHRoZSBzZWxlY3RlZCBzZW1lc3Rlci5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOlxuICAgICAgICBcIkhvdyB0byBjaGVjayB0aGUgdG90YWwgY3JlZGl0cyBjb21wbGV0ZWQgYW5kIHRvdGFsIGNyZWRpdHMgbGVmdD9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgJ0ZpbmQgdGhlIFwiTXkgQWNhZGVtaWNzXCIgb3B0aW9uIGluIHRoZSBFUlAgc3lzdGVtIGFsb25nIHdpdGggb3RoZXIgb3B0aW9ucyBsaWtlIFwiRW5yb2wsXCIgXCJQbGFuLFwiIGV0Yy4gbmVhciB0aGUgdG9wIG9mIHRoZSBwYWdlLiBUaGVuIHNlbGVjdCBcIlZpZXcgTXkgQWR2aXNlbWVudCBSZXBvcnQuXCIgVGhpcyByZXBvcnQgd2lsbCBzaG93IHRoZSBjcmVkaXRzIHlvdSBoYXZlIGFscmVhZHkgZWFybmVkIGFzIHdlbGwgYXMgdGhlIGNyZWRpdHMgeW91IHN0aWxsIG5lZWQgdG8gZmluaXNoLicsXG4gICAgfSxcbiAgXTtcbiAgbGV0IGZhc3RyYWNrRmFxcyA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIEZhc3RyYWNrP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICAnVG8gbGVhdmUgdGhlIGNhbXB1cyBmb3IgYSBkYXkgb3IgbG9uZ2VyLCB5b3UgbXVzdCBvYnRhaW4gYXBwcm92YWwgZnJvbSB0aGUgd2FyZGVuLiBUaGlzIGFwcHJvdmFsIGlzIHJlZmVycmVkIHRvIGFzIFwiZmFzdHJhY2suXCInLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IGRvIEkgYXBwbHkgZm9yIEZhc3RyYWNrP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICAnUGxlYXNlIGFjY2VzcyB0aGUgU05VTGlua3Mgd2Vic2l0ZSBhbmQgZmluZCB0aGUgXCJsb2dpblwiIG9wdGlvbi4gT25jZSBsb2dnZWQgaW4sIHlvdSB3aWxsIHNlZSBhIHZhcmlldHkgb2YgY2hvaWNlcy4gQ2xpY2sgb24gdGhlIFwiZmFzdHJhY2tcIiBvcHRpb24gdG8gYWNjZXNzIHRoZSBmb3JtIGZvciByZXF1ZXN0aW5nIHBlcm1pc3Npb24gdG8gbGVhdmUgdGhlIGNhbXB1cywgd2hldGhlciBpdCBpcyBmb3IgcGVyc29uYWwgb3Igb2ZmaWNpYWwgcmVhc29ucy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCB0byBkbyBpbiBjYXNlIEZhc3RyYWNrIGlzIHJlamVjdGVkP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIklmIHlvdXIgZmFzdHJhY2sgcmVxdWVzdCBpcyByZWplY3RlZCBmb3IgYW55IHJlYXNvbiwgeW91IGhhdmUgdHdvIG9wdGlvbnM6IFlvdSBjYW4gcmV2aWV3IHRoZSBmb3JtIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55IG1pc3Rha2VzLCBjb3JyZWN0IHRoZW0sIGFuZCByZXN1Ym1pdCBpdCBmb3IgYXBwcm92YWwuIEFsdGVybmF0aXZlbHksIGlmIHlvdSBuZWVkIHRvIGxlYXZlIHVyZ2VudGx5LCB5b3UgY2FuIGRpcmVjdGx5IGFwcHJvYWNoIHRoZSByZWNlcHRpb24gb2YgeW91ciBob3N0ZWwgYW5kIHJlcXVlc3QgYW4gZWFybHkgYXBwcm92YWwgZnJvbSB0aGVtLlwiLFxuICAgIH0sXG4gIF07XG4gIGxldCBob3N0ZWxGYXFzID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBjaG9vc2Ugcm9vbW1hdGVzP1wiLFxuICAgICAgYW5zd2VyOiBcIlRoZSBvcHRpb24gdG8gcmVtb3ZlIHJvb21tYXRlcyBpcyBubyBsb25nZXIgdmFsaWQgYXMgb2YgMjAyM1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIHNlbGVjdCB5b3VyIHJvb20/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiUGxlYXNlIHZpc2l0IHRoZSBTTlVMaW5rcyB3ZWJzaXRlIGFuZCBsb2NhdGUgdGhlICdsb2dpbicgb3B0aW9uLiBBZnRlciBsb2dnaW5nIGluLCB5b3Ugd2lsbCBiZSBwcmVzZW50ZWQgd2l0aCB2YXJpb3VzIGNob2ljZXMuIENsaWNrIG9uIHRoZSAnSG9zdGVsIE1hbmFnZW1lbnQgU3lzdGVtJyBvcHRpb24sIGFuZCBmcm9tIHRoZXJlLCBmaW5kIHRoZSAnUm9vbSBTZWxlY3Rpb24gUmVxdWVzdCcgb3B0aW9uLiBEdXJpbmcgdGhlIHJvb20gc2VsZWN0aW9uIGRheXMgYXNzaWduZWQgYnkgdGhlIG1hbmFnZW1lbnQsIHRoaXMgc2VsZWN0aW9uIHdpbGwgcmVkaXJlY3QgeW91IHRvIGEgcGFnZSB3aGVyZSB5b3UgY2FuIGNob29zZSB5b3VyIHJvb20uXCIsXG4gICAgfSxcbiAgXTtcbiAgbGV0IGJsYWNrYm9hcmRGYXFzID0gW1xuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgQmxhY2tib2FyZD9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJCbGFja2JvYXJkIGlzIGFuIG9ubGluZSBsZWFybmluZyBtYW5hZ2VtZW50IHN5c3RlbSAoTE1TKSB1c2VkIGJ5IHByb2Zlc3NvcnMgdG8gcHJvdmlkZSBjb3Vyc2UgbWF0ZXJpYWxzLCBpbmNsdWRpbmcgbm90ZXMsIGFzc2lnbm1lbnRzLCBhbm5vdW5jZW1lbnRzLCBhbmQgb3RoZXIgcmVzb3VyY2VzIHRvIHN0dWRlbnRzIGluIGEgZGlnaXRhbCBmb3JtYXQuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gbG9nIGluIGJsYWNrYm9hcmQ/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiVG8gYWNjZXNzIHRoZSBCbGFja2JvYXJkIHBsYXRmb3JtIGF0IFNOVSwgeW91IGhhdmUgdHdvIG9wdGlvbnMuIEZpcnN0bHksIHlvdSBjYW4gbmF2aWdhdGUgdG8gU05VIGxpbmtzIGFuZCBzZWFyY2ggZm9yIHRoZSAnQmxhY2tib2FyZCcgb3B0aW9uIG9uIHRoZSB3ZWJzaXRlLiBBbHRlcm5hdGl2ZWx5LCB5b3UgbWF5IGRpcmVjdGx5IHNlYXJjaCBmb3IgJ1NOVSBCbGFja2JvYXJkJyBvbiB0aGUgaW50ZXJuZXQuIE9uY2UgeW91IGZpbmQgdGhlIEJsYWNrYm9hcmQgcG9ydGFsLCBsb2cgaW4gdXNpbmcgeW91ciBTTlUgZW1haWwgSUQgYW5kIHBhc3N3b3JkIHRvIGdhaW4gYWNjZXNzIHRvIHRoZSBwbGF0Zm9ybS4uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gYWRkIGNvdXJzZXMgdG8gZmF2b3JpdGVzP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIkFmdGVyIGxvZ2dpbmcgaW4gdG8geW91ciBCbGFja2JvYXJkIGFjY291bnQsIGZpbmQgdGhlICdDb3Vyc2VzJyBvcHRpb24gbG9jYXRlZCBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHNjcmVlbiBhbmQgY2xpY2sgb24gaXQuIFRoaXMgYWN0aW9uIHdpbGwgZGlzcGxheSBhIGxpc3Qgb2YgYWxsIHRoZSBjb3Vyc2VzIHlvdSBhcmUgY3VycmVudGx5IGVucm9sbGVkIGluLiBUbyBtYXJrIGEgY291cnNlIGFzIGEgZmF2b3JpdGUsIGxvb2sgZm9yIHRoZSBzdGFyIGJ1dHRvbiBzaXR1YXRlZCBvbiB0aGUgcmlnaHQtaGFuZCBzaWRlIG9mIGVhY2ggY291cnNlIGhlYWRpbmcuIENsaWNrIG9uIHRoZSBzdGFyIGJ1dHRvbiB0byBhZGQgdGhlIGNvdXJzZSB0byB5b3VyIGZhdm9yaXRlcyBsaXN0LlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IGNhbiBJIHN1Ym1pdCBhc3NpZ25tZW50cyBvbiBCbGFja2JvYXJkP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIk5vcm1hbGx5LCB0aGUgbGluayBmb3Igc3VibWl0dGluZyBhc3NpZ25tZW50cyBjYW4gYmUgZm91bmQgaW4gdGhlICdBY3Rpdml0eSBTZWN0aW9uJyBvZiB0aGUgY291cnNlIHBhZ2UsIGFsb25nIHdpdGggdGhlIGRlYWRsaW5lIGZvciBzdWJtaXNzaW9uLiBJZiB5b3UgYXJlIHVuYWJsZSB0byBsb2NhdGUgdGhlIGxpbmsgdGhlcmUsIHlvdSBjYW4gZm9sbG93IHRoZXNlIHN0ZXBzOiBGaXJzdCwgY2xpY2sgb24gdGhlICdDb3Vyc2VzJyBvcHRpb24gb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBzY3JlZW4uIE5leHQsIGZpbmQgdGhlIHNwZWNpZmljIGNvdXJzZSBmb3Igd2hpY2ggeW91IHdhbnQgdG8gc3VibWl0IHRoZSBhc3NpZ25tZW50LiBPbmNlIHlvdSBoYXZlIHNlbGVjdGVkIHRoZSBjb3Vyc2UsIG5hdmlnYXRlIHRvIHRoZSAnQ29udGVudCBTZWN0aW9uJyBvZiB0aGUgY291cnNlIHBhZ2UgYW5kIGxvb2sgZm9yIHRoZSBsaW5rIHRvIHRoZSBhc3NpZ25tZW50IHN1Ym1pc3Npb24uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gYWNjZXNzIGNvbnRlbnQgb24gYmxhY2tib2FyZD9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJVc3VhbGx5LCB0aGUgbW9zdCByZWNlbnQgY29udGVudCBpcyB2aXNpYmxlIG9uIHRoZSAnQWN0aXZpdHkgU3RyZWFtLicgSG93ZXZlciwgaWYgeW91IHdhbnQgdG8gYWNjZXNzIGFsbCB0aGUgY29udGVudCBhdmFpbGFibGUgZm9yIGEgcGFydGljdWxhciBjb3Vyc2UsIGZvbGxvdyB0aGVzZSBzdGVwczogR28gdG8gdGhlICdDb3Vyc2VzJyBzZWN0aW9uIGFuZCBjaG9vc2UgdGhlIHNwZWNpZmljIGNvdXJzZSB5b3Ugd2lzaCB0byB2aWV3IHRoZSBjb250ZW50IG9mLiBMb29rIGZvciB0aGUgJ0NvbnRlbnQnIHNlY3Rpb24sIHR5cGljYWxseSBsb2NhdGVkIG9uIHRoZSBsZWZ0LWhhbmQgc2lkZSBvZiB0aGUgc2NyZWVuLiBCeSBhY2Nlc3NpbmcgdGhpcyBzZWN0aW9uLCB5b3Ugd2lsbCBiZSBhYmxlIHRvIHNlZSBhbGwgdGhlIGNvbnRlbnQgcmVsYXRlZCB0byB0aGUgc2VsZWN0ZWQgY291cnNlLlwiLFxuICAgIH0sXG4gIF07XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJwTGlua1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZhcUZpbGwoZXJwRmFxcyk7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhc3RMaW5rXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZmFxRmlsbChmYXN0cmFja0ZhcXMpO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3N0ZUxpbmtcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmYXFGaWxsKGhvc3RlbEZhcXMpO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYkxpbmtcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmYXFGaWxsKGJsYWNrYm9hcmRGYXFzKTtcbiAgfSk7XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBlcnBHZW4oKTtcbn0pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnBmXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGVycEdlbigpO1xufSk7XG5cbmNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPXJhZGlvXVwiKTtcblxuY29uc3Qgc2xpZGVTaG93ID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhZGlvQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgIH0sIDMwMDApO1xuICB9XG59O1xuc2xpZGVTaG93KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=