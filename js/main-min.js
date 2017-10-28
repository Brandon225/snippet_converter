function populateToText(e){$("textarea[name=convert_to_text]").val(e)}function createAtom(e,t,r,o){var a="";return a+='".'+r+'":\n   ',a+='"'+o+'":\n       ',a+='"prefix": "'+t+'"\n       ',a+='"body": """'+e+'""" \n       '}function createBrackets(e,t,r,o){var a=[],n={};return n.name=o,n.trigger=t,n.usage=r,n.description=o,n.template=e,a.push(n),JSON.stringify(a)}function createVisualCode(e,t,r,o){var a=new Object;a.prefix=t;var n=e.split("\n"),i="";$.each(n,function(e,t){console.log("body index: "+e+" value: "+t),i+=$.trim(t)+"\n"}),console.log("bodyContent? ",i),a.body=i.split("\n"),console.log("jsonObj body? ",a.body),a.description=o;var c=o,l={};return l[c]=a,JSON.stringify(l)}function createSublime(e,t,r,o){var a="<snippet><content><![CDATA["+e+"]]></content>";return a+="<tabTrigger>"+t+"</tabTrigger>",a+="<scope>"+r+"</scope>",a+="<description>"+o+"</description></snippet>"}function parseAtom(e){if(console.log("parseAtom snipText first char? ",e.charAt(0)),'"'===e.charAt(0)){console.log("firstChar is quotation! ",e);var t=new Object;e=e.replace(/"/g,"").replace(/'/,""),e=$.trim(e);for(var r=e.split("\n"),o=0;o<r.length;o++){var a=$.trim(r[o]);if(a.startsWith("prefix")){var n=$.trim(a.replace("prefix:","")),i=$.trim(a.replace(n,""));t.trigger=n}else if(o===r.length-1)if(r.length>4){for(var c="",l=3;l<r.length;l++){var s=r[l];c+=3===l?$.trim(s.replace("body:",""))+"\n":s+"\n"}t.content=c}else{var n=$.trim(a);t.content=n}else if(1===o){var n=$.trim(a.replace(":",""));t.description=n}else if(0===o){var n=$.trim(a.replace(":",""));t.scope=n.replace(".","")}}return t}}function parseBrackets(e){var t="";try{return console.log("IS valid json: ",""),JSON.parse(e)}catch(e){return void console.log("NOT valid json err: ",e)}}function parseVisualCode(e){var t="";try{return console.log("IS valid json: ",""),JSON.parse(e)}catch(e){return void console.log("NOT valid json err: ",e)}}function parseSublime(e){var t="";try{return console.log("IS valid xmlDoc"),t=$.parseXML(e),$(t)}catch(e){return void console.log("NOT valid xmlDoc err: ",e)}}function toggleInputError(e,t){console.log("toggleInputError: "+e+" show? "+t),t?($(e).addClass("has-error"),$(e).find(".error-block").css("display","block")):($(e).removeClass("has-error"),$(e).find(".error-block").css("display","none"))}$("#convert-from").on("change",function(){var e=$(this).val();console.log("selected? ",e);var t=$("#convert-to"),r=$('#convert-to option[value="'+e+'"]');console.log("toOpt? ",r),t.children().attr("disabled",!1),r.attr("disabled",!0),t.val(""),"visual_code"===e?($(".scope-select").show(),$("select[name=scope_from]").attr("required",!0)):($(".scope-select").hide(),$("select[name=scope_from]").attr("required",!1))}),$("#submit-btn").click(function(e){e.preventDefault(),toggleInputError("#from-fg",!1);var t=!1,r=$("select[name=convert_from]").val(),o=$("select[name=convert_to]").val(),a=$("textarea[name=convert_from_text]").val();if("atom"===r){var n=parseAtom(a);n?("sublime"===o&&populateToText(createSublime(n.content,n.trigger,n.scope,n.description)),"brackets"===o&&populateToText(createBrackets(n.content,n.trigger,n.scope,n.description)),"visual_code"===o&&populateToText(createVisualCode(n.content,n.trigger,n.scope,n.description))):(t=!0,toggleInputError("#from-fg",!0))}if("sublime"===r){var i=parseSublime(a);if(i){var c=i.find("content"),l=i.find("tabTrigger"),s=i.find("scope"),p=i.find("description");"atom"===o&&populateToText(createAtom(c.text(),l.text(),s.text(),p.text())),"brackets"===o&&populateToText(createBrackets(c.text(),l.text(),s.text(),p.text())),"visual_code"===o&&populateToText(createVisualCode(c.text(),l.text(),s.text(),p.text()))}else t=!0,toggleInputError("#from-fg",!0)}if("visual_code"===r){var u=parseVisualCode(a);if(u){var f;for(var g in u)f=u[g];var m="";$.each(f.body,function(e,t){m+=t+"\n"});var v=f.prefix,d=$("select[name=scope_from]").val(),h=f.description;"sublime"===o&&populateToText(createSublime(m,v,d,h)),"atom"===o&&populateToText(createAtom(m,v,d,h)),"brackets"===o&&populateToText(createBrackets(m,v,d,h))}else t=!0,toggleInputError("#from-fg",!0)}if("brackets"===r){var b=parseBrackets(a);if(console.log("jsonBracObj? ",b),b){var x=b[0],T=x.template,y=x.trigger,k=x.usage,_=x.description;"sublime"===o&&populateToText(createSublime(T,y,k,_)),"atom"===o&&populateToText(createAtom(T,y,k,_)),"visual_code"===o&&populateToText(createVisualCode(T,y,k,_))}else t=!0,toggleInputError("#from-fg",!0)}t||($(".share-overlay").toggle(),$("body").addClass("modal-open"))}),$('[type="submit"]').mouseenter(function(){console.log("Mouse!")}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top-80},1e3),!1}});