(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{208:function(e,t,n){"use strict";n.r(t);var r=n(0),i=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("p",[e._v("Legacy Analog In")]),e._v(" "),n("h1",{attrs:{id:"legacy-analog-in"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#legacy-analog-in","aria-hidden":"true"}},[e._v("#")]),e._v(" Legacy Analog In")]),e._v(" "),n("h3",{attrs:{id:"component-type-sensor-subcategory-generic-control-input"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-generic-control-input","aria-hidden":"true"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Generic Control Input)")]),e._v(" "),n("p",[e._v("The LegacyAnalogIn component is a sensor which is used in combination with the legacy ADC CIM (CIM Id: 0x0401). The component provides eight output ports which correlate to the inputs IN1 to IN8 of the CIM. The component can be set up to sample the inputs periodically or upon an incoming event.")]),e._v(" "),n("p",[n("img",{attrs:{src:"img/LegacyAnalogIn.jpg",alt:"Screenshot: LegacyAnalogIn plugin",title:"Screenshot: LegacyAnalogIn plugin"}}),n("br"),e._v("\nLegacy AnalogIn plugin")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("p",[e._v("This software component requires an ADC-DAC CIM (CIM ID: 0x0401) connected to a USB port.")]),e._v(" "),n("p",[n("img",{attrs:{src:"img/AnalogIn_CIM.jpg",alt:"ADC/DAC CIM",title:"ADC/DAC CIM"}}),n("br"),e._v("\nLegacy ADC/DAC CIM")]),e._v(" "),n("h2",{attrs:{id:"output-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("in1 to in8 [integer]:")]),e._v(" Each of these output port corresponds to one input of the ADC CIM. The measured values are forwarded directly from the CIM thus corresponding to the description given in the CIM specification.")])]),e._v(" "),n("h2",{attrs:{id:"event-listener-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("adcSampleTrigger:")]),e._v(" An incoming event on this port will cause the ADC CIM to sample data on its inputs. This event will only take effect if the periodic_update property is set to 0.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("periodicUpdate [integer]:")]),e._v(" This property defines the time between data sampling requests to the ADC CIM (in milliseconds). The software component will send requests to the CIM in the given intervals. Due to current limitations of the ADC CIM it is recommended to use time intervals not lower than 50 milliseconds (20 samples per second).")]),e._v(" "),n("li",[n("strong",[e._v("activateInput1 to activateInput8 [Boolean]:")]),e._v(" These properties correspond the CIM's ADC inputs IN1 to IN8, if the property is true, the corresponding output port of the software component will send the sampled data.")])])])}],!1,null,null,null);i.options.__file="LegacyAnalogIn.md";t.default=i.exports}}]);