(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{361:function(t,e,r){"use strict";r.r(e);var n=r(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p",[t._v("IR Trans")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("p",[t._v('This component sends transmission commands to an infrared-transmitter. The different commands can be selected by the different events. The commands must be programmed into the IR-transmitter, before this component can be used. Furthermore, commands can also be sent to this component\'s input port ("action").')]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v('Using the event based option, the property "prestring" is set to "snd LG-TV", and at property "send1" is set to "TvOn".')]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("The IRTrans module (USB, LAN or WiFi version) is required. It can be purchased from "),r("a",{attrs:{href:"http://www.irtrans.de",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.irtrans.de"),r("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"ir-trans"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ir-trans","aria-hidden":"true"}},[this._v("#")]),this._v(" IR Trans")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"component-type-actuator-subcategory-home-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-home-control","aria-hidden":"true"}},[this._v("#")]),this._v(" Component Type: Actuator (Subcategory: Home Control)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Action String example:")]),this._v(' The action string starts with "@IRTRANS:" and contains the remote control name and the command name. For example, if the IR-Transmitter is programmed with a database called "LG-TV" and the desired command is called "TvOn", the action string to play the IR-code is "@IRTRANS: snd LG-TV,TvOn".')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"img/IRTrans.jpg",alt:"Screenshot: IRTrans plugin",title:"Screenshot: IRTrans plugin"}}),e("br"),this._v("\nIRTrans plugin")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"img/IRTrans_picture.jpg",alt:"IRTrans universal IR remote module",title:"IRTrans universal IR remote module"}}),e("br"),this._v("\nIRTrans universal IR remote module")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"input-port-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[this._v("#")]),this._v(" Input Port Description")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("action[string]:")]),this._v(' A string, which will be sent to the IRTrans module, must start with "@IRTRANS".')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"output-port-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[this._v("#")]),this._v(" Output Port Description")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("output[string]:")]),this._v(" The IRTrans can also receive IR-Commands. With the IRTrans Configuration tool string commands can be defined for every received IR-Command which will be sent to a custom UDP server. If the target is the computer where the ARE runs on, the given string will be received by this output port.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"event-listener-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Listener Description")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("sendprop1:")]),this._v(" sends the command, stored in the property send1 to the IRTrans (including the prestring).")]),this._v(" "),e("li",[this._v("...")]),this._v(" "),e("li",[e("strong",[this._v("sendprop24:")]),this._v(" sends the command, stored in the property send24 to the IRTrans (including the prestring).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Properties")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("strong",[t._v("hostname[string]:")]),t._v(' The hostname/IP-address of the IRTrans. Use "localhost" if you have the IRTrans USB Version (IRTrans server tool must be running), or use the IP address of your IRTrans LAN or WiFi module.')]),t._v(" "),r("li",[r("strong",[t._v("port[string]:")]),t._v(" The port of the IRTrans (default is 21000).")]),t._v(" "),r("li",[r("strong",[t._v("prestring[string]:")]),t._v(" A string, being added before the strings of properties send1 to send24. Typically snd or snd , should be used.")]),t._v(" "),r("li",[r("strong",[t._v("Send1[string]:")]),t._v(" This string (including the prestring) will be sent, if the event EventProp1 will be triggered.")]),t._v(" "),r("li",[t._v("�")]),t._v(" "),r("li",[r("strong",[t._v("Send24[string]:")]),t._v(" This string (including the prestring) will be sent, if the event EventProp24 will be triggered.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Comment:")]),this._v(" This component is exactly tailored to the IRTrans module and needs expert knowledge to be configured.")])}],!1,null,null,null);s.options.__file="IRTrans.md";e.default=s.exports}}]);