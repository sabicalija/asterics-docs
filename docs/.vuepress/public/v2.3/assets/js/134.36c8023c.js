(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{256:function(t,e,r){"use strict";r.r(e);var o=r(0),i=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p",[t._v("Pathselector")]),t._v(" "),r("h1",{attrs:{id:"pathselector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pathselector","aria-hidden":"true"}},[t._v("#")]),t._v(" Pathselector")]),t._v(" "),r("h3",{attrs:{id:"component-type-processor-subcategory-signal-pathways"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-signal-pathways","aria-hidden":"true"}},[t._v("#")]),t._v(" Component Type: Processor (Subcategory: Signal Pathways)")]),t._v(" "),r("p",[t._v("The pathselector component allows routing of an incoming numerical signal between up to 4 output ports. The desired output port can be directly selected by a dedicated event listener port, or the signal can be switched to the next or previous output port. This component can be used to utilize one particular signal for different purposes, e.g. controlling different actuators within a single model by sequentially switching between them.")]),t._v(" "),r("p",[r("img",{attrs:{src:"img/PathSelector.jpg",alt:"Screenshot: PathSelector plugin",title:"Screenshot: PathSelector plugin"}}),r("br"),t._v("\nPathSelector plugin")]),t._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("in [double]:")]),t._v(" The incoming signal to be routed.")])]),t._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("out1 to out4:")]),t._v(" Four output ports where the incoming signal can be routed to.")])]),t._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("select1 to select4:")]),t._v(" An incoming event at these ports directly activates the associated output path (e.g. as an event comes in at select 3, the input signal will be routed to out3.")]),t._v(" "),r("li",[r("strong",[t._v("selectNext:")]),t._v(" The next output port is selected for signal output. The maximum number of active ports is set via the active ports property. If the current number of active ports is already the maximum one, the select next event will wrap around the active port number and one port will be selected.")]),t._v(" "),r("li",[r("strong",[t._v("selectPrevious:")]),t._v(" The previous output port is selected for signal output. If the current port is out1, the select previous event will switch to the port with the maximum number given by the active ports property.")])]),t._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("activePorts [integer]:")]),t._v(" The maximum port number in use (can be 2 to 4).")])])])}],!1,null,null,null);i.options.__file="Pathselector.md";e.default=i.exports}}]);