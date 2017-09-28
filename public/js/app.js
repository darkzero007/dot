/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\vue-loader\\lib\\component-normalizer.js'");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(10);
module.exports = __webpack_require__(43);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(11);

window.Vue = __webpack_require__(36);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));
Vue.component('user', __webpack_require__(40));
var app = new Vue({
  el: '#app'
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(12);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = __webpack_require__(14);

  __webpack_require__(15);
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(16);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/***/ }),
/* 12 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\lodash\\lodash.js'");

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\jquery\\dist\\jquery.js'");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\bootstrap-sass\\assets\\javascripts\\bootstrap.js'");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\axios\\index.js'");

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\vue\\dist\\vue.common.js'");

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(8)
/* script */
var __vue_script__ = __webpack_require__(41)
/* template */
var __vue_template__ = __webpack_require__(42)
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\user.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b021d0e8", Component.options)
  } else {
    hotAPI.reload("data-v-b021d0e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            list: [],
            user: {
                id: '',
                nama: '',
                alamat: '',
                telepon: ''
            },
            edit: false
        };
    },
    created: function created() {
        this.fetchUserList();
    },


    methods: {
        fetchUserList: function fetchUserList() {
            var _this = this;

            axios.get('api/user').then(function (res) {
                _this.list = res.data;
            });
        },
        showModal: function showModal(id) {
            this.edit = id;
            if (this.edit) {
                console.log('edit');
                console.log(this.edit);
                //get value
                this.getUserById(id);
                //then set value to form
                $('#exampleModal').modal('toggle');
            } else {
                console.log('insert');
                console.log(this.edit);
                this.user.nama = '';
                this.user.alamat = '';
                this.user.telepon = '';
                $('#exampleModal').modal('show');
            }
        },
        manageUser: function manageUser() {
            var _this2 = this;

            if (this.edit) {
                axios.put('api/user/' + this.edit, this.user).then(function (res) {
                    _this2.user.nama = '';
                    _this2.user.alamat = '';
                    _this2.user.telepon = '';
                    _this2.fetchUserList();
                    $('#exampleModal').modal('hide');
                }).catch(function (err) {
                    return console.error(err);
                });
            } else {
                axios.post('api/user', this.user).then(function (res) {
                    axios.post('http://dev.dot.co.id/smipoc/api/user', res.data);
                    console.log(res);
                    _this2.user.nama = '';
                    _this2.user.alamat = '';
                    _this2.user.telepon = '';
                    _this2.fetchUserList();
                    $('#exampleModal').modal('hide');
                }).catch(function (err) {
                    return console.error(err);
                });
            }
        },
        deleteUser: function deleteUser(id) {
            var _this3 = this;

            var result = confirm("Apakah anda yakin?");
            if (result) {
                axios.delete('api/user/' + id).then(function (res) {
                    _this3.fetchUserList();
                }).catch(function (err) {
                    return console.error(err);
                });
            }
        },
        getUserById: function getUserById(id) {
            var _this4 = this;

            axios.get('api/user/' + id).then(function (res) {
                _this4.user = res.data;
            }).catch(function (err) {
                return console.error(err);
            });
        }
    }
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("h1", [_vm._v("CRUD user")]),
    _vm._v(" "),
    _c("h4", [_vm._v("Add New User")]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn btn-primary",
        attrs: { type: "button" },
        on: {
          click: function($event) {
            _vm.showModal(false)
          }
        }
      },
      [_vm._v("\n          Create\n        ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c(
                "form",
                {
                  attrs: { action: "#" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.manageUser()
                    }
                  }
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v("Nama")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.nama,
                            expression: "user.nama"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "nama",
                          placeholder: "masukkan nama"
                        },
                        domProps: { value: _vm.user.nama },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.user.nama = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v("Alamat")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.alamat,
                            expression: "user.alamat"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "alamat",
                          placeholder: "masukkan alamat"
                        },
                        domProps: { value: _vm.user.alamat },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.user.alamat = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v("No Telepon")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.telepon,
                            expression: "user.telepon"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "telepon",
                          placeholder: "masukkan no telepon"
                        },
                        domProps: { value: _vm.user.telepon },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.user.telepon = $event.target.value
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("h4", [_vm._v("List User")]),
    _vm._v(" "),
    _c("ul", { staticClass: "list-group" }, [
      _vm.list.length === 0 ? _c("li", [_vm._v("Empty")]) : _vm._e()
    ]),
    _vm._v(" "),
    _c("table", { staticClass: "table" }, [
      _vm._m(2),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.list, function(user, index) {
          return _c("tr", [
            _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(index + 1))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.nama))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.alamat))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.telepon))]),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-xs ",
                  on: {
                    click: function($event) {
                      _vm.showModal(user.id)
                    }
                  }
                },
                [_vm._v("Edit")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-danger btn-xs",
                  on: {
                    click: function($event) {
                      _vm.deleteUser(user.id)
                    }
                  }
                },
                [_vm._v("Delete")]
              )
            ])
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Modal")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nama")]),
        _vm._v(" "),
        _c("th", [_vm._v("Alamat")]),
        _vm._v(" "),
        _c("th", [_vm._v("No Telepon")]),
        _vm._v(" "),
        _c("th", [_vm._v("Operasi")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b021d0e8", module.exports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \r\nundefined\r\n^\r\n      File to import not found or unreadable: C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\bootstrap-sass\\assets\\stylesheets\\_bootstrap.scss.\nParent style sheet: stdin\r\n      in C:\\xampp7\\htdocs\\dot\\laravel\\resources\\assets\\sass\\app.scss (line 9, column 1)\n    at runLoaders (C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\webpack\\lib\\NormalModule.js:195:19)\n    at C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at context.callback (C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\sass-loader\\lib\\loader.js:55:13)\n    at Object.<anonymous> (C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\async\\dist\\async.js:2244:31)\n    at Object.callback (C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\async\\dist\\async.js:906:16)\n    at options.error (C:\\xampp7\\htdocs\\dot\\laravel\\node_modules\\node-sass\\lib\\index.js:294:32)");

/***/ })
/******/ ]);