!function(){"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=function(result,chunkIds,fn,priority){if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((function(key){return __webpack_require__.O[key](chunkIds[j])}))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?function(obj){return Object.getPrototypeOf(obj)}:function(obj){return obj.__proto__},__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((function(key){def[key]=function(){return value[key]}}));return def.default=function(){return value},__webpack_require__.d(ns,def),ns},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=function(chunkId){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(promises,key){return __webpack_require__.f[key](chunkId,promises),promises}),[]))},__webpack_require__.u=function(chunkId){return({21:"components-ui-kit-PopupWrapper-PopupWrapper-stories",43:"components-Pages-DisputePage-DisputePage-stories",62:"stories-Page-stories",68:"components-ui-kit-NewDisputeOpponents-NewDisputeOpponents-stories",90:"components-ui-kit-InfoToolTip-InfoToolTip-stories",124:"components-DisputeCard-DisputeCard-stories",169:"components-ui-kit-Input-Input-stories",178:"components-Pages-PageNotFound-PageNotFound-stories",188:"components-DisputeCardList-DisputeCardList-stories",225:"components-ui-kit-NewDisputeFileUpload-NewDisputeFileUpload-stories",256:"stories-Button-stories",260:"components-MessageComments-MessageComments-stories",285:"components-ui-kit-Pagination-Pagination-stories",314:"components-Header-Header-stories",320:"components-Preloader-Preloader-stories",335:"components-ui-kit-SelectLimit-SelectLimit-stories",399:"components-ui-kit-Checkbox-Checkbox-stories",461:"components-ui-kit-LoginForm-LoginForm-stories",507:"components-ui-kit-CommentForm-CommentForm-stories",508:"components-ui-kit-Button-Button-stories",708:"components-ui-kit-Menu-Menu-stories",758:"stories-Header-stories",769:"stories-Configure-mdx",780:"components-ListMessageComments-ListMessageComments-stories",841:"components-ui-kit-PasswordChangeForm-PasswordChangeForm-stories",882:"components-ui-kit-NewDisputeForm-NewDisputeForm-stories",942:"components-ui-kit-LinkApp-LinkApp-stories",966:"components-ui-kit-TextArea-TextArea-stories",968:"components-ui-kit-FileList-FileList-stories"}[chunkId]||chunkId)+"."+{21:"257ec0fc",43:"03f15e54",58:"01eeb976",62:"700f1722",68:"d00d433c",90:"4c4d9265",124:"616431ef",169:"d27629f9",178:"95bab3b4",188:"ab3cf69a",219:"e9cdcec4",225:"82c9a313",234:"c94717c7",256:"e63766a2",260:"386a65ce",285:"e424b29f",312:"c7119ca5",314:"2fa702b1",320:"0a6eb28d",333:"500657c0",335:"afcc4f80",399:"58325b87",433:"69f965ec",446:"09287833",461:"3b569f05",463:"b7006516",507:"ce8f07f8",508:"9eccb504",572:"a2930fb1",582:"7d0979b5",708:"a5641107",758:"b68ac750",760:"efe436a1",769:"d449ec42",780:"b9231596",790:"fde88991",816:"71f9f26f",841:"0ed6f617",882:"68625418",923:"81ae7364",942:"1f007c92",960:"df4d401b",966:"840a11a2",968:"2c076c0a"}[chunkId]+".iframe.bundle.js"},__webpack_require__.miniCssF=function(chunkId){return"static/css/"+{21:"components-ui-kit-PopupWrapper-PopupWrapper-stories",43:"components-Pages-DisputePage-DisputePage-stories",62:"stories-Page-stories",68:"components-ui-kit-NewDisputeOpponents-NewDisputeOpponents-stories",90:"components-ui-kit-InfoToolTip-InfoToolTip-stories",124:"components-DisputeCard-DisputeCard-stories",169:"components-ui-kit-Input-Input-stories",178:"components-Pages-PageNotFound-PageNotFound-stories",188:"components-DisputeCardList-DisputeCardList-stories",225:"components-ui-kit-NewDisputeFileUpload-NewDisputeFileUpload-stories",256:"stories-Button-stories",260:"components-MessageComments-MessageComments-stories",285:"components-ui-kit-Pagination-Pagination-stories",314:"components-Header-Header-stories",320:"components-Preloader-Preloader-stories",335:"components-ui-kit-SelectLimit-SelectLimit-stories",399:"components-ui-kit-Checkbox-Checkbox-stories",461:"components-ui-kit-LoginForm-LoginForm-stories",507:"components-ui-kit-CommentForm-CommentForm-stories",508:"components-ui-kit-Button-Button-stories",708:"components-ui-kit-Menu-Menu-stories",758:"stories-Header-stories",780:"components-ListMessageComments-ListMessageComments-stories",841:"components-ui-kit-PasswordChangeForm-PasswordChangeForm-stories",882:"components-ui-kit-NewDisputeForm-NewDisputeForm-stories",942:"components-ui-kit-LinkApp-LinkApp-stories",966:"components-ui-kit-TextArea-TextArea-stories",968:"components-ui-kit-FileList-FileList-stories"}[chunkId]+"."+{21:"68b1fbb5",43:"9d4f2f33",62:"0d749fa7",68:"1098914a",90:"bcccf824",124:"902d593e",169:"f5a12313",178:"55b3a558",188:"fdc21281",225:"1d28e1c9",256:"68f6e987",260:"cf26a23a",285:"96c61f49",314:"611aba29",320:"1f0e0a41",335:"b7ef7278",399:"c88b7a11",461:"b5a5d5b3",507:"a8a7e564",508:"e856b55a",708:"bb43a55f",758:"576c6796",780:"7903589c",841:"53315fdc",882:"31607e01",942:"53c513ab",966:"012e1ef4",968:"56dafeaf"}[chunkId]+".chunk.css"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=function(module){return(module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module},__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},inProgress={},__webpack_require__.l=function(url,done,key,chunkId){if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="dispute_resolution:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","dispute_resolution:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=function(prev,event){script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((function(fn){return fn(event)})),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=function(module){return module.paths=[],module.children||(module.children=[]),module},__webpack_require__.p="",function(){if("undefined"!=typeof document){var loadStylesheet=function(chunkId){return new Promise((function(resolve,reject){var href=__webpack_require__.miniCssF(chunkId),fullhref=__webpack_require__.p+href;if(function(href,fullhref){for(var existingLinkTags=document.getElementsByTagName("link"),i=0;i<existingLinkTags.length;i++){var dataHref=(tag=existingLinkTags[i]).getAttribute("data-href")||tag.getAttribute("href");if("stylesheet"===tag.rel&&(dataHref===href||dataHref===fullhref))return tag}var existingStyleTags=document.getElementsByTagName("style");for(i=0;i<existingStyleTags.length;i++){var tag;if((dataHref=(tag=existingStyleTags[i]).getAttribute("data-href"))===href||dataHref===fullhref)return tag}}(href,fullhref))return resolve();!function(chunkId,fullhref,oldTag,resolve,reject){var linkTag=document.createElement("link");linkTag.rel="stylesheet",linkTag.type="text/css",linkTag.onerror=linkTag.onload=function(event){if(linkTag.onerror=linkTag.onload=null,"load"===event.type)resolve();else{var errorType=event&&("load"===event.type?"missing":event.type),realHref=event&&event.target&&event.target.href||fullhref,err=new Error("Loading CSS chunk "+chunkId+" failed.\n("+realHref+")");err.code="CSS_CHUNK_LOAD_FAILED",err.type=errorType,err.request=realHref,linkTag.parentNode&&linkTag.parentNode.removeChild(linkTag),reject(err)}},linkTag.href=fullhref,oldTag?oldTag.parentNode.insertBefore(linkTag,oldTag.nextSibling):document.head.appendChild(linkTag)}(chunkId,fullhref,null,resolve,reject)}))},installedCssChunks={303:0};__webpack_require__.f.miniCss=function(chunkId,promises){installedCssChunks[chunkId]?promises.push(installedCssChunks[chunkId]):0!==installedCssChunks[chunkId]&&{21:1,43:1,62:1,68:1,90:1,124:1,169:1,178:1,188:1,225:1,256:1,260:1,285:1,314:1,320:1,335:1,399:1,461:1,507:1,508:1,708:1,758:1,780:1,841:1,882:1,942:1,966:1,968:1}[chunkId]&&promises.push(installedCssChunks[chunkId]=loadStylesheet(chunkId).then((function(){installedCssChunks[chunkId]=0}),(function(e){throw delete installedCssChunks[chunkId],e})))}}}(),function(){var installedChunks={303:0};__webpack_require__.f.j=function(chunkId,promises){var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(303!=chunkId){var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(function(event){if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=function(chunkId){return 0===installedChunks[chunkId]};var webpackJsonpCallback=function(parentChunkLoadingFunction,data){var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((function(id){return 0!==installedChunks[id]}))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkdispute_resolution=self.webpackChunkdispute_resolution||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))}(),__webpack_require__.nc=void 0}();