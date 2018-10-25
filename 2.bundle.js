(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,function(n,e,t){"use strict";t.r(e);var r=t(2),i=t(3),o=t(6),a=t(7),c=t(4),u=t.n(c),s=t(9),l=t.n(s);function f(n){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function v(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function h(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function p(n,e,t){return e&&h(n.prototype,e),t&&h(n,t),n}function d(n,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function m(n){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function x(n,e){return(x=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var y=window.innerWidth/2*(window.innerHeight/2),w=document.getElementById("game-of-life-canvas"),_=function(n,e){return Math.sqrt(Math.pow(n.clientX-e.clientX,2)+Math.pow(n.clientY-e.clientY,2),2)},b=function(n){var e=function(n){return Math.sqrt(Math.pow(n.clientX,2)+Math.pow(n.clientY,2),2)}(n);return{clientX:n.clientX/e,clientY:n.clientY/e}},g=function(n,e){return{clientX:n.clientX*e,clientY:n.clientY*e}},z=function(n,e){return{clientX:n.clientX+e.clientX,clientY:n.clientY+e.clientY}},E=function(n,e){return{clientX:n.clientX-e.clientX,clientY:n.clientY-e.clientY}},k=!1,C=null;w.addEventListener("mousedown",function(n){n.preventDefault(),k=!0,S(n),C=n}),w.addEventListener("mouseup",function(n){n.preventDefault(),C=null,k=!1}),w.addEventListener("mousemove",function(n){n.preventDefault();var e={clientX:n.clientX,clientY:n.clientY};if(k){var t=D[window.UI.state.size],r=0;for(S(e);_(e,C)>t;){var i=_(e,C);if(e=z(e,g(b(E(C,n)),Math.min(t,i))),++r>1e3)break;S(e)}C=n}}),w.addEventListener("touchstart",function(n){k=!0,M(n)}),w.addEventListener("touchend",function(n){C=null,k=!1}),w.addEventListener("touchmove",function(n){M(n)});var M=function(n){n.preventDefault(),Array.from(n.touches).forEach(S)},S=function(n){if(k){var e=w.getBoundingClientRect(),t=w.width/e.width,r=w.height/e.height,i=(n.clientX-e.left)*t,o=(n.clientY-e.top)*r,a=Math.min(Math.floor(i),A-1),c=Math.min(Math.floor(o),P-1);O.paint(a,c,D[window.UI.state.size],window.UI.state.selectedElement)}},D=[1,3,5,8,13,21,34,55,89],j=function(n){function e(n){var t;return v(this,e),(t=d(this,m(e).call(this,n))).state={paused:!1,size:4,selectedElement:r.a.Water},t}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&x(n,e)}(e,u.a.Component),p(e,[{key:"playPause",value:function(){this.state.paused?T():(cancelAnimationFrame(window.animationId),window.animationId=null),this.setState({paused:!this.state.paused})}},{key:"bumpSize",value:function(n,e){n.preventDefault(),this.setState({size:(this.state.size+e+D.length)%D.length})}},{key:"render",value:function(){var n=this,e=this.state,t=e.size,i=e.paused,o=e.selectedElement;return u.a.createElement("div",null,u.a.createElement("button",{onClick:function(){return n.playPause()}},i?"▶︎":"⏸︎"),i&&u.a.createElement("button",{onClick:function(){return O.tick()}},"tick"),u.a.createElement("button",{style:{minWidth:"80px"},onClick:function(e){return n.bumpSize(e,1)},onContextMenu:function(e){return n.bumpSize(e,-1)}},"Size:",D[t]),Object.keys(r.a).map(function(e){return function(n,e,t){var i=r.a[n];return u.a.createElement("button",{className:i==e?"selected":"",key:n,onClick:function(){t(i)}},"  ",n,"  ")}(e,o,function(e){return n.setState({selectedElement:e})})}))}}]),e}();l.a.render(u.a.createElement(j,{ref:function(n){window.UI=n}}),document.getElementById("ui"));var I=new(function(){function n(){v(this,n),this.fps=document.getElementById("fps"),this.frames=[],this.lastFrameTimeStamp=performance.now()}return p(n,[{key:"render",value:function(){var n=performance.now(),e=n-this.lastFrameTimeStamp;this.lastFrameTimeStamp=n;var t=1/e*1e3;this.frames.push(t),this.frames.length>30&&this.frames.shift();for(var r=1/0,i=-1/0,o=0,a=0;a<this.frames.length;a++)o+=this.frames[a],r=Math.min(this.frames[a],r),i=Math.max(this.frames[a],i);var c=o/this.frames.length;this.fps.textContent="\n ".concat((y/1e3).toFixed(0),"Kpx\n FPS:").concat(Math.round(c),"\n    ").trim()}}]),n}());t.d(e,"renderLoop",function(){return T}),t.d(e,"canvas",function(){return F}),t.d(e,"width",function(){return A}),t.d(e,"height",function(){return P}),t.d(e,"universe",function(){return O}),t.d(e,"ratio",function(){return Y});var Y=2,L=window.innerWidth/Y,X=window.innerHeight/Y,O=r.b.new(L,X),A=O.width(),P=O.height(),F=document.getElementById("game-of-life-canvas");F.height=P,F.width=A;var T=function n(){I.render(),O.tick(),window.animationId=requestAnimationFrame(n)};!function(n){var e=n.canvas,t=n.universe,r=o({canvas:e}),c=r.texture(),u=t.cells(),s=t.width(),l=t.height(),f=new Uint8Array(i.c.buffer,u,s*l*4),v=r.texture({width:s,height:l,data:f}),h=r({frag:a,uniforms:{t:function(n){return n.tick},data:function(){return v({width:s,height:l,data:f})},resolution:function(n){return[n.viewportWidth,n.viewportHeight]},backBuffer:c},vert:'\n  // boring "pass-through" vertex shader\n  precision mediump float;\n  attribute vec2 position;\n  varying vec2 uv;\n  void main () {\n    uv = position;\n    gl_Position = vec4(position, 0, 1);\n  }',attributes:{position:[[-1,4],[-1,-1],[4,-1]]},count:3});r.frame(function(n){r.clear({color:[0,0,0,1]}),h(),c({copy:!0})})}({canvas:F,universe:O}),T()},function(n,e,t){"use strict";t.d(e,"a",function(){return c}),t.d(e,"c",function(){return s}),t.d(e,"b",function(){return l}),t.d(e,"d",function(){return p});var r=t(3);function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}var c=Object.freeze({Empty:0,Wall:1,Powder:2,Water:3,Gas:4,Clone:5,Fire:6,Wood:7,Lava:8,Ice:9}),u=Math.random.bind(Math)||function(){throw new Error("wasm-bindgen: Math.random.bind(Math) does not exist")};function s(){return u()}var l=function(){function n(){i(this,n)}return a(n,[{key:"free",value:function(){var n=this.ptr;this.ptr=0,function(n){r.b(n)}(n)}},{key:"tick",value:function(){return r.h(this.ptr)}},{key:"width",value:function(){return r.i(this.ptr)}},{key:"height",value:function(){return r.e(this.ptr)}},{key:"cells",value:function(){return r.d(this.ptr)}},{key:"paint",value:function(n,e,t,i){return r.g(this.ptr,n,e,t,i)}}],[{key:"__wrap",value:function(e){var t=Object.create(n.prototype);return t.ptr=e,t}},{key:"new",value:function(e,t){return n.__wrap(r.f(e,t))}}]),n}(),f=new TextDecoder("utf-8"),v=null;function h(n,e){return f.decode((null!==v&&v.buffer===r.c.buffer||(v=new Uint8Array(r.c.buffer)),v).subarray(n,n+e))}function p(n,e){throw new Error(h(n,e))}},function(n,e,t){"use strict";var r=t.w[n.i];n.exports=r;t(2);r.j()},,,,function(n,e){n.exports="precision mediump float;\n#define GLSLIFY 1\nuniform float t;\nuniform vec2 resolution;\nuniform sampler2D backBuffer;\nuniform sampler2D data;\n\nvarying vec2 uv;\n\n// clang-format off\nvec3 hsv2rgb_2_0(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_1(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1_1(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1_2(vec4 x) {\n     return mod289_1_1(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1_3(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1_4(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1_5 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1_6 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1_6;\n  vec3 i1 = min( g_1_6.xyz, l.zxy );\n  vec3 i2 = max( g_1_6.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1_5.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1_1(i);\n  vec4 p = permute_1_2( permute_1_2( permute_1_2(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1_5.wyz - D_1_5.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1_7 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1_8 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1_7.xy,h.z);\n  vec3 p3 = vec3(a1_1_7.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1_3(vec4(dot(p0_1_8,p0_1_8), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1_8 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1_8,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\n\n\n// clang-format on\n\nvoid main() {\n  vec3 color;\n  //   float r = abs(sin(t / 25.));\n  //   if (length(uv) < r && length(uv) > r - 0.1) {\n  // color = hsv2rgb(vec3(sin(t * 0.01), 0.5, 0.5));\n\n  vec2 textCoord = (uv * vec2(0.5, -0.5)) + vec2(0.5);\n  vec4 data = texture2D(data, textCoord);\n  float type = data.r * 255.;\n  float hue = 0.0;\n  float saturation = 0.6;\n  float lightness = 0.3 + data.g * 0.5;\n  float noise = snoise_1_4(vec3(uv * resolution, t * 0.1));\n  if (type == 0.) {\n    hue = 0.1;\n    lightness = 0.0;\n  } else if (type == 1.) {\n    hue = 0.1;\n    saturation = 0.1;\n    lightness = 0.4;\n\n  } else if (type == 2.) {\n    hue = 0.1;\n  } else if (type == 3.) {\n    hue = 0.6;\n  } else if (type == 4.) {\n    hue = 0.5;\n    saturation = 0.5;\n  } else if (type == 5.) {\n    hue = 0.05;\n  } else if (type == 6.) { // fire\n    hue = (data.g * 0.1);\n    lightness = 0.5 + data.g * 0.5 + (0.5 * noise);\n  } else if (type == 7.) {\n    hue = (data.g * 0.1);\n    saturation = 0.3;\n    lightness = 0.3 + data.g * 0.5;\n  } else if (type == 8.) { // lava\n    hue = (data.g * 0.1);\n    lightness = 0.7 + data.g * 0.5 + (0.5 * noise);\n  } else if (type == 9.) {\n    hue = 0.6;\n    saturation = 0.3;\n  }\n  color = hsv2rgb_2_0(vec3(hue, saturation, lightness));\n\n  gl_FragColor = vec4(color, 1.0);\n}"}]]);