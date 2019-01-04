(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{278:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("p",[e._v("Acceleration")]),e._v(" "),a("h1",{attrs:{id:"acceleration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acceleration","aria-hidden":"true"}},[e._v("#")]),e._v(" Acceleration")]),e._v(" "),a("p",[e._v("Component Type: Sensor (Subcategory: Inertial Measurement)")]),e._v(" "),a("p",[e._v("The Acceleration input component is a sensor which is used in combination with the Acceleration CIM created in the course of the AsTeRICS project. The component provides three output ports which provide acceleration values for x, y and z axis. Via the component properties, the sampling rate and the sensitivity (acceleration range) can be set.")]),e._v(" "),a("p",[a("img",{attrs:{src:"img/Acceleration.jpg",alt:"Screenshot: Acceleration plugin",title:"Screenshot: Acceleration plugin"}})]),e._v(" "),a("p",[e._v("Acceleration plugin")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("This software component requires an Acceleration CIM (CIM ID: 0x0501) connected to the platform.")]),e._v(" "),a("p",[a("img",{attrs:{src:"img/Acceleration_CIM.jpg",alt:"Acceleration CIM",title:"Acceleration CIM"}})]),e._v(" "),a("p",[e._v("Acceleration CIM (preliminary version)")]),e._v(" "),a("h2",{attrs:{id:"output-port-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("xAcc [double], yAcc [double], zAcc [double]:")]),e._v(" These three output ports provide actual acceleration values of the X-, Y- and Z axis. The values are updated as a new data packet comes in (the sampling rate is set via the property update_frequency.")]),e._v(" "),a("li",[a("strong",[e._v("total [double]:")]),e._v(" This output port provides the total acceleration value, calculated by the square root of (x*x + y*y + z*z).")])]),e._v(" "),a("h2",{attrs:{id:"event-listener-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("start:")]),e._v(" An incoming event on this port starts the Acceleration CIM. (If the property autostart is set, the CIM is started automatically when the model is started).")]),e._v(" "),a("li",[a("strong",[e._v("stop:")]),e._v(" An incoming event on this port stops the Acceleration CIM.")]),e._v(" "),a("li",[a("strong",[e._v("calibrate:")]),e._v(' An incoming event on this port samples the current values of X, Y and Z axis and stores them as new "offset values". These offset values are subtracted from the incoming x, y and z values. Please note that this is not a real calibration of the sensor, but can set a baseline for the output values to zero, for example when the sensor is in resting pose.')])]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("autoStart [boolean]:")]),e._v(" This property specifies if the Acceleration CIM shall be started together with the model (if value is true) or if the Acceleration CIM receives a sepertate start condition via the dedicated event listener port (if value is false).")]),e._v(" "),a("li",[a("strong",[e._v("discreteSteps [integer]:")]),e._v(" If this property has a positive value greater than zero, the effective range of values for the X,Y and Z axis (-8192 to 8192) is mapped to a smaller number of values given by the property. For example: If he value is 10, the whole range of acceleration is mapped to values from -5 to 5. This can be helpful if a small number of different values is desired, e.g. for controlling the mouse cursor speed.")]),e._v(" "),a("li",[a("strong",[e._v("updateFrequency [integer]:")]),e._v(" This property defines the bandwidth of the acceleration sensor - and respectively the update rate of acceleration values on the output ports. The update rate is twice as fast as the selected bandwidth. The bandwidth can be selected as 10Hz, 20Hz, 40Hz, 75Hz, 150Hz or 300Hz. This means that if a bandwidth of 40Hz is selected, the x, y and z values are updated 80 times per second and frequencies up to 40 Hz can be measured with the acceleration sensor. Values of 20 Hz to 75 Hz are recommended for normal operation where body movements are measured (the highest possible frequency - 300Hz - can cause performance troubles in the current platform implementation because the update rate of 600 times per second is too fast).")]),e._v(" "),a("li",[a("strong",[e._v("accelerationRange [integer]:")]),e._v(" This property defines the sensitivity of the acceleration sensor (the measureable range of acceleration, defined in g). The range can be selected as 1g, 1.5g, 2g, 3g, 4g, 8g or 16 g via the combo box selection in the ACS. The selected acceleration range is mapped to values of -8192 to 8192 on the output ports. A value of 3 g is recommended for normal operation where body movements are measured.")])])])}],!1,null,null,null);o.options.__file="Acceleration.md";t.default=o.exports}}]);