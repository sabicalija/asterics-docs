(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{242:function(e,t,i){"use strict";i.r(t);var h=i(0),r=Object(h.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("p",[e._v("HeadPositionHC")]),e._v(" "),i("h1",{attrs:{id:"headpositionhc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#headpositionhc","aria-hidden":"true"}},[e._v("#")]),e._v(" HeadPositionHC")]),e._v(" "),i("p",[e._v("Component Type: Sensor (Subcategory:Computer Vision)")]),e._v(" "),i("p",[e._v("This plug-in provides a selection of up to 12 choices via the head. A choice can be selected through looking to the side. The angle of the head is calculated with the position of the ear and the mouth. The detection of the features is realised with HaarCascade.")]),e._v(" "),i("p",[i("img",{attrs:{src:"img/HeadPositionHC.png",alt:"Screenshot: HeadPositionHC plug-in",title:"Screenshot: HeadPositionHC plugin"}})]),e._v(" "),i("p",[e._v("The HeadPositionHC sensor plug-in")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v("A webcam or an other camera has to be connected to the computer.")]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("CellNumber:")]),e._v(" the number of the current selected Choice")])]),e._v(" "),i("h2",{attrs:{id:"event-triggerer-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-triggerer-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Triggerer Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Select:")]),e._v(" will be triggered when the position is held for an amount of time")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("ChoiceEachSide [integer]:")]),e._v(" sets the choices, which are visible and selectable for each side. (1-6 Choices each side are possible)")]),e._v(" "),i("li",[i("strong",[e._v("Angle1LeftSide [integer]:")]),e._v(" sets the upper value of the angle for the first choice on the left side. Every value lower than this value and higher than the value of Angle2LeftSide selects the first choice of the left side.")]),e._v(" "),i("li",[i("strong",[e._v("Angle2LeftSide [integer]:")]),e._v(" sets the upper value of the angle for the second choice on the left side. Every value lower than this value and higher than the value of Angle3LeftSide selects the second choice of the left side.")]),e._v(" "),i("li",[i("strong",[e._v("Angle3LeftSide [integer]:")]),e._v(" sets the upper value of the angle for the third choice on the left side. Every value lower than this value and higher than the value of Angle4LeftSide selects the third choice of the left side.")]),e._v(" "),i("li",[i("strong",[e._v("Angle4LeftSide [integer]:")]),e._v(" sets the upper value of the angle for the fourth choice on the left side. Every value lower than this value and higher than the value of Angle5LeftSide selects the fourth choice of the left side.")]),e._v(" "),i("li",[i("strong",[e._v("Angle5LeftSide [integer]:")]),e._v(" sets the upper value of the angle for the fifth choice on the left side. Every value lower than this value and higher than the value of Angle6LeftSide selects the fifth choice of the left side.")]),e._v(" "),i("li",[i("strong",[e._v("Angle6LeftSide [integer]:")]),e._v(" sets the upper value of the angle for the sixth choice on the left side. Every value lower than this value selects the sixth choice of the left side.")]),e._v(" "),i("li",[i("strong",[e._v("Angle1RightSide [integer]:")]),e._v(" sets the lower value of the angle for the first choice on the right side. Every value higher than this value and lower than the value of Angle2RightSide selects the first choice of the right side.")]),e._v(" "),i("li",[i("strong",[e._v("Angle2RightSide [integer]:")]),e._v(" sets the lower value of the angle for the second choice on the right side. Every value higher than this value and lower than the value of Angle3RightSide selects the first choice of the right side.")]),e._v(" "),i("li",[i("strong",[e._v("Angle3RightSide [integer]:")]),e._v(" sets the lower value of the angle for the third choice on the right side. Every value higher than this value and lower than the value of Angle4RightSide selects the first choice of the right side.")]),e._v(" "),i("li",[i("strong",[e._v("Angle4RightSide [integer]:")]),e._v(" sets the lower value of the angle for the fourth choice on the right side. Every value higher than this value and lower than the value of Angle5RightSide selects the first choice of the right side.")]),e._v(" "),i("li",[i("strong",[e._v("Angle5RightSide [integer]:")]),e._v(" sets the lower value of the angle for the fifth choice on the right side. Every value higher than this value and lower than the value of Angle6RightSide selects the first choice of the right side.")]),e._v(" "),i("li",[i("strong",[e._v("Angle6RightSide [integer]:")]),e._v(" sets the lower value of the angle for the sixth choice on the right side. Every value higher than this value selects the first choice of the right side.")]),e._v(" "),i("li",[i("strong",[e._v("PathForHaarCascade [string]:")]),e._v(" Filepath to the folder, where the HaarCascade-files are stored.")]),e._v(" "),i("li",[i("strong",[e._v("CameraID [integer]:")]),e._v(" the ID of the Camera.")]),e._v(" "),i("li",[i("strong",[e._v("CounterResettingROI [integer]:")]),e._v(" the number of frames to wait before resetting the ROI (finding the face) when no feature is found.")]),e._v(" "),i("li",[i("strong",[e._v("CounterToSendSelectEvent [integer]:")]),e._v(" the number of frames, which the person has to hold the position until the select event is triggered.")])])])}],!1,null,null,null);r.options.__file="HeadPositionHC.md";t.default=r.exports}}]);