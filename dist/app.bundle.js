!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=332)}({332:function(n,e,t){"use strict";function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}t.r(e);var o=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,o;return e=n,(t=[{key:"post",value:function(n,e,t){return new Promise(function(t,r){fetch(n,{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then(function(n){return n.json()}).then(function(n){return t(n)}).catch(function(n){return r(n)})})}},{key:"get",value:function(n,e){return new Promise(function(t,r){fetch(n,{method:"GET",headers:{"x-access-token":e}}).then(function(n){return n.json()}).then(function(n){return t(n)}).catch(function(n){return r(n)})})}}])&&r(e.prototype,t),o&&r(e,o),n}(),a="https://mostlikedperson-api.herokuapp.com/api";function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var u=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"login",value:function(n,e){var t=new o;return new Promise(function(r,o){t.post("".concat(a,"/public/auth/login"),{email:n,password:e}).then(function(n){if(!n.auth)return o(n);localStorage.setItem("sn_user_id",n.id),localStorage.setItem("sn_user_token",n.token),r(n)}).catch(function(n){return o(n)})})}},{key:"userId",get:function(){return localStorage.getItem("sn_user_id")}},{key:"token",get:function(){return localStorage.getItem("sn_user_token")}}])&&i(e.prototype,t),r&&i(e,r),n}();function c(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var s=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"navigate",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;location.appData=e,location.hash=n}}])&&c(e.prototype,t),r&&c(e,r),n}();function l(n,e,t,r,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,o)}function f(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var v=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._authService=new u,this._routing=new s}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:this._authService.token&&this._routing.navigate("/users/".concat(this._authService.userId));case 1:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){l(a,r,o,i,u,"next",n)}function u(n){l(a,r,o,i,u,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return'\n        <div class="auth-wrap d-flex mt-5">\n            <div class="auth-form col col-6 mx-auto my-auto">\n                <h3>Login to Social.</h3>\n                <p class="text-secondary">Enter your e-mail address & password to login to your Social account.</p>\n                <form name="loginForm" novalidate>\n                    <div class="form-group">\n                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^S+@[a-z]+.[a-z]+$">\n                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="S+">\n                        <div class="d-flex mt-5">\n                            <button type="submit" class="btn btn-primary btn-sm">Login</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            \x3c!-- /.auth-form --\x3e\n            <div class="auth-bg col col-6">\n\n            </div>\n            \x3c!-- /.auth-bg --\x3e\n        </div>\n        \x3c!-- /.auth-wrap --\x3e\n        '}},{key:"afterRender",value:function(){var n=this;document.forms.loginForm.addEventListener("submit",function(e){e.preventDefault();var t=e.target.elements.email.value,r=e.target.elements.password.value;t&&r&&n._authService.login(t,r).then(function(e){n._routing.navigate("/users/".concat(e.id))}).catch(function(n){console.log(n)})})}}])&&f(e.prototype,t),r&&f(e,r),n}();function d(n,e,t,r,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,o)}function p(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var h=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}},n)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){d(a,r,o,i,u,"next",n)}function u(n){d(a,r,o,i,u,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            <div>Home</div>\n        "}},{key:"afterRender",value:function(){}}])&&p(e.prototype,t),r&&p(e,r),n}();function w(n,e,t,r,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,o)}function m(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var y=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}},n)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){w(a,r,o,i,u,"next",n)}function u(n){w(a,r,o,i,u,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            <div>404</div>\n        "}},{key:"afterRender",value:function(){}}])&&m(e.prototype,t),r&&m(e,r),n}();function g(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var b=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"parseRequestURL",value:function(){var n=location.hash.slice(1).toLowerCase()||"/",e=n.split("/");return{resourse:e[1],id:e[2],url:n}}}])&&g(e.prototype,t),r&&g(e,r),n}();function x(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var _=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"getUser",value:function(n){var e=new o;return new Promise(function(t,r){e.get("".concat(a,"/public/users/get-info/").concat(n)).then(function(n){t(n)}).catch(function(n){return r(n)})})}}])&&x(e.prototype,t),r&&x(e,r),n}();function k(n,e,t,r,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,o)}function P(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var R=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._activeRoute=new b,this._authService=new u,this._userService=new _,this._authUserId=this._authService.userId,this._activeUserId=this._activeRoute.parseRequestURL().id,this._user}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this._userService.getUser(this._authUserId);case 2:this._user=n.sent,console.log(this._user);case 4:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){k(a,r,o,i,u,"next",n)}function u(n){k(a,r,o,i,u,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return"\n        \x3c!-- Component styles --\x3e\n        <style>\n            ".concat(this._style(),'\n        </style>\n        \x3c!-- Component html --\x3e\n        <div class="user-cover-container"\n            style="background: url(').concat(this._user.cover,') no-repeat center / cover;"\n        >\n        </div>\n        <div class="user-avatar-container d-flex justify-content-center">\n            <div class="user-avatar">\n                <img src="').concat(this._user.avatar,'">\n            </div>\n        </div>\n    ')}},{key:"_style",value:function(){return"\n            img {\n                max-width: 100%;\n                min-height: 140px;\n            }\n            .user-cover-container {\n                height: 400px;\n                width: 100%;\n            }\n            .user-avatar-container {\n                transform: translateY(-50%);\n            }\n            .user-avatar {\n                width: 138px;\n                height: 138px;\n                border-radius: 50%;\n                overflow: hidden;\n            }\n        "}},{key:"afterRender",value:function(){}}])&&P(e.prototype,t),r&&P(e,r),n}();function S(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var j=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"getNews",value:function(n){var e=new o;return new Promise(function(t,r){e.get("".concat(a,"/public/news"),n).then(function(n){t(n)}).catch(function(n){return r(n)})})}}])&&S(e.prototype,t),r&&S(e,r),n}();function O(n,e,t,r,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,o)}function C(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var E=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._activeRoute=new b,this._newsService=new j,this._authService=new u,this._token=this._authService.token,this._news}var e,t,r;return e=n,(t=[{key:"beforeRender",value:function(){var n,e=(n=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this._newsService.getNews(this._token);case 2:this._news=n.sent;case 3:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){O(a,r,o,i,u,"next",n)}function u(n){O(a,r,o,i,u,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return"\n            \x3c!-- Component styles --\x3e\n            <style>\n                ".concat(this._style(),'\n            </style>\n            \x3c!-- Component html --\x3e\n            <div class="container">\n                <div class="news-container">\n                    <div class="news-owner">\n                        <div class="news-owner__card">\n                            <div class="card-photo">\n                                <img src="').concat(this._news.news[0].owner.avatar,'" alt="photo">\n                            </div>\n                            <div class="card-information">\n                                <p class="name">').concat(this._news.news[0].owner.full_name,'</p>\n                                <p class="country">').concat(this._news.news[0].owner.country,'</p>\n                            </div>\n                        </div>\n                        <div class="follow">\n                            <button>Follow</button>\n                        </div>    \n                    </div>\n                    <div class="news-owner__picture">\n                        <img src="').concat(this._news.news[0].pictures[0].url,'" alt="news picture">\n                    </div>\n                </div>\n            </div> \n        ')}},{key:"_style",value:function(){return"\n            * {\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n            \n            .container {\n                max-width: 1170px;\n                padding: 0;\n            }\n            \n            .news-container {\n                width: 100%;\n                padding: 40px;\n                display: flex;\n            }\n            \n            .news-owner {\n                margin-right: 40px;\n            }\n            \n            .news-owner__card {\n                width: 191px;  \n            }\n            \n            .card-photo {\n                width: 138px;\n                height: 138px;\n                margin-right: auto;\n                margin-left: auto;\n                margin-bottom: 6px;\n            }\n            \n            .card-photo img {\n                width: 100%;\n                height: 100%;\n                border-radius: 50%;\n                overflow: hidden;\n            }\n            \n            .card-information {\n                margin-bottom: 9px;\n            }\n            \n            .name, .country {\n                display: block;\n                max-width: 180px;\n                font-size: 20px;\n                text-align: center;\n                margin-bottom: 8px;\n            }\n            \n            .news-owner__picture {\n                max-width: 939px;\n                max-height: 311px;\n                overflow: hidden;\n            }\n            \n            .follow {\n                z-index: 1;\n                position: relative;\n            }\n            \n            .follow button {\n                display: block;\n                width: 150px;\n                padding: 15px 35px;\n                background-color: #fff;\n                border: 1px solid transparent; \n                border-radius: 150px;\n                overflow: hidden;\n                margin-right: auto;\n                margin-left: auto;\n            }\n            \n            .follow::before {\n                content: '';\n                width: 156px;\n                height: 63px;\n                position: absolute;\n                top: -3px;\n                left: 18px;\n                z-index: -1;\n                border-radius: 151px;\n                background-image:linear-gradient(to right,#7303c0 0,#ec38bc 76%,#fa66cb 100%);\n            }\n       "}},{key:"afterRender",value:function(){}}])&&C(e.prototype,t),r&&C(e,r),n}();function T(n,e,t,r,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,o)}var I={"/":new h,"/login":new v,"/users/:id":new R,"/news":new E,"**":new y},L=new b,U=function(){var n,e=(n=regeneratorRuntime.mark(function n(){var e,t,r,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector("app-container"),t=L.parseRequestURL(),r=(t.resourse?"/"+t.resourse:"/")+(t.id?"/:id":""),o=I[r]||I["**"],n.next=6,o.beforeRender();case 6:e.innerHTML=o.render(),o.afterRender();case 8:case"end":return n.stop()}},n)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){T(a,r,o,i,u,"next",n)}function u(n){T(a,r,o,i,u,"throw",n)}i(void 0)})});return function(){return e.apply(this,arguments)}}();window.addEventListener("load",U),window.addEventListener("hashchange",U)}});