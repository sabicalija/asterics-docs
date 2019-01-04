(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{341:function(t,e,r){"use strict";r.r(e);var i=r(0),n=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p",[t._v("SSVEP File Writer")]),t._v(" "),r("h1",{attrs:{id:"ssvep-file-writer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssvep-file-writer","aria-hidden":"true"}},[t._v("#")]),t._v(" SSVEP File Writer")]),t._v(" "),r("h3",{attrs:{id:"component-type-actuator-subcategory-brain-computer-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-brain-computer-interface","aria-hidden":"true"}},[t._v("#")]),t._v(" Component Type: Actuator (Subcategory: Brain Computer Interface)")]),t._v(" "),r("p",[t._v("This plugin writes to a text file the 4 EEG channels along with a software trigger received through the event listener ports. This file is lately analyzed by the "),r("a",{attrs:{href:"../processors/ProtocolSSVEPTrain.htm"}},[t._v("ProtocolSSVEPTrain")]),t._v(" plugin to obtain the optimus frequencies to be used on the SSVEP detection.")]),t._v(" "),r("p",[r("img",{attrs:{src:"img/SSVEPFileWriter.jpg",alt:"Screenshot: SSVEPFileWriter plugin",title:"Screenshot: SSVEPFileWriter plugin"}}),r("br"),t._v("\nSSVEPFileWriter plugin")]),t._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("filename [string]:")]),t._v(" Name of the file to be saved.")]),t._v(" "),r("li",[r("strong",[t._v("channel1 to channel4 [integer]:")]),t._v(" Input EEG signal from channels 1 to 4.")]),t._v(" "),r("li",[r("strong",[t._v("StimulationFrequency [integer]:")]),t._v(" If a stimulation frequency value is received before the StarStimulation Event the stimulation freqeuncy is appended to the name of the output file to be saved.")])]),t._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("StartTrial:")]),t._v(" An incoming event at this port starts the file writer process.")]),t._v(" "),r("li",[r("strong",[t._v("StopTrial:")]),t._v(" An incoming event at this port stops the file writer process.")]),t._v(" "),r("li",[r("strong",[t._v("StartStimulation:")]),t._v(" An incoming event at this port sets the trigger channel to the corresponding stimulation frequency value in Hz.")]),t._v(" "),r("li",[r("strong",[t._v("StopStimulation:")]),t._v(" An incoming event at this port sets the trigger channel to zeros.")])]),t._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("DefaultFileName [string]:")]),t._v(" The default file name.")])])])}],!1,null,null,null);n.options.__file="SSVEPFileWriter.md";e.default=n.exports}}]);