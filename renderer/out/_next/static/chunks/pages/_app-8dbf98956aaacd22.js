(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6321:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(3789)}])},8639:function(e,n,t){"use strict";t.d(n,{I:function(){return f},n:function(){return l}});var r=t(9722),o=t(169),u=t(4246),i=t(7378),c=(0,i.createContext)({}),l=function(){return(0,i.useContext)(c)},f=function(e){var n=e.children,t=(0,i.useState)([]),l=t[0],f=t[1],a=(0,i.useState)({isPlaying:!1,progress:0,speed:1,isMuted:!1,isFullScreen:!1,isPicInPic:!1,volume:50,loop:"none"}),s=a[0],p=a[1],b=(0,i.useState)({file:l[0],url:""}),O=b[0],d=b[1];return(0,u.jsx)(c.Provider,{value:{playerState:s,setPlayerState:p,currentPlaying:O,setCurrentPlaying:d,files:l,setFiles:f,handleNext:function(){var e=l.findIndex((function(e){return e.name===O.file.name}));if(e<l.length-1){var n=l[e+1],t=URL.createObjectURL(n);d({file:n,url:t})}else if(e===l.length-1&&"all"===s.loop){var r=l[0],o=URL.createObjectURL(r);d({file:r,url:o})}},handlePrev:function(){var e=l.findIndex((function(e){return e.name===O.file.name}));if(e>0){var n=l[e-1],t=URL.createObjectURL(n);d({file:n,url:t})}},handleLoop:function(e){"none"===s.loop?(e.loop=!1,p((0,o.Z)((0,r.Z)({},s),{loop:"all"}))):"all"===s.loop?(e.loop=!0,p((0,o.Z)((0,r.Z)({},s),{loop:"one"}))):(e.loop=!1,p((0,o.Z)((0,r.Z)({},s),{loop:"none"})))}},children:n})}},3789:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var r=t(9722),o=t(4246),u=t(8639);t(6780);function i(e){var n=e.Component,t=e.pageProps;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u.I,{children:(0,o.jsx)(n,(0,r.Z)({},t))})})}},6780:function(){},9722:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}t.d(n,{Z:function(){return o}})},169:function(e,n,t){"use strict";function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}t.d(n,{Z:function(){return r}})}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6321),n(5817)}));var t=e.O();_N_E=t}]);