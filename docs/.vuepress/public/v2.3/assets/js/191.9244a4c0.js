(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{199:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("p",[e._v("TextfieldReader")]),e._v(" "),r("h1",{attrs:{id:"textfield-reader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#textfield-reader","aria-hidden":"true"}},[e._v("#")]),e._v(" Textfield Reader")]),e._v(" "),r("h3",{attrs:{id:"component-type-sensor-subcategory-graphical-user-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-graphical-user-interface","aria-hidden":"true"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Graphical User Interface)")]),e._v(" "),r("p",[e._v("Similar to the Keyboard Hook component, this component provides access to keystrokes coming from a standard keyboard or injected via software. The difference to the Keyboard Hook is that the Text Field Reader opens a GUI element with a text input filed and processes key input only from this text field. The keycodes of the pressed keys and accumulated words (multiple keys separated by ) are provided at the output ports of this component. Possible applications include triggering functions by keyboard input or remapping keys to other keycodes.")]),e._v(" "),r("p",[r("img",{attrs:{src:"img/TextfieldReader.jpg",alt:"Screenshot: TextfieldReader plugin",title:"Screenshot: TextfieldReader plugin"}}),r("br"),e._v("\nTextfieldReader plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("A keyboard which generates keystrokes or a software component which injects keystrokes into the operating system?s message queue.")]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("keys [integer]:")]),e._v(" This port sends the virtual keycode of the last pressed key as an integer value.")]),e._v(" "),r("li",[r("strong",[e._v("words [string]:")]),e._v(" This ports accumulates keystrokes and sends them as a string as soon as a blank separator (space key) appears in the key input stream.")])]),e._v(" "),r("h2",{attrs:{id:"event-trigger-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("recognizedCommand1 - recognizedCommand7:")]),e._v(" These event ports fire an event if one of seven command strings has been detected in the current input stream of keys.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("command1 [string] - command7 [string]:")]),e._v(" Seven string properties to specify command strings. The component looks for these command strings in the input stream of keystrokes. If a command string matches, the corresponding event trigger port is raised. This can be useful for example to define voice commands which should trigger certain actions in other ARE plugins.")])])])}],!1,null,null,null);a.options.__file="TextfieldReader.md";t.default=a.exports}}]);