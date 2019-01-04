(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{276:function(e,t,n){"use strict";n.r(t);var o=n(0),r=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("p",[e._v("AnalogIn")]),e._v(" "),n("h1",{attrs:{id:"analog-in"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#analog-in","aria-hidden":"true"}},[e._v("#")]),e._v(" Analog In")]),e._v(" "),n("h3",{attrs:{id:"component-type-sensor-subcategory-generic-control-input"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-generic-control-input","aria-hidden":"true"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Generic Control Input)")]),e._v(" "),n("p",[e._v("The AnalogIn component is a sensor which is used in combination with the ADC CIM. The component provides two output ports which correlate to the inputs IN1 and IN2 of the CIM. The component can be set up to sample the inputs periodically or upon an incoming event. Both inputs can be used for voltage and resistance measurement.")]),e._v(" "),n("p",[n("img",{attrs:{src:"img/AnalogIn.jpg",alt:"Screenshot: AnalogIn plugin",title:"Screenshot: AnalogIn plugin"}})]),e._v(" "),n("p",[e._v("AnalogIn plugin")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("p",[e._v("This software component requires an ADC CIM (CIM ID: 0x0901) connected to a USB port.")]),e._v(" "),n("h2",{attrs:{id:"output-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("in1 to in2 [integer]:")]),e._v(" Each of these output port corresponds to one input of the ADC CIM. The measured values are forwarded directly from the CIM thus corresponding to the description given in the CIM specification. Depending on the type of connected sensor the values either correspond to a voltage or a resistive value.")])]),e._v(" "),n("h2",{attrs:{id:"event-listener-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("adcSampleTrigger:")]),e._v(" An incoming event on this port will cause the ADC CIM to sample data on its inputs. This event will only take effect if the periodic_update property is set to 0.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("periodicUpdate [integer]:")]),e._v(" This property defines the time between data sampling requests to the ADC CIM (in milliseconds). The software component will send requests to the CIM in the given intervals. Due to current limitations of the ADC CIM it is recommended to use time intervals not lower than 50 milliseconds (20 samples per second).")]),e._v(" "),n("li",[n("strong",[e._v("activateInput1 to activateInput2 [Boolean]:")]),e._v(" These properties correspond the CIM's ADC inputs IN1 to IN8, if the property is true, the corresponding output port of the software component will send the sampled data.")]),e._v(" "),n("li",[n("strong",[e._v("uniqueId:")]),e._v(" unique number of the CIM - if more than one CIMs of the same type are used. The module flashes a LED for identification when the ID is selected. "),n("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])])])])}],!1,null,null,null);r.options.__file="AnalogIn.md";t.default=r.exports}}]);