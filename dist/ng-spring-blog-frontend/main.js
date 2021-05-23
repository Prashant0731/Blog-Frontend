(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-post.service.ts":
/*!*************************************!*\
  !*** ./src/app/add-post.service.ts ***!
  \*************************************/
/*! exports provided: AddPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostService", function() { return AddPostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AddPostService = /** @class */ (function () {
    function AddPostService(httpClient) {
        this.httpClient = httpClient;
    }
    AddPostService.prototype.addPost = function (postPayload) {
        return this.httpClient.post('http://13.127.71.50:8080/api/posts/', postPayload);
        //  return this.httpClient.post('http://localhost:8080/api/posts/', postPayload);
    };
    AddPostService.prototype.getAllPosts = function () {
        return this.httpClient.get("http://13.127.71.50:8080/api/posts/all");
        //  return this.httpClient.get<Array<PostPayload>>("http://localhost:8080/api/posts/all");
    };
    AddPostService.prototype.getPost = function (permaLink) {
        return this.httpClient.get('http://13.127.71.50:8080/api/posts/get/' + permaLink);
        //  return this.httpClient.get<PostPayload>('http://localhost:8080/api/posts/get/' + permaLink);
    };
    AddPostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddPostService);
    return AddPostService;
}());



/***/ }),

/***/ "./src/app/add-post/add-post.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-post/add-post.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-post-content{\r\n  padding-top: 20px;\r\n}\r\n\r\n.new-post-title{\r\n  color: royalblue;\r\n}\r\n\r\n.post-content, .post-subject, .post-title{\r\n  color: royalblue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBvc3QvYWRkLXBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wb3N0L2FkZC1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLXBvc3QtY29udGVudHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLm5ldy1wb3N0LXRpdGxle1xyXG4gIGNvbG9yOiByb3lhbGJsdWU7XHJcbn1cclxuXHJcbi5wb3N0LWNvbnRlbnQsIC5wb3N0LXN1YmplY3QsIC5wb3N0LXRpdGxle1xyXG4gIGNvbG9yOiByb3lhbGJsdWU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/add-post/add-post.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-post/add-post.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-post-content\">\r\n  <div class=\"container\">\r\n    <div>\r\n      <h3 class=\"new-post-title\">Create New Post</h3>\r\n    </div>\r\n    <hr>\r\n    <form [formGroup]=\"addPostForm\" (ngSubmit)=\"addPost()\">\r\n      <div class=\"form-group\">\r\n        <label class=\"post-title\">Title</label>\r\n        <input type=\"text\" [formControlName]=\"'title'\" class=\"form-control\" placeholder=\"Title\" required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">  \r\n        <label class=\"post-subject\">Subject</label>\r\n        <input type=\"text\" [formControlName]=\"'subject'\" class=\"form-control\" placeholder=\"Subject\" required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"post-content\">Body</label>\r\n        <editor [formControlName]=\"'body'\" [init]=\"{plugins: 'link'}\"></editor>\r\n      </div>\r\n\r\n  <!-- TAG \r\n      <div class=\"form-group\">\r\n        <label class=\"post-title\">Tags</label>\r\n        <input type=\"text\" [formControlName]=\"'title'\" class=\"form-control\" placeholder=\"TAG\">\r\n      </div> \r\n  -->\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Post</button>\r\n      </div>\r\n    </form >\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-post/add-post.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-post/add-post.component.ts ***!
  \************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-post.service */ "./src/app/add-post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(addpostService, router) {
        this.addpostService = addpostService;
        this.router = router;
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.body = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        //pc
        this.subject = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.addPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: this.title,
            body: this.body,
            //pc
            subject: this.subject
        });
        this.postPayload = {
            id: '',
            content: '',
            title: '',
            username: '',
            subject: '',
            created_on: '' //pc
        };
    }
    AddPostComponent.prototype.ngOnInit = function () {
    };
    AddPostComponent.prototype.addPost = function () {
        var _this = this;
        this.postPayload.content = this.addPostForm.get('body').value;
        this.postPayload.title = this.addPostForm.get('title').value;
        console.log("hello1");
        this.postPayload.subject = this.addPostForm.get('subject').value;
        this.addpostService.addPost(this.postPayload).subscribe(function (data) {
            _this.router.navigateByUrl('/');
        }, function (error) {
            console.log('Failure Response');
        });
    };
    AddPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-post',
            template: __webpack_require__(/*! ./add-post.component.html */ "./src/app/add-post/add-post.component.html"),
            styles: [__webpack_require__(/*! ./add-post.component.css */ "./src/app/add-post/add-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_add_post_service__WEBPACK_IMPORTED_MODULE_3__["AddPostService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddPostComponent);
    return AddPostComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Dataoct Technologies';
        //  Pagination 
        // This is the app component (app.component.ts) from the example, it creates a hardcoded array of items to be paged in the ngOnInit() method, 
        //and updates the current page of items in the onChangePage() callback method.
        this.items = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // an example array of 150 items to be paged
        this.items = Array(150).fill(0).map(function (x, i) { return ({ id: (i + 1), name: "Item " + (i + 1) }); });
    };
    AppComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_success_register_success_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/register-success/register-success.component */ "./src/app/auth/register-success/register-success.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-post/add-post.component */ "./src/app/add-post/add-post.component.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js");
/* harmony import */ var _http_client_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./http-client-interceptor */ "./src/app/http-client-interceptor.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jw-angular-pagination */ "./node_modules/jw-angular-pagination/fesm5/jw-angular-pagination.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_Product_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./product/Product-Components/relay-on/relay-on.component */ "./src/app/product/Product-Components/relay-on/relay-on.component.ts");
/* harmony import */ var _product_Product_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./product/Product-Components/top-content/top-content.component */ "./src/app/product/Product-Components/top-content/top-content.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _auth_register_success_register_success_component__WEBPACK_IMPORTED_MODULE_8__["RegisterSuccessComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_14__["AddPostComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"],
                jw_angular_pagination__WEBPACK_IMPORTED_MODULE_19__["JwPaginationComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_20__["ProductComponent"],
                _product_Product_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_21__["RelayOnComponent"],
                _product_Product_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_22__["TopContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_12__["Ng2Webstorage"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
                    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_20__["ProductComponent"] },
                    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
                    { path: 'post/:id', component: _post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"] },
                    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
                    { path: 'register-success', component: _auth_register_success_register_success_component__WEBPACK_IMPORTED_MODULE_8__["RegisterSuccessComponent"] },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
                    { path: 'add-post', component: _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_14__["AddPostComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]] }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__["EditorModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _http_client_interceptor__WEBPACK_IMPORTED_MODULE_16__["HttpClientInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var isAuthenticated = this.authService.isAuthenticated();
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");





var AuthService = /** @class */ (function () {
    // private url = 'http://localhost:8080/api/auth/';
    function AuthService(httpClient, localStoraqeService) {
        this.httpClient = httpClient;
        this.localStoraqeService = localStoraqeService;
        this.url = 'http://13.127.71.50:8080/api/auth/';
    }
    AuthService.prototype.register = function (registerPayload) {
        return this.httpClient.post(this.url + 'signup', registerPayload);
    };
    AuthService.prototype.login = function (loginPayload) {
        var _this = this;
        return this.httpClient.post(this.url + 'login', loginPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.localStoraqeService.store('authenticationToken', data.authenticationToken);
            _this.localStoraqeService.store('username', data.username);
            return true;
        }));
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.localStoraqeService.retrieve('username') != null;
    };
    AuthService.prototype.logout = function () {
        this.localStoraqeService.clear('authenticationToken');
        this.localStoraqeService.clear('username');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please Sign in</h1>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputUsername\" class=\"sr-only\">Username</label>\r\n      <input type=\"text\" id=\"inputUsername\" [formControlName]=\"'username'\" class=\"form-control\" placeholder=\"Username\" required=\"\" autofocus=\"\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n      <input type=\"password\" id=\"inputPassword\" [formControlName]=\"'password'\" class=\"form-control\" placeholder=\"Password\" required=\"\">\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.loginPayload = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginPayload.username = this.loginForm.get('username').value;
        this.loginPayload.password = this.loginForm.get('password').value;
        this.authService.login(this.loginPayload).subscribe(function (data) {
            if (data) {
                console.log('login success');
                _this.router.navigateByUrl('/home');
            }
            else {
                console.log('Login failed');
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register-success/register-success.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/auth/register-success/register-success.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXItc3VjY2Vzcy9yZWdpc3Rlci1zdWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/register-success/register-success.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/auth/register-success/register-success.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br><br><br><br><br><br>\r\n  <h5>\r\n    Hey,<br><br>\r\n    Thanks for signing up to Dataoct Technologies.<br>\r\n    Your registration is now confirmed.<br><br>\r\n\r\n    <a href=\"/login\">\r\n      <button  type=\"button\" class=\"btn btn-success\">\r\n        Login\r\n      </button>\r\n    </a>\r\n    <br><br>\r\n\r\n    Thanks,<br>\r\n    Dataoct Technologies\r\n    <br><br> \r\n  \r\n\r\n  </h5>\r\n  <h6 style=\"color: black;\">\r\n    If you ever have any questions,<br> \r\n    please don't hesitate to contact our team at info@dataoct.com<br><br>\r\n  </h6>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/register-success/register-success.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/auth/register-success/register-success.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSuccessComponent", function() { return RegisterSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterSuccessComponent = /** @class */ (function () {
    function RegisterSuccessComponent() {
    }
    RegisterSuccessComponent.prototype.ngOnInit = function () {
    };
    RegisterSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-success',
            template: __webpack_require__(/*! ./register-success.component.html */ "./src/app/auth/register-success/register-success.component.html"),
            styles: [__webpack_require__(/*! ./register-success.component.css */ "./src/app/auth/register-success/register-success.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterSuccessComponent);
    return RegisterSuccessComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container justify-content-center\">\r\n  <form class=\"form-signin\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please Register</h1>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputUsername\" class=\"sr-only\">Username</label>\r\n      <input type=\"text\" id=\"inputUsername\" [formControlName]=\"'username'\" class=\"form-control\" placeholder=\"Username\" required=\"\" autofocus=\"\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputEmail\" class=\"sr-only\">Email</label>\r\n      <input type=\"text\" id=\"inputEmail\" [formControlName]=\"'email'\"class=\"form-control\" placeholder=\"Email\" required=\"\" autofocus=\"\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n      <input type=\"password\" id=\"inputPassword\" [formControlName]=\"'password'\" class=\"form-control\" placeholder=\"Password\" required=\"\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputConfirmPassword\" class=\"sr-only\">Password</label>\r\n      <input type=\"password\" id=\"inputConfirmPassword\" [formControlName]=\"'confirmPassword'\" class=\"form-control\" placeholder=\"Confirm Password\" required=\"\">\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign up</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.registerForm = this.formBuilder.group({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
        this.registerPayload = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.registerPayload.username = this.registerForm.get('username').value;
        this.registerPayload.email = this.registerForm.get('email').value;
        this.registerPayload.password = this.registerForm.get('password').value;
        this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword').value;
        this.authService.register(this.registerPayload).subscribe(function (data) {
            console.log('register succes');
            _this.router.navigateByUrl('/register-success');
        }, function (error) {
            console.log('register failed');
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n  padding: 5px 20px;\r\n  background: black;\r\n}\r\n\r\n.title, .product{\r\n  color: aliceblue;\r\n  text-decoration: none;\r\n}\r\n\r\n.login,.register{\r\n  float: right;\r\n  text-decoration: none;\r\n  color: aliceblue;\r\n  padding-top: 10px;\r\n}\r\n\r\n.logout,.new-post{\r\n  float: right;\r\n  color: aliceblue;\r\n  padding-top: 10px;\r\n}\r\n\r\n.logout:hover, .new-post:hover{\r\n  color: aliceblue;\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4udGl0bGUsIC5wcm9kdWN0e1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubG9naW4sLnJlZ2lzdGVye1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxvZ291dCwubmV3LXBvc3R7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dvdXQ6aG92ZXIsIC5uZXctcG9zdDpob3ZlcntcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<div class=\"header\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      \r\n      <div class=\"col-md-5\">\r\n        <h2><a href=\"\" class=\"title\"> Dataoct Technologies</a></h2>\r\n      </div> <!-- Title -->\r\n\r\n      <div class=\"col-md-6\" *ngIf=\"authService.isAuthenticated()\">\r\n          <a href=\"/add-post\" class=\"new-post btn btn-success\">Add Post</a>\r\n          <button class=\"logout btn btn-default\" (click)=\"logout()\">Logout</button>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"col-md-7\" *ngIf=\"!authService.isAuthenticated()\">\r\n\r\n        <a href=\"/home\" class=\"home btn btn-default\" >Home\r\n          <!-- <i class=\"material-icons\" style=\"font-size:31px;color:crimson\">fingerprint</i>   -->\r\n        </a>\r\n\r\n        <a href=\"/product\" class=\"product btn btn-default\" >Product\r\n          <!-- <i class=\"material-icons\" style=\"font-size:31px;color:crimson\">fingerprint</i>   -->\r\n        </a>\r\n        \r\n        <a href=\"/blog\" class=\"blog btn btn-default\" >Blog\r\n          <!-- <i class=\"material-icons\" style=\"font-size:31px;color:crimson\">fingerprint</i>   -->\r\n        </a>\r\n\r\n        <a href=\"/login\" class=\"login btn btn-success\">Login\r\n          <!-- <i class=\"material-icons\" style=\"font-size:31px;color:crimson\">fingerprint</i>   -->\r\n        </a>\r\n       \r\n        <a href=\"/register\" class=\"register btn btn-default\">Register</a>\r\n      </div> <!-- Login and Register -->\r\n      \r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.blog-title{\r\n    color:royalblue;\r\n    text-decoration: none;\r\n    /* padding-top: 10px;\r\n    float: right; \r\n    */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQjs7S0FFQztFQUNIIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJsb2ctdGl0bGV7XHJcbiAgICBjb2xvcjpyb3lhbGJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAvKiBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDsgXHJcbiAgICAqL1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\" *ngFor=\"let post of posts | async\">\r\n      <div class=\"blogpost\">\r\n        <br><br>\r\n        \r\n        <h3>\r\n          <a href=\"/post/{{post.id}}\" class=\"blog-title\">{{post.title}}</a>\r\n        </h3>\r\n\r\n        <div>\r\n          <i class=\"fas fa-user\"></i>  <p> <b> Subject :  {{post.subject}} </b>  <!--  , <b>Created on : </b> {{post.createdOn}} </p>  -->\r\n        </div>\r\n        \r\n\r\n        <div>\r\n          <i class=\"fas fa-user\"></i>  \r\n          <p> \r\n            Author :  {{post.username}} \r\n            <!-- ,  <b>Created on : </b> {{post.createdOn | date  }}  -->\r\n          </p>  \r\n        </div>\r\n\r\n        <!-- <p [innerHTML]=\"post.content\"></p> -->\r\n        <div>\r\n          <a type=\"button\" href=\"/post/{{post.id}}\" class=\"read-more btn btn-success\">Read More</a>\r\n        </div>\r\n\r\n        <hr>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-post.service */ "./src/app/add-post.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService) {
        this.postService = postService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.posts = this.postService.getAllPosts();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_add_post_service__WEBPACK_IMPORTED_MODULE_2__["AddPostService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http-client-interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/http-client-interceptor.ts ***!
  \********************************************/
/*! exports provided: HttpClientInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientInterceptor", function() { return HttpClientInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HttpClientInterceptor = /** @class */ (function () {
    function HttpClientInterceptor($localStorage) {
        this.$localStorage = $localStorage;
    }
    HttpClientInterceptor.prototype.intercept = function (req, next) {
        var token = this.$localStorage.retrieve("authenticationToken");
        console.log('jwt token ' + token);
        if (token) {
            var cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + token)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    HttpClientInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], HttpClientInterceptor);
    return HttpClientInterceptor;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-8\">\r\n        <br><br><br>\r\n        \r\n        <h1 class=\"blog-title\">\r\n          <p>{{post.title}}</p>\r\n        </h1>\r\n\r\n        <span ng-non-bindable>\r\n          <p>Subject : {{post.subject}}</p>\r\n          <p>By : {{post.username}} \r\n            <!-- , Created On : {{post.created_on | date:'mediumDate' }}  -->\r\n          </p>\r\n        </span>\r\n        \r\n        <hr>\r\n        <p [innerHTML]=\"post.content\"></p>\r\n        <hr>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-post.service */ "./src/app/add-post.service.ts");




// @ts-ignore
var PostComponent = /** @class */ (function () {
    function PostComponent(router, postService) {
        this.router = router;
        this.postService = postService;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.permaLink = params['id'];
        });
        this.postService.getPost(this.permaLink).subscribe(function (data) {
            _this.post = data;
        }, function (err) {
            console.log('Failure Response');
        });
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _add_post_service__WEBPACK_IMPORTED_MODULE_3__["AddPostService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/product/Product-Components/relay-on/relay-on.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/product/Product-Components/relay-on/relay-on.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvUHJvZHVjdC1Db21wb25lbnRzL3JlbGF5LW9uL3JlbGF5LW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product/Product-Components/relay-on/relay-on.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/product/Product-Components/relay-on/relay-on.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-t-40\">\n    <!-- Column -->\n    <div class=\"col-md-4 wrap-feature1-box\" *ngFor='let relay of relayOn'>\n        <div class=\"card card-shadow\" data-aos=\"fade-right\" data-aos-duration=\"1200\">\n            <div class=\"card-body p-40 text-center\">\n                <div class=\"icon-space display-5\">\n                    <i [class]=\"relay.icon\"></i>\n                </div>\n                <h5 class=\"font-medium\">{{relay.field}}</h5>\n                <p class=\"m-t-20\">\n                    {{relay.fieldText}}\n                </p>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/product/Product-Components/relay-on/relay-on.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/product/Product-Components/relay-on/relay-on.component.ts ***!
  \***************************************************************************/
/*! exports provided: RelayOnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelayOnComponent", function() { return RelayOnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RelayOnComponent = /** @class */ (function () {
    function RelayOnComponent() {
        this.relayOn = [
            {
                icon: 'sl-icon-target text-info-gradiant',
                field: 'Retargeting Market',
                fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
            },
            {
                icon: 'sl-icon-mouse text-info-gradiant',
                field: 'Fruitful Results',
                fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
            },
            {
                icon: 'sl-icon-earphones-alt text-info-gradiant',
                field: 'Instant Solutions',
                fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
            }
        ];
    }
    RelayOnComponent.prototype.ngOnInit = function () {
    };
    RelayOnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relay-on',
            template: __webpack_require__(/*! ./relay-on.component.html */ "./src/app/product/Product-Components/relay-on/relay-on.component.html"),
            styles: [__webpack_require__(/*! ./relay-on.component.css */ "./src/app/product/Product-Components/relay-on/relay-on.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RelayOnComponent);
    return RelayOnComponent;
}());



/***/ }),

/***/ "./src/app/product/Product-Components/top-content/top-content.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/product/Product-Components/top-content/top-content.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvUHJvZHVjdC1Db21wb25lbnRzL3RvcC1jb250ZW50L3RvcC1jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product/Product-Components/top-content/top-content.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/product/Product-Components/top-content/top-content.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrap-feature-22\">\r\n  <!-- Column -->\r\n  <div class=\"col-lg-6\" data-aos=\"flip-up\" data-aos-duration=\"1200\">\r\n    <img [src]=\"imagePath\" class=\"rounded img-responsive\" alt=\"wrapkit\" />\r\n  </div>\r\n  <!-- Column -->\r\n  <div class=\"col-lg-6 no-trans\">\r\n    <div class=\"text-box\">\r\n      <small class=\"text-info font-medium\">Make your site in No-Time</small>\r\n      <h3 class=\"font-light\">\r\n        WrapKit helps you to\r\n        <span class=\"text-info\">build your project</span> in record time with\r\n        fun making it.\r\n      </h3>\r\n      <p>\r\n        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam\r\n        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat\r\n        volutpat.\r\n      </p>\r\n      <p>\r\n        Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquis\r\n        would be good to have.\r\n      </p>\r\n\r\n      <a\r\n        class=\"btn btn-info-gradiant btn-md btn-arrow m-t-20\"\r\n        data-toggle=\"collapse\"\r\n        routerLink=\"#\"\r\n      >\r\n        <span\r\n          >View Other Features\r\n          <i class=\"ti-arrow-right\"></i>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <!-- Column -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product/Product-Components/top-content/top-content.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/product/Product-Components/top-content/top-content.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TopContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopContentComponent", function() { return TopContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopContentComponent = /** @class */ (function () {
    function TopContentComponent() {
        this.imagePath = '../assets/images/innerpage/about-us.jpg';
    }
    TopContentComponent.prototype.ngOnInit = function () {
    };
    TopContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-content',
            template: __webpack_require__(/*! ./top-content.component.html */ "./src/app/product/Product-Components/top-content/top-content.component.html"),
            styles: [__webpack_require__(/*! ./top-content.component.css */ "./src/app/product/Product-Components/top-content/top-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopContentComponent);
    return TopContentComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*******************\r\ncommon-innerpage-banner\r\n*******************/\r\n/* .banner-innerpage{\r\n    padding:150px 0 100px;\r\n    background-size:cover;\r\n    background-position: center ;\r\n} \r\n */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O21CQUVtQjtBQUNuQjs7Ozs7RUFLRSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKipcclxuY29tbW9uLWlubmVycGFnZS1iYW5uZXJcclxuKioqKioqKioqKioqKioqKioqKi9cclxuLyogLmJhbm5lci1pbm5lcnBhZ2V7XHJcbiAgICBwYWRkaW5nOjE1MHB4IDAgMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgO1xyXG59IFxyXG4gKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div\n  class=\"banner-innerpage\" \n  style=\"background-image: url(assets/images/landingpage/banner-bg2.jpg)\" \n\n  \n>\n  <div class=\"container\">\n    <!-- Row  -->\n    <div class=\"row justify-content-center\">\n      <!-- Column -->\n      <div class=\"col-lg-9 col-md-6 no-trans align-self-center text-center\">\n        <h1 class=\"title\">PRODUCT</h1>\n      </div>\n      <!-- Column -->\n    </div>\n  </div>\n</div>\n<br>\n<!-- ============================================================== -->\n<!-- Feature 22  -->\n<!-- ============================================================== -->\n\n<div class=\"spacer feature22\">\n  <div class=\"container\">\n    <app-top-content></app-top-content>\n  </div>\n</div>\n<!-- ============================================================== -->\n<!-- End Feature 22  -->\n<!-- ============================================================== -->\n<!-- ============================================================== -->\n<!-- Feature 1  -->\n<!-- ============================================================== -->\n<div class=\"bg-light spacer feature1\">\n  <div class=\"container\">\n    <!-- Row  -->\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-7 text-center no-trans\">\n        <h2 class=\"title\">Create beautiful Websites in Record Time</h2>\n        <h6 class=\"subtitle\">\n          You can relay on our amazing features list and also our customer\n          services will be great experience for you without doubt and in no-time\n        </h6>\n      </div>\n    </div>\n    <app-relay-on></app-relay-on>\n  </div>\n</div>\n<!-- ============================================================== -->\n<!-- End Feature 1  -->\n<!-- ============================================================== -->\n\n<!-- ============================================================== -->\n<!-- Call to action -->\n<!-- ============================================================== -->\n<div class=\"spacer\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center m-b-30\">\n      <div class=\"col-md-7 text-center no-trans\">\n        <h2 class=\"title\">\n          Are you happy with what we offer? Grab your WrapKit Angular Blog Copy\n          Now\n        </h2>\n        <h6 class=\"subtitle\">\n          Yeah ! Its pretty cool about what you are offering and i starterd to\n          feel in love with your Amazing UI Kit. I want it Yea!\n        </h6>\n        <a\n          class=\"btn btn-info-gradiant btn-md btn-arrow m-t-20\"\n          data-toggle=\"collapse\"\n          href=\"#\"\n          ><span>View Details <i class=\"ti-arrow-right\"></i></span\n        ></a>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- ============================================================== -->\n<!-- End Call to action -->\n<!-- ============================================================== -->\n<br>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspaces\Dataoct\workspace\Blog-Frontend\Blog-Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map