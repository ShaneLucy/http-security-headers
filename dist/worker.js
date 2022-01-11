/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AttributeRewriter.ts":
/*!**********************************!*\
  !*** ./src/AttributeRewriter.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
var AttributeRewriter = /** @class */ (function () {
    function AttributeRewriter(nonce) {
        this.nonce = nonce;
    }
    AttributeRewriter.prototype.element = function (element) {
        element.setAttribute("nonce", this.nonce);
        element.setAttribute("type", "module");
    };
    return AttributeRewriter;
}());
exports["default"] = AttributeRewriter;


/***/ }),

/***/ "./src/requestHandler.ts":
/*!*******************************!*\
  !*** ./src/requestHandler.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var AttributeRewriter_1 = __webpack_require__(/*! ./AttributeRewriter */ "./src/AttributeRewriter.ts");
var setSecurityHeaders_1 = __webpack_require__(/*! ./setSecurityHeaders */ "./src/setSecurityHeaders.ts");
exports["default"] = (function (request) { return __awaiter(void 0, void 0, void 0, function () {
    var RESPONSE, NEW_HEADERS, NONCE, BLOCKED_HEADERS, SECURITY_HEADERS;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetch(request)];
            case 1:
                RESPONSE = _b.sent();
                NEW_HEADERS = new Headers(RESPONSE.headers);
                NONCE = crypto.randomUUID();
                BLOCKED_HEADERS = ["Public-Key-Pins", "X-Powered-By", "X-AspNet-Version"];
                SECURITY_HEADERS = (0, setSecurityHeaders_1["default"])(NONCE);
                if (!((_a = NEW_HEADERS.get("Content-Type")) === null || _a === void 0 ? void 0 : _a.includes("text/html"))) {
                    return [2 /*return*/, new Response(RESPONSE.body, {
                            status: RESPONSE.status,
                            statusText: RESPONSE.statusText,
                            headers: NEW_HEADERS
                        })];
                }
                Object.entries(SECURITY_HEADERS).forEach(function (entry) {
                    NEW_HEADERS.set(entry[0], entry[1]);
                });
                BLOCKED_HEADERS.forEach(function (name) {
                    NEW_HEADERS["delete"](name);
                });
                return [2 /*return*/, new HTMLRewriter().on("#bundle", new AttributeRewriter_1["default"](NONCE)).transform(new Response(RESPONSE.body, {
                        status: RESPONSE.status,
                        statusText: RESPONSE.statusText,
                        headers: NEW_HEADERS
                    }))];
        }
    });
}); });


/***/ }),

/***/ "./src/setSecurityHeaders.ts":
/*!***********************************!*\
  !*** ./src/setSecurityHeaders.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports["default"] = (function (nonce) { return ({
    /**
     * Secure your application with Content-Security-Policy headers.
     * Enabling these headers will permit content from a trusted domain and all its subdomains.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
     */
    "Content-Security-Policy": "default-src 'none'; form-action 'self'; font-src 'self'; img-src 'self'; script-src 'unsafe-inline' https: 'strict-dynamic' 'nonce-".concat(nonce, "'; style-src 'self'; base-uri 'none'; frame-ancestors 'none'; connect-src 'self'"),
    /**
     * The HTTP Strict-Transport-Security informs browsers that the site should only be accessed using HTTPS.
     * Any future attempts to access it using HTTP should automatically be converted to HTTPS.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
     */
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    /**
     * Permissions-Policy header provides the ability to allow or deny the use of browser features, such as opting out of FLoC.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
     */
    "Permissions-Policy": "interest-cohort=()",
    /**
     * X-XSS-Protection header prevents a page from loading if an XSS attack is detected.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
     */
    "X-XSS-Protection": "0",
    /**
     * X-Frame-Options header prevents click-jacking attacks.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
     */
    "X-Frame-Options": "DENY",
    /**
     * X-Content-Type-Options header prevents MIME-sniffing.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
     */
    "X-Content-Type-Options": "nosniff",
    /**
     * Referrer-Policy HTTP header controls how much referrer information (sent with the Referer header) should be included with requests.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
     */
    "Referrer-Policy": "strict-origin-when-cross-origin",
    /**
     * Cross-Origin-Embedder-Policy prevents a document from loading any cross-origin resources,
     * that don't explicitly grant the document permission (using CORP or CORS).
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
     */
    "Cross-Origin-Embedder-Policy": 'require-corp; report-to="default";',
    /**
     * Cross-Origin-Opener-Policy allows you to ensure a top-level document does not share a browsing context group with cross-origin documents.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
     */
    "Cross-Origin-Opener-Policy": 'same-site; report-to="default";',
    /**
     * Cross-Origin-Resource-Policy conveys a desire that the browser blocks no-cors cross-origin/cross-site requests to the given resource.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy
     */
    "Cross-Origin-Resource-Policy": "same-site"
}); });


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

exports.__esModule = true;
var requestHandler_1 = __webpack_require__(/*! ./requestHandler */ "./src/requestHandler.ts");
addEventListener("fetch", function (event) {
    event.respondWith((0, requestHandler_1["default"])(event.request));
});

})();

/******/ })()
;
//# sourceMappingURL=worker.js.map