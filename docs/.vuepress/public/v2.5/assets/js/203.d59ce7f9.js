(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{215:function(e,t,i){"use strict";i.r(t);var r=i(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("p",[e._v("WiiMote")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("The WiiMote component interfaces to the Nintendo WiiMote controller via Bluetooth and the WiiYourself! library. It provides various sensor values including the Wiimote buttons and the tracked IR-points of the Wiimote IR front camera and the Joystick position of the Nunchuk extension.")]),e._v(" "),i("p",[e._v("Contains WiiYourself! wiimote code by gl.tter - see "),i("a",{attrs:{href:"http://gl.tter.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://gl.tter.org"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("For Wiimote connection and pairing, please see e.g. "),i("a",{attrs:{href:"http://code.google.com/p/giimote/wiki/GettingConnected",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("A Wiimote controller has to be available and paired with the Bluetooth radio module of the system.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"wiimote"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wiimote","aria-hidden":"true"}},[this._v("#")]),this._v(" WiiMote")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"component-type-sensor-subcategory-standard-input-devices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-standard-input-devices","aria-hidden":"true"}},[this._v("#")]),this._v(" Component Type: Sensor (Subcategory: Standard Input Devices)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"img/WiiMote.jpg",alt:"Screenshot: WiiMote plugin",title:"Screenshot: WiiMote plugin"}}),t("br"),this._v("\nWiiMote plugin")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"img/WiiMote_picture.jpg",alt:"WiiMote and Nunchuk",title:"WiiMote and Nunchuk"}}),t("br"),this._v("\nWiiMote and Nunchuk")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"output-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[this._v("#")]),this._v(" Output Port Description")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("strong",[e._v("pitch [integer]:")]),e._v(" The calculated pitch orientation of the Wiimote controller (in degrees)")]),e._v(" "),i("li",[i("strong",[e._v("roll [integer]:")]),e._v(" The calculated roll orientation of the Wiimote controller (in degrees)")]),e._v(" "),i("li",[i("strong",[e._v("point1X [integer]:")]),e._v(" The X position of the first visible IR point (0-1023)")]),e._v(" "),i("li",[i("strong",[e._v("point1Y [integer]:")]),e._v(" The Y position of the first visible IR point (0-768)")]),e._v(" "),i("li",[i("strong",[e._v("point2X [integer]:")]),e._v(" The X position of the second visible IR point (0-1023)")]),e._v(" "),i("li",[i("strong",[e._v("point2Y [integer]:")]),e._v(" The Y position of the second visible IR point (0-768)")]),e._v(" "),i("li",[i("strong",[e._v("nunX [integer]:")]),e._v(" The X-position of the analog joystick on the Nunchuk extension (if connected)")]),e._v(" "),i("li",[i("strong",[e._v("nunY [integer]:")]),e._v(" The Y-position of the analog joystick on the Nunchuk extension (if connected)")]),e._v(" "),i("li",[i("strong",[e._v("battery [integer]:")]),e._v(" The battery level (0-100%)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"event-trigger-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Trigger Description")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("strong",[e._v("pressedUp:")]),e._v(" Up direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("releasedUp:")]),e._v(" Up direction button released")]),e._v(" "),i("li",[i("strong",[e._v("pressedDown:")]),e._v(" Down direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("releasedDown:")]),e._v(" Down direction button released")]),e._v(" "),i("li",[i("strong",[e._v("pressedLeft:")]),e._v(" Left direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("releasedLeft:")]),e._v(" Left direction button released")]),e._v(" "),i("li",[i("strong",[e._v("pressedRight:")]),e._v(" Right direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("releasedRight:")]),e._v(" Right direction button released")]),e._v(" "),i("li",[i("strong",[e._v("pressedA:")]),e._v(" A direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("releasedA:")]),e._v(" A direction button released")]),e._v(" "),i("li",[i("strong",[e._v("pressedB:")]),e._v(" B direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("releasedB:")]),e._v(" B direction button released")]),e._v(" "),i("li",[i("strong",[e._v("pressed1:")]),e._v(" 1 direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("released1:")]),e._v(" 1 direction button released")]),e._v(" "),i("li",[i("strong",[e._v("pressed2:")]),e._v(" 2 direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("released2:")]),e._v(" 2 direction button released")]),e._v(" "),i("li",[i("strong",[e._v("pressedPlus:")]),e._v(" Plus direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("releasedPlus:")]),e._v(" Plus direction button released")]),e._v(" "),i("li",[i("strong",[e._v("pressedMinus:")]),e._v(" Minus direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("releasedMinus:")]),e._v(" Minus direction button released")]),e._v(" "),i("li",[i("strong",[e._v("pressedHome:")]),e._v(" Home direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("releasedHome:")]),e._v(" Home direction button released")]),e._v(" "),i("li",[i("strong",[e._v("pressedNunchuckC:")]),e._v(" NunchuckC direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("releasedNunchuckC:")]),e._v(" NunchuckC direction button released")]),e._v(" "),i("li",[i("strong",[e._v("pressedNunchuckZ:")]),e._v(" NunchuckZ direction button pressed")]),e._v(" "),i("li",[i("strong",[e._v("releasedNunchuckZ:")]),e._v(" NunchuckZ direction button released")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Properties")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("updatePeriod [integer]:")]),this._v(" This property defines how often the WiiMote is queried for new data (in milliseconds)")])])}],!1,null,null,null);n.options.__file="WiiMote.md";t.default=n.exports}}]);