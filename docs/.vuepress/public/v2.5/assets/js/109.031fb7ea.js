(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{354:function(e,t,n){"use strict";n.r(t);var i=n(0),s=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("p",[e._v("Deadzone")]),e._v(" "),n("h1",{attrs:{id:"deadzone"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deadzone","aria-hidden":"true"}},[e._v("#")]),e._v(" Deadzone")]),e._v(" "),n("h3",{attrs:{id:"component-type-processor-subcategory-signal-shaping"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-signal-shaping","aria-hidden":"true"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: Signal Shaping)")]),e._v(" "),n("p",[e._v('The purpose of this component is to define active and passive areas (zones) for one- or two dimensional sensor values. This function could also be called "resting zone" or "centerzone". It can be useful for example when a mouse pointer should not move before a certain value of a sensor (displacement of an analogue sensor, strength of activity) is reached.')]),e._v(" "),n("p",[n("img",{attrs:{src:"img/Deadzone.jpg",alt:"Screenshot: Deadzone plugin",title:"Screenshot: Deadzone plugin"}}),n("br"),e._v("\nDeadzone plugin")]),e._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("inX [double]:")]),e._v(" Input of x values. "),n("strong",[e._v("This input port supports synchronization")])]),e._v(" "),n("li",[n("strong",[e._v("inY [double]:")]),e._v(" Input of y values. "),n("strong",[e._v("This input port supports synchronization")])]),e._v(" "),n("li",[n("strong",[e._v("radius [double]:")]),e._v(" The radius of the active/passive zone around the centre point.")])]),e._v(" "),n("h2",{attrs:{id:"output-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("outX [double]:")]),e._v(" Output of modified x values.")]),e._v(" "),n("li",[n("strong",[e._v("outY [double]:")]),e._v(" Output of modified y values.")])]),e._v(" "),n("h2",{attrs:{id:"event-listener-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("setCenter:")]),e._v(' An incoming event stores the current x- and y- input values to represent the centre (It defines them as offset values). This can be useful for sensor calibration because it defines the "baseline" or resting position.')])]),e._v(" "),n("h2",{attrs:{id:"event-trigger-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("enterZone:")]),e._v(" This event is triggered when the x or x- and y- values enter the specified radius around the centre.")]),e._v(" "),n("li",[n("strong",[e._v("exitZone:")]),e._v(" This event is triggered when the x or x- and y- values leave the specified radius around the centre.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("xCenter [double]:")]),e._v(" This value defines the x- position of the centre (the middle of the active/passive zones).")]),e._v(" "),n("li",[n("strong",[e._v("yCenter [double]:")]),e._v(" This value defines the y- position of the centre (the middle of the active/passive zones).")]),e._v(" "),n("li",[n("strong",[e._v("radius [double]:")]),e._v(" The radius of the active/passive zone around the centre point.")]),e._v(" "),n("li",[n("strong",[e._v("mode [integer]:")]),e._v(" Selects the mode of operation of the centerzone component, following modes are available:\n"),n("ul",[n("li",[n("em",[e._v('"only inner values":')]),e._v(" x- and y- values are passed to the output ports only if the distance to the centre is lower than the given radius.")]),e._v(" "),n("li",[n("em",[e._v('"only outer values":')]),e._v(" x- and y- values are passed to the output ports only if the distance to the centre is greater than the given radius.")]),e._v(" "),n("li",[n("em",[e._v('"deadzone":')]),e._v(' x- and y- values are passed to the output ports only if the distance to the center is lower than the given radius, and additionally a correction of the values is performed so that they start with 0 when leaving the inner zone. This is useful for defining a "deadzone" for sensor values, where an inactive area shall be provided and no sudden acceleration is desired when leaving this inactive area.')])])])])])}],!1,null,null,null);s.options.__file="Deadzone.md";t.default=s.exports}}]);