(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-zhuye" viewBox="0 0 1024 1024">'+""+'<path d="M793.626657 577.149812c0 0 0 166.991292 0 204.66124 0 37.669948-40.932248 40.932248-40.932248 40.932248s-125.386732 0-143.262868 0c-17.890462 0-22.481014 40.932248 0 40.932248s88.484264 0 143.262868 0c81.000825 0 81.864496-81.864496 81.864496-81.864496 0.11154 0.017396 0-188.992375 0-204.66124C834.558905 557.771463 793.626657 558.426379 793.626657 577.149812z"  ></path>'+""+'<path d="M936.538531 516.087085l0.352017-0.335644-2.845815-2.686179c-0.830925-0.927115-1.727341-1.75804-2.686179-2.573615L527.567046 126.896108l-403.133523 382.972345c-6.859221 5.467525-11.305487 13.766538-11.305487 23.184025 0 16.46909 13.334703 29.835516 29.803793 29.835516 7.851828 0 14.935154-3.101641 20.259416-8.075933l0.048095 0.048095 0.414439-0.414439c0.255827-0.273223 0.511653-0.543376 0.76748-0.830925l56.153928-58.328453 0 286.525736c0 0-0.063445 81.864496 81.864496 81.864496 10.648524 0 61.398372 0 61.398372 0s81.864496-0.159636 81.864496-81.864496c0-37.558407 0-61.398372 0-61.398372s1.134847-40.932248 40.932248-40.932248c39.781028 0 105.70446 0 122.796744 0 17.076934 0 17.876136-41.23617 0-40.932248-19.314904 0.335644-123.05257 0.063445-122.796744 0 0 0-81.864496-0.176009-81.864496 81.864496 0 0 0 23.728424 0 61.398372 0 37.669948-40.932248 40.932248-40.932248 40.932248l-61.398372 0c0 0-40.932248-3.693112-40.932248-40.932248s0-327.45696 0-327.45696l266.059612-245.593488 361.610828 343.142198c1.727341 2.078335 3.613294 3.965312 5.78782 5.516644l0.127913 0.11154 0.016373-0.016373c4.812609 3.373841 10.664897 5.372358 16.996093 5.372358 16.436344 0 29.803793-13.366426 29.803793-29.835516C941.910888 526.751982 939.895999 520.899694 936.538531 516.087085z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-jiantou-copy" viewBox="0 0 1024 1024">'+""+'<path d="M672 512l-384 384c-12.8 12.8-12.8 31.999 0 44.799s31.999 12.8 44.799 0l403.2-403.2c6.4-6.4 12.8-19.199 12.8-25.6s0-19.199-6.4-25.599l-409.6-409.6c-12.8-12.8-31.999-12.8-44.799 0s-12.8 31.999 0 44.799l384 390.399z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-jian" viewBox="0 0 1024 1024">'+""+'<path d="M816.800072 105.599904h-609.600144c-56.109403 0-101.600024 45.492427-101.600024 101.600024V816.800975c0 56.106694 45.491524 101.599121 101.600024 101.599121h609.600144c56.1085 0 101.600024-45.491524 101.600024-101.599121V207.199928c0-56.107597-45.490621-101.600024-101.600024-101.600024zM664.400939 537.400006H359.599061c-14.0199 0-25.399103-11.354819-25.399103-25.400909 0-14.0199 11.379203-25.399103 25.399103-25.399103H664.400939c14.045187 0 25.399103 11.379203 25.399103 25.399103 0 14.046994-11.353916 25.400909-25.399103 25.400909z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)