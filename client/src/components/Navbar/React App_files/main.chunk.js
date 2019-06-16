(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Home.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/Home.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  box-sizing: border-box;\n  margin: 0.25rem !important;\n}\n.request {\n  width: auto;\n  height: 10rem;\n  padding-top: 3rem;\n  background-color: rgb(255, 9, 9);\n}\n.help {\n  margin: 0 auto;\n  color: rgb(5, 5, 5);\n  background-color: rgb(255, 255, 255);\n\n  border-style: none;\n  width: 8rem !important;\n  font-size: 0.75rem;\n  display: block;\n  position: relative;\n}\n.service {\n  margin: 0 auto;\n  color: rgb(5, 5, 5);\n  background-color: rgb(255, 255, 255);\n\n  border-style: none;\n  width: 8rem !important;\n  font-size: 0.75rem;\n  display: block;\n  position: relative;\n  margin-top: 2rem;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/NavBar */ "./src/Components/NavBar.js");
/* harmony import */ var _Components_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Map */ "./src/Components/Map.js");
/* harmony import */ var _Components_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Form */ "./src/Components/Form.js");
/* harmony import */ var _Components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Home */ "./src/Components/Home.js");
/* harmony import */ var _Components_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Contact */ "./src/Components/Contact.js");
/* harmony import */ var _Components_ProviderForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/ProviderForm */ "./src/Components/ProviderForm.js");
var _jsxFileName = "/Users/johnlwin/hackathon/src/App.js";









function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/maps",
    component: _Components_Map__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/request",
    component: _Components_Form__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/report",
    component: _Components_ProviderForm__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _Components_Home__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/contact",
    component: _Components_Contact__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/Contact.js":
/*!***********************************!*\
  !*** ./src/Components/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/johnlwin/hackathon/src/Components/Contact.js";


class Contact extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {}

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "col s12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Hello World")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/Components/Form.js":
/*!********************************!*\
  !*** ./src/Components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_fbConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/fbConfig.js */ "./src/config/fbConfig.js");
var _jsxFileName = "/Users/johnlwin/hackathon/src/Components/Form.js";



class Form extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      name: "",
      lastName: ""
    };

    this.handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      const requestRef = _config_fbConfig_js__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection("requests");
      const request = {
        name: this.state.name,
        lastName: this.state.lastName
      };
      requestRef.add(request);
      this.setState({
        name: "",
        lastName: ""
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "col s12",
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-field col s6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "first_name",
      type: "text",
      className: "validate",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "first_name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "First Name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-field col s6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "last_name",
      type: "text",
      className: "validate",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "last_name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Last Name"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn red lighten-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Create"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/Components/Home.css":
/*!*********************************!*\
  !*** ./src/Components/Home.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Home.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Home.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Home.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Components/Home.js":
/*!********************************!*\
  !*** ./src/Components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_landing_banner_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/landing-banner.png */ "./src/resources/landing-banner.png");
/* harmony import */ var _resources_landing_banner_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_landing_banner_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.css */ "./src/Components/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProviderForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProviderForm */ "./src/Components/ProviderForm.js");
var _jsxFileName = "/Users/johnlwin/hackathon/src/Components/Home.js";





class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "request",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "help",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Looking to help"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "service",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Looking for services")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        position: "relative"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _resources_landing_banner_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      alt: "share",
      style: {
        width: "100%",
        height: "16rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        position: "absolute",
        top: "5%",
        left: "10%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "HOW WE WORK?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "WE CONNECT PEOPLE IN NEED TO SERVICES AND HOUSING "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      style: {
        textAlign: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "20rem",
        height: "20rem",
        borderTospan: "1px solid black",
        borderBottom: "1px solid black",
        margin: "0 auto",
        marginTop: "2rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "video"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col s3 left",
      style: {
        marginRight: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "this"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "col s9 right",
      style: {
        textAlign: "left"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "LA-HOP is designed to assist people experiencing homelessness in Los Angeles County with outreach services. We\u2019ll use this information to dispatch a homeless services outreach team to the area."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col s9 right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        textAlign: "left"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "For medical or mental health emergencies, please call 911.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col s3 left",
      style: {
        marginRight: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "this")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col s9 right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        textAlign: "left"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "For crime or illegal activity, please contact your local law enforcement agency.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col s3 left",
      style: {
        marginRight: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "this")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col s9 right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        textAlign: "left"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "For services like bulky item pickup, illegal dumping or graffiti removal, please contact your municipality.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col s3 left",
      style: {
        marginRight: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "this")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col s9 right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        textAlign: "left"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "LA-HOP does not replace homeless encampment reporting protocols. Please contact your municipality.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col s3 left",
      style: {
        marginRight: "1rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "this"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/Components/Map.js":
/*!*******************************!*\
  !*** ./src/Components/Map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/johnlwin/hackathon/src/Components/Map.js";


const mapStyles = {
  width: '50%',
  height: '50%'
};

class MapComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      latitude: null,
      longitude: null,
      isMarkerShown: false
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  }

  render() {
    console.log(this.state);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Map"], {
      google: this.props.google,
      zoom: 14,
      style: mapStyles,
      center: {
        lat: this.state.latitude,
        lng: this.state.longitude
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      title: "Your Location",
      name: 'SOMA',
      position: {
        lat: this.state.latitude,
        lng: this.state.longitude
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["GoogleApiWrapper"])({
  apiKey: "AIzaSyD8oYiLznkr2O3XV8XYMHqkae-EyEhtxko"
})(MapComponent));

/***/ }),

/***/ "./src/Components/NavBar.js":
/*!**********************************!*\
  !*** ./src/Components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/routes */ "./src/constants/routes.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/johnlwin/hackathon/src/Components/NavBar.js";





class NavBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "nav-wrapper darken-3",
      style: {
        backgroundColor: "rgb(255, 9, 9)"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      className: "brand-logo hide-on-med-and-down",
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "LA-HOP", " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      id: "nav-mobile",
      className: "col s12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      style: {
        borderRight: "0.1px solid #fff"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: "/request",
      style: {
        padding: "0 10px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, " ", "SUBMIT A REQUEST", " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      style: {
        borderRight: "0.1px solid #fff"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: "/aboutus",
      style: {
        padding: "0 10px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, " ", "RESOURCES", " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: "/contact",
      style: {
        padding: "0 10px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, " ", "CONTACT", " ")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/Components/ProviderForm.js":
/*!****************************************!*\
  !*** ./src/Components/ProviderForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_fbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/fbConfig */ "./src/config/fbConfig.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/johnlwin/hackathon/src/Components/ProviderForm.js";




class ProviderForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      location: "",
      date: "",
      time: "",
      service: "",
      email: ""
    };

    this.handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      const requestRef = _config_fbConfig__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection("requests");
      const request = {
        location: this.state.location
      };
      requestRef.add(request);
      this.setState({
        location: ""
      });
    };
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      const elem1 = document.querySelectorAll(".dropdown-trigger");
      const instance1 = materialize_css__WEBPACK_IMPORTED_MODULE_2___default.a.Dropdown.init(elem1);
      const elem2 = document.querySelectorAll(".datepicker");
      const instance2 = materialize_css__WEBPACK_IMPORTED_MODULE_2___default.a.Datepicker.init(elem2);
      const elem3 = document.querySelectorAll(".timepicker");
      const instance3 = materialize_css__WEBPACK_IMPORTED_MODULE_2___default.a.Timepicker.init(elem3);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "col s12",
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-field col s6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "location",
      id: "location",
      type: "text",
      className: "validate",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "location",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Location")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-field col s6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "date",
      type: "text",
      class: "datepicker",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Date last seen")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-field col s6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "time",
      type: "text",
      class: "timepicker",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Time last seen")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-field col s6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "email",
      id: "email",
      type: "email",
      className: "validate",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Email for confirmation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "dropdown-trigger btn col s4 left",
      href: "#dropdown1",
      "data-target": "dropdown1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      id: "dropdown1",
      class: "dropdown-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Showers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      class: "divider",
      tabindex: "-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Clothes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      class: "divider",
      tabindex: "-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Shelters"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn red lighten-1 col s4 right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "Create")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProviderForm);

/***/ }),

/***/ "./src/config/fbConfig.js":
/*!********************************!*\
  !*** ./src/config/fbConfig.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");


var firebaseConfig = {
  apiKey: Object({"NODE_ENV":"development","PUBLIC_URL":""}).FB_APIKEY,
  authDomain: Object({"NODE_ENV":"development","PUBLIC_URL":""}).FB_AUTHDOMAIN,
  databaseURL: "https://gahackathon-95ace.firebaseio.com",
  projectId: "gahackathon-95ace",
  storageBucket: "gahackathon-95ace.appspot.com",
  messagingSenderId: "280556010028",
  appId: "1:280556010028:web:fcf6342ad620a807"
}; // Initialize Firebase

firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/constants/routes.js":
/*!*********************************!*\
  !*** ./src/constants/routes.js ***!
  \*********************************/
/*! exports provided: ROOT, REQUEST, REPORT, ABOUTUS, CONTACT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT", function() { return ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST", function() { return REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPORT", function() { return REPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOUTUS", function() { return ABOUTUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACT", function() { return CONTACT; });
const ROOT = "/";
const REQUEST = "/request";
const REPORT = "/report";
const ABOUTUS = "/aboutus";
const CONTACT = "/contact";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/johnlwin/hackathon/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/resources/landing-banner.png":
/*!******************************************!*\
  !*** ./src/resources/landing-banner.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/landing-banner.66ae985a.png";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/johnlwin/hackathon/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/johnlwin/hackathon/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map