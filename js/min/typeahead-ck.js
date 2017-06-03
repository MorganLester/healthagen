angular.module("ui.bootstrap.typeahead").factory("typeaheadParser",["$parse",function(e){var t=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(a){var i=a.match(t);if(!i)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+a+'".');return{itemName:i[3],source:e(i[4]),viewMapper:e(i[2]||i[1]),modelMapper:e(i[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(e,t,a,i,n,r,o){var c=[9,13,27,38,40];return{require:"ngModel",link:function(p,d,l,s){var u=p.$eval(l.typeaheadMinLength)||1,h=p.$eval(l.typeaheadWaitMs)||0,f=p.$eval(l.typeaheadEditable)!==!1,m=t(l.typeaheadLoading).assign||angular.noop,v=t(l.typeaheadOnSelect),$=l.typeaheadInputFormatter?t(l.typeaheadInputFormatter):void 0,y=l.typeaheadAppendToBody?p.$eval(l.typeaheadAppendToBody):!1,g=t(l.ngModel).assign,w=o.parse(l.typeahead),x,b=p.$new();p.$on("$destroy",function(){b.$destroy()});var M="typeahead-"+b.$id+"-"+Math.floor(1e4*Math.random());d.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":M});var I=angular.element("<div typeahead-popup></div>");I.attr({id:M,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(l.typeaheadTemplateUrl)&&I.attr("template-url",l.typeaheadTemplateUrl);var q=function(){b.matches=[],b.activeIdx=-1,d.attr("aria-expanded",!1)},_=function(e){return M+"-option-"+e};b.$watch("activeIdx",function(e){0>e?d.removeAttr("aria-activedescendant"):d.attr("aria-activedescendant",_(e))});var A=function(e){var t={$viewValue:e};m(p,!0),a.when(w.source(p,t)).then(function(a){var i=e===s.$viewValue;if(i&&x)if(a.length>0){b.activeIdx=0,b.matches.length=0;for(var n=0;n<a.length;n++)t[w.itemName]=a[n],b.matches.push({id:_(n),label:w.viewMapper(b,t),model:a[n]});b.query=e,b.position=y?r.offset(d):r.position(d),b.position.top=b.position.top+d.prop("offsetHeight"),d.attr("aria-expanded",!0)}else q();i&&m(p,!1)},function(){q(),m(p,!1)})};q(),b.query=void 0;var k,E=function(e){k=i(function(){A(e)},h)},U=function(){k&&i.cancel(k)};s.$parsers.unshift(function(e){return x=!0,e&&e.length>=u?h>0?(U(),E(e)):A(e):(m(p,!1),U(),q()),f?e:e?void s.$setValidity("editable",!1):(s.$setValidity("editable",!0),e)}),s.$formatters.push(function(e){var t,a,i={};return $?(i.$model=e,$(p,i)):(i[w.itemName]=e,t=w.viewMapper(p,i),i[w.itemName]=void 0,a=w.viewMapper(p,i),t!==a?t:e)}),b.select=function(e){var t={},a,n;t[w.itemName]=n=b.matches[e].model,a=w.modelMapper(p,t),g(p,a),s.$setValidity("editable",!0),v(p,{$item:n,$model:a,$label:w.viewMapper(p,t)}),q(),i(function(){d[0].focus()},0,!1)},d.bind("keydown",function(e){0!==b.matches.length&&-1!==c.indexOf(e.which)&&(e.preventDefault(),40===e.which?(b.activeIdx=(b.activeIdx+1)%b.matches.length,b.$digest()):38===e.which?(b.activeIdx=(b.activeIdx?b.activeIdx:b.matches.length)-1,b.$digest()):13===e.which||9===e.which?b.$apply(function(){b.select(b.activeIdx)}):27===e.which&&(e.stopPropagation(),q(),b.$digest()))}),d.bind("blur",function(e){x=!1});var V=function(e){d[0]!==e.target&&(q(),b.$digest())};n.bind("click",V),p.$on("$destroy",function(){n.unbind("click",V)});var N=e(I)(b);y?n.find("body").append(N):d.after(N)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(e,t,a){e.templateUrl=a.templateUrl,e.isOpen=function(){return e.matches.length>0},e.isActive=function(t){return e.active==t},e.selectActive=function(t){e.active=t},e.selectMatch=function(t){e.select({activeIdx:t})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(e,t,a,i){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(n,r,o){var c=i(o.templateUrl)(n.$parent)||"template/typeahead/typeahead-match.html";e.get(c,{cache:t}).success(function(e){r.replaceWith(a(e.trim())(n))})}}}]).filter("typeaheadHighlight",function(){function e(e){return e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(t,a){return a?(""+t).replace(new RegExp(e(a),"gi"),"<strong>$&</strong>"):t}});