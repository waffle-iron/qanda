"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var home_component_1 = require("./home/components/home.component");
platform_browser_dynamic_1.bootstrap(home_component_1.HomeComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, core_1.provide(Window, { useValue: window })]);
//# sourceMappingURL=index.js.map