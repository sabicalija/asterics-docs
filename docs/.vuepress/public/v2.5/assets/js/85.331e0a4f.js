(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{240:function(t,e,i){"use strict";i.r(e);var r=i(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("p",[t._v("SSVEP Stimulator")]),t._v(" "),i("h1",{attrs:{id:"ssvep-stimulator"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ssvep-stimulator","aria-hidden":"true"}},[t._v("#")]),t._v(" SSVEP Stimulator")]),t._v(" "),i("h3",{attrs:{id:"component-type-actuator-subcategory-brain-computer-interface"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-brain-computer-interface","aria-hidden":"true"}},[t._v("#")]),t._v(" Component Type: Actuator (Subcategory: Brain Computer Interface)")]),t._v(" "),i("p",[t._v("This plug-in allows the user to interact with the SW-generated flickering surfaces (panels) for SSVEP stimulation. The stimulation frequency of the panels can be modified before the stimulation is started.")]),t._v(" "),i("p",[i("img",{attrs:{src:"img/SSVEPStimulator.jpg",alt:"Screenshot: SSVEPStimulator application",title:"Screenshot: SSVEPStimulator application"}}),i("br"),t._v("\nSSVEPStimulator application")]),t._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),i("p",[t._v("A recent version of DirectX has to be installed.")]),t._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("frequency [integer]:")]),t._v(" the stimulation frequency the SW-generated panel in Hertz. The value ranges from 1 to 20 Hertz.")])]),t._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("startStim:")]),t._v(" starts the stimulation of the SW-generated flickering panels when receiving an event.")]),t._v(" "),i("li",[i("strong",[t._v("stopStim:")]),t._v(" stops the stimulation of the SW-generated flickering panels when receiving an event.")])]),t._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Trigger Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("stimPeriodFinished:")]),t._v(" an event is emitted through this port when the stimulation period of N miliseconds has finished.")])]),t._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("onBitmapFile [string]:")]),t._v(' filename of a bitmap file which is used in the on-phase of the stimulation. The file is expected in the data/SSVEPStimulator subfolder of the ARE. The filename is given without extenstion (e.g. "arrow_up" for the file "ARE/data/SSVEPStimulator/arrow_up.bmp")')]),t._v(" "),i("li",[i("strong",[t._v("offBitmapFile [string]:")]),t._v(" filename of a bitmap file which is used in the off-phase of the stimulation. (same filname format as above)")]),t._v(" "),i("li",[i("strong",[t._v("xPosition [integer]:")]),t._v(" x-position of the flickering surface on the desktop/screen.")]),t._v(" "),i("li",[i("strong",[t._v("yPosition [integer]:")]),t._v(" y-position of the flickering surface on the desktop/screen.")]),t._v(" "),i("li",[i("strong",[t._v("frequency [integer]:")]),t._v(" default stimulation frequency of in Hertz. This property ranges from 1 to 20 Hertz.")]),t._v(" "),i("li",[i("strong",[t._v("msec [integer]:")]),t._v(" duration in miliseconds of the stimulation started by the startStimPeriod event.")])])])}],!1,null,null,null);n.options.__file="SSVEPStimulator.md";e.default=n.exports}}]);