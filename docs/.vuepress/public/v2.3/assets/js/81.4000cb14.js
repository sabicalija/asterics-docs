(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{342:function(e,t,o){"use strict";o.r(t);var i=o(0),n=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("p",[e._v("RemoteTablet")]),e._v(" "),o("h1",{attrs:{id:"remote-tablet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remote-tablet","aria-hidden":"true"}},[e._v("#")]),e._v(" Remote Tablet")]),e._v(" "),o("h3",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation","aria-hidden":"true"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),o("p",[e._v("The RemoteTablet component interfaces the AsTeRICS Personal Platform to a second computer via the HID actuator CIM (USB dongle, plugged into the target computer). This plugins performs similar like the RemoteMouse plugin, with the difference that the coorindates are set absolutely via the table devie, not relatively like a mouse device works. The HID actuator emulates a standard USB Tablet on the target computer (no special driver software is needed). The Tablet x-position, y-position, press/release actions of Tablet buttons and wheel movements can be controlled via desired input values and event triggers. Note that multiple instances of the Remote components (RemoteJoystick, RemoteKeyboard, RemoteMouse and RemoteTablet) can be used concurrently with one HID actuator USB dongle, e.g. to provide different key actions for up to four different input devices on the target computer.")]),e._v(" "),o("p",[o("img",{attrs:{src:"img/RemoteTablet.jpg",alt:"Screenshot: RemoteTablet plugin",title:"Screenshot: RemoteTablet plugin"}}),o("br"),e._v("\nRemoteTablet plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("The HID Actuator CIM (CIM ID 0x0101) has to be plugged into a free USB port of the target computer and the cable has to be connected to the AsTeRICS platform.")]),e._v(" "),o("p",[o("img",{attrs:{src:"img/HID_CIM.jpg",alt:"HID Actuator CIM",title:"HID Actuator CIM"}}),o("br"),e._v("\nthe HID Actuator plugs into the target computer and connects via Bluetooth wirelessly to the ARE")]),e._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("mouseX [integer]:")]),e._v(" The desired X-Position of the cursor. "),o("strong",[e._v("This input port supports synchronization")])]),e._v(" "),o("li",[o("strong",[e._v("mouseY [integer]:")]),e._v(" The desired Y-Position of the cursor. "),o("strong",[e._v("This input port supports synchronization")])]),e._v(" "),o("li",[o("strong",[e._v("action [string]:")]),e._v(" Input port for a command string. This command string allows to modify the action of the next left Tablet click �V it can be set to trigger other types of Tablet clicks. Following command strings are accepted:\n"),o("ul",[o("li",[o("em",[e._v('"@Mouse: nextclick, right":')]),e._v(" next left click event will create a right Mouse button click.")]),e._v(" "),o("li",[o("em",[e._v('"@Mouse: nextclick, double":')]),e._v(" next left click event will create a double click.")]),e._v(" "),o("li",[o("em",[e._v('"@Mouse: nextclick, middle":')]),e._v(" next left click event will create a middle button click.")]),e._v(" "),o("li",[o("em",[e._v('"@Mouse: nextclick, drag":')]),e._v(" next left click event will hold the left Mouse button.")]),e._v(" "),o("li",[o("em",[e._v('"@Mouse: nextclick, release":')]),e._v(" next left click event will release the left Mouse button.")]),e._v(" "),o("li",[o("em",[e._v('"@Mouse: action, enable":')]),e._v(" enables all Mouse actions.")]),e._v(" "),o("li",[o("em",[e._v('"@Mouse: action, disable":')]),e._v(" disables all Mouse actions.")]),e._v(" "),o("li",[o("em",[e._v('"@Mouse: action, toggle":')]),e._v(" enables / disables all Mouse actions.")])])])]),e._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("leftClick:")]),e._v(' An incoming event at this port creates a Mouse button click. A left click will be generated, unless a valid "nextclick �" command has been received at the cmd input which changed the type of the click (see above).')]),e._v(" "),o("li",[o("strong",[e._v("middleClick:")]),e._v(" A click with the middle Mouse button is generated.")]),e._v(" "),o("li",[o("strong",[e._v("rightClick:")]),e._v(" A click with the right Mouse button is generated.")]),e._v(" "),o("li",[o("strong",[e._v("doubleClick:")]),e._v(" A double click with the left Mouse button is generated.")]),e._v(" "),o("li",[o("strong",[e._v("dragPress:")]),e._v(" The left Mouse button is pressed (but not released again).")]),e._v(" "),o("li",[o("strong",[e._v("dragRelease:")]),e._v(" The left Mouse button is released.")]),e._v(" "),o("li",[o("strong",[e._v("wheelUp:")]),e._v(" The Mouse wheel is turned one position from the user.")]),e._v(" "),o("li",[o("strong",[e._v("wheelDown:")]),e._v(" The Mouse wheel is turned one position to the user.")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("absolutePosition [boolean]:")]),e._v(" Currently not supported. All Mouse position input values are interpreted as relative changes of the position (X- and Y-movement).")]),e._v(" "),o("li",[o("strong",[e._v("uniqueId:")]),e._v(" unique number of the CIM - if more than one CIMs of the same type are used. The module flashes a LED for identification when the ID is selected. "),o("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])])])])}],!1,null,null,null);n.options.__file="RemoteTablet.md";t.default=n.exports}}]);