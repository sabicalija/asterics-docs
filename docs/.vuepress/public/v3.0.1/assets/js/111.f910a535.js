(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{436:function(e,t,i){"use strict";i.r(t);var r=i(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("p",[e._v("Basic Tremor Reduction algorithms")]),e._v(" "),e._m(0),e._v(" "),i("p",[e._v("Component Type: Processor (Subcategory: Singal Shaping)")]),e._v(" "),i("p",[e._v("This plugin contains three algorithms for user hand tremor reduction: Arithmetic Mean, Outlier Reduction and Exponential Smoothing. The Arithmetic Mean algorithm calculates the cursor position as an average of the past n cursor positions. N is defined by the bufferSize parameter. The Outlier Reduction algorithm keeps the maximum distance between two followed cursor positions. The maximum distance is defined by the maxDistance parameter. If the distance between two cursor positions is greater than maxDistance, it is reduced to the value of maxDistance. The Exponential Smoothing algorithm implements the "),i("a",{attrs:{href:"http://en.wikipedia.org/wiki/Exponential_smoothing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Exponential smoothing"),i("OutboundLink")],1),e._v(" technique. The factor parameter defines the Exponential Smoothing and the degree parameters define the degree of the equation.")]),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("Basic Tremor Reduction algorithms plugin")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"basic-tremor-reduction-algorithms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-tremor-reduction-algorithms","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Tremor Reduction algorithms")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"img/BasicTRalgorithms.jpg",alt:"Screenshot: Basic Tremor Reduction algorithms plugin",title:"Screenshot: Basic Tremor Reduction algorithms plugin"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"input-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[this._v("#")]),this._v(" Input Port Description")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("strong",[e._v("inputX [integer]:")]),e._v(" Input mouse X position.")]),e._v(" "),i("li",[i("strong",[e._v("inputY [integer]:")]),e._v(" Input mouse Y position.")]),e._v(" "),i("li",[i("strong",[e._v("bufferSize [integer]:")]),e._v(" The new buffer size value for the Arithmetic Mean algorithm.")]),e._v(" "),i("li",[i("strong",[e._v("maxDistance [double]:")]),e._v(" The new maximum distance value for the Outlier Reduction algorithm.")]),e._v(" "),i("li",[i("strong",[e._v("factor [double]:")]),e._v(" The new factor value for Exponential Smoothing algorithm.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"output-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[this._v("#")]),this._v(" Output Port Description")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("strong",[e._v("outputX ["),i("strong",[i("strong",[e._v("integer")])]),e._v("]:")]),e._v(" Output mouse X position.")]),e._v(" "),i("li",[i("strong",[e._v("outputY ["),i("strong",[i("strong",[e._v("integer")])]),e._v("]:")]),e._v(" Output mouse Y position.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Properties")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("strong",[e._v("algorithm [integer]:")]),e._v(" Defines the algorithm used for the tremor reduction.")]),e._v(" "),i("li",[i("strong",[e._v("eventsType [integer]:")]),e._v(" Defines if the mouse coordinates are absolute or relative.")]),e._v(" "),i("li",[i("strong",[e._v("bufferSize [integer]:")]),e._v(" The buffer size value for the Arithmetic Mean algorithm.")]),e._v(" "),i("li",[i("strong",[e._v("maxDistance [double]:")]),e._v(" The maximum distance value for the Outlier Reduction algorithm.")]),e._v(" "),i("li",[i("strong",[e._v("factor [double]:")]),e._v(" The factor value for Exponential Smoothing algorithm.")]),e._v(" "),i("li",[i("strong",[e._v("degree [integer]:")]),e._v(" The degree of the equation for Exponential Smoothing algorithm.")])])}],!1,null,null,null);o.options.__file="BasicTRalgorithms.md";t.default=o.exports}}]);