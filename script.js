"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,_toPropertyKey(c.key),c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _defineProperty(a,b,c){return b=_toPropertyKey(b),b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _toPropertyKey(a){var b=_toPrimitive(a,"string");return"symbol"===_typeof(b)?b:b+""}function _toPrimitive(a,b){if("object"!==_typeof(a)||null===a)return a;var c=a[Symbol.toPrimitive];if(c!==void 0){var d=c.call(a,b||"default");if("object"!==_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}var Header=/*#__PURE__*/function(){function a(){var b=this;_classCallCheck(this,a),_defineProperty(this,"onClick",function(){b.toggled||(b.toggled=!0),b.expanded=!b.expanded,b.update()}),this.header=document.querySelector(".header"),this.button=this.header.querySelector(".header__menu"),this.text=this.header.querySelector(".header__menu-text"),this.links=this.header.querySelector(".header__links"),this.expanded=!1,this.toggled=!1,this.button.addEventListener("click",this.onClick)}return _createClass(a,[{key:"update",value:function update(){this.button.setAttribute("aria-expanded",this.expanded?"true":"false"),this.text.textContent=this.expanded?"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E",this.links.className="header__links"+(this.expanded?" header__links_opened":"")+(this.toggled?" header__links-toggled":"")}}]),a}();new Header;var Tab=/*#__PURE__*/function(){function a(){var b=this;_classCallCheck(this,a),_defineProperty(this,"onTabClick",function(a){var c=a.target.id.replace("tab_","");b.activeTab=c,b.update()}),_defineProperty(this,"onArrowClick",function(){var a=b.panelsWrapper.querySelector(".section__panel:not(.section__panel_hidden)");a&&a.scrollTo({left:a.scrollLeft+400,behavior:"smooth"})}),this.activeTab=new URLSearchParams(location.search).get("tab")||"all",this.hasRightScroll=!1,this.tabs=document.querySelectorAll(".section__tab"),this.panels=document.querySelectorAll(".section__panel"),this.panelsWrapper=document.querySelector(".section__panel-wrapper"),this.select=document.querySelector(".section__select"),this.init(),this.update()}return _createClass(a,[{key:"update",value:function update(){var a=this;this.tabs.forEach(function(b){var c=b.id.replace("tab_","");b.setAttribute("aria-selected",c===a.activeTab?"true":"false"),b.tabIndex=c===a.activeTab?"0":void 0,b.className="section__tab"+(c===a.activeTab?" section__tab_active":"")}),this.panels.forEach(function(b){var c=b.id.replace("panel_",""),d=b.querySelector(".section__panel-list");b.className="section__panel"+(c===a.activeTab?"":" section__panel_hidden"),b.setAttribute("aria-hidden",c===a.activeTab?"false":"true"),d.className="section__panel-list"+(c===a.activeTab?" section__panel-list_active":"")}),this.updateRightScroll(),this.hasRightScroll?this.renderArrow():this.removeArrow()}},{key:"init",value:function init(){this.initTabs(),this.initSelect()}},{key:"initTabs",value:function initTabs(){var a=this;this.tabs.forEach(function(b){b.addEventListener("click",a.onTabClick)})}},{key:"initSelect",value:function initSelect(){var a=this;this.select.addEventListener("input",function(b){a.activeTab=b.target.value,a.update()})}},{key:"renderArrow",value:function renderArrow(){var a=document.createElement("div");a.className="section__arrow",a.addEventListener("click",this.onArrowClick),this.panelsWrapper.appendChild(a),this.arrow=a}},{key:"removeArrow",value:function removeArrow(){this.arrow&&(this.arrow.remove(),this.arrow=null)}},{key:"updateRightScroll",value:function updateRightScroll(){var a=Array.from(document.querySelectorAll(".section__panel-list_active .event")).reduce(function(a,b){return a+b.offsetWidth},0),b=a>this.panelsWrapper.offsetWidth;b!==this.hasRightScroll&&(this.hasRightScroll=b)}}]),a}();new Tab;