(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{377:function(e,t,o){"use strict";o.r(t);var i=o(0),n=Object(i.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("p",[e._v("Mouse")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),o("p",[e._v("The Mouse component allows mouse cursor positioning and clicking on the computer the ARE is running on (by software emulation). The mouse x-position, y-position, press/release actions of three mouse buttons and mouse-wheel movements can be controlled via desired input values and event triggers.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),o("p",[e._v("The mouse emulation on Windows 7 does not always work as expected due to User Account Control (UAC) settings. Especially when you want to use the Windows 7 On-Screen-Keyboard dragging the keyboard does not work. To troubleshoot "),o("a",{attrs:{href:"http://windows.microsoft.com/en-au/windows/turn-user-account-control-on-off#1TC=windows-7",target:"_blank",rel:"noopener noreferrer"}},[e._v("turn off the User Account Control (UAC)"),o("OutboundLink")],1),e._v(' � change the level to "Never notify"')]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"mouse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mouse","aria-hidden":"true"}},[this._v("#")]),this._v(" Mouse")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation","aria-hidden":"true"}},[this._v("#")]),this._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"img/Mouse.jpg",alt:"Screenshot: Mouse plugin",title:"Screenshot: Mouse plugin"}}),t("br"),this._v("\nMouse plugin")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"please-note-mouse-emulation-on-windows-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#please-note-mouse-emulation-on-windows-7","aria-hidden":"true"}},[this._v("#")]),this._v(" Please Note: Mouse emulation on Windows 7")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"input-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[this._v("#")]),this._v(" Input Port Description")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("strong",[e._v("mouseX [double]:")]),e._v(" The desired X-Position of the mouse. "),o("strong",[e._v("This input port supports synchronization")])]),e._v(" "),o("li",[o("strong",[e._v("mouseY [double]:")]),e._v(" The desired Y-Position of the mouse. "),o("strong",[e._v("This input port supports synchronization")])]),e._v(" "),o("li",[o("strong",[e._v("action [string]:")]),e._v(" Input port for a command string. This command string allows to modify the action of the next left mouse click - it can be set to trigger other types of mouse clicks. A command string may be composed of several items that are delimited by ',' or ' '. Following command strings are accepted:\n"),o("ul",[o("li",[o("em",[e._v('"@MOUSE:nextclick,right":')]),e._v(" next left click event will create a right mouse button click.")]),e._v(" "),o("li",[o("em",[e._v('"@MOUSE:nextclick,double":')]),e._v(" next left click event will create a double click.")]),e._v(" "),o("li",[o("em",[e._v('"@MOUSE:nextclick,middle":')]),e._v(" next left click event will create a middle button click")]),e._v(" "),o("li",[o("em",[e._v('"@MOUSE:nextclick,drag":')]),e._v(" next left click event will hold the left mouse button.")]),e._v(" "),o("li",[o("em",[e._v('"@MOUSE:nextclick,release":')]),e._v(" next left click event will release the left mouse button.")]),e._v(" "),o("li",[o("em",[e._v('"@MOUSE:action,enable":')]),e._v(" enables all mouse actions.")]),e._v(" "),o("li",[o("em",[e._v('"@MOUSE:action,disable":')]),e._v(" disables all mouse actions.")]),e._v(" "),o("li",[o("em",[e._v('"@MOUSE:action,toggle:')]),e._v(" enables / disables all mouse actions.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"event-listener-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Listener Description")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("strong",[e._v("leftClick:")]),e._v(' An incoming event at this port creates a mouse button click. A left mouse button click will be generated, unless a valid "nextclick..." command has been received at the cmd input which changed the click type (see above).')]),e._v(" "),o("li",[o("strong",[e._v("middleClick:")]),e._v(" A click with the middle mouse button is generated.")]),e._v(" "),o("li",[o("strong",[e._v("rightClick:")]),e._v(" A click with the right mouse button is generated.")]),e._v(" "),o("li",[o("strong",[e._v("doubleClick:")]),e._v(" A double click with the left mouse button is generated.")]),e._v(" "),o("li",[o("strong",[e._v("dragPress:")]),e._v(" The left mouse button is pressed (but not released again).")]),e._v(" "),o("li",[o("strong",[e._v("dragRelease:")]),e._v(" The left mouse button is released.")]),e._v(" "),o("li",[o("strong",[e._v("wheelUp:")]),e._v(" The mouse wheel is turned one position from the user.")]),e._v(" "),o("li",[o("strong",[e._v("wheelDown:")]),e._v(" The mouse wheel is turned one position to the user.")]),e._v(" "),o("li",[o("strong",[e._v("activate:")]),e._v(" enables all mouse actions.")]),e._v(" "),o("li",[o("strong",[e._v("deactivate:")]),e._v(" disables all mouse actions.")]),e._v(" "),o("li",[o("strong",[e._v("toggle:")]),e._v(" enables / disables all mouse actions.")]),e._v(" "),o("li",[e._v("**absolutePosition:**after this event is triggered the incoming values for mouseX and mouseY are interpreted as absolute movement information")]),e._v(" "),o("li",[e._v("**relativePosition:**after this event is triggered the incoming values for mouseX and mouseY are interpreted as relative movement information")]),e._v(" "),o("li",[o("strong",[e._v("nextClickRight")]),e._v(" next left click event will create a right mouse button click.")]),e._v(" "),o("li",[o("strong",[e._v("nextClickDouble")]),e._v(" next left click event will create a double click.")]),e._v(" "),o("li",[o("strong",[e._v("nextClickMiddle")]),e._v("next left click event will create a middle button click")]),e._v(" "),o("li",[o("strong",[e._v("nextClickDrag")]),e._v(" next left click event will hold the left mouse button.")]),e._v(" "),o("li",[o("strong",[e._v("nextClickRelease")]),e._v(" next left click event will release the left mouse button.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Properties")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("strong",[e._v("enableMouse [boolean]:")]),e._v(" The value of this property specifies if all mouse actions are bypassed (false) or enabled (true).")]),e._v(" "),o("li",[o("strong",[e._v("absolutePosition [boolean]:")]),e._v(" If this property value is set to false, incoming values at the mouseX and mouseY input ports are interpreted as relative movement information. The values are summed up (integrated) to calculate the absolute position. If the property value is set to true, the values of the input ports are treated as absolute x/y positions.")]),e._v(" "),o("li",[o("strong",[e._v("xMin [integer]:")]),e._v(" The minimum value for the X-coordinate (the mouse will not move farther to the left).")]),e._v(" "),o("li",[o("strong",[e._v("xMax [integer]:")]),e._v(" The maximum value for the X-coordinate (the mouse will not move farther to the right). "),o("strong",[e._v("If the xMax property is set to 0, the horizontal screen resoltion will be assumed as maximum x-position for the mouse cursor.")])]),e._v(" "),o("li",[o("strong",[e._v("yMin [integer]:")]),e._v(" The minimum value for the Y-coordinate (the mouse will not move farther up).")]),e._v(" "),o("li",[o("strong",[e._v("yMax [integer]:")]),e._v(" The maximum value for the Y-coordinate (the mouse will not move farther down) "),o("strong",[e._v("If the yMax property is set to 0, the vertical screen resoltion will be assumed as maximum y-position for the mouse cursor.")]),e._v(".")])])}],!1,null,null,null);n.options.__file="Mouse.md";t.default=n.exports}}]);