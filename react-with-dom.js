"use strict";function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e,n){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):(e=e||self,n(e.React={}))})(void 0,function(e){"use strict";function n(e){if(null===e||"object"!==_typeof(e))return null;var n=Oe&&e[Oe]||e["@@iterator"];return"function"==typeof n?n:null}/**
   * Keeps track of the current dispatcher.
   */function t(e){He=e}// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.
function i(e){{for(var n=arguments.length,t=Array(1<n?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];o("warn",e,t)}}function a(e){{for(var n=arguments.length,t=Array(1<n?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];o("error",e,t)}}function o(e,n,t){// When changing this logic, you might want to also
// update consoleWithStackDev.www.js as well.
{var i=Ve.ReactDebugCurrentFrame,a=i.getStackAddendum();""!==a&&(n+="%s",t=t.concat([a]));// eslint-disable-next-line react-internal/safe-string-coercion
var o=t.map(function(e){return e+""});// Careful: RN currently depends on this prefix
// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
o.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,o)}}function d(e,n){{var t=e.constructor,i=t&&(t.displayName||t.name)||"ReactClass",o=i+"."+n;if($e[o])return;a("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",n,i),$e[o]=// attributeNamespace
// sanitizeURL
!0}}/**
   * This is the abstract API for an update queue.
   */ /**
   * Base class helpers for the updating state of a component.
   */function r(e,n,t){// If a component has string refs, we will assign a different object later.
// We initialize the default updater but the real one gets injected by the
// renderer.
this.props=e,this.context=n,this.refs=Ke,this.updater=t||Ye}function s(){}/**
   * Convenience component with default shallow equality check for sCU.
   */function u(e,n,t){// If a component has string refs, we will assign a different object later.
this.props=e,this.context=n,this.refs=Ke,this.updater=t||Ye}// an immutable object with a single mutable value
// eslint-disable-next-line no-redeclare
function l(e){return Ze(e)}/*
   * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
   * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
   *
   * The functions in this module will throw an easier-to-understand,
   * easier-to-debug exception with a clear errors message message explaining the
   * problem. (Instead of a confusing exception thrown inside the implementation
   * of the `value` object).
   */ // $FlowFixMe only called in DEV, so void return is not possible.
function c(e){{// toStringTag is needed for namespaced types like Temporal.Instant
var n="function"==typeof Symbol&&Symbol.toStringTag,t=n&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}// $FlowFixMe only called in DEV, so void return is not possible.
function f(e){try{return p(e),// TODO: In some cases, we'll end up checking if context has changed twice,
// both before and after `shouldComponentUpdate` has been called. Not ideal,
// but I'm loath to refactor this function. This only happens for memoized
// components so it's not that common.
// hydrationCallbacks
// isStrictMode
// hydrationCallbacks
// isStrictMode
// attributeNamespace
// sanitizeURL
// attributeNamespace
// sanitizeURL
// attributeNamespace
// sanitizeURL
// attributeNamespace
// sanitizeURL
// attributeNamespace
// sanitizeURL
// attributeNamespace
// sanitizeURL
// attributeNamespace
// sanitizeURL
// attributeNamespace
// sanitizeURL
// attributeNamespace
// sanitizeURL
// attributeNamespace
// sanitizeURL
// sanitizeURL
// sanitizeURL
// attributeNamespace
// sanitizeURL
// sanitizeURL
!1}catch(n){return!0}}function p(e){// If you ended up here by following an exception call stack, here's what's
// happened: you supplied an object or symbol value to React (as a prop, key,
// DOM attribute, CSS property, string ref, etc.) and when React tried to
// coerce it to a string using `'' + value`, an exception was thrown.
//
// The most common types that will cause this exception are `Symbol` instances
// and Temporal objects like `Temporal.Instant`. But any object that has a
// `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
// exception. (Library authors do this to prevent users from using built-in
// numeric operators like `+` or comparison operators like `>=` because custom
// methods are needed to perform accurate arithmetic or comparison.)
//
// To fix the problem, coerce this object or symbol value to a string before
// passing it to React. The most reliable way is usually `String(value)`.
//
// To find which value is throwing, check the browser or debugger console.
// Before this exception was thrown, there should be `console.error` output
// that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
// problem and how that type was used: key, atrribute, input value prop, etc.
// In most cases, this console output also shows the component and its
// ancestor components where the exception happened.
//
// eslint-disable-next-line react-internal/safe-string-coercion
return""+e}function m(e){if(f(e))return a("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",c(e)),p(e);// throw (to help callers find troubleshooting comments)
}function h(e,n,t){var i=e.displayName;if(i)return i;var a=n.displayName||n.name||"";return""===a?t:t+"("+a+")"}// Keep in sync with react-reconciler/getComponentNameFromFiber
function g(e){return e.displayName||"Context"}// Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
function y(e){if(null==e)// Host root, text node or just invalid type.
return null;if("number"==typeof e.tag&&a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case Te:return"Fragment";case Re:return"Portal";case _e:return"Profiler";case Pe:return"StrictMode";case De:return"Suspense";case Le:return"SuspenseList"}if("object"===_typeof(e))switch(e.$$typeof){case Ne:var n=e;return g(n)+".Consumer";case Ee:var t=e;return g(t._context)+".Provider";case Ie:return h(e,e.render,"ForwardRef");case ze:var i=e.displayName||null;return null===i?y(e.type)||"Memo":i;case Me:{var o=e,d=o._payload,r=o._init;try{return y(r(d))}catch(e){return null}}// eslint-disable-next-line no-fallthrough
}return null}function b(e){if(en.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return e.ref!==// last
void 0}function v(e){if(en.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return e.key!==void 0}function k(e,n){var t=function warnAboutAccessingKey(){tn||(tn=!0,a("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}function S(e,n){var t=function warnAboutAccessingRef(){an||(an=!0,a("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}function w(e){if("string"==typeof e.ref&&je.current&&e.__self&&je.current.stateNode!==e.__self){var n=y(je.current.type);on[n]||(a("Component \"%s\" contains the string ref \"%s\". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref",n,e.ref),on[n]=!0)}}/**
   * Factory method to create a new React element. This no longer adheres to
   * the class pattern, so do not use new to call it. Also, instanceof check
   * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
   * if something is a React Element.
   *
   * @param {*} type
   * @param {*} props
   * @param {*} key
   * @param {string|object} ref
   * @param {*} owner
   * @param {*} self A *temporary* helper to detect places where `this` is
   * different from the `owner` when React.createElement is called, so that we
   * can warn. We want to get rid of owner and replace string `ref`s with arrow
   * functions, and as long as `this` and owner are the same, there will be no
   * change in behavior.
   * @param {*} source An annotation object (added by a transpiler or otherwise)
   * indicating filename, line number, and/or other information.
   * @internal
   */ /**
   * Create and return a new ReactElement of the given type.
   * See https://reactjs.org/docs/react-api.html#createelement
   */function x(e,n,t){var a={},o=null,d=null,r=null,s=null,u;// Reserved names are extracted
if(null!=n)// Remaining properties are added to a new props object
for(u in b(n)&&(d=n.ref,w(n)),v(n)&&(m(n.key),o=""+n.key),r=void 0===n.__self?null:n.__self,s=void 0===n.__source?null:n.__source,n)en.call(n,u)&&!nn.hasOwnProperty(u)&&(a[u]=n[u]);// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var l=arguments.length-2;if(1==l)a.children=t;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];Object.freeze&&Object.freeze(c),a.children=c}// Resolve default props
if(e&&e.defaultProps){var p=e.defaultProps;for(u in p)void 0===a[u]&&(a[u]=p[u])}if(o||d){var h="function"==typeof e?e.displayName||e.name||"Unknown":e;o&&k(a,h),d&&S(a,h)}return dn(e,o,d,r,s,je.current,a)}function C(e,n){var t=dn(e.type,n,e.ref,e._self,e._source,e._owner,e.props);return t}/**
   * Clone and return a new ReactElement using element as the starting point.
   * See https://reactjs.org/docs/react-api.html#cloneelement
   */function R(e,n,t){if(null===e||e===void 0)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=qe({},e.props),o=e.key,d=e.ref,r=e._self,s=e._source,u=e._owner,l;// Original props are copied
// Reserved names are extracted
// Self is preserved since the owner is preserved.
// Source is preserved since cloneElement is unlikely to be targeted by a
// transpiler, and the original source is probably a better indicator of the
// true owner.
// Owner will be preserved, unless ref is overridden
if(null!=n){b(n)&&(d=n.ref,u=je.current),v(n)&&(m(n.key),o=""+n.key);// Remaining properties override existing props
var c;for(l in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),n)en.call(n,l)&&!nn.hasOwnProperty(l)&&(a[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var f=arguments.length-2;if(1==f)a.children=t;else if(1<f){for(var p=Array(f),h=0;h<f;h++)p[h]=arguments[h+2];a.children=p}return dn(e.type,o,d,r,s,u,a)}/**
   * Verifies the object is a ReactElement.
   * See https://reactjs.org/docs/react-api.html#isvalidelement
   * @param {?object} object
   * @return {boolean} True if `object` is a ReactElement.
   * @final
   */function T(e){return"object"===_typeof(e)&&null!==e&&e.$$typeof===Ce}/**
   * Escape and wrap key so it is safe to use as a reactid
   *
   * @param {string} key to be escaped.
   * @return {string} the escaped key.
   */function P(e){var n=/[=:]/g,t={"=":"=0",":":"=2"},i=e.replace(n,function(e){return t[e]});return"$"+i}/**
   * TODO: Test that a single child and an array with one item have the same key
   * pattern.
   */function _(e){return e.replace(sn,"$&/")}/**
   * Generate a key string that identifies a element within a set.
   *
   * @param {*} element A element that could contain a manual key.
   * @param {number} index Index that is used if a manual key is not provided.
   * @return {string}
   */function E(e,n){// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
return"object"===_typeof(e)&&null!==e&&null!=e.key?(m(e.key),P(""+e.key)):n.toString(36);// Implicit key determined by the index in the set
}function N(e,t,a,o,d){var r=_typeof(e);("undefined"===r||"boolean"===r)&&(e=null);var s=!1;if(null===e)s=!0;else switch(r){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ce:case Re:s=!0}}if(s){var u=e,c=d(u),f=""===o?"."+E(u,0):o;// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows:
if(l(c)){var p="";null!=f&&(p=_(f)+"/"),N(c,t,p,"",function(e){return e})}else null!=c&&(T(c)&&(c.key&&(!u||u.key!==c.key)&&m(c.key),c=C(c,// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
a+(// $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
c.key&&(!u||u.key!==c.key)?// $FlowFixMe Flow incorrectly thinks existing element's key can be a number
// eslint-disable-next-line react-internal/safe-string-coercion
_(""+c.key)+"/":"")+f)),t.push(c));return 1}var h=0,g=""===o?".":o+":",y,b;// Count of children found in the current subtree.
if(l(e))for(var v=0;v<e.length;v++)y=e[v],b=g+E(y,v),h+=N(y,t,a,b,d);else{var k=n(e);if("function"==typeof k){var S=e;k===S.entries&&(!rn&&i("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),rn=!0);for(var w=k.call(S),x=0,R;!(R=w.next()).done;)y=R.value,b=g+E(y,x++),h+=N(y,t,a,b,d)}else if("object"===r){// eslint-disable-next-line react-internal/safe-string-coercion
var P=e+"";throw new Error("Objects are not valid as a React child (found: "+("[object Object]"==P?"object with keys {"+Object.keys(e).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}}return h}/**
   * Maps children that are typically specified as `props.children`.
   *
   * See https://reactjs.org/docs/react-api.html#reactchildrenmap
   *
   * The provided mapFunction(child, index) will be called for each
   * leaf child.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} func The map function.
   * @param {*} context Context for mapFunction.
   * @return {object} Object containing the ordered map of results.
   */function I(e,n,t){if(null==e)return e;var i=[],a=0;return N(e,i,"","",function(e){return n.call(t,e,a++)}),i}/**
   * Count the number of children that are typically specified as
   * `props.children`.
   *
   * See https://reactjs.org/docs/react-api.html#reactchildrencount
   *
   * @param {?*} children Children tree container.
   * @return {number} The number of children.
   */ /**
   * Iterates through children that are typically specified as `props.children`.
   *
   * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
   *
   * The provided forEachFunc(child, index) will be called for each
   * leaf child.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} forEachFunc
   * @param {*} forEachContext Context for forEachContext.
   */ /**
   * Flatten a children object (typically specified as `props.children`) and
   * return an array with appropriately re-keyed children.
   *
   * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
   */ /**
   * Returns the first child in a collection of children and verifies that there
   * is only one child in the collection.
   *
   * See https://reactjs.org/docs/react-api.html#reactchildrenonly
   *
   * The current implementation of this function assumes that a single child gets
   * passed without a wrapper, but the purpose of this helper function is to
   * abstract away the particular structure of children.
   *
   * @param {?object} children Child collection structure.
   * @return {ReactElement} The first and only `ReactElement` contained in the
   * structure.
   */function D(e){if(-1===e._status){var n=e._result,t=n();// Transition to the next state.
// This might throw either because it's missing or throws. If so, we treat it
// as still uninitialized and try again next time. Which is the same as what
// happens if the ctor or any wrappers processing the ctor throws. This might
// end up fixing it if the resolution was a concurrency bug.
if(t.then(function(n){if(0===e._status||-1===e._status){// Transition to the next state.
var t=e;t._status=1,t._result=n}},function(n){if(0===e._status||-1===e._status){// Transition to the next state.
var t=e;t._status=2,t._result=n}}),-1===e._status){// In case, we're still uninitialized, then we're waiting for the thenable
// to resolve. Set it as pending in the meantime.
var i=e;i._status=0,i._result=t}}if(1===e._status){var o=e._result;return void 0===o&&a("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",o),"default"in o||a("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",o),o["default"]}throw e._result}function L(e){return!("string"!=typeof e&&"function"!=typeof e)||!(e!==Te&&e!==_e&&1&&e!==Pe&&e!==De&&e!==Le&&1&&e!==Ue&&1&&1&&1)||!("object"!==_typeof(e)||null===e||e.$$typeof!==Me&&e.$$typeof!==ze&&e.$$typeof!==Ee&&e.$$typeof!==Ne&&e.$$typeof!==Ie&&// This needs to include all possible module reference object
// types supported by any Flight configuration anywhere since
// we don't know which Flight build this will end up being used
// with.
e.$$typeof!==un&&void 0===e.getModuleId);// Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
}function z(){var e=Fe.current;// Will result in a null access error if accessed outside render phase. We
// intentionally don't throw our own error because this is in a hot path.
// Also helps ensure this is inlined.
return null===e&&a("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
function M(){}function U(){{if(0===ln){cn=console.log,fn=console.info,pn=console.warn,mn=console.error,hn=console.group,gn=console.groupCollapsed,yn=console.groupEnd;// https://github.com/facebook/react/issues/19099
var e={configurable:!0,enumerable:!0,value:M,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ln++}}function O(){{if(ln--,0===ln){/* eslint-disable react-internal/no-production-logging */var e={configurable:!0,enumerable:!0,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{log:qe({},e,{value:cn}),info:qe({},e,{value:fn}),warn:qe({},e,{value:pn}),error:qe({},e,{value:mn}),group:qe({},e,{value:hn}),groupCollapsed:qe({},e,{value:gn}),groupEnd:qe({},e,{value:yn})})}0>ln&&a("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}function F(e,n,t){{if(kn===void 0)// Extract the VM specific prefix used by each line.
try{throw Error()}catch(e){var i=e.stack.trim().match(/\n( *(at )?)/);kn=i&&i[1]||""}// We use the prefix to ensure our stacks line up with native stack frames.
return"\n"+kn+e}}function A(e,n){// If something asked for a stack inside a fake render, it should get ignored.
if(!e||vn)return"";{var t=Sn.get(e);if(void 0!==t)return t}var i;vn=!0;var a=Error.prepareStackTrace;// $FlowFixMe It does accept undefined.
Error.prepareStackTrace=void 0;var o;// Set the dispatcher in DEV because this might be call in the render function
// for warnings.
o=bn.current,bn.current=null,U();try{// This should throw.
if(n){// Something should be setting the props in the constructor.
var d=function Fake(){throw Error()};// $FlowFixMe
if(Object.defineProperty(d.prototype,"props",{set:function set(){// We use a throwing setter instead of frozen or non-writable props
// because that won't throw in a non-strict mode function.
throw Error()}}),"object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&Reflect.construct){// We construct a different control for this case to include any extra
// frames added by the construct call.
try{Reflect.construct(d,[])}catch(e){i=e}Reflect.construct(e,[],d)}else{try{d.call()}catch(e){i=e}e.call(d.prototype)}}else{try{throw Error()}catch(e){i=e}e()}}catch(n){// This is inlined manually because closure doesn't do it for us.
if(n&&i&&"string"==typeof n.stack){// This extracts the first frame from the sample that isn't also in the control.
// Skipping one frame that we assume is the frame that calls the two.
for(var r=n.stack.split("\n"),u=i.stack.split("\n"),l=r.length-1,f=u.length-1;1<=l&&0<=f&&r[l]!==u[f];)// We expect at least one stack frame to be shared.
// Typically this will be the root most one. However, stack frames may be
// cut off due to maximum stack limits. In this case, one maybe cut off
// earlier than the other. We assume that the sample is longer or the same
// and there for cut off earlier. So we should find the root most frame in
// the sample somewhere in the control.
f--;for(;1<=l&&0<=f;l--,f--)// Next we find the first one that isn't the same which should be the
// frame that called our sample function and the control.
if(r[l]!==u[f]){// In V8, the first line is describing the message but other VMs don't.
// If we're about to return the first line, and the control is also on the same
// line, that's a pretty good indicator that our sample threw at same line as
// the control. I.e. before we entered the sample frame. So we ignore this result.
// This can happen if you passed a class to function component, or non-function.
if(1!==l||1!==f)do// We may still have similar intermediate frames from the construct call.
// The next one that isn't the same should be our match though.
if(l--,f--,0>f||r[l]!==u[f]){// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
var p="\n"+r[l].replace(" at new "," at ");// If our component frame is labeled "<anonymous>"
// but we have a user-provided "displayName"
// splice it in to make the stack more readable.
// Return the line we found.
return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),"function"==typeof e&&Sn.set(e,p),p}while(1<=l&&0<=f);break}}}finally{vn=!1,bn.current=o,O(),Error.prepareStackTrace=a}// Fallback to just using the name if we couldn't make it throw.
var m=e?e.displayName||e.name:"",h=m?F(m):"";return"function"==typeof e&&Sn.set(e,h),h}function W(e,n,t){return A(e,!1)}function j(e){var n=e.prototype;return!!(n&&n.isReactComponent)}function B(e,n,t){if(null==e)return"";if("function"==typeof e)return A(e,j(e));if("string"==typeof e)return F(e);switch(e){case De:return F("Suspense");case Le:return F("SuspenseList")}if("object"===_typeof(e))switch(e.$$typeof){case Ie:return W(e.render);case ze:// Memo may contain any component type so we recursively resolve it.
return B(e.type,n,t);case Me:{var i=e,a=i._payload,o=i._init;try{// Lazy may contain any component type so we recursively resolve it.
return B(o(a),n,t)}catch(e){}}}return""}function H(e){if(e){var n=e._owner,t=B(e.type,e._source,n?n.type:null);Cn.setExtraStackFrame(t)}else Cn.setExtraStackFrame(null)}function V(e,n,t,i,o){{// $FlowFixMe This is okay but Flow doesn't know it.
var d=Function.call.bind(en);for(var r in e)if(d(e,r)){var s=void 0;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!=typeof e[r]){// eslint-disable-next-line react-internal/prod-error-codes
var u=Error((i||"React class")+": "+t+" type `"+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+_typeof(e[r])+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}s=e[r](n,r,i,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){s=e}s&&!(s instanceof Error)&&(H(o),a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",i||"React class",t,r,_typeof(s)),H(null)),s instanceof Error&&!(s.message in xn)&&(xn[s.message]=!0,H(o),a("Failed %s type: %s",t,s.message),H(null))}}}function $(e){if(e){var n=e._owner,i=B(e.type,e._source,n?n.type:null);t(i)}else t(null)}function Y(){if(je.current){var e=y(je.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function q(e){if(e!==void 0){var n=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return"\n\nCheck your code at "+n+":"+t+"."}return""}function K(e){return null!==e&&void 0!==e?q(e.__source):""}/**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */function Q(e){var n=Y();if(!n){var t="string"==typeof e?e:e.displayName||e.name;t&&(n="\n\nCheck the top-level render call using <"+t+">.")}return n}/**
   * Warn if the element doesn't have an explicit key assigned to it.
   * This element is in an array. The array could grow and shrink or be
   * reordered. All children that haven't already been validated are required to
   * have a "key" property assigned to it. Error statuses are cached so a warning
   * will only be shown once.
   *
   * @internal
   * @param {ReactElement} element Element that requires a key.
   * @param {*} parentType element's parent's type.
   */function X(e,n){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var t=Q(n);if(!Tn[t]){Tn[t]=!0;// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var i="";e&&e._owner&&e._owner!==je.current&&(i=" It was passed a child from "+y(e._owner.type)+"."),$(e),a("Each child in a list should have a unique \"key\" prop.%s%s See https://reactjs.org/link/warning-keys for more information.",t,i),$(null)}}}/**
   * Ensure that every element either is passed in a static location, in an
   * array with an explicit keys property defined, or in an object literal
   * with valid key property.
   *
   * @internal
   * @param {ReactNode} node Statically passed child of any type.
   * @param {*} parentType node's parent's type.
   */function G(e,t){if("object"===_typeof(e))if(l(e))for(var a=0,o;a<e.length;a++)o=e[a],T(o)&&X(o,t);else if(T(e))e._store&&(e._store.validated=!0);else if(e){var d=n(e);if("function"==typeof d&&d!==e.entries)// Entry iterators used to provide implicit keys,
// but now we print a separate warning for them later.
for(var r=d.call(e),s;!(s=r.next()).done;)T(s.value)&&X(s.value,t)}}/**
   * Given an element, validate that its props follow the propTypes definition,
   * provided by the type.
   *
   * @param {ReactElement} element
   */function J(e){{var n=e.type;if(null===n||n===void 0||"string"==typeof n)return;var t;if("function"==typeof n)t=n.propTypes;else if("object"===_typeof(n)&&(n.$$typeof===Ie||// Note: Memo only checks outer props here.
// Inner props are checked in the reconciler.
n.$$typeof===ze))t=n.propTypes;else return;if(t){// Intentionally inside to avoid triggering lazy initializers:
var i=y(n);V(t,e.props,"prop",i,e)}else if(void 0!==n.PropTypes&&!Rn){Rn=!0;// Intentionally inside to avoid triggering lazy initializers:
var o=y(n);a("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}"function"!=typeof n.getDefaultProps||n.getDefaultProps.isReactClassApproved||a("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}/**
   * Given a fragment, validate that it can only be provided with fragment props
   * @param {ReactElement} fragment
   */function Z(e){{for(var n=Object.keys(e.props),t=0,o;t<n.length;t++)if(o=n[t],"children"!==o&&"key"!==o){$(e),a("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),$(null);break}null!==e.ref&&($(e),a("Invalid attribute `ref` supplied to `React.Fragment`."),$(null))}}function ee(e,n,t){var o=L(e);// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!o){var d="";(void 0===e||"object"===_typeof(e)&&null!==e&&0===Object.keys(e).length)&&(d+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var r=K(n);d+=r?r:Y();var s;null===e?s="null":l(e)?s="array":void 0!==e&&e.$$typeof===Ce?(s="<"+(y(e.type)||"Unknown")+" />",d=" Did you accidentally export a JSX literal instead of a component?"):s=_typeof(e),a("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,d)}var u=x.apply(this,arguments);// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==u)return u;// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(o)for(var c=2;c<arguments.length;c++)G(arguments[c],e);return e===Te?Z(u):J(u),u}function ne(e,n,t){for(var a=R.apply(this,arguments),o=2;o<arguments.length;o++)G(arguments[o],a.type);return J(a),a}function te(e,n){var t=e.length;e.push(n),oe(e,n,t)}function ie(e){return 0===e.length?null:e[0]}function ae(e){if(0===e.length)return null;var n=e[0],t=e.pop();return t!==n&&(e[0]=t,de(e,t,0)),n}function oe(e,n,t){for(var i=t;0<i;){var a=i-1>>>1,o=e[a];if(0<re(o,n))// The parent is larger. Swap positions.
e[a]=n,e[i]=o,i=a;else// The parent is smaller. Exit.
return}}function de(e,n,t){for(var i=t,a=e.length,o=a>>>1;i<o;){var d=2*(i+1)-1,r=e[d],s=d+1,u=e[s];// If the left or right node is smaller, swap with the smaller of those.
if(0>re(r,n))s<a&&0>re(u,r)?(e[i]=u,e[s]=n,i=s):(e[i]=r,e[d]=n,i=d);else if(s<a&&0>re(u,n))e[i]=u,e[s]=n,i=s;else// Neither child is smaller. Exit.
return}}function re(e,n){// Compare sort index first, then task id.
var t=e.sortIndex-n.sortIndex;return 0==t?e.id-n.id:t}// TODO: Use symbols?
/* eslint-disable no-var */function se(e){// Check for tasks that are no longer delayed and add them to the queue.
for(var n=ie(Mn);null!==n;){if(null===n.callback)// Timer was cancelled.
ae(Mn);else if(n.startTime<=e)// Timer fired. Transfer to the task queue.
ae(Mn),n.sortIndex=n.expirationTime,te(zn,n);else// Remaining timers are pending.
return;n=ie(Mn)}}function ue(e){if(jn=!1,se(e),!Wn)if(null!==ie(zn))Wn=!0,ye(le);else{var n=ie(Mn);null!==n&&be(ue,n.startTime-e)}}function le(e,n){Wn=!1,jn&&(jn=!1,ve()),An=!0;var t=Fn;try{// No catch in prod code path.
return ce(e,n);var i}finally{On=null,Fn=t,An=!1}}function ce(e,n){var t=n;for(se(t),On=ie(zn);null!==On&&!0&&!(On.expirationTime>t&&(!e||ge()));){var i=On.callback;if("function"==typeof i){On.callback=null,Fn=On.priorityLevel;var a=On.expirationTime<=t,o=i(a);t=Nn(),"function"==typeof o?On.callback=o:On===ie(zn)&&ae(zn),se(t)}else ae(zn);On=ie(zn)}// Return whether there's additional work
if(null!==On)return!0;var d=ie(Mn);return null!==d&&be(ue,d.startTime-t),!1}function fe(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=Fn;Fn=e;try{return n()}finally{Fn=t}}function pe(e){var n;switch(Fn){case 1:case 2:case 3:n=3;break;default:n=Fn}var t=Fn;Fn=n;try{return e()}finally{Fn=t}}function me(e){var n=Fn;return function(){// This is a fork of runWithPriority, inlined for performance.
var t=Fn;Fn=n;try{return e.apply(this,arguments)}finally{Fn=t}}}function he(){return Fn}function ge(){var e=Nn()-Xn;return!(e<Qn);// The main thread has been blocked for a non-negligible amount of time. We
}function ye(e){qn=e,Yn||(Yn=!0,Jn())}function be(e,n){Kn=Bn(function(){e(Nn())},n)}function ve(){Hn(Kn),Kn=-1}function ke(e){if(null===at)try{// read require off the module object to get around the bundlers.
// we don't want them to detect a require and bundle a Node polyfill.
var n=("require"+Math.random()).slice(0,7),t=module&&module[n];// assuming we're in node, let's try to get node's
// version of setImmediate, bypassing fake timers if any.
at=t.call(module,"timers").setImmediate}catch(e){at=function enqueueTaskImpl(e){!1===it&&(it=!0,"undefined"==typeof MessageChannel&&a("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var n=new MessageChannel;n.port1.onmessage=e,n.port2.postMessage(void 0)}}return at(e)}function Se(e){e!==ot-1&&a("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),ot=e}function we(e,n,t){{var i=We.current;if(null!==i)try{xe(i),ke(function(){0===i.length?(We.current=null,n(e)):we(e,n,t)})}catch(e){t(e)}else n(e)}}function xe(e){if(!rt){rt=!0;var n=0;try{for(;n<e.length;n++){var t=e[n];do t=t(!0);while(null!==t)}e.length=0}catch(t){throw e=e.slice(n+1),t}finally{rt=!1}}}var Ce=Symbol["for"]("react.element"),Re=Symbol["for"]("react.portal"),Te=Symbol["for"]("react.fragment"),Pe=Symbol["for"]("react.strict_mode"),_e=Symbol["for"]("react.profiler"),Ee=Symbol["for"]("react.provider"),Ne=Symbol["for"]("react.context"),Ie=Symbol["for"]("react.forward_ref"),De=Symbol["for"]("react.suspense"),Le=Symbol["for"]("react.suspense_list"),ze=Symbol["for"]("react.memo"),Me=Symbol["for"]("react.lazy"),Ue=Symbol["for"]("react.offscreen"),Oe=Symbol.iterator,Fe={/**
     * @internal
     * @type {ReactComponent}
     */current:null},Ae={transition:null},We={current:null,// Used to reproduce behavior of `batchedUpdates` in legacy mode.
isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},je={/**
     * @internal
     * @type {ReactComponent}
     */current:null},Be={},He=null;// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
/**
   * Keeps track of the current batch's configuration such as how long an update
   * should suspend for if it needs to.
   */ /**
   * Keeps track of the current owner.
   *
   * The current owner is the component who should own any components that are
   * currently being constructed.
   */ // Stack implementation injected by the current renderer.
Be.setExtraStackFrame=function(e){He=e},Be.getCurrentStack=null,Be.getStackAddendum=function(){var e="";// Add an extra top frame while an element is being validated
He&&(e+=He);// Delegate to the injected renderer-specific implementation
var n=Be.getCurrentStack;return n&&(e+=n()||""),e};// -----------------------------------------------------------------------------
var Ve={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Ae,ReactCurrentOwner:je};// Experimental Create Event Handle API.
// No known bugs, but needs performance testing
// Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.
// Track which Fiber(s) schedule render work.
Ve.ReactDebugCurrentFrame=Be,Ve.ReactCurrentActQueue=We;var $e={},Ye={/**
     * Checks whether or not this composite component is mounted.
     * @param {ReactClass} publicInstance The instance we want to test.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */isMounted:function isMounted(e){return!1},/**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {?function} callback Called after component is updated.
     * @param {?string} callerName name of the calling function in the public API.
     * @internal
     */enqueueForceUpdate:function enqueueForceUpdate(e,n,t){d(e,"forceUpdate")},/**
     * Replaces all of the state. Always use this or `setState` to mutate state.
     * You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object} completeState Next state.
     * @param {?function} callback Called after component is updated.
     * @param {?string} callerName name of the calling function in the public API.
     * @internal
     */enqueueReplaceState:function enqueueReplaceState(e,n,t,i){d(e,"replaceState")},/**
     * Sets a subset of the state. This only exists because _pendingState is
     * internal. This provides a merging strategy that is not available to deep
     * properties which is confusing. TODO: Expose pendingState or don't use it
     * during the merge.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object} partialState Next partial state to be merged with state.
     * @param {?function} callback Called after component is updated.
     * @param {?string} Name of the calling function in the public API.
     * @internal
     */enqueueSetState:function enqueueSetState(e,n,t,i){d(e,"setState")}},qe=Object.assign,Ke={};Object.freeze(Ke),r.prototype.isReactComponent={},r.prototype.setState=function(e,n){if("object"!==_typeof(e)&&"function"!=typeof e&&null!=e)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};/**
   * Deprecated APIs. These APIs used to exist on classic React classes but since
   * we would like to deprecate them, we're not going to move them over to this
   * modern base class. Instead, we define a getter that warns if it's accessed.
   */{var Qe={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},Xe=function defineDeprecationWarning(e,n){Object.defineProperty(r.prototype,e,{get:function get(){i("%s(...) is deprecated in plain JavaScript React classes. %s",n[0],n[1])}})};for(var Ge in Qe)Qe.hasOwnProperty(Ge)&&Xe(Ge,Qe[Ge])}s.prototype=r.prototype;var Je=u.prototype=new s;Je.constructor=u,qe(Je,r.prototype),Je.isPureReactComponent=!0;var Ze=Array.isArray,en=Object.prototype.hasOwnProperty,nn={key:!0,ref:!0,__self:!0,__source:!0},tn,an,on;on={};var dn=function ReactElement(e,n,t,i,a,o,d){var r={// This tag allows us to uniquely identify this as a React Element
$$typeof:Ce,// Built-in properties that belong on the element
type:e,key:n,ref:t,props:d,// Record the component responsible for creating this element.
_owner:o};return(// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
// To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
// self and source are DEV only properties.
// Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
r._store={},Object.defineProperty(r._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(r,"_self",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.defineProperty(r,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(r.props),Object.freeze(r)),r)},rn=!1,sn=/\/+/g,un;un=Symbol["for"]("react.module.reference");var ln=0,cn,fn,pn,mn,hn,gn,yn;M.__reactDisabledLog=!0;var bn=Ve.ReactCurrentDispatcher,vn=!1,kn,Sn;{var wn="function"==typeof WeakMap?WeakMap:Map;Sn=new wn}var xn={},Cn=Ve.ReactDebugCurrentFrame,Rn;Rn=!1;var Tn={},Pn=!1,_n=3,En="object"===("undefined"==typeof performance?"undefined":_typeof(performance))&&"function"==typeof performance.now,Nn;if(En){var In=performance;Nn=function getCurrentTime(){return In.now()}}else{var Dn=Date,Ln=Dn.now();Nn=function getCurrentTime(){return Dn.now()-Ln}}// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var zn=[],Mn=[],Un=1,On=null,Fn=_n,An=!1,Wn=!1,jn=!1,Bn="function"==typeof setTimeout?setTimeout:null,Hn="function"==typeof clearTimeout?clearTimeout:null,Vn="undefined"==typeof setImmediate?null:setImmediate,$n="undefined"!=typeof navigator&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0?navigator.scheduling.isInputPending.bind(navigator.scheduling):null,Yn=!1,qn=null,Kn=-1,Qn=5,Xn=-1,Gn=function performWorkUntilDeadline(){if(null!==qn){var e=Nn();// Keep track of the start time so we can measure how long the main thread
// has been blocked.
Xn=e;var n=!0,t=!0;// If a scheduler task throws, exit the current browser task so the
// error can be observed.
//
// Intentionally not using a try-catch, since that makes some debugging
// techniques harder. Instead, if `scheduledHostCallback` errors, then
// `hasMoreWork` will remain true, and we'll continue the work loop.
try{t=qn(!0,e)}finally{t?Jn():(Yn=!1,qn=null)}}else Yn=!1;// Yielding to the browser will give it a chance to paint, so we can
},Jn;// Times out immediately
// Eventually times out
// Never times out
// Tasks are stored on a min heap
// Incrementing id counter. Used to maintain insertion order.
// Pausing the scheduler is useful for debugging.
// This is set while performing work, to prevent re-entrance.
// Capture local references to native APIs, in case a polyfill overrides them.
// IE and Node.js + jsdom
// Scheduler periodically yields in case there is other work on the main
// thread, like user events. By default, it yields multiple times per frame.
// It does not attempt to align with frame boundaries, since most tasks don't
// need to be frame aligned; for those that do, use requestAnimationFrame.
if("function"==typeof Vn)// Node.js and old IE.
// There's a few reasons for why we prefer setImmediate.
//
// Unlike MessageChannel, it doesn't prevent a Node.js process from exiting.
// (Even though this is a DOM fork of the Scheduler, you could get here
// with a mix of Node.js 15+, which has a MessageChannel, and jsdom.)
// https://github.com/facebook/react/issues/20756
//
// But also, it runs earlier which is the semantic we want.
// If other browsers ever implement it, it's better to use it.
// Although both of these would be inferior to native scheduling.
Jn=function schedulePerformWorkUntilDeadline(){Vn(Gn)};else if("undefined"!=typeof MessageChannel){// DOM and Worker environments.
// We prefer MessageChannel because of the 4ms setTimeout clamping.
var Zn=new MessageChannel,et=Zn.port2;Zn.port1.onmessage=Gn,Jn=function schedulePerformWorkUntilDeadline(){et.postMessage(null)}}else// We should only fallback here in non-browser environments.
Jn=function schedulePerformWorkUntilDeadline(){Bn(Gn,0)};var nt=/*#__PURE__*/Object.freeze({__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:_n,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:fe,unstable_next:pe,unstable_scheduleCallback:function i(e,n,t){var a=Nn(),o;if("object"===_typeof(t)&&null!==t){var d=t.delay;o="number"==typeof d&&0<d?a+d:a}else o=a;var r;switch(e){case 1:r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=10000;break;case 3:default:r=5000}var s=o+r,u={id:Un++,callback:n,priorityLevel:e,startTime:o,expirationTime:s,sortIndex:-1};return o>a?(u.sortIndex=o,te(Mn,u),null===ie(zn)&&u===ie(Mn)&&(jn?ve():jn=!0,be(ue,o-a))):(u.sortIndex=s,te(zn,u),!Wn&&!An&&(Wn=!0,ye(le))),u},unstable_cancelCallback:function n(e){// remove from the queue because you can't remove arbitrary nodes from an
// array based heap, only the first one.)
e.callback=null},unstable_wrapCallback:me,unstable_getCurrentPriorityLevel:he,unstable_shouldYield:ge,unstable_requestPaint:function e(){},unstable_continueExecution:function e(){Wn||An||(Wn=!0,ye(le))},unstable_pauseExecution:function e(){},unstable_getFirstCallbackNode:function e(){return ie(zn)},get unstable_now(){return Nn},unstable_forceFrameRate:function n(e){return 0>e||125<e?void console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):void(0<e?Qn=Math.floor(1e3/e):Qn=5)},unstable_Profiling:null}),tt={ReactCurrentDispatcher:Fe,ReactCurrentOwner:je,ReactCurrentBatchConfig:Ae,// Re-export the schedule API(s) for UMD bundles.
// This avoids introducing a dependency on a new UMD global in a minor update,
// Since that would be a breaking change (e.g. for all existing CodeSandboxes).
// This re-export is only required for UMD bundles;
// CJS bundles use the shared NPM package.
Scheduler:nt};tt.ReactCurrentActQueue=We,tt.ReactDebugCurrentFrame=Be;var it=!1,at=null,ot=0,dt=!1,rt=!1;e.Children={map:I,forEach:function i(e,n,t){I(e,function(){n.apply(this,arguments)},t)},count:function t(e){var i=0;return I(e,function(){i++}),i},toArray:function n(e){return I(e,function(e){return e})||[]},only:function n(e){if(!T(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}},e.Component=r,e.Fragment=Te,e.Profiler=_e,e.PureComponent=u,e.StrictMode=Pe,e.Suspense=De,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tt,e.cloneElement=ne,e.createContext=function n(e){// TODO: Second argument used to be an optional `calculateChangedBits`
// function. Warn to reserve for future use?
var t={$$typeof:Ne,// As a workaround to support multiple concurrent renderers, we categorize
// some renderers as primary and others as secondary. We only expect
// there to be two concurrent renderers at most: React Native (primary) and
// Fabric (secondary); React DOM (primary) and React ART (secondary).
// Secondary renderers store their context values on separate fields.
_currentValue:e,_currentValue2:e,// Used to track how many concurrent renderers this context currently
// supports within in a single renderer. Such as parallel server rendering.
_threadCount:0,// These are circular
Provider:null,Consumer:null,// Add these to use same hidden class in VM as ServerContext
_defaultValue:null,_globalName:null};t.Provider={$$typeof:Ee,_context:t};var o=!1,d=!1,r=!1;{// A separate object, but proxies back to the original context object for
// backwards compatibility. It has a different $$typeof, so we can properly
// warn for the incorrect usage of Context as a Consumer.
var s={$$typeof:Ne,_context:t};// $FlowFixMe: Flow complains about not setting a value, which is intentional here
Object.defineProperties(s,{Provider:{get:function get(){return d||(d=!0,a("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function set(e){t.Provider=e}},_currentValue:{get:function get(){return t._currentValue},set:function set(e){t._currentValue=e}},_currentValue2:{get:function get(){return t._currentValue2},set:function set(e){t._currentValue2=e}},_threadCount:{get:function get(){return t._threadCount},set:function set(e){t._threadCount=e}},Consumer:{get:function get(){return o||(o=!0,a("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function get(){return t.displayName},set:function set(e){r||(i("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),r=!0)}}}),t.Consumer=s}return t._currentRenderer=null,t._currentRenderer2=null,t},e.createElement=ee,e.createFactory=function n(e){var t=ee.bind(null,e);return t.type=e,!Pn&&(Pn=!0,i("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function get(){return i("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},e.createRef=function e(){var n={current:null};return Object.seal(n),n},e.forwardRef=function n(e){null!=e&&e.$$typeof===ze?a("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"==typeof e?0!==e.length&&2!==e.length&&a("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."):a("forwardRef requires a render function but was given %s.",null===e?"null":_typeof(e)),null!=e&&(null!=e.defaultProps||null!=e.propTypes)&&a("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var t={$$typeof:Ie,render:e};{var i;Object.defineProperty(t,"displayName",{enumerable:!1,configurable:!0,get:function get(){return i},set:function set(n){i=n,e.name||e.displayName||(e.displayName=n)}})}return t},e.isValidElement=T,e.lazy=function n(e){var t={// We use these fields to store the result.
_status:-1,_result:e},i={$$typeof:Me,_payload:t,_init:D};{// In production, this would just set it on the object.
var o,d;// $FlowFixMe
Object.defineProperties(i,{defaultProps:{configurable:!0,get:function get(){return o},set:function set(e){// Match production behavior more closely:
// $FlowFixMe
a("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),o=e,Object.defineProperty(i,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function get(){return d},set:function set(e){// Match production behavior more closely:
// $FlowFixMe
a("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),d=e,Object.defineProperty(i,"propTypes",{enumerable:!0})}}})}return i},e.memo=function t(e,n){L(e)||a("memo: The first argument must be a component. Instead received: %s",null===e?"null":_typeof(e));var i={$$typeof:ze,type:e,compare:n===void 0?null:n};{var o;Object.defineProperty(i,"displayName",{enumerable:!1,configurable:!0,get:function get(){return o},set:function set(n){o=n,e.name||e.displayName||(e.displayName=n)}})}return i},e.startTransition=function t(e,n){var a=Ae.transition;Ae.transition={};var o=Ae.transition;Ae.transition._updatedFibers=new Set;try{e()}finally{if(Ae.transition=a,null===a&&o._updatedFibers){var d=o._updatedFibers.size;10<d&&i("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),o._updatedFibers.clear()}}},e.unstable_act=function n(e){{// `act` calls can be nested, so we track the depth. This represents the
// number of `act` scopes on the stack.
var t=ot;ot++,null===We.current&&(We.current=[]);var i=We.isBatchingLegacy,o;try{// Replicate behavior of original `act` implementation in legacy mode,
// which flushed updates immediately after the scope function exits, even
// if it's an async function.
if(We.isBatchingLegacy=!0,o=e(),!i&&We.didScheduleLegacyUpdate){var d=We.current;null!==d&&(We.didScheduleLegacyUpdate=!1,xe(d))}}catch(e){throw Se(t),e}finally{We.isBatchingLegacy=i}if(null!==o&&"object"===_typeof(o)&&"function"==typeof o.then){var r=o,s=!1,u={then:function then(e,n){s=!0,r.then(function(i){Se(t),0===ot?we(i,e,n):e(i)},function(e){Se(t),n(e)})}};// The callback is an async function (i.e. returned a promise). Wait
// for it to resolve before exiting the current scope.
return dt||"undefined"==typeof Promise||Promise.resolve().then(function(){}).then(function(){s||(dt=!0,a("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),u}var l=o;// The callback is not an async function. Exit the current scope
// immediately, without awaiting.
if(Se(t),0===ot){// Exiting the outermost act scope. Flush the queue.
var c=We.current;null!==c&&(xe(c),We.current=null);// Return a thenable. If the user awaits it, we'll flush again in
// case additional work was scheduled by a microtask.
var f={then:function then(e,n){null===We.current?(We.current=[],we(l,e,n)):e(l)}};return f}// Since we're inside a nested `act` scope, the returned thenable
// immediately resolves. The outer scope will flush the queue.
var p={then:function then(e,n){e(l)}};return p}},e.useCallback=function t(e,n){var i=z();return i.useCallback(e,n)},e.useContext=function n(e){var t=z();// TODO: add a more generic warning for invalid values.
if(void 0!==e._context){var i=e._context;// Don't deduplicate because this legitimately causes bugs
// and nobody should be using this in existing code.
i.Consumer===e?a("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):i.Provider===e&&a("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},e.useDebugValue=function t(e,n){{var i=z();return i.useDebugValue(e,n)}},e.useDeferredValue=function n(e){var t=z();return t.useDeferredValue(e)},e.useEffect=function t(e,n){var i=z();return i.useEffect(e,n)},e.useId=function e(){var n=z();return n.useId()},e.useImperativeHandle=function i(e,n,t){var a=z();return a.useImperativeHandle(e,n,t)},e.useInsertionEffect=function t(e,n){var i=z();return i.useInsertionEffect(e,n)},e.useLayoutEffect=function t(e,n){var i=z();return i.useLayoutEffect(e,n)},e.useMemo=function t(e,n){var i=z();return i.useMemo(e,n)},e.useReducer=function i(e,n,t){var a=z();return a.useReducer(e,n,t)},e.useRef=function n(e){var t=z();return t.useRef(e)},e.useState=function n(e){var t=z();return t.useState(e)},e.useSyncExternalStore=function i(e,n,t){var a=z();return a.useSyncExternalStore(e,n,t)},e.useTransition=function e(){var n=z();return n.useTransition()},e.version="18.2.0"}),function(e,n){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?n(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],n):(e=e||self,n(e.ReactDOM={},e.React))}(void 0,function(e,n){"use strict";var t=Math.clz32,i=Math.min,a=String.fromCharCode;function o(e){og=e}// In DEV, calls to console.warn and console.error get replaced
// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.
function d(e){if(!og){for(var n=arguments.length,t=Array(1<n?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];s("warn",e,t)}}function r(e){if(!og){for(var n=arguments.length,t=Array(1<n?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];s("error",e,t)}}function s(e,n,t){// When changing this logic, you might want to also
// update consoleWithStackDev.www.js as well.
{var i=ag.ReactDebugCurrentFrame,a=i.getStackAddendum();""!==a&&(n+="%s",t=t.concat([a]));// eslint-disable-next-line react-internal/safe-string-coercion
var o=t.map(function(e){return e+""});// Careful: RN currently depends on this prefix
// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
o.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,o)}}// Trust the developer to only use possibleRegistrationNames in true
function u(e,n){l(e,n),l(e+"Capture",n)}function l(e,n){Hg[e]&&r("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),Hg[e]=n;{var t=e.toLowerCase();Vg[t]=e,"onDoubleClick"===e&&(Vg.ondblclick=e)}for(var a=0;a<n.length;a++)Bg.add(n[a])}/*
   * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
   * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
   *
   * The functions in this module will throw an easier-to-understand,
   * easier-to-debug exception with a clear errors message message explaining the
   * problem. (Instead of a confusing exception thrown inside the implementation
   * of the `value` object).
   */ // $FlowFixMe only called in DEV, so void return is not possible.
function c(e){{// toStringTag is needed for namespaced types like Temporal.Instant
var n="function"==typeof Symbol&&Symbol.toStringTag,t=n&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}// $FlowFixMe only called in DEV, so void return is not possible.
function f(e){try{return p(e),!1}catch(n){return!0}}function p(e){// If you ended up here by following an exception call stack, here's what's
// happened: you supplied an object or symbol value to React (as a prop, key,
// DOM attribute, CSS property, string ref, etc.) and when React tried to
// coerce it to a string using `'' + value`, an exception was thrown.
//
// The most common types that will cause this exception are `Symbol` instances
// and Temporal objects like `Temporal.Instant`. But any object that has a
// `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
// exception. (Library authors do this to prevent users from using built-in
// numeric operators like `+` or comparison operators like `>=` because custom
// methods are needed to perform accurate arithmetic or comparison.)
//
// To fix the problem, coerce this object or symbol value to a string before
// passing it to React. The most reliable way is usually `String(value)`.
//
// To find which value is throwing, check the browser or debugger console.
// Before this exception was thrown, there should be `console.error` output
// that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
// problem and how that type was used: key, atrribute, input value prop, etc.
// In most cases, this console output also shows the component and its
// ancestor components where the exception happened.
//
// eslint-disable-next-line react-internal/safe-string-coercion
return""+e}function m(e,n){if(f(e))return r("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",n,c(e)),p(e);// throw (to help callers find troubleshooting comments)
}function h(e){if(f(e))return r("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",c(e)),p(e);// throw (to help callers find troubleshooting comments)
}function g(e,n){if(f(e))return r("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",n,c(e)),p(e);// throw (to help callers find troubleshooting comments)
}function y(e,n){if(f(e))return r("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",n,c(e)),p(e);// throw (to help callers find troubleshooting comments)
}function b(e){if(f(e))return r("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",c(e)),p(e);// throw (to help callers find troubleshooting comments)
}function v(e){if(f(e))return r("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",c(e)),p(e);// throw (to help callers find troubleshooting comments)
}// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
function k(e){return!!Yg.call(ay,e)||!Yg.call(iy,e)&&(ty.test(e)?(ay[e]=!0,!0):(iy[e]=!0,r("Invalid attribute name: `%s`",e),!1))}function S(e,n,t){return null===n?!t&&!!(2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])):0===n.type}function w(e,n,t,i){if(null!==t&&t.type===0)return!1;switch(_typeof(n)){case"function":// $FlowIssue symbol is perfectly valid here
case"symbol":// eslint-disable-line
return!0;case"boolean":{if(i)return!1;if(null!==t)return!t.acceptsBooleans;var a=e.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a}default:return!1}}function x(e,n,t,i){if(null===n||"undefined"==typeof n)return!0;if(w(e,n,t,i))return!0;if(i)return!1;if(null!==t)switch(t.type){case 3:return!n;case 4:return!1===n;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function C(e){return oy.hasOwnProperty(e)?oy[e]:null}function R(e,n,t,i,a,o,d){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=d}// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
function T(e){!cy&&ly.test(e)&&(cy=!0,r("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",JSON.stringify(e)))}/**
   * Get the value for a property on a node. Only used in DEV for SSR validation.
   * The "expected" argument is used as a hint of what the expected value is.
   * Some properties have multiple equivalent values.
   */function P(e,n,t,i){{if(i.mustUseProperty){var a=i.propertyName;return e[a]}m(t,n),i.sanitizeURL&&T(""+t);var o=i.attributeName,d=null;if(4===i.type){if(e.hasAttribute(o)){var r=e.getAttribute(o);return""===r||(x(n,t,i,!1)?r:r===""+t?t:r);// eslint-disable-next-line react-internal/safe-string-coercion
}}else if(e.hasAttribute(o)){if(x(n,t,i,!1))// We had an attribute but shouldn't have had one, so read it
// for the error message.
return e.getAttribute(o);if(3===i.type)// If this was a boolean, it doesn't matter what the value is
// the fact that we have it is the same as the expected.
return t;// Even if this property uses a namespace we use getAttribute
// because we assume its namespaced name is the same as our config.
// To use getAttributeNS we need the local name which we don't have
// in our config atm.
d=e.getAttribute(o)}return x(n,t,i,!1)?null===d?t:d:d===""+t?t:d}}/**
   * Get the value for a attribute on a node. Only used in DEV for SSR validation.
   * The third argument is used as a hint of what the expected value is. Some
   * attributes have multiple equivalent values.
   */function _(e,n,t,i){{if(!k(n))return;if(!e.hasAttribute(n))return void 0===t?void 0:null;var a=e.getAttribute(n);return m(t,n),a===""+t?t:a}}/**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */function E(e,n,t,i){var a=C(n);if(!S(n,a,i)){if(x(n,t,a,i)&&(t=null),i||null===a){if(k(n)){var o=n;null===t?e.removeAttribute(o):(m(t,n),e.setAttribute(o,""+t))}return}var d=a.mustUseProperty;if(d){var r=a.propertyName;if(null===t){var s=a.type;e[r]=3!==s&&""}else// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
e[r]=t;return}// The rest are treated as attributes with special cases.
var u=a.attributeName,l=a.attributeNamespace;if(null===t)e.removeAttribute(u);else{var c=a.type,f;3===c||4===c&&!0===t?f="":(m(t,u),f=""+t,a.sanitizeURL&&T(f.toString())),l?e.setAttributeNS(l,u,f):e.setAttribute(u,f)}}}// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
function N(e){if(null===e||"object"!==_typeof(e))return null;var n=Ny&&e[Ny]||e["@@iterator"];return"function"==typeof n?n:null}function I(){}function D(){{if(0===Ly){zy=console.log,My=console.info,Uy=console.warn,Oy=console.error,Fy=console.group,Ay=console.groupCollapsed,Wy=console.groupEnd;// https://github.com/facebook/react/issues/19099
var e={configurable:!0,enumerable:!0,value:I,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Ly++}}function L(){{if(Ly--,0===Ly){/* eslint-disable react-internal/no-production-logging */var e={configurable:!0,enumerable:!0,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{log:Dy({},e,{value:zy}),info:Dy({},e,{value:My}),warn:Dy({},e,{value:Uy}),error:Dy({},e,{value:Oy}),group:Dy({},e,{value:Fy}),groupCollapsed:Dy({},e,{value:Ay}),groupEnd:Dy({},e,{value:Wy})})}0>Ly&&r("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}function z(e,n,t){{if(Hy===void 0)// Extract the VM specific prefix used by each line.
try{throw Error()}catch(e){var i=e.stack.trim().match(/\n( *(at )?)/);Hy=i&&i[1]||""}// We use the prefix to ensure our stacks line up with native stack frames.
return"\n"+Hy+e}}function M(e,n){// If something asked for a stack inside a fake render, it should get ignored.
if(!e||By)return"";{var t=Vy.get(e);if(void 0!==t)return t}var i;By=!0;var a=Error.prepareStackTrace;// $FlowFixMe It does accept undefined.
Error.prepareStackTrace=void 0;var o;// Set the dispatcher in DEV because this might be call in the render function
// for warnings.
o=jy.current,jy.current=null,D();try{// This should throw.
if(n){// Something should be setting the props in the constructor.
var d=function Fake(){throw Error()};// $FlowFixMe
if(Object.defineProperty(d.prototype,"props",{set:function set(){// We use a throwing setter instead of frozen or non-writable props
// because that won't throw in a non-strict mode function.
throw Error()}}),"object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&Reflect.construct){// We construct a different control for this case to include any extra
// frames added by the construct call.
try{Reflect.construct(d,[])}catch(e){i=e}Reflect.construct(e,[],d)}else{try{d.call()}catch(e){i=e}e.call(d.prototype)}}else{try{throw Error()}catch(e){i=e}e()}}catch(n){// This is inlined manually because closure doesn't do it for us.
if(n&&i&&"string"==typeof n.stack){// This extracts the first frame from the sample that isn't also in the control.
// Skipping one frame that we assume is the frame that calls the two.
for(var r=n.stack.split("\n"),u=i.stack.split("\n"),l=r.length-1,f=u.length-1;1<=l&&0<=f&&r[l]!==u[f];)// We expect at least one stack frame to be shared.
// Typically this will be the root most one. However, stack frames may be
// cut off due to maximum stack limits. In this case, one maybe cut off
// earlier than the other. We assume that the sample is longer or the same
// and there for cut off earlier. So we should find the root most frame in
// the sample somewhere in the control.
f--;for(;1<=l&&0<=f;l--,f--)// Next we find the first one that isn't the same which should be the
// frame that called our sample function and the control.
if(r[l]!==u[f]){// In V8, the first line is describing the message but other VMs don't.
// If we're about to return the first line, and the control is also on the same
// line, that's a pretty good indicator that our sample threw at same line as
// the control. I.e. before we entered the sample frame. So we ignore this result.
// This can happen if you passed a class to function component, or non-function.
if(1!==l||1!==f)do// We may still have similar intermediate frames from the construct call.
// The next one that isn't the same should be our match though.
if(l--,f--,0>f||r[l]!==u[f]){// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
var p="\n"+r[l].replace(" at new "," at ");// If our component frame is labeled "<anonymous>"
// but we have a user-provided "displayName"
// splice it in to make the stack more readable.
// Return the line we found.
return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),"function"==typeof e&&Vy.set(e,p),p}while(1<=l&&0<=f);break}}}finally{By=!1,jy.current=o,L(),Error.prepareStackTrace=a}// Fallback to just using the name if we couldn't make it throw.
var m=e?e.displayName||e.name:"",h=m?z(m):"";return"function"==typeof e&&Vy.set(e,h),h}function U(e,n,t){return M(e,!0)}function O(e,n,t){return M(e,!1)}function F(e){var n=e.prototype;return!!(n&&n.isReactComponent)}function A(e,n,t){if(null==e)return"";if("function"==typeof e)return M(e,F(e));if("string"==typeof e)return z(e);switch(e){case ky:return z("Suspense");case Sy:return z("SuspenseList")}if("object"===_typeof(e))switch(e.$$typeof){case vy:return O(e.render);case wy:// Memo may contain any component type so we recursively resolve it.
return A(e.type,n,t);case xy:{var i=e,a=i._payload,o=i._init;try{// Lazy may contain any component type so we recursively resolve it.
return A(o(a),n,t)}catch(e){}}}return""}function W(e){var n=e._debugOwner?e._debugOwner.type:null,t=e._debugSource;switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return O(e.type);case 11:return O(e.type.render);case 1:return U(e.type);default:return""}}function j(e){try{var n="",t=e;do n+=W(t),t=t["return"];while(t);return n}catch(e){return"\nError generating stack: "+e.message+"\n"+e.stack}}function B(e,n,t){var i=e.displayName;if(i)return i;var a=n.displayName||n.name||"";return""===a?t:t+"("+a+")"}// Keep in sync with react-reconciler/getComponentNameFromFiber
function H(e){return e.displayName||"Context"}// Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
function V(e){if(null==e)// Host root, text node or just invalid type.
return null;if("number"==typeof e.tag&&r("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case my:return"Fragment";case py:return"Portal";case gy:return"Profiler";case hy:return"StrictMode";case ky:return"Suspense";case Sy:return"SuspenseList"}if("object"===_typeof(e))switch(e.$$typeof){case by:var n=e;return H(n)+".Consumer";case yy:var t=e;return H(t._context)+".Provider";case vy:return B(e,e.render,"ForwardRef");case wy:var i=e.displayName||null;return null===i?V(e.type)||"Memo":i;case xy:{var a=e,o=a._payload,d=a._init;try{return V(d(o))}catch(e){return null}}// eslint-disable-next-line no-fallthrough
}return null}function $(e,n,t){var i=n.displayName||n.name||"";return e.displayName||(""===i?t:t+"("+i+")")}// Keep in sync with shared/getComponentNameFromType
function Y(e){return e.displayName||"Context"}function q(e){var n=e.tag,t=e.type;switch(n){case 24:return"Cache";case 9:var i=t;return Y(i)+".Consumer";case 10:var a=t;return Y(a._context)+".Provider";case 18:return"DehydratedFragment";case 11:return $(t,t.render,"ForwardRef");case 7:return"Fragment";case 5:// Host component type is the display name (e.g. "div", "View")
return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:// Name comes from the type in this case; we don't have a tag.
return V(t);case 8:return t===hy?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";// The display name for this tags come from the user-provided type:
case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function K(){{if(null===qy)return null;var e=qy._debugOwner;if(null!==e&&"undefined"!=typeof e)return q(e)}return null}function Q(){return null===qy?"":j(qy);// Safe because if current fiber exists, we are reconciling,
// and it is guaranteed to be the work-in-progress version.
}function X(){Yy.getCurrentStack=null,qy=null,Ky=!1}function G(e){Yy.getCurrentStack=null===e?null:Q,qy=e,Ky=!1}function J(){return qy}function Z(e){Ky=e}// Flow does not allow string concatenation of most non-string types. To work
// around this limitation, we use an opaque type that can only be obtained by
// passing the value through getToStringValue first.
function ee(e){// The coercion safety check is performed in getToStringValue().
// eslint-disable-next-line react-internal/safe-string-coercion
return""+e}function ne(e){switch(_typeof(e)){case"boolean":case"number":case"string":case"undefined":return e;case"object":return v(e),e;default:// function, symbol are assigned as empty strings
return""}}function te(e,n){Qy[n.type]||n.onChange||n.onInput||n.readOnly||n.disabled||null==n.value||r("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),n.onChange||n.readOnly||n.disabled||null==n.checked||r("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function ie(e){var n=e.type,t=e.nodeName;return t&&"input"===t.toLowerCase()&&("checkbox"===n||"radio"===n)}function ae(e){return e._valueTracker}function oe(e){e._valueTracker=null}function de(e){var n="";return e?(n=ie(e)?e.checked?"true":"false":e.value,n):n}function re(e){var n=ie(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);v(e[n]);var i=""+e[n];// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
if(!(e.hasOwnProperty(n)||"undefined"==typeof t||"function"!=typeof t.get||"function"!=typeof t.set)){var a=t.get,o=t.set;Object.defineProperty(e,n,{configurable:!0,get:function get(){return a.call(this)},set:function set(e){v(e),i=""+e,o.call(this,e)}}),Object.defineProperty(e,n,{enumerable:t.enumerable});var d={getValue:function getValue(){return i},setValue:function setValue(e){v(e),i=""+e},stopTracking:function stopTracking(){oe(e),delete e[n]}};return d}}function se(e){ae(e)||(// TODO: Once it's just Fiber we can move this to node._wrapperState
e._valueTracker=re(e))}function ue(e){if(!e)return!1;var n=ae(e);// if there is no tracker at this point it's unlikely
// that trying again will succeed
if(!n)return!0;var t=n.getValue(),i=de(e);return i!==t&&(n.setValue(i),!0)}function le(n){if(n=n||("undefined"==typeof document?void 0:document),"undefined"==typeof n)return null;try{return n.activeElement||n.body}catch(t){return n.body}}function ce(e){var n="checkbox"===e.type||"radio"===e.type;return n?null!=e.checked:null!=e.value}/**
   * Implements an <input> host component that allows setting these optional
   * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
   *
   * If `checked` or `value` are not supplied (or null/undefined), user actions
   * that affect the checked state or value will trigger updates to the element.
   *
   * If they are supplied (and not null/undefined), the rendered element will not
   * trigger updates to the element. Instead, the props must change in order for
   * the rendered element to be updated.
   *
   * The rendered element will be initialized as unchecked (or `defaultChecked`)
   * with an empty value (or `defaultValue`).
   *
   * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
   */function fe(e,n){var t=e,i=n.checked,a=Dy({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null==i?t._wrapperState.initialChecked:i});return a}function pe(e,n){te("input",n),n.checked===void 0||n.defaultChecked===void 0||Gy||(r("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",K()||"A component",n.type),Gy=!0),n.value===void 0||n.defaultValue===void 0||Xy||(r("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",K()||"A component",n.type),Xy=!0);var t=e,i=null==n.defaultValue?"":n.defaultValue;t._wrapperState={initialChecked:null==n.checked?n.defaultChecked:n.checked,initialValue:ne(null==n.value?i:n.value),controlled:ce(n)}}function me(e,n){var t=e,i=n.checked;null!=i&&E(t,"checked",i,!1)}function he(e,n){var t=e;{var i=ce(n);t._wrapperState.controlled||!i||Zy||(r("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),Zy=!0),!t._wrapperState.controlled||i||Jy||(r("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),Jy=!0)}me(e,n);var a=ne(n.value),o=n.type;if(null!=a)"number"===o?(0===a&&""===t.value||// We explicitly want to coerce to number here if possible.
// eslint-disable-next-line
t.value!=a)&&(t.value=ee(a)):t.value!==ee(a)&&(t.value=ee(a));else if("submit"===o||"reset"===o)return void t.removeAttribute("value");n.hasOwnProperty("value")?ve(t,n.type,a):n.hasOwnProperty("defaultValue")&&ve(t,n.type,ne(n.defaultValue)),null==n.checked&&null!=n.defaultChecked&&(t.defaultChecked=!!n.defaultChecked)}function ge(e,n,t){var i=e;// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type,o="submit"===a||"reset"===a;// Avoid setting value attribute on submit/reset inputs as it overrides the
// default value provided by the browser. See: #12872
if(o&&(n.value===void 0||null===n.value))return;var d=ee(i._wrapperState.initialValue);// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
t||d===i.value||(i.value=d),// Otherwise, the value attribute is synchronized to the property,
// so we assign defaultValue to the same thing as the value property
// assignment step above.
i.defaultValue=d}// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var r=i.name;""!==r&&(i.name=""),i.defaultChecked=!i.defaultChecked,i.defaultChecked=!!i._wrapperState.initialChecked,""!==r&&(i.name=r)}function ye(e,n){var t=e;he(t,n),be(t,n)}function be(e,n){var t=n.name;if("radio"===n.type&&null!=t){for(var a=e;a.parentNode;)a=a.parentNode;// If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form. It might not even be in the
// document. Let's just use the local `querySelectorAll` to ensure we don't
// miss anything.
m(t,"name");for(var o=a.querySelectorAll("input[name="+JSON.stringify(""+t)+"][type=\"radio\"]"),d=0,r;d<o.length;d++)if(r=o[d],r!==e&&r.form===e.form){// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var s=dr(r);if(!s)throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");// We need update the tracked value on the named cousin since the value
// was changed but the input saw no event or value set
ue(r),he(r,s)}}}// In Chrome, assigning defaultValue to certain input types triggers input validation.
// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".
//
// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text
//
// https://github.com/facebook/react/issues/7253
function ve(e,n,t){(// Focused number inputs synchronize on blur. See ChangeEventPlugin.js
"number"!==n||le(e.ownerDocument)!==e)&&(null==t?e.defaultValue=ee(e._wrapperState.initialValue):e.defaultValue!==ee(t)&&(e.defaultValue=ee(t)))}/**
   * Implements an <option> host component that warns when `selected` is set.
   */function ke(e,t){null==t.value&&("object"===_typeof(t.children)&&null!==t.children?n.Children.forEach(t.children,function(e){null!=e&&"string"!=typeof e&&"number"!=typeof e&&(nb||(nb=!0,r("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")))}):null!=t.dangerouslySetInnerHTML&&!tb&&(tb=!0,r("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),null==t.selected||eb||(r("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),eb=!0)}function Se(e,n){null!=n.value&&e.setAttribute("value",ee(ne(n.value)))}// eslint-disable-next-line no-redeclare
function we(e){return ib(e)}function xe(){var e=K();return e?"\n\nCheck the render method of `"+e+"`.":""}/**
   * Validation function for `value` and `defaultValue`.
   */function Ce(e){{te("select",e);for(var n=0,t;n<ob.length;n++)if(t=ob[n],null!=e[t]){var a=we(e[t]);e.multiple&&!a?r("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",t,xe()):!e.multiple&&a&&r("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",t,xe())}}}function Re(e,n,t,a){var o=e.options;if(n){for(var d=t,r={},s=0;s<d.length;s++)// Prefix to avoid chaos with special keys.
r["$"+d[s]]=!0;for(var u=0,l;u<o.length;u++)l=r.hasOwnProperty("$"+o[u].value),o[u].selected!==l&&(o[u].selected=l),l&&a&&(o[u].defaultSelected=!0)}else{// Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
for(var c=ee(ne(t)),f=null,p=0;p<o.length;p++){if(o[p].value===c)return o[p].selected=!0,void(a&&(o[p].defaultSelected=!0));null!==f||o[p].disabled||(f=o[p])}null!==f&&(f.selected=!0)}}/**
   * Implements a <select> host component that allows optionally setting the
   * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
   * stringable. If `multiple` is true, the prop must be an array of stringables.
   *
   * If `value` is not supplied (or null/undefined), user actions that change the
   * selected option will trigger updates to the rendered options.
   *
   * If it is supplied (and not null/undefined), the rendered options will not
   * update in response to user actions. Instead, the `value` prop must change in
   * order for the rendered options to update.
   *
   * If `defaultValue` is provided, any options with the supplied values will be
   * selected.
   */function Te(e,n){return Dy({},n,{value:void 0})}function Pe(e,n){var t=e;Ce(n),t._wrapperState={wasMultiple:!!n.multiple},n.value===void 0||n.defaultValue===void 0||ab||(r("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"),ab=!0)}function _e(e,n){var t=e;t.multiple=!!n.multiple;var i=n.value;null==i?null!=n.defaultValue&&Re(t,!!n.multiple,n.defaultValue,!0):Re(t,!!n.multiple,i,!1)}function Ee(e,n){var t=e,i=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!n.multiple;var a=n.value;null==a?i!==!!n.multiple&&(null==n.defaultValue?Re(t,!!n.multiple,n.multiple?[]:"",!1):Re(t,!!n.multiple,n.defaultValue,!0)):Re(t,!!n.multiple,a,!1)}function Ne(e,n){var t=e,i=n.value;null!=i&&Re(t,!!n.multiple,i,!1)}/**
   * Implements a <textarea> host component that allows setting `value`, and
   * `defaultValue`. This differs from the traditional DOM API because value is
   * usually set as PCDATA children.
   *
   * If `value` is not supplied (or null/undefined), user actions that affect the
   * value will trigger updates to the element.
   *
   * If `value` is supplied (and not null/undefined), the rendered element will
   * not trigger updates to the element. Instead, the `value` prop must change in
   * order for the rendered element to be updated.
   *
   * The rendered element will be initialized with an empty value, the prop
   * `defaultValue` if specified, or the children content (deprecated).
   */function Ie(e,n){var t=e;if(null!=n.dangerouslySetInnerHTML)throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");// Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.  We could add a check in setTextContent
// to only set the value if/when the value differs from the node value (which would
// completely solve this IE9 bug), but Sebastian+Sophie seemed to like this
// solution. The value can be a boolean or object so that's why it's forced
// to be a string.
var i=Dy({},n,{value:void 0,defaultValue:void 0,children:ee(t._wrapperState.initialValue)});return i}function De(e,n){var t=e;te("textarea",n),n.value===void 0||n.defaultValue===void 0||db||(r("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",K()||"A component"),db=!0);var i=n.value;// Only bother fetching default value if we're going to use it
if(null==i){var a=n.children,o=n.defaultValue;if(null!=a){r("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");{if(null!=o)throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(we(a)){if(1<a.length)throw new Error("<textarea> can only have at most one child.");a=a[0]}o=a}}null==o&&(o=""),i=o}t._wrapperState={initialValue:ne(i)}}function Le(e,n){var t=e,i=ne(n.value),a=ne(n.defaultValue);if(null!=i){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var o=ee(i);// To avoid side effects (such as losing text selection), only set value if changed
o!==t.value&&(t.value=o),null==n.defaultValue&&t.defaultValue!==o&&(t.defaultValue=o)}null!=a&&(t.defaultValue=ee(a))}function ze(e,n){var t=e,i=t.textContent;// This is in postMount because we need access to the DOM node, which is not
// available until after the component has mounted.
// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
i===t._wrapperState.initialValue&&""!==i&&null!==i&&(t.value=i)}function Me(e,n){// DOM component is still mounted; update
Le(e,n)}// Assumes there is no parent namespace.
function Ue(e){return"svg"===e?"http://www.w3.org/2000/svg":"math"===e?"http://www.w3.org/1998/Math/MathML":"http://www.w3.org/1999/xhtml"}function Oe(e,n){return null==e||"http://www.w3.org/1999/xhtml"===e?Ue(n):"http://www.w3.org/2000/svg"===e&&"foreignObject"===n?"http://www.w3.org/1999/xhtml":e;// By default, pass namespace below.
}/* globals MSApp */ /**
   * Create a function which has 'unsafe' privileges (required by windows8 apps)
   */ /**
   * @param {string} prefix vendor-specific prefix, eg: Webkit
   * @param {string} key style name, eg: transitionDuration
   * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
   * WebkitTransitionDuration
   */function Fe(e,n){return e+n.charAt(0).toUpperCase()+n.substring(1)}/**
   * Support style names that may come passed in prefixed by adding permutations
   * of vendor prefixes.
   */ /**
   * Convert a value into the proper css writable value. The style name `name`
   * should be logical (no hyphens), as specified
   * in `CSSProperty.isUnitlessNumber`.
   *
   * @param {string} name CSS property name such as `topMargin`.
   * @param {*} value CSS property value such as `10px`.
   * @return {string} Normalized style value with dimensions applied.
   */function Ae(e,n,t){// Note that we've removed escapeTextForBrowser() calls here since the
// whole string will be escaped when the attribute is injected into
// the markup. If you provide unsafe user data here they can inject
// arbitrary CSS which may be problematic (I couldn't repro this):
// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
// http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
// This is not an XSS hole but instead a potential CSS injection issue
// which has lead to a greater discussion about how we're going to
// trust URLs moving forward. See #2115901
var i=null==n||"boolean"==typeof n||""===n;return i?"":t||"number"!=typeof n||0===n||vb.hasOwnProperty(e)&&vb[e]?(y(n,e),(""+n).trim()):n+"px"}/**
   * Hyphenates a camelcased CSS property name, for example:
   *
   *   > hyphenateStyleName('backgroundColor')
   *   < "background-color"
   *   > hyphenateStyleName('MozTransition')
   *   < "-moz-transition"
   *   > hyphenateStyleName('msTransition')
   *   < "-ms-transition"
   *
   * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
   * is converted to `-ms-`.
   */function We(e){return e.replace(wb,"-$1").toLowerCase().replace(xb,"-ms-")}/**
   * Operations for dealing with CSS properties.
   */ /**
   * This creates a string that is expected to be equivalent to the style
   * attribute generated by server-side rendering. It by-passes warnings and
   * security checks so it's not safe to use this value for anything other than
   * comparison. It is only used in DEV for SSR validation.
   */function je(e){{var n="",t="";for(var i in e)if(e.hasOwnProperty(i)){var a=e[i];if(null!=a){var o=0===i.indexOf("--");n+=t+(o?i:We(i))+":",n+=Ae(i,a,o),t=";"}}return n||null}}/**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   */function Be(e,n){var t=e.style;for(var i in n)if(n.hasOwnProperty(i)){var a=0===i.indexOf("--");a||Ab(i,n[i]);var o=Ae(i,n[i],a);"float"==i&&(i="cssFloat"),a?t.setProperty(i,o):t[i]=o}}function He(e){return null==e||"boolean"==typeof e||""===e}/**
   * Given {color: 'red', overflow: 'hidden'} returns {
   *   color: 'color',
   *   overflowX: 'overflow',
   *   overflowY: 'overflow',
   * }. This can be read as "the overflowY property was set by the overflow
   * shorthand". That is, the values are the property that each was derived from.
   */function Ve(e){var n={};for(var t in e)for(var a=bb[t]||[t],o=0;o<a.length;o++)n[a[o]]=t;return n}/**
   * When mixing shorthand and longhand property names, we warn during updates if
   * we expect an incorrect result to occur. In particular, we warn for:
   *
   * Updating a shorthand property (longhand gets overwritten):
   *   {font: 'foo', fontVariant: 'bar'} -> {font: 'baz', fontVariant: 'bar'}
   *   becomes .style.font = 'baz'
   * Removing a shorthand property (longhand gets lost too):
   *   {font: 'foo', fontVariant: 'bar'} -> {fontVariant: 'bar'}
   *   becomes .style.font = ''
   * Removing a longhand property (should revert to shorthand; doesn't):
   *   {font: 'foo', fontVariant: 'bar'} -> {font: 'foo'}
   *   becomes .style.fontVariant = ''
   */function $e(e,n){{if(!n)return;var t=Ve(e),i=Ve(n),a={};for(var o in t){var d=t[o],s=i[o];if(s&&d!==s){var u=d+","+s;if(a[u])continue;a[u]=!0,r("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",He(e[d])?"Removing":"Updating",d,s)}}}}// For HTML, certain tags should omit their close tag. We keep a list for
// those special-case tags.
function Ye(e,n){if(n){// Note the use of `==` which checks for null or undefined.
if(jb[e]&&(null!=n.children||null!=n.dangerouslySetInnerHTML))throw new Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");if(null!=n.dangerouslySetInnerHTML){if(null!=n.children)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==_typeof(n.dangerouslySetInnerHTML)||!("__html"in n.dangerouslySetInnerHTML))throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.")}if(!n.suppressContentEditableWarning&&n.contentEditable&&null!=n.children&&r("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),null!=n.style&&"object"!==_typeof(n.style))throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.")}}function qe(e,n){if(-1===e.indexOf("-"))return"string"==typeof n.is;return"annotation-xml"!==e&&"color-profile"!==e&&"font-face"!==e&&"font-face-src"!==e&&"font-face-uri"!==e&&"font-face-format"!==e&&"font-face-name"!==e&&"missing-glyph"!==e}// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
function Ke(e,n){{if(Yg.call($b,n)&&$b[n])return!0;if(qb.test(n)){var t="aria-"+n.slice(4).toLowerCase(),i=Vb.hasOwnProperty(t)?t:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==i)return r("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",n),$b[n]=!0,!0;// aria-* attributes should be lowercase; suggest the lowercase version.
if(n!==i)return r("Invalid ARIA attribute `%s`. Did you mean `%s`?",n,i),$b[n]=!0,!0}if(Yb.test(n)){var a=n.toLowerCase(),o=Vb.hasOwnProperty(a)?a:null;// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==o)return $b[n]=!0,!1;// aria-* attributes should be lowercase; suggest the lowercase version.
if(n!==o)return r("Unknown ARIA attribute `%s`. Did you mean `%s`?",n,o),$b[n]=!0,!0}}return!0}function Qe(e,n){{var t=[];for(var i in n){var a=Ke(e,i);a||t.push(i)}var o=t.map(function(e){return"`"+e+"`"}).join(", ");1===t.length?r("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",o,e):1<t.length&&r("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",o,e)}}function Xe(e,n){qe(e,n)||Qe(e,n)}function Ge(e,n){{if("input"!==e&&"textarea"!==e&&"select"!==e)return;null==n||null!==n.value||Kb||(Kb=!0,"select"===e&&n.multiple?r("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):r("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e))}}function Je(e,n,t){qe(e,n)||nv(e,n,t)}function Ze(e){null!==dv&&r("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),dv=e}function en(){null===dv&&r("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),dv=null}function nn(e){return e===dv}/**
   * Gets the target node from a native browser event by accounting for
   * inconsistencies in browser DOM APIs.
   *
   * @param {object} nativeEvent Native browser event.
   * @return {DOMEventTarget} Target node.
   */function tn(e){// Fallback to nativeEvent.srcElement for IE9
// https://github.com/facebook/react/issues/12506
var n=e.target||e.srcElement||window;// Normalize SVG <use> element events #4963
// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return n.correspondingUseElement&&(n=n.correspondingUseElement),3===n.nodeType?n.parentNode:n}function an(e){// We perform this translation at the end of the event loop so that we
// always receive the correct fiber here
var n=ar(e);if(n)// Unmounted
{if("function"!=typeof rv)throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");var t=n.stateNode;// Guard against Fiber being unmounted.
if(t){var i=dr(t);rv(n.stateNode,n.type,i)}}}function on(e){rv=e}function dn(e){sv?uv?uv.push(e):uv=[e]:sv=e}function rn(){return null!==sv||null!==uv}function sn(){if(sv){var e=sv,n=uv;if(sv=null,uv=null,an(e),n)for(var t=0;t<n.length;t++)an(n[t])}}// the renderer. Such as when we're dispatching events or if third party
// libraries need to call batchedUpdates. Eventually, this API will go away when
// everything is batched by default. We'll then have a similar API to opt-out of
// scheduled work and instead do synchronous work.
// Defaults
function un(){// Here we wait until all updates have propagated, which is important
// when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
// Then we restore state of any controlled component.
var e=rn();e&&(cv(),sn())}function ln(e,n,t){if(fv)// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state.
return e(n,t);fv=!0;try{return lv(e,n,t)}finally{fv=!1,un()}}// TODO: Replace with flushSync
function cn(e,n,t){lv=e,cv=t}function fn(e){return"button"===e||"input"===e||"select"===e||"textarea"===e}function pn(e,n,t){return!("onClick"!==e&&"onClickCapture"!==e&&"onDoubleClick"!==e&&"onDoubleClickCapture"!==e&&"onMouseDown"!==e&&"onMouseDownCapture"!==e&&"onMouseMove"!==e&&"onMouseMoveCapture"!==e&&"onMouseUp"!==e&&"onMouseUpCapture"!==e&&"onMouseEnter"!==e)&&!!(t.disabled&&fn(n))}/**
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */function mn(e,n){var t=e.stateNode;if(null===t)// Work in progress (ex: onload events in incremental mode).
return null;var i=dr(t);if(null===i)// Work in progress.
return null;var a=i[n];if(pn(n,e.type,i))return null;if(a&&"function"!=typeof a)throw new Error("Expected `"+n+"` listener to be a function, instead got a value of `"+_typeof(a)+"` type.");return a}function hn(n,t,i,o,a,r,s,d,e){var u=Array.prototype.slice.call(arguments,3);try{t.apply(i,u)}catch(e){this.onError(e)}}/**
   * Call a function while guarding against errors that happens within it.
   * Returns an error if it throws, otherwise null.
   *
   * In production, this is implemented using a try-catch. The reason we don't
   * use a try-catch directly is so that we can swap out a different
   * implementation in DEV mode.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */function gn(n,t,i,o,a,r,s,d,e){bv=!1,vv=null,yv.apply(wv,arguments)}/**
   * Same as invokeGuardedCallback, but instead of returning an error, it stores
   * it in a global so it can be rethrown by `rethrowCaughtError` later.
   * TODO: See if caughtError and rethrowError can be unified.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */function yn(n,t,i,o,a,r,s,d,e){if(gn.apply(this,arguments),bv){var u=kn();kv||(kv=!0,Sv=u)}}/**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */function bn(){if(kv){var e=Sv;throw kv=!1,Sv=null,e}}function vn(){return bv}function kn(){if(bv){var e=vv;return bv=!1,vv=null,e}throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}/**
   * `ReactInstanceMap` maintains a mapping from a public facing stateful
   * instance (key) and the internal representation (value). This allows public
   * methods to accept the user facing instance as an argument and map them back
   * to internal methods.
   *
   * Note that this module is currently shared and assumed to be stateless.
   * If this becomes an actual Map, that will break.
   */function Sn(e){return e._reactInternals}function wn(e){return e._reactInternals!==void 0}function xn(e,n){e._reactInternals=n}// Don't change these two values. They're used by React Dev Tools.
function Cn(e){var n=e,t=e;if(!e.alternate){// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
var i=n;do n=i,0!==(4098&n.flags)&&(t=n["return"]),i=n["return"];while(i)}else for(;n["return"];)n=n["return"];return 3===n.tag?t:null;// If we didn't hit the root, that means that we're in an disconnected tree
// that has been unmounted.
}function Rn(e){if(e.tag===13){var n=e.memoizedState;if(null===n){var t=e.alternate;null!==t&&(n=t.memoizedState)}if(null!==n)return n.dehydrated}return null}function Tn(e){return e.tag===3?e.stateNode.containerInfo:null}function Pn(e){return Cn(e)===e}function _n(e){{var n=wk.current;if(null!==n&&n.tag===1){var t=n,i=t.stateNode;i._warnedAboutRefsInRender||r("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",q(t)||"A component"),i._warnedAboutRefsInRender=!0}}var a=Sn(e);return!!a&&Cn(a)===a}function En(e){if(Cn(e)!==e)throw new Error("Unable to find node on an unmounted component.")}function Nn(e){var n=e.alternate;if(!n){// If there is no alternate, then we only need to check if it is mounted.
var t=Cn(e);if(null===t)throw new Error("Unable to find node on an unmounted component.");return t===e?e:null}// If we have two possible branches, we'll walk backwards up to the root
// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
for(var i=e,o=n;!0;){var d=i["return"];if(null===d)// We're at the root.
break;var r=d.alternate;if(null===r){// There is no alternate. This is an unusual case. Currently, it only
// happens when a Suspense component is hidden. An extra fragment fiber
// is inserted in between the Suspense fiber and its children. Skip
// over this extra fragment fiber and proceed to the next parent.
var s=d["return"];if(null!==s){i=o=s;continue}// If there's no parent, we're at the root.
break}// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(d.child===r.child){for(var u=d.child;u;){if(u===i)return En(d),e;if(u===o)return En(d),n;u=u.sibling}// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
throw new Error("Unable to find node on an unmounted component.")}if(i["return"]!==o["return"])// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
i=d,o=r;else{// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
//
// Search parent A's child set
for(var l=!1,c=d.child;c;){if(c===i){l=!0,i=d,o=r;break}if(c===o){l=!0,o=d,i=r;break}c=c.sibling}if(!l){for(c=r.child;c;){if(c===i){l=!0,i=r,o=d;break}if(c===o){l=!0,o=r,i=d;break}c=c.sibling}if(!l)throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(i.alternate!==o)throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
if(i.tag!==3)throw new Error("Unable to find node on an unmounted component.");return i.stateNode.current===i?e:n;// Otherwise B has to be current branch.
}function In(e){var n=Nn(e);return null===n?null:Dn(n)}function Dn(e){// Next we'll drill down this component to find the first HostComponent/Text.
if(e.tag===5||e.tag===6)return e;for(var n=e.child;null!==n;){var t=Dn(n);if(null!==t)return t;n=n.sibling}return null}function Ln(e){var n=Nn(e);return null===n?null:zn(n)}function zn(e){// Next we'll drill down this component to find the first HostComponent/Text.
if(e.tag===5||e.tag===6)return e;for(var n=e.child;null!==n;){if(n.tag!==4){var t=zn(n);if(null!==t)return t}n=n.sibling}return null}// This module only exists as an ESM wrapper around the external CommonJS
function Mn(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)// No DevTools
return!1;var n=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(n.isDisabled)// This isn't a real property on the hook, but it can be set to opt out
// of DevTools integration and associated warnings and logs.
// https://github.com/facebook/react/issues/3877
return!0;if(!n.supportsFiber)// DevTools exists, even though it doesn't support Fiber.
return r("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"),!0;try{// We have successfully injected, so now it is safe to set up hooks.
e=Dy({},e,{getLaneLabelMap:Bn,injectProfilingHooks:jn}),Uk=n.inject(e),Ok=n}catch(e){r("React instrumentation encountered an error: %s.",e)}return!!n.checkDCE}function Un(e,n){if(Ok&&"function"==typeof Ok.onScheduleFiberRoot)try{Ok.onScheduleFiberRoot(Uk,e,n)}catch(e){Ak||(Ak=!0,r("React instrumentation encountered an error: %s",e))}}function On(e,n){if(Ok&&"function"==typeof Ok.onCommitFiberRoot)try{var t=128===(128&e.current.flags),i;i=n===US?Ek:n===OS?Nk:n===FS?Ik:n===AS?Lk:Ik,Ok.onCommitFiberRoot(Uk,e,i,t)}catch(e){Ak||(Ak=!0,r("React instrumentation encountered an error: %s",e))}}function Fn(e){if(Ok&&"function"==typeof Ok.onPostCommitFiberRoot)try{Ok.onPostCommitFiberRoot(Uk,e)}catch(e){Ak||(Ak=!0,r("React instrumentation encountered an error: %s",e))}}function An(e){if(Ok&&"function"==typeof Ok.onCommitFiberUnmount)try{Ok.onCommitFiberUnmount(Uk,e)}catch(e){Ak||(Ak=!0,r("React instrumentation encountered an error: %s",e))}}function Wn(e){if("function"==typeof zk&&(Mk(e),o(e)),Ok&&"function"==typeof Ok.setStrictMode)try{Ok.setStrictMode(Uk,e)}catch(e){Ak||(Ak=!0,r("React instrumentation encountered an error: %s",e))}}// Profiler API hooks
function jn(e){Fk=e}function Bn(){{for(var e=new Map,n=1,t=0,i;t<Qk;t++)i=mt(n),e.set(n,i),n*=2;return e}}function Hn(e){null!==Fk&&"function"==typeof Fk.markCommitStarted&&Fk.markCommitStarted(e)}function Vn(){null!==Fk&&"function"==typeof Fk.markCommitStopped&&Fk.markCommitStopped()}function $n(e){null!==Fk&&"function"==typeof Fk.markComponentRenderStarted&&Fk.markComponentRenderStarted(e)}function Yn(){null!==Fk&&"function"==typeof Fk.markComponentRenderStopped&&Fk.markComponentRenderStopped()}function qn(e){null!==Fk&&"function"==typeof Fk.markComponentPassiveEffectMountStarted&&Fk.markComponentPassiveEffectMountStarted(e)}function Kn(){null!==Fk&&"function"==typeof Fk.markComponentPassiveEffectMountStopped&&Fk.markComponentPassiveEffectMountStopped()}function Qn(e){null!==Fk&&"function"==typeof Fk.markComponentPassiveEffectUnmountStarted&&Fk.markComponentPassiveEffectUnmountStarted(e)}function Xn(){null!==Fk&&"function"==typeof Fk.markComponentPassiveEffectUnmountStopped&&Fk.markComponentPassiveEffectUnmountStopped()}function Gn(e){null!==Fk&&"function"==typeof Fk.markComponentLayoutEffectMountStarted&&Fk.markComponentLayoutEffectMountStarted(e)}function Jn(){null!==Fk&&"function"==typeof Fk.markComponentLayoutEffectMountStopped&&Fk.markComponentLayoutEffectMountStopped()}function Zn(e){null!==Fk&&"function"==typeof Fk.markComponentLayoutEffectUnmountStarted&&Fk.markComponentLayoutEffectUnmountStarted(e)}function et(){null!==Fk&&"function"==typeof Fk.markComponentLayoutEffectUnmountStopped&&Fk.markComponentLayoutEffectUnmountStopped()}function nt(e,n,t){null!==Fk&&"function"==typeof Fk.markComponentErrored&&Fk.markComponentErrored(e,n,t)}function tt(e,n,t){null!==Fk&&"function"==typeof Fk.markComponentSuspended&&Fk.markComponentSuspended(e,n,t)}function it(e){null!==Fk&&"function"==typeof Fk.markLayoutEffectsStarted&&Fk.markLayoutEffectsStarted(e)}function at(){null!==Fk&&"function"==typeof Fk.markLayoutEffectsStopped&&Fk.markLayoutEffectsStopped()}function ot(e){null!==Fk&&"function"==typeof Fk.markPassiveEffectsStarted&&Fk.markPassiveEffectsStarted(e)}function dt(){null!==Fk&&"function"==typeof Fk.markPassiveEffectsStopped&&Fk.markPassiveEffectsStopped()}function rt(e){null!==Fk&&"function"==typeof Fk.markRenderStarted&&Fk.markRenderStarted(e)}function st(){null!==Fk&&"function"==typeof Fk.markRenderYielded&&Fk.markRenderYielded()}function ut(){null!==Fk&&"function"==typeof Fk.markRenderStopped&&Fk.markRenderStopped()}function lt(e){null!==Fk&&"function"==typeof Fk.markRenderScheduled&&Fk.markRenderScheduled(e)}function ct(e,n){null!==Fk&&"function"==typeof Fk.markForceUpdateScheduled&&Fk.markForceUpdateScheduled(e,n)}function ft(e,n){null!==Fk&&"function"==typeof Fk.markStateUpdateScheduled&&Fk.markStateUpdateScheduled(e,n)}function pt(e){var n=e>>>0;return 0==n?32:0|31-(0|qk(n)/Kk)}// If those values are changed that package should be rebuilt and redeployed.
// This function is used for the experimental timeline (react-devtools-timeline)
// It should be kept in sync with the Lanes values above.
function mt(e){{if(e&1)return"Sync";if(2&e)return"InputContinuousHydration";if(4&e)return"InputContinuous";if(8&e)return"DefaultHydration";if(16&e)return"Default";if(32&e)return"TransitionHydration";if(4194240&e)return"Transition";if(130023424&e)return"Retry";if(134217728&e)return"SelectiveHydration";if(268435456&e)return"IdleHydration";if(536870912&e)return"Idle";if(1073741824&e)return"Offscreen"}}function ht(e){switch(Dt(e)){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:// This shouldn't be reachable, but as a fallback, return the entire bitmask.
return r("Should have found matching lanes. This is a bug in React."),e}}function gt(e,n){// Early bailout if there's no pending work left.
var t=e.pendingLanes;if(t===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes,d=t&268435455;// Do not work on any idle work until all the non-idle work has finished,
// even if the work is suspended.
if(d!==0){var r=d&~a;if(r!==0)i=ht(r);else{var s=d&o;s!==0&&(i=ht(s))}}else{// The only remaining work is Idle.
var u=t&~a;u===0?o!==0&&(i=ht(o)):i=ht(u)}if(0===i)// This should only be reachable if we're suspended
// TODO: Consider warning in this path if a fallback timer is not scheduled.
return 0;// If we're already in the middle of a render, switching lanes will interrupt
// it and we'll lose our progress. We should only do this if the new lanes are
// higher priority.
if(0!==n&&n!==i&&// If we already suspended with a delay, then interrupting is fine. Don't
// bother waiting until the root is complete.
0===(n&a)){var l=Dt(i),c=Dt(n);if(// Tests whether the next lane is equal or lower priority than the wip
// one. This works because the bits decrease in priority as you go left.
l>=c||// Default priority updates should not interrupt transition updates. The
// only difference between default updates and transition updates is that
// default updates do not support refresh transitions.
16===l&&0!==(4194240&c))// Keep working on the existing in-progress tree. Do not interrupt.
return n}(i&4)!==0&&(i|=t&16);// Check for entangled lanes and add them to the batch.
//
// A lane is said to be entangled with another when it's not allowed to render
// in a batch that does not also include the other lane. Typically we do this
// when multiple updates have the same source, and we only want to respond to
// the most recent event from that source.
//
// Note that we apply entanglements *after* checking for partial work above.
// This means that if a lane is entangled during an interleaved event while
// it's already rendering, we won't interrupt it. This is intentional, since
// entanglement is usually "best effort": we'll try our best to render the
// lanes in the same batch, but it's not worth throwing out partially
// completed work in order to do it.
// TODO: Reconsider this. The counter-argument is that the partial work
// represents an intermediate state, which we don't want to show to the user.
// And by spending extra time finishing it, we're increasing the amount of
// time it takes to show the final state, which is what they are actually
// waiting for.
//
// For those exceptions where entanglement is semantically important, like
// useMutableSource, we should ensure that there is no partial work at the
// time we apply the entanglement.
var f=e.entangledLanes;if(f!==0)for(var p=e.entanglements,m=i&f;0<m;){var h=zt(m),g=1<<h;i|=p[h],m&=~g}return i}function yt(e,n){for(var t=e.eventTimes,i=-1;0<n;){var a=zt(n),o=1<<a,d=t[a];d>i&&(i=d),n&=~o}return i}function bt(e,n){return 1===e||2===e||4===e?n+250:8===e||16===e||32===e||64===e||128===e||256===e||512===e||1024===e||2048===e||4096===e||8192===e||16384===e||32768===e||65536===e||131072===e||262144===e||524288===e||1048576===e||2097152===e?n+5e3:4194304===e||8388608===e||16777216===e||33554432===e||67108864===e?-1:134217728===e||268435456===e||536870912===e||1073741824===e?-1:(r("Should have found matching lanes. This is a bug in React."),-1)}function vt(e,n){// TODO: This gets called every time we yield. We can optimize by storing
// the earliest expiration time on the root. Then use that to quickly bail out
// of this function.
// Iterate through the pending lanes and check if we've reached their
// expiration time. If so, we'll assume the update is being starved and mark
// it as expired to force it to finish.
for(var t=e.pendingLanes,i=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,d=t;0<d;){var r=zt(d),s=1<<r,u=o[r];u===-1?((s&i)===0||(s&a)!==0)&&(o[r]=bt(s,n)):u<=n&&(e.expiredLanes|=s),d&=~s}}// This returns the highest priority pending lanes regardless of whether they
// are suspended.
function kt(e){return ht(e.pendingLanes)}function St(e){var n=e.pendingLanes&-1073741825;return 0===n?1073741824&n?1073741824:0:n}function wt(e){return(e&1)!==0}function xt(e){return(e&268435455)!==0}function Ct(e){return(e&130023424)===e}function Rt(e){var n=21;return(e&21)==0}function Tt(e){return(e&4194240)===e}function Pt(e,n){var t=30;return(n&30)!==0}function _t(e,n){// This is a separate check from includesBlockingLane because a lane can
// expire after a render has already started.
return(n&e.expiredLanes)!==0}function Et(e){return(e&4194240)!==0}function Nt(){// Cycle through the lanes, assigning each new transition to the next lane.
// In most cases, this means every transition gets its own lane, until we
// run out of lanes and cycle back to the beginning.
var e=zS;return zS<<=1,0===(4194240&zS)&&(zS=64),e}function It(){var e=MS;return MS<<=1,0===(130023424&MS)&&(MS=4194304),e}function Dt(e){return e&-e}function Lt(e){// This wrapper function gets inlined. Only exists so to communicate that it
// doesn't matter which bit is selected; you can pick any bit without
// affecting the algorithms where its used. Here I'm using
// getHighestPriorityLane because it requires the fewest operations.
return Dt(e)}function zt(e){return 31-Yk(e)}function Mt(e){return zt(e)}function Ut(e,n){return(e&n)!==0}function Ot(e,n){return(e&n)===n}function Ft(e,n){return e|n}function At(e,n){return e&~n}function Wt(e,n){return e&n}// Seems redundant, but it changes the type from a single lane (used for
// updates) to a group of lanes (used for flushing work).
function jt(e){return e}function Bt(e,n){// This works because the bit ranges decrease in priority as you go left.
return e!==0&&e<n?e:n}function Ht(e){// Intentionally pushing one by one.
// https://v8.dev/blog/elements-kinds#avoid-creating-holes
for(var n=[],t=0;t<31;t++)n.push(e);return n}function Vt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0);var i=e.eventTimes,a=Mt(n);// We can always overwrite an existing timestamp because we prefer the most
// recent event, and we assume time is monotonically increasing.
i[a]=t}function $t(e,n){e.suspendedLanes|=n,e.pingedLanes&=~n;// The suspended lanes are no longer CPU-bound. Clear their expiration times.
for(var t=e.expirationTimes,i=n;0<i;){var a=zt(i),o=1<<a;t[a]=-1,i&=~o}}function Yt(e,n,t){e.pingedLanes|=e.suspendedLanes&n}function qt(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n;// Clear the lanes that no longer have pending work
for(var i=e.entanglements,a=e.eventTimes,o=e.expirationTimes,d=t;0<d;){var r=zt(d),s=1<<r;i[r]=0,a[r]=-1,o[r]=-1,d&=~s}}function Kt(e,n){// In addition to entangling each of the given lanes with each other, we also
// have to consider _transitive_ entanglements. For each lane that is already
// entangled with *any* of the given lanes, that lane is now transitively
// entangled with *all* the given lanes.
//
// Translated: If C is entangled with A, then entangling A with B also
// entangles C with B.
//
// If this is hard to grasp, it might help to intentionally break this
// function and look at the tests that fail in ReactTransition-test.js. Try
// commenting out one of the conditions below.
for(var t=e.entangledLanes|=n,i=e.entanglements,a=t;a;){var o=zt(a),d=1<<o;// Is this one of the newly entangled lanes?
d&n|// Is this lane transitively entangled with the newly entangled lanes?
i[o]&n&&(i[o]|=n),a&=~d}}function Qt(e,n){var t=Dt(n),i;switch(t){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}// Check if the lane we chose is suspended. If so, that indicates that we
// already attempted and failed to hydrate at that level. Also check if we're
// already rendering that lane, which is rare but could happen.
return 0===(i&(e.suspendedLanes|n))?i:0}function Xt(e,n,t){if(Wk)for(var i=e.pendingUpdatersLaneMap;0<t;){var a=Mt(t),o=1<<a,d=i[a];d.add(n),t&=~o}}function Gt(e,n){if(Wk)for(var t=e.pendingUpdatersLaneMap,i=e.memoizedUpdaters;0<n;){var a=Mt(n),o=1<<a,d=t[a];0<d.size&&(d.forEach(function(e){var n=e.alternate;null!==n&&i.has(n)||i.add(e)}),d.clear()),n&=~o}}function Jt(e,n){return null}function Zt(){return WS}function ei(e){WS=e}function ni(e,n){var t=WS;try{return WS=e,n()}finally{WS=t}}function ti(e,n){return 0!==e&&e<n?e:n}function ii(e,n){return 0===e||e>n?e:n}function ai(e,n){return 0!==e&&e<n}function oi(e){var n=Dt(e);return ai(1,n)?ai(4,n)?xt(n)?16:536870912:4:1}// This is imported by the event replaying implementation in React DOM. It's
// in a separate file to break a circular dependency between the renderer and
// the reconciler.
function di(e){var n=e.current.memoizedState;return n.isDehydrated}function ri(e){Uw=e}function si(e){Uw(e)}function ui(e){Ow=e}function li(e){Fw=e}function ci(e){Aw=e}function fi(e){Ww=e}// TODO: Upgrade this definition once we're on a newer version of Flow that
// has this definition built-in.
function pi(e){return-1<QS.indexOf(e)}function mi(e,n,t,i,a){return{blockedOn:e,domEventName:n,eventSystemFlags:t,nativeEvent:a,targetContainers:[i]}}function hi(e,n){switch(e){case"focusin":case"focusout":HS=null;break;case"dragenter":case"dragleave":VS=null;break;case"mouseover":case"mouseout":$S=null;break;case"pointerover":case"pointerout":{var t=n.pointerId;YS["delete"](t);break}case"gotpointercapture":case"lostpointercapture":{var i=n.pointerId;qS["delete"](i);break}}}function gi(e,n,t,i,a,o){if(null===e||e.nativeEvent!==o){var d=mi(n,t,i,a,o);if(null!==n){var r=ar(n);null!==r&&Ow(r)}return d}// If we have already queued this exact event, then it's because
// the different event systems have different DOM event listeners.
// We can accumulate the flags, and the targetContainers, and
// store a single event to be replayed.
e.eventSystemFlags|=i;var s=e.targetContainers;return null!==a&&-1===s.indexOf(a)&&s.push(a),e}function yi(e,n,t,i,a){// These set relatedTarget to null because the replayed event will be treated as if we
// moved from outside the window (no target) onto the target once it hydrates.
// Instead of mutating we could clone the event.
switch(n){case"focusin":{var o=a;return HS=gi(HS,e,n,t,i,o),!0}case"dragenter":{var d=a;return VS=gi(VS,e,n,t,i,d),!0}case"mouseover":{var r=a;return $S=gi($S,e,n,t,i,r),!0}case"pointerover":{var s=a,u=s.pointerId;return YS.set(u,gi(YS.get(u)||null,e,n,t,i,s)),!0}case"gotpointercapture":{var l=a,c=l.pointerId;return qS.set(c,gi(qS.get(c)||null,e,n,t,i,l)),!0}}return!1}// Check if this target is unblocked. Returns true if it's unblocked.
function bi(e){// TODO: This function shares a lot of logic with findInstanceBlockingEvent.
// Try to unify them. It's a bit tricky since it would require two return
// values.
var n=ir(e.target);if(null!==n){var t=Cn(n);if(null!==t){var i=t.tag;if(i===13){var a=Rn(t);if(null!==a)return e.blockedOn=a,void Ww(e.priority,function(){Fw(t)})}else if(i===3){var o=t.stateNode;if(di(o))// We don't currently have a way to increase the priority of
// a root other than sync.
return void(e.blockedOn=Tn(t))}}}e.blockedOn=null}function vi(e){// TODO: This will read the priority if it's dispatched by the React
// event system but not native events. Should read window.event.type, like
// we do for updates (getCurrentEventPriority).
for(var n=Aw(),t={blockedOn:null,target:e,priority:n},a=0;a<KS.length&&!!ai(n,KS[a].priority);a++);KS.splice(a,0,t),0===a&&bi(t)}function ki(e){if(null!==e.blockedOn)return!1;for(var n=e.targetContainers;0<n.length;){var t=n[0],i=Di(e.domEventName,e.eventSystemFlags,t,e.nativeEvent);if(null===i){var a=e.nativeEvent,o=new a.constructor(a.type,a);Ze(o),a.target.dispatchEvent(o),en()}else{// We're still blocked. Try again later.
var d=ar(i);return null!==d&&Ow(d),e.blockedOn=i,!1}// This target container was successfully dispatched. Try the next.
n.shift()}return!0}function Si(e,n,t){ki(e)&&t["delete"](n)}function wi(){jS=!1,null!==HS&&ki(HS)&&(HS=null),null!==VS&&ki(VS)&&(VS=null),null!==$S&&ki($S)&&($S=null),YS.forEach(Si),qS.forEach(Si)}function xi(e,n){e.blockedOn===n&&(e.blockedOn=null,!jS&&(jS=!0,Pv(Fv,wi)))}function Ci(e){// Mark anything that was blocked on this as no longer blocked
// and eligible for a replay.
if(0<BS.length){xi(BS[0],e);// This is a exponential search for each boundary that commits. I think it's
// worth it because we expect very few discrete events to queue up and once
// we are actually fully unblocked it will be fast to replay them.
for(var n=1,t;n<BS.length;n++)t=BS[n],t.blockedOn===e&&(t.blockedOn=null)}null!==HS&&xi(HS,e),null!==VS&&xi(VS,e),null!==$S&&xi($S,e);var a=function unblock(n){return xi(n,e)};YS.forEach(a),qS.forEach(a);for(var o=0,d;o<KS.length;o++)d=KS[o],d.blockedOn===e&&(d.blockedOn=null);for(;0<KS.length;){var r=KS[0];if(null!==r.blockedOn)// We're still blocked.
break;else bi(r),null===r.blockedOn&&KS.shift()}}// This is exported in FB builds for use by legacy FB layer infra.
// We'd like to remove this but it's not clear if this is safe.
function Ri(e){GS=!!e}function Ti(){return GS}function Pi(e,n,t){var i=Li(n),a;switch(i){case 1:a=_i;break;case 4:a=Ei;break;case 16:default:a=Ni}return a.bind(null,n,t,e)}function _i(e,n,t,i){var a=Zt(),o=XS.transition;XS.transition=null;try{ei(1),Ni(e,n,t,i)}finally{ei(a),XS.transition=o}}function Ei(e,n,t,i){var a=Zt(),o=XS.transition;XS.transition=null;try{ei(4),Ni(e,n,t,i)}finally{ei(a),XS.transition=o}}function Ni(e,n,t,i){GS&&Ii(e,n,t,i)}function Ii(e,n,t,i){var a=Di(e,n,t,i);if(null===a)return mo(e,n,i,JS,t),void hi(e,i);if(yi(a,e,n,t,i))return void i.stopPropagation();// We need to clear only if we didn't queue because
// queueing is accumulative.
if(hi(e,i),4&n&&pi(e)){for(;null!==a;){var o=ar(a);null!==o&&si(o);var d=Di(e,n,t,i);if(null===d&&mo(e,n,i,JS,t),d===a)break;a=d}return void(null!==a&&i.stopPropagation())}// This is not replayable so we'll invoke it but without a target,
// in case the event system needs to trace it.
mo(e,n,i,null,t)}// Returns a SuspenseInstance or Container if it's blocked.
// The return_targetInst field above is conceptually part of the return value.
function Di(e,n,t,i){JS=null;var a=tn(i),o=ir(a);if(null!==o){var d=Cn(o);if(null===d)o=null;else{var r=d.tag;if(13===r){var s=Rn(d);if(null!==s)// Queue the event to be replayed later. Abort dispatching since we
// don't want this event dispatched twice through the event system.
// TODO: If this is the first discrete event in the queue. Schedule an increased
// priority for this boundary.
return s;// This shouldn't happen, something went wrong but to avoid blocking
// the whole system, dispatch the event without a target.
// TODO: Warn.
o=null}else if(3===r){var u=d.stateNode;if(di(u))// If this happens during a replay something went wrong and it might block
// the whole system.
return Tn(d);o=null}else d!==o&&(// If we get an event (ex: img onload) before committing that
// component's mount, ignore it for now (that is, treat it as if it was an
// event on a non-React tree). We might also consider queueing events and
// dispatching them after the mount.
o=null)}}// We're not blocked on anything.
return JS=o,null}function Li(e){switch(e){// Used by SimpleEventPlugin:
case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":// Used by polyfills:
// eslint-disable-next-line no-fallthrough
case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":// Only enableCreateEventHandleAPI:
// eslint-disable-next-line no-fallthrough
case"beforeblur":case"afterblur":// Not used by React but could be by user code:
// eslint-disable-next-line no-fallthrough
case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":// Not used by React but could be by user code:
// eslint-disable-next-line no-fallthrough
case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":{// We might be in the Scheduler callback.
// Eventually this mechanism will be replaced by a check
// of the current priority on the native scheduler.
var n=_k();return n===Ek?1:n===Nk?4:n===Ik||n===Dk?16:n===Lk?536870912:16}default:return 16}}function zi(e,n,t){return e.addEventListener(n,t,!1),t}function Mi(e,n,t){return e.addEventListener(n,t,!0),t}function Ui(e,n,t,i){return e.addEventListener(n,t,{capture:!0,passive:i}),t}function Oi(e,n,t,i){return e.addEventListener(n,t,{passive:i}),t}/**
   * These variables store information about text content of a target node,
   * allowing comparison of content before and after a given event.
   *
   * Identify the node where selection currently begins, then observe
   * both its text content and its current position in the DOM. Since the
   * browser may natively replace the target node during composition, we can
   * use its position to find its replacement.
   *
   *
   */function Fi(e){return ZS=e,ew=ji(),!0}function Ai(){ZS=null,ew=null,nw=null}function Wi(){if(nw)return nw;var e=ew,n=e.length,t=ji(),i=t.length,a,o;for(a=0;a<n&&e[a]===t[a];a++);var d=n-a;for(o=1;o<=d&&e[n-o]===t[i-o];o++);var r=1<o?1-o:void 0;return nw=t.slice(a,r),nw}function ji(){return"value"in ZS?ZS.value:ZS.textContent}/**
   * `charCode` represents the actual "character code" and is safe to use with
   * `String.fromCharCode`. As such, only keys that correspond to printable
   * characters produce a valid `charCode`, the only exception to this is Enter.
   * The Tab-key is considered non-printable and does not have a `charCode`,
   * presumably because it does not produce a tab-character in browsers.
   *
   * @param {object} nativeEvent Native browser event.
   * @return {number} Normalized `charCode` property.
   */function Bi(e){var n=e.keyCode,t;// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,10===t&&(t=13),32<=t||13===t?t:0}function Hi(){return!0}function Vi(){return!1}// This is intentionally a factory so that we have different returned constructors.
// If we had a single constructor, it would be megamorphic and engines would deopt.
function $i(e){/**
     * Synthetic events are dispatched by event plugins, typically in response to a
     * top-level event delegation handler.
     *
     * These systems should generally use pooling to reduce the frequency of garbage
     * collection. The system should check `isPersistent` to determine whether the
     * event should be released into the pool after being dispatched. Users that
     * need a persisted event should invoke `persist`.
     *
     * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
     * normalizing browser quirks. Subclasses do not necessarily have to implement a
     * DOM interface; custom application-specific events can also subclass this.
     */function n(n,t,i,a,o){for(var d in this._reactName=n,this._targetInst=i,this.type=t,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)if(e.hasOwnProperty(d)){var r=e[d];this[d]=r?r(a):a[d]}var s=null==a.defaultPrevented?!1===a.returnValue:a.defaultPrevented;return this.isDefaultPrevented=s?Hi:Vi,this.isPropagationStopped=Vi,this}return Dy(n.prototype,{preventDefault:function preventDefault(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function stopPropagation(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Hi)},/**
       * We release all dispatched `SyntheticEvent`s after each event loop, adding
       * them back into the pool. This allows a way to hold onto a reference that
       * won't be added back into the pool.
       */persist:function persist(){// Modern event system doesn't use pooling.
},/**
       * Checks if this event should be released back into the pool.
       *
       * @return {boolean} True if this should not be released, false otherwise.
       */isPersistent:Hi}),n}/**
   * @interface Event
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */function Yi(e){e!==Hw&&(Hw&&"mousemove"===e.type?(jw=e.screenX-Hw.screenX,Bw=e.screenY-Hw.screenY):(jw=0,Bw=0),Hw=e)}/**
   * @interface MouseEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */ /**
   * @param {object} nativeEvent Native browser event.
   * @return {string} Normalized `key` property.
   */function qi(e){if(e.key){// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var n=vw[e.key]||e.key;if("Unidentified"!==n)return n}// Browser does not implement `key`, polyfill as much of it as we can.
if("keypress"===e.type){var t=Bi(e);// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return 13===t?"Enter":a(t)}return"keydown"===e.type||"keyup"===e.type?kw[e.keyCode]||"Unidentified":""}/**
   * Translation from modifier key to the associated property in the event.
   * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
   */ // Older browsers (Safari <= 10, iOS Safari <= 10.2) do not support
// getModifierState. If getModifierState is not supported, we map it to a set of
// modifier keys exposed by the event. In this case, Lock-keys are not supported.
function Ki(e){var n=this,t=n.nativeEvent;if(t.getModifierState)return t.getModifierState(e);var i=Sw[e];return!!i&&!!t[i]}function Qi(e){return Ki}/**
   * @interface KeyboardEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */function Xi(){u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd",["compositionend","focusout","keydown","keypress","keyup","mousedown"]),u("onCompositionStart",["compositionstart","focusout","keydown","keypress","keyup","mousedown"]),u("onCompositionUpdate",["compositionupdate","focusout","keydown","keypress","keyup","mousedown"])}// Track whether we've ever handled a keypress on the space key.
/**
   * Return whether a native keypress event is assumed to be a command.
   * This is required because Firefox fires `keypress` events for key commands
   * (cut, copy, select-all, etc.) even though no character is inserted.
   */function Gi(e){return(e.ctrlKey||e.altKey||e.metaKey)&&// ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(e.ctrlKey&&e.altKey)}/**
   * Translate native top level events into event types.
   */function Ji(e){return"compositionstart"===e?"onCompositionStart":"compositionend"===e?"onCompositionEnd":"compositionupdate"===e?"onCompositionUpdate":void 0}/**
   * Does our fallback best-guess model think this event signifies that
   * composition has begun?
   */function Zi(e,n){return"keydown"===e&&n.keyCode===229}/**
   * Does our fallback mode think that this event is the end of composition?
   */function ea(e,n){return"keyup"===e?-1!==Dw.indexOf(n.keyCode):"keydown"===e?229!==n.keyCode:!("keypress"!=e&&"mousedown"!=e&&"focusout"!=e)}/**
   * Google Input Tools provides composition data via a CustomEvent,
   * with the `data` property populated in the `detail` object. If this
   * is available on the event object, use it. If not, this is a plain
   * composition event and we have nothing special to extract.
   *
   * @param {object} nativeEvent
   * @return {?string}
   */function na(e){var n=e.detail;return"object"===_typeof(n)&&"data"in n?n.data:null}/**
   * Check if a composition event was triggered by Korean IME.
   * Our fallback mode does not work well with IE's Korean IME,
   * so just use native composition events when Korean IME is used.
   * Although CompositionEvent.locale property is deprecated,
   * it is available in IE, where our fallback mode is enabled.
   *
   * @param {object} nativeEvent
   * @return {boolean}
   */function ta(e){return"ko"===e.locale}// Track the current IME composition status, if any.
/**
   * @return {?object} A SyntheticCompositionEvent.
   */function ia(e,n,t,i,a){var o,d;if(zw?o=Ji(n):Qw?ea(n,i)&&(o="onCompositionEnd"):Zi(n,i)&&(o="onCompositionStart"),!o)return null;$w&&!ta(i)&&(Qw||"onCompositionStart"!==o?"onCompositionEnd"===o&&Qw&&(d=Wi()):Qw=Fi(a));var r=yo(t,o);if(0<r.length){var s=new yw(o,n,null,i,a);if(e.push({event:s,listeners:r}),d)s.data=d;else{var u=na(i);null!==u&&(s.data=u)}}}function aa(e,n){switch(e){case"compositionend":return na(n);case"keypress":/**
         * If native `textInput` events are available, our goal is to make
         * use of them. However, there is a special case: the spacebar key.
         * In Webkit, preventing default on a spacebar `textInput` event
         * cancels character insertion, but it *also* causes the browser
         * to fall back to its default spacebar behavior of scrolling the
         * page.
         *
         * Tracking at:
         * https://code.google.com/p/chromium/issues/detail?id=355103
         *
         * To avoid this issue, use the keypress event as if no `textInput`
         * event is available.
         */var t=n.which;return 32===t?(Kw=!0," "):null;case"textInput":// Record the characters to be added to the DOM.
var i=n.data;// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to ignore it.
return" "===i&&Kw?null:i;default:// For other native event types, do nothing.
return null}}/**
   * For browsers that do not provide the `textInput` event, extract the
   * appropriate string to use for SyntheticInputEvent.
   */function oa(e,n){// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(Qw){if("compositionend"===e||!zw&&ea(e,n)){var t=Wi();return Ai(),Qw=!1,t}return null}switch(e){case"paste":// If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case"keypress":/**
         * As of v27, Firefox may fire keypress events even when no character
         * will be inserted. A few possibilities:
         *
         * - `which` is `0`. Arrow keys, Esc key, etc.
         *
         * - `which` is the pressed key code, but no char is available.
         *   Ex: 'AltGr + d` in Polish. There is no modified character for
         *   this key combination and no character is inserted into the
         *   document, but FF fires the keypress for char code `100` anyway.
         *   No `input` event will occur.
         *
         * - `which` is the pressed key code, but a command combination is
         *   being used. Ex: `Cmd+C`. No character is inserted, and no
         *   `input` event will occur.
         */if(!Gi(n)){// IE fires the `keypress` event when a user types an emoji via
// Touch keyboard of Windows.  In such a case, the `char` property
// holds an emoji character like `\uD83D\uDE0A`.  Because its length
// is 2, the property `which` does not represent an emoji correctly.
// In such a case, we directly return the `char` property instead of
// using `which`.
if(n.char&&1<n.char.length)return n.char;if(n.which)return a(n.which)}return null;case"compositionend":return $w&&!ta(n)?null:n.data;default:return null}}/**
   * Extract a SyntheticInputEvent for `beforeInput`, based on either native
   * `textInput` or fallback behavior.
   *
   * @return {?object} A SyntheticInputEvent.
   */function da(e,n,t,i,a){var o;// If no characters are being inserted, no BeforeInput event should
// be fired.
if(o=Vw?aa(n,i):oa(n,i),!o)return null;var d=yo(t,"onBeforeInput");if(0<d.length){var r=new bw("onBeforeInput","beforeinput",null,i,a);e.push({event:r,listeners:d}),r.data=o}}/**
   * Create an `onBeforeInput` event to match
   * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
   *
   * This event plugin is based on the native `textInput` event
   * available in Chrome, Safari, Opera, and IE. This event fires after
   * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
   *
   * `beforeInput` is spec'd but not implemented in any browsers, and
   * the `input` event does not provide any useful information about what has
   * actually been added, contrary to the spec. Thus, `textInput` is the best
   * available event to identify the characters that have actually been inserted
   * into the target node.
   *
   * This plugin is also responsible for emitting `composition` events, thus
   * allowing us to share composition fallback code for both `beforeInput` and
   * `composition` event types.
   */function ra(e,n,t,i,a,o,d){ia(e,n,t,i,a),da(e,n,t,i,a)}/**
   * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
   */function sa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===n?!!Xw[e.type]:!("textarea"!==n)}/**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */function ua(e){if(!$g)return!1;var n="on"+e,t=(n in document);if(!t){var i=document.createElement("div");i.setAttribute(n,"return;"),t="function"==typeof i[n]}return t}function la(){u("onChange",["change","click","focusin","focusout","input","keydown","keyup","selectionchange"])}function ca(e,n,t,i){dn(i);var a=yo(n,"onChange");if(0<a.length){var o=new iw("onChange","change",null,t,i);e.push({event:o,listeners:a})}}/**
   * For IE shims
   */ /**
   * SECTION: handle `change` event
   */function fa(e){var n=e.nodeName&&e.nodeName.toLowerCase();return"select"===n||"input"===n&&"file"===e.type}function pa(e){var n=[];// If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
ca(n,Jw,e,tn(e)),ln(ma,n)}function ma(e){ro(e,0)}function ha(e){var n=or(e);if(ue(n))return e}function ga(e,n){if("change"===e)return n}/**
   * SECTION: handle `input` event
   */ /**
   * (For IE <=9) Starts tracking propertychange events on the passed-in element
   * and override the value property so that we can distinguish user events from
   * value changes in JS.
   */function ya(e,n){Gw=e,Jw=n,Gw.attachEvent("onpropertychange",va)}/**
   * (For IE <=9) Removes the event listeners from the currently-tracked element,
   * if any exists.
   */function ba(){Gw&&(Gw.detachEvent("onpropertychange",va),Gw=null,Jw=null)}/**
   * (For IE <=9) Handles a propertychange event, sending a `change` event if
   * the value of the active element has changed.
   */function va(e){"value"!==e.propertyName||ha(Jw)&&pa(e)}function ka(e,n,t){"focusin"===e?(ba(),ya(n,t)):"focusout"==e&&ba()}// For IE8 and IE9.
function Sa(e,n){if("selectionchange"===e||"keyup"===e||"keydown"===e)// On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
return ha(Jw)}/**
   * SECTION: handle `click` event
   */function wa(e){// Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
var n=e.nodeName;return n&&"input"===n.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}function xa(e,n){if("click"===e)return ha(n)}function Ca(e,n){if("input"===e||"change"===e)return ha(n)}function Ra(e){var n=e._wrapperState;n&&n.controlled&&"number"===e.type&&ve(e,"number",e.value)}/**
   * This plugin creates an `onChange` event that normalizes change events
   * across form elements. This event fires at a time when it's possible to
   * change the element's value without seeing a flicker.
   *
   * Supported elements are:
   * - input (see `isTextInputElement`)
   * - textarea
   * - select
   */function Ta(e,n,t,i,a,o,d){var r=t?or(t):window,s,u;if(fa(r)?s=ga:sa(r)?Zw?s=Ca:(s=Sa,u=ka):wa(r)&&(s=xa),s){var l=s(n,t);if(l)return void ca(e,l,i,a)}u&&u(n,r,t),"focusout"===n&&Ra(r)}function Pa(){l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"])}/**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */function _a(e,n,t,i,a,o,d){var r="mouseover"===n||"pointerover"===n,s="mouseout"===n||"pointerout"===n;if(r&&!nn(i)){// If this is an over event with a target, we might have already dispatched
// the event in the out event of the other target. If this is replayed,
// then it's because we couldn't dispatch against this target previously
// so we have to do it now instead.
var u=i.relatedTarget||i.fromElement;if(u&&(ir(u)||tr(u)))// If the related node is managed by React, we can assume that we have
// already dispatched the corresponding events during its mouseout.
return}if(s||r)// Must not be a mouse or pointer in or out - ignoring.
{var l;// TODO: why is this nullable in the types but we read from it?
if(a.window===a)l=a;else{// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var c=a.ownerDocument;l=c?c.defaultView||c.parentWindow:window}var f,p;if(s){var m=i.relatedTarget||i.toElement;if(f=t,p=m?ir(m):null,null!==p){var h=Cn(p);(p!==h||5!==p.tag&&6!==p.tag)&&(p=null)}}else// Moving to a node from outside the window.
f=null,p=t;if(f!==p)// Nothing pertains to our managed components.
{// We should only process this nativeEvent if we are processing
// the first ancestor. Next time, we will ignore the event.
var g=rw,y="onMouseLeave",b="onMouseEnter",v="mouse";("pointerout"===n||"pointerover"===n)&&(g=Rw,y="onPointerLeave",b="onPointerEnter",v="pointer");var k=null==f?l:or(f),S=null==p?l:or(p),w=new g(y,v+"leave",f,i,a);w.target=k,w.relatedTarget=S;var x=null,C=ir(a);if(C===t){var R=new g(b,v+"enter",p,i,a);R.target=S,R.relatedTarget=k,x=R}So(e,w,x,f,p)}}}/**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */function Ea(e,n){return e===n&&(0!==e||1/e==1/n)||e!==e&&n!==n// eslint-disable-line no-self-compare
}/**
   * Performs equality by iterating through keys on an object and returning false
   * when any key has values which are not strictly equal between the arguments.
   * Returns true when the values of all keys are strictly equal.
   */function Na(e,n){if(ex(e,n))return!0;if("object"!==_typeof(e)||null===e||"object"!==_typeof(n)||null===n)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;// Test for A's keys different from B.
for(var o=0,d;o<t.length;o++)if(d=t[o],!Yg.call(n,d)||!ex(e[d],n[d]))return!1;return!0}/**
   * Given any node return the first leaf node without children.
   *
   * @param {DOMElement|DOMTextNode} node
   * @return {DOMElement|DOMTextNode}
   */function Ia(e){for(;e&&e.firstChild;)e=e.firstChild;return e}/**
   * Get the next sibling within a container. This will walk up the
   * DOM if a node's siblings have been exhausted.
   *
   * @param {DOMElement|DOMTextNode} node
   * @return {?DOMElement|DOMTextNode}
   */function Da(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}/**
   * Get object describing the nodes which contain characters at offset.
   *
   * @param {DOMElement|DOMTextNode} root
   * @param {number} offset
   * @return {?object}
   */function La(e,n){for(var t=Ia(e),i=0,a=0;t;){if(3===t.nodeType){if(a=i+t.textContent.length,i<=n&&a>=n)return{node:t,offset:n-i};i=a}t=Ia(Da(t))}}/**
   * @param {DOMElement} outerNode
   * @return {?object}
   */function za(e){var n=e.ownerDocument,t=n&&n.defaultView||window,i=t.getSelection&&t.getSelection();if(!i||0===i.rangeCount)return null;var a=i.anchorNode,o=i.anchorOffset,d=i.focusNode,r=i.focusOffset;// In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
// up/down buttons on an <input type="number">. Anonymous divs do not seem to
// expose properties, triggering a "Permission denied error" if any of its
// properties are accessed. The only seemingly possible way to avoid erroring
// is to access a property that typically works for non-anonymous divs and
// catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{/* eslint-disable no-unused-expressions */a.nodeType,d.nodeType}catch(n){return null}return Ma(e,a,o,d,r)}/**
   * Returns {start, end} where `start` is the character/codepoint index of
   * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
   * `end` is the index of (focusNode, focusOffset).
   *
   * Returns null if you pass in garbage input but we should probably just crash.
   *
   * Exported only for testing.
   */function Ma(e,n,t,i,a){var o=0,d=-1,r=-1,s=0,u=0,l=e,c=null;outer:for(;!0;){for(var f=null;l===n&&(0===t||3===l.nodeType)&&(d=o+t),l===i&&(0===a||3===l.nodeType)&&(r=o+a),3===l.nodeType&&(o+=l.nodeValue.length),null!==(f=l.firstChild);)// Moving from `node` to its first child `next`.
c=l,l=f;for(;!0;){if(l===e)// If `outerNode` has children, this is always the second time visiting
// it. If it has no children, this is still the first loop, and the only
// valid selection is anchorNode and focusNode both equal to this node
// and both offsets 0, in which case we will have handled above.
break outer;if(c===n&&++s===t&&(d=o),c===i&&++u===a&&(r=o),null!==(f=l.nextSibling))break;l=c,c=l.parentNode}// Moving from `node` to its next sibling `next`.
l=f}return-1===d||-1===r?null:{start:d,end:r}}/**
   * In modern non-IE browsers, we can support both forward and backward
   * selections.
   *
   * Note: IE10+ supports the Selection object, but it does not support
   * the `extend` method, which means that even in modern IE, it's not possible
   * to programmatically create a backward selection. Thus, for all IE
   * versions, we use the old IE API to create our selections.
   *
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */function Ua(e,n){var t=e.ownerDocument||document,a=t&&t.defaultView||window;// Edge fails with "Object expected" in some scenarios.
// (For instance: TinyMCE editor used in a list component that supports pasting to add more,
// fails when pasting 100+ items)
if(a.getSelection){// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
var o=a.getSelection(),d=e.textContent.length,r=i(n.start,d),s=void 0===n.end?r:i(n.end,d);if(!o.extend&&r>s){var u=s;s=r,r=u}var l=La(e,r),c=La(e,s);if(l&&c){if(1===o.rangeCount&&o.anchorNode===l.node&&o.anchorOffset===l.offset&&o.focusNode===c.node&&o.focusOffset===c.offset)return;var f=t.createRange();f.setStart(l.node,l.offset),o.removeAllRanges(),r>s?(o.addRange(f),o.extend(c.node,c.offset)):(f.setEnd(c.node,c.offset),o.addRange(f))}}}function Oa(e){return e&&e.nodeType===3}function Fa(e,n){return!!(e&&n)&&(e===n||!Oa(e)&&(Oa(n)?Fa(e,n.parentNode):"contains"in e?e.contains(n):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(n))))}function Aa(e){return e&&e.ownerDocument&&Fa(e.ownerDocument.documentElement,e)}function Wa(e){try{// Accessing the contentDocument of a HTMLIframeElement can cause the browser
// to throw, e.g. if it has a cross-origin src attribute.
// Safari will show an error in the console when the access results in "Blocked a frame with origin". e.g:
// iframe.contentDocument.defaultView;
// A safety way is to access one of the cross origin properties: Window or Location
// Which might result in "SecurityError" DOM Exception and it is compatible to Safari.
// https://html.spec.whatwg.org/multipage/browsers.html#integration-with-idl
return"string"==typeof e.contentWindow.location.href}catch(e){return!1}}function ja(){for(var e=window,n=le();n instanceof e.HTMLIFrameElement;){if(Wa(n))e=n.contentWindow;else return n;n=le(e.document)}return n}/**
   * @ReactInputSelection: React input selection module. Based on Selection.js,
   * but modified to be suitable for react and has a couple of bug fixes (doesn't
   * assume buttons have range selections allowed).
   * Input selection module for React.
   */ /**
   * @hasSelectionCapabilities: we get the element types that support selection
   * from https://html.spec.whatwg.org/#do-not-apply, looking at `selectionStart`
   * and `selectionEnd` rows.
   */function Ba(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&("input"===n&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===n||"true"===e.contentEditable)}function Ha(){var e=ja();return{focusedElem:e,selectionRange:Ba(e)?$a(e):null}}/**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */function Va(e){var n=ja(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&Aa(t)){null!==a&&Ba(t)&&Ya(t,a);// Focusing a node can change the scroll position, which is undesirable
for(var o=[],d=t;d=d.parentNode;)1===d.nodeType&&o.push({element:d,left:d.scrollLeft,top:d.scrollTop});"function"==typeof t.focus&&t.focus();for(var r=0,s;r<o.length;r++)s=o[r],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}/**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */function $a(e){var n;return n="selectionStart"in e?{start:e.selectionStart,end:e.selectionEnd}:za(e),n||{start:0,end:0}}/**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */function Ya(e,n){var t=n.start,a=n.end;a===void 0&&(a=t),"selectionStart"in e?(e.selectionStart=t,e.selectionEnd=i(a,e.value.length)):Ua(e,n)}function qa(){u("onSelect",["focusout","contextmenu","dragend","focusin","keydown","keyup","mousedown","mouseup","selectionchange"])}/**
   * Get an object which is a unique representation of the current selection.
   *
   * The return value will not be consistent across nodes or browsers, but
   * two identical selections on the same node will return identical objects.
   */function Ka(e){if("selectionStart"in e&&Ba(e))return{start:e.selectionStart,end:e.selectionEnd};var n=e.ownerDocument&&e.ownerDocument.defaultView||window,t=n.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}/**
   * Get document associated with the event target.
   */function Qa(e){return e.window===e?e.document:e.nodeType===9?e:e.ownerDocument}/**
   * Poll selection to see whether it's changed.
   *
   * @param {object} nativeEvent
   * @param {object} nativeEventTarget
   * @return {?SyntheticEvent}
   */function Xa(e,n,t){// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
var i=Qa(t);if(!(ox||null==tx||tx!==le(i))){// Only fire when selection has actually changed.
var a=Ka(tx);if(!ax||!Na(ax,a)){ax=a;var o=yo(ix,"onSelect");if(0<o.length){var d=new iw("onSelect","select",null,n,t);e.push({event:d,listeners:o}),d.target=tx}}}}/**
   * This plugin creates an `onSelect` event that normalizes select events
   * across form elements.
   *
   * Supported elements are:
   * - input (see `isTextInputElement`)
   * - textarea
   * - contentEditable
   *
   * This differs from native browser implementations in the following ways:
   * - Fires on contentEditable fields as well as inputs.
   * - Fires for collapsed selection.
   * - Fires after user input.
   */function Ga(e,n,t,i,a,o,d){var r=t?or(t):window;switch(n){// Track the input node that has focus.
case"focusin":(sa(r)||"true"===r.contentEditable)&&(tx=r,ix=t,ax=null);break;case"focusout":tx=null,ix=null,ax=null;break;// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case"mousedown":ox=!0;break;case"contextmenu":case"mouseup":case"dragend":ox=!1,Xa(e,i,a);break;// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case"selectionchange":if(nx)break;// falls through
case"keydown":case"keyup":Xa(e,i,a)}}/**
   * Generate a mapping of standard vendor prefixes using the defined style property and event name.
   *
   * @param {string} styleProp
   * @param {string} eventName
   * @returns {object}
   */function Ja(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}/**
   * A list of event names to a configurable list of vendor prefixes.
   */ /**
   * Attempts to determine the correct vendor prefixed event name.
   *
   * @param {string} eventName
   * @returns {string}
   */function Za(e){if(rx[e])return rx[e];if(!dx[e])return e;var n=dx[e];for(var t in n)if(n.hasOwnProperty(t)&&t in sx)return rx[e]=n[t];return e}function eo(e,n){px.set(e,n),u(n,[e])}function no(){for(var e=0;e<mx.length;e++){var n=mx[e],t=n.toLowerCase(),a=n[0].toUpperCase()+n.slice(1);eo(t,"on"+a)}// Special cases where event names don't match.
eo(ux,"onAnimationEnd"),eo(lx,"onAnimationIteration"),eo(cx,"onAnimationStart"),eo("dblclick","onDoubleClick"),eo("focusin","onFocus"),eo("focusout","onBlur"),eo(fx,"onTransitionEnd")}function to(e,n,t,i,a,o,d){var r=px.get(n);if(void 0!==r){var s=iw,u=n;switch(n){case"keypress":// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(0===Bi(i))return;/* falls through */case"keydown":case"keyup":s=xw;break;case"focusin":u="focus",s=cw;break;case"focusout":u="blur",s=cw;break;case"beforeblur":case"afterblur":s=cw;break;case"click":// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(2===i.button)return;/* falls through */case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":// TODO: Disabled elements should not respond to mouse events
/* falls through */case"mouseout":case"mouseover":case"contextmenu":s=rw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pw;break;case ux:case lx:case cx:s=pw;break;case fx:s=Ew;break;case"scroll":s=ow;break;case"wheel":s=Iw;break;case"copy":case"cut":case"paste":s=hw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Rw}var l=0!=(4&o);{// Some events don't bubble in the browser.
// In the past, React has always bubbled them, but this can be surprising.
// We're going to try aligning closer to the browser behavior by not bubbling
// them in React either. We'll start by not bubbling onScroll, and then expand.
var c=!l&&// TODO: ideally, we'd eventually add all events from
// nonDelegatedEvents list in DOMPluginEventSystem.
// Then we can remove this special list.
// This is a breaking change that can wait until React 18.
"scroll"===n,f=go(t,r,i.type,l,void 0);if(0<f.length){// Intentionally create event lazily.
var p=new s(r,u,null,i,a);e.push({event:p,listeners:f})}}}}// TODO: remove top-level side effect.
function io(e,n,t,i,a,o,d){to(e,n,t,i,a,o);var r=0==(o&7);// We don't process these events unless we are in the
// event's native "bubble" phase, which means that we're
// not in the capture phase. That's because we emulate
// the capture phase here still. This is a trade-off,
// because in an ideal world we would not emulate and use
// the phases properly, like we do with the SimpleEvent
// plugin. However, the plugins below either expect
// emulation (EnterLeave) or use state localized to that
// plugin (BeforeInput, Change, Select). The state in
// these modules complicates things, as you'll essentially
// get the case where the capture phase event might change
// state, only for the following bubble event to come in
// later and not trigger anything as the state now
// invalidates the heuristics of the event plugin. We
// could alter all these plugins to work in such ways, but
// that might cause other unknown side-effects that we
// can't foresee right now.
r&&(_a(e,n,t,i,a),Ta(e,n,t,i,a),Ga(e,n,t,i,a),ra(e,n,t,i,a))}// List of events that need to be individually attached to media elements.
function ao(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,yn(i,n,void 0,e),e.currentTarget=null}function oo(e,n,t){var a;if(t)for(var o=n.length-1;0<=o;o--){var d=n[o],r=d.instance,s=d.currentTarget,u=d.listener;if(r!==a&&e.isPropagationStopped())return;ao(e,u,s),a=r}else for(var l=0;l<n.length;l++){var c=n[l],f=c.instance,p=c.currentTarget,m=c.listener;if(f!==a&&e.isPropagationStopped())return;ao(e,m,p),a=f}}function ro(e,n){for(var t=0!=(n&4),a=0;a<e.length;a++){var o=e[a],d=o.event,r=o.listeners;oo(d,r,t)}// This would be a good time to rethrow if any of the event handlers threw.
bn()}function so(e,n,t,i,a){var o=tn(t),d=[];io(d,e,i,t,o,n),ro(d,n)}function uo(e,n){gx.has(e)||r("Did not expect a listenToNonDelegatedEvent() call for \"%s\". This is a bug in React. Please file an issue.",e);var t=!1,i=sr(n),a=wo(e,!1);i.has(a)||(fo(n,e,2,!1),i.add(a))}function lo(e,n,t){gx.has(e)&&!n&&r("Did not expect a listenToNativeEvent() call for \"%s\" in the bubble phase. This is a bug in React. Please file an issue.",e);var i=0;n&&(i|=4),fo(t,e,i,n)}// This is only used by createEventHandle when the
function co(e){if(!e[yx]){e[yx]=!0,Bg.forEach(function(n){"selectionchange"!==n&&(!gx.has(n)&&lo(n,!1,e),lo(n,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;null===n||n[yx]||(n[yx]=!0,lo("selectionchange",!1,n))}}function fo(e,n,t,i,a){var o=Pi(e,n,t),d=void 0;// If passive option is not supported, then the event will be
// active and not passive.
pv&&("touchstart"===n||"touchmove"===n||"wheel"===n)&&(d=!0),e=e;var r;// When legacyFBSupport is enabled, it's for when we
r=i?void 0===d?Mi(e,n,o):Ui(e,n,o,d):void 0===d?zi(e,n,o):Oi(e,n,o,d)}function po(e,n){return e===n||e.nodeType===8&&e.parentNode===n}function mo(e,n,t,i,a){var o=i;if(0==(n&1)&&0==(n&2)){var d=a;// If we are using the legacy FB support flag, we
if(null!==i){// The below logic attempts to work out if we need to change
// the target fiber to a different ancestor. We had similar logic
// in the legacy event system, except the big difference between
// systems is that the modern event system now has an event listener
// attached to each React Root and React Portal Root. Together,
// the DOM nodes representing these roots are the "rootContainer".
// To figure out which ancestor instance we should use, we traverse
// up the fiber tree from the target instance and attempt to find
// root boundaries that match that of our current "rootContainer".
// If we find that "rootContainer", we find the parent fiber
// sub-tree for that root and make that our ancestor instance.
var r=i;mainLoop:for(;!0;){if(null===r)return;var s=r.tag;if(s===3||s===4){var u=r.stateNode.containerInfo;if(po(u,d))break;if(4===s)// The target is a portal, but it's not the rootContainer we're looking for.
// Normally portals handle their own events all the way down to the root.
// So we should be able to stop now. However, we don't know if this portal
// was part of *our* root.
for(var l=r["return"],c;null!==l;){if(c=l.tag,3===c||4===c){var f=l.stateNode.containerInfo;if(po(f,d))// This is the rootContainer we're looking for and we found it as
// a parent of the Portal. That means we can ignore it because the
// Portal will bubble through to us.
return}l=l["return"]}// Now we need to find it's corresponding host fiber in the other
// tree. To do this we can use getClosestInstanceFromNode, but we
// need to validate that the fiber is a host instance, otherwise
// we need to traverse up through the DOM till we find the correct
// node that is from the other tree.
for(;null!==u;){var p=ir(u);if(null===p)return;var m=p.tag;if(m===5||m===6){r=o=p;continue mainLoop}u=u.parentNode}}r=r["return"]}}}ln(function(){return so(e,n,t,o)})}function ho(e,n,t){return{instance:e,listener:n,currentTarget:t}}function go(e,n,t,i,a,o){// Accumulate all instances and listeners via the target -> root path.
for(var d=null===n?null:n+"Capture",r=i?d:n,s=[],u=e,l=null;null!==u;){var c=u,f=c.stateNode,p=c.tag;// Handle listeners that are on HostComponents (i.e. <div>)
if(5===p&&null!==f&&(l=f,null!==r))// createEventHandle listeners
{var m=mn(u,r);null!=m&&s.push(ho(u,m,l))}// If we are only accumulating events for the target, then we don't
// continue to propagate through the React fiber tree to find other
// listeners.
if(a)break;// If we are processing the onBeforeBlur event, then we need to take
u=u["return"]}return s}// We should only use this function for:
// - BeforeInputEventPlugin
// - ChangeEventPlugin
// - SelectEventPlugin
// This is because we only process these plugins
// in the bubble phase, so we need to accumulate two
// phase event listeners (via emulation).
function yo(e,n){// Accumulate all instances and listeners via the target -> root path.
for(var t=n+"Capture",i=[],a=e;null!==a;){var o=a,d=o.stateNode,r=o.tag;// Handle listeners that are on HostComponents (i.e. <div>)
if(r===5&&null!==d){var s=d,u=mn(a,t);null!=u&&i.unshift(ho(a,u,s));var l=mn(a,n);null!=l&&i.push(ho(a,l,s))}a=a["return"]}return i}function bo(e){if(null===e)return null;do e=e["return"];while(e&&e.tag!==5);return e?e:null}/**
   * Return the lowest common ancestor of A and B, or null if they are in
   * different trees.
   */function vo(e,n){for(var t=e,i=n,a=0,o=t;o;o=bo(o))a++;for(var d=0,r=i;r;r=bo(r))d++;// If A is deeper, crawl up.
for(;0<a-d;)t=bo(t),a--;// If B is deeper, crawl up.
for(;0<d-a;)i=bo(i),d--;// Walk in lockstep until we find a match.
for(var s=a;s--;){if(t===i||null!==i&&t===i.alternate)return t;t=bo(t),i=bo(i)}return null}function ko(e,n,t,i,a){for(var o=n._reactName,d=[],r=t;null!==r&&!(r===i);){var s=r,u=s.alternate,l=s.stateNode,c=s.tag;if(null!==u&&u===i)break;if(5===c&&null!==l){var f=l;if(a){var p=mn(r,o);null!=p&&d.unshift(ho(r,p,f))}else if(!a){var m=mn(r,o);null!=m&&d.push(ho(r,m,f))}}r=r["return"]}0!==d.length&&e.push({event:n,listeners:d})}// We should only use this function for:
// - EnterLeaveEventPlugin
// This is because we only process this plugin
// in the bubble phase, so we need to accumulate two
// phase event listeners.
function So(e,n,t,i,a){var o=i&&a?vo(i,a):null;null!==i&&ko(e,n,i,o,!1),null!==a&&null!==t&&ko(e,t,a,o,!0)}function wo(e,n){return e+"__"+(n?"capture":"bubble")}function xo(e){b(e);var n="string"==typeof e?e:""+e;return n.replace(Lx,"\n").replace(zx,"")}function Co(e,n,t,i){var a=xo(n),o=xo(e);if(o!==a&&(i&&!bx&&(bx=!0,r("Text content did not match. Server: \"%s\" Client: \"%s\"",o,a)),t&&!0))// In concurrent roots, we throw when there's a text mismatch and revert to
// client rendering, up to the nearest Suspense boundary.
throw new Error("Text content does not match server-rendered HTML.")}function Ro(e){return e.nodeType===9?e:e.ownerDocument}function To(){}function Po(e){// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
// Just set it using the onclick property so that we don't have to manage any
// bookkeeping for it. Not sure if we need to clear it when the listener is
// removed.
// TODO: Only do this for the relevant Safaris maybe?
e.onclick=To}function _o(e,n,t,i,a){for(var o in i)if(i.hasOwnProperty(o)){var d=i[o];if("style"===o)d&&Object.freeze(d),Be(n,d);else if("dangerouslySetInnerHTML"===o){var r=d?d.__html:void 0;null!=r&&cb(n,r)}else if("children"===o){if("string"==typeof d){// Avoid setting initial textContent when the text is empty. In IE11 setting
// textContent on a <textarea> will cause the placeholder to not
// show within the <textarea> until it has been focused and blurred again.
// https://github.com/facebook/react/issues/6731#issuecomment-254874553
var s="textarea"!==e||""!==d;s&&yb(n,d)}else"number"==typeof d&&yb(n,""+d);}else if("suppressContentEditableWarning"===o||"suppressHydrationWarning"===o);else if("autoFocus"===o);else Hg.hasOwnProperty(o)?null!=d&&("function"!=typeof d&&Nx(o,d),"onScroll"===o&&uo("scroll",n)):null!=d&&E(n,o,d,a)}}function Eo(e,n,t,a){// TODO: Handle wasCustomComponentTag
for(var o=0;o<n.length;o+=2){var d=n[o],r=n[o+1];d==="style"?Be(e,r):d==="dangerouslySetInnerHTML"?cb(e,r):d==="children"?yb(e,r):E(e,d,r,a)}}function No(e,n,t,i){var a=Ro(t),o=i,d,s;// We create tags in the namespace of their parent container, except HTML
// tags get no namespace.
if("http://www.w3.org/1999/xhtml"===o&&(o=Ue(e)),"http://www.w3.org/1999/xhtml"!==o)s=a.createElementNS(o,e);else if(d=qe(e,n),d||e===e.toLowerCase()||r("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",e),"script"===e){// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var u=a.createElement("div");u.innerHTML="<script></script>";// eslint-disable-line
// This is guaranteed to yield a script element.
var l=u.firstChild;s=u.removeChild(l)}else if("string"==typeof n.is)// $FlowIssue `createElement` should be updated for Web Components
s=a.createElement(e,{is:n.is});else// Normally attributes are assigned in `setInitialDOMProperties`, however the `multiple` and `size`
// attributes on `select`s needs to be added before `option`s are inserted.
// This prevents:
// - a bug where the `select` does not scroll to the correct option because singular
//  `select` elements automatically pick the first item #13222
// - a bug where the `select` set the first item as selected despite the `size` attribute #14239
// See https://github.com/facebook/react/issues/13222
// and https://github.com/facebook/react/issues/14239
if(s=a.createElement(e),"select"===e){var c=s;n.multiple?c.multiple=!0:n.size&&(c.size=n.size)}return"http://www.w3.org/1999/xhtml"!==o||d||"[object HTMLUnknownElement]"!==Object.prototype.toString.call(s)||Yg.call(Tx,e)||(Tx[e]=!0,r("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",e)),s}function Io(e,n){return Ro(n).createTextNode(e)}function Do(e,n,t,a){var o=qe(n,t);Px(n,t);// TODO: Make sure that we check isMounted before firing any of these events.
var d;switch(n){case"dialog":uo("cancel",e),uo("close",e),d=t;break;case"iframe":case"object":case"embed":uo("load",e),d=t;break;case"video":case"audio":// We listen to these events in case to ensure emulated bubble
// listeners still fire for all the media events.
for(var r=0;r<hx.length;r++)uo(hx[r],e);d=t;break;case"source":uo("error",e),d=t;break;case"img":case"image":case"link":uo("error",e),uo("load",e),d=t;break;case"details":uo("toggle",e),d=t;break;case"input":pe(e,t),d=fe(e,t),uo("invalid",e);break;case"option":ke(e,t),d=t;break;case"select":Pe(e,t),d=Te(e,t),uo("invalid",e);break;case"textarea":De(e,t),d=Ie(e,t),uo("invalid",e);break;default:d=t}switch(Ye(n,d),_o(n,e,a,d,o),n){case"input":se(e),ge(e,t,!1);break;case"textarea":se(e),ze(e);break;case"option":Se(e,t);break;case"select":_e(e,t);break;default:"function"==typeof d.onClick&&Po(e)}}// Calculate the diff between the two objects.
function Lo(e,n,t,i,a){Px(n,i);var o=null,d,r;"input"===n?(d=fe(e,t),r=fe(e,i),o=[]):"select"===n?(d=Te(e,t),r=Te(e,i),o=[]):"textarea"===n?(d=Ie(e,t),r=Ie(e,i),o=[]):(d=t,r=i,"function"!=typeof d.onClick&&"function"==typeof r.onClick&&Po(e));Ye(n,r);var s=null,u,l;for(u in d)if(!r.hasOwnProperty(u)&&d.hasOwnProperty(u)&&null!=d[u])if("style"===u){var c=d[u];for(l in c)c.hasOwnProperty(l)&&(s||(s={}),s[l]="")}else if("dangerouslySetInnerHTML"===u||"children"===u);else if("suppressContentEditableWarning"===u||"suppressHydrationWarning"===u);else if("autoFocus"===u);else Hg.hasOwnProperty(u)?o||(o=[]):// For all other deleted properties we add it to the queue. We use
// the allowed property list in the commit phase instead.
(o=o||[]).push(u,null);for(u in r){var f=r[u],p=null==d?void 0:d[u];if(r.hasOwnProperty(u)&&f!==p&&(null!=f||null!=p))if("style"===u){if(f&&Object.freeze(f),p){// Unset styles on `lastProp` but not on `nextProp`.
for(l in p)!p.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(s||(s={}),s[l]="");// Update styles that changed since `lastProp`.
for(l in f)f.hasOwnProperty(l)&&p[l]!==f[l]&&(s||(s={}),s[l]=f[l])}else s||(!o&&(o=[]),o.push(u,s)),s=f;}else if("dangerouslySetInnerHTML"===u){var m=f?f.__html:void 0,h=p?p.__html:void 0;null!=m&&h!==m&&(o=o||[]).push(u,m)}else if("children"===u)("string"==typeof f||"number"==typeof f)&&(o=o||[]).push(u,""+f);else if("suppressContentEditableWarning"===u||"suppressHydrationWarning"===u);else Hg.hasOwnProperty(u)?(null!=f&&("function"!=typeof f&&Nx(u,f),"onScroll"===u&&uo("scroll",e)),o||p===f||(o=[])):// For any other property we always add it to the queue and then we
// filter it out using the allowed property list during the commit.
(o=o||[]).push(u,f)}return s&&($e(s,r.style),(o=o||[]).push("style",s)),o}// Apply the diff.
function zo(e,n,t,i,a){"input"===t&&"radio"===a.type&&null!=a.name&&me(e,a);var o=qe(t,i),d=qe(t,a);// Apply the diff.
Eo(e,n,o,d);// TODO: Ensure that an update gets scheduled if any of the special props
// changed.
"input"===t?he(e,a):"textarea"===t?Le(e,a):"select"===t?Ee(e,a):void 0}function Mo(e){{var n=e.toLowerCase();return Hb.hasOwnProperty(n)?Hb[n]||null:null}}function Uo(e,n,t,a,o,d,r){var s,u;// TODO: Make sure that we check isMounted before firing any of these events.
switch(s=qe(n,t),Px(n,t),n){case"dialog":uo("cancel",e),uo("close",e);break;case"iframe":case"object":case"embed":uo("load",e);break;case"video":case"audio":// We listen to these events in case to ensure emulated bubble
// listeners still fire for all the media events.
for(var l=0;l<hx.length;l++)uo(hx[l],e);break;case"source":uo("error",e);break;case"img":case"image":case"link":uo("error",e),uo("load",e);break;case"details":uo("toggle",e);break;case"input":pe(e,t),uo("invalid",e);break;case"option":ke(e,t);break;case"select":Pe(e,t),uo("invalid",e);break;case"textarea":De(e,t),uo("invalid",e)}Ye(n,t);{u=new Set;for(var c=e.attributes,f=0,p;f<c.length;f++)switch(p=c[f].name.toLowerCase(),p){// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
case"value":break;case"checked":break;case"selected":break;default:u.add(c[f].name)}}var m=null;for(var h in t)if(t.hasOwnProperty(h)){var g=t[h];if("children"===h)"string"==typeof g?e.textContent!==g&&(!0!==t.suppressHydrationWarning&&Co(e.textContent,g,d,r),m=["children",g]):"number"==typeof g&&e.textContent!==""+g&&(!0!==t.suppressHydrationWarning&&Co(e.textContent,g,d,r),m=["children",""+g]);else if(Hg.hasOwnProperty(h))null!=g&&("function"!=typeof g&&Nx(h,g),"onScroll"===h&&uo("scroll",e));else if(r&&!0&&// Convince Flow we've calculated it (it's DEV-only in this method.)
"boolean"==typeof s){// Validate that the properties correspond to their expected values.
var y=void 0,b=s&&!1?null:C(h);if(!0===t.suppressHydrationWarning);else if("suppressContentEditableWarning"===h||"suppressHydrationWarning"===h||// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
"value"===h||"checked"===h||"selected"===h);else if("dangerouslySetInnerHTML"===h){var v=e.innerHTML,k=g?g.__html:void 0;if(null!=k){var w=Dx(e,k);w!==v&&_x(h,v,w)}}else if("style"===h){if(u["delete"](h),Ix){var R=je(g);y=e.getAttribute("style"),R!==y&&_x(h,y,R)}}else if(s&&!0)// $FlowFixMe - Should be inferred as not undefined.
u["delete"](h.toLowerCase()),y=_(e,h,g),g!==y&&_x(h,y,g);else if(!S(h,b,s)&&!x(h,g,b,s)){var T=!1;if(null!==b)u["delete"](b.attributeName),y=P(e,h,g,b);else{var E=a;if("http://www.w3.org/1999/xhtml"===E&&(E=Ue(n)),"http://www.w3.org/1999/xhtml"===E)u["delete"](h.toLowerCase());else{var N=Mo(h);null!==N&&N!==h&&(T=!0,u["delete"](N)),u["delete"](h)}y=_(e,h,g)}var I=!1;I||g===y||T||_x(h,y,g)}}}switch(r&&// $FlowFixMe - Should be inferred as not undefined.
0<u.size&&!0!==t.suppressHydrationWarning&&Ex(u),n){case"input":se(e),ge(e,t,!0);break;case"textarea":se(e),ze(e);break;case"select":case"option":// For input and textarea we current always set the value property at
// post mount to force it to diverge from attributes. However, for
// option and select we don't quite do the same thing and select
// is not resilient to the DOM state changing so we don't do that here.
// TODO: Consider not doing this for input and textarea.
break;default:"function"==typeof t.onClick&&Po(e)}return m}function Oo(e,n,t){var i=e.nodeValue!==n;return i}function Fo(e,n){{if(bx)return;bx=!0,r("Did not expect server HTML to contain a <%s> in <%s>.",n.nodeName.toLowerCase(),e.nodeName.toLowerCase())}}function Ao(e,n){{if(bx)return;bx=!0,r("Did not expect server HTML to contain the text node \"%s\" in <%s>.",n.nodeValue,e.nodeName.toLowerCase())}}function Wo(e,n,t){{if(bx)return;bx=!0,r("Expected server HTML to contain a matching <%s> in <%s>.",n,e.nodeName.toLowerCase())}}function jo(e,n){{if(""===n)// We expect to insert empty text nodes since they're not represented in
// the HTML.
// TODO: Remove this special case if we can just avoid inserting empty
// text nodes.
return;if(bx)return;bx=!0,r("Expected server HTML to contain a matching text node for \"%s\" in <%s>.",n,e.nodeName.toLowerCase())}}function Bo(e,n,t){return"input"===n?void ye(e,t):"textarea"===n?void Me(e,t):"select"===n?void Ne(e,t):void 0}function Ho(e){var n=e.nodeType,t,i;switch(n){case 9:case 11:{t=n===9?"#document":"#fragment";var a=e.documentElement;i=a?a.namespaceURI:Oe(null,"");break}default:{var o=n===8?e.parentNode:e,d=o.namespaceURI||null;t=o.tagName,i=Oe(d,t);break}}{var r=t.toLowerCase(),s=Ux(null,r);return{namespace:i,ancestorInfo:s}}}function Vo(e,n,t){{var i=e,a=Oe(i.namespace,n),o=Ux(i.ancestorInfo,n);return{namespace:a,ancestorInfo:o}}}function $o(e){return e}function Yo(e){Gx=Ti(),Jx=Ha();var n=null;return Ri(!1),n}function qo(e){Va(Jx),Ri(Gx),Gx=null,Jx=null}function Ko(e,n,t,i,a){var o;{// TODO: take namespace into account when validating.
var d=i;if(Mx(e,null,d.ancestorInfo),"string"==typeof n.children||"number"==typeof n.children){var r=""+n.children,s=Ux(d.ancestorInfo,e);Mx(null,r,s)}o=d.namespace}var u=No(e,n,t,o);return Zd(a,u),rr(u,n),u}function Qo(e,n){e.appendChild(n)}function Xo(e,n,t,i,a){return Do(e,n,t,i),"button"===n||"input"===n||"select"===n||"textarea"===n?!!t.autoFocus:"img"===n}function Go(e,n,t,i,a,o){{var d=o;if(_typeof(i.children)!==_typeof(t.children)&&("string"==typeof i.children||"number"==typeof i.children)){var r=""+i.children,s=Ux(d.ancestorInfo,n);Mx(null,r,s)}}return Lo(e,n,t,i)}function Jo(e,n){return"textarea"===e||"noscript"===e||"string"==typeof n.children||"number"==typeof n.children||"object"===_typeof(n.dangerouslySetInnerHTML)&&null!==n.dangerouslySetInnerHTML&&null!=n.dangerouslySetInnerHTML.__html}function Zo(e,n,t,i){{var a=t;Mx(null,e,a.ancestorInfo)}var o=Io(e,n);return Zd(i,o),o}function ed(){var e=window.event;return void 0===e?16:Li(e.type)}// if a component just imports ReactDOM (e.g. for findDOMNode).
// Some environments might not have setTimeout or clearTimeout.
// TODO: Determine the best fallback here.
function nd(e){setTimeout(function(){throw e})}// -------------------
function td(e,n,t,i){// Despite the naming that might imply otherwise, this method only
// fires if there is an `Update` effect scheduled during mounting.
// This happens if `finalizeInitialChildren` returns `true` (which it
// does to implement the `autoFocus` attribute on the client). But
// there are also other cases when this might happen (such as patching
// up text content during hydration mismatch). So we'll check this again.
return"button"===n||"input"===n||"select"===n||"textarea"===n?void(t.autoFocus&&e.focus()):"img"===n?void(t.src&&(e.src=t.src)):void 0}function id(e,n,t,i,a,o){// Apply the diff to the DOM node.
// Update the props handle so that we know which props are the ones with
// with current event handlers.
zo(e,n,t,i,a),rr(e,a)}function ad(e){yb(e,"")}function od(e,n,t){e.nodeValue=t}function dd(e,n){e.appendChild(n)}function rd(e,n){var t;e.nodeType===8?(t=e.parentNode,t.insertBefore(n,e)):(t=e,t.appendChild(n));// This container might be used for a portal.
// If something inside a portal is clicked, that click should bubble
// through the React tree. However, on Mobile Safari the click would
// never bubble through the *DOM* tree unless an ancestor with onclick
// event exists. So we wouldn't see it and dispatch it.
// This is why we ensure that non React root containers have inline onclick
// defined.
// https://github.com/facebook/react/issues/11918
var i=e._reactRootContainer;(null===i||i===void 0)&&null===t.onclick&&Po(t)}function sd(e,n,t){e.insertBefore(n,t)}function ud(e,n,t){e.nodeType===8?e.parentNode.insertBefore(n,t):e.insertBefore(n,t)}function ld(e,n){e.removeChild(n)}function cd(e,n){e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)}function fd(e,n){var t=n,i=0;// Delete all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
do{var a=t.nextSibling;if(e.removeChild(t),a&&8===a.nodeType){var o=a.data;if("/$"===o){if(0===i)return e.removeChild(a),void Ci(n);i--}else("$"===o||"$?"===o||"$!"===o)&&i++}t=a}while(t);// TODO: Warn, we didn't find the end comment boundary.
// Retry if any event replaying was blocked on this.
Ci(n)}function pd(e,n){// Retry if any event replaying was blocked on this.
e.nodeType===8?fd(e.parentNode,n):e.nodeType===1&&fd(e,n),Ci(e)}function md(e){e=e;var n=e.style;"function"==typeof n.setProperty?n.setProperty("display","none","important"):n.display="none"}function hd(e){e.nodeValue=""}function gd(e,n){e=e;var t=n.style,i=t!==void 0&&null!==t&&t.hasOwnProperty("display")?t.display:null;e.style.display=Ae("display",i)}function yd(e,n){e.nodeValue=n}function bd(e){e.nodeType===1?e.textContent="":e.nodeType===9&&e.documentElement&&e.removeChild(e.documentElement)}// -------------------
function vd(e,n,t){return 1!==e.nodeType||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e;// This has now been refined to an element node.
}function kd(e,n){return""===n||3!==e.nodeType?null:e;// This has now been refined to a text node.
}function Sd(e){return 8===e.nodeType?e:null;// This has now been refined to a suspense node.
}function wd(e){return e.data==="$?"}function xd(e){return e.data==="$!"}function Cd(e){var n=e.nextSibling&&e.nextSibling.dataset,t,i,a;return n&&(t=n.dgst,i=n.msg,a=n.stck),{message:i,digest:t,stack:a};// let value = {message: undefined, hash: undefined};
// const nextSibling = instance.nextSibling;
// if (nextSibling) {
//   const dataset = ((nextSibling: any): HTMLTemplateElement).dataset;
//   value.message = dataset.msg;
//   value.hash = dataset.hash;
//   if (true) {
//     value.stack = dataset.stack;
//   }
// }
// return value;
}function Rd(e,n){e._reactRetry=n}function Td(e){// Skip non-hydratable nodes.
for(;null!=e;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(8===n){var t=e.data;if("$"===t||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function Pd(e){return Td(e.nextSibling)}function _d(e){return Td(e.firstChild)}function Ed(e){return Td(e.firstChild)}function Nd(e){return Td(e.nextSibling)}function Id(e,n,t,i,a,o,d){Zd(o,e),rr(e,t);var r;{var s=a;r=s.namespace}// TODO: Temporary hack to check if we're in a concurrent root. We can delete
// when the legacy root API is removed.
var u=(o.mode&1)!==0;return Uo(e,n,t,r,i,u,d)}function Dd(e,n,t,i){Zd(t,e);// TODO: Temporary hack to check if we're in a concurrent root. We can delete
// when the legacy root API is removed.
var a=(t.mode&1)!==0;return Oo(e,n)}function Ld(e,n){Zd(n,e)}function zd(e){// Skip past all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
for(var n=e.nextSibling,t=0;n;){if(n.nodeType===8){var i=n.data;if(i==="/$"){if(0===t)return Pd(n);t--}else("$"===i||"$!"===i||"$?"===i)&&t++}n=n.nextSibling}// TODO: Warn, we didn't find the end comment boundary.
return null}// Returns the SuspenseInstance if this node is a direct child of a
// SuspenseInstance. I.e. if its previous sibling is a Comment with
// SUSPENSE_x_START_DATA. Otherwise, null.
function Md(e){// Skip past all nodes within this suspense boundary.
// There might be nested nodes so we need to keep track of how
// deep we are and only break out when we're back on top.
for(var n=e.previousSibling,t=0;n;){if(n.nodeType===8){var i=n.data;if(i==="$"||i==="$!"||i==="$?"){if(0===t)return n;t--}else"/$"===i&&t++}n=n.previousSibling}return null}function Ud(e){// Retry if any event replaying was blocked on this.
Ci(e)}function Od(e){// Retry if any event replaying was blocked on this.
Ci(e)}function Fd(e){return"head"!==e&&"body"!==e}function Ad(e,n,t,i){var a=!0;Co(n.nodeValue,t,i,!0)}function Wd(e,n,t,i,a,o){if(!0!==n.suppressHydrationWarning){var d=!0;Co(i.nodeValue,a,o,!0)}}function jd(e,n){if(1===n.nodeType)Fo(e,n);else if(8===n.nodeType);else Ao(e,n)}function Bd(e,n){{// $FlowFixMe: Only Element or Document can be parent nodes.
var t=e.parentNode;if(null!==t)if(1===n.nodeType)Fo(t,n);else if(8===n.nodeType);else Ao(t,n)}}function Hd(e,n,t,i,a){if(a||!0!==n.suppressHydrationWarning)if(1===i.nodeType)Fo(t,i);else if(8===i.nodeType);else Ao(t,i)}function Vd(e,n,t){Wo(e,n)}function $d(e,n){jo(e,n)}function Yd(e,n,t){{// $FlowFixMe: Only Element or Document can be parent nodes.
var i=e.parentNode;null!==i&&Wo(i,n)}}function qd(e,n){{// $FlowFixMe: Only Element or Document can be parent nodes.
var t=e.parentNode;null!==t&&jo(t,n)}}function Kd(e,n,t,i,a,o){(o||!0!==n.suppressHydrationWarning)&&Wo(t,i)}function Qd(e,n,t,i,a){(a||!0!==n.suppressHydrationWarning)&&jo(t,i)}function Xd(e){r("An error occurred during hydration. The server HTML was replaced with client content in <%s>.",e.nodeName.toLowerCase())}function Gd(e){co(e)}function Jd(e){// TODO: This function is only called on host components. I don't think all of
// these fields are relevant.
delete e[oC],delete e[dC],delete e[sC],delete e[uC],delete e[lC]}function Zd(e,n){n[oC]=e}function er(e,n){n[rC]=e}function nr(e){e[rC]=null}function tr(e){return!!e[rC]}// Given a DOM node, return the closest HostComponent or HostText fiber ancestor.
// If the target node is part of a hydrated or not yet rendered subtree, then
// this may also return a SuspenseComponent or HostRoot to indicate that.
// Conceptually the HostRoot fiber is a child of the Container node. So if you
// pass the Container node as the targetNode, you will not actually get the
// HostRoot back. To get to the HostRoot, you need to pass a child of it.
// The same thing applies to Suspense boundaries.
function ir(e){var n=e[oC];if(n)// Don't return HostRoot or SuspenseComponent here.
return n;// If the direct event target isn't a React owned DOM node, we need to look
// to see if one of its parents is a React owned DOM node.
for(var t=e.parentNode;t;){if(n=t[rC]||t[oC],n){// Since this wasn't the direct target of the event, we might have
// stepped past dehydrated DOM nodes to get here. However they could
// also have been non-React nodes. We need to answer which one.
// If we the instance doesn't have any children, then there can't be
// a nested suspense boundary within it. So we can use this as a fast
// bailout. Most of the time, when people add non-React children to
// the tree, it is using a ref to a child-less DOM node.
// Normally we'd only need to check one of the fibers because if it
// has ever gone from having children to deleting them or vice versa
// it would have deleted the dehydrated boundary nested inside already.
// However, since the HostRoot starts out with an alternate it might
// have one on the alternate so we need to check in case this was a
// root.
var i=n.alternate;if(null!==n.child||null!==i&&null!==i.child)// Next we need to figure out if the node that skipped past is
// nested within a dehydrated boundary and if so, which one.
for(var a=Md(e),o;null!==a;){if(o=a[oC],o)return o;// If we don't find a Fiber on the comment, it might be because
// we haven't gotten to hydrate it yet. There might still be a
// parent boundary that hasn't above this one so we need to find
// the outer most that is known.
a=Md(a)}return n}e=t,t=e.parentNode}return null}/**
   * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
   * instance, or null if the node was not rendered by this React.
   */function ar(e){var n=e[oC]||e[rC];return n?5===n.tag||6===n.tag||13===n.tag||3===n.tag?n:null:null}/**
   * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
   * DOM node.
   */function or(e){if(e.tag===5||e.tag===6)// In Fiber this, is just the state node right now. We assume it will be
// a host component or host text.
return e.stateNode;// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
throw new Error("getNodeFromInstance: Invalid argument.")}function dr(e){return e[dC]||null}function rr(e,n){e[dC]=n}function sr(e){var n=e[sC];return void 0===n&&(n=e[sC]=new Set),n}function ur(e){if(e){var n=e._owner,t=A(e.type,e._source,n?n.type:null);fC.setExtraStackFrame(t)}else fC.setExtraStackFrame(null)}function lr(e,n,t,i,a){{// $FlowFixMe This is okay but Flow doesn't know it.
var o=Function.call.bind(Yg);for(var d in e)if(o(e,d)){var s=void 0;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!=typeof e[d]){// eslint-disable-next-line react-internal/prod-error-codes
var u=Error((i||"React class")+": "+t+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+_typeof(e[d])+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}s=e[d](n,d,i,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){s=e}s&&!(s instanceof Error)&&(ur(a),r("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",i||"React class",t,d,_typeof(s)),ur(null)),s instanceof Error&&!(s.message in cC)&&(cC[s.message]=!0,ur(a),r("Failed %s type: %s",t,s.message),ur(null))}}}function cr(e){return{current:e}}function fr(e,n){return 0>hC?void r("Unexpected pop."):void(n!==mC[hC]&&r("Unexpected Fiber popped."),e.current=pC[hC],pC[hC]=null,mC[hC]=null,hC--)}function pr(e,n,t){hC++,pC[hC]=e.current,mC[hC]=t,e.current=n}function mr(e,n,t){return t&&br(n)?kC:bC.current}function hr(e,n,t){{var i=e.stateNode;i.__reactInternalMemoizedUnmaskedChildContext=n,i.__reactInternalMemoizedMaskedChildContext=t}}function gr(e,n){{var t=e.type,i=t.contextTypes;if(!i)return yC;// Avoid recreating masked context unless unmasked context has changed.
// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
// This may trigger infinite loops if componentWillReceiveProps calls setState.
var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var o={};for(var d in i)o[d]=n[d];{var r=q(e)||"Unknown";lr(i,o,"context",r)}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// Context is created before the class component is instantiated so check for instance.
return a&&hr(e,n,o),o}}function yr(){return vC.current}function br(e){{var n=e.childContextTypes;return null!==n&&n!==void 0}}function vr(e){fr(vC,e),fr(bC,e)}function kr(e){fr(vC,e),fr(bC,e)}function Sr(e,n,t){{if(bC.current!==yC)throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");pr(bC,n,e),pr(vC,t,e)}}function wr(e,n,t){{var i=e.stateNode,a=n.childContextTypes;// TODO (bvaughn) Replace this behavior with an invariant() in the future.
// It has only been added in Fiber to match the (unintentional) behavior in Stack.
if("function"!=typeof i.getChildContext){{var o=q(e)||"Unknown";gC[o]||(gC[o]=!0,r("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",o,o))}return t}var d=i.getChildContext();for(var s in d)if(!(s in a))throw new Error((q(e)||"Unknown")+".getChildContext(): key \""+s+"\" is not defined in childContextTypes.");{var u=q(e)||"Unknown";lr(a,d,"child context",u)}return Dy({},t,d)}}function xr(e){{var n=e.stateNode,t=n&&n.__reactInternalMemoizedMergedChildContext||yC;// We push the context as early as possible to ensure stack integrity.
// If the instance does not exist yet, we will push null at first,
// and replace it on the stack later when invalidating the context.
// Remember the parent context so we can merge with it later.
// Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
return kC=bC.current,pr(bC,t,e),pr(vC,vC.current,e),!0}}function Cr(e,n,t){{var i=e.stateNode;if(!i)throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");if(t){// Merge parent and own context.
// Skip this if we're not updating due to sCU.
// This avoids unnecessarily recomputing memoized values.
var a=wr(e,n,kC);i.__reactInternalMemoizedMergedChildContext=a,fr(vC,e),fr(bC,e),pr(bC,a,e),pr(vC,t,e)}else fr(vC,e),pr(vC,t,e)}}function Rr(e){{// Currently this is only used with renderSubtreeIntoContainer; not sure if it
// makes sense elsewhere
if(!Pn(e)||e.tag!==1)throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");var n=e;do{switch(n.tag){case 3:return n.stateNode.context;case 1:{var t=n.type;if(br(t))return n.stateNode.__reactInternalMemoizedMergedChildContext;break}}n=n["return"]}while(null!==n);throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")}}function Tr(e){null===xC?xC=[e]:xC.push(e)}function Pr(e){CC=!0,Tr(e)}function _r(){CC&&Er()}function Er(){if(!RC&&null!==xC){RC=!0;var e=0,n=Zt();try{var t=!0,a=xC;// TODO: Is this necessary anymore? The only user code that runs in this
// queue is in the render or commit phases.
for(ei(1);e<a.length;e++){var o=a[e];do o=o(!0);while(null!==o)}xC=null,CC=!1}catch(n){throw null!==xC&&(xC=xC.slice(e+1)),xk(Ek,Er),n}finally{ei(n),RC=!1}}return null}// TODO: Use the unified fiber stack module instead of this local one?
// Intentionally not using it yet to derisk the initial implementation, because
// the way we push/pop these values is a bit unusual. If there's a mistake, I'd
// rather the ids be wrong than crash the whole reconciler.
function Nr(e){return jr(),0!==(1048576&e.flags)}function Ir(e){return jr(),EC}function Dr(){var e=zC,n=LC,t=n&~Or(n);return t.toString(32)+e}function Lr(e,n){// This is called right after we reconcile an array (or iterator) of child
// fibers, because that's the only place where we know how many children in
// the whole set without doing extra work later, or storing addtional
// information on the fiber.
//
// That's why this function is separate from pushTreeId — it's called during
// the render phase of the fork parent, not the child, which is where we push
// the other context values.
//
// In the Fizz implementation this is much simpler because the child is
// rendered in the same callstack as the parent.
//
// It might be better to just add a `forks` field to the Fiber type. It would
// make this module simpler.
jr(),TC[PC++]=EC,TC[PC++]=_C,_C=e,EC=n}function zr(e,n,t){jr(),NC[IC++]=LC,NC[IC++]=zC,NC[IC++]=DC,DC=e;var i=LC,a=zC,o=Ur(i)-1,d=i&~(1<<o),r=t+1,s=Ur(n)+o;// The leftmost 1 marks the end of the sequence, non-inclusive. It's not part
// of the id; we use it to account for leading 0s.
// 30 is the max length we can store without overflowing, taking into
// consideration the leading 1 we use to mark the end of the sequence.
if(30<s){// We overflowed the bitwise-safe range. Fall back to slower algorithm.
// This branch assumes the length of the base id is greater than 5; it won't
// work for smaller ids, because you need 5 bits per character.
//
// We encode the id in multiple steps: first the base id, then the
// remaining digits.
//
// Each 5 bit sequence corresponds to a single base 32 character. So for
// example, if the current id is 23 bits long, we can convert 20 of those
// bits into a string of 4 characters, with 3 bits left over.
//
// First calculate how many bits in the base id represent a complete
// sequence of characters.
var u=o-o%5,l=(1<<u)-1,c=(d&l).toString(32),f=d>>u,p=o-u,m=Ur(n)+p,h=r<<p,g=h|f,y=c+a;// Then create a bitmask that selects only those bits.
// Select the bits, and convert them to a base 32 string.
// Now we can remove those bits from the base id.
// Finally, encode the rest of the bits using the normal algorithm. Because
// we made more room, this time it won't overflow.
LC=1<<m|g,zC=y}else{// Normal path
var b=r<<o,v=b|d,k=a;LC=1<<s|v,zC=k}}function Mr(e){jr();// This component materialized an id. This will affect any ids that appear
// in its children.
var n=e["return"];if(null!==n){var t=1,i=0;Lr(e,1),zr(e,1,i)}}function Ur(e){return 32-Yk(e)}function Or(e){return 1<<Ur(e)-1}function Fr(e){// Restore the previous values.
// This is a bit more complicated than other context-like modules in Fiber
// because the same Fiber may appear on the stack multiple times and for
// different reasons. We have to keep popping until the work-in-progress is
// no longer at the top of the stack.
for(;e===_C;)_C=TC[--PC],TC[PC]=null,EC=TC[--PC],TC[PC]=null;for(;e===DC;)DC=NC[--IC],NC[IC]=null,zC=NC[--IC],NC[IC]=null,LC=NC[--IC],NC[IC]=null}function Ar(){return jr(),null===DC?null:{id:LC,overflow:zC}}function Wr(e,n){jr(),NC[IC++]=LC,NC[IC++]=zC,NC[IC++]=DC,LC=n.id,zC=n.overflow,DC=e}function jr(){cs()||r("Expected to be hydrating. This is a bug in React. Please file an issue.")}// This may have been an insertion or a hydration.
function Br(){OC&&r("We should not be hydrating here. This is a bug in React. Please file a bug.")}function Hr(){FC=!0}function Vr(){return FC}function $r(e){var n=e.stateNode.containerInfo;return UC=Ed(n),MC=e,OC=!0,AC=null,FC=!1,!0}function Yr(e,n,t){return UC=Nd(n),MC=e,OC=!0,AC=null,FC=!1,null!==t&&Wr(e,t),!0}function qr(e,n){switch(e.tag){case 3:{jd(e.stateNode.containerInfo,n);break}case 5:{var t=0!==(1&e.mode);Hd(e.type,e.memoizedProps,e.stateNode,n,// TODO: Delete this argument when we remove the legacy root API.
t);break}case 13:{var i=e.memoizedState;null!==i.dehydrated&&Bd(i.dehydrated,n);break}}}function Kr(e,n){qr(e,n);var t=lh();t.stateNode=n,t["return"]=e;var i=e.deletions;null===i?(e.deletions=[t],e.flags|=16):i.push(t)}function Qr(e,n){{if(FC)// Inside a boundary that already suspended. We're currently rendering the
// siblings of a suspended node. The mismatch may be due to the missing
// data, so it's probably a false positive.
return;switch(e.tag){case 3:{var t=e.stateNode.containerInfo;switch(n.tag){case 5:var i=n.type,a=n.pendingProps;Vd(t,i);break;case 6:var o=n.pendingProps;$d(t,o)}break}case 5:{var d=e.type,r=e.memoizedProps,s=e.stateNode;switch(n.tag){case 5:{var u=n.type,l=n.pendingProps,c=(e.mode&1)!==0;Kd(d,r,s,u,l,// TODO: Delete this argument when we remove the legacy root API.
c);break}case 6:{var f=n.pendingProps,p=(e.mode&1)!==0;Qd(d,r,s,f,// TODO: Delete this argument when we remove the legacy root API.
p);break}}break}case 13:{var m=e.memoizedState,h=m.dehydrated;if(null!==h)switch(n.tag){case 5:var g=n.type,y=n.pendingProps;Yd(h,g);break;case 6:var b=n.pendingProps;qd(h,b)}break}default:return}}}function Xr(e,n){n.flags=n.flags&-4097|2,Qr(e,n)}function Gr(e,n){switch(e.tag){case 5:{var t=e.type,i=e.pendingProps,a=vd(n,t);return null!==a&&(e.stateNode=a,MC=e,UC=_d(a),!0)}case 6:{var o=e.pendingProps,d=kd(n,o);return null!==d&&(e.stateNode=d,MC=e,UC=null,!0)}case 13:{var r=Sd(n);if(null!==r){var s={dehydrated:r,treeContext:Ar(),retryLane:1073741824};e.memoizedState=s;// Store the dehydrated fragment as a child fiber.
// This simplifies the code for getHostSibling and deleting nodes,
// since it doesn't have to consider all Suspense boundaries and
// check if they're dehydrated ones or not.
var u=ch(r);return u["return"]=e,e.child=u,MC=e,UC=null,!0}return!1}default:return!1}}function Jr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zr(e){throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.")}function es(e){if(OC){var n=UC;if(!n)return Jr(e)&&(Qr(MC,e),Zr()),Xr(MC,e),OC=!1,void(MC=e);var t=n;if(!Gr(e,n)){Jr(e)&&(Qr(MC,e),Zr()),n=Pd(t);var i=MC;if(!n||!Gr(e,n))return Xr(MC,e),OC=!1,void(MC=e);// We matched the next one, we'll now assume that the first one was
// superfluous and we'll delete it. Since we can't eagerly delete it
// we'll have to schedule a deletion. To do that, this node needs a dummy
// fiber associated with it.
Kr(i,t)}}}function ns(e,n,t){var i=e.stateNode,a=!FC,o=Id(i,e.type,e.memoizedProps,n,t,e,a);// TODO: Type this specific to this type of component.
// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update.
return e.updateQueue=o,null!==o}function ts(e){var n=e.stateNode,t=e.memoizedProps,i=Dd(n,t,e);if(i){// We assume that prepareToHydrateHostTextInstance is called in a context where the
// hydration parent is the parent host component of this host text.
var a=MC;if(null!==a)switch(a.tag){case 3:{var o=a.stateNode.containerInfo,d=0!==(1&a.mode);Ad(o,n,t,// TODO: Delete this argument when we remove the legacy root API.
d);break}case 5:{var r=a.type,s=a.memoizedProps,u=a.stateNode,l=0!==(1&a.mode);Wd(r,s,u,n,t,// TODO: Delete this argument when we remove the legacy root API.
l);break}}}return i}function is(e){var n=e.memoizedState,t=null===n?null:n.dehydrated;if(!t)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");Ld(t,e)}function as(e){var n=e.memoizedState,t=null===n?null:n.dehydrated;if(!t)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");return zd(t)}function os(e){for(var n=e["return"];null!==n&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n["return"];MC=n}function ds(e){if(e!==MC)// We're deeper than the current hydration context, inside an inserted
// tree.
return!1;if(!OC)return os(e),OC=!0,!1;// If we have any remaining hydratable nodes, we need to delete them now.
// We only do this deeper than head and body since they tend to have random
// other nodes in them. We also ignore components with pure text content in
// side of them. We also don't delete anything inside the root container.
if(3!==e.tag&&(5!==e.tag||Fd(e.type)&&!Jo(e.type,e.memoizedProps))){var n=UC;if(n)if(Jr(e))ss(e),Zr();else for(;n;)Kr(e,n),n=Pd(n)}return os(e),UC=13===e.tag?as(e):MC?Pd(e.stateNode):null,!0}function rs(){return OC&&null!==UC}function ss(e){for(var n=UC;n;)qr(e,n),n=Pd(n)}function us(){MC=null,UC=null,OC=!1,FC=!1}function ls(){null!==AC&&(Fp(AC),AC=null)}function cs(){return OC}function fs(e){null===AC?AC=[e]:AC.push(e)}function ps(){return WC.transition}function ms(e,n){if(e&&e.defaultProps){// Resolve default props. Taken from ReactElement
var t=Dy({},n),i=e.defaultProps;for(var a in i)void 0===t[a]&&(t[a]=i[a]);return t}return n}function hs(){// This is called right before React yields execution, to ensure `readContext`
// cannot be called outside the render phase.
tR=null,iR=null,aR=null,oR=!1}function gs(){oR=!0}function ys(){oR=!1}function bs(e,n,t){pr(eR,n._currentValue,e),n._currentValue=t,n._currentRenderer!==void 0&&null!==n._currentRenderer&&n._currentRenderer!==nR&&r("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),n._currentRenderer=nR}function vs(e,n){var t=eR.current;fr(eR,n),e._currentValue=t}function ks(e,n,t){// Update the child lanes of all the ancestors, including the alternates.
for(var i=e,a;null!==i&&(a=i.alternate,Ot(i.childLanes,n)?null!==a&&!Ot(a.childLanes,n)&&(a.childLanes=Ft(a.childLanes,n)):(i.childLanes=Ft(i.childLanes,n),null!==a&&(a.childLanes=Ft(a.childLanes,n))),i!==t);)i=i["return"];i!==t&&r("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function Ss(e,n,t){ws(e,n,t)}function ws(e,n,t){var i=e.child;for(null!==i&&(i["return"]=e);null!==i;){var a=void 0,o=i.dependencies;// Visit this fiber.
if(null!==o){a=i.child;for(var d=o.firstContext;null!==d;){// Check if the context matches.
if(d.context===n){// Match! Schedule an update on this fiber.
if(i.tag===1){// Schedule a force update on the work-in-progress.
var r=Lt(t),s=zs(-1,r);s.tag=lR;// TODO: Because we don't have a work-in-progress, this will add the
// update to the current fiber, too, which means it will persist even if
// this render is thrown away. Since it's a race condition, not sure it's
// worth fixing.
// Inlined `enqueueUpdate` to remove interleaved update check
var u=i.updateQueue;if(null===u);else{var l=u.shared,c=l.pending;null===c?s.next=s:(s.next=c.next,c.next=s),l.pending=s}}i.lanes=Ft(i.lanes,t);var f=i.alternate;null!==f&&(f.lanes=Ft(f.lanes,t)),ks(i["return"],t,e),o.lanes=Ft(o.lanes,t);// Since we already found a match, we can stop traversing the
// dependency list.
break}d=d.next}}else if(i.tag===10)// Don't scan deeper if this is a matching provider
a=i.type===e.type?null:i.child;else if(i.tag===18){// If a dehydrated suspense boundary is in this subtree, we don't know
// if it will have any context consumers in it. The best we can do is
// mark it as having updates.
var p=i["return"];if(null===p)throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");p.lanes=Ft(p.lanes,t);var m=p.alternate;// This is intentionally passing this fiber as the parent
// because we want to schedule this fiber as having work
// on its children. We'll use the childLanes on
// this fiber to indicate that a context has changed.
null!==m&&(m.lanes=Ft(m.lanes,t)),ks(p,t,e),a=i.sibling}else// Traverse down.
a=i.child;if(null!==a)// Set the return pointer of the child to the work-in-progress fiber.
a["return"]=i;else for(a=i;null!==a;){if(a===e){a=null;break}var h=a.sibling;if(null!==h){h["return"]=a["return"],a=h;break}// No more siblings. Traverse up.
a=a["return"]}i=a}}function xs(e,n){tR=e,iR=null,aR=null;var t=e.dependencies;if(null!==t){var i=t.firstContext;null!==i&&(Ut(t.lanes,n)&&af(),t.firstContext=null)}}function Cs(e){oR&&r("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");var n=e._currentValue;if(aR===e);else{var t={context:e,memoizedValue:n,next:null};if(null===iR){if(null===tR)throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");// This is the first dependency for this component. Create a new list.
iR=t,tR.dependencies={lanes:0,firstContext:t}}else// Append a new context item.
iR=iR.next=t}return n}// render. When this render exits, either because it finishes or because it is
// interrupted, the interleaved updates will be transferred onto the main part
// of the queue.
function Rs(e){null===dR?dR=[e]:dR.push(e)}function Ts(){// Transfer the interleaved updates onto the main queue. Each queue has a
// `pending` field and an `interleaved` field. When they are not null, they
// point to the last node in a circular linked list. We need to append the
// interleaved list to the end of the pending list by joining them into a
// single, circular list.
if(null!==dR){for(var e=0;e<dR.length;e++){var n=dR[e],t=n.interleaved;if(null!==t){n.interleaved=null;var a=t.next,o=n.pending;if(null!==o){var d=o.next;o.next=a,t.next=d}n.pending=t}}dR=null}}function Ps(e,n,t,i){var a=n.interleaved;return null===a?(t.next=t,Rs(n)):(t.next=a.next,a.next=t),n.interleaved=t,Is(e,i)}function _s(e,n,t,i){var a=n.interleaved;null===a?(t.next=t,Rs(n)):(t.next=a.next,a.next=t),n.interleaved=t}function Es(e,n,t,i){var a=n.interleaved;return null===a?(t.next=t,Rs(n)):(t.next=a.next,a.next=t),n.interleaved=t,Is(e,i)}function Ns(e,n){return Is(e,n)}// Calling this function outside this module should only be done for backwards
// compatibility and should always be accompanied by a warning.
function Is(e,n){e.lanes=Ft(e.lanes,n);var t=e.alternate;null!==t&&(t.lanes=Ft(t.lanes,n)),null===t&&(e.flags&4098)!==0&&Im(e);// Walk the parent path to the root and update the child lanes.
for(var i=e,a=e["return"];null!==a;)a.childLanes=Ft(a.childLanes,n),t=a.alternate,null===t?0!==(4098&a.flags)&&Im(e):t.childLanes=Ft(t.childLanes,n),i=a,a=a["return"];if(i.tag===3){var o=i.stateNode;return o}return null}function Ds(e){var n={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};e.updateQueue=n}function Ls(e,n){// Clone the update queue from current. Unless it's already a clone.
var t=n.updateQueue,i=e.updateQueue;if(t===i){var a={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects};n.updateQueue=a}}function zs(e,n){var t={eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null};return t}function Ms(e,n,t){var i=e.updateQueue;if(null===i)// Only occurs if the fiber has been unmounted.
return null;var a=i.shared;if(mR!==a||pR||(r("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),pR=!0),zp()){// This is an unsafe render phase update. Add directly to the update
// queue so we can process it immediately during the current render.
var o=a.pending;// Update the childLanes even though we're most likely already rendering
// this fiber. This is for backwards compatibility in the case where you
// update a different component during render phase than the one that is
// currently renderings (a pattern that is accompanied by a warning).
return null===o?n.next=n:(n.next=o.next,o.next=n),a.pending=n,rR(e,t)}return Es(e,a,n,t)}function Us(e,n,t){var i=n.updateQueue;if(null!==i)// Only occurs if the fiber has been unmounted.
{var a=i.shared;if(Et(t)){var o=a.lanes;// If any entangled lanes are no longer pending on the root, then they must
// have finished. We can remove them from the shared queue, which represents
// a superset of the actually pending lanes. In some cases we may entangle
// more than we need to, but that's OK. In fact it's worse if we *don't*
// entangle when we should.
o=Wt(o,e.pendingLanes);// Entangle the new transition lane with the other transition lanes.
var d=Ft(o,t);a.lanes=d,Kt(e,d)}}}function Os(e,n){// Captured updates are updates that are thrown by a child during the render
// phase. They should be discarded if the render is aborted. Therefore,
// we should only put them on the work-in-progress queue, not the current one.
var t=e.updateQueue,i=e.alternate;// Check if the work-in-progress queue is a clone.
if(null!==i){var a=i.updateQueue;if(t===a){// The work-in-progress queue is the same as current. This happens when
// we bail out on a parent fiber that then captures an error thrown by
// a child. Since we want to append the update only to the work-in
// -progress queue, we need to clone the updates. We usually clone during
// processUpdateQueue, but that didn't happen in this case because we
// skipped over the parent when we bailed out.
var o=null,d=null,r=t.firstBaseUpdate;if(null!==r){// Loop through the updates and clone them.
var s=r;do{var u={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};null===d?o=d=u:(d.next=u,d=u),s=s.next}while(null!==s);// Append the captured update the end of the cloned list.
null===d?o=d=n:(d.next=n,d=n)}else// There are no base updates.
o=d=n;return t={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:d,shared:a.shared,effects:a.effects},void(e.updateQueue=t)}}// Append the update to the end of the list.
var l=t.lastBaseUpdate;null===l?t.firstBaseUpdate=n:l.next=n,t.lastBaseUpdate=n}function Fs(e,n,t,i,a,o){switch(t.tag){case 1:{var d=t.payload;if("function"==typeof d){gs();var r=d.call(o,i,a);{if(e.mode&8){Wn(!0);try{d.call(o,i,a)}finally{Wn(!1)}}ys()}return r}// State object
return d}case 3:e.flags=e.flags&-65537|128;// Intentional fallthrough
case 0:{var s=t.payload,u;if("function"==typeof s){gs(),u=s.call(o,i,a);{if(e.mode&8){Wn(!0);try{s.call(o,i,a)}finally{Wn(!1)}}ys()}}else// Partial state object
u=s;return null===u||void 0===u?i:Dy({},i,u);// Merge the partial state and the previous state.
}case 2:return fR=!0,i}return i}function As(e,n,t,i){// This is always non-null on a ClassComponent or HostRoot
var a=e.updateQueue;fR=!1,mR=a.shared;var o=a.firstBaseUpdate,d=a.lastBaseUpdate,r=a.shared.pending;// Check if there are pending updates. If so, transfer them to the base queue.
if(null!==r){a.shared.pending=null;// The pending queue is circular. Disconnect the pointer between first
// and last so that it's non-circular.
var s=r,u=s.next;s.next=null,null===d?o=u:d.next=u,d=s;// If there's a current queue, and it's different from the base queue, then
// we need to transfer the updates to that queue, too. Because the base
// queue is a singly-linked list with no cycles, we can append to both
// lists and take advantage of structural sharing.
// TODO: Pass `current` as argument
var l=e.alternate;if(null!==l){// This is always non-null on a ClassComponent or HostRoot
var c=l.updateQueue,f=c.lastBaseUpdate;f!==d&&(null===f?c.firstBaseUpdate=u:f.next=u,c.lastBaseUpdate=s)}}// These values may change as we process the queue.
if(null!==o){// Iterate through the list of updates to compute the result.
var p=a.baseState,m=0,h=null,g=null,y=null,b=o;// TODO: Don't need to accumulate this. Instead, we can remove renderLanes
// from the original lanes.
do{var v=b.lane,k=b.eventTime;if(!Ot(i,v)){// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
var S={eventTime:k,lane:v,tag:b.tag,payload:b.payload,callback:b.callback,next:null};null===y?(g=y=S,h=p):y=y.next=S,m=Ft(m,v)}else{// This update does have sufficient priority.
if(null!==y){var w={eventTime:k,// This update is going to be committed so we never want uncommit
// it. Using NoLane works because 0 is a subset of all bitmasks, so
// this will never be skipped by the check above.
lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null};y=y.next=w}// Process this update.
p=Fs(e,a,b,p,n,t);var x=b.callback;if(null!==x&&// If the update was already committed, we should not queue its
// callback again.
0!==b.lane){e.flags|=64;var C=a.effects;null===C?a.effects=[b]:C.push(b)}}if(b=b.next,null===b)if(r=a.shared.pending,null===r)break;else{// An update was scheduled from inside a reducer. Add the new
// pending updates to the end of the list and keep processing.
var R=r,T=R.next;// Intentionally unsound. Pending updates form a circular list, but we
// unravel them when transferring them to the base queue.
R.next=null,b=T,a.lastBaseUpdate=R,a.shared.pending=null}}while(!0);null===y&&(h=p),a.baseState=h,a.firstBaseUpdate=g,a.lastBaseUpdate=y;// Interleaved updates are stored on a separate queue. We aren't going to
// process them during this render, but we do need to track which lanes
// are remaining.
var P=a.shared.interleaved;if(null!==P){var _=P;do m=Ft(m,_.lane),_=_.next;while(_!==P)}else null===o&&(// `queue.lanes` is used for entangling transitions. We can set it back to
// zero once the queue is empty.
a.shared.lanes=0);// Set the remaining expiration time to be whatever is remaining in the queue.
// This should be fine because the only two other things that contribute to
// expiration time are props and context. We're already in the middle of the
// begin phase by the time we start processing the queue, so we've already
// dealt with the props. Context in components that specify
// shouldComponentUpdate is tricky; but we'll have to account for
// that regardless.
nm(m),e.lanes=m,e.memoizedState=p}mR=null}function Ws(e,n){if("function"!=typeof e)throw new Error("Invalid argument passed as callback. Expected a function. Instead received: "+e);e.call(n)}function js(){fR=!1}function Bs(){return fR}function Hs(e,n,t){// Commit the effects
var a=n.effects;if(n.effects=null,null!==a)for(var o=0;o<a.length;o++){var d=a[o],r=d.callback;null!==r&&(d.callback=null,Ws(r,t))}}function Vs(e,n,t,i){var a=e.memoizedState,o=t(i,a);{if(8&e.mode){Wn(!0);try{o=t(i,a)}finally{Wn(!1)}}wR(n,o)}// Merge the partial state and the previous state.
var d=null===o||void 0===o?a:Dy({},a,o);// Once the update queue is empty, persist the derived state onto the
// base state.
if(e.memoizedState=d,0===e.lanes){// Queue is always non-null for classes
var r=e.updateQueue;r.baseState=d}}function $s(e,n,t,i,a,o,d){var s=e.stateNode;if("function"==typeof s.shouldComponentUpdate){var u=s.shouldComponentUpdate(i,o,d);{if(e.mode&8){Wn(!0);try{// Invoke the function an extra time to help detect side-effects.
u=s.shouldComponentUpdate(i,o,d)}finally{Wn(!1)}}u===void 0&&r("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",V(n)||"Component")}return u}return!(n.prototype&&n.prototype.isPureReactComponent)||!Na(t,i)||!Na(a,o)}function Ys(e,n,t){var i=e.stateNode;{var a=V(n)||"Component",o=i.render;o||(n.prototype&&"function"==typeof n.prototype.render?r("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",a):r("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",a)),!i.getInitialState||i.getInitialState.isReactClassApproved||i.state||r("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",a),i.getDefaultProps&&!i.getDefaultProps.isReactClassApproved&&r("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",a),i.propTypes&&r("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",a),i.contextType&&r("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",a),i.contextTypes&&r("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",a),n.contextType&&n.contextTypes&&!RR.has(n)&&(RR.add(n),r("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",a)),"function"==typeof i.componentShouldUpdate&&r("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",a),n.prototype&&n.prototype.isPureReactComponent&&"undefined"!=typeof i.shouldComponentUpdate&&r("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",V(n)||"A pure component"),"function"==typeof i.componentDidUnmount&&r("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",a),"function"==typeof i.componentDidReceiveProps&&r("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",a),"function"==typeof i.componentWillRecieveProps&&r("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",a),"function"==typeof i.UNSAFE_componentWillRecieveProps&&r("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",a);var d=i.props!==t;i.props!==void 0&&d&&r("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",a,a),i.defaultProps&&r("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",a,a),"function"!=typeof i.getSnapshotBeforeUpdate||"function"==typeof i.componentDidUpdate||vR.has(n)||(vR.add(n),r("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",V(n))),"function"==typeof i.getDerivedStateFromProps&&r("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",a),"function"==typeof i.getDerivedStateFromError&&r("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",a),"function"==typeof n.getSnapshotBeforeUpdate&&r("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",a);var s=i.state;s&&("object"!==_typeof(s)||we(s))&&r("%s.state: must be set to an object or null",a),"function"==typeof i.getChildContext&&"object"!==_typeof(n.childContextTypes)&&r("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",a)}}function qs(e,n){// The instance needs access to the fiber so that it can schedule updates
n.updater=_R,e.stateNode=n,xn(n,e),n._reactInternalInstance=hR}function Ks(e,n,t){var i=!1,a=yC,o=yC,d=n.contextType;if("contextType"in n){var s=// Allow null for conditional declaration
null===d||void 0!==d&&d.$$typeof===by&&void 0===d._context;// Not a <Context.Consumer>
if(!s&&!TR.has(n)){TR.add(n);var u="";u=void 0===d?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":"object"===_typeof(d)?d.$$typeof===yy?" Did you accidentally pass the Context.Provider instead?":void 0===d._context?" However, it is set to an object with keys {"+Object.keys(d).join(", ")+"}.":" Did you accidentally pass the Context.Consumer instead?":" However, it is set to a "+_typeof(d)+".",r("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",V(n)||"Component",u)}}if("object"===_typeof(d)&&null!==d)o=Cs(d);else{a=mr(e,n,!0);var l=n.contextTypes;i=null!==l&&void 0!==l,o=i?gr(e,a):yC}var c=new n(t,o);// Instantiate twice to help detect side-effects.
if(8&e.mode){Wn(!0);try{c=new n(t,o)}finally{Wn(!1)}}var f=e.memoizedState=null!==c.state&&void 0!==c.state?c.state:null;qs(e,c);{if("function"==typeof n.getDerivedStateFromProps&&null===f){var p=V(n)||"Component";bR.has(p)||(bR.add(p),r("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",p,null===c.state?"null":"undefined",p))}// If new component APIs are defined, "unsafe" lifecycles won't be called.
// Warn about these lifecycles if they are present.
// Don't warn about react-lifecycles-compat polyfilled methods though.
if("function"==typeof n.getDerivedStateFromProps||"function"==typeof c.getSnapshotBeforeUpdate){var m=null,h=null,g=null;if("function"==typeof c.componentWillMount&&!0!==c.componentWillMount.__suppressDeprecationWarning?m="componentWillMount":"function"==typeof c.UNSAFE_componentWillMount&&(m="UNSAFE_componentWillMount"),"function"==typeof c.componentWillReceiveProps&&!0!==c.componentWillReceiveProps.__suppressDeprecationWarning?h="componentWillReceiveProps":"function"==typeof c.UNSAFE_componentWillReceiveProps&&(h="UNSAFE_componentWillReceiveProps"),"function"==typeof c.componentWillUpdate&&!0!==c.componentWillUpdate.__suppressDeprecationWarning?g="componentWillUpdate":"function"==typeof c.UNSAFE_componentWillUpdate&&(g="UNSAFE_componentWillUpdate"),null!==m||null!==h||null!==g){var y=V(n)||"Component",b="function"==typeof n.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";kR.has(y)||(kR.add(y),r("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles",y,b,null===m?"":"\n  "+m,null===h?"":"\n  "+h,null===g?"":"\n  "+g))}}}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// ReactFiberContext usually updates this cache but can't for newly-created instances.
return i&&hr(e,a,o),c}function Qs(e,n){var t=n.state;"function"==typeof n.componentWillMount&&n.componentWillMount(),"function"==typeof n.UNSAFE_componentWillMount&&n.UNSAFE_componentWillMount(),t!==n.state&&(r("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",q(e)||"Component"),_R.enqueueReplaceState(n,n.state,null))}function Xs(e,n,t,i){var a=n.state;if("function"==typeof n.componentWillReceiveProps&&n.componentWillReceiveProps(t,i),"function"==typeof n.UNSAFE_componentWillReceiveProps&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==a){{var o=q(e)||"Component";yR.has(o)||(yR.add(o),r("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",o))}_R.enqueueReplaceState(n,n.state,null)}}// Invokes the mount life-cycles on a previously never rendered instance.
function Gs(e,n,t,i){Ys(e,n,t);var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs=gR,Ds(e);var o=n.contextType;if("object"===_typeof(o)&&null!==o)a.context=Cs(o);else{var d=mr(e,n,!0);a.context=gr(e,d)}{if(a.state===t){var s=V(n)||"Component";CR.has(s)||(CR.add(s),r("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",s))}8&e.mode&&BC.recordLegacyContextWarning(e,a),BC.recordUnsafeLifecycleWarnings(e,a)}a.state=e.memoizedState;var u=n.getDerivedStateFromProps;if("function"==typeof u&&(Vs(e,n,u,t),a.state=e.memoizedState),"function"!=typeof n.getDerivedStateFromProps&&"function"!=typeof a.getSnapshotBeforeUpdate&&("function"==typeof a.UNSAFE_componentWillMount||"function"==typeof a.componentWillMount)&&(Qs(e,a),As(e,t,a,i),a.state=e.memoizedState),"function"==typeof a.componentDidMount){var l=4;l|=4194304,0!==(16&e.mode)&&(l|=16777216),e.flags|=l}}function Js(e,n,t,i){var a=e.stateNode,o=e.memoizedProps;a.props=o;var d=a.context,r=n.contextType,s=yC;if("object"===_typeof(r)&&null!==r)s=Cs(r);else{var u=mr(e,n,!0);s=gr(e,u)}var l=n.getDerivedStateFromProps,c="function"==typeof l||"function"==typeof a.getSnapshotBeforeUpdate;c||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||o===t&&d===s||Xs(e,a,t,s),js();var f=e.memoizedState,p=a.state=f;if(As(e,t,a,i),p=e.memoizedState,o===t&&f===p&&!yr()&&!Bs()){// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if("function"==typeof a.componentDidMount){var m=4;m|=4194304,0!==(16&e.mode)&&(m|=16777216),e.flags|=m}return!1}"function"==typeof l&&(Vs(e,n,l,t),p=e.memoizedState);var h=Bs()||$s(e,n,o,t,f,p,s);if(!h){// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if("function"==typeof a.componentDidMount){var g=4;g|=4194304,0!==(16&e.mode)&&(g|=16777216),e.flags|=g}// If shouldComponentUpdate returned false, we should still update the
// memoized state to indicate that this work can be reused.
e.memoizedProps=t,e.memoizedState=p}else if(c||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount){var y=4;y|=4194304,0!==(16&e.mode)&&(y|=16777216),e.flags|=y}// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
return a.props=t,a.state=p,a.context=s,h}// Invokes the update life-cycles and returns false if it shouldn't rerender.
function Zs(e,n,t,i,a){var o=n.stateNode;Ls(e,n);var d=n.memoizedProps,r=n.type===n.elementType?d:ms(n.type,d);o.props=r;var s=n.pendingProps,u=o.context,l=t.contextType,c=yC;if("object"===_typeof(l)&&null!==l)c=Cs(l);else{var f=mr(n,t,!0);c=gr(n,f)}var p=t.getDerivedStateFromProps,m="function"==typeof p||"function"==typeof o.getSnapshotBeforeUpdate;m||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||d===s&&u===c||Xs(n,o,i,c),js();var h=n.memoizedState,g=o.state=h;if(As(n,i,o,a),g=n.memoizedState,d===s&&h===g&&!yr()&&!Bs()&&!0)return"function"==typeof o.componentDidUpdate&&(d!==e.memoizedProps||h!==e.memoizedState)&&(n.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(d!==e.memoizedProps||h!==e.memoizedState)&&(n.flags|=1024),!1;"function"==typeof p&&(Vs(n,t,p,i),g=n.memoizedState);var y=Bs()||$s(n,t,r,i,h,g,c)||!1;return y?(!m&&("function"==typeof o.UNSAFE_componentWillUpdate||"function"==typeof o.componentWillUpdate)&&("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(i,g,c),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(i,g,c)),"function"==typeof o.componentDidUpdate&&(n.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(n.flags|=1024)):("function"==typeof o.componentDidUpdate&&(d!==e.memoizedProps||h!==e.memoizedState)&&(n.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(d!==e.memoizedProps||h!==e.memoizedState)&&(n.flags|=1024),n.memoizedProps=i,n.memoizedState=g),o.props=i,o.state=g,o.context=c,y}function eu(e,n,t){var i=t.ref;if(null!==i&&"function"!=typeof i&&"object"!==_typeof(i)){// TODO: Clean this up once we turn on the string ref warning for
// everyone, because the strict mode case will no longer be relevant
if((8&e.mode||!1)&&// We warn in ReactElement.js if owner and self are equal for string refs
// because these cannot be automatically converted to an arrow function
// using a codemod. Therefore, we don't have to warn about string refs again.
!(t._owner&&t._self&&t._owner.stateNode!==t._self)){var a=q(e)||"Component";DR[a]||(r("A string ref, \"%s\", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref",i),DR[a]=!0)}if(t._owner){var o=t._owner,d;if(o){var s=o;if(1!==s.tag)throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");d=s.stateNode}if(!d)throw new Error("Missing owner for string ref "+i+". This error is likely caused by a bug in React. Please file an issue.");// Assigning this to a const so Flow knows it won't change in the closure
var u=d;g(i,"ref");var l=""+i;// Check if previous string ref matches new string ref
if(null!==n&&null!==n.ref&&"function"==typeof n.ref&&n.ref._stringRef===l)return n.ref;var c=function ref(e){var n=u.refs;n===gR&&(n=u.refs={}),null===e?delete n[l]:n[l]=e};return c._stringRef=l,c}if("string"!=typeof i)throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");if(!t._owner)throw new Error("Element ref was specified as a string ("+i+") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information.")}return i}function nu(e,n){var t=Object.prototype.toString.call(n);throw new Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(n).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}function tu(e){{var n=q(e)||"Component";if(zR[n])return;zR[n]=!0,r("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.")}}function iu(e){var n=e._payload,t=e._init;return t(n)}// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function au(e){function n(n,t){if(e)// Noop.
{var i=n.deletions;null===i?(n.deletions=[t],n.flags|=16):i.push(t)}}function t(t,i){if(!e)// Noop.
return null;// TODO: For the shouldClone case, this could be micro-optimized a bit by
// assuming that after the first child we've already added everything.
for(var a=i;null!==a;)n(t,a),a=a.sibling;return null}function i(e,n){// Add the remaining children to a temporary map so that we can find them by
// keys quickly. Implicit (null) keys get added to this set with their index
// instead.
for(var t=new Map,i=n;null!==i;)null===i.key?t.set(i.index,i):t.set(i.key,i),i=i.sibling;return t}function a(e,n){// We currently set sibling to null and index to 0 here because it is easy
// to forget to do before returning it. E.g. for the single child case.
var t=Zm(e,n);return t.index=0,t.sibling=null,t}function o(n,t,i){if(n.index=i,!e)return n.flags|=1048576,t;var a=n.alternate;if(null!==a){var o=a.index;return o<t?(n.flags|=2,t):o}return n.flags|=2,t}function d(n){return e&&null===n.alternate&&(n.flags|=2),n}function s(e,n,t,i){if(null===n||6!==n.tag){// Insert
var o=uh(t,e.mode,i);return o["return"]=e,o}// Update
var d=a(n,t);return d["return"]=e,d}function u(e,n,t,i){var o=t.type;if(o===my)return c(e,n,t.props.children,i,t.key);if(null!==n&&(n.elementType===o||// Keep this check inline so it only runs on the false path:
Hm(n,t)||// Lazy types should reconcile their resolved type.
// We need to do this after the Hot Reloading check above,
// because hot reloading has different semantics than prod because
// it doesn't resuspend. So we can't let the call below suspend.
"object"===_typeof(o)&&null!==o&&o.$$typeof===xy&&iu(o)===n.type)){// Move based on index
var d=a(n,t.props);return d.ref=eu(e,n,t),d["return"]=e,d._debugSource=t._source,d._debugOwner=t._owner,d}// Insert
var r=ih(t,e.mode,i);return r.ref=eu(e,n,t),r["return"]=e,r}function l(e,n,t,i){if(null===n||4!==n.tag||n.stateNode.containerInfo!==t.containerInfo||n.stateNode.implementation!==t.implementation){// Insert
var o=fh(t,e.mode,i);return o["return"]=e,o}// Update
var d=a(n,t.children||[]);return d["return"]=e,d}function c(e,n,t,i,o){if(null===n||7!==n.tag){// Insert
var d=ah(t,e.mode,i,o);return d["return"]=e,d}// Update
var r=a(n,t);return r["return"]=e,r}function f(e,n,t){if("string"==typeof n&&""!==n||"number"==typeof n){// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
var i=uh(""+n,e.mode,t);return i["return"]=e,i}if("object"===_typeof(n)&&null!==n){switch(n.$$typeof){case fy:{var a=ih(n,e.mode,t);return a.ref=eu(e,null,n),a["return"]=e,a}case py:{var o=fh(n,e.mode,t);return o["return"]=e,o}case xy:{var d=n._payload,r=n._init;return f(e,r(d),t)}}if(we(n)||N(n)){var s=ah(n,e.mode,t,null);return s["return"]=e,s}nu(e,n)}return"function"==typeof n&&tu(e),null}function p(e,n,t,i){// Update the fiber if the keys match, otherwise return null.
var a=null===n?null:n.key;if("string"==typeof t&&""!==t||"number"==typeof t)// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
return null===a?s(e,n,""+t,i):null;if("object"===_typeof(t)&&null!==t){switch(t.$$typeof){case fy:return t.key===a?u(e,n,t,i):null;case py:return t.key===a?l(e,n,t,i):null;case xy:{var o=t._payload,d=t._init;return p(e,n,d(o),i)}}if(we(t)||N(t))return null===a?c(e,n,t,i,null):null;nu(e,t)}return"function"==typeof t&&tu(e),null}function m(e,n,t,i,a){if("string"==typeof i&&""!==i||"number"==typeof i){// Text nodes don't have keys, so we neither have to check the old nor
// new node for the key. If both are text nodes, they match.
var o=e.get(t)||null;return s(n,o,""+i,a)}if("object"===_typeof(i)&&null!==i){switch(i.$$typeof){case fy:{var d=e.get(null===i.key?t:i.key)||null;return u(n,d,i,a)}case py:{var r=e.get(null===i.key?t:i.key)||null;return l(n,r,i,a)}case xy:var f=i._payload,p=i._init;return m(e,n,t,p(f),a)}if(we(i)||N(i)){var h=e.get(t)||null;return c(n,h,i,a,null)}nu(n,i)}return"function"==typeof i&&tu(n),null}/**
     * Warns if there is a duplicate or missing key
     */function h(e,n,t){{if("object"!==_typeof(e)||null===e)return n;switch(e.$$typeof){case fy:case py:ER(e,t);var i=e.key;if("string"!=typeof i)break;if(null===n){n=new Set,n.add(i);break}if(!n.has(i)){n.add(i);break}r("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.",i);break;case xy:var a=e._payload,o=e._init;h(o(a),n,t)}}return n}function g(a,d,r,s){// First, validate keys.
// This algorithm can't optimize by searching from both ends since we
// don't have backpointers on fibers. I'm trying to see how far we can get
// with that model. If it ends up not being worth the tradeoffs, we can
// add it later.
// Even with a two ended optimization, we'd want to optimize for the case
// where there are few changes and brute force the comparison instead of
// going for the Map. It'd like to explore hitting that path first in
// forward-only mode and only go for the Map once we notice that we need
// lots of look ahead. This doesn't handle reversal as well as two ended
// search but that's unusual. Besides, for the two ended optimization to
// work on Iterables, we'd need to copy the whole set.
// In this first iteration, we'll just live with hitting the bad case
// (adding everything to a Map) in for every insert/move.
// If you change this code, also update reconcileChildrenIterator() which
// uses the same algorithm.
for(var u=null,l=0,c;l<r.length;l++)c=r[l],u=h(c,u,a);for(var g=null,y=null,b=d,v=0,k=0,S=null;null!==b&&k<r.length;k++){b.index>k?(S=b,b=null):S=b.sibling;var w=p(a,b,r[k],s);if(null===w){null===b&&(b=S);break}e&&b&&null===w.alternate&&n(a,b),v=o(w,v,k),null===y?g=w:y.sibling=w,y=w,b=S}if(k===r.length){if(t(a,b),cs()){var x=k;Lr(a,x)}return g}if(null===b){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;k<r.length;k++){var C=f(a,r[k],s);null!==C&&(v=o(C,v,k),null===y?g=C:y.sibling=C,y=C)}if(cs()){var R=k;Lr(a,R)}return g}// Add all children to a key map for quick lookups.
// Keep scanning and use the map to restore deleted items as moves.
for(var T=i(a,b),P;k<r.length;k++)P=m(T,a,k,r[k],s),null!==P&&(e&&null!==P.alternate&&T["delete"](null===P.key?k:P.key),v=o(P,v,k),null===y?g=P:y.sibling=P,y=P);if(e&&T.forEach(function(e){return n(a,e)}),cs()){var _=k;Lr(a,_)}return g}function y(a,d,s,u){// This is the same implementation as reconcileChildrenArray(),
// but using the iterator instead.
var l=N(s);if("function"!=typeof l)throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");{"function"==typeof Symbol&&// $FlowFixMe Flow doesn't know about toStringTag
"Generator"===s[Symbol.toStringTag]&&(!IR&&r("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),IR=!0),s.entries===l&&(!NR&&r("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),NR=!0);// First, validate keys.
// We'll get a different iterator later for the main pass.
var c=l.call(s);if(c)for(var g=null,y=c.next(),b;!y.done;y=c.next())b=y.value,g=h(b,g,a)}var v=l.call(s);if(null==v)throw new Error("An iterable object provided no iterator.");for(var k=null,S=null,w=d,x=0,C=0,R=null,T=v.next();null!==w&&!T.done;C++,T=v.next()){w.index>C?(R=w,w=null):R=w.sibling;var P=p(a,w,T.value,u);if(null===P){null===w&&(w=R);break}e&&w&&null===P.alternate&&n(a,w),x=o(P,x,C),null===S?k=P:S.sibling=P,S=P,w=R}if(T.done){if(t(a,w),cs()){var _=C;Lr(a,_)}return k}if(null===w){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;!T.done;C++,T=v.next()){var E=f(a,T.value,u);null!==E&&(x=o(E,x,C),null===S?k=E:S.sibling=E,S=E)}if(cs()){var I=C;Lr(a,I)}return k}// Add all children to a key map for quick lookups.
// Keep scanning and use the map to restore deleted items as moves.
for(var D=i(a,w),L;!T.done;C++,T=v.next())L=m(D,a,C,T.value,u),null!==L&&(e&&null!==L.alternate&&D["delete"](null===L.key?C:L.key),x=o(L,x,C),null===S?k=L:S.sibling=L,S=L);if(e&&D.forEach(function(e){return n(a,e)}),cs()){var z=C;Lr(a,z)}return k}function b(e,n,i,o){// There's no need to check for keys on text nodes since we don't have a
// way to define them.
if(null!==n&&6===n.tag){t(e,n.sibling);var d=a(n,i);return d["return"]=e,d}// The existing first child is not a text node so we need to create one
// and delete the existing ones.
t(e,n);var r=uh(i,e.mode,o);return r["return"]=e,r}function v(e,i,o,d){for(var r=o.key,s=i;null!==s;){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(s.key===r){var u=o.type;if(u===my){if(7===s.tag){t(e,s.sibling);var l=a(s,o.props.children);return l["return"]=e,l._debugSource=o._source,l._debugOwner=o._owner,l}}else if(s.elementType===u||// Keep this check inline so it only runs on the false path:
Hm(s,o)||// Lazy types should reconcile their resolved type.
// We need to do this after the Hot Reloading check above,
// because hot reloading has different semantics than prod because
// it doesn't resuspend. So we can't let the call below suspend.
"object"===_typeof(u)&&null!==u&&u.$$typeof===xy&&iu(u)===s.type){t(e,s.sibling);var c=a(s,o.props);return c.ref=eu(e,s,o),c["return"]=e,c._debugSource=o._source,c._debugOwner=o._owner,c}// Didn't match.
t(e,s);break}else n(e,s);s=s.sibling}if(o.type===my){var f=ah(o.props.children,e.mode,d,o.key);return f["return"]=e,f}var p=ih(o,e.mode,d);return p.ref=eu(e,i,o),p["return"]=e,p}function k(e,i,o,d){for(var r=o.key,s=i;null!==s;){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(s.key===r){if(4===s.tag&&s.stateNode.containerInfo===o.containerInfo&&s.stateNode.implementation===o.implementation){t(e,s.sibling);var u=a(s,o.children||[]);return u["return"]=e,u}t(e,s);break}else n(e,s);s=s.sibling}var l=fh(o,e.mode,d);return l["return"]=e,l}// This API will tag the children with the side-effect of the reconciliation
// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
function S(e,n,i,a){// This function is not recursive.
// If the top level item is an array, we treat it as a set of children,
// not as a fragment. Nested arrays on the other hand will be treated as
// fragment nodes. Recursion happens at the normal flow.
// Handle top level unkeyed fragments as if they were arrays.
// This leads to an ambiguity between <>{[...]}</> and <>...</>.
// We treat the ambiguous cases above the same.
var o="object"===_typeof(i)&&null!==i&&i.type===my&&null===i.key;// Handle object types
if(o&&(i=i.props.children),"object"===_typeof(i)&&null!==i){switch(i.$$typeof){case fy:return d(v(e,n,i,a));case py:return d(k(e,n,i,a));case xy:var r=i._payload,s=i._init;// TODO: This function is supposed to be non-recursive.
return S(e,n,s(r),a)}if(we(i))return g(e,n,i,a);if(N(i))return y(e,n,i,a);nu(e,i)}return"string"==typeof i&&""!==i||"number"==typeof i?d(b(e,n,""+i,a)):("function"==typeof i&&tu(e),t(e,n));// Remaining cases are all treated as empty.
}return S}function ou(e,n){if(null!==e&&n.child!==e.child)throw new Error("Resuming work not yet implemented.");if(null!==n.child){var t=n.child,i=Zm(t,t.pendingProps);for(n.child=i,i["return"]=n;null!==t.sibling;)t=t.sibling,i=i.sibling=Zm(t,t.pendingProps),i["return"]=n;i.sibling=null}}// Reset a workInProgress child set to prepare it for a second pass.
function du(e,n){for(var t=e.child;null!==t;)eh(t,n),t=t.sibling}function ru(e){if(e===OR)throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");return e}function su(){var e=ru(WR.current);return e}function uu(e,n){pr(WR,n,e),pr(AR,e,e),pr(FR,OR,e);var t=Ho(n);// Now that we know this function doesn't throw, replace it.
fr(FR,e),pr(FR,t,e)}function lu(e){fr(FR,e),fr(AR,e),fr(WR,e)}function cu(){var e=ru(FR.current);return e}function fu(e){var n=ru(WR.current),t=ru(FR.current),i=Vo(t,e.type);// Don't push this Fiber's context unless it's unique.
t===i||(// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
pr(AR,e,e),pr(FR,i,e))}function pu(e){// Do not pop unless this Fiber provided the current context.
// pushHostContext() only pushes Fibers that provide unique contexts.
AR.current!==e||(fr(FR,e),fr(AR,e))}function mu(e,n){return 0!=(e&n)}function hu(e){return e&1}function gu(e,n){return e&1|n}function yu(e,n){return e|n}function bu(e,n){pr($R,n,e)}function vu(e){fr($R,e)}function ku(e,n){// If it was the primary children that just suspended, capture and render the
// fallback. Otherwise, don't capture and bubble to the next boundary.
var t=e.memoizedState;if(null!==t)return null!==t.dehydrated;var i=e.memoizedProps;// Regular boundaries always capture.
return!0;// If it's a boundary we should avoid, then we prefer to bubble up to the
}function Su(e){for(var n=e;null!==n;){if(n.tag===13){var t=n.memoizedState;if(null!==t){var i=t.dehydrated;if(null===i||wd(i)||xd(i))return n}}else if(n.tag===19&&// revealOrder undefined can't be trusted because it don't
// keep track of whether it suspended or not.
n.memoizedProps.revealOrder!==void 0){var a=(n.flags&128)!==0;if(a)return n}else if(null!==n.child){n.child["return"]=n,n=n.child;continue}if(n===e)return null;for(;null===n.sibling;){if(null===n["return"]||n["return"]===e)return null;n=n["return"]}n.sibling["return"]=n["return"],n=n.sibling}return null}function wu(){for(var e=0,n;e<GR.length;e++)n=GR[e],n._workInProgressVersionPrimary=null;GR.length=0}// This ensures that the version used for server rendering matches the one
// that is eventually read during hydration.
// If they don't match there's a potential tear and a full deopt render is required.
function xu(e,n){var t=n._getVersion,i=t(n._source);// TODO Clear this data once all pending hydration work is finished.
// Retaining it forever may interfere with GC.
null==e.mutableSourceEagerHydrationData?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i)}function Cu(){{var e=cT;null===fT?fT=[e]:fT.push(e)}}function Ru(){{var e=cT;null!==fT&&(pT++,fT[pT]!==e&&Pu(e))}}function Tu(e){e===void 0||null===e||we(e)||r("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",cT,_typeof(e))}function Pu(e){{var n=q(iT);if(!eT.has(n)&&(eT.add(n),null!==fT)){for(var t="",a=30,o=0;o<=pT;o++){// Extra space so second column lines up
// lol @ IE not supporting String#repeat
for(var d=fT[o],s=o==pT?e:d,u=o+1+". "+d;u.length<a;)u+=" ";u+=s+"\n",t+=u}r("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n",n,t)}}}function _u(){throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.")}function Eu(e,n){if(mT)// Only true when this component is being hot reloaded.
return!1;if(null===n)return r("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",cT),!1;e.length!==n.length&&r("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s",cT,"["+n.join(", ")+"]","["+e.join(", ")+"]");for(var t=0;t<n.length&&t<e.length;t++)if(!ex(e[t],n[t]))return!1;return!0}function Nu(e,n,t,i,a,o){tT=o,iT=n,fT=null===e?null:e._debugHookTypes,pT=-1,mT=null!==e&&e.type!==n.type,n.memoizedState=null,n.updateQueue=null,n.lanes=0,JR.current=null!==e&&null!==e.memoizedState?kT:null===fT?bT:vT;var d=t(i,a);// Check if there was a render phase update
if(rT){// Keep rendering in a loop for as long as render phase updates continue to
// be scheduled. Use a counter to prevent infinite loops.
var s=0;do{if(rT=!1,sT=0,25<=s)throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");s+=1,// Even when hot reloading, allow dependencies to stabilize
// after first render to prevent infinite render phase updates.
mT=!1,aT=null,oT=null,n.updateQueue=null,// Also validate hook order for cascading updates.
pT=-1,JR.current=ST,d=t(i,a)}while(rT)}// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrance.
JR.current=yT,n._debugHookTypes=fT;// This check uses currentHook so that it works the same in DEV and prod bundles.
// hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.
var u=null!==aT&&null!==aT.next;// This is reset by checkDidRenderIdHook
// localIdCounter = 0;
if(tT=0,iT=null,aT=null,oT=null,cT=null,fT=null,pT=-1,null!==e&&(14680064&e.flags)!=(14680064&n.flags)&&// Disable this warning in legacy mode, because legacy Suspense is weird
// and creates false positives. To make this work in legacy mode, we'd
// need to mark fibers that commit in an incomplete state, somehow. For
// now I'll disable the warning that most of the bugs that would trigger
// it are either exclusive to concurrent mode or exist in both.
0!==(1&e.mode)&&r("Internal React error: Expected static flag was missing. Please notify the React team."),dT=!1,u)throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");return d}function Iu(){// This should be called immediately after every renderWithHooks call.
// Conceptually, it's part of the return value of renderWithHooks; it's only a
// separate function to avoid using an array tuple.
var e=0!==sT;return sT=0,e}function Du(e,n,t){n.updateQueue=e.updateQueue,n.flags&=0===(16&n.mode)?-2053:-50333701,e.lanes=At(e.lanes,t)}function Lu(){if(JR.current=yT,dT){// There were render phase updates. These are only valid for this render
// phase, which we are now aborting. Remove the updates from the queues so
// they do not persist to the next render. Do not remove updates from hooks
// that weren't processed.
//
// Only reset the updates from the queue if it has a clone. If it does
// not have a clone, that means it wasn't processed, and the updates were
// scheduled before we entered the render phase.
for(var e=iT.memoizedState,n;null!==e;)n=e.queue,null!==n&&(n.pending=null),e=e.next;dT=!1}tT=0,iT=null,aT=null,oT=null,fT=null,pT=-1,cT=null,gT=!1,rT=!1,sT=0}function zu(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===oT?iT.memoizedState=oT=e:oT=oT.next=e,oT}function Mu(){// This function is used both for updates and for re-renders triggered by a
// render phase update. It assumes there is either a current hook we can
// clone, or a work-in-progress hook from a previous render pass that we can
// use as a base. When we reach the end of the base list, we must switch to
// the dispatcher used for mounts.
var e;if(null===aT){var n=iT.alternate;e=null===n?null:n.memoizedState}else e=aT.next;var t;if(t=null===oT?iT.memoizedState:oT.next,null!==t)oT=t,t=oT.next,aT=e;else{// Clone from the current hook.
if(null===e)throw new Error("Rendered more hooks than during the previous render.");aT=e;var i={memoizedState:aT.memoizedState,baseState:aT.baseState,baseQueue:aT.baseQueue,queue:aT.queue,next:null};null===oT?iT.memoizedState=oT=i:oT=oT.next=i}return oT}function Uu(){return{lastEffect:null,stores:null}}function Ou(e,n){// $FlowFixMe: Flow doesn't like mixed types
return"function"==typeof n?n(e):n}function Fu(e,n,t){var i=zu(),a;a=void 0===t?n:t(n),i.memoizedState=i.baseState=a;var o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a};i.queue=o;var d=o.dispatch=El.bind(null,iT,o);return[i.memoizedState,d]}function Au(e,n,t){var i=Mu(),a=i.queue;if(null===a)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");a.lastRenderedReducer=e;var o=aT,d=o.baseQueue,s=a.pending;// The last rebase update that is NOT part of the base state.
// The last pending update that hasn't been processed yet.
if(null!==s){// We have new updates that haven't been processed yet.
// We'll add them to the base queue.
if(null!==d){// Merge the pending queue and the base queue.
var u=d.next,l=s.next;d.next=l,s.next=u}o.baseQueue!==d&&r("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),o.baseQueue=d=s,a.pending=null}if(null!==d){// We have a queue to process.
var c=d.next,f=o.baseState,p=null,m=null,h=null,g=c;do{var y=g.lane;if(!Ot(tT,y)){// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
var b={lane:y,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};null===h?(m=h=b,p=f):h=h.next=b,iT.lanes=Ft(iT.lanes,y),nm(y)}else{// This update does have sufficient priority.
if(null!==h){var v={// This update is going to be committed so we never want uncommit
// it. Using NoLane works because 0 is a subset of all bitmasks, so
// this will never be skipped by the check above.
lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};h=h.next=v}// Process this update.
if(g.hasEagerState)f=g.eagerState;else{var k=g.action;f=e(f,k)}}g=g.next}while(null!==g&&g!==c);null===h?p=f:h.next=m,ex(f,i.memoizedState)||af(),i.memoizedState=f,i.baseState=p,i.baseQueue=h,a.lastRenderedState=f}// Interleaved updates are stored on a separate queue. We aren't going to
// process them during this render, but we do need to track which lanes
// are remaining.
var S=a.interleaved;if(null!==S){var w=S;do{var x=w.lane;iT.lanes=Ft(iT.lanes,x),nm(x),w=w.next}while(w!==S)}else null===d&&(// `queue.lanes` is used for entangling transitions. We can set it back to
// zero once the queue is empty.
a.lanes=0);var C=a.dispatch;return[i.memoizedState,C]}function Wu(e,n,t){var i=Mu(),a=i.queue;if(null===a)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");a.lastRenderedReducer=e;// This is a re-render. Apply the new render phase updates to the previous
// work-in-progress hook.
var o=a.dispatch,d=a.pending,r=i.memoizedState;if(null!==d){a.pending=null;var s=d.next,u=s;do{// Process this render phase update. We don't have to check the
// priority because it will always be the same as the current
// render's.
var l=u.action;r=e(r,l),u=u.next}while(u!==s);// Mark that the fiber performed work, but only if the new state is
// different from the current state.
ex(r,i.memoizedState)||af(),i.memoizedState=r,null===i.baseQueue&&(i.baseState=r),a.lastRenderedState=r}return[r,o]}function ju(e,n,t){}function Bu(e,n,t){}function Hu(e,n,t){var i=iT,a=zu(),o=cs(),d;if(o){if(void 0===t)throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");d=t(),nT||d===t()||(r("The result of getServerSnapshot should be cached to avoid an infinite loop"),nT=!0)}else{if(d=n(),!nT){var s=n();ex(d,s)||(r("The result of getSnapshot should be cached to avoid an infinite loop"),nT=!0)}// Unless we're rendering a blocking lane, schedule a consistency check.
// Right before committing, we will walk the tree and check if any of the
// stores were mutated.
//
// We won't do this if we're hydrating server-rendered content, because if
// the content is stale, it's already visible anyway. Instead we'll patch
// it up in a passive effect.
var u=_p();if(null===u)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");Pt(u,tT)||$u(i,n,d)}// Read the current snapshot from the store on every render. This breaks the
// normal rules of React, and only works because store updates are
// always synchronous.
a.memoizedState=d;var l={value:d,getSnapshot:n};return a.queue=l,al(qu.bind(null,i,l,e),[e]),i.flags|=2048,Zu(9,Yu.bind(null,i,l,d,n),void 0,null),d}function Vu(e,n,t){var i=iT,a=Mu(),o=n();// Read the current snapshot from the store on every render. This breaks the
// normal rules of React, and only works because store updates are
// always synchronous.
if(!nT){var d=n();ex(o,d)||(r("The result of getSnapshot should be cached to avoid an infinite loop"),nT=!0)}var s=a.memoizedState,u=!ex(s,o);u&&(a.memoizedState=o,af());var l=a.queue;// Whenever getSnapshot or subscribe changes, we need to check in the
// commit phase if there was an interleaved mutation. In concurrent mode
// this can happen all the time, but even in synchronous mode, an earlier
// effect may have mutated the store.
if(ol(qu.bind(null,i,l,e),[e]),l.getSnapshot!==n||u||// Check if the susbcribe function changed. We can save some memory by
// checking whether we scheduled a subscription effect above.
null!==oT&&1&oT.memoizedState.tag){i.flags|=2048,Zu(9,Yu.bind(null,i,l,o,n),void 0,null);// Unless we're rendering a blocking lane, schedule a consistency check.
// Right before committing, we will walk the tree and check if any of the
// stores were mutated.
var c=_p();if(null===c)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");Pt(c,tT)||$u(i,n,o)}return o}function $u(e,n,t){e.flags|=16384;var i={getSnapshot:n,value:t},a=iT.updateQueue;if(null===a)a=Uu(),iT.updateQueue=a,a.stores=[i];else{var o=a.stores;null===o?a.stores=[i]:o.push(i)}}function Yu(e,n,t,i){// These are updated in the passive phase
n.value=t,n.getSnapshot=i,Ku(n)&&Qu(e)}function qu(e,n,t){var i=function handleStoreChange(){Ku(n)&&Qu(e)};// Subscribe to the store and return a clean-up function.
return t(i)}function Ku(e){var n=e.getSnapshot,t=e.value;try{var i=n();return!ex(t,i)}catch(e){return!0}}function Qu(e){var n=Ns(e,1);null!==n&&Dp(n,e,1,-1)}function Xu(e){var n=zu();"function"==typeof e&&(e=e()),n.memoizedState=n.baseState=e;var t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ou,lastRenderedState:e};n.queue=t;var i=t.dispatch=Nl.bind(null,iT,t);return[n.memoizedState,i]}function Gu(e){return Au(Ou)}function Ju(e){return Wu(Ou)}function Zu(e,n,t,i){var a={tag:e,create:n,destroy:t,deps:i,// Circular
next:null},o=iT.updateQueue;if(null===o)o=Uu(),iT.updateQueue=o,o.lastEffect=a.next=a;else{var d=o.lastEffect;if(null===d)o.lastEffect=a.next=a;else{var r=d.next;d.next=a,a.next=r,o.lastEffect=a}}return a}function el(e){var n=zu();{var t={current:e};return n.memoizedState=t,t}}function nl(e){var n=Mu();return n.memoizedState}function tl(e,n,t,i){var a=zu(),o=i===void 0?null:i;iT.flags|=e,a.memoizedState=Zu(1|n,t,void 0,o)}function il(e,n,t,i){var a=Mu(),o=i===void 0?null:i,d=void 0;if(null!==aT){var r=aT.memoizedState;if(d=r.destroy,null!==o){var s=r.deps;if(Eu(o,s))return void(a.memoizedState=Zu(n,t,d,o))}}iT.flags|=e,a.memoizedState=Zu(1|n,t,d,o)}function al(e,n){return 0==(16&iT.mode)?tl(8390656,8,e,n):tl(41945088,8,e,n)}function ol(e,n){return il(2048,8,e,n)}function dl(e,n){return tl(4,2,e,n)}function rl(e,n){return il(4,2,e,n)}function sl(e,n){var t=4;return t|=4194304,0!=(16&iT.mode)&&(t|=16777216),tl(t,4,e,n)}function ul(e,n){return il(4,4,e,n)}function ll(e,n){if("function"==typeof n){var t=n,i=e();return t(i),function(){t(null)}}if(null!==n&&void 0!==n){var a=n;a.hasOwnProperty("current")||r("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(a).join(", ")+"}");var o=e();return a.current=o,function(){a.current=null}}}function cl(e,n,t){"function"!=typeof n&&r("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",null===n?"null":_typeof(n));// TODO: If deps are provided, should we skip comparing the ref itself?
var i=null!==t&&void 0!==t?t.concat([e]):null,a=4;return a|=4194304,0!=(16&iT.mode)&&(a|=16777216),tl(a,4,ll.bind(null,n,e),i)}function fl(e,n,t){"function"!=typeof n&&r("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",null===n?"null":_typeof(n));// TODO: If deps are provided, should we skip comparing the ref itself?
var i=null!==t&&t!==void 0?t.concat([e]):null;return il(4,4,ll.bind(null,n,e),i)}function pl(e,n){// This hook is normally a no-op.
// The react-debug-hooks package injects its own implementation
// so that e.g. DevTools can display custom hook values.
}function ml(e,n){var t=zu(),i=void 0===n?null:n;return t.memoizedState=[e,i],e}function hl(e,n){var t=Mu(),i=void 0===n?null:n,a=t.memoizedState;if(null!==a&&null!==i){var o=a[1];if(Eu(i,o))return a[0]}return t.memoizedState=[e,i],e}function gl(e,n){var t=zu(),i=void 0===n?null:n,a=e();return t.memoizedState=[a,i],a}function yl(e,n){var t=Mu(),i=void 0===n?null:n,a=t.memoizedState;if(null!==a&&null!==i)// Assume these are defined. If they're not, areHookInputsEqual will warn.
{var o=a[1];if(Eu(i,o))return a[0]}var d=e();return t.memoizedState=[d,i],d}function bl(e){var n=zu();return n.memoizedState=e,e}function vl(e){var n=Mu(),t=aT,i=t.memoizedState;return Sl(n,i,e)}function kl(e){var n=Mu();if(null===aT)return n.memoizedState=e,e;// This is a rerender during an update.
var t=aT.memoizedState;return Sl(n,t,e)}function Sl(e,n,t){var i=!Rt(tT);if(i){// This is an urgent update. If the value has changed, keep using the
// previous value and spawn a deferred render to update it later.
if(!ex(t,n)){// Schedule a deferred render
var a=Nt();iT.lanes=Ft(iT.lanes,a),nm(a),e.baseState=!0}// Reuse the previous value
return n}return e.baseState&&(e.baseState=!1,af()),e.memoizedState=t,t}function wl(e,n,t){var i=Zt();ei(ti(i,4)),e(!0);var a=ZR.transition;ZR.transition={};var o=ZR.transition;ZR.transition._updatedFibers=new Set;try{e(!1),n()}finally{if(ei(i),ZR.transition=a,null===a&&o._updatedFibers){var r=o._updatedFibers.size;10<r&&d("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),o._updatedFibers.clear()}}}function xl(){var e=Xu(!1),n=e[0],t=e[1],i=wl.bind(null,t),a=zu();// The `start` method never changes.
return a.memoizedState=i,[n,i]}function Cl(){var e=Gu(),n=e[0],t=Mu(),i=t.memoizedState;return[n,i]}function Rl(){var e=Ju(),n=e[0],t=Mu(),i=t.memoizedState;return[n,i]}function Tl(){return gT}function Pl(){var e=zu(),n=_p(),t=n.identifierPrefix,i;// TODO: In Fizz, id generation is specific to each server config. Maybe we
// should do this in Fiber, too? Deferring this decision for now because
// there's no other place to store the prefix except for an internal field on
// the public createRoot object, which the fiber tree does not currently have
// a reference to.
if(cs()){var a=Dr();// Use a captial R prefix for server-generated ids.
i=":"+t+"R"+a;// Unless this is the first id at this level, append a number at the end
// that represents the position of this useId hook among all the useId
// hooks for this fiber.
var o=sT++;0<o&&(i+="H"+o.toString(32)),i+=":"}else{// Use a lowercase r prefix for client-generated ids.
var d=uT++;i=":"+t+"r"+d.toString(32)+":"}return e.memoizedState=i,i}function _l(){var e=Mu(),n=e.memoizedState;return n}function El(e,n,t){"function"==typeof arguments[3]&&r("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var i=Np(e),a={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Il(e))Dl(n,a);else{var o=Ps(e,n,a,i);if(null!==o){var d=Ep();Dp(o,e,i,d),Ll(o,n,i)}}zl(e,i)}function Nl(e,n,t){"function"==typeof arguments[3]&&r("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var i=Np(e),a={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Il(e))Dl(n,a);else{var o=e.alternate;if(e.lanes===0&&(null===o||o.lanes===0)){// The queue is currently empty, which means we can eagerly compute the
// next state before entering the render phase. If the new state is the
// same as the current state, we may be able to bail out entirely.
var d=n.lastRenderedReducer;if(null!==d){var s;s=JR.current,JR.current=xT;try{var u=n.lastRenderedState,l=d(u,t);// Stash the eagerly computed state, and the reducer used to compute
// it, on the update object. If the reducer hasn't changed by the
// time we enter the render phase, then the eager state can be used
// without calling the reducer again.
if(a.hasEagerState=!0,a.eagerState=l,ex(l,u))return void _s(e,n,a,i)}catch(e){// Suppress the error. It will throw again in the render phase.
}finally{JR.current=s}}}var c=Ps(e,n,a,i);if(null!==c){var f=Ep();Dp(c,e,i,f),Ll(c,n,i)}}zl(e,i)}function Il(e){var n=e.alternate;return e===iT||null!==n&&n===iT}function Dl(e,n){rT=dT=!0;var t=e.pending;null===t?n.next=n:(n.next=t.next,t.next=n),e.pending=n}// TODO: Move to ReactFiberConcurrentUpdates?
function Ll(e,n,t){if(Et(t)){var i=n.lanes;// If any entangled lanes are no longer pending on the root, then they
// must have finished. We can remove them from the shared queue, which
// represents a superset of the actually pending lanes. In some cases we
// may entangle more than we need to, but that's OK. In fact it's worse if
// we *don't* entangle when we should.
i=Wt(i,e.pendingLanes);// Entangle the new transition lane with the other transition lanes.
var a=Ft(i,t);// Even if queue.lanes already include lane, we don't know for certain if
// the lane finished since the last time we entangled it. So we need to
// entangle it again, just to be sure.
n.lanes=a,Kt(e,a)}}function zl(e,n,t){ft(e,n)}function Ml(){return DT}function Ul(){LT=!0}function Ol(){DT=!1,LT=!1}function Fl(){DT=LT,LT=!1}function Al(){return _T}function Wl(){_T=PT()}function jl(e){NT=PT(),0>e.actualStartTime&&(e.actualStartTime=PT())}function Bl(e){NT=-1}function Hl(e,n){if(0<=NT){var t=PT()-NT;e.actualDuration+=t,n&&(e.selfBaseDuration=t),NT=-1}}function Vl(e){if(0<=ET){var n=PT()-ET;ET=-1;// Store duration on the next nearest Profiler ancestor
// Or the root (for the DevTools Profiler to read)
for(var t=e["return"];null!==t;){switch(t.tag){case 3:var i=t.stateNode;return void(i.effectDuration+=n);case 12:var a=t.stateNode;return void(a.effectDuration+=n)}t=t["return"]}}}function $l(e){if(0<=IT){var n=PT()-IT;IT=-1;// Store duration on the next nearest Profiler ancestor
// Or the root (for the DevTools Profiler to read)
for(var t=e["return"];null!==t;){switch(t.tag){case 3:var i=t.stateNode;return void(null!==i&&(i.passiveEffectDuration+=n));case 12:var a=t.stateNode;return void(null!==a&&(a.passiveEffectDuration+=n))}t=t["return"]}}}function Yl(){ET=PT()}function ql(){IT=PT()}function Kl(e){// Transfer time spent rendering these children so we don't lose it
// after we rerender. This is used as a helper in special cases
// where we should count the work of multiple passes.
for(var n=e.child;n;)e.actualDuration+=n.actualDuration,n=n.sibling}function Ql(e,n){// If the value is an error, call this function immediately after it is thrown
// so the stack is accurate.
return{value:e,source:n,stack:j(n),digest:null}}function Xl(e,n,t){return{value:e,source:null,stack:null==t?null:t,digest:null==n?null:n}}// This module is forked in different environments.
// By default, return `true` to log errors to the console.
// Forks can return `false` if this isn't desirable.
function Gl(e,n){return!0}function Jl(e,n){try{var t=Gl(e,n);// Allow injected showErrorDialog() to prevent default console.error logging.
// This enables renderers like ReactNative to better manage redbox behavior.
if(!1===t)return;var i=n.value;var a=n.source,o=n.stack,d=null===o?"":o;// Browsers support silencing uncaught errors by calling
// `preventDefault()` in window `error` handler.
// We record this information as an expando on the error.
if(null!=i&&i._suppressLogging){if(1===e.tag)// The error is recoverable and was silenced.
// Ignore it and don't print the stack addendum.
// This is handy for testing error boundaries without noise.
return;// The error is fatal. Since the silencing might have
// been accidental, we'll surface it anyway.
// However, the browser would have silenced the original error
// so we'll print it first, and then print the stack addendum.
console.error(i)}var r=a?q(a):null,s=r?"The above error occurred in the <"+r+"> component:":"The above error occurred in one of your React components:",u;if(3===e.tag)u="Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries.";else{var l=q(e)||"Anonymous";u="React will try to recreate this component tree from scratch using the error boundary you provided, "+l+"."}var c=s+"\n"+d+"\n\n"+(""+u);// In development, we provide our own message with just the component stack.
// We don't include the original error message and JS stack because the browser
// has already printed it. Even if the application swallows the error, it is still
// displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
console.error(c)}catch(n){// This method must not throw, or React internal state will get messed up.
// If console.error is overridden, or logCapturedError() shows a dialog that throws,
// we want to report this error outside of the normal stack as a last resort.
// https://github.com/facebook/react/issues/13188
setTimeout(function(){throw n})}}function Zl(e,n,t){var i=zs(-1,t);// Unmount the root by rendering null.
i.tag=3,i.payload={element:null};var a=n.value;return i.callback=function(){b_(a),Jl(e,n)},i}function ec(e,n,t){var i=zs(-1,t);i.tag=3;var a=e.type.getDerivedStateFromError;if("function"==typeof a){var o=n.value;i.payload=function(){return a(o)},i.callback=function(){Vm(e),Jl(e,n)}}var d=e.stateNode;return null!==d&&"function"==typeof d.componentDidCatch&&(i.callback=function t(){Vm(e),Jl(e,n),"function"!=typeof a&&bm(this);var i=n.value,o=n.stack;this.componentDidCatch(i,{componentStack:null===o?"":o}),"function"==typeof a||Ut(e.lanes,1)||r("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",q(e)||"Unknown")}),i}function nc(e,n,t){// Attach a ping listener
//
// The data might resolve before we have a chance to commit the fallback. Or,
// in the case of a refresh, we'll never commit a fallback. So we need to
// attach a listener now. When it resolves ("pings"), we can decide whether to
// try rendering the tree again.
//
// Only attach a listener if one does not already exist for the lanes
// we're currently rendering (which acts like a "thread ID" here).
//
// We only need to do this in concurrent mode. Legacy Suspense always
// commits fallbacks synchronously, so there are no pings.
var i=e.pingCache,a;if(null===i?(i=e.pingCache=new zT,a=new Set,i.set(n,a)):(a=i.get(n),void 0===a&&(a=new Set,i.set(n,a))),!a.has(t)){a.add(t);var o=wm.bind(null,e,n,t);Wk&&Lm(e,t),n.then(o,o)}}function tc(e,n,t,i){// Retry listener
//
// If the fallback does commit, we need to attach a different type of
// listener. This one schedules an update on the Suspense boundary to turn
// the fallback state off.
//
// Stash the wakeable on the boundary fiber so we can access it in the
// commit phase.
//
// When the wakeable resolves, we'll attempt to render the boundary
// again ("retry").
var a=e.updateQueue;if(null===a){var o=new Set;o.add(t),e.updateQueue=o}else a.add(t)}function ic(e,n){// A legacy mode Suspense quirk, only relevant to hook components.
var t=e.tag;if((e.mode&1)===0&&(t===0||t===11||t===15)){var i=e.alternate;i?(e.updateQueue=i.updateQueue,e.memoizedState=i.memoizedState,e.lanes=i.lanes):(e.updateQueue=null,e.memoizedState=null)}}function ac(e){var n=e;do{if(n.tag===13&&ku(n))return n;// This boundary already captured during this render. Continue to the next
// boundary.
n=n["return"]}while(null!==n);return null}function oc(e,n,t,i,a){// This marks a Suspense boundary so that when we're unwinding the stack,
// it captures the suspended "exception" and does a second (fallback) pass.
if(0===(1&e.mode)){// Legacy Mode Suspense
//
// If the boundary is in legacy mode, we should *not*
// suspend the commit. Pretend as if the suspended component rendered
// null and keep rendering. When the Suspense boundary completes,
// we'll do a second pass to render the fallback.
if(e===n)e.flags|=65536;else{if(e.flags|=128,t.flags|=131072,t.flags&=-52805,1===t.tag){var o=t.alternate;if(null===o)t.tag=17;else{// When we try rendering again, we should not reuse the current fiber,
// since it's known to be in an inconsistent state. Use a force update to
// prevent a bail out.
var d=zs(-1,1);d.tag=2,Ms(t,d,1)}}// The source fiber did not complete. Mark it with Sync priority to
// indicate that it still has pending work.
t.lanes=Ft(t.lanes,1)}return e}// Confirmed that the boundary is in a concurrent mode tree. Continue
// with the normal suspend path.
//
// After this we'll use a set of heuristics to determine whether this
// render pass will run to completion or restart or "suspend" the commit.
// The actual logic for this is spread out in different places.
//
// This first principle is that if we're going to suspend when we complete
// a root, then we should also restart if we get an update or ping that
// might unsuspend it, and vice versa. The only reason to suspend is
// because you think you might want to restart before committing. However,
// it doesn't make sense to restart only while in the period we're suspended.
//
// Restarting too aggressively is also not good because it starves out any
// intermediate loading state. So we use heuristics to determine when.
// Suspense Heuristics
//
// If nothing threw a Promise or all the same fallbacks are already showing,
// then don't suspend/restart.
//
// If this is an initial render of a new tree of Suspense boundaries and
// those trigger a fallback, then don't suspend/restart. We want to ensure
// that we can show the initial loading state as quickly as possible.
//
// If we hit a "Delayed" case, such as when we'd switch from content back into
// a fallback, then we should always suspend/restart. Transitions apply
// to this case. If none is defined, JND is used instead.
//
// If we're already showing a fallback and it gets "retried", allowing us to show
// another level, but there's still an inner boundary that would show a fallback,
// then we suspend/restart for 500ms since the last time we showed a fallback
// anywhere in the tree. This effectively throttles progressive loading into a
// consistent train of commits. This also gives us an opportunity to restart to
// get to the completed state slightly earlier.
//
// If there's ambiguity due to batching it's resolved in preference of:
// 1) "delayed", 2) "initial render", 3) "retry".
//
// We want to ensure that a "busy" state doesn't get force committed. We want to
// ensure that new initial loading states can commit as soon as possible.
return e.flags|=65536,e.lanes=a,e}function dc(e,n,t,i,a){if(t.flags|=32768,Wk&&Lm(e,a),null!==i&&"object"===_typeof(i)&&"function"==typeof i.then){// This is a wakeable. The component suspended.
var o=i;ic(t),cs()&&1&t.mode&&Hr();var d=ac(n);if(null!==d)return d.flags&=-257,oc(d,n,t,e,a),1&d.mode&&nc(e,o,a),void tc(d,e,o);// No boundary was found. Unless this is a sync update, this is OK.
// We can suspend and wait for more data to arrive.
if(!wt(a))return nc(e,o,a),void im();// This is a sync/discrete update. We treat this case like an error
// because discrete renders are expected to produce a complete tree
// synchronously to maintain consistency with external state.
var r=new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");// If we're outside a transition, fall through to the regular error path.
// The error will be caught by the nearest suspense boundary.
i=r}else// This is a regular error, not a Suspense wakeable.
if(cs()&&1&t.mode){Hr();var s=ac(n);// If the error was thrown during hydration, we may be able to recover by
// discarding the dehydrated content and switching to a client render.
// Instead of surfacing the error, find the nearest Suspense boundary
// and render it again without hydration.
if(null!==s)return 0===(65536&s.flags)&&(s.flags|=256),oc(s,n,t,e,a),void fs(Ql(i,t))}i=Ql(i,t),am(i);// We didn't find a boundary that could handle this type of exception. Start
// over and traverse parent path again, this time treating the exception
// as an error.
var u=n;do{switch(u.tag){case 3:{var l=i;u.flags|=65536;var c=Lt(a);u.lanes=Ft(u.lanes,c);var f=Zl(u,l,c);return void Os(u,f)}case 1:// Capture and retry
var p=i,m=u.type,h=u.stateNode;if(0===(128&u.flags)&&("function"==typeof m.getDerivedStateFromError||null!==h&&"function"==typeof h.componentDidCatch&&!ym(h))){u.flags|=65536;var g=Lt(a);u.lanes=Ft(u.lanes,g);// Schedule the error boundary to re-render using updated state
var y=ec(u,p,g);return void Os(u,y)}}u=u["return"]}while(null!==u)}function rc(){return null;// This function is called when a Suspense boundary suspends. It returns the
}function sc(e,n,t,i){n.child=null===e?UR(n,null,t,i):MR(n,e.child,t,i)}function uc(e,n,t,i){// This function is fork of reconcileChildren. It's used in cases where we
// want to reconcile without matching against the existing set. This has the
// effect of all current children being unmounted; even if the type and key
// are the same, the old child is unmounted and a new child is created.
//
// To do this, we're going to go through the reconcile algorithm twice. In
// the first pass, we schedule a deletion for all the current children by
// passing null.
// In the second pass, we mount the new children. The trick here is that we
// pass null in place of where we usually pass the current child set. This has
// the effect of remounting all children regardless of whether their
// identities match.
n.child=MR(n,e.child,null,i),n.child=MR(n,null,t,i)}function lc(e,n,t,i,a){// TODO: current can be non-null here even if the component
// hasn't yet mounted. This happens after the first render suspends.
// We'll need to figure out if this is fine or can cause issues.
if(n.type!==n.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var o=t.propTypes;o&&lr(o,i,// Resolved props
"prop",V(t))}var d=t.render,r=n.ref,s,u;// The rest is a fork of updateFunctionComponent
xs(n,a),$n(n);{if(MT.current=n,Z(!0),s=Nu(e,n,d,i,r,a),u=Iu(),8&n.mode){Wn(!0);try{s=Nu(e,n,d,i,r,a),u=Iu()}finally{Wn(!1)}}Z(!1)}return(Yn(),null!==e&&!UT)?(Du(e,n,a),df(e,n,a)):(cs()&&u&&Mr(n),n.flags|=1,sc(e,n,s,a),n.child)}function cc(e,n,t,i,a){if(null===e){var o=t.type;if(Gm(o)&&null===t.compare&&// SimpleMemoComponent codepath doesn't resolve outer props either.
void 0===t.defaultProps){var d=o;return d=Wm(o),n.tag=15,n.type=d,Ec(n,o),fc(e,n,d,i,a)}{var r=o.propTypes;r&&lr(r,i,// Resolved props
"prop",V(o))}var s=th(t.type,null,i,n,n.mode,a);return s.ref=n.ref,s["return"]=n,n.child=s,s}{var u=t.type,l=u.propTypes;l&&lr(l,i,// Resolved props
"prop",V(u))}var c=e.child,f=sf(e,a);// This is always exactly one child
if(!f){// This will be the props with resolved defaultProps,
// unlike current.memoizedProps which will be the unresolved ones.
var p=c.memoizedProps,m=t.compare;// Default to shallow comparison
if(m=null===m?Na:m,m(p,i)&&e.ref===n.ref)return df(e,n,a)}// React DevTools reads this flag.
n.flags|=1;var h=Zm(c,i);return h.ref=n.ref,h["return"]=n,n.child=h,h}function fc(e,n,t,i,a){// TODO: current can be non-null here even if the component
// hasn't yet mounted. This happens when the inner render suspends.
// We'll need to figure out if this is fine or can cause issues.
if(n.type!==n.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var o=n.elementType;if(o.$$typeof===xy){// We warn when you define propTypes on lazy()
// so let's just skip over it to find memo() outer wrapper.
// Inner props for memo are validated later.
var d=o,r=d._payload,s=d._init;try{o=s(r)}catch(e){o=null}// Inner propTypes will be validated in the function component path.
var u=o&&o.propTypes;u&&lr(u,i,// Resolved (SimpleMemoComponent has no defaultProps)
"prop",V(o))}}if(null!==e){var l=e.memoizedProps;if(Na(l,i)&&e.ref===n.ref&&// Prevent bailout if the implementation changed due to hot reload.
n.type===e.type){if(UT=!1,n.pendingProps=i=l,!sf(e,a))return n.lanes=e.lanes,df(e,n,a);0!==(131072&e.flags)&&(// This is a special case that only exists for legacy mode.
// See https://github.com/facebook/react/pull/19216.
UT=!0)}}return bc(e,n,t,i,a)}function pc(e,n,t){var i=n.pendingProps,a=i.children,o=null===e?null:e.memoizedState;if("hidden"!==i.mode&&1){// Rendering a visible tree.
var d;null===o?d=t:(d=Ft(o.baseLanes,t),n.memoizedState=null),Kp(n,d)}else// Rendering a hidden tree.
if(0===(1&n.mode)){// In legacy sync mode, don't defer the subtree. Render it now.
// TODO: Consider how Offscreen should work with transitions in the future
var r={baseLanes:0,cachePool:null,transitions:null};n.memoizedState=r,Kp(n,t)}else{if(!Ut(t,1073741824)){var s=null,u;// We're hidden, and we're not rendering at Offscreen. We will bail out
// and resume this tree later.
if(null!==o){var l=o.baseLanes;u=Ft(l,t)}else u=t;// Schedule this fiber to re-render at offscreen priority. Then bailout.
n.lanes=n.childLanes=jt(1073741824);var c={baseLanes:u,cachePool:s,transitions:null};return n.memoizedState=c,n.updateQueue=null,Kp(n,u),null}// This is the second render. The surrounding visible content has already
// committed. Now we resume rendering the hidden tree.
// Rendering at offscreen, so we can clear the base lanes.
var f={baseLanes:0,cachePool:null,transitions:null};n.memoizedState=f;// Push the lanes that were skipped when we bailed out.
var p=null===o?t:o.baseLanes;Kp(n,p)}return sc(e,n,a,t),n.child}// Note: These happen to have identical begin phases, for now. We shouldn't hold
function mc(e,n,t){var i=n.pendingProps;return sc(e,n,i,t),n.child}function hc(e,n,t){var i=n.pendingProps.children;return sc(e,n,i,t),n.child}function gc(e,n,t){{n.flags|=4;{// Reset effect durations for the next eventual effect phase.
// These are reset during render to allow the DevTools commit hook a chance to read them,
var i=n.stateNode;i.effectDuration=0,i.passiveEffectDuration=0}}var a=n.pendingProps,o=a.children;return sc(e,n,o,t),n.child}function yc(e,n){var t=n.ref;(null===e&&null!==t||null!==e&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function bc(e,n,t,i,a){if(n.type!==n.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var o=t.propTypes;o&&lr(o,i,// Resolved props
"prop",V(t))}var d;{var r=mr(n,t,!0);d=gr(n,r)}var s,u;xs(n,a),$n(n);{if(MT.current=n,Z(!0),s=Nu(e,n,t,i,d,a),u=Iu(),8&n.mode){Wn(!0);try{s=Nu(e,n,t,i,d,a),u=Iu()}finally{Wn(!1)}}Z(!1)}return(Yn(),null!==e&&!UT)?(Du(e,n,a),df(e,n,a)):(cs()&&u&&Mr(n),n.flags|=1,sc(e,n,s,a),n.child)}function vc(e,n,t,i,a){{// This is used by DevTools to force a boundary to error.
switch(Eh(n)){case!1:{var o=n.stateNode,d=n.type,s=new d(n.memoizedProps,o.context),u=s.state;// TODO This way of resetting the error boundary state is a hack.
// Is there a better way to do this?
o.updater.enqueueSetState(o,u,null);break}case!0:{n.flags|=128,n.flags|=65536;// eslint-disable-next-line react-internal/prod-error-codes
var l=new Error("Simulated error coming from DevTools"),c=Lt(a);n.lanes=Ft(n.lanes,c);// Schedule the error boundary to re-render using updated state
var f=ec(n,Ql(l,n),c);Os(n,f);break}}if(n.type!==n.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var p=t.propTypes;p&&lr(p,i,// Resolved props
"prop",V(t))}}// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var m;br(t)?(m=!0,xr(n)):m=!1,xs(n,a);var h=n.stateNode,g;null===h?(of(e,n),Ks(n,t,i),Gs(n,t,i,a),g=!0):null===e?g=Js(n,t,i,a):g=Zs(e,n,t,i,a);var y=kc(e,n,t,g,m,a);{var b=n.stateNode;g&&b.props!==i&&(!BT&&r("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",q(n)||"a component"),BT=!0)}return y}function kc(e,n,t,i,a,o){yc(e,n);var d=0!==(128&n.flags);if(!i&&!d)return a&&Cr(n,t,!1),df(e,n,o);var r=n.stateNode;// Rerender
MT.current=n;var s;if(d&&"function"!=typeof t.getDerivedStateFromError)s=null,Bl();else{$n(n);{if(Z(!0),s=r.render(),8&n.mode){Wn(!0);try{r.render()}finally{Wn(!1)}}Z(!1)}Yn()}// React DevTools reads this flag.
return n.flags|=1,null!==e&&d?uc(e,n,s,o):sc(e,n,s,o),n.memoizedState=r.state,a&&Cr(n,t,!0),n.child}function Sc(e){var n=e.stateNode;n.pendingContext?Sr(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Sr(e,n.context,!1),uu(e,n.containerInfo)}function wc(e,n,t){if(Sc(n),null===e)throw new Error("Should have a current fiber. This is a bug in React.");var i=n.pendingProps,a=n.memoizedState,o=a.element;Ls(e,n),As(n,i,null,t);var d=n.memoizedState,r=n.stateNode,s=d.element;// being called "element".
if(a.isDehydrated){// This is a hydration root whose shell has not yet hydrated. We should
// attempt to hydrate.
// Flip isDehydrated to false to indicate that when this render
// finishes, the root will no longer be dehydrated.
var u={element:s,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},l=n.updateQueue;// `baseState` can always be the last state because the root doesn't
// have reducer functions so it doesn't need rebasing.
if(l.baseState=u,n.memoizedState=u,256&n.flags){// Something errored during a previous attempt to hydrate the shell, so we
// forced a client render.
var c=Ql(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."),n);return xc(e,n,s,t,c)}if(s!==o){var f=Ql(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),n);return xc(e,n,s,t,f)}$r(n);var p=UR(n,null,s,t);n.child=p;for(var m=p;m;)// Mark each child as hydrating. This is a fast path to know whether this
// tree is part of a hydrating tree. This is used to determine if a child
// node has fully mounted yet, and for scheduling event replaying.
// Conceptually this is similar to Placement in that a new subtree is
// inserted into the React tree here. It just happens to not need DOM
// mutations because it already exists.
m.flags=4096|-3&m.flags,m=m.sibling}else{if(us(),s===o)return df(e,n,t);sc(e,n,s,t)}return n.child}function xc(e,n,t,i,a){return us(),fs(a),n.flags|=256,sc(e,n,t,i),n.child}function Cc(e,n,t){fu(n),null===e&&es(n);var i=n.type,a=n.pendingProps,o=null===e?null:e.memoizedProps,d=a.children,r=Jo(i,a);return r?d=null:null!==o&&Jo(i,o)&&(n.flags|=32),yc(e,n),sc(e,n,d,t),n.child}function Rc(e,n){// Nothing to do here. This is terminal. We'll do the completion step
// immediately after.
return null===e&&es(n),null}function Tc(e,n,t,i){of(e,n);var a=n.pendingProps,o=t,d=o._payload,r=o._init,s=r(d);n.type=s;var u=n.tag=Jm(s),l=ms(s,a),c;switch(u){case 0:return Ec(n,s),n.type=s=Wm(s),c=bc(null,n,s,l,i),c;case 1:return n.type=s=jm(s),c=vc(null,n,s,l,i),c;case 11:return n.type=s=Bm(s),c=lc(null,n,s,l,i),c;case 14:{if(n.type!==n.elementType){var f=s.propTypes;f&&lr(f,l,// Resolved for outer only
"prop",V(s))}return c=cc(null,n,s,ms(s.type,l),// The inner type can have defaults too
i),c}}var p="";// This message intentionally doesn't mention ForwardRef or MemoComponent
// because the fact that it's a separate type of work is an
// implementation detail.
throw null!==s&&"object"===_typeof(s)&&s.$$typeof===xy&&(p=" Did you wrap a component in React.lazy() more than once?"),new Error("Element type is invalid. Received a promise that resolves to: "+s+". "+("Lazy element type must resolve to a class or function."+p))}function Pc(e,n,t,i,a){of(e,n),n.tag=1;// The rest of this function is a fork of `updateClassComponent`
// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var o;return br(t)?(o=!0,xr(n)):o=!1,xs(n,a),Ks(n,t,i),Gs(n,t,i,a),kc(null,n,t,!0,o,a)}function _c(e,n,t,i){of(e,n);var a=n.pendingProps,o;{var d=mr(n,t,!1);o=gr(n,d)}xs(n,i);var s,u;$n(n);{if(t.prototype&&"function"==typeof t.prototype.render){var l=V(t)||"Unknown";OT[l]||(r("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",l,l),OT[l]=!0)}8&n.mode&&BC.recordLegacyContextWarning(n,null),Z(!0),MT.current=n,s=Nu(null,n,t,a,o,i),u=Iu(),Z(!1)}// Support for module components is deprecated and is removed behind a flag.
// Whether or not it would crash later, we want to show a good message in DEV first.
if(Yn(),n.flags|=1,"object"===_typeof(s)&&null!==s&&"function"==typeof s.render&&void 0===s.$$typeof){var c=V(t)||"Unknown";FT[c]||(r("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",c,c,c),FT[c]=!0)}if(// Run these checks in production only if the flag is off.
// Eventually we'll delete this branch altogether.
"object"===_typeof(s)&&null!==s&&"function"==typeof s.render&&void 0===s.$$typeof){{var f=V(t)||"Unknown";FT[f]||(r("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",f,f,f),FT[f]=!0)}// Proceed under the assumption that this is a class instance
n.tag=1,n.memoizedState=null,n.updateQueue=null;// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var p=!1;return br(t)?(p=!0,xr(n)):p=!1,n.memoizedState=null!==s.state&&void 0!==s.state?s.state:null,Ds(n),qs(n,s),Gs(n,t,a,i),kc(null,n,t,!0,p,i)}if(n.tag=0,8&n.mode){Wn(!0);try{s=Nu(null,n,t,a,o,i),u=Iu()}finally{Wn(!1)}}return cs()&&u&&Mr(n),sc(null,n,s,i),Ec(n,t),n.child}function Ec(e,n){{if(n&&n.childContextTypes&&r("%s(...): childContextTypes cannot be defined on a function component.",n.displayName||n.name||"Component"),null!==e.ref){var t="",i=K();i&&(t+="\n\nCheck the render method of `"+i+"`.");var a=i||"",o=e._debugSource;o&&(a=o.fileName+":"+o.lineNumber),jT[a]||(jT[a]=!0,r("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",t))}if("function"==typeof n.getDerivedStateFromProps){var d=V(n)||"Unknown";WT[d]||(r("%s: Function components do not support getDerivedStateFromProps.",d),WT[d]=!0)}if("object"===_typeof(n.contextType)&&null!==n.contextType){var s=V(n)||"Unknown";AT[s]||(r("%s: Function components do not support contextType.",s),AT[s]=!0)}}}function Nc(e){return{baseLanes:e,cachePool:rc(),transitions:null}}function Ic(e,n){var t=null;return{baseLanes:Ft(e.baseLanes,n),cachePool:t,transitions:e.transitions}}// TODO: Probably should inline this back
function Dc(e,n,t,i){// If we're already showing a fallback, there are cases where we need to
// remain on that fallback regardless of whether the content has resolved.
// For example, SuspenseList coordinates when nested content appears.
if(null!==n){var a=n.memoizedState;if(null===a)// Currently showing content. Don't hide it, even if ForceSuspenseFallback
// is true. More precise name might be "ForceRemainSuspenseFallback".
// Note: This is a factoring smell. Can't remain on a fallback if there's
// no fallback to remain on.
return!1}// Not currently showing content. Consult the Suspense context.
return mu(e,2)}function Lc(e,n){// TODO: Should not remove render lanes that were pinged during this render
return At(e.childLanes,n)}function zc(e,n,t){var i=n.pendingProps;// This is used by DevTools to force a boundary to suspend.
Nh(n)&&(n.flags|=128);var a=$R.current,o=!1,d=0!==(128&n.flags);// OK, the next part is confusing. We're about to reconcile the Suspense
// boundary's children. This involves some custom reconciliation logic. Two
// main reasons this is so complicated.
//
// First, Legacy Mode has different semantics for backwards compatibility. The
// primary tree will commit in an inconsistent state, so when we do the
// second pass to render the fallback, we do some exceedingly, uh, clever
// hacks to make that not totally break. Like transferring effects and
// deletions from hidden tree. In Concurrent Mode, it's much simpler,
// because we bailout on the primary tree completely and leave it in its old
// state, no effects. Same as what we do for Offscreen (except that
// Offscreen doesn't have the first render pass).
//
// Second is hydration. During hydration, the Suspense fiber has a slightly
// different layout, where the child points to a dehydrated fragment, which
// contains the DOM rendered by the server.
//
// Third, even if you set all that aside, Suspense is like error boundaries in
// that we first we try to render one tree, and if that fails, we render again
// and switch to a different tree. Like a try/catch block. So we have to track
// which branch we're currently rendering. Ideally we would model this using
// a stack.
if(d||Dc(a,e)?(o=!0,n.flags&=-129):(null===e||null!==e.memoizedState)&&(a=yu(a,1)),a=hu(a),bu(n,a),null===e){es(n);// This could've been a dehydrated suspense component.
var r=n.memoizedState;if(null!==r){var s=r.dehydrated;if(null!==s)return Hc(n,s)}var u=i.children,l=i.fallback;if(o){var c=Uc(n,u,l,t),f=n.child;return f.memoizedState=Nc(t),n.memoizedState=$T,c}return Mc(n,u)}// This is an update.
// Special path for hydration
var p=e.memoizedState;if(null!==p){var m=p.dehydrated;if(null!==m)return Vc(e,n,d,i,m,p,t)}if(o){var h=i.fallback,g=i.children,y=Wc(e,n,g,h,t),b=n.child,v=e.child.memoizedState;return b.memoizedState=null===v?Nc(t):Ic(v,t),b.childLanes=Lc(e,t),n.memoizedState=$T,y}var k=i.children,S=Ac(e,n,k,t);return n.memoizedState=null,S}function Mc(e,n,t){var i=e.mode,a={mode:"visible",children:n},o=Oc(a,i);return o["return"]=e,e.child=o,o}function Uc(e,n,t,i){var a=e.mode,o=e.child,d={mode:"hidden",children:n},r,s;return 0===(1&a)&&null!==o?(r=o,r.childLanes=0,r.pendingProps=d,2&e.mode&&(r.actualDuration=0,r.actualStartTime=-1,r.selfBaseDuration=0,r.treeBaseDuration=0),s=ah(t,a,i,null)):(r=Oc(d,a),s=ah(t,a,i,null)),r["return"]=e,s["return"]=e,r.sibling=s,e.child=r,s}function Oc(e,n,t){// The props argument to `createFiberFromOffscreen` is `any` typed, so we use
// this wrapper function to constrain it.
return sh(e,n,0,null)}function Fc(e,n){// The props argument to `createWorkInProgress` is `any` typed, so we use this
// wrapper function to constrain it.
return Zm(e,n)}function Ac(e,n,t,i){var a=e.child,o=a.sibling,d=Fc(a,{mode:"visible",children:t});if(0===(1&n.mode)&&(d.lanes=i),d["return"]=n,d.sibling=null,null!==o){// Delete the fallback child fragment
var r=n.deletions;null===r?(n.deletions=[o],n.flags|=16):r.push(o)}return n.child=d,d}function Wc(e,n,t,i,a){var o=n.mode,d=e.child,r=d.sibling,s={mode:"hidden",children:t},u;if(// In legacy mode, we commit the primary tree as if it successfully
// completed, even though it's in an inconsistent state.
0===(1&o)&&// Make sure we're on the second pass, i.e. the primary child fragment was
// already cloned. In legacy mode, the only case where this isn't true is
// when DevTools forces us to display a fallback; we skip the first render
// pass entirely and go straight to rendering the fallback. (In Concurrent
// Mode, SuspenseList can also trigger this scenario, but this is a legacy-
// only codepath.)
n.child!==d){var l=n.child;u=l,u.childLanes=0,u.pendingProps=s,2&n.mode&&(u.actualDuration=0,u.actualStartTime=-1,u.selfBaseDuration=d.selfBaseDuration,u.treeBaseDuration=d.treeBaseDuration),n.deletions=null}else// Since we're reusing a current tree, we need to reuse the flags, too.
// (We don't do this in legacy mode, because in legacy mode we don't re-use
// the current tree; see previous branch.)
u=Fc(d,s),u.subtreeFlags=14680064&d.subtreeFlags;var c;return null===r?(c=ah(i,o,a,null),c.flags|=2):c=Zm(r,i),c["return"]=n,u["return"]=n,u.sibling=c,n.child=u,c}function jc(e,n,t,i){null!==i&&fs(i),MR(n,e.child,null,t);// We're now not suspended nor dehydrated.
var a=n.pendingProps,o=a.children,d=Mc(n,o);// Needs a placement effect because the parent (the Suspense boundary) already
// mounted but this is a new fiber.
return d.flags|=2,n.memoizedState=null,d}function Bc(e,n,t,i,a){var o=n.mode,d={mode:"visible",children:t},r=Oc(d,o),s=ah(i,o,a,null);// Needs a placement effect because the parent (the Suspense
// boundary) already mounted but this is a new fiber.
return s.flags|=2,r["return"]=n,s["return"]=n,r.sibling=s,n.child=r,0!==(1&n.mode)&&MR(n,e.child,null,a),s}function Hc(e,n,t){return 0===(1&e.mode)?(r("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."),e.lanes=jt(1)):xd(n)?e.lanes=jt(8):e.lanes=jt(1073741824),null}function Vc(e,n,t,i,a,o,d){if(!t){if(Br(),0===(1&n.mode))return jc(e,n,d,// TODO: When we delete legacy mode, we should make this error argument
// required — every concurrent mode path that causes hydration to
// de-opt to client rendering should have an error message.
null);if(xd(a)){// This boundary is in a permanent fallback state. In this case, we'll never
// get an update and we'll never be able to hydrate the final content. Let's just try the
// client side render instead.
var r,s,u;{var l=Cd(a);r=l.digest,s=l.message,u=l.stack}var c;c=s?new Error(s):new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");var f=Xl(c,r,u);return jc(e,n,d,f)}// any context has changed, we need to treat is as if the input might have changed.
var p=Ut(d,e.childLanes);if(UT||p){// This boundary has changed since the first render. This means that we are now unable to
// hydrate it. We might still be able to hydrate it using a higher priority lane.
var m=_p();if(null!==m){var h=Qt(m,d);if(0!==h&&h!==o.retryLane){o.retryLane=h;// TODO: Ideally this would inherit the event time of the current render
var g=-1;Ns(e,h),Dp(m,e,h,-1)}}// If we have scheduled higher pri work above, this will probably just abort the render
// since we now have higher priority work, but in case it doesn't, we need to prepare to
// render something, if we time out. Even if that requires us to delete everything and
// skip hydration.
// Delay having to do this as long as the suspense timeout allows us.
im();var y=Xl(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));return jc(e,n,d,y)}if(wd(a)){n.flags|=128,n.child=e.child;// Register a callback to retry this boundary once the server has sent the result.
var b=Cm.bind(null,e);return Rd(a,b),null}Yr(n,a,o.treeContext);var v=i.children,k=Mc(n,v);// Mark the children as hydrating. This is a fast path to know whether this
// tree is part of a hydrating tree. This is used to determine if a child
// node has fully mounted yet, and for scheduling event replaying.
// Conceptually this is similar to Placement in that a new subtree is
// inserted into the React tree here. It just happens to not need DOM
// mutations because it already exists.
return k.flags|=4096,k}// This is the second render pass. We already attempted to hydrated, but
// something either suspended or errored.
if(256&n.flags){n.flags&=-257;var S=Xl(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));return jc(e,n,d,S)}if(null!==n.memoizedState)return n.child=e.child,n.flags|=128,null;// Suspended but we should no longer be in dehydrated mode.
// Therefore we now have to render the fallback.
var w=i.children,x=i.fallback,C=Bc(e,n,w,x,d),R=n.child;return R.memoizedState=Nc(d),n.memoizedState=$T,C}function $c(e,n,t){e.lanes=Ft(e.lanes,n);var i=e.alternate;null!==i&&(i.lanes=Ft(i.lanes,n)),ks(e["return"],n,t)}function Yc(e,n,t){// Mark any Suspense boundaries with fallbacks as having work to do.
// If they were previously forced into fallbacks, they may now be able
// to unblock.
for(var i=n;null!==i;){if(i.tag===13){var a=i.memoizedState;null!==a&&$c(i,t,e)}else if(i.tag===19)// If the tail is hidden there might not be an Suspense boundaries
// to schedule work on. In this case we have to schedule it on the
// list itself.
// We don't have to traverse to the children of the list since
// the list will propagate the change when it rerenders.
$c(i,t,e);else if(null!==i.child){i.child["return"]=i,i=i.child;continue}if(i===e)return;for(;null===i.sibling;){if(null===i["return"]||i["return"]===e)return;i=i["return"]}i.sibling["return"]=i["return"],i=i.sibling}}function qc(e){// This is going to find the last row among these children that is already
// showing content on the screen, as opposed to being in fallback state or
// new. If a row has multiple Suspense boundaries, any of them being in the
// fallback state, counts as the whole row being in a fallback state.
// Note that the "rows" will be workInProgress, but any nested children
// will still be current since we haven't rendered them yet. The mounted
// order may not be the same as the new order. We use the new order.
for(var n=e,t=null;null!==n;){var i=n.alternate;// New rows can't be content rows.
null!==i&&null===Su(i)&&(t=n),n=n.sibling}return t}function Kc(e){if(void 0!==e&&"forwards"!==e&&"backwards"!==e&&"together"!==e&&!HT[e])if(HT[e]=!0,"string"==typeof e)switch(e.toLowerCase()){case"together":case"forwards":case"backwards":{r("\"%s\" is not a valid value for revealOrder on <SuspenseList />. Use lowercase \"%s\" instead.",e,e.toLowerCase());break}case"forward":case"backward":{r("\"%s\" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use \"%ss\" instead.",e,e.toLowerCase());break}default:r("\"%s\" is not a supported revealOrder on <SuspenseList />. Did you mean \"together\", \"forwards\" or \"backwards\"?",e)}else r("%s is not a supported value for revealOrder on <SuspenseList />. Did you mean \"together\", \"forwards\" or \"backwards\"?",e)}function Qc(e,n){e===void 0||VT[e]||("collapsed"!==e&&"hidden"!==e?(VT[e]=!0,r("\"%s\" is not a supported value for tail on <SuspenseList />. Did you mean \"collapsed\" or \"hidden\"?",e)):"forwards"!==n&&"backwards"!==n&&(VT[e]=!0,r("<SuspenseList tail=\"%s\" /> is only valid if revealOrder is \"forwards\" or \"backwards\". Did you mean to specify revealOrder=\"forwards\"?",e)))}function Xc(e,n){{var t=we(e),i=!t&&"function"==typeof N(e);if(t||i){var a=t?"array":"iterable";return r("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",a,n,a),!1}}return!0}function Gc(e,n){if(("forwards"===n||"backwards"===n)&&void 0!==e&&null!==e&&!1!==e)if(we(e)){for(var t=0;t<e.length;t++)if(!Xc(e[t],t))return;}else{var a=N(e);if("function"==typeof a){var o=a.call(e);if(o)for(var d=o.next(),s=0;!d.done;d=o.next()){if(!Xc(d.value,s))return;s++}}else r("A single row was passed to a <SuspenseList revealOrder=\"%s\" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?",n)}}function Jc(e,n,t,i,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=a)}// This can end up rendering this component multiple passes.
// The first pass splits the children fibers into two sets. A head and tail.
// We first render the head. If anything is in fallback state, we do another
// pass through beginWork to rerender all children (including the tail) with
// the force suspend context. If the first render didn't have anything in
// in fallback state. Then we render each row in the tail one-by-one.
// That happens in the completeWork phase without going back to beginWork.
function Zc(e,n,t){var i=n.pendingProps,a=i.revealOrder,o=i.tail,d=i.children;Kc(a),Qc(o,a),Gc(d,a),sc(e,n,d,t);var r=$R.current,s=mu(r,2);if(s)r=gu(r,2),n.flags|=128;else{var u=null!==e&&0!==(128&e.flags);u&&Yc(n,n.child,t),r=hu(r)}if(bu(n,r),0===(1&n.mode))n.memoizedState=null;else switch(a){case"forwards":{var l=qc(n.child),c;null===l?(c=n.child,n.child=null):(c=l.sibling,l.sibling=null),Jc(n,!1,// isBackwards
c,l,o);break}case"backwards":{// We're going to find the first row that has existing content.
// At the same time we're going to reverse the list of everything
// we pass in the meantime. That's going to be our tail in reverse
// order.
var f=null,p=n.child;for(n.child=null;null!==p;){var m=p.alternate;// New rows can't be content rows.
if(null!==m&&null===Su(m)){n.child=p;break}var h=p.sibling;p.sibling=f,f=p,p=h}// TODO: If workInProgress.child is null, we can continue on the tail immediately.
Jc(n,!0,// isBackwards
f,null,// last
o);break}case"together":{Jc(n,!1,// isBackwards
null,// tail
null,void 0);break}default:n.memoizedState=null}return n.child}function ef(e,n,t){uu(n,n.stateNode.containerInfo);var i=n.pendingProps;return null===e?n.child=MR(n,null,i,t):sc(e,n,i,t),n.child}function nf(e,n,t){var i=n.type,a=i._context,o=n.pendingProps,d=n.memoizedProps,s=o.value;{"value"in o||YT||(YT=!0,r("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));var u=n.type.propTypes;u&&lr(u,o,"prop","Context.Provider")}if(bs(n,a,s),null!==d){var l=d.value;if(!ex(l,s))Ss(n,a,t);else// No change. Bailout early if children are the same.
if(d.children===o.children&&!yr())return df(e,n,t)}var c=o.children;return sc(e,n,c,t),n.child}function tf(e,n,t){var i=n.type;// The logic below for Context differs depending on PROD or DEV mode. In
// DEV mode, we create a separate object for Context.Consumer that acts
// like a proxy to Context. This proxy object adds unnecessary code in PROD
// so we use the old behaviour (Context.Consumer references Context) to
// reduce size and overhead. The separate object references context via
// a property called "_context", which also gives us the ability to check
// in DEV mode if this property exists or not and warn if it does not.
void 0===i._context?i!==i.Consumer&&!qT&&(qT=!0,r("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")):i=i._context;var a=n.pendingProps,o=a.children;"function"!=typeof o&&r("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),xs(n,t);var d=Cs(i);$n(n);var s;return MT.current=n,Z(!0),s=o(d),Z(!1),Yn(),n.flags|=1,sc(e,n,s,t),n.child}function af(){UT=!0}function of(e,n){(n.mode&1)===0&&null!==e&&(e.alternate=null,n.alternate=null,n.flags|=2)}function df(e,n,t){// Check if the children have any pending work.
return(null!==e&&(n.dependencies=e.dependencies),// Don't update "base" render times for bailouts.
Bl(),nm(n.lanes),!Ut(t,n.childLanes))?null:(ou(e,n),n.child);// This fiber doesn't have work, but its subtree does. Clone the child
// fibers and continue.
}function rf(e,n,t){{var i=n["return"];if(null===i)// eslint-disable-next-line react-internal/prod-error-codes
throw new Error("Cannot swap the root fiber.");// Disconnect from the old current.
// It will get deleted.
// Replace the child/sibling pointers above it.
if(e.alternate=null,n.alternate=null,t.index=n.index,t.sibling=n.sibling,t["return"]=n["return"],t.ref=n.ref,n===i.child)i.child=t;else{var a=i.child;if(null===a)// eslint-disable-next-line react-internal/prod-error-codes
throw new Error("Expected parent to have a child.");for(;a.sibling!==n;)if(a=a.sibling,null===a)// eslint-disable-next-line react-internal/prod-error-codes
throw new Error("Expected to find the previous sibling.");a.sibling=t}// Delete the old fiber and place the new one.
// Since the old fiber is disconnected, we have to schedule it manually.
var o=i.deletions;// Restart work from the new fiber.
return null===o?(i.deletions=[e],i.flags|=16):o.push(e),t.flags|=2,t}}function sf(e,n){// Before performing an early bailout, we must check if there are pending
// updates or context.
var t=e.lanes;return!!Ut(t,n);// No pending update, but because context is propagated lazily, we need
}function uf(e,n,t){// This fiber does not have any pending work. Bailout without entering
// the begin phase. There's still some bookkeeping we that needs to be done
// in this optimized path, mostly pushing stuff onto the stack.
switch(n.tag){case 3:Sc(n);var i=n.stateNode;us();break;case 5:fu(n);break;case 1:{var a=n.type;br(a)&&xr(n);break}case 4:uu(n,n.stateNode.containerInfo);break;case 10:{var o=n.memoizedProps.value,d=n.type._context;bs(n,d,o);break}case 12:{// Profiler should only call onRender when one of its descendants actually rendered.
var r=Ut(t,n.childLanes);r&&(n.flags|=4);{// Reset effect durations for the next eventual effect phase.
// These are reset during render to allow the DevTools commit hook a chance to read them,
var s=n.stateNode;s.effectDuration=0,s.passiveEffectDuration=0}}break;case 13:{var u=n.memoizedState;if(null!==u){if(null!==u.dehydrated)// We should never render the children of a dehydrated boundary until we
// upgrade it. We return null instead of bailoutOnAlreadyFinishedWork.
return bu(n,hu($R.current)),n.flags|=128,null;// If this boundary is currently timed out, we need to decide
// whether to retry the primary children, or to skip over it and
// go straight to the fallback. Check the priority of the primary
// child fragment.
var l=n.child,c=l.childLanes;if(Ut(t,c))// The primary children have pending work. Use the normal path
// to attempt to render the primary children again.
return zc(e,n,t);bu(n,hu($R.current));// The primary children do not have pending work with sufficient
// priority. Bailout.
var f=df(e,n,t);return null===f?null:f.sibling}bu(n,hu($R.current));break}case 19:{var p=(e.flags&128)!==0,m=Ut(t,n.childLanes);if(p){if(m)// If something was in fallback state last time, and we have all the
// same children then we're still in progressive loading state.
// Something might get unblocked by state updates or retries in the
// tree which will affect the tail. So we need to use the normal
// path to compute the correct tail.
return Zc(e,n,t);// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
n.flags|=128}// If nothing suspended before and we're rendering the same children,
// then the tail doesn't matter. Anything new that suspends will work
// in the "together" mode, so we can continue from the state we had.
var h=n.memoizedState;if(null!==h&&(h.rendering=null,h.tail=null,h.lastEffect=null),bu(n,$R.current),m)break;else// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
return null}case 22:case 23:return n.lanes=0,pc(e,n,t)}return df(e,n,t)}function lf(e,n,t){if(n._debugNeedsRemount&&null!==e)// This will restart the begin phase with a new fiber.
return rf(e,n,th(n.type,n.key,n.pendingProps,n._debugOwner||null,n.mode,n.lanes));if(null!==e){var i=e.memoizedProps,a=n.pendingProps;if(i!==a||yr()||// Force a re-render if the implementation changed due to hot reload:
n.type!==e.type)UT=!0;else{// Neither props nor legacy context changes. Check if there's a pending
// update or context change.
var o=sf(e,t);if(!o&&// If this is the second pass of an error or suspense boundary, there
// may not be work scheduled on `current`, so we check for this flag.
0===(128&n.flags))return UT=!1,uf(e,n,t);UT=0!==(131072&e.flags)}}else if(UT=!1,cs()&&Nr(n)){// Check if this child belongs to a list of muliple children in
// its parent.
//
// In a true multi-threaded implementation, we would render children on
// parallel threads. This would represent the beginning of a new render
// thread for this subtree.
//
// We only use this for id generation during hydration, which is why the
// logic is located in this special branch.
var d=n.index,r=Ir();zr(n,r,d)}// Before entering the begin phase, clear pending update priority.
// TODO: This assumes that we're about to evaluate the component and process
// the update queue. However, there's an exception: SimpleMemoComponent
// sometimes bails out later in the begin phase. This indicates that we should
// move this assignment out of the common path and into each branch.
switch(n.lanes=0,n.tag){case 2:return _c(e,n,n.type,t);case 16:{var s=n.elementType;return Tc(e,n,s,t)}case 0:{var u=n.type,l=n.pendingProps,c=n.elementType===u?l:ms(u,l);return bc(e,n,u,c,t)}case 1:{var f=n.type,p=n.pendingProps,m=n.elementType===f?p:ms(f,p);return vc(e,n,f,m,t)}case 3:return wc(e,n,t);case 5:return Cc(e,n,t);case 6:return Rc(e,n);case 13:return zc(e,n,t);case 4:return ef(e,n,t);case 11:{var h=n.type,g=n.pendingProps,y=n.elementType===h?g:ms(h,g);return lc(e,n,h,y,t)}case 7:return mc(e,n,t);case 8:return hc(e,n,t);case 12:return gc(e,n,t);case 10:return nf(e,n,t);case 9:return tf(e,n,t);case 14:{var b=n.type,v=n.pendingProps,k=ms(b,v);// Resolve outer props first, then resolve inner props.
if(n.type!==n.elementType){var S=b.propTypes;S&&lr(S,k,// Resolved for outer only
"prop",V(b))}return k=ms(b.type,k),cc(e,n,b,k,t)}case 15:return fc(e,n,n.type,n.pendingProps,t);case 17:{var w=n.type,x=n.pendingProps,C=n.elementType===w?x:ms(w,x);return Pc(e,n,w,C,t)}case 19:return Zc(e,n,t);case 21:break;case 22:return pc(e,n,t)}throw new Error("Unknown unit of work tag ("+n.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function cf(e){// Tag the fiber with an update effect. This turns a Placement into
// a PlacementAndUpdate.
e.flags|=4}function ff(e){e.flags|=512,e.flags|=2097152}function pf(e,n){if(!cs())// If we're hydrating, we should consume as many items as we can
// so we don't leave any behind.
switch(e.tailMode){case"hidden":{// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
for(var t=e.tail,i=null;null!==t;)null!==t.alternate&&(i=t),t=t.sibling;// Next we're simply going to delete all insertions after the
// last rendered item.
null===i?e.tail=null:i.sibling=null;break}case"collapsed":{// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
for(var a=e.tail,o=null;null!==a;)null!==a.alternate&&(o=a),a=a.sibling;// Next we're simply going to delete all insertions after the
// last rendered item.
null===o?n||null===e.tail?e.tail=null:e.tail.sibling=null:o.sibling=null;break}}}function mf(e){var n=null!==e.alternate&&e.alternate.child===e.child,t=0,i=0;if(!n){// Bubble up the earliest expiration time.
if(0!==(2&e.mode)){// In profiling mode, resetChildExpirationTime is also used to reset
// profiler durations.
for(var a=e.actualDuration,o=e.selfBaseDuration,d=e.child;null!==d;)// When a fiber is cloned, its actualDuration is reset to 0. This value will
// only be updated if work is done on the fiber (i.e. it doesn't bailout).
// When work is done, it should bubble to the parent's actualDuration. If
// the fiber has not been cloned though, (meaning no work was done), then
// this value will reflect the amount of time spent working on a previous
// render. In that case it should not bubble. We determine whether it was
// cloned by comparing the child pointer.
t=Ft(t,Ft(d.lanes,d.childLanes)),i|=d.subtreeFlags,i|=d.flags,a+=d.actualDuration,o+=d.treeBaseDuration,d=d.sibling;e.actualDuration=a,e.treeBaseDuration=o}else for(var r=e.child;null!==r;)// Update the return pointer so the tree is consistent. This is a code
// smell because it assumes the commit phase is never concurrent with
// the render phase. Will address during refactor to alternate model.
t=Ft(t,Ft(r.lanes,r.childLanes)),i|=r.subtreeFlags,i|=r.flags,r["return"]=e,r=r.sibling;e.subtreeFlags|=i}else{// Bubble up the earliest expiration time.
if(0!==(2&e.mode)){// In profiling mode, resetChildExpirationTime is also used to reset
// profiler durations.
for(var s=e.selfBaseDuration,u=e.child;null!==u;)// "Static" flags share the lifetime of the fiber/hook they belong to,
// so we should bubble those up even during a bailout. All the other
// flags have a lifetime only of a single render + commit, so we should
// ignore them.
t=Ft(t,Ft(u.lanes,u.childLanes)),i|=14680064&u.subtreeFlags,i|=14680064&u.flags,s+=u.treeBaseDuration,u=u.sibling;e.treeBaseDuration=s}else for(var l=e.child;null!==l;)// "Static" flags share the lifetime of the fiber/hook they belong to,
// so we should bubble those up even during a bailout. All the other
// flags have a lifetime only of a single render + commit, so we should
// ignore them.
// Update the return pointer so the tree is consistent. This is a code
// smell because it assumes the commit phase is never concurrent with
// the render phase. Will address during refactor to alternate model.
t=Ft(t,Ft(l.lanes,l.childLanes)),i|=14680064&l.subtreeFlags,i|=14680064&l.flags,l["return"]=e,l=l.sibling;e.subtreeFlags|=i}return e.childLanes=t,n}function hf(e,n,t){if(rs()&&0!==(1&n.mode)&&0===(128&n.flags))return ss(n),us(),n.flags|=98560,!1;var i=ds(n);if(null!==t&&null!==t.dehydrated){// We might be inside a hydration state the first time we're picking up this
// Suspense boundary, and also after we've reentered it for further hydration.
if(null===e){if(!i)throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(is(n),mf(n),0!==(2&n.mode)){var a=null!==t;if(a){// Don't count time spent in a timed out Suspense subtree as part of the base duration.
var o=n.child;null!==o&&(n.treeBaseDuration-=o.treeBaseDuration)}}return!1}if(us(),0===(128&n.flags)&&(n.memoizedState=null),n.flags|=4,mf(n),0!==(2&n.mode)){var d=null!==t;if(d){// Don't count time spent in a timed out Suspense subtree as part of the base duration.
var r=n.child;null!==r&&(n.treeBaseDuration-=r.treeBaseDuration)}}return!1}// Fall through to normal Suspense path
return ls(),!0}function gf(e,n,t){var i=n.pendingProps;// Note: This intentionally doesn't check if we're hydrating because comparing
// to the current tree provider fiber is just as fast and less error-prone.
// Ideally we would have a special version of the work loop only
// for hydration.
switch(Fr(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mf(n),null;case 1:{var a=n.type;return br(a)&&vr(n),mf(n),null}case 3:{var o=n.stateNode;if(lu(n),kr(n),wu(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),null===e||null===e.child){// If we hydrated, pop so that we can delete any remaining children
// that weren't hydrated.
var d=ds(n);if(d)cf(n);else if(null!==e){var r=e.memoizedState;// Check if this is a client root
r.isDehydrated&&// Check if we reverted to client rendering (e.g. due to an error)
0===(256&n.flags)||(n.flags|=1024,ls())}}return QT(e,n),mf(n),null}case 5:{pu(n);var s=su(),u=n.type;if(null!==e&&null!=n.stateNode)XT(e,n,u,i,s),e.ref!==n.ref&&ff(n);else{if(!i){if(null===n.stateNode)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");// This can happen when we abort work.
return mf(n),null}var l=cu(),c=ds(n);// TODO: Move createInstance to beginWork and keep it on a context
// "stack" as the parent. Then append children as we go in beginWork
// or completeWork depending on whether we want to add them top->down or
// bottom->up. Top->down is faster in IE11.
if(c)ns(n,s,l)&&cf(n);else{var f=Ko(u,i,s,l,n);KT(f,n,!1,!1),n.stateNode=f,Xo(f,u,i,s)&&cf(n)}null!==n.ref&&ff(n)}return mf(n),null}case 6:{var p=i;if(e&&null!=n.stateNode){var m=e.memoizedProps;// If we have an alternate, that means this is an update and we need
// to schedule a side-effect to do the updates.
GT(e,n,m,p)}else{if("string"!=typeof p&&null===n.stateNode)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");// This can happen when we abort work.
var h=su(),g=cu(),y=ds(n);y?ts(n)&&cf(n):n.stateNode=Zo(p,h,g,n)}return mf(n),null}case 13:{vu(n);var b=n.memoizedState;// Special path for dehydrated boundaries. We may eventually move this
// to its own fiber type so that we can add other kinds of hydration
// boundaries that aren't associated with a Suspense tree. In anticipation
// of such a refactor, all the hydration logic is contained in
// this branch.
if(null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){var v=hf(e,n,b);if(!v)return 65536&n.flags?n:null;// Continue with the normal Suspense path.
}if(0!==(128&n.flags))// Don't bubble properties in this case.
return n.lanes=t,0!==(2&n.mode)&&Kl(n),n;var k=null!==b,S=null!==e&&null!==e.memoizedState;// a passive effect, which is when we process the transitions
if(k!==S&&k)// an effect to toggle the subtree's visibility. When we switch from
// fallback -> primary, the inner Offscreen fiber schedules this effect
// as part of its normal complete phase. But when we switch from
// primary -> fallback, the inner Offscreen fiber does not have a complete
// phase. So we need to schedule its effect here.
//
// We also use this flag to connect/disconnect the effects, but the same
// logic applies: when re-connecting, the Offscreen fiber's complete
// phase will handle scheduling the effect. It's only when the fallback
// is active that we have to do anything special.
{var w=n.child;// TODO: This will still suspend a synchronous tree if anything
// in the concurrent tree already suspended during this render.
// This is a known bug.
if(w.flags|=8192,0!==(1&n.mode)){// TODO: Move this back to throwException because this is too late
// if this is a large tree which is common for initial loads. We
// don't know if we should restart a render or not until we get
// this marker, and this is too late.
// If this render already had a ping or lower pri updates,
// and this is the first time we know we're going to suspend we
// should be able to immediately restart from within throwException.
var x=null===e&&(!0!==n.memoizedProps.unstable_avoidThisFallback||!0);x||mu($R.current,1)?tm():im()}}var C=n.updateQueue;if(null!==C&&(n.flags|=4),mf(n),0!==(2&n.mode)&&k){// Don't count time spent in a timed out Suspense subtree as part of the base duration.
var R=n.child;null!==R&&(n.treeBaseDuration-=R.treeBaseDuration)}return null}case 4:return lu(n),QT(e,n),null===e&&Gd(n.stateNode.containerInfo),mf(n),null;case 10:// Pop provider fiber
var T=n.type._context;return vs(T,n),mf(n),null;case 17:{// Same as class component case. I put it down here so that the tags are
// sequential to ensure this switch is compiled to a jump table.
var P=n.type;return br(P)&&vr(n),mf(n),null}case 19:{vu(n);var _=n.memoizedState;if(null===_)return mf(n),null;var E=0!==(128&n.flags),N=_.rendering;if(null!==N){// Append the rendered row to the child list.
if(!E){var I=Su(N);if(null!==I){n.flags|=128,E=!0;// Ensure we transfer the update queue to the parent so that it doesn't
// get lost if this row ends up dropped during a second pass.
var D=I.updateQueue;// This might have been modified.
if(null!==D&&(n.updateQueue=D,n.flags|=4),pf(_,!0),null===_.tail&&"hidden"===_.tailMode&&!N.alternate&&!cs()// We don't cut it if we're hydrating.
)return mf(n),null}else// The time it took to render last row is greater than the remaining
// time we have to render. So rendering one more row would likely
// exceed it.
2*Pk()-_.renderingStartTime>Pp()&&1073741824!==t&&(// We have now passed our CPU deadline and we'll just give up further
// attempts to render the main content and only render fallbacks.
// The assumption is that this is usually faster.
// Since nothing actually suspended, there will nothing to ping this
// to get it started back up to attempt the next item. While in terms
// of priority this work has the same priority as this current render,
// it's not part of the same transition once the transition has
// committed. If it's sync, we still want to yield so that it can be
// painted. Conceptually, this is really the same as pinging.
// We can use any RetryLane even if it's the one currently rendering
// since we're leaving it behind on this node.
n.flags|=128,E=!0,pf(_,!1),n.lanes=4194304)}if(_.isBackwards)N.sibling=n.child,n.child=N;else{var L=_.last;null===L?n.child=N:L.sibling=N,_.last=N}}else// We just rendered the head.
if(!E){// This is the first pass. We need to figure out if anything is still
// suspended in the rendered set.
// If new content unsuspended, but there's still some content that
// didn't. Then we need to do a second pass that forces everything
// to keep showing their fallbacks.
// We might be suspended if something in this render pass suspended, or
// something in the previous committed pass suspended. Otherwise,
// there's no chance so we can skip the expensive call to
// findFirstSuspended.
var z=om()&&(null===e||0===(128&e.flags));if(!z)for(var M=n.child,U;null!==M;){if(U=Su(M),null!==U){E=!0,n.flags|=128,pf(_,!1);// If this is a newly suspended tree, it might not get committed as
// part of the second pass. In that case nothing will subscribe to
// its thenables. Instead, we'll transfer its thenables to the
// SuspenseList so that it can retry if they resolve.
// There might be multiple of these in the list but since we're
// going to wait for all of them anyway, it doesn't really matter
// which ones gets to ping. In theory we could get clever and keep
// track of how many dependencies remain but it gets tricky because
// in the meantime, we can add/remove/change items and dependencies.
// We might bail out of the loop before finding any but that
// doesn't matter since that means that the other boundaries that
// we did find already has their listeners attached.
var O=U.updateQueue;// Don't bubble properties in this case.
return null!==O&&(n.updateQueue=O,n.flags|=4),n.subtreeFlags=0,du(n,t),bu(n,gu($R.current,2)),n.child}M=M.sibling}null!==_.tail&&Pk()>Pp()&&(n.flags|=128,E=!0,pf(_,!1),n.lanes=4194304)}else pf(_,!1);// Next we're going to render the tail.
if(null!==_.tail){// We still have tail rows to render.
// Pop a row.
var F=_.tail;_.rendering=F,_.tail=F.sibling,_.renderingStartTime=Pk(),F.sibling=null;// Restore the context.
// TODO: We can probably just avoid popping it instead and only
// setting it the first time we go from not suspended to suspended.
var A=$R.current;// Do a pass over the next row.
// Don't bubble properties in this case.
return A=E?gu(A,2):hu(A),bu(n,A),F}return mf(n),null}case 21:break;case 22:case 23:{Qp(n);var W=n.memoizedState,j=null!==W;if(null!==e){var B=e.memoizedState,H=null!==B;H===j||!1||(n.flags|=8192)}return j&&0!==(1&n.mode)?Ut(FP,1073741824)&&(mf(n),6&n.subtreeFlags&&(n.flags|=8192)):mf(n),null}case 24:return null;case 25:return null}throw new Error("Unknown unit of work tag ("+n.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function yf(e,n,t){switch(Fr(n),n.tag){case 1:{var i=n.type;br(i)&&vr(n);var a=n.flags;return 65536&a?(n.flags=128|-65537&a,0!==(2&n.mode)&&Kl(n),n):null}case 3:{var o=n.stateNode;lu(n),kr(n),wu();var d=n.flags;return 0!==(65536&d)&&0===(128&d)?(n.flags=128|-65537&d,n):null;// We unwound to the root without completing it. Exit.
}case 5:return pu(n),null;case 13:{vu(n);var r=n.memoizedState;if(null!==r&&null!==r.dehydrated){if(null===n.alternate)throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");us()}var s=n.flags;return 65536&s?(n.flags=128|-65537&s,0!==(2&n.mode)&&Kl(n),n):null}case 19:// SuspenseList doesn't actually catch anything. It should've been
// caught by a nested boundary. If not, it should bubble through.
return vu(n),null;case 4:return lu(n),null;case 10:var u=n.type._context;return vs(u,n),null;case 22:case 23:return Qp(n),null;case 24:return null;default:return null}}function bf(e,n,t){switch(Fr(n),n.tag){case 1:{var i=n.type.childContextTypes;null!==i&&void 0!==i&&vr(n);break}case 3:{var a=n.stateNode;lu(n),kr(n),wu();break}case 5:{pu(n);break}case 4:lu(n);break;case 13:vu(n);break;case 19:vu(n);break;case 10:var o=n.type._context;vs(o,n);break;case 22:case 23:Qp(n)}}function vf(e){gn(null,function(){throw e}),kn()}// Capture errors so they don't interrupt mounting.
function kf(e,n){try{If(4,e)}catch(t){Sm(e,n,t)}}// Capture errors so they don't interrupt unmounting.
function Sf(e,n,t){try{oP(e,t)}catch(t){Sm(e,n,t)}}// Capture errors so they don't interrupt mounting.
function wf(e,n,t){try{t.componentDidMount()}catch(t){Sm(e,n,t)}}// Capture errors so they don't interrupt mounting.
function xf(e,n){try{Uf(e)}catch(t){Sm(e,n,t)}}function Cf(e,n){var t=e.ref;if(null!==t)if("function"==typeof t){var i;try{if(2&e.mode)try{Yl(),i=t(null)}finally{Vl(e)}else i=t(null)}catch(t){Sm(e,n,t)}"function"==typeof i&&r("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",q(e))}else t.current=null}function Rf(e,n,t){try{t()}catch(t){Sm(e,n,t)}}function Tf(e,n){dP=Yo(e.containerInfo),tP=n,Pf();// We no longer need to track the active instance fiber
var t=rP;return rP=!1,dP=null,t}function Pf(){for(;null!==tP;){var e=tP,n=e.child;// This phase is only used for beforeActiveInstanceBlur.
(e.subtreeFlags&1028)!==0&&null!==n?(n["return"]=e,tP=n):_f()}}function _f(){for(;null!==tP;){var e=tP;G(e);try{Ef(e)}catch(n){Sm(e,e["return"],n)}X();var n=e.sibling;if(null!==n)return n["return"]=e["return"],void(tP=n);tP=e["return"]}}function Ef(e){var n=e.alternate,t=e.flags;if(0!==(1024&t)){switch(G(e),e.tag){case 0:case 11:case 15:break;case 1:{if(null!==n){var i=n.memoizedProps,a=n.memoizedState,o=e.stateNode;e.type!==e.elementType||BT||(o.props!==e.memoizedProps&&r("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",q(e)||"instance"),o.state!==e.memoizedState&&r("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",q(e)||"instance"));var d=o.getSnapshotBeforeUpdate(e.elementType===e.type?i:ms(e.type,i),a);{var s=JT;void 0!==d||s.has(e.type)||(s.add(e.type),r("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",q(e)))}o.__reactInternalSnapshotBeforeUpdate=d}break}case 3:{{var u=e.stateNode;bd(u.containerInfo)}break}case 5:case 6:case 4:case 17:// Nothing to do for these component types
break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}X()}}function Nf(e,n,t){var i=n.updateQueue,a=null===i?null:i.lastEffect;if(null!==a){var o=a.next,d=o;do{if((d.tag&e)===e){// Unmount
var r=d.destroy;d.destroy=void 0,r!==void 0&&((e&8)===0?(e&4)!==0&&Zn(n):Qn(n),(e&2)!==0&&Am(!0),Rf(n,t,r),(e&2)!==0&&Am(!1),(e&8)===0?(e&4)!==0&&et():Xn())}d=d.next}while(d!==o)}}function If(e,n){var t=n.updateQueue,i=null===t?null:t.lastEffect;if(null!==i){var a=i.next,o=a;do{if((o.tag&e)===e){(e&8)===0?(e&4)!==0&&Gn(n):qn(n);// Mount
var d=o.create;(e&2)!==0&&Am(!0),o.destroy=d(),(e&2)!==0&&Am(!1),(e&8)===0?(e&4)!==0&&Jn():Kn();{var s=o.destroy;if(s!==void 0&&"function"!=typeof s){var u=void 0;u=0===(4&o.tag)?0===(2&o.tag)?"useEffect":"useInsertionEffect":"useLayoutEffect";var l=void 0;l=null===s?" You returned null. If your effect does not require clean up, return undefined (or nothing).":"function"==typeof s.then?"\n\nIt looks like you wrote "+u+"(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n"+u+"(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching":" You returned: "+s,r("%s must not return anything besides a function, which is used for clean-up.%s",u,l)}}}o=o.next}while(o!==a)}}function Df(e,n){// Only Profilers with work in their subtree will have an Update effect scheduled.
if(0!==(4&n.flags))switch(n.tag){case 12:{var t=n.stateNode.passiveEffectDuration,i=n.memoizedProps,a=i.id,o=i.onPostCommit,d=Al(),r=null===n.alternate?"mount":"update";// This value will still reflect the previous commit phase.
// It does not get reset until the start of the next commit phase.
Ml()&&(r="nested-update"),"function"==typeof o&&o(a,r,t,d);// Bubble times to the next nearest ancestor Profiler.
// After we process that Profiler, we'll bubble further up.
var s=n["return"];outer:for(;null!==s;){switch(s.tag){case 3:var u=s.stateNode;u.passiveEffectDuration+=t;break outer;case 12:var l=s.stateNode;l.passiveEffectDuration+=t;break outer}s=s["return"]}break}}}function Lf(e,n,t,i){if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:{if(!eP)// At this point layout effects have already been destroyed (during mutation phase).
// This is done to prevent sibling component effects from interfering with each other,
// e.g. a destroy function in one component should never override a ref set
// by a create function in another component during the same commit.
if(2&t.mode)try{Yl(),If(5,t)}finally{Vl(t)}else If(5,t);break}case 1:{var a=t.stateNode;if(4&t.flags&&!eP)if(null!==n){var o=t.elementType===t.type?n.memoizedProps:ms(t.type,n.memoizedProps),d=n.memoizedState;// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
if(t.type!==t.elementType||BT||(a.props!==t.memoizedProps&&r("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",q(t)||"instance"),a.state!==t.memoizedState&&r("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",q(t)||"instance")),2&t.mode)try{Yl(),a.componentDidUpdate(o,d,a.__reactInternalSnapshotBeforeUpdate)}finally{Vl(t)}else a.componentDidUpdate(o,d,a.__reactInternalSnapshotBeforeUpdate)}else if(t.type!==t.elementType||BT||(a.props!==t.memoizedProps&&r("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",q(t)||"instance"),a.state!==t.memoizedState&&r("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",q(t)||"instance")),2&t.mode)try{Yl(),a.componentDidMount()}finally{Vl(t)}else a.componentDidMount();// TODO: I think this is now always non-null by the time it reaches the
// commit phase. Consider removing the type check.
var s=t.updateQueue;null!==s&&(t.type===t.elementType&&!BT&&(a.props!==t.memoizedProps&&r("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",q(t)||"instance"),a.state!==t.memoizedState&&r("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",q(t)||"instance")),Hs(t,s,a));break}case 3:{// TODO: I think this is now always non-null by the time it reaches the
// commit phase. Consider removing the type check.
var u=t.updateQueue;if(null!==u){var l=null;if(null!==t.child)switch(t.child.tag){case 5:l=$o(t.child.stateNode);break;case 1:l=t.child.stateNode}Hs(t,u,l)}break}case 5:{var c=t.stateNode;// Renderers may schedule work to be done after host components are mounted
// (eg DOM renderer may schedule auto-focus for inputs and form controls).
// These effects should only be committed when components are first mounted,
// aka when there is no current/alternate.
if(null===n&&4&t.flags){var f=t.type,p=t.memoizedProps;td(c,f,p)}break}case 6:// We have no life-cycles associated with text.
break;case 4:// We have no life-cycles associated with portals.
break;case 12:{{var m=t.memoizedProps,h=m.onCommit,g=m.onRender,y=t.stateNode.effectDuration,b=Al(),v=null===n?"mount":"update";Ml()&&(v="nested-update"),"function"==typeof g&&g(t.memoizedProps.id,v,t.actualDuration,t.treeBaseDuration,t.actualStartTime,b);{"function"==typeof h&&h(t.memoizedProps.id,v,y,b),hm(t);// Propagate layout effect durations to the next nearest Profiler ancestor.
// Do not reset these values until the next render so DevTools has a chance to read them first.
var k=t["return"];outer:for(;null!==k;){switch(k.tag){case 3:var S=k.stateNode;S.effectDuration+=y;break outer;case 12:var w=k.stateNode;w.effectDuration+=y;break outer}k=k["return"]}}}break}case 13:{Qf(e,t);break}case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}!eP&&t.flags&512&&Uf(t)}function zf(e){// Turn on layout effects in a tree that previously disappeared.
// TODO (Offscreen) Check: flags & LayoutStatic
switch(e.tag){case 0:case 11:case 15:{if(e.mode&2)try{Yl(),kf(e,e["return"])}finally{Vl(e)}else kf(e,e["return"]);break}case 1:{var n=e.stateNode;"function"==typeof n.componentDidMount&&wf(e,e["return"],n),xf(e,e["return"]);break}case 5:{xf(e,e["return"]);break}}}function Mf(e,n){// Only hide or unhide the top-most host nodes.
var t=null;// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
for(var i=e;!0;){if(5===i.tag){if(null===t){t=i;try{var a=i.stateNode;n?md(a):gd(i.stateNode,i.memoizedProps)}catch(n){Sm(e,e["return"],n)}}}else if(6===i.tag){if(null===t)try{var o=i.stateNode;n?hd(o):yd(o,i.memoizedProps)}catch(n){Sm(e,e["return"],n)}}else if((22===i.tag||23===i.tag)&&null!==i.memoizedState&&i!==e);else if(null!==i.child){i.child["return"]=i,i=i.child;continue}if(i===e)return;for(;null===i.sibling;){if(null===i["return"]||i["return"]===e)return;t===i&&(t=null),i=i["return"]}t===i&&(t=null),i.sibling["return"]=i["return"],i=i.sibling}}function Uf(e){var n=e.ref;if(null!==n){var t=e.stateNode,i;switch(e.tag){case 5:i=$o(t);break;default:i=t}// Moved outside to ensure DCE works with this flag
if("function"==typeof n){var a;if(e.mode&2)try{Yl(),a=n(i)}finally{Vl(e)}else a=n(i);"function"==typeof a&&r("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",q(e))}else n.hasOwnProperty("current")||r("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",q(e)),n.current=i}}function Of(e){// Cut off the return pointer to disconnect it from the tree.
// This enables us to detect and warn against state updates on an unmounted component.
// It also prevents events from bubbling from within disconnected components.
//
// Ideally, we should also clear the child pointer of the parent alternate to let this
// get GC:ed but we don't know which for sure which parent is the current
// one so we'll settle for GC:ing the subtree of this child.
// This child itself will be GC:ed when the parent updates the next time.
//
// Note that we can't clear child or sibling pointers yet.
// They're needed for passive effects and for findDOMNode.
// We defer those fields, and all other cleanup, to the passive phase (see detachFiberAfterEffects).
//
// Don't reset the alternate yet, either. We need that so we can detach the
// alternate's fields in the passive phase. Clearing the return pointer is
// sufficient for findDOMNode semantics.
var n=e.alternate;null!==n&&(n["return"]=null),e["return"]=null}function Ff(e){var n=e.alternate;null!==n&&(e.alternate=null,Ff(n));// Note: Defensively using negation instead of < in case
// `deletedTreeCleanUpLevel` is undefined.
{// The `stateNode` is cyclical because on host nodes it points to the host
// tree, which has its own pointers to children, parents, and siblings.
// The other host nodes also point back to fibers, so we should detach that
// one, too.
if(e.child=null,e.deletions=null,e.sibling=null,5===e.tag){var t=e.stateNode;null!==t&&Jd(t)}e.stateNode=null,e._debugOwner=null,e["return"]=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}}function Af(e){for(var n=e["return"];null!==n;){if(Wf(n))return n;n=n["return"]}throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}function Wf(e){return e.tag===5||e.tag===3||e.tag===4}function jf(e){// We're going to search forward into the tree until we find a sibling host
// node. Unfortunately, if multiple insertions are done in a row we have to
// search past them. This leads to exponential search for the next sibling.
// TODO: Find a more efficient way to do this.
var n=e;siblings:for(;!0;){// If we didn't find anything, let's try the next sibling.
for(;null===n.sibling;){if(null===n["return"]||Wf(n["return"]))// If we pop out of the root or hit the parent the fiber we are the
// last sibling.
return null;n=n["return"]}for(n.sibling["return"]=n["return"],n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){// If it is not host node and, we might have a host node inside it.
// Try to search down until we find one.
if(n.flags&2)// If we don't have a child, try the siblings instead.
continue siblings;// If we don't have a child, try the siblings instead.
// We also skip portals because they are not part of this host tree.
if(null===n.child||4===n.tag)continue siblings;else n.child["return"]=n,n=n.child}// Check if this host node is stable or about to be placed.
if(!(n.flags&2))// Found it!
return n.stateNode}}function Bf(e){var n=Af(e);// Note: these two variables *must* always be updated together.
switch(n.tag){case 5:{var t=n.stateNode;n.flags&32&&(ad(t),n.flags&=-33);var i=jf(e);// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
Vf(e,i,t);break}case 3:case 4:{var a=n.stateNode.containerInfo,o=jf(e);Hf(e,o,a);break}// eslint-disable-next-line-no-fallthrough
default:throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function Hf(e,n,t){var i=e.tag,a=i===5||i===6;if(a){var o=e.stateNode;n?ud(t,o,n):rd(t,o)}else if(i===4);else{var d=e.child;if(null!==d){Hf(d,n,t);for(var r=d.sibling;null!==r;)Hf(r,n,t),r=r.sibling}}}function Vf(e,n,t){var i=e.tag,a=i===5||i===6;if(a){var o=e.stateNode;n?sd(t,o,n):dd(t,o)}else if(i===4);else{var d=e.child;if(null!==d){Vf(d,n,t);for(var r=d.sibling;null!==r;)Vf(r,n,t),r=r.sibling}}}// These are tracked on the stack as we recursively traverse a
// deleted subtree.
// TODO: Update these during the whole mutation phase, not just during
// a deletion.
function $f(e,n,t){{// We only have the top Fiber that was deleted but we need to recurse down its
// children to find all the terminal nodes.
// Recursively delete all host nodes from the parent, detach refs, clean
// up mounted layout effects, and call componentWillUnmount.
// We only need to remove the topmost host child in each branch. But then we
// still need to keep traversing to unmount effects, refs, and cWU. TODO: We
// could split this into two separate traversals functions, where the second
// one doesn't include any removeChild logic. This is maybe the same
// function as "disappearLayoutEffects" (or whatever that turns into after
// the layout phase is refactored to use recursion).
// Before starting, find the nearest host parent on the stack so we know
// which instance/container to remove the children from.
// TODO: Instead of searching up the fiber return path on every deletion, we
// can track the nearest host component on the JS stack as we traverse the
// tree during the commit phase. This would make insertions faster, too.
var i=n;findParent:for(;null!==i;){switch(i.tag){case 5:{sP=i.stateNode,uP=!1;break findParent}case 3:{sP=i.stateNode.containerInfo,uP=!0;break findParent}case 4:{sP=i.stateNode.containerInfo,uP=!0;break findParent}}i=i["return"]}if(null===sP)throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");qf(e,n,t),sP=null,uP=!1}Of(t)}function Yf(e,n,t){// TODO: Use a static flag to skip trees that don't have unmount effects
for(var i=t.child;null!==i;)qf(e,n,i),i=i.sibling}function qf(e,n,t){// The cases in this outer switch modify the stack before they traverse
// into their subtree. There are simpler cases in the inner switch
// that don't modify the stack.
switch(An(t),t.tag){case 5:eP||Cf(t,n);// eslint-disable-next-line-no-fallthrough
case 6:{// We only need to remove the nearest host child. Set the host parent
// to `null` on the stack to indicate that nested children don't
// need to be removed.
{var i=sP,a=uP;sP=null,Yf(e,n,t),sP=i,uP=a,null!==sP&&(uP?cd(sP,t.stateNode):ld(sP,t.stateNode))}return}case 18:return void(null!==sP&&(uP?pd(sP,t.stateNode):fd(sP,t.stateNode)));case 4:{{// When we go into a portal, it becomes the parent to remove from.
var o=sP,d=uP;sP=t.stateNode.containerInfo,uP=!0,Yf(e,n,t),sP=o,uP=d}return}case 0:case 11:case 14:case 15:{if(!eP){var r=t.updateQueue;if(null!==r){var s=r.lastEffect;if(null!==s){var u=s.next,l=u;do{var c=l,f=c.destroy,p=c.tag;void 0!==f&&(0===(2&p)?0!==(4&p)&&(Zn(t),2&t.mode?(Yl(),Rf(t,n,f),Vl(t)):Rf(t,n,f),et()):Rf(t,n,f)),l=l.next}while(l!==u)}}}return void Yf(e,n,t)}case 1:{if(!eP){Cf(t,n);var m=t.stateNode;"function"==typeof m.componentWillUnmount&&Sf(t,n,m)}return void Yf(e,n,t)}case 21:return void Yf(e,n,t);case 22:{if(// TODO: Remove this dead flag
1&t.mode){// If this offscreen component is hidden, we already unmounted it. Before
// deleting the children, track that it's already unmounted so that we
// don't attempt to unmount the effects again.
// TODO: If the tree is hidden, in most cases we should be able to skip
// over the nested children entirely. An exception is we haven't yet found
// the topmost host node to delete, which we already track on the stack.
// But the other case is portals, which need to be detached no matter how
// deeply they are nested. We should use a subtree flag to track whether a
// subtree includes a nested portal.
var h=eP;eP=h||null!==t.memoizedState,Yf(e,n,t),eP=h}else Yf(e,n,t);break}default:return void Yf(e,n,t)}}function Kf(e){// TODO: Move this to passive phase
var n=e.memoizedState}function Qf(e,n){var t=n.memoizedState;if(null===t){var i=n.alternate;if(null!==i){var a=i.memoizedState;if(null!==a){var o=a.dehydrated;null!==o&&Od(o)}}}}function Xf(e){// If this boundary just timed out, then it will have a set of wakeables.
// For each wakeable, attach a listener so that when it resolves, React
// attempts to re-render the boundary in the primary (pre-timeout) state.
var n=e.updateQueue;if(null!==n){e.updateQueue=null;var t=e.stateNode;null===t&&(t=e.stateNode=new nP),n.forEach(function(n){// Memoize using the boundary fiber to prevent redundant listeners.
var i=Rm.bind(null,e,n);if(!t.has(n)){if(t.add(n),Wk)if(null!==iP&&null!==aP)Lm(aP,iP);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");n.then(i,i)}})}}// This function detects when a Suspense boundary goes from visible to hidden.
function Gf(e,n,t){iP=t,aP=e,G(n),Zf(n,e),G(n),iP=null,aP=null}function Jf(e,n,t){// Deletions effects can be scheduled on any fiber type. They need to happen
// before the children effects hae fired.
var a=n.deletions;if(null!==a)for(var o=0,d;o<a.length;o++){d=a[o];try{$f(e,n,d)}catch(e){Sm(d,n,e)}}var r=J();if(n.subtreeFlags&12854)for(var s=n.child;null!==s;)G(s),Zf(s,e),s=s.sibling;G(r)}function Zf(e,n,t){var i=e.alternate,a=e.flags;// The effect flag should be checked *after* we refine the type of fiber,
// because the fiber tag is more specific. An exception is any flag related
// to reconcilation, because those can be set on all fiber types.
switch(e.tag){case 0:case 11:case 14:case 15:{if(Jf(n,e),ep(e),a&4){try{Nf(3,e,e["return"]),If(3,e)}catch(n){Sm(e,e["return"],n)}// Layout effects are destroyed during the mutation phase so that all
// destroy functions for all fibers are called before any create functions.
// This prevents sibling component effects from interfering with each other,
// e.g. a destroy function in one component should never override a ref set
// by a create function in another component during the same commit.
if(e.mode&2){try{Yl(),Nf(5,e,e["return"])}catch(n){Sm(e,e["return"],n)}Vl(e)}else try{Nf(5,e,e["return"])}catch(n){Sm(e,e["return"],n)}}return}case 1:return Jf(n,e),ep(e),void(512&a&&null!==i&&Cf(i,i["return"]));case 5:{Jf(n,e),ep(e),a&512&&null!==i&&Cf(i,i["return"]);{// TODO: ContentReset gets cleared by the children during the commit
// phase. This is a refactor hazard because it means we must read
// flags the flags after `commitReconciliationEffects` has already run;
// the order matters. We should refactor so that ContentReset does not
// rely on mutating the flag during commit. Like by setting a flag
// during the render phase instead.
if(e.flags&32){var o=e.stateNode;try{ad(o)}catch(n){Sm(e,e["return"],n)}}if(4&a){var d=e.stateNode;if(null!=d){// Commit the work prepared earlier.
var r=e.memoizedProps,s=null===i?r:i.memoizedProps,u=e.type,l=e.updateQueue;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
// TODO: Type the updateQueue to be specific to host components.
if(e.updateQueue=null,null!==l)try{id(d,l,u,s,r,e)}catch(n){Sm(e,e["return"],n)}}}}return}case 6:{if(Jf(n,e),ep(e),a&4){if(null===e.stateNode)throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var c=e.stateNode,f=e.memoizedProps,p=null===i?f:i.memoizedProps;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
try{od(c,p,f)}catch(n){Sm(e,e["return"],n)}}return}case 3:{if(Jf(n,e),ep(e),a&4&&null!==i){var m=i.memoizedState;if(m.isDehydrated)try{Ud(n.containerInfo)}catch(n){Sm(e,e["return"],n)}}return}case 4:return Jf(n,e),void ep(e);case 13:{Jf(n,e),ep(e);var h=e.child;if(8192&h.flags){var g=h.stateNode,y=h.memoizedState,b=null!==y;// Track the current state on the Offscreen instance so we can
// read it during an event
if(g.isHidden=b,b){var v=null!==h.alternate&&null!==h.alternate.memoizedState;v||em()}}if(4&a){try{Kf(e)}catch(n){Sm(e,e["return"],n)}Xf(e)}return}case 22:{var k=null!==i&&null!==i.memoizedState;if(// TODO: Remove this dead flag
e.mode&1){// Before committing the children, track on the stack whether this
// offscreen subtree was already hidden, so that we don't unmount the
// effects again.
var S=eP;eP=S||k,Jf(n,e),eP=S}else Jf(n,e);if(ep(e),8192&a){var w=e.stateNode,x=e.memoizedState,C=null!==x,R=e;// Track the current state on the Offscreen instance so we can
// read it during an event
if(w.isHidden=C,C&&!k&&0!==(1&R.mode)){tP=R;for(var T=R.child;null!==T;)tP=T,ap(T),T=T.sibling}Mf(R,C)}return}case 19:return Jf(n,e),ep(e),void(4&a&&Xf(e));case 21:return;default:return Jf(n,e),void ep(e)}}function ep(e){// Placement effects (insertions, reorders) can be scheduled on any fiber
// type. They needs to happen after the children effects have fired, but
// before the effects on this fiber have fired.
var n=e.flags;if(n&2){try{Bf(e)}catch(n){Sm(e,e["return"],n)}// Clear the "placement" from effect tag so that we know that this is
// inserted, before any life-cycles like componentDidMount gets called.
// TODO: findDOMNode doesn't rely on this any more but isMounted does
// and isMounted is deprecated anyway so we should be able to kill this.
e.flags&=-3}n&4096&&(e.flags&=-4097)}function np(e,n,t){iP=t,aP=n,tP=e,tp(e,n,t),iP=null,aP=null}function tp(e,n,t){// Suspense layout effects semantics don't change for legacy roots.
for(var i=0!==(1&e.mode);null!==tP;){var a=tP,o=a.child;if(a.tag===22&&i){// Keep track of the current Offscreen stack's state.
var d=null!==a.memoizedState,r=d||ZT;if(r){ip(e,n,t);continue}else{// TODO (Offscreen) Also check: subtreeFlags & LayoutMask
var s=a.alternate,u=null!==s&&null!==s.memoizedState,l=u||eP,c=ZT,f=eP;// Traverse the Offscreen subtree with the current Offscreen as the root.
ZT=r,eP=l,eP&&!f&&(tP=a,dp(a));for(var p=o;null!==p;)tP=p,tp(p,// New root; bubble back up to here and stop.
n,t),p=p.sibling;// Restore Offscreen state and resume in our-progress traversal.
tP=a,ZT=c,eP=f,ip(e,n,t);continue}}(a.subtreeFlags&8772)!==0&&null!==o?(o["return"]=a,tP=o):ip(e,n,t)}}function ip(e,n,t){for(;null!==tP;){var i=tP;if((i.flags&8772)!==0){var a=i.alternate;G(i);try{Lf(n,a,i,t)}catch(e){Sm(i,i["return"],e)}X()}if(i===e)return void(tP=null);var o=i.sibling;if(null!==o)return o["return"]=i["return"],void(tP=o);tP=i["return"]}}function ap(e){for(;null!==tP;){var n=tP,t=n.child;// TODO (Offscreen) Check: flags & (RefStatic | LayoutStatic)
switch(n.tag){case 0:case 11:case 14:case 15:{if(n.mode&2)try{Yl(),Nf(4,n,n["return"])}finally{Vl(n)}else Nf(4,n,n["return"]);break}case 1:{Cf(n,n["return"]);var i=n.stateNode;"function"==typeof i.componentWillUnmount&&Sf(n,n["return"],i);break}case 5:{Cf(n,n["return"]);break}case 22:{// Check if this is a
var a=null!==n.memoizedState;if(a){op(e);continue}break}}// TODO (Offscreen) Check: subtreeFlags & LayoutStatic
null===t?op(e):(t["return"]=n,tP=t)}}function op(e){for(;null!==tP;){var n=tP;if(n===e)return void(tP=null);var t=n.sibling;if(null!==t)return t["return"]=n["return"],void(tP=t);tP=n["return"]}}function dp(e){for(;null!==tP;){var n=tP,t=n.child;if(n.tag===22){var i=null!==n.memoizedState;if(i){rp(e);continue}}// TODO (Offscreen) Check: subtreeFlags & LayoutStatic
null===t?rp(e):(t["return"]=n,tP=t)}}function rp(e){for(;null!==tP;){var n=tP;// TODO (Offscreen) Check: flags & LayoutStatic
G(n);try{zf(n)}catch(e){Sm(n,n["return"],e)}if(X(),n===e)return void(tP=null);var t=n.sibling;if(null!==t)return t["return"]=n["return"],void(tP=t);tP=n["return"]}}function sp(e,n,t,i){tP=n,up(n,e,t,i)}function up(e,n,t,i){for(;null!==tP;){var a=tP,o=a.child;(a.subtreeFlags&2064)!==0&&null!==o?(o["return"]=a,tP=o):lp(e,n,t,i)}}function lp(e,n,t,i){for(;null!==tP;){var a=tP;if((a.flags&2048)!==0){G(a);try{cp(n,a,t,i)}catch(e){Sm(a,a["return"],e)}X()}if(a===e)return void(tP=null);var o=a.sibling;if(null!==o)return o["return"]=a["return"],void(tP=o);tP=a["return"]}}function cp(e,n,t,i){switch(n.tag){case 0:case 11:case 15:{if(n.mode&2){ql();try{If(9,n)}finally{$l(n)}}else If(9,n);break}}}function fp(e){tP=e,pp()}function pp(){for(;null!==tP;){var e=tP,n=e.child;if((tP.flags&16)!==0){var t=e.deletions;if(null!==t){for(var a=0,o;a<t.length;a++)o=t[a],tP=o,gp(o,e);{// A fiber was deleted from this parent fiber, but it's still part of
// the previous (alternate) parent fiber's list of children. Because
// children are a linked list, an earlier sibling that's still alive
// will be connected to the deleted fiber via its `alternate`:
//
//   live fiber
//   --alternate--> previous live fiber
//   --sibling--> deleted fiber
//
// We can't disconnect `alternate` on nodes that haven't been deleted
// yet, but we can disconnect the `sibling` and `child` pointers.
var d=e.alternate;if(null!==d){var r=d.child;if(null!==r){d.child=null;do{var s=r.sibling;r.sibling=null,r=s}while(null!==r)}}}tP=e}}(e.subtreeFlags&2064)!==0&&null!==n?(n["return"]=e,tP=n):mp()}}function mp(){for(;null!==tP;){var e=tP;(e.flags&2048)!==0&&(G(e),hp(e),X());var n=e.sibling;if(null!==n)return n["return"]=e["return"],void(tP=n);tP=e["return"]}}function hp(e){switch(e.tag){case 0:case 11:case 15:{e.mode&2?(ql(),Nf(9,e,e["return"]),$l(e)):Nf(9,e,e["return"]);break}}}function gp(e,n){for(;null!==tP;){var t=tP;// Deletion effects fire in parent -> child order
// TODO: Check if fiber has a PassiveStatic flag
G(t),bp(t,n),X();var i=t.child;// TODO: Only traverse subtree if it has a PassiveStatic flag. (But, if we
// do this, still need to handle `deletedTreeCleanUpLevel` correctly.)
null===i?yp(e):(i["return"]=t,tP=i)}}function yp(e){for(;null!==tP;){var n=tP,t=n.sibling,i=n["return"];if(Ff(n),n===e)return void(tP=null);if(null!==t)return t["return"]=i,void(tP=t);tP=i}}function bp(e,n){switch(e.tag){case 0:case 11:case 15:{e.mode&2?(ql(),Nf(8,e,n),$l(e)):Nf(8,e,n);break}}}// TODO: Reuse reappearLayoutEffects traversal here?
function vp(e){// We don't need to re-check StrictEffectsMode here.
// This function is only called if that check has already passed.
switch(e.tag){case 0:case 11:case 15:{try{If(5,e)}catch(n){Sm(e,e["return"],n)}break}case 1:{var n=e.stateNode;try{n.componentDidMount()}catch(n){Sm(e,e["return"],n)}break}}}function kp(e){// We don't need to re-check StrictEffectsMode here.
// This function is only called if that check has already passed.
switch(e.tag){case 0:case 11:case 15:{try{If(9,e)}catch(n){Sm(e,e["return"],n)}break}}}function Sp(e){// We don't need to re-check StrictEffectsMode here.
// This function is only called if that check has already passed.
switch(e.tag){case 0:case 11:case 15:{try{Nf(5,e,e["return"])}catch(n){Sm(e,e["return"],n)}break}case 1:{var n=e.stateNode;"function"==typeof n.componentWillUnmount&&Sf(e,e["return"],n);break}}}function wp(e){// We don't need to re-check StrictEffectsMode here.
// This function is only called if that check has already passed.
switch(e.tag){case 0:case 11:case 15:try{Nf(9,e,e["return"])}catch(n){Sm(e,e["return"],n)}}}function xp(){gP.forEach(function(e){return e()})}function Cp(e){{// Legacy mode. We preserve the behavior of React 17's act. It assumes an
// act environment whenever `jest` is defined, but you can still turn off
// spurious warnings by setting IS_REACT_ACT_ENVIRONMENT explicitly
// to false.
var n=// $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
"undefined"==typeof IS_REACT_ACT_ENVIRONMENT?void 0:IS_REACT_ACT_ENVIRONMENT,t="undefined"!=typeof jest;// $FlowExpectedError - Flow doesn't know about jest
return t&&!1!==n}}function Rp(){{var e=// $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
"undefined"==typeof IS_REACT_ACT_ENVIRONMENT?void 0:IS_REACT_ACT_ENVIRONMENT;return e||null===yP.current||r("The current testing environment is not configured to support act(...)"),e}}function Tp(){XP=Pk()+500}function Pp(){return XP}function _p(){return MP}function Ep(){return 0===(6&zP)?-1===h_?(h_=Pk(),h_):h_:Pk();// We're not inside React, so we may be in the middle of a browser event.
// This is the first update since React yielded. Compute a new start time.
}function Np(e){// Special cases
var n=e.mode;if((n&1)===0)return 1;if(0!==(2&zP)&&0!==OP)// This is a render phase update. These are not officially supported. The
// old behavior is to give this the same "thread" (lanes) as
// whatever is currently rendering. So if you call `setState` on a component
// that happens later in the same render, it will flush. Ideally, we want to
// remove the special case and treat them as if they came from an
// interleaved event. Regardless, this pattern is not officially supported.
// This behavior is only a fallback. The flag only exists until we can roll
// out the setState warning, since existing code might accidentally rely on
// the current behavior.
return Lt(OP);var t=ps()!==jC;if(t){if(null!==SP.transition){var i=SP.transition;i._updatedFibers||(i._updatedFibers=new Set),i._updatedFibers.add(e)}// The algorithm for assigning an update to a lane should be stable for all
// updates at the same priority within the same event. To do this, the
// inputs to the algorithm must be the same.
//
// The trick we use is to cache the first of each of these inputs within an
// event. Then reset the cached values once we can be sure the event is
// over. Our heuristic for that is whenever we enter a concurrent work loop.
return 0===g_&&(g_=Nt()),g_}// Updates originating inside certain React methods, like flushSync, have
// their priority set by tracking it with a context variable.
//
// The opaque type returned by the host config is internally a lane, so we can
// use that directly.
// TODO: Move this type conversion to the event priority module.
var a=Zt();if(a!==0)return a;// This update originated outside React. Ask the host environment for an
// appropriate priority, based on the type of event.
//
// The opaque type returned by the host config is internally a lane, so we can
// use that directly.
// TODO: Move this type conversion to the event priority module.
var o=ed();return o}function Ip(e){// This is a fork of `requestUpdateLane` designed specifically for Suspense
// "retries" — a special update that attempts to flip a Suspense boundary
// from its placeholder state to its primary/resolved state.
// Special cases
var n=e.mode;return 0===(1&n)?1:It()}function Dp(e,n,t,i){// Mark that the root has a pending update.
Pm(),y_&&r("useInsertionEffect must not schedule updates."),l_&&(c_=!0),Vt(e,t,i),(zP&2)!==0&&e===MP?Dm(n):(Wk&&Xt(e,n,t),Om(n),e===MP&&((zP&2)===0&&(VP=Ft(VP,t)),WP===4&&jp(e,OP)),Mp(e,i),t===1&&zP===0&&(n.mode&1)===0&&// Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
!wP.isBatchingLegacy&&(Tp(),_r()))}function Lp(e,n,t){// This is a special fork of scheduleUpdateOnFiber that is only used to
// schedule the initial hydration of a root that has just been created. Most
// of the stuff in scheduleUpdateOnFiber can be skipped.
//
// The main reason for this separate path, though, is to distinguish the
// initial children from subsequent updates. In fully client-rendered roots
// (createRoot instead of hydrateRoot), all top-level renders are modeled as
// updates, but hydration roots are special because the initial render must
// match what was rendered on the server.
var i=e.current;i.lanes=n,Vt(e,n,t),Mp(e,t)}function zp(e){// Check if this is a render phase update. Only called by class components,
// which special (deprecated) behavior for UNSAFE_componentWillReceive props.
return(// TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
// decided not to enable it.
(zP&2)!==0)}// Use this function to schedule a task for a root. There's only one task per
// root; if a task was already scheduled, we'll check to make sure the priority
// of the existing task is the same as the priority of the next level that the
// root has work on. This function is called on every update, and right before
// exiting a task.
function Mp(e,n){var t=e.callbackNode;// Check if any lanes are being starved by other work. If so, mark them as
// expired so we know to work on those next.
vt(e,n);// Determine the next lanes to work on, and their priority.
var i=gt(e,e===MP?OP:0);if(0===i)return null!==t&&Mm(t),e.callbackNode=null,void(e.callbackPriority=0);// We use the highest priority lane to represent the priority of the callback.
var a=Dt(i),o=e.callbackPriority;// Check if there's an existing task. We may be able to reuse it.
if(o===a&&(// Special case related to `act`. If the currently scheduled task is a
// Scheduler task, rather than an `act` task, cancel it and re-scheduled
// on the `act` queue.
null===wP.current||t===C_))// The priority hasn't changed. We can reuse the existing task. Exit.
return void(null==t&&1!==o&&r("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue."));null!=t&&Mm(t);// Schedule a new callback.
var d;if(a===1)0===e.tag?(null!==wP.isBatchingLegacy&&(wP.didScheduleLegacyUpdate=!0),Pr(Bp.bind(null,e))):Tr(Bp.bind(null,e)),null===wP.current?iC(function(){0===(6&zP)&&Er()}):wP.current.push(Er),d=null;else{var s;switch(oi(i)){case 1:s=Ek;break;case 4:s=Nk;break;case 16:s=Ik;break;case 536870912:s=Lk;break;default:s=Ik}d=zm(s,Up.bind(null,e))}e.callbackPriority=a,e.callbackNode=d}// This is the entry point for every concurrent task, i.e. anything that
// goes through Scheduler.
function Up(e,n){if(Ol(),h_=-1,g_=0,0!==(6&zP))throw new Error("Should not already be working.");// Flush any pending passive effects before deciding which lanes to work on,
// in case they schedule additional work.
var t=e.callbackNode,i=mm();if(i&&e.callbackNode!==t)// The current task was canceled. Exit. We don't need to call
// `ensureRootIsScheduled` because the check above implies either that
// there's a new task, or that there's no remaining work on this root.
// Something in the passive effect phase may have canceled the current task.
// Check if the task node for this root was changed.
return null;// Determine the next lanes to work on, using the fields stored
// on the root.
var a=gt(e,e===MP?OP:0);if(0===a)// Defensive coding. This is never expected to happen.
return null;// We disable time-slicing in some cases: if the work has been CPU-bound
// for too long ("expired" work, to prevent starvation), or we're in
// sync-updates-by-default mode.
// TODO: We only check `didTimeout` defensively, to account for a Scheduler
// bug we're still investigating. Once the bug in Scheduler is fixed,
// we can remove this, since we track expiration ourselves.
var o=!Pt(e,a)&&!_t(e,a)&&!n,d=o?sm(e,a):dm(e,a);if(0!==d){if(2===d){// If something threw an error, try rendering one more time. We'll
// render synchronously to block concurrent data mutations, and we'll
// includes all pending updates are included. If it still fails after
// the second attempt, we'll give up and commit the resulting tree.
var r=St(e);0!==r&&(a=r,d=Op(e,r))}if(1===d){var s=jP;throw Xp(e,0),jp(e,a),Mp(e,Pk()),s}if(6===d)jp(e,a);else{// The render completed.
// Check if this render may have yielded to a concurrent event, and if so,
// confirm that any newly rendered stores are consistent.
// TODO: It's possible that even a concurrent render may never have yielded
// to the main thread, if it was fast enough, or if it expired. We could
// skip the consistency check in that case, too.
var u=!Pt(e,a),l=e.current.alternate;if(u&&!Wp(l)){// We need to check again if something threw
if(d=dm(e,a),2===d){var c=St(e);0!==c&&(a=c,d=Op(e,c))}if(1===d){var f=jP;throw Xp(e,0),jp(e,a),Mp(e,Pk()),f}}// We now have a consistent tree. The next step is either to commit it,
// or, if something suspended, wait to commit it after a timeout.
e.finishedWork=l,e.finishedLanes=a,Ap(e,d,a)}}return Mp(e,Pk()),e.callbackNode===t?Up.bind(null,e):null}function Op(e,n){// If an error occurred during hydration, discard server response and fall
// back to client side render.
// Before rendering again, save the errors from the previous attempt.
var t=YP;if(di(e)){// The shell failed to hydrate. Set a flag to force a client rendering
// during the next attempt. To do this, we call prepareFreshStack now
// to create the root work-in-progress fiber. This is a bit weird in terms
// of factoring, because it relies on renderRootSync not calling
// prepareFreshStack again in the call below, which happens because the
// root and lanes haven't changed.
//
// TODO: I think what we should do is set ForceClientRender inside
// throwException, like we do for nested Suspense boundaries. The reason
// it's here instead is so we can switch to the synchronous work loop, too.
// Something to consider for a future refactor.
var i=Xp(e,n);i.flags|=256,Xd(e.containerInfo)}var a=dm(e,n);if(a!==2){// Successfully finished rendering on retry
// The errors from the failed first attempt have been recovered. Add
// them to the collection of recoverable errors. We'll log them in the
// commit phase.
var o=qP;qP=t,null!==o&&Fp(o)}return a}function Fp(e){null===qP?qP=e:qP.push.apply(qP,e)}function Ap(e,n,t){switch(n){case 0:case 1:throw new Error("Root did not complete. This is a bug in React.");// Flow knows about invariant, so it complains if I add a break
// statement, but eslint doesn't know about invariant, so it complains
// if I do. eslint-disable-next-line no-fallthrough
case 2:{fm(e,qP,JP);break}case 3:{// We have an acceptable loading state. We need to figure out if we
// should immediately commit it or wait a bit.
if(jp(e,t),Ct(t)&&// do not delay if we're inside an act() scope
!Um()){// This render only included retries, no updates. Throttle committing
// retries so that we don't show too many loading states too quickly.
var i=KP+500-Pk();// Don't bother with a very short suspense time.
if(10<i){var a=gt(e,0);if(a!==0)// There's additional work on this root.
break;var o=e.suspendedLanes;if(!Ot(o,t)){// We should prefer to render the fallback of at the last
// suspended level. Ping the last suspended level to try
// rendering it again.
// FIXME: What if the suspended lanes are Idle? Should not restart.
var d=Ep();Yt(e,o);break}// The render is suspended, it hasn't timed out, and there's no
// lower priority work to do. Instead of committing the fallback
// immediately, wait for more data to arrive.
e.timeoutHandle=Zx(fm.bind(null,e,qP,JP),i);break}}// The work expired. Commit immediately.
fm(e,qP,JP);break}case 4:{if(jp(e,t),Tt(t))// This is a transition, so we should exit without committing a
// placeholder and without scheduling a timeout. Delay indefinitely
// until we receive more data.
break;if(!Um()){// This is not a transition, but we did trigger an avoided state.
// Schedule a placeholder to display after a short delay, using the Just
// Noticeable Difference.
// TODO: Is the JND optimization worth the added complexity? If this is
// the only reason we track the event time, then probably not.
// Consider removing.
var r=yt(e,t),s=r,u=Pk()-s,l=Tm(u)-u;// Don't bother with a very short suspense time.
if(10<l){e.timeoutHandle=Zx(fm.bind(null,e,qP,JP),l);break}}// Commit the placeholder.
fm(e,qP,JP);break}case 5:{fm(e,qP,JP);break}default:throw new Error("Unknown root exit status.")}}function Wp(e){// Search the rendered tree for external store reads, and check whether the
// stores were mutated in a concurrent event. Intentionally using an iterative
// loop instead of recursion so we can exit early.
for(var n=e;!0;){if(n.flags&16384){var t=n.updateQueue;if(null!==t){var a=t.stores;if(null!==a)for(var o=0;o<a.length;o++){var d=a[o],r=d.getSnapshot,s=d.value;try{if(!ex(r(),s))// Found an inconsistent store.
return!1}catch(e){// If `getSnapshot` throws, return `false`. This will schedule
// a re-render, and the error will be rethrown during render.
return!1}}}}var u=n.child;if(n.subtreeFlags&16384&&null!==u){u["return"]=n,n=u;continue}if(n===e)return!0;for(;null===n.sibling;){if(null===n["return"]||n["return"]===e)return!0;n=n["return"]}n.sibling["return"]=n["return"],n=n.sibling}// Flow doesn't know this is unreachable, but eslint does
// eslint-disable-next-line no-unreachable
return!0}function jp(e,n){// When suspending, we should always exclude lanes that were pinged or (more
// rarely, since we try to avoid it) updated during the render phase.
// TODO: Lol maybe there's a better way to factor this besides this
// obnoxiously named function :)
n=At(n,$P),n=At(n,VP),$t(e,n)}// This is the entry point for synchronous tasks that don't go
// through Scheduler
function Bp(e){if(Fl(),0!==(6&zP))throw new Error("Should not already be working.");mm();var n=gt(e,0);if(!Ut(n,1))return Mp(e,Pk()),null;var t=dm(e,n);if(0!==e.tag&&2===t){// If something threw an error, try rendering one more time. We'll render
// synchronously to block concurrent data mutations, and we'll includes
// all pending updates are included. If it still fails after the second
// attempt, we'll give up and commit the resulting tree.
var i=St(e);0!==i&&(n=i,t=Op(e,i))}if(1===t){var a=jP;throw Xp(e,0),jp(e,n),Mp(e,Pk()),a}if(6===t)throw new Error("Root did not complete. This is a bug in React.");// We now have a consistent tree. Because this is a sync render, we
// will commit it even if something suspended.
var o=e.current.alternate;return e.finishedWork=o,e.finishedLanes=n,fm(e,qP,JP),Mp(e,Pk()),null}function Hp(e,n){n!==0&&(Kt(e,Ft(n,1)),Mp(e,Pk()),(zP&6)===0&&(Tp(),Er()))}function Vp(e,n){var t=zP;zP|=1;try{return e(n)}finally{zP=t,zP!==0||wP.isBatchingLegacy||(Tp(),_r())}}function $p(e,n,t,i,a){var o=Zt(),d=SP.transition;try{return SP.transition=null,ei(1),e(n,t,i,a)}finally{ei(o),SP.transition=d,0===zP&&Tp()}}// Overload the definition to the two valid signatures.
// Warning, this opts-out of checking the function body.
// eslint-disable-next-line no-redeclare
function Yp(e){null!==i_&&i_.tag===0&&(zP&6)===0&&mm();var n=zP;zP|=1;var t=SP.transition,i=Zt();try{return SP.transition=null,ei(1),e?e():void 0}finally{ei(i),SP.transition=t,zP=n,0===(6&zP)&&Er()}}function qp(){// Used by the renderer to print a warning if certain APIs are called from
// the wrong context.
return(zP&6)!==0}function Kp(e,n){pr(AP,FP,e),FP=Ft(FP,n),BP=Ft(BP,n)}function Qp(e){FP=AP.current,fr(AP,e)}function Xp(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(-1!==t&&(e.timeoutHandle=-1,eC(t)),null!==UP)for(var i=UP["return"],a;null!==i;)a=i.alternate,bf(a,i),i=i["return"];MP=e;var o=Zm(e.current,null);return UP=o,OP=FP=BP=n,WP=0,jP=null,HP=0,VP=0,$P=0,YP=null,qP=null,Ts(),BC.discardPendingWarnings(),o}function Gp(e,n){do{var t=UP;try{if(hs(),Lu(),X(),kP.current=null,null===t||null===t["return"])return WP=1,jP=n,void(UP=null);if(2&t.mode&&Hl(t,!0),Yn(),null!==n&&"object"===_typeof(n)&&"function"==typeof n.then){var i=n;tt(t,i,OP)}else nt(t,n,OP);dc(e,t["return"],t,n,OP),cm(t)}catch(e){n=e,UP===t&&null!==t?(t=t["return"],UP=t):t=UP;continue}// Return to the normal work loop.
return}while(!0)}function Jp(){var e=vP.current;return vP.current=yT,null===e?yT:e}function Zp(e){vP.current=e}function em(){KP=Pk()}function nm(e){HP=Ft(e,HP)}function tm(){WP===0&&(WP=3)}function im(){(WP===0||WP===3||WP===2)&&(WP=4),null!==MP&&(xt(HP)||xt(VP))&&jp(MP,OP)}function am(e){WP!==4&&(WP=2),null===YP?YP=[e]:YP.push(e)}// Called during render to determine if anything has suspended.
// Returns false if we're not sure.
function om(){// If something errored or completed, we can't really be sure,
// so those are false.
return WP===0}function dm(e,n){var t=zP;zP|=2;var i=Jp();// If the root or lanes have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
if(MP!==e||OP!==n){if(Wk){var a=e.memoizedUpdaters;0<a.size&&(Lm(e,OP),a.clear()),Gt(e,n)}JP=Jt(),Xp(e,n)}rt(n);do try{rm();break}catch(n){Gp(e,n)}while(!0);if(hs(),zP=t,Zp(i),null!==UP)// This is a sync render, so we should have finished the whole tree.
throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");return ut(),MP=null,OP=0,WP}// The work loop is an extremely hot path. Tell Closure not to inline it.
/** @noinline */function rm(){// Already timed out, so perform work without checking if we need to yield.
for(;null!==UP;)lm(UP)}function sm(e,n){var t=zP;zP|=2;var i=Jp();// If the root or lanes have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
if(MP!==e||OP!==n){if(Wk){var a=e.memoizedUpdaters;0<a.size&&(Lm(e,OP),a.clear()),Gt(e,n)}JP=Jt(),Tp(),Xp(e,n)}rt(n);do try{um();break}catch(n){Gp(e,n)}while(!0);return hs(),Zp(i),zP=t,null===UP?(ut(),MP=null,OP=0,WP):(st(),0)}/** @noinline */function um(){// Perform work until Scheduler asks us to yield
for(;null!==UP&&!Rk();)lm(UP)}function lm(e){// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var n=e.alternate;G(e);var t;(e.mode&2)===0?t=k_(n,e,FP):(jl(e),t=k_(n,e,FP),Hl(e,!0)),X(),e.memoizedProps=e.pendingProps,null===t?cm(e):UP=t,kP.current=null}function cm(e){// Attempt to complete the current unit of work, then move to the next
// sibling. If there are no more siblings, return to the parent fiber.
var n=e;do{// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var t=n.alternate,i=n["return"];// Check if the work completed or if something threw.
if(0===(32768&n.flags)){G(n);var a=void 0;if(0===(2&n.mode)?a=gf(t,n,FP):(jl(n),a=gf(t,n,FP),Hl(n,!1)),X(),null!==a)return void(UP=a)}else{// This fiber did not complete because something threw. Pop values off
// the stack without entering the complete phase. If this is a boundary,
// capture values if possible.
var o=yf(t,n);// Because this fiber did not complete, don't reset its lanes.
if(null!==o)return o.flags&=32767,void(UP=o);if(0!==(2&n.mode)){Hl(n,!1);for(// Include the time spent working on failed children before continuing.
var d=n.actualDuration,r=n.child;null!==r;)d+=r.actualDuration,r=r.sibling;n.actualDuration=d}if(null!==i)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else return WP=6,void(UP=null)}var s=n.sibling;if(null!==s)return void(UP=s);// Otherwise, return to the parent
// Update the next thing we're working on in case something throws.
n=i,UP=n}while(null!==n);// We've reached the root.
WP===0&&(WP=5)}function fm(e,n,t){// TODO: This no longer makes any sense. We already wrap the mutation and
// layout phases. Should be able to remove.
var i=Zt(),a=SP.transition;try{SP.transition=null,ei(1),pm(e,n,t,i)}finally{SP.transition=a,ei(i)}return null}function pm(e,n,t,a){do// `flushPassiveEffects` will call `flushSyncUpdateQueue` at the end, which
// means `flushPassiveEffects` will sometimes result in additional
// passive effects. So we need to keep flushing in a loop until there are
// no more pending effects.
// TODO: Might be better if `flushPassiveEffects` did not automatically
// flush synchronous work at the end, to avoid factoring hazards like this.
mm();while(null!==i_);if(_m(),0!==(6&zP))throw new Error("Should not already be working.");var o=e.finishedWork,d=e.finishedLanes;if(Hn(d),null===o)return Vn(),null;if(0===d&&r("root.finishedLanes should not be empty during a commit. This is a bug in React."),e.finishedWork=null,e.finishedLanes=0,o===e.current)throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");// commitRoot never returns a continuation; it always finishes synchronously.
// So we can clear these now to allow a new callback to be scheduled.
e.callbackNode=null,e.callbackPriority=0;// Update the first and last pending times on this root. The new first
// pending time is whatever is left on the root fiber.
var s=Ft(o.lanes,o.childLanes);qt(e,s),e===MP&&(MP=null,UP=null,OP=0),0===(2064&o.subtreeFlags)&&0===(2064&o.flags)||t_||(t_=!0,d_=t,zm(Ik,function(){// This render triggered passive effects: release the root cache pool
// *after* passive effects fire to avoid freeing a cache pool that may
// be referenced by a node in the tree (HostRoot, Cache boundary etc)
return mm(),null}));// Check if there are any effects in the whole tree.
// TODO: This is left over from the effect list implementation, where we had
// to check for the existence of `firstEffect` to satisfy Flow. I think the
// only other reason this optimization exists is because it affects profiling.
// Reconsider whether this is necessary.
var u=0!==(15990&o.subtreeFlags),l=0!==(15990&o.flags);if(u||l){var c=SP.transition;SP.transition=null;var f=Zt();ei(1);var p=zP;zP|=4,kP.current=null;// The commit phase is broken into several sub-phases. We do a separate pass
// of the effect list for each phase: all mutation effects come before all
// layout effects, and so on.
// The first phase a "before mutation" phase. We use this phase to read the
// state of the host tree right before we mutate it. This is where
// getSnapshotBeforeUpdate is called.
var m=Tf(e,o);// Mark the current commit time to be shared by all Profilers in this
// batch. This enables them to be grouped later.
Wl(),Gf(e,o,d),qo(e.containerInfo),e.current=o,it(d),np(o,e,d),at(),Tk(),zP=p,ei(f),SP.transition=c}else// No effects.
e.current=o,Wl();var h=t_;if(t_?(t_=!1,i_=e,a_=d):(p_=0,m_=null),s=e.pendingLanes,0===s&&(n_=null),h||Em(e.current,!1),On(o.stateNode,a),Wk&&e.memoizedUpdaters.clear(),xp(),Mp(e,Pk()),null!==n)// There were errors during this render, but recovered from them without
// needing to surface it to the UI. We log them here.
for(var g=e.onRecoverableError,y=0;y<n.length;y++){var b=n[y],v=b.stack,k=b.digest;g(b.value,{componentStack:v,digest:k})}if(ZP){ZP=!1;var S=e_;throw e_=null,S}// If the passive effects are the result of a discrete render, flush them
// synchronously at the end of the current task so that the result is
// immediately observable. Otherwise, we assume that they are not
// order-dependent and do not need to be observed by external systems, so we
// can wait until after paint.
// TODO: We can optimize this by not scheduling the callback earlier. Since we
// currently schedule the callback in multiple places, will wait until those
// are consolidated.
return Ut(a_,1)&&0!==e.tag&&mm(),s=e.pendingLanes,Ut(s,1)?(Ul(),e===u_?s_++:(s_=0,u_=e)):s_=0,Er(),Vn(),null}function mm(){// Returns whether passive effects were flushed.
// TODO: Combine this check with the one in flushPassiveEFfectsImpl. We should
// probably just combine the two functions. I believe they were only separate
// in the first place because we used to wrap it with
// `Scheduler.runWithPriority`, which accepts a function. But now we track the
// priority within React itself, so we can mutate the variable directly.
if(null!==i_){var e=oi(a_),n=ii(16,e),t=SP.transition,i=Zt();try{return SP.transition=null,ei(n),gm()}finally{ei(i),SP.transition=t}}return!1}function hm(e){o_.push(e),t_||(t_=!0,zm(Ik,function(){return mm(),null}))}function gm(){if(null===i_)return!1;// Cache and clear the transitions flag
var e=d_;d_=null;var n=i_,t=a_;if(i_=null,a_=0,0!==(6&zP))throw new Error("Cannot flush passive effects while already rendering.");l_=!0,c_=!1,ot(t);var a=zP;zP|=4,fp(n.current),sp(n,n.current,t,e);// TODO: Move to commitPassiveMountEffects
{var o=o_;o_=[];for(var d=0,r;d<o.length;d++)r=o[d],Df(n,r)}dt(),Em(n.current,!0),zP=a,Er(),c_?n===m_?p_++:(p_=0,m_=n):p_=0,l_=!1,c_=!1,Fn(n);{var s=n.current.stateNode;s.effectDuration=0,s.passiveEffectDuration=0}return!0}function ym(e){return null!==n_&&n_.has(e)}function bm(e){null===n_?n_=new Set([e]):n_.add(e)}function vm(e){ZP||(ZP=!0,e_=e)}function km(e,n,t){var i=Ql(t,n),a=Zl(e,i,1),o=Ms(e,a,1),d=Ep();null!==o&&(Vt(o,1,d),Mp(o,d))}function Sm(e,n,t){if(vf(t),Am(!1),3===e.tag)return void km(e,e,t);var i=null;for(i=n;null!==i;){if(3===i.tag)return void km(i,e,t);if(1===i.tag){var a=i.type,o=i.stateNode;if("function"==typeof a.getDerivedStateFromError||"function"==typeof o.componentDidCatch&&!ym(o)){var d=Ql(t,e),s=ec(i,d,1),u=Ms(i,s,1),l=Ep();return void(null!==u&&(Vt(u,1,l),Mp(u,l)))}}i=i["return"]}r("Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.\n\nError message:\n\n%s",t)}function wm(e,n,t){var i=e.pingCache;null!==i&&i["delete"](n);var a=Ep();Yt(e,t),Fm(e),MP===e&&Ot(OP,t)&&(WP===4||WP===3&&Ct(OP)&&Pk()-KP<500?Xp(e,0):$P=Ft($P,t)),Mp(e,a)}function xm(e,n){n===0&&(n=Ip(e));// TODO: Special case idle priority?
var t=Ep(),i=Ns(e,n);null!==i&&(Vt(i,n,t),Mp(i,t))}function Cm(e){var n=e.memoizedState,t=0;null!==n&&(t=n.retryLane),xm(e,t)}function Rm(e,n){var t=0,i;// Default
switch(e.tag){case 13:i=e.stateNode;var a=e.memoizedState;null!==a&&(t=a.retryLane);break;case 19:i=e.stateNode;break;default:throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}null!==i&&i["delete"](n),xm(e,t)}// Computes the next Just Noticeable Difference (JND) boundary.
// The theory is that a person can't tell the difference between small differences in time.
// Therefore, if we wait a bit longer than necessary that won't translate to a noticeable
// difference in the experience. However, waiting for longer might mean that we can avoid
// showing an intermediate loading state. The longer we have already waited, the harder it
// is to tell small differences in time. Therefore, the longer we've already waited,
// the longer we can wait additionally. At some point we have to give up though.
// We pick a train model where the next boundary commits at a consistent schedule.
// These particular numbers are vague estimates. We expect to adjust them based on research.
function Tm(e){return 120>e?120:480>e?480:1080>e?1080:1920>e?1920:3e3>e?3e3:4320>e?4320:1960*bP(e/1960)}function Pm(){if(50<s_)throw s_=0,u_=null,new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");p_>50&&(p_=0,m_=null,r("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."))}function _m(){BC.flushLegacyContextWarning(),BC.flushPendingUnsafeLifecycleWarnings()}function Em(e,n){G(e),Nm(e,16777216,Sp),n&&Nm(e,33554432,wp),Nm(e,16777216,vp),n&&Nm(e,33554432,kp),X()}function Nm(e,n,t){// We don't need to re-check StrictEffectsMode here.
// This function is only called if that check has already passed.
for(var i=e,a=null,o;null!==i;)o=i.subtreeFlags&n,i!==a&&null!==i.child&&0!==o?i=i.child:(0!==(i.flags&n)&&t(i),i=null===i.sibling?a=i["return"]:i.sibling)}function Im(e){{if((zP&2)!==0)// We let the other warning about render phase updates deal with this one.
return;if(!(1&e.mode))return;var n=e.tag;if(n!==2&&n!==3&&n!==1&&n!==0&&n!==11&&n!==14&&n!==15)// Only warn for user-defined components, not internal ones like Suspense.
return;// We show the whole stack but dedupe on the top component's name because
// the problematic code almost always lies inside that component.
var t=q(e)||"ReactComponent";if(null!==v_){if(v_.has(t))return;v_.add(t)}else v_=new Set([t]);var i=qy;try{G(e),r("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.")}finally{i?G(e):X()}}}function Dm(e){if(Ky&&!Tl())switch(e.tag){case 0:case 11:case 15:{var n=UP&&q(UP)||"Unknown",t=n;// Dedupe by the rendering component because it's the one that needs to be fixed.
if(!x_.has(t)){x_.add(t);var i=q(e)||"Unknown";r("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",i,n,n)}break}case 1:{w_||(r("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),w_=!0);break}}}function Lm(e,n){if(Wk){var t=e.memoizedUpdaters;t.forEach(function(t){Xt(e,t,n)})}}function zm(e,n){{// If we're currently inside an `act` scope, bypass Scheduler and push to
// the `act` queue instead.
var t=wP.current;return null===t?xk(e,n):(t.push(n),C_)}}function Mm(e){return e===C_?void 0:Ck(e);// In production, always call Scheduler. This function will be stripped out.
}function Um(){// Never force flush in production. This function should get stripped out.
return null!==wP.current}function Om(e){{if(!(e.mode&1)){// Legacy mode has additional cases where we suppress a warning.
if(!Cp())// Not in an act environment. No need to warn.
return;if(0!==zP)// Legacy mode doesn't warn if the update is batched, i.e.
// batchedUpdates or flushSync.
return;if(0!==e.tag&&11!==e.tag&&15!==e.tag)// For backwards compatibility with pre-hooks code, legacy mode only
// warns for updates that originate from a hook.
return}else if(!Rp())// Not in an act environment. No need to warn.
return;if(null===wP.current){var n=qy;try{G(e),r("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act",q(e))}finally{n?G(e):X()}}}}function Fm(e){e.tag!==0&&Rp()&&null===wP.current&&r("A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act")}function Am(e){y_=e}/* eslint-disable react-internal/prod-error-codes */function Wm(e){{if(null===R_)// Hot reloading is disabled.
return e;var n=R_(e);return void 0===n?e:n.current;// Use the latest known implementation.
}}function jm(e){// No implementation differences.
return Wm(e)}function Bm(e){{if(null===R_)// Hot reloading is disabled.
return e;var n=R_(e);if(n===void 0){// Check if we're dealing with a real forwardRef. Don't want to crash early.
if(null!==e&&e!==void 0&&"function"==typeof e.render){// ForwardRef is special because its resolved .type is an object,
// but it's possible that we only have its inner render function in the map.
// If that inner render function is different, we'll build a new forwardRef type.
var t=Wm(e.render);if(e.render!==t){var i={$$typeof:vy,render:t};return void 0!==e.displayName&&(i.displayName=e.displayName),i}}return e}// Use the latest known implementation.
return n.current}}function Hm(e,n){{if(null===R_)// Hot reloading is disabled.
return!1;var t=e.elementType,i=n.type,a=!1,o="object"===_typeof(i)&&null!==i?i.$$typeof:null;// If we got here, we know types aren't === equal.
switch(e.tag){case 1:{"function"==typeof i&&(a=!0);break}case 0:{"function"==typeof i?a=!0:o===xy&&(a=!0);break}case 11:{o===vy?a=!0:o===xy&&(a=!0);break}case 14:case 15:{o===wy?a=!0:o===xy&&(a=!0);break}default:return!1}// Check if both types have a family and it's the same one.
if(a){// Note: memo() and forwardRef() we'll compare outer rather than inner type.
// This means both of them need to be registered to preserve state.
// If we unwrapped and compared the inner types for wrappers instead,
// then we would risk falsely saying two separate memo(Foo)
// calls are equivalent because they wrap the same Foo function.
var d=R_(t);if(d!==void 0&&d===R_(i))return!0}return!1}}function Vm(e){{if(null===R_)// Hot reloading is disabled.
return;if("function"!=typeof WeakSet)return;null===T_&&(T_=new WeakSet),T_.add(e)}}function $m(e,n,t){{var i=e.alternate,a=e.child,o=e.sibling,d=e.tag,r=e.type,s=null;if(0===d||15===d||1===d?s=r:11===d?s=r.render:void 0,null===R_)throw new Error("Expected resolveFamily to be set during hot reload.");var u=!1,l=!1;if(null!==s){var c=R_(s);void 0!==c&&(t.has(c)?l=!0:n.has(c)&&(1===d?l=!0:u=!0))}if(null!==T_&&(T_.has(e)||null!==i&&T_.has(i))&&(l=!0),l&&(e._debugNeedsRemount=!0),l||u){var f=Ns(e,1);null!==f&&Dp(f,e,1,-1)}null===a||l||$m(a,n,t),null!==o&&$m(o,n,t)}}function Ym(e,n,t){{var i=e.child,a=e.sibling,o=e.tag,d=e.type,r=null;0===o||15===o||1===o?r=d:11===o?r=d.render:void 0;var s=!1;null!==r&&n.has(r)&&(s=!0),s?qm(e,t):null!==i&&Ym(i,n,t),null!==a&&Ym(a,n,t)}}function qm(e,n){{var t=Km(e,n);if(t)return;// If we didn't find any host children, fallback to closest host parent.
for(var i=e;!0;){switch(i.tag){case 5:return void n.add(i.stateNode);case 4:return void n.add(i.stateNode.containerInfo);case 3:return void n.add(i.stateNode.containerInfo)}if(null===i["return"])throw new Error("Expected to reach root first.");i=i["return"]}}}function Km(e,n){for(var t=e,i=!1;!0;){if(5===t.tag)i=!0,n.add(t.stateNode);else if(null!==t.child){t.child["return"]=t,t=t.child;continue}if(t===e)return i;for(;null===t.sibling;){if(null===t["return"]||t["return"]===e)return i;t=t["return"]}t.sibling["return"]=t["return"],t=t.sibling}return!1}function Qm(e,n,t,i){var a=Number.NaN;// Instance
// Fiber
// Effects
this.tag=e,this.key=t,this.elementType=null,this.type=null,this.stateNode=null,this["return"]=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=n,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.dependencies=null,this.mode=i,this.flags=0,this.subtreeFlags=0,this.deletions=null,this.lanes=0,this.childLanes=0,this.alternate=null,this.actualDuration=a,this.actualStartTime=a,this.selfBaseDuration=a,this.treeBaseDuration=a,this.actualDuration=0,this.actualStartTime=-1,this.selfBaseDuration=0,this.treeBaseDuration=0,this._debugSource=null,this._debugOwner=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,!I_&&"function"==typeof Object.preventExtensions&&Object.preventExtensions(this)}// This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
function Xm(e){var n=e.prototype;return!!(n&&n.isReactComponent)}function Gm(e){return"function"==typeof e&&!Xm(e)&&e.defaultProps===void 0}function Jm(e){if("function"==typeof e)return Xm(e)?1:0;if(void 0!==e&&null!==e){var n=e.$$typeof;if(n===vy)return 11;if(n===wy)return 14}return 2}// This is used to create an alternate fiber to do work on.
function Zm(e,n){var t=e.alternate;null===t?(t=L_(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t._debugSource=e._debugSource,t._debugOwner=e._debugOwner,t._debugHookTypes=e._debugHookTypes,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null,t.actualDuration=0,t.actualStartTime=-1),t.flags=14680064&e.flags,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue;// Clone the dependencies object. This is mutated during the render phase, so
// it cannot be shared with the current fiber.
var i=e.dependencies;switch(t.dependencies=null===i?null:{lanes:i.lanes,firstContext:i.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.selfBaseDuration=e.selfBaseDuration,t.treeBaseDuration=e.treeBaseDuration,(t._debugNeedsRemount=e._debugNeedsRemount,t.tag)){case 2:case 0:case 15:t.type=Wm(e.type);break;case 1:t.type=jm(e.type);break;case 11:t.type=Bm(e.type)}return t}// Used to reuse a Fiber for a second pass.
function eh(e,n){e.flags&=14680066;// The effects are no longer valid.
var t=e.alternate;if(null===t)// Reset to createFiber's initial values.
e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0;else{e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type;// Clone the dependencies object. This is mutated during the render phase, so
// it cannot be shared with the current fiber.
var i=t.dependencies;e.dependencies=null===i?null:{lanes:i.lanes,firstContext:i.firstContext},e.selfBaseDuration=t.selfBaseDuration,e.treeBaseDuration=t.treeBaseDuration}return e}function nh(e,n,t){var i;return 1===e?(i=1,!0===n&&(i|=8,i|=16)):i=0,Wk&&(i|=2),L_(3,null,null,i)}function th(e,// React$ElementType
n,t,i,a,o){var d=2,r=e;// The resolved type is set if we know what the final type will be. I.e. it's not lazy.
if("function"==typeof e)Xm(e)?(d=1,r=jm(r)):r=Wm(r);else if("string"==typeof e)d=5;else getTag:switch(e){case my:return ah(t.children,a,o,n);case hy:d=8,a|=8,0!==(1&a)&&(a|=16);break;case gy:return oh(t,a,o,n);case ky:return dh(t,a,o,n);case Sy:return rh(t,a,o,n);case Ty:return sh(t,a,o,n);case Py:// eslint-disable-next-line no-fallthrough
case Cy:// eslint-disable-next-line no-fallthrough
case _y:// eslint-disable-next-line no-fallthrough
case Ey:// eslint-disable-next-line no-fallthrough
case Ry:// eslint-disable-next-line no-fallthrough
default:{if("object"===_typeof(e)&&null!==e)switch(e.$$typeof){case yy:d=10;break getTag;case by:d=9;break getTag;case vy:d=11,r=Bm(r);break getTag;case wy:d=14;break getTag;case xy:d=16,r=null;break getTag}var s="";{(void 0===e||"object"===_typeof(e)&&null!==e&&0===Object.keys(e).length)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var u=i?q(i):null;u&&(s+="\n\nCheck the render method of `"+u+"`.")}throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(null==e?e:_typeof(e))+"."+s)}}var l=L_(d,t,n,a);return l.elementType=e,l.type=r,l.lanes=o,l._debugOwner=i,l}function ih(e,n,t){var i=null;i=e._owner;var a=e.type,o=e.key,d=e.props,r=th(a,o,d,i,n,t);return r._debugSource=e._source,r._debugOwner=e._owner,r}function ah(e,n,t,i){var a=L_(7,e,i,n);return a.lanes=t,a}function oh(e,n,t,i){"string"!=typeof e.id&&r("Profiler must specify an \"id\" of type `string` as a prop. Received the type `%s` instead.",_typeof(e.id));var a=L_(12,e,i,2|n);return a.elementType=gy,a.lanes=t,a.stateNode={effectDuration:0,passiveEffectDuration:0},a}function dh(e,n,t,i){var a=L_(13,e,i,n);return a.elementType=ky,a.lanes=t,a}function rh(e,n,t,i){var a=L_(19,e,i,n);return a.elementType=Sy,a.lanes=t,a}function sh(e,n,t,i){var a=L_(22,e,i,n);a.elementType=Ty,a.lanes=t;var o={isHidden:!1};return a.stateNode=o,a}function uh(e,n,t){var i=L_(6,e,null,n);return i.lanes=t,i}function lh(){var e=L_(5,null,null,0);return e.elementType="DELETED",e}function ch(e){var n=L_(18,null,null,0);return n.stateNode=e,n}function fh(e,n,t){var i=null===e.children?[]:e.children,a=L_(4,i,e.key,n);return a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,// Used by persistent updates
implementation:e.implementation},a}// Used for stashing WIP properties to replay failed work in DEV.
function ph(e,n){return null===e&&(e=L_(2,null,null,0)),e.tag=n.tag,e.key=n.key,e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e["return"]=n["return"],e.child=n.child,e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.pendingProps=n.pendingProps,e.memoizedProps=n.memoizedProps,e.updateQueue=n.updateQueue,e.memoizedState=n.memoizedState,e.dependencies=n.dependencies,e.mode=n.mode,e.flags=n.flags,e.subtreeFlags=n.subtreeFlags,e.deletions=n.deletions,e.lanes=n.lanes,e.childLanes=n.childLanes,e.alternate=n.alternate,e.actualDuration=n.actualDuration,e.actualStartTime=n.actualStartTime,e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration,e._debugSource=n._debugSource,e._debugOwner=n._debugOwner,e._debugNeedsRemount=n._debugNeedsRemount,e._debugHookTypes=n._debugHookTypes,e}function mh(e,n,t,i,a){this.tag=n,this.containerInfo=e,this.pendingChildren=null,this.current=null,this.pingCache=null,this.finishedWork=null,this.timeoutHandle=-1,this.context=null,this.pendingContext=null,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Ht(0),this.expirationTimes=Ht(-1),this.pendingLanes=0,this.suspendedLanes=0,this.pingedLanes=0,this.expiredLanes=0,this.mutableReadLanes=0,this.finishedLanes=0,this.entangledLanes=0,this.entanglements=Ht(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null,this.effectDuration=0,this.passiveEffectDuration=0;{this.memoizedUpdaters=new Set;for(var o=this.pendingUpdatersLaneMap=[],d=0;d<31;d++)o.push(new Set)}1===n?this._debugRootType=t?"hydrateRoot()":"createRoot()":0===n?this._debugRootType=t?"hydrate()":"render()":void 0}function hh(e,n,t,i,a,o,d,// TODO: We have several of these arguments that are conceptually part of the
// host config, but because they are passed in at runtime, we have to thread
// them through the root constructor. Perhaps we should put them all into a
// single type, like a DynamicHostConfig that is defined by the renderer.
r,s,u){var l=new mh(e,n,t,r,s),c=nh(n,o);// stateNode is any.
l.current=c,c.stateNode=l;{var f={element:i,isDehydrated:t,cache:null,// not enabled yet
transitions:null,pendingSuspenseBoundaries:null};c.memoizedState=f}return Ds(c),l}function gh(e,n,// TODO: figure out the API for cross-renderer implementation.
t){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return h(i),{// This tag allow us to uniquely identify this as a React Portal
$$typeof:py,key:null==i?null:""+i,children:e,containerInfo:n,implementation:t}}function yh(e){if(!e)return yC;var n=Sn(e),t=Rr(n);if(n.tag===1){var i=n.type;if(br(i))return wr(n,i,t)}return t}function bh(e,n){{var t=Sn(e);if(t===void 0)if("function"==typeof e.render)throw new Error("Unable to find node on an unmounted component.");else{var i=Object.keys(e).join(",");throw new Error("Argument appears to not be a ReactComponent. Keys: "+i)}var a=In(t);if(null===a)return null;if(8&a.mode){var o=q(t)||"Component";if(!U_[o]){U_[o]=!0;var d=qy;try{G(a),8&t.mode?r("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",n,n,o):r("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",n,n,o)}finally{d?G(d):X()}}}return a.stateNode}}function vh(e,n,t,i,a,o,d,r){var s=!1,u=null;return hh(e,n,!1,u,t,i,a,o,d)}function kh(e,// TODO: Remove `callback` when we delete legacy mode.
n,t,i,a,o,d,r,s,u){var l=!0,c=hh(t,i,!0,e,a,o,d,r,s);c.context=yh(null);// Schedule the initial render. In a hydration root, this is different from
// a regular update because the initial render must match was was rendered
// on the server.
// NOTE: This update intentionally doesn't have a payload. We're only using
// the update to schedule work on the root fiber (and, for legacy roots, to
// enqueue the callback if one is provided).
var f=c.current,p=Ep(),m=Np(f),h=zs(p,m);return h.callback=void 0!==n&&null!==n?n:null,Ms(f,h,m),Lp(c,m,p),c}function Sh(e,n,t,i){Un(n,e);var a=n.current,o=Ep(),d=Np(a);lt(d);var s=yh(t);null===n.context?n.context=s:n.pendingContext=s,Ky&&null!==qy&&!M_&&(M_=!0,r("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.",q(qy)||"Unknown"));var u=zs(o,d);// Caution: React DevTools currently depends on this property
// being called "element".
u.payload={element:e},i=void 0===i?null:i,null!==i&&("function"!=typeof i&&r("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",i),u.callback=i);var l=Ms(a,u,d);return null!==l&&(Dp(l,a,d,o),Us(l,a,d)),d}function wh(e){var n=e.current;if(!n.child)return null;switch(n.child.tag){case 5:return $o(n.child.stateNode);default:return n.child.stateNode}}function xh(e){switch(e.tag){case 3:{var n=e.stateNode;if(di(n)){// Flush the first scheduled "update".
var t=kt(n);Hp(n,t)}break}case 13:{Yp(function(){var n=Ns(e,1);if(null!==n){var t=Ep();Dp(n,e,1,t)}});// If we're still blocked after this, we need to increase
// the priority of any promises resolving within this
// boundary so that they next attempt also has higher pri.
var i=1;Rh(e,1);break}}}function Ch(e,n){var t=e.memoizedState;null!==t&&null!==t.dehydrated&&(t.retryLane=Bt(t.retryLane,n))}// Increases the priority of thenables when they resolve within this boundary.
function Rh(e,n){Ch(e,n);var t=e.alternate;t&&Ch(t,n)}function Th(e){if(13===e.tag)// We ignore HostRoots here because we can't increase
// their priority and they should not suspend on I/O,
// since you have to wrap anything that might suspend in
// Suspense.
{var n=134217728,t=Ns(e,134217728);if(null!==t){var i=Ep();Dp(t,e,134217728,i)}Rh(e,134217728)}}function Ph(e){if(13===e.tag)// We ignore HostRoots here because we can't increase
// their priority other than synchronously flush it.
{var n=Np(e),t=Ns(e,n);if(null!==t){var i=Ep();Dp(t,e,n,i)}Rh(e,n)}}function _h(e){var n=Ln(e);return null===n?null:n.stateNode}function Eh(e){return O_(e)}function Nh(e){return F_(e)}function Ih(e){var n=In(e);return null===n?null:n.stateNode}function Dh(e){return null}function Lh(){return qy}function zh(e){var n=e.findFiberByHostInstance,t=ag.ReactCurrentDispatcher;return Mn({bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:A_,overrideHookStateDeletePath:W_,overrideHookStateRenamePath:j_,overrideProps:B_,overridePropsDeletePath:H_,overridePropsRenamePath:V_,setErrorHandler:Y_,setSuspenseHandler:q_,scheduleUpdate:$_,currentDispatcherRef:t,findHostInstanceByFiber:Ih,findFiberByHostInstance:n||Dh,// React Refresh
findHostInstancesForRefresh:N_,scheduleRefresh:__,scheduleRoot:E_,setRefreshHandler:P_,// Enables DevTools to append owner stacks to error messages in DEV mode.
getCurrentFiber:Lh,// Enables DevTools to detect reconciler version rather than renderer version
// which may not match for third party renderers.
reconcilerVersion:"18.2.0"})}/* global reportError */function Mh(e){this._internalRoot=e}function Uh(e,n){if(!Wh(e))throw new Error("createRoot(...): Target container is not a DOM element.");Bh(e);var t=!1,i=!1,a="",o=nE,s=null;null!==n&&void 0!==n&&(n.hydrate?d("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):"object"===_typeof(n)&&null!==n&&n.$$typeof===fy&&r("You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:\n\n  let root = createRoot(domContainer);\n  root.render(<App />);"),!0===n.unstable_strictMode&&(t=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError),void 0!==n.transitionCallbacks&&(s=n.transitionCallbacks));var u=vh(e,1,null,t,i,a,o);er(u.current,e);var l=8===e.nodeType?e.parentNode:e;return co(l),new Mh(u)}function Oh(e){this._internalRoot=e}function Fh(e){e&&vi(e)}function Ah(e,n,t){if(!Wh(e))throw new Error("hydrateRoot(...): Target container is not a DOM element.");Bh(e),void 0===n&&r("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");// For now we reuse the whole bag of options since they contain
// the hydration callbacks.
var a=null==t?null:t,o=null!=t&&t.hydratedSources||null,d=!1,s=!1,u="",l=nE;// TODO: Delete this option
null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(d=!0),void 0!==t.identifierPrefix&&(u=t.identifierPrefix),void 0!==t.onRecoverableError&&(l=t.onRecoverableError));var c=kh(n,null,e,1,a,d,s,u,l);if(er(c.current,e),co(e),o)for(var f=0,p;f<o.length;f++)p=o[f],xu(c,p);return new Oh(c)}function Wh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&!0)}// TODO: Remove this function which also includes comment nodes.
// We only use it in places that are currently more relaxed.
function jh(e){return!!(e&&(e.nodeType===1||e.nodeType===9||e.nodeType===11||e.nodeType===8&&" react-mount-point-unstable "===e.nodeValue))}function Bh(e){e.nodeType===1&&e.tagName&&"BODY"===e.tagName.toUpperCase()&&r("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."),tr(e)&&(e._reactRootContainer?r("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):r("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}function Hh(e){return e?9===e.nodeType?e.documentElement:e.firstChild:null}function Vh(){// This isn't reachable because onRecoverableError isn't called in the
// legacy API.
}function $h(e,n,t,i,a){if(a){if("function"==typeof i){var o=i;i=function callback(){var e=wh(d);o.call(e)}}var d=kh(n,i,e,0,null,!1,!1,// concurrentUpdatesByDefaultOverride,
"",// identifierPrefix
Vh);e._reactRootContainer=d,er(d.current,e);var r=8===e.nodeType?e.parentNode:e;return co(r),Yp(),d}// First clear any existing content.
for(var s;s=e.lastChild;)e.removeChild(s);if("function"==typeof i){var u=i;i=function callback(){var e=wh(l);u.call(e)}}var l=vh(e,0,null,!1,!1,// concurrentUpdatesByDefaultOverride,
"",// identifierPrefix
Vh);e._reactRootContainer=l,er(l.current,e);var c=8===e.nodeType?e.parentNode:e;return co(c),Yp(function(){Sh(n,l,t,i)}),l}function Yh(e,n){null!==e&&"function"!=typeof e&&r("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",n,e)}function qh(e,n,t,i,a){iE(t),Yh(a===void 0?null:a,"render");var o=t._reactRootContainer,d;if(!o)// Initial mount
d=$h(t,n,e,a,i);else{if(d=o,"function"==typeof a){var r=a;a=function callback(){var e=wh(d);r.call(e)}}// Update
Sh(n,d,e,a)}return wh(d)}function Kh(e){{var n=tE.current;if(null!==n&&null!==n.stateNode){var t=n.stateNode._warnedAboutRefsInRender;t||r("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",V(n.type)||"A component"),n.stateNode._warnedAboutRefsInRender=!0}}if(null==e)return null;if(1===e.nodeType)return e;return bh(e,"findDOMNode")}function Qh(e,n,t){if(r("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!jh(n))throw new Error("Target container is not a DOM element.");{var i=tr(n)&&void 0===n._reactRootContainer;i&&r("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?")}// TODO: throw or warn if we couldn't hydrate?
return qh(null,e,n,!0,t)}function Xh(e,n,t){if(r("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!jh(n))throw new Error("Target container is not a DOM element.");{var i=tr(n)&&void 0===n._reactRootContainer;i&&r("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?")}return qh(null,e,n,!1,t)}function Gh(e,n,t,i){if(r("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!jh(t))throw new Error("Target container is not a DOM element.");if(null==e||!wn(e))throw new Error("parentComponent must be a valid React Component");return qh(e,n,t,!1,i)}function Jh(e){if(!jh(e))throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");{var n=tr(e)&&e._reactRootContainer===void 0;n&&r("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?")}if(e._reactRootContainer){{var t=Hh(e),i=t&&!ar(t);i&&r("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.")}// Unmount should not be batched.
// If you call unmountComponentAtNode twice in quick succession, you'll
// get `true` twice. That's probably fine?
return Yp(function(){qh(null,null,e,!1,function(){e._reactRootContainer=null,nr(e)})}),!0}{var a=Hh(e),o=!!(a&&ar(a)),d=1===e.nodeType&&jh(e.parentNode)&&!!e.parentNode._reactRootContainer;// Check if the container itself is a React root node.
o&&r("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",d?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component.")}return!1}function Zh(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(n))throw new Error("Target container is not a DOM element.");// TODO: pass ReactDOM portal implementation as third argument
// $FlowFixMe The Flow type is opaque but there's no way to actually create it.
return gh(e,n,null,t)}function eg(e,n,t,i){return Gh(e,n,t,i)}function ng(e,n){return aE.usingClientEntryPoint||!0||r("You are importing createRoot from \"react-dom\" which is not supported. You should instead import it from \"react-dom/client\"."),Uh(e,n)}function tg(e,n,t){return aE.usingClientEntryPoint||!0||r("You are importing hydrateRoot from \"react-dom\" which is not supported. You should instead import it from \"react-dom/client\"."),Ah(e,n,t)}// Overload the definition to the two valid signatures.
// Warning, this opts-out of checking the function body.
// eslint-disable-next-line no-redeclare
function ig(e){return qp()&&r("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."),Yp(e)}var ag=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,og=!1,dg=0,rg=1,sg=2,ug=3,lg=4,cg=5,fg=6,pg=7,mg=8,hg=9,gg=10,yg=11,bg=12,vg=13,kg=14,Sg=15,wg=16,xg=17,Cg=18,Rg=19,Tg=21,Pg=22,_g=23,Eg=24,Ng=25,Ig=!0,Dg=!1,Lg=!1,zg=!1,Mg=!1,Ug=!0,Og=!1,Fg=!1,Ag=!0,Wg=!0,jg=!0,Bg=new Set,Hg={},Vg={},$g=!("undefined"==typeof window||"undefined"==typeof window.document||"undefined"==typeof window.document.createElement),Yg=Object.prototype.hasOwnProperty,qg=0,Kg=1,Qg=2,Xg=3,Gg=4,Jg=5,Zg=6,ey=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",ny=ey+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",ty=new RegExp("^["+ey+"]["+ny+"]*$"),iy={},ay={},oy={},dy=["children","dangerouslySetInnerHTML",// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
"defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];// Before we know whether it is function or class
// Root of a host tree. Could be nested inside another node.
// A subtree. Could be an entry point to a different renderer.
// -----------------------------------------------------------------------------
// TODO: Need to review this code one more time before landing
// the react-reconciler package.
// Support legacy Primer support on internal FB www
// FB-only usage. The new API has different semantics.
// Enables unstable_avoidThisFallback feature in Fiber
// Enables unstable_avoidThisFallback feature in Fizz
// React DOM Chopping Block
//
// Similar to main Chopping Block but only flags related to React DOM. These are
// grouped because we will likely batch all of them into a single major release.
// -----------------------------------------------------------------------------
// Disable support for comment nodes as React DOM containers. Already disabled
// in open source, but www codebase still relies on it. Need to remove.
// Disable javascript: URL strings in href for XSS protection.
// and client rendering, mostly to allow JSX attributes to apply to the custom
// element's object properties instead of only HTML attributes.
// https://github.com/facebook/react/issues/11347
// Disables children for <textarea> elements
// -----------------------------------------------------------------------------
// Debugging and DevTools
// -----------------------------------------------------------------------------
// Adds user timing marks for e.g. state updates, suspense, and work loop stuff,
// for an experimental timeline tool.
// Helps identify side effects in render-phase lifecycle hooks and setState
// Record durations for commit and passive effects phases.
// Phase param passed to onRender callback differentiates between an "update" and a "cascading-update".
/**
   * Mapping from registration name to event name
   */ /**
   * Mapping from lowercase registration names to the properly cased version,
   * used to warn in the case of missing event handlers. Available
   * only in true.
   * @type {Object}
   */ // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.
// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
/* eslint-disable max-len */ /* eslint-enable max-len */ // These props are reserved by React. They shouldn't be written to the DOM.
dy.forEach(function(e){oy[e]=new R(e,qg,!1,// mustUseProperty
e,// attributeName
null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0],t=e[1];oy[n]=new R(n,Kg,!1,// mustUseProperty
t,// attributeName
null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){oy[e]=new R(e,Qg,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oy[e]=new R(e,Qg,!1,// mustUseProperty
e,// attributeName
null,!1,!1)}),["allowFullScreen","async",// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
"autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless",// Microdata
"itemScope"].forEach(function(e){oy[e]=new R(e,Xg,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,!1,!1)}),["checked",// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
"multiple","muted","selected"// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(e){oy[e]=new R(e,Xg,!0,// mustUseProperty
e,// attributeName
null,!1,!1)}),["capture","download"// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(e){oy[e]=new R(e,Gg,!1,// mustUseProperty
e,// attributeName
null,!1,!1)}),["cols","rows","size","span"// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(e){oy[e]=new R(e,Zg,!1,// mustUseProperty
e,// attributeName
null,!1,!1)}),["rowSpan","start"].forEach(function(e){oy[e]=new R(e,Jg,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,!1,!1)});var ry=/[\-\:]([a-z])/g,sy=function capitalize(e){return e[1].toUpperCase()};// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.
["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(e){var n=e.replace(ry,sy);oy[n]=new R(n,Kg,!1,// mustUseProperty
e,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(e){var n=e.replace(ry,sy);oy[n]=new R(n,Kg,!1,// mustUseProperty
e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"// NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function(e){var n=e.replace(ry,sy);oy[n]=new R(n,Kg,!1,// mustUseProperty
e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){oy[e]=new R(e,Kg,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,!1,!1)});// These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.
var uy="xlinkHref";oy.xlinkHref=new R("xlinkHref",Kg,!1,// mustUseProperty
"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){oy[e]=new R(e,Kg,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null,!0,!0)});// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space
/* eslint-disable max-len */var ly=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,cy=!1,fy=Symbol["for"]("react.element"),py=Symbol["for"]("react.portal"),my=Symbol["for"]("react.fragment"),hy=Symbol["for"]("react.strict_mode"),gy=Symbol["for"]("react.profiler"),yy=Symbol["for"]("react.provider"),by=Symbol["for"]("react.context"),vy=Symbol["for"]("react.forward_ref"),ky=Symbol["for"]("react.suspense"),Sy=Symbol["for"]("react.suspense_list"),wy=Symbol["for"]("react.memo"),xy=Symbol["for"]("react.lazy"),Cy=Symbol["for"]("react.scope"),Ry=Symbol["for"]("react.debug_trace_mode"),Ty=Symbol["for"]("react.offscreen"),Py=Symbol["for"]("react.legacy_hidden"),_y=Symbol["for"]("react.cache"),Ey=Symbol["for"]("react.tracing_marker"),Ny=Symbol.iterator,Iy="@@iterator",Dy=Object.assign,Ly=0,zy,My,Uy,Oy,Fy,Ay,Wy;// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
I.__reactDisabledLog=!0;var jy=ag.ReactCurrentDispatcher,By=!1,Hy,Vy;{var $y="function"==typeof WeakMap?WeakMap:Map;Vy=new $y}var Yy=ag.ReactDebugCurrentFrame,qy=null,Ky=!1,Qy={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},Xy=!1,Gy=!1,Jy=!1,Zy=!1,eb=!1,nb=!1,tb=!1,ib=Array.isArray,ab;ab=!1;var ob=["value","defaultValue"],db=!1,rb="http://www.w3.org/1999/xhtml",sb="http://www.w3.org/1998/Math/MathML",ub="http://www.w3.org/2000/svg",lb=function createMicrosoftUnsafeLocalFunction(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(n,t,i,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,a)})}:e},cb=lb(function(e,n){if(e.namespaceURI===ub&&!("innerHTML"in e)){Sb=Sb||document.createElement("div"),Sb.innerHTML="<svg>"+n.valueOf().toString()+"</svg>";for(var t=Sb.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild);return}e.innerHTML=n}),fb=1,pb=3,mb=8,hb=9,gb=11,yb=function setTextContent(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===pb)return void(t.nodeValue=n)}e.textContent=n},bb={animation:["animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction"],background:["backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundSize"],backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:["borderBottomColor","borderBottomStyle","borderBottomWidth","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRightColor","borderRightStyle","borderRightWidth","borderTopColor","borderTopStyle","borderTopWidth"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:["fontFamily","fontFeatureSettings","fontKerning","fontLanguageOverride","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition","fontWeight","lineHeight"],fontVariant:["fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition"],gap:["columnGap","rowGap"],grid:["gridAutoColumns","gridAutoFlow","gridAutoRows","gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:["maskClip","maskComposite","maskImage","maskMode","maskOrigin","maskPositionX","maskPositionY","maskRepeat","maskSize"],maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},vb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kb=["Webkit","ms","Moz","O"],Sb;/**
   * Set the innerHTML property of a node
   *
   * @param {DOMElement} node
   * @param {string} html
   * @internal
   */ /**
   * HTML nodeType values that represent the type of the node
   */ /**
   * Set the textContent property of a node. For text updates, it's faster
   * to set the `nodeValue` of the Text node directly instead of using
   * `.textContent` which will remove the existing node and create a new one.
   *
   * @param {DOMElement} node
   * @param {string} text
   * @internal
   */ // List derived from Gecko source code:
// https://github.com/mozilla/gecko-dev/blob/4e638efc71/layout/style/test/property_database.js
/**
   * CSS properties which accept numbers but are not in units of "px".
   */ // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(vb).forEach(function(e){kb.forEach(function(n){vb[Fe(n,e)]=vb[e]})});var wb=/([A-Z])/g,xb=/^ms-/,Cb=function warnValidStyle(){};{// 'msTransform' is correct, but the other prefixes should be capitalized
var Rb=/^(?:webkit|moz|o)[A-Z]/,Tb=/^-ms-/,Pb=/-(.)/g,_b=/;\s*$/,Eb={},Nb={},Ib=!1,Db=!1,Lb=function camelize(e){return e.replace(Pb,function(e,n){return n.toUpperCase()})},zb=function warnHyphenatedStyleName(e){Eb.hasOwnProperty(e)&&Eb[e]||(Eb[e]=!0,r("Unsupported style property %s. Did you mean %s?",e,// As Andi Smith suggests
// (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
// is converted to lowercase `ms`.
Lb(e.replace(Tb,"ms-"))))},Mb=function warnBadVendoredStyleName(e){Eb.hasOwnProperty(e)&&Eb[e]||(Eb[e]=!0,r("Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1)))},Ub=function warnStyleValueWithSemicolon(e,n){Nb.hasOwnProperty(n)&&Nb[n]||(Nb[n]=!0,r("Style property values shouldn't contain a semicolon. Try \"%s: %s\" instead.",e,n.replace(_b,"")))},Ob=function warnStyleValueIsNaN(e,n){Ib||(Ib=!0,r("`NaN` is an invalid value for the `%s` css style property.",e))},Fb=function warnStyleValueIsInfinity(e,n){Db||(Db=!0,r("`Infinity` is an invalid value for the `%s` css style property.",e))};// style values shouldn't contain a semicolon
Cb=function warnValidStyle(e,n){-1<e.indexOf("-")?zb(e):Rb.test(e)?Mb(e):_b.test(n)&&Ub(e,n),"number"==typeof n&&(isNaN(n)?Ob(e,n):!isFinite(n)&&Fb(e,n))}}var Ab=Cb,Wb={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0// NOTE: menuitem's close tag should be omitted, but that causes problems.
},jb=Dy({menuitem:!0},Wb),Bb="__html",Hb={// HTML
accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",// SVG
about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},Vb={"aria-current":0,// state
"aria-description":0,"aria-details":0,"aria-disabled":0,// state
"aria-hidden":0,// state
"aria-invalid":0,// state
"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,// Widget Attributes
"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,// Live Region Attributes
"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,// Drag-and-Drop Attributes
"aria-dropeffect":0,"aria-grabbed":0,// Relationship Attributes
"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},$b={},Yb=new RegExp("^(aria)-["+ny+"]*$"),qb=new RegExp("^(aria)[A-Z]["+ny+"]*$"),Kb=!1,Qb=function validateProperty$1(){};// `omittedCloseTags` except that `menuitem` should still have its closing tag.
{var Xb={},Gb=/^on./,Jb=/^on[^A-Z]/,Zb=new RegExp("^(aria)-["+ny+"]*$"),ev=new RegExp("^(aria)[A-Z]["+ny+"]*$");Qb=function validateProperty$1(e,n,t,i){if(Yg.call(Xb,n)&&Xb[n])return!0;var a=n.toLowerCase();if("onfocusin"===a||"onfocusout"===a)return r("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),Xb[n]=!0,!0;// We can't rely on the event system being injected on the server.
if(null!=i){var o=i.registrationNameDependencies,d=i.possibleRegistrationNames;if(o.hasOwnProperty(n))return!0;var s=d.hasOwnProperty(a)?d[a]:null;if(null!=s)return r("Invalid event handler property `%s`. Did you mean `%s`?",n,s),Xb[n]=!0,!0;if(Gb.test(n))return r("Unknown event handler property `%s`. It will be ignored.",n),Xb[n]=!0,!0}else if(Gb.test(n))return Jb.test(n)&&r("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",n),Xb[n]=!0,!0;// Let the ARIA attribute hook validate ARIA attributes
if(Zb.test(n)||ev.test(n))return!0;if("innerhtml"===a)return r("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),Xb[n]=!0,!0;if("aria"===a)return r("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),Xb[n]=!0,!0;if("is"===a&&null!==t&&void 0!==t&&"string"!=typeof t)return r("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",_typeof(t)),Xb[n]=!0,!0;if("number"==typeof t&&isNaN(t))return r("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",n),Xb[n]=!0,!0;var u=C(n),l=null!==u&&u.type===qg;// Known attributes should match the casing specified in the property config.
if(Hb.hasOwnProperty(a)){var c=Hb[a];if(c!==n)return r("Invalid DOM property `%s`. Did you mean `%s`?",n,c),Xb[n]=!0,!0}else if(!l&&n!==a)return r("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",n,a),Xb[n]=!0,!0;return"boolean"==typeof t&&w(n,t,u,!1)?(t?r("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.",t,n,n,t,n):r("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",t,n,n,t,n,n,n),Xb[n]=!0,!0):!!l||(w(n,t,u,!1)?(Xb[n]=!0,!1):"false"!==t&&"true"!==t||null===u||u.type!==Xg||(r("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",t,n,"false"===t?"The browser will interpret it as a truthy value.":"Although this works, it will not work as expected if you pass the string \"false\".",n,t),Xb[n]=!0,!0));// Now that we've validated casing, do not validate
// data types for reserved props
// Warn when a known attribute is a bad type
// Warn when passing the strings 'false' or 'true' into a boolean prop
}}var nv=function warnUnknownProperties(e,n,t){{var i=[];for(var a in n){var o=Qb(e,a,n[a],t);o||i.push(a)}var d=i.map(function(e){return"`"+e+"`"}).join(", ");1===i.length?r("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",d,e):1<i.length&&r("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",d,e)}},tv=1,iv=2,av=4,ov=tv|iv|av,dv=null,rv=null,sv=null,uv=null,lv=function batchedUpdatesImpl(e,n){return e(n)},cv=function flushSyncImpl(){},fv=!1,pv=!1;// set to LEGACY_FB_SUPPORT. LEGACY_FB_SUPPORT only gets set when
// we call willDeferLaterForLegacyFBSupport, thus not bailing out
// will result in endless cycles like an infinite loop.
// We also don't want to defer during event replaying.
// This exists to avoid circular dependency between ReactDOMEventReplaying
// and DOMPluginEventSystem.
// Check if browser support events with passive listeners
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
if($g)try{var mv={};// $FlowFixMe: Ignore Flow complaining about needing a value
Object.defineProperty(mv,"passive",{get:function get(){pv=!0}}),window.addEventListener("test",mv,mv),window.removeEventListener("test",mv,mv)}catch(n){pv=!1}var hv=hn;// In DEV mode, we swap out invokeGuardedCallback for a special version
// that plays more nicely with the browser's DevTools. The idea is to preserve
// "Pause on exceptions" behavior. Because React wraps all user-provided
// functions in invokeGuardedCallback, and the production version of
// invokeGuardedCallback uses a try-catch, all user exceptions are treated
// like caught exceptions, and the DevTools won't pause unless the developer
// takes the extra step of enabling pause on caught exceptions. This is
// unintuitive, though, because even though React has caught the error, from
// the developer's perspective, the error is uncaught.
//
// To preserve the expected "Pause on exceptions" behavior, we don't use a
// try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
// DOM node, and call the user-provided callback from inside an event handler
// for that fake event. If the callback throws, the error is "captured" using
// a global event handler. But because the error happens in a different
// event loop context, it does not interrupt the normal program flow.
// Effectively, this gives us try-catch behavior without actually using
// try-catch. Neat!
// Check that the browser supports the APIs we need to implement our special
// DEV version of invokeGuardedCallback
if("undefined"!=typeof window&&"function"==typeof window.dispatchEvent&&"undefined"!=typeof document&&"function"==typeof document.createEvent){var gv=document.createElement("react");hv=function u(n,t,i,o,a,r,s,d,e){function l(){gv.removeEventListener(S,c,!1),"undefined"!=typeof window.event&&window.hasOwnProperty("event")&&(window.event=g)}// Create an event handler for our fake event. We will synchronously
// dispatch our fake event using `dispatchEvent`. Inside the handler, we
// call the user-provided callback.
function c(){m=!0,l(),t.apply(i,b),h=!1}// Create a global error event handler. We use this to capture the value
// that was thrown. It's possible that this error handler will fire more
// than once; for example, if non-React code also calls `dispatchEvent`
// and a handler for that event throws. We should be resilient to most of
// those cases. Even if our error event handler fires more than once, the
// last error event is always used. If the callback actually does error,
// we know that the last error event is the correct one, because it's not
// possible for anything else to have happened in between our callback
// erroring and the code that follows the `dispatchEvent` call below. If
// the callback doesn't error, but the error event was fired, we know to
// ignore it because `didError` will be false, as described above.
function f(e){if(w=e.error,v=!0,null===w&&0===e.colno&&0===e.lineno&&(k=!0),e.defaultPrevented&&null!=w&&"object"===_typeof(w))// Some other error handler has prevented default.
// Browsers silence the error report if this happens.
// We'll remember this to later decide whether to log it or not.
try{w._suppressLogging=!0}catch(e){// Ignore.
}}// Create a fake event type.
// If document doesn't exist we know for sure we will crash in this method
// when we call document.createEvent(). However this can cause confusing
// errors: https://github.com/facebook/create-react-app/issues/3482
// So we preemptively throw with a better message instead.
if("undefined"==typeof document||null===document)throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");var p=document.createEvent("Event"),m=!1,h=!0,g=window.event,y=Object.getOwnPropertyDescriptor(window,"event"),b=Array.prototype.slice.call(arguments,3),v=!1,k=!1,S="react-"+(n?n:"invokeguardedcallback"),w;// Keeps track of whether the user-provided callback threw an error. We
// set this to true at the beginning, then set it to false right after
// calling the function. If the function errors, `didError` will never be
// set to false. This strategy works even if the browser is flaky and
// fails to call our global error handler, because it doesn't rely on
// the error event at all.
// Keeps track of the value of window.event so that we can reset it
// during the callback to let user code access window.event in the
// browsers that support it.
// Keeps track of the descriptor of window.event to restore it after event
// dispatching: https://github.com/facebook/react/issues/13688
// Use this to track whether the error event is ever called.
// Attach our event handlers
if(window.addEventListener("error",f),gv.addEventListener(S,c,!1),p.initEvent(S,!1,!1),gv.dispatchEvent(p),y&&Object.defineProperty(window,"event",y),m&&h&&(v?k&&(w=new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")):w=new Error("An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the \"Pause on exceptions\" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue."),this.onError(w)),window.removeEventListener("error",f),!m)return l(),hn.apply(this,arguments)}}var yv=hv,bv=!1,vv=null,kv=!1,Sv=null,wv={onError:function onError(e){bv=!0,vv=e}},xv=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cv=xv.Scheduler,Rv=Cv.unstable_cancelCallback,Tv=Cv.unstable_now,Pv=Cv.unstable_scheduleCallback,_v=Cv.unstable_shouldYield,Ev=Cv.unstable_requestPaint,Nv=Cv.unstable_getFirstCallbackNode,Iv=Cv.unstable_runWithPriority,Dv=Cv.unstable_next,Lv=Cv.unstable_continueExecution,zv=Cv.unstable_pauseExecution,Mv=Cv.unstable_getCurrentPriorityLevel,Uv=Cv.unstable_ImmediatePriority,Ov=Cv.unstable_UserBlockingPriority,Fv=Cv.unstable_NormalPriority,Av=Cv.unstable_LowPriority,Wv=Cv.unstable_IdlePriority,jv=Cv.unstable_forceFrameRate,Bv=Cv.unstable_flushAllWithoutAsserting,Hv=Cv.unstable_yieldValue,Vv=Cv.unstable_setDisableYieldValue,$v=/*                      */0,Yv=/*                */1,qv=/*                    */2,Kv=/*                       */4,Qv=/*                */16,Xv=/*                 */32,Gv=/*                     */64,Jv=/*                   */128,Zv=/*            */256,ek=/*                          */512,nk=/*                     */1024,tk=/*                      */2048,ik=/*                    */4096,ak=/*                   */8192,ok=/*             */16384,dk=tk|Kv|Gv|ek|nk|ok,rk=/*               */32767,sk=/*                   */32768,uk=/*                */65536,lk=/* */131072,ck=/*                       */1048576,fk=/*                    */2097152,pk=/*                 */4194304,mk=/*                */8388608,hk=/*               */16777216,gk=/*              */33554432,yk=// TODO: Remove Update flag from before mutation phase by re-landing Visibility
// flag logic (see #20043)
0|(Kv|nk),bk=qv|Kv|Qv|Xv|ek|ik|ak,vk=Kv|Gv|ek|ak,kk=tk|Qv,Sk=pk|mk|fk,wk=ag.ReactCurrentOwner,xk=Pv,Ck=Rv,Rk=_v,Tk=Ev,Pk=Tv,_k=Mv,Ek=Uv,Nk=Ov,Ik=Fv,Dk=Av,Lk=Wv,zk=Hv,Mk=Vv,Uk=null,Ok=null,Fk=null,Ak=!1,Wk="undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__,jk=/*                         */0,Bk=/*                 */1,Hk=/*                    */2,Vk=/*               */8,$k=/*              */16,Yk=t?t:pt,qk=Math.log,Kk=Math.LN2,Qk=31,Xk=/*                        */0,Gk=/*                          */0,Jk=/*                        */1,Zk=/*    */2,eS=/*             */4,nS=/*            */8,tS=/*                     */16,iS=/*                */32,aS=/*                       */4194240,oS=/*                        */64,dS=/*                        */128,rS=/*                        */256,sS=/*                        */512,uS=/*                        */1024,lS=/*                        */2048,cS=/*                        */4096,fS=/*                        */8192,pS=/*                        */16384,mS=/*                       */32768,hS=/*                       */65536,gS=/*                       */131072,yS=/*                       */262144,bS=/*                       */524288,vS=/*                       */1048576,kS=/*                       */2097152,SS=/*                            */130023424,wS=/*                             */4194304,xS=/*                             */8388608,CS=/*                             */16777216,RS=/*                             */33554432,TS=/*                             */67108864,PS=wS,_S=/*          */134217728,ES=/*                          */268435455,NS=/*               */268435456,IS=/*                        */536870912,DS=/*                   */1073741824,LS=-1,zS=oS,MS=wS,US=Jk,OS=eS,FS=tS,AS=IS,WS=Gk,jS=!1,BS=[],HS=null,VS=null,$S=null,YS=new Map,qS=new Map,KS=[],QS=["mousedown","mouseup","touchcancel","touchend","touchstart","auxclick","dblclick","pointercancel","pointerdown","pointerup","dragend","dragstart","drop","compositionend","compositionstart","keydown","keypress","keyup","input","textInput",// Intentionally camelCase
"copy","cut","paste","click","change","contextmenu","reset","submit"],XS=ag.ReactCurrentBatchConfig,GS=!0,JS=null,ZS=null,ew=null,nw=null,tw={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function timeStamp(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iw=$i(tw),aw=Dy({},tw,{view:0,detail:0}),ow=$i(aw),dw=Dy({},aw,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qi,button:0,buttons:0,relatedTarget:function relatedTarget(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function movementX(e){return"movementX"in e?e.movementX:(Yi(e),jw)},movementY:function movementY(e){return"movementY"in e?e.movementY:Bw;// Don't need to call updateMouseMovementPolyfillState() here
// because it's guaranteed to have already run when movementX
// was copied.
}}),rw=$i(dw),sw=Dy({},dw,{dataTransfer:0}),uw=$i(sw),lw=Dy({},aw,{relatedTarget:0}),cw=$i(lw),fw=Dy({},tw,{animationName:0,elapsedTime:0,pseudoElement:0}),pw=$i(fw),mw=Dy({},tw,{clipboardData:function clipboardData(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hw=$i(mw),gw=Dy({},tw,{data:0}),yw=$i(gw),bw=yw,vw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},ww=Dy({},aw,{key:qi,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qi,// Legacy Interface
charCode:function charCode(e){// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
return"keypress"===e.type?Bi(e):0},keyCode:function keyCode(e){// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function which(e){// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
return"keypress"===e.type?Bi(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),xw=$i(ww),Cw=Dy({},dw,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rw=$i(Cw),Tw=Dy({},aw,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qi}),Pw=$i(Tw),_w=Dy({},tw,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ew=$i(_w),Nw=Dy({},dw,{deltaX:function deltaX(e){return"deltaX"in e?e.deltaX:// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function deltaY(e){return"deltaY"in e?e.deltaY:// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
"wheelDeltaY"in e?-e.wheelDeltaY:// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:0}),Iw=$i(Nw),Dw=[9,13,27,32],Lw=229,zw=$g&&"CompositionEvent"in window,Mw=null,Uw,Ow,Fw,Aw,Ww,jw,Bw,Hw;// Used by event system to capture/rethrow the first error.
// You can change the rest (and add more).
// Union of all commit flags (flags with the lifetime of a particular commit)
// These are not really side effects, but we still reuse this field.
// Static tags describe aspects of a fiber that are not specific to a render,
// e.g. a fiber uses a passive effect (even if there are no updates on this particular render).
// This enables us to defer more work in the unmount case,
// since we can defer traversing the tree during layout to look for Passive effects,
// and instead rely on the static flag as a signal that there may be cleanup work.
// These flags allow us to traverse to fibers that have effects on mount
// without traversing the entire tree after every commit for
// double invoking
// Groups of flags that are used in the commit phase to skip over trees that
// don't contain effects, by checking subtreeFlags.
// TODO: Split into PassiveMountMask and PassiveUnmountMask
// Union of tags that don't get reset on clones.
// This allows certain concepts to persist without recalculating them,
// e.g. whether a subtree contains passive effects or portals.
// this doesn't actually exist on the scheduler, but it *does*
// on scheduler/unstable_mock, which we'll need for internal testing
// TODO: Remove ConcurrentMode by reading from the root tag instead
// TODO: This is pretty well supported by browsers. Maybe we can drop it.
// Count leading zeros.
// Based on:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32
// The queue of discrete events to be replayed.
// Indicates if any continuous event targets are non-null for early bailout.
// if the last target was dehydrated.
// For pointer events there can be one latest event per pointerId.
// We could consider replaying selectionchange and touchmoves too.
// TODO: can we stop exporting these?
/**
   * @interface DragEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */ /**
   * @interface FocusEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */ /**
   * @interface Event
   * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
   */ /**
   * @interface Event
   * @see http://www.w3.org/TR/clipboard-apis/
   */ /**
   * @interface Event
   * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
   */ /**
   * @interface Event
   * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
   *      /#events-inputevents
   */ // Happens to share the same list for now.
/**
   * Normalization of deprecated HTML5 `key` values
   * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
   */ /**
   * Translation from legacy `keyCode` to HTML5 `key`
   * Only special keys supported, all others depend on keyboard layout or browser
   * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
   */ /**
   * @interface PointerEvent
   * @see http://www.w3.org/TR/pointerevents/
   */ /**
   * @interface TouchEvent
   * @see http://www.w3.org/TR/touch-events/
   */ /**
   * @interface Event
   * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
   * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
   */ /**
   * @interface WheelEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */ // Tab, Return, Esc, Space
$g&&"documentMode"in document&&(Mw=document.documentMode);// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var Vw=$g&&"TextEvent"in window&&!Mw,$w=$g&&(!zw||Mw&&8<Mw&&11>=Mw),Yw=32,qw=a(Yw),Kw=!1,Qw=!1,Xw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Gw=null,Jw=null,Zw=!1;// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
$g&&(Zw=ua("input")&&(!document.documentMode||9<document.documentMode));var ex="function"==typeof Object.is?Object.is:Ea,nx=$g&&"documentMode"in document&&11>=document.documentMode,tx=null,ix=null,ax=null,ox=!1,dx={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},rx={},sx={};/**
   * Event names that have already been detected and prefixed (if applicable).
   */ /**
   * Element to check for prefixes on.
   */ /**
   * Bootstrap if a DOM exists.
   */$g&&(sx=document.createElement("div").style,!("AnimationEvent"in window)&&(delete dx.animationend.animation,delete dx.animationiteration.animation,delete dx.animationstart.animation),!("TransitionEvent"in window)&&delete dx.transitionend.transition);var ux=Za("animationend"),lx=Za("animationiteration"),cx=Za("animationstart"),fx=Za("transitionend"),px=new Map,mx=["abort","auxClick","cancel","canPlay","canPlayThrough","click","close","contextMenu","copy","cut","drag","dragEnd","dragEnter","dragExit","dragLeave","dragOver","dragStart","drop","durationChange","emptied","encrypted","ended","error","gotPointerCapture","input","invalid","keyDown","keyPress","keyUp","load","loadedData","loadedMetadata","loadStart","lostPointerCapture","mouseDown","mouseMove","mouseOut","mouseOver","mouseUp","paste","pause","play","playing","pointerCancel","pointerDown","pointerMove","pointerOut","pointerOver","pointerUp","progress","rateChange","reset","resize","seeked","seeking","stalled","submit","suspend","timeUpdate","touchCancel","touchEnd","touchStart","volumeChange","scroll","toggle","touchMove","waiting","wheel"];// NOTE: Capitalization is important in this list!
//
// E.g. it needs "pointerDown", not "pointerdown".
// This is because we derive both React name ("onPointerDown")
// and DOM name ("pointerdown") from the same list.
//
// Exceptions that don't match this convention are listed separately.
//
// prettier-ignore
no(),Pa(),la(),qa(),Xi();var hx=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","resize","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],gx=new Set(["cancel","close","invalid","load","scroll","toggle"].concat(hx)),yx="_reactListening"+Math.random().toString(36).slice(2),bx=!1,vx="dangerouslySetInnerHTML",kx="suppressContentEditableWarning",Sx="suppressHydrationWarning",wx="autoFocus",xx="children",Cx="style",Rx="__html",Tx,Px,_x,Ex,Nx,Ix,Dx;// We should not delegate these events to the container, but rather
// set them on the actual target element itself. This is primarily
// because these events do not consistently bubble in the DOM.
// IE 11 parses & normalizes the style attribute as opposed to other
// browsers. It adds spaces and sorts the properties in some
// non-alphabetical order. Handling that would require sorting CSS
// properties in the client & server versions or applying
// `expectedStyle` to a temporary DOM node to read its `style` attribute
// normalized. Since it only affects IE, we're skipping style warnings
// in that browser completely in favor of doing all that work.
// See https://github.com/facebook/react/issues/11807
// Parse the HTML and read it back to normalize the HTML string so that it
// can be used for comparison.
Tx={// There are working polyfills for <dialog>. Let people use it.
dialog:!0,// Electron ships a custom <webview> tag to display external web content in
// an isolated frame and process.
// This tag is not present in non Electron environments such as JSDom which
// is often used for testing purposes.
// @see https://electronjs.org/docs/api/webview-tag
webview:!0},Px=function validatePropertiesInDevelopment(e,n){Xe(e,n),Ge(e,n),Je(e,n,{registrationNameDependencies:Hg,possibleRegistrationNames:Vg})},Ix=$g&&!document.documentMode,_x=function warnForPropDifference(e,n,t){if(!bx){var i=xo(t),a=xo(n);a===i||(bx=!0,r("Prop `%s` did not match. Server: %s Client: %s",e,JSON.stringify(a),JSON.stringify(i)))}},Ex=function warnForExtraAttributes(e){if(!bx){bx=!0;var n=[];e.forEach(function(e){n.push(e)}),r("Extra attributes from the server: %s",n)}},Nx=function warnForInvalidEventListener(e,n){!1===n?r("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):r("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,_typeof(n))},Dx=function normalizeHTML(e,n){// We could have created a separate document here to avoid
// re-initializing custom elements if they exist. But this breaks
// how <noscript> is being handled. So we use the same document.
// See the discussion in https://github.com/facebook/react/pull/11157.
var t=e.namespaceURI===rb?e.ownerDocument.createElement(e.tagName):e.ownerDocument.createElementNS(e.namespaceURI,e.tagName);return t.innerHTML=n,t.innerHTML};// HTML parsing normalizes CR and CRLF to LF.
// It also can turn \u0000 into \uFFFD inside attributes.
// https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
// If we have a mismatch, it might be caused by that.
// We will still patch up in this case but not fire the warning.
var Lx=/\r\n?/g,zx=/\u0000|\uFFFD/g,Mx=function validateDOMNesting(){},Ux=function updatedAncestorInfo(){};{// This validation code was written based on the HTML5 parsing spec:
// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
//
// Note: this does not catch all invalid nesting, nor does it try to (as it's
// not clear what practical benefit doing so provides); instead, we warn only
// for cases where the parser will give a parse tree differing from what React
// intended. For example, <b><div></div></b> is invalid but we don't warn
// because it still parses correctly; we do warn for other cases like nested
// <p> tags where the beginning of the second element implicitly closes the
// first, causing a confusing mess.
// https://html.spec.whatwg.org/multipage/syntax.html#special
var Ox=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],Fx=["applet","caption","html","table","td","th","marquee","object","template",// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
"foreignObject","desc","title"],Ax=Fx.concat(["button"]),Wx=["dd","dt","li","option","optgroup","p","rp","rt"],jx={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
// https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
Ux=function updatedAncestorInfo(e,n){var t=Dy({},e||jx),i={tag:n};return-1!==Fx.indexOf(n)&&(t.aTagInScope=null,t.buttonTagInScope=null,t.nobrTagInScope=null),-1!==Ax.indexOf(n)&&(t.pTagInButtonScope=null),-1!==Ox.indexOf(n)&&"address"!==n&&"div"!==n&&"p"!==n&&(t.listItemTagAutoclosing=null,t.dlItemTagAutoclosing=null),t.current=i,"form"===n&&(t.formTag=i),"a"===n&&(t.aTagInScope=i),"button"===n&&(t.buttonTagInScope=i),"nobr"===n&&(t.nobrTagInScope=i),"p"===n&&(t.pTagInButtonScope=i),"li"===n&&(t.listItemTagAutoclosing=i),("dd"===n||"dt"===n)&&(t.dlItemTagAutoclosing=i),t};/**
     * Returns whether
     */var Bx=function isTagValidWithParent(e,n){// First, let's check if we're in an unusual parsing mode...
return"select"===n?"option"===e||"optgroup"===e||"#text"===e:"optgroup"===n?"option"===e||"#text"===e:"option"===n?"#text"===e:"tr"===n?"th"===e||"td"===e||"style"===e||"script"===e||"template"===e:"tbody"===n||"thead"===n||"tfoot"===n?"tr"===e||"style"===e||"script"===e||"template"===e:"colgroup"===n?"col"===e||"template"===e:"table"===n?"caption"===e||"colgroup"===e||"tbody"===e||"tfoot"===e||"thead"===e||"style"===e||"script"===e||"template"===e:"head"===n?"base"===e||"basefont"===e||"bgsound"===e||"link"===e||"meta"===e||"title"===e||"noscript"===e||"noframes"===e||"style"===e||"script"===e||"template"===e:"html"===n?"head"===e||"body"===e||"frameset"===e:"frameset"===n?"frame"===e:"#document"===n?"html"===e:"h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e?"h1"!==n&&"h2"!==n&&"h3"!==n&&"h4"!==n&&"h5"!==n&&"h6"!==n:"rp"===e||"rt"===e?-1===Wx.indexOf(n):"body"!==e&&"caption"!==e&&"col"!==e&&"colgroup"!==e&&"frameset"!==e&&"frame"!==e&&"head"!==e&&"html"!==e&&"tbody"!==e&&"td"!==e&&"tfoot"!==e&&"th"!==e&&"thead"!==e&&"tr"!==e||null==n;// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
},Hx=function findInvalidAncestorForTag(e,n){return"address"===e||"article"===e||"aside"===e||"blockquote"===e||"center"===e||"details"===e||"dialog"===e||"dir"===e||"div"===e||"dl"===e||"fieldset"===e||"figcaption"===e||"figure"===e||"footer"===e||"header"===e||"hgroup"===e||"main"===e||"menu"===e||"nav"===e||"ol"===e||"p"===e||"section"===e||"summary"===e||"ul"===e||"pre"===e||"listing"===e||"table"===e||"hr"===e||"xmp"===e||"h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e?n.pTagInButtonScope:"form"===e?n.formTag||n.pTagInButtonScope:"li"===e?n.listItemTagAutoclosing:"dd"===e||"dt"===e?n.dlItemTagAutoclosing:"button"===e?n.buttonTagInScope:"a"===e?n.aTagInScope:"nobr"===e?n.nobrTagInScope:null},Vx={};/**
     * Returns whether
     */Mx=function validateDOMNesting(e,n,t){t=t||jx;var i=t.current,a=i&&i.tag;null!=n&&(null!=e&&r("validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var o=Bx(e,a)?null:i,d=o?null:Hx(e,t),s=o||d;if(s){var u=s.tag,l=!!o+"|"+e+"|"+u;if(!Vx[l]){Vx[l]=!0;var c=e,f="";if("#text"===e?/\S/.test(n)?c="Text nodes":(c="Whitespace text nodes",f=" Make sure you don't have any extra whitespace between tags on each line of your source code."):c="<"+e+">",o){var p="";"table"===u&&"tr"===e&&(p+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),r("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",c,u,f,p)}else r("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",c,u)}}}}var $x="suppressHydrationWarning",Yx="$",qx="/$",Kx="$?",Qx="$!",Xx="style",Gx=null,Jx=null,Zx="function"==typeof setTimeout?setTimeout:void 0,eC="function"==typeof clearTimeout?clearTimeout:void 0,nC=-1,tC="function"==typeof Promise?Promise:void 0,iC="function"==typeof queueMicrotask?queueMicrotask:"undefined"==typeof tC?Zx:function(e){return tC.resolve(null).then(e)["catch"](nd)},aC=Math.random().toString(36).slice(2),oC="__reactFiber$"+aC,dC="__reactProps$"+aC,rC="__reactContainer$"+aC,sC="__reactEvents$"+aC,uC="__reactListeners$"+aC,lC="__reactHandles$"+aC,cC={},fC=ag.ReactDebugCurrentFrame,pC=[],mC;// -------------------
mC=[];var hC=-1,gC;gC={};var yC={};Object.freeze(yC);// A cursor to the current merged context object on the stack.
var bC=cr(yC),vC=cr(!1),kC=yC,SC=0,wC=1,xC=null,CC=!1,RC=!1,TC=[],PC=0,_C=null,EC=0,NC=[],IC=0,DC=null,LC=1,zC="",MC=null,UC=null,OC=!1,FC=!1,AC=null,WC=ag.ReactCurrentBatchConfig,jC=null,BC={recordUnsafeLifecycleWarnings:function recordUnsafeLifecycleWarnings(e,n){},flushPendingUnsafeLifecycleWarnings:function flushPendingUnsafeLifecycleWarnings(){},recordLegacyContextWarning:function recordLegacyContextWarning(e,n){},flushLegacyContextWarning:function flushLegacyContextWarning(){},discardPendingWarnings:function discardPendingWarnings(){}};// A cursor to a boolean indicating whether the context has changed.
// Keep track of the previous context object that was on the stack.
// We use this to get access to the parent context after we have already
// pushed the next context provider, and now need to merge their contexts.
// This flag allows for warning supression when we expect there to be mismatches
// due to earlier mismatches or a suspended fiber.
// Hydration errors that were thrown inside this boundary
{var HC=function findStrictRoot(e){for(var n=null,t=e;null!==t;)t.mode&Vk&&(n=t),t=t["return"];return n},VC=function setToSortedString(e){var n=[];return e.forEach(function(e){n.push(e)}),n.sort().join(", ")},$C=[],YC=[],qC=[],KC=[],QC=[],XC=[],GC=new Set;// Tracks components we have already warned about.
BC.recordUnsafeLifecycleWarnings=function(e,n){// Dedupe strategy: Warn once per component.
GC.has(e.type)||("function"==typeof n.componentWillMount&&// Don't warn about react-lifecycles-compat polyfilled components.
!0!==n.componentWillMount.__suppressDeprecationWarning&&$C.push(e),e.mode&Vk&&"function"==typeof n.UNSAFE_componentWillMount&&YC.push(e),"function"==typeof n.componentWillReceiveProps&&!0!==n.componentWillReceiveProps.__suppressDeprecationWarning&&qC.push(e),e.mode&Vk&&"function"==typeof n.UNSAFE_componentWillReceiveProps&&KC.push(e),"function"==typeof n.componentWillUpdate&&!0!==n.componentWillUpdate.__suppressDeprecationWarning&&QC.push(e),e.mode&Vk&&"function"==typeof n.UNSAFE_componentWillUpdate&&XC.push(e))},BC.flushPendingUnsafeLifecycleWarnings=function(){// We do an initial pass to gather component names
var e=new Set;0<$C.length&&($C.forEach(function(n){e.add(q(n)||"Component"),GC.add(n.type)}),$C=[]);var n=new Set;0<YC.length&&(YC.forEach(function(e){n.add(q(e)||"Component"),GC.add(e.type)}),YC=[]);var t=new Set;0<qC.length&&(qC.forEach(function(e){t.add(q(e)||"Component"),GC.add(e.type)}),qC=[]);var i=new Set;0<KC.length&&(KC.forEach(function(e){i.add(q(e)||"Component"),GC.add(e.type)}),KC=[]);var a=new Set;0<QC.length&&(QC.forEach(function(e){a.add(q(e)||"Component"),GC.add(e.type)}),QC=[]);var o=new Set;// Finally, we flush all the warnings
// UNSAFE_ ones before the deprecated ones, since they'll be 'louder'
if(0<XC.length&&(XC.forEach(function(e){o.add(q(e)||"Component"),GC.add(e.type)}),XC=[]),0<n.size){var s=VC(n);r("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s",s)}if(0<i.size){var u=VC(i);r("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %s",u)}if(0<o.size){var l=VC(o);r("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s",l)}if(0<e.size){var c=VC(e);d("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",c)}if(0<t.size){var f=VC(t);d("componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",f)}if(0<a.size){var p=VC(a);d("componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",p)}};var JC=new Map,ZC=new Set;// Tracks components we have already warned about.
BC.recordLegacyContextWarning=function(e,n){var t=HC(e);if(null===t)return void r("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");// Dedup strategy: Warn once per component.
if(!ZC.has(e.type)){var i=JC.get(t);(null!=e.type.contextTypes||null!=e.type.childContextTypes||null!==n&&"function"==typeof n.getChildContext)&&(void 0===i&&(i=[],JC.set(t,i)),i.push(e))}},BC.flushLegacyContextWarning=function(){JC.forEach(function(e,n){if(0!==e.length){var t=e[0],i=new Set;e.forEach(function(e){i.add(q(e)||"Component"),ZC.add(e.type)});var a=VC(i);try{G(t),r("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context",a)}finally{X()}}})},BC.discardPendingWarnings=function(){$C=[],YC=[],qC=[],KC=[],QC=[],XC=[],JC=new Map}}var eR=cr(null),nR;// Use this to detect multiple renderers using the same context
nR={};var tR=null,iR=null,aR=null,oR=!1,dR=null,rR=Is,sR=0,uR=1,lR=2,cR=3,fR=!1,pR,mR;// Global state that is reset at the beginning of calling `processUpdateQueue`.
// It should only be read right after calling `processUpdateQueue`, via
// `checkHasForceUpdateAfterProcessing`.
pR=!1,mR=null;var hR={},gR=new n.Component().refs,yR,bR,vR,kR,SR,wR,xR,CR,RR,TR;// React.Component uses a shared frozen object by default.
// We'll use it to determine whether we need to initialize legacy refs.
{yR=new Set,bR=new Set,vR=new Set,kR=new Set,CR=new Set,SR=new Set,RR=new Set,TR=new Set;var PR=new Set;// This is so gross but it's at least non-critical and can be removed if
// it causes problems. This is meant to give a nicer error message for
// ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
// ...)) which otherwise throws a "_processChildContext is not a function"
// exception.
xR=function warnOnInvalidCallback(e,n){if(null!==e&&"function"!=typeof e){var t=n+"_"+e;PR.has(t)||(PR.add(t),r("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",n,e))}},wR=function warnOnUndefinedDerivedState(e,n){if(n===void 0){var t=V(e)||"Component";SR.has(t)||(SR.add(t),r("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",t))}},Object.defineProperty(hR,"_processChildContext",{enumerable:!1,value:function value(){throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(hR)}var _R={isMounted:_n,enqueueSetState:function enqueueSetState(e,n,t){var i=Sn(e),a=Ep(),o=Np(i),d=zs(a,o);d.payload=n,t!==void 0&&null!==t&&(xR(t,"setState"),d.callback=t);var r=Ms(i,d,o);null!==r&&(Dp(r,i,o,a),Us(r,i,o)),ft(i,o)},enqueueReplaceState:function enqueueReplaceState(e,n,t){var i=Sn(e),a=Ep(),o=Np(i),d=zs(a,o);d.tag=uR,d.payload=n,t!==void 0&&null!==t&&(xR(t,"replaceState"),d.callback=t);var r=Ms(i,d,o);null!==r&&(Dp(r,i,o,a),Us(r,i,o)),ft(i,o)},enqueueForceUpdate:function enqueueForceUpdate(e,n){var t=Sn(e),i=Ep(),a=Np(t),o=zs(i,a);o.tag=lR,n!==void 0&&null!==n&&(xR(n,"forceUpdate"),o.callback=n);var d=Ms(t,o,a);null!==d&&(Dp(d,t,a,i),Us(d,t,a)),ct(t,a)}},ER=function warnForMissingKey(e,n){},NR,IR,DR,LR,zR;/**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */NR=!1,IR=!1,DR={},LR={},zR={},ER=function warnForMissingKey(e,n){if(null!==e&&"object"===_typeof(e)&&e._store&&!e._store.validated&&null==e.key){if("object"!==_typeof(e._store))throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");e._store.validated=!0;var t=q(n)||"Component";LR[t]||(LR[t]=!0,r("Each child in a list should have a unique \"key\" prop. See https://reactjs.org/link/warning-keys for more information."))}};var MR=au(!0),UR=au(!1),OR={},FR=cr(OR),AR=cr(OR),WR=cr(OR),jR=0,BR=1,HR=1,VR=2,$R=cr(jR),YR=/*   */0,qR=/* */1,KR=/*  */2,QR=/*    */4,XR=/*   */8,GR=[],JR=ag.ReactCurrentDispatcher,ZR=ag.ReactCurrentBatchConfig,eT,nT;// The Suspense Context is split into two parts. The lower bits is
// inherited deeply down the subtree. The upper bits only affect
// this immediate suspense boundary and gets reset each new
// boundary or suspense list.
// Subtree Flags:
// InvisibleParentSuspenseContext indicates that one of our parent Suspense
// boundaries is not currently showing visible main content.
// Either because it is already showing a fallback or is not mounted at all.
// We can use this to determine if it is desirable to trigger a fallback at
// the parent. If not, then we might need to trigger undesirable boundaries
// and/or suspend the commit to avoid hiding the parent content.
// Shallow Flags:
// ForceSuspenseFallback can be used by SuspenseList to force newly added
// items into their fallback state during one of the render passes.
// Represents whether effect should fire.
// Represents the phase in which the effect (not the clean-up) fires.
// and should be reset before starting a new render.
// This tracks which mutable sources need to be reset after a render.
eT=new Set;// These are set right before calling the component.
var tT=Xk,iT=null,aT=null,oT=null,dT=!1,rT=!1,sT=0,uT=0,lT=25,cT=null,fT=null,pT=-1,mT=!1,hT=pl,gT=!1,yT={readContext:Cs,useCallback:_u,useContext:_u,useEffect:_u,useImperativeHandle:_u,useInsertionEffect:_u,useLayoutEffect:_u,useMemo:_u,useReducer:_u,useRef:_u,useState:_u,useDebugValue:_u,useDeferredValue:_u,useTransition:_u,useMutableSource:_u,useSyncExternalStore:_u,useId:_u,unstable_isNewReconciler:Dg},bT=null,vT=null,kT=null,ST=null,wT=null,xT=null,CT=null;// The work-in-progress fiber. I've named it differently to distinguish it from
// the work-in-progress hook.
// Hooks are stored as a linked list on the fiber's memoizedState field. The
// current hook list is the list that belongs to the current fiber. The
// work-in-progress hook list is a new list that will be added to the
// work-in-progress fiber.
// Whether an update was scheduled at any point during the render phase. This
// does not get reset if we do another render pass; only when we're completely
// finished evaluating this component. This is an optimization so we know
// whether we need to clear render phase updates after a throw.
// Where an update was scheduled only during the current render pass. This
// gets reset after each attempt.
// TODO: Maybe there's some way to consolidate this with
// `didScheduleRenderPhaseUpdate`. Or with `numberOfReRenders`.
// Counts the number of useId hooks in this component.
// Used for ids that are generated completely client-side (i.e. not during
// hydration). This counter is global, so client ids are not stable across
// render attempts.
// In DEV, this is the name of the currently executing primitive hook
// In DEV, this list ensures that hooks are called in the same order between renders.
// The list stores the order of hooks used during the initial render (mount).
// Subsequent renders (updates) reference this list.
// In DEV, this tracks whether currently rendering component needs to ignore
// the dependencies for Hooks that need them (e.g. useEffect or useMemo).
// When true, such Hooks will always be "remounted". Only used during hot reload.
{var RT=function warnInvalidContextAccess(){r("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")},TT=function warnInvalidHookAccess(){r("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks")};bT={readContext:function readContext(e){return Cs(e)},useCallback:function useCallback(e,n){return cT="useCallback",Cu(),Tu(n),ml(e,n)},useContext:function useContext(e){return cT="useContext",Cu(),Cs(e)},useEffect:function useEffect(e,n){return cT="useEffect",Cu(),Tu(n),al(e,n)},useImperativeHandle:function useImperativeHandle(e,n,t){return cT="useImperativeHandle",Cu(),Tu(t),cl(e,n,t)},useInsertionEffect:function useInsertionEffect(e,n){return cT="useInsertionEffect",Cu(),Tu(n),dl(e,n)},useLayoutEffect:function useLayoutEffect(e,n){return cT="useLayoutEffect",Cu(),Tu(n),sl(e,n)},useMemo:function useMemo(e,n){cT="useMemo",Cu(),Tu(n);var t=JR.current;JR.current=wT;try{return gl(e,n)}finally{JR.current=t}},useReducer:function useReducer(e,n,t){cT="useReducer",Cu();var i=JR.current;JR.current=wT;try{return Fu(e,n,t)}finally{JR.current=i}},useRef:function useRef(e){return cT="useRef",Cu(),el(e)},useState:function useState(e){cT="useState",Cu();var n=JR.current;JR.current=wT;try{return Xu(e)}finally{JR.current=n}},useDebugValue:function useDebugValue(e,n){return cT="useDebugValue",Cu(),pl()},useDeferredValue:function useDeferredValue(e){return cT="useDeferredValue",Cu(),bl(e)},useTransition:function useTransition(){return cT="useTransition",Cu(),xl()},useMutableSource:function useMutableSource(e,n,t){return cT="useMutableSource",Cu(),ju()},useSyncExternalStore:function useSyncExternalStore(e,n,t){return cT="useSyncExternalStore",Cu(),Hu(e,n,t)},useId:function useId(){return cT="useId",Cu(),Pl()},unstable_isNewReconciler:Dg},vT={readContext:function readContext(e){return Cs(e)},useCallback:function useCallback(e,n){return cT="useCallback",Ru(),ml(e,n)},useContext:function useContext(e){return cT="useContext",Ru(),Cs(e)},useEffect:function useEffect(e,n){return cT="useEffect",Ru(),al(e,n)},useImperativeHandle:function useImperativeHandle(e,n,t){return cT="useImperativeHandle",Ru(),cl(e,n,t)},useInsertionEffect:function useInsertionEffect(e,n){return cT="useInsertionEffect",Ru(),dl(e,n)},useLayoutEffect:function useLayoutEffect(e,n){return cT="useLayoutEffect",Ru(),sl(e,n)},useMemo:function useMemo(e,n){cT="useMemo",Ru();var t=JR.current;JR.current=wT;try{return gl(e,n)}finally{JR.current=t}},useReducer:function useReducer(e,n,t){cT="useReducer",Ru();var i=JR.current;JR.current=wT;try{return Fu(e,n,t)}finally{JR.current=i}},useRef:function useRef(e){return cT="useRef",Ru(),el(e)},useState:function useState(e){cT="useState",Ru();var n=JR.current;JR.current=wT;try{return Xu(e)}finally{JR.current=n}},useDebugValue:function useDebugValue(e,n){return cT="useDebugValue",Ru(),pl()},useDeferredValue:function useDeferredValue(e){return cT="useDeferredValue",Ru(),bl(e)},useTransition:function useTransition(){return cT="useTransition",Ru(),xl()},useMutableSource:function useMutableSource(e,n,t){return cT="useMutableSource",Ru(),ju()},useSyncExternalStore:function useSyncExternalStore(e,n,t){return cT="useSyncExternalStore",Ru(),Hu(e,n,t)},useId:function useId(){return cT="useId",Ru(),Pl()},unstable_isNewReconciler:Dg},kT={readContext:function readContext(e){return Cs(e)},useCallback:function useCallback(e,n){return cT="useCallback",Ru(),hl(e,n)},useContext:function useContext(e){return cT="useContext",Ru(),Cs(e)},useEffect:function useEffect(e,n){return cT="useEffect",Ru(),ol(e,n)},useImperativeHandle:function useImperativeHandle(e,n,t){return cT="useImperativeHandle",Ru(),fl(e,n,t)},useInsertionEffect:function useInsertionEffect(e,n){return cT="useInsertionEffect",Ru(),rl(e,n)},useLayoutEffect:function useLayoutEffect(e,n){return cT="useLayoutEffect",Ru(),ul(e,n)},useMemo:function useMemo(e,n){cT="useMemo",Ru();var t=JR.current;JR.current=xT;try{return yl(e,n)}finally{JR.current=t}},useReducer:function useReducer(e,n,t){cT="useReducer",Ru();var i=JR.current;JR.current=xT;try{return Au(e,n,t)}finally{JR.current=i}},useRef:function useRef(e){return cT="useRef",Ru(),nl()},useState:function useState(e){cT="useState",Ru();var n=JR.current;JR.current=xT;try{return Gu(e)}finally{JR.current=n}},useDebugValue:function useDebugValue(e,n){return cT="useDebugValue",Ru(),hT()},useDeferredValue:function useDeferredValue(e){return cT="useDeferredValue",Ru(),vl(e)},useTransition:function useTransition(){return cT="useTransition",Ru(),Cl()},useMutableSource:function useMutableSource(e,n,t){return cT="useMutableSource",Ru(),Bu()},useSyncExternalStore:function useSyncExternalStore(e,n,t){return cT="useSyncExternalStore",Ru(),Vu(e,n)},useId:function useId(){return cT="useId",Ru(),_l()},unstable_isNewReconciler:Dg},ST={readContext:function readContext(e){return Cs(e)},useCallback:function useCallback(e,n){return cT="useCallback",Ru(),hl(e,n)},useContext:function useContext(e){return cT="useContext",Ru(),Cs(e)},useEffect:function useEffect(e,n){return cT="useEffect",Ru(),ol(e,n)},useImperativeHandle:function useImperativeHandle(e,n,t){return cT="useImperativeHandle",Ru(),fl(e,n,t)},useInsertionEffect:function useInsertionEffect(e,n){return cT="useInsertionEffect",Ru(),rl(e,n)},useLayoutEffect:function useLayoutEffect(e,n){return cT="useLayoutEffect",Ru(),ul(e,n)},useMemo:function useMemo(e,n){cT="useMemo",Ru();var t=JR.current;JR.current=CT;try{return yl(e,n)}finally{JR.current=t}},useReducer:function useReducer(e,n,t){cT="useReducer",Ru();var i=JR.current;JR.current=CT;try{return Wu(e,n,t)}finally{JR.current=i}},useRef:function useRef(e){return cT="useRef",Ru(),nl()},useState:function useState(e){cT="useState",Ru();var n=JR.current;JR.current=CT;try{return Ju(e)}finally{JR.current=n}},useDebugValue:function useDebugValue(e,n){return cT="useDebugValue",Ru(),hT()},useDeferredValue:function useDeferredValue(e){return cT="useDeferredValue",Ru(),kl(e)},useTransition:function useTransition(){return cT="useTransition",Ru(),Rl()},useMutableSource:function useMutableSource(e,n,t){return cT="useMutableSource",Ru(),Bu()},useSyncExternalStore:function useSyncExternalStore(e,n,t){return cT="useSyncExternalStore",Ru(),Vu(e,n)},useId:function useId(){return cT="useId",Ru(),_l()},unstable_isNewReconciler:Dg},wT={readContext:function readContext(e){return RT(),Cs(e)},useCallback:function useCallback(e,n){return cT="useCallback",TT(),Cu(),ml(e,n)},useContext:function useContext(e){return cT="useContext",TT(),Cu(),Cs(e)},useEffect:function useEffect(e,n){return cT="useEffect",TT(),Cu(),al(e,n)},useImperativeHandle:function useImperativeHandle(e,n,t){return cT="useImperativeHandle",TT(),Cu(),cl(e,n,t)},useInsertionEffect:function useInsertionEffect(e,n){return cT="useInsertionEffect",TT(),Cu(),dl(e,n)},useLayoutEffect:function useLayoutEffect(e,n){return cT="useLayoutEffect",TT(),Cu(),sl(e,n)},useMemo:function useMemo(e,n){cT="useMemo",TT(),Cu();var t=JR.current;JR.current=wT;try{return gl(e,n)}finally{JR.current=t}},useReducer:function useReducer(e,n,t){cT="useReducer",TT(),Cu();var i=JR.current;JR.current=wT;try{return Fu(e,n,t)}finally{JR.current=i}},useRef:function useRef(e){return cT="useRef",TT(),Cu(),el(e)},useState:function useState(e){cT="useState",TT(),Cu();var n=JR.current;JR.current=wT;try{return Xu(e)}finally{JR.current=n}},useDebugValue:function useDebugValue(e,n){return cT="useDebugValue",TT(),Cu(),pl()},useDeferredValue:function useDeferredValue(e){return cT="useDeferredValue",TT(),Cu(),bl(e)},useTransition:function useTransition(){return cT="useTransition",TT(),Cu(),xl()},useMutableSource:function useMutableSource(e,n,t){return cT="useMutableSource",TT(),Cu(),ju()},useSyncExternalStore:function useSyncExternalStore(e,n,t){return cT="useSyncExternalStore",TT(),Cu(),Hu(e,n,t)},useId:function useId(){return cT="useId",TT(),Cu(),Pl()},unstable_isNewReconciler:Dg},xT={readContext:function readContext(e){return RT(),Cs(e)},useCallback:function useCallback(e,n){return cT="useCallback",TT(),Ru(),hl(e,n)},useContext:function useContext(e){return cT="useContext",TT(),Ru(),Cs(e)},useEffect:function useEffect(e,n){return cT="useEffect",TT(),Ru(),ol(e,n)},useImperativeHandle:function useImperativeHandle(e,n,t){return cT="useImperativeHandle",TT(),Ru(),fl(e,n,t)},useInsertionEffect:function useInsertionEffect(e,n){return cT="useInsertionEffect",TT(),Ru(),rl(e,n)},useLayoutEffect:function useLayoutEffect(e,n){return cT="useLayoutEffect",TT(),Ru(),ul(e,n)},useMemo:function useMemo(e,n){cT="useMemo",TT(),Ru();var t=JR.current;JR.current=xT;try{return yl(e,n)}finally{JR.current=t}},useReducer:function useReducer(e,n,t){cT="useReducer",TT(),Ru();var i=JR.current;JR.current=xT;try{return Au(e,n,t)}finally{JR.current=i}},useRef:function useRef(e){return cT="useRef",TT(),Ru(),nl()},useState:function useState(e){cT="useState",TT(),Ru();var n=JR.current;JR.current=xT;try{return Gu(e)}finally{JR.current=n}},useDebugValue:function useDebugValue(e,n){return cT="useDebugValue",TT(),Ru(),hT()},useDeferredValue:function useDeferredValue(e){return cT="useDeferredValue",TT(),Ru(),vl(e)},useTransition:function useTransition(){return cT="useTransition",TT(),Ru(),Cl()},useMutableSource:function useMutableSource(e,n,t){return cT="useMutableSource",TT(),Ru(),Bu()},useSyncExternalStore:function useSyncExternalStore(e,n,t){return cT="useSyncExternalStore",TT(),Ru(),Vu(e,n)},useId:function useId(){return cT="useId",TT(),Ru(),_l()},unstable_isNewReconciler:Dg},CT={readContext:function readContext(e){return RT(),Cs(e)},useCallback:function useCallback(e,n){return cT="useCallback",TT(),Ru(),hl(e,n)},useContext:function useContext(e){return cT="useContext",TT(),Ru(),Cs(e)},useEffect:function useEffect(e,n){return cT="useEffect",TT(),Ru(),ol(e,n)},useImperativeHandle:function useImperativeHandle(e,n,t){return cT="useImperativeHandle",TT(),Ru(),fl(e,n,t)},useInsertionEffect:function useInsertionEffect(e,n){return cT="useInsertionEffect",TT(),Ru(),rl(e,n)},useLayoutEffect:function useLayoutEffect(e,n){return cT="useLayoutEffect",TT(),Ru(),ul(e,n)},useMemo:function useMemo(e,n){cT="useMemo",TT(),Ru();var t=JR.current;JR.current=xT;try{return yl(e,n)}finally{JR.current=t}},useReducer:function useReducer(e,n,t){cT="useReducer",TT(),Ru();var i=JR.current;JR.current=xT;try{return Wu(e,n,t)}finally{JR.current=i}},useRef:function useRef(e){return cT="useRef",TT(),Ru(),nl()},useState:function useState(e){cT="useState",TT(),Ru();var n=JR.current;JR.current=xT;try{return Ju(e)}finally{JR.current=n}},useDebugValue:function useDebugValue(e,n){return cT="useDebugValue",TT(),Ru(),hT()},useDeferredValue:function useDeferredValue(e){return cT="useDeferredValue",TT(),Ru(),kl(e)},useTransition:function useTransition(){return cT="useTransition",TT(),Ru(),Rl()},useMutableSource:function useMutableSource(e,n,t){return cT="useMutableSource",TT(),Ru(),Bu()},useSyncExternalStore:function useSyncExternalStore(e,n,t){return cT="useSyncExternalStore",TT(),Ru(),Vu(e,n)},useId:function useId(){return cT="useId",TT(),Ru(),_l()},unstable_isNewReconciler:Dg}}var PT=Tv,_T=0,ET=-1,NT=-1,IT=-1,DT=!1,LT=!1,zT="function"==typeof WeakMap?WeakMap:Map,MT=ag.ReactCurrentOwner,UT=!1,OT,FT,AT,WT,jT,BT,HT,VT;/**
   * Tracks whether the current update was a nested/cascading update (scheduled from a layout effect).
   *
   * The overall sequence is:
   *   1. render
   *   2. commit (and call `onRender`, `onCommit`)
   *   3. check for nested updates
   *   4. flush passive effects (and call `onPostCommit`)
   *
   * Nested updates are identified in step 3 above,
   * but step 4 still applies to the work that was just committed.
   * We use two flags to track nested updates then:
   * one tracks whether the upcoming update is a nested update,
   * and the other tracks whether the current update was a nested update.
   * The first value gets synced to the second at the start of the render phase.
   */OT={},FT={},AT={},WT={},jT={},BT=!1,HT={},VT={};var $T={dehydrated:null,treeContext:null,retryLane:Gk},YT=!1,qT=!1,KT,QT,XT,GT;// Mutation mode
KT=function appendAllChildren(e,n,t,i){// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
for(var a=n.child;null!==a;){if(a.tag===cg||a.tag===fg)Qo(e,a.stateNode);else if(a.tag===lg);else if(null!==a.child){a.child["return"]=a,a=a.child;continue}if(a===n)return;for(;null===a.sibling;){if(null===a["return"]||a["return"]===n)return;a=a["return"]}a.sibling["return"]=a["return"],a=a.sibling}},QT=function updateHostContainer(e,n){// Noop
},XT=function updateHostComponent$1(e,n,t,i,a){// If we have an alternate, that means this is an update and we need to
// schedule a side-effect to do the updates.
var o=e.memoizedProps;if(o!==i)// In mutation mode, this is sufficient for a bailout because
// we won't touch this node even if children changed.
{// If we get updated because one of our children updated, we don't
// have newProps so we'll have to reuse them.
// TODO: Split the update API as separate for the props vs. children.
// Even better would be if children weren't special cased at all tho.
var d=n.stateNode,r=cu(),s=Go(d,t,o,i,a,r);// TODO: Experiencing an error where oldProps is null. Suggests a host
// component is hitting the resume path. Figure out why. Possibly
// related to `hidden`.
// TODO: Type this specific to this type of component.
n.updateQueue=s,s&&cf(n)}},GT=function updateHostText$1(e,n,t,i){t!==i&&cf(n)};var JT=null;JT=new Set;// Used during the commit phase to track the state of the Offscreen component stack.
// Allows us to avoid traversing the return path to find the nearest Offscreen ancestor.
// Only used when enableSuspenseLayoutEffectSemantics is enabled.
var ZT=!1,eP=!1,nP="function"==typeof WeakSet?WeakSet:Set,tP=null,iP=null,aP=null,oP=function callComponentWillUnmountWithTimer(e,n){if(n.props=e.memoizedProps,n.state=e.memoizedState,e.mode&Hk)try{Yl(),n.componentWillUnmount()}finally{Vl(e)}else n.componentWillUnmount()},dP=null,rP=!1,sP=null,uP=!1,lP=0,cP=1,fP=2,pP=3,mP=4;// Used for Profiling builds to track updaters.
if("function"==typeof Symbol&&Symbol["for"]){var hP=Symbol["for"];lP=hP("selector.component"),cP=hP("selector.has_pseudo_class"),fP=hP("selector.role"),pP=hP("selector.test_id"),mP=hP("selector.text")}var gP=[],yP=ag.ReactCurrentActQueue,bP=Math.ceil,vP=ag.ReactCurrentDispatcher,kP=ag.ReactCurrentOwner,SP=ag.ReactCurrentBatchConfig,wP=ag.ReactCurrentActQueue,xP=/*             */0,CP=/*               */1,RP=/*                */2,TP=/*                */4,PP=0,_P=1,EP=2,NP=3,IP=4,DP=5,LP=6,zP=xP,MP=null,UP=null,OP=Xk,FP=Xk,AP=cr(Xk),WP=PP,jP=null,BP=Xk,HP=Xk,VP=Xk,$P=Xk,YP=null,qP=null,KP=0,QP=500,XP=1/0,GP=500,JP=null,ZP=!1,e_=null,n_=null,t_=!1,i_=null,a_=Xk,o_=[],d_=null,r_=50,s_=0,u_=null,l_=!1,c_=!1,f_=50,p_=0,m_=null,h_=LS,g_=Xk,y_=!1,b_=vm,v_=null,k_;// Describes where we are in the React execution stack
// The root we're working on
// The fiber we're working on
// The lanes we're rendering
// Stack that allows components to change the render lanes for its subtree
// This is a superset of the lanes we started working on at the root. The only
// case where it's different from `workInProgressRootRenderLanes` is when we
// enter a subtree that is hidden and needs to be unhidden: Suspense and
// Offscreen component.
//
// Most things in the work loop should deal with workInProgressRootRenderLanes.
// Most things in begin/complete phases should deal with subtreeRenderLanes.
// Whether to root completed, errored, suspended, etc.
// A fatal error, if one is thrown
// "Included" lanes refer to lanes that were worked on during this render. It's
// slightly different than `renderLanes` because `renderLanes` can change as you
// enter and exit an Offscreen tree. This value is the combination of all render
// lanes for the entire render phase.
// The work left over by components that were visited during this render. Only
// includes unprocessed updates, not work in bailed out children.
// Lanes that were updated (in an interleaved event) during this render.
// Lanes that were updated during the render phase (*not* an interleaved event).
// Errors that are thrown during the render phase.
// These are errors that we recovered from without surfacing them to the UI.
// We will log them once the tree commits.
// The most recent time we committed a fallback. This lets us ensure a train
// model where we don't commit new loading states in too quick succession.
// The absolute time for when we should start giving up on rendering
// more and prefer CPU suspense heuristics instead.
// How long a render is supposed to take before we start following CPU
// suspense heuristics and opt out of rendering more content.
// Only used when enableProfilerNestedUpdateScheduledHook is true;
// Use these to prevent an infinite loop of nested updates
// If two updates are scheduled within the same event, we should treat their
// event times as simultaneous, even if the actual clock time has advanced
// between the first and second call.
{var S_=null;k_=function beginWork$1(e,n,t){// If a component throws an error, we replay it again in a synchronously
// dispatched event, so that the debugger will treat it as an uncaught
// error See ReactErrorUtils for more information.
// Before entering the begin phase, copy the work-in-progress onto a dummy
// fiber. If beginWork throws, we'll use this to reset the state.
var i=ph(S_,n);try{return lf(e,n,t)}catch(o){if(Vr()||null!==o&&"object"===_typeof(o)&&"function"==typeof o.then)// Don't replay promises.
// Don't replay errors if we are hydrating and have already suspended or handled an error
throw o;// Keep this code in sync with handleError; any changes here must have
// corresponding changes there.
if(hs(),Lu(),bf(e,n),ph(n,i),n.mode&Hk&&jl(n),gn(null,lf,null,e,n,t),vn()){var a=kn();"object"===_typeof(a)&&null!==a&&a._suppressLogging&&"object"===_typeof(o)&&null!==o&&!o._suppressLogging&&(o._suppressLogging=!0)}// We always throw the original error in case the second render pass is not idempotent.
// This can happen if a memoized function or CommonJS module doesn't throw after first invocation.
throw o}}}var w_=!1,x_;x_=new Set;var C_={},R_=null,T_=null,P_=function setRefreshHandler(e){R_=e},__=function scheduleRefresh(e,n){{if(null===R_)// Hot reloading is disabled.
return;var t=n.staleFamilies,i=n.updatedFamilies;mm(),Yp(function(){$m(e.current,i,t)})}},E_=function scheduleRoot(e,n){{if(e.context!==yC)// Super edge case: root has a legacy _renderSubtree context
// but we don't know the parentComponent so we can't pass it.
// Just ignore. We'll delete this with _renderSubtree code path later.
return;mm(),Yp(function(){Sh(n,e,null,null)})}},N_=function findHostInstancesForRefresh(e,n){{var t=new Set,i=new Set(n.map(function(e){return e.current}));return Ym(e.current,i,t),t}},I_;// $FlowFixMe Flow gets confused by a WeakSet feature check below.
{I_=!1;try{var D_=Object.preventExtensions({});/* eslint-disable no-new */new Map([[D_,null]]),new Set([D_])}catch(n){// TODO: Consider warning about bad polyfills
I_=!0}}var L_=function createFiber(e,n,t,i){// $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
return new Qm(e,n,t,i)},z_="18.2.0",M_,U_;M_=!1,U_={};var O_=function shouldErrorImpl(e){return null},F_=function shouldSuspendImpl(e){return!1},A_=null,W_=null,j_=null,B_=null,H_=null,V_=null,$_=null,Y_=null,q_=null;{var K_=function copyWithDeleteImpl(e,n,t){var i=n[t],a=we(e)?e.slice():Dy({},e);return t+1===n.length?(we(a)?a.splice(i,1):delete a[i],a):(a[i]=K_(e[i],n,t+1),a);// $FlowFixMe number or string is fine here
},Q_=function copyWithDelete(e,n){return K_(e,n,0)},X_=function copyWithRenameImpl(e,n,t,i){var a=n[i],o=we(e)?e.slice():Dy({},e);if(i+1===n.length){var d=t[i];// $FlowFixMe number or string is fine here
o[d]=o[a],we(o)?o.splice(a,1):delete o[a]}else// $FlowFixMe number or string is fine here
o[a]=X_(// $FlowFixMe number or string is fine here
e[a],n,t,i+1);return o},G_=function copyWithRename(e,n,t){if(n.length!==t.length)return void d("copyWithRename() expects paths of the same length");for(var a=0;a<t.length-1;a++)if(n[a]!==t[a])return void d("copyWithRename() expects paths to be the same except for the deepest key");return X_(e,n,t,0)},J_=function copyWithSetImpl(e,n,t,i){if(t>=n.length)return i;var a=n[t],o=we(e)?e.slice():Dy({},e);// $FlowFixMe number or string is fine here
return o[a]=J_(e[a],n,t+1,i),o},Z_=function copyWithSet(e,n,t){return J_(e,n,0,t)},eE=function findHook(e,n){// For now, the "id" of stateful hooks is just the stateful hook index.
// This may change in the future with e.g. nested hooks.
for(var t=e.memoizedState;null!==t&&0<n;)t=t.next,n--;return t};// Support DevTools editable values for useState and useReducer.
// Support DevTools props for function components, forwardRef, memo, host components, etc.
A_=function overrideHookState(e,n,t,i){var a=eE(e,n);if(null!==a){var o=Z_(a.memoizedState,t,i);a.memoizedState=o,a.baseState=o,e.memoizedProps=Dy({},e.memoizedProps);var d=Ns(e,Jk);null!==d&&Dp(d,e,Jk,LS)}},W_=function overrideHookStateDeletePath(e,n,t){var i=eE(e,n);if(null!==i){var a=Q_(i.memoizedState,t);i.memoizedState=a,i.baseState=a,e.memoizedProps=Dy({},e.memoizedProps);var o=Ns(e,Jk);null!==o&&Dp(o,e,Jk,LS)}},j_=function overrideHookStateRenamePath(e,n,t,i){var a=eE(e,n);if(null!==a){var o=G_(a.memoizedState,t,i);a.memoizedState=o,a.baseState=o,e.memoizedProps=Dy({},e.memoizedProps);var d=Ns(e,Jk);null!==d&&Dp(d,e,Jk,LS)}},B_=function overrideProps(e,n,t){e.pendingProps=Z_(e.memoizedProps,n,t),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var i=Ns(e,Jk);null!==i&&Dp(i,e,Jk,LS)},H_=function overridePropsDeletePath(e,n){e.pendingProps=Q_(e.memoizedProps,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var t=Ns(e,Jk);null!==t&&Dp(t,e,Jk,LS)},V_=function overridePropsRenamePath(e,n,t){e.pendingProps=G_(e.memoizedProps,n,t),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var i=Ns(e,Jk);null!==i&&Dp(i,e,Jk,LS)},$_=function scheduleUpdate(e){var n=Ns(e,Jk);null!==n&&Dp(n,e,Jk,LS)},Y_=function setErrorHandler(e){O_=e},q_=function setSuspenseHandler(e){F_=e}}var nE="function"==typeof reportError?// In modern browsers, reportError will dispatch an error event,
// emulating an uncaught JavaScript error.
reportError:function(e){// In older browsers and test environments, fallback to console.error.
// eslint-disable-next-line react-internal/no-production-logging
console.error(e)};Oh.prototype.render=Mh.prototype.render=function(e){var n=this._internalRoot;if(null===n)throw new Error("Cannot update an unmounted root.");{"function"==typeof arguments[1]?r("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):Wh(arguments[1])?r("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):"undefined"!=typeof arguments[1]&&r("You passed a second argument to root.render(...) but it only accepts one argument.");var t=n.containerInfo;if(t.nodeType!==mb){var i=_h(n.current);i&&i.parentNode!==t&&r("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.")}}Sh(e,n,null,null)},Oh.prototype.unmount=Mh.prototype.unmount=function(){"function"==typeof arguments[0]&&r("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");var e=this._internalRoot;if(null!==e){this._internalRoot=null;var n=e.containerInfo;qp()&&r("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),Yp(function(){Sh(null,e,null,null)}),nr(n)}},Oh.prototype.unstable_scheduleHydration=Fh;var tE=ag.ReactCurrentOwner,iE;iE=function topLevelUpdateWarnings(e){if(e._reactRootContainer&&e.nodeType!==mb){var n=_h(e._reactRootContainer.current);n&&n.parentNode!==e&&r("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")}var t=!!e._reactRootContainer,i=Hh(e),a=!!(i&&ar(i));a&&!t&&r("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),e.nodeType===fb&&e.tagName&&"BODY"===e.tagName.toUpperCase()&&r("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.")},ri(xh),ui(Th),li(Ph),ci(Zt),fi(ni),("function"!=typeof Map||// $FlowIssue Flow incorrectly thinks Map has no prototype
null==Map.prototype||"function"!=typeof Map.prototype.forEach||"function"!=typeof Set||// $FlowIssue Flow incorrectly thinks Set has no prototype
null==Set.prototype||"function"!=typeof Set.prototype.clear||"function"!=typeof Set.prototype.forEach)&&r("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),on(Bo),cn(Vp,$p,Yp);var aE={usingClientEntryPoint:!1,// Keep in sync with ReactTestUtils.js.
// This is an array for better minification.
Events:[ar,or,dr,dn,sn,Vp]},oE=zh({findFiberByHostInstance:ir,bundleType:1,version:z_,rendererPackageName:"react-dom"});if(!oE&&$g&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Edge")||-1<navigator.userAgent.indexOf("Firefox")))// If we're in Chrome or Firefox, provide a download link if not installed.
{var dE=window.location.protocol;// Don't warn in exotic cases like chrome-extension://.
/^(https?|file):$/.test(dE)&&console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"+("file:"===dE?"\nYou might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq":""),"font-weight:bold")}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aE,e.createPortal=Zh,e.createRoot=ng,e.findDOMNode=Kh,e.flushSync=ig,e.hydrate=Qh,e.hydrateRoot=tg,e.render=Xh,e.unmountComponentAtNode=Jh,e.unstable_batchedUpdates=Vp,e.unstable_renderSubtreeIntoContainer=eg,e.version=z_});