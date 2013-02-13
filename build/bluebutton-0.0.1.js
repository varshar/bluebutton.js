/**
 * BlueButton.js
 */

(function () {
var Core=function(){return{parseXML:function(a){if(!a||"string"!==typeof a)return console.log("Error: XML data is not a string"),null;var b;window.DOMParser?(parser=new DOMParser,b=parser.parseFromString(a,"text/xml")):(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a));return b},getElementByTagAttrValue:function(a,b,c,d){a=a.getElementsByTagName(b);for(b=0;b<a.length;b++)if(a[b].attributes.getNamedItem(c).nodeValue===d)return a[b]}}}();var Immunizations=function(){return{process:function(a){var b=[];a=Core.getElementByTagAttrValue(a,"templateId","root","2.16.840.1.113883.10.20.22.2.2").parentElement.getElementsByTagName("entry");for(var c=0;c<a.length;c++){var d=a[c].getElementsByTagName("effectiveTime");b.push({date:d})}return b}}}();var Labs=function(){return{a:function(a){return this.getData()+" labs:"+a},b:function(){},extract:function(a){a=Core.getElementByTagAttrValue(a,"templateId","root","2.16.840.1.113883.10.20.22.2.3.1");a=a.parentElement;return a=a.getElementsByTagName("value")}}}();var BlueButton=function(a){var b=null,c={},c=function(){return c},b=Core.parseXML(a);c.immunizations=Immunizations.process(b);return{data:c,xmlDOM:b,immunizations:c.immunizations}};window.BlueButton=BlueButton;
})();
