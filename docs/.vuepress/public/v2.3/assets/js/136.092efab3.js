(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{254:function(t,e,r){"use strict";r.r(e);var i=r(0),n=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p",[t._v("Protocol SSVEP Train")]),t._v(" "),r("h1",{attrs:{id:"protocol-ssvep-train"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#protocol-ssvep-train","aria-hidden":"true"}},[t._v("#")]),t._v(" Protocol SSVEP Train")]),t._v(" "),r("h3",{attrs:{id:"component-type-processor-subcategory-dsp-and-feauture-extraction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-dsp-and-feauture-extraction","aria-hidden":"true"}},[t._v("#")]),t._v(" Component Type: Processor (Subcategory: DSP and Feauture extraction)")]),t._v(" "),r("p",[t._v("This component is in charge of managing and configuring the SSVEP training recording protocol. It sends out the corresponding SSVEP stimulation frequencies.")]),t._v(" "),r("p",[r("img",{attrs:{src:"img/ProtocolSSVEPTrain.jpg",alt:"Screenshot: ProtocolSSVEPTrain plugin",title:"Screenshot: ProtocolSSVEPTrain plugin"}}),r("br"),t._v("\nProtocolSSVEPTrain plugin")]),t._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),r("p",[t._v("This plugins must be connected to the FlickeringLightStimulator plugin (which triggers the external SSVEP stimulation panels) or to the SSVEPStiumlator plugin.")]),t._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("StimFrequency [integer]:")]),t._v(" Current stimulation frequency in Hz under test.")]),t._v(" "),r("li",[r("strong",[t._v("Freq2 [integer]:")]),t._v(" Background stimulation frequency in Hz for panel 2.")]),t._v(" "),r("li",[r("strong",[t._v("Freq3 [integer]:")]),t._v(" Background Stimulation frequency in Hz for panel 3.")]),t._v(" "),r("li",[r("strong",[t._v("Freq4 [integer]:")]),t._v(" Background Stimulation frequency in Hz for panel 4.")])]),t._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("StartProt:")]),t._v(" Start protocol request.")]),t._v(" "),r("li",[r("strong",[t._v("StopProt:")]),t._v(" Stop protocol request.")]),t._v(" "),r("li",[r("strong",[t._v("Continue:")]),t._v(" Next Stimulation trial request")]),t._v(" "),r("li",[r("strong",[t._v("Repeat:")]),t._v(" Repeat last stimulation trial request.")]),t._v(" "),r("li",[r("strong",[t._v("Stop:")]),t._v(" Abort current stimulation trial request.")])]),t._v(" "),r("h2",{attrs:{id:"event-trigger-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Trigger Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("StartTrial:")]),t._v(" Event sent when a stimulation trial starts.")]),t._v(" "),r("li",[r("strong",[t._v("StopTrial:")]),t._v(" Event sent when a stimulation trial ends.")]),t._v(" "),r("li",[r("strong",[t._v("StartStim:")]),t._v(" Event sent when a stimulation period starts.")]),t._v(" "),r("li",[r("strong",[t._v("StopStim:")]),t._v(" Event sent when a stimulation period ends.")]),t._v(" "),r("li",[r("strong",[t._v("ReadyStim:")]),t._v(" EEvent sent 1 second befor the stimulation periods starts.")]),t._v(" "),r("li",[r("strong",[t._v("UpdatePanelConfig:")]),t._v(" Event sent requesting a stimulation panels re-configuration.")])]),t._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("NumRepetitions [integer]:")]),t._v(" Number of stimulation periods per trial.")]),t._v(" "),r("li",[r("strong",[t._v("RepStimDuration [integer]:")]),t._v(" Stimulation period duration in seconds.")]),t._v(" "),r("li",[r("strong",[t._v("RepNonStimDuration [integer]:")]),t._v(" Non-Stimulation period duration in seconds.")]),t._v(" "),r("li",[r("strong",[t._v("freqStim1 [integer]:")]),t._v(" Stimulation frequency number 1 in Hz.")]),t._v(" "),r("li",[r("strong",[t._v("freqStim2 [integer]:")]),t._v(" Stimulation frequency number 2 in Hz.")]),t._v(" "),r("li",[r("strong",[t._v("freqStim3 [integer]:")]),t._v(" Stimulation frequency number 3 in Hz.")]),t._v(" "),r("li",[r("strong",[t._v("freqStim4 [integer]:")]),t._v(" Stimulation frequency number 4 in Hz.")]),t._v(" "),r("li",[r("strong",[t._v("freqStim5 [integer]:")]),t._v(" Stimulation frequency number 5 in Hz.")]),t._v(" "),r("li",[r("strong",[t._v("freqStim6 [integer]:")]),t._v(" Stimulation frequency number 6 in Hz.")]),t._v(" "),r("li",[r("strong",[t._v("freqStim7 [integer]:")]),t._v(" Stimulation frequency number 7 in Hz.")]),t._v(" "),r("li",[r("strong",[t._v("freqStim8 [integer]:")]),t._v(" Stimulation frequency number 8 in Hz.")]),t._v(" "),r("li",[r("strong",[t._v("freqStim9 [integer]:")]),t._v(" Stimulation frequency number 9 in Hz.")]),t._v(" "),r("li",[r("strong",[t._v("freqStim10 [integer]:")]),t._v(" Stimulation frequency number 10 in Hz.")]),t._v(" "),r("li",[r("strong",[t._v("RandomizeFreq [boolean]:")]),t._v(" Randomize stimulation frequencies order.")])])])}],!1,null,null,null);n.options.__file="ProtocolSSVEPTrain.md";e.default=n.exports}}]);