(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{328:function(e,t,o){"use strict";o.r(t);var n=o(0),a=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("p",[e._v("Control the ARE")]),e._v(" "),o("h1",{attrs:{id:"control-the-are"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#control-the-are","aria-hidden":"true"}},[e._v("#")]),e._v(" Control the ARE")]),e._v(" "),o("p",[e._v("In the system-tab, the group ARE handles the functionalities for connecting to and communicating with the ARE. The connection to the ARE is handled by the AsTeRICS Application Programming Interface (ASAPI).")]),e._v(" "),o("p",[o("img",{attrs:{src:"img/ARE_and_ARE_Storage_Group.png",alt:"Screenshot: System Tab, ARE and ARE Storage Group",title:"Screenshot: System Tab, ARE and ARE Storage Group"}}),o("br"),e._v("\nSystem Tab, ARE and ARE Storage Group")]),e._v(" "),o("ul",[o("li",[o("p",[o("em",[e._v("Connect to ARE")]),e._v(" connects the ACS with the ARE. The Connect to ARE dialog appears, asking for the connection data. The host name (IP-address of the host) can be found in the ARE configuration, the default port should be 9090. Beside this connection dialog, also auto connection can be used, see the section Options / General Settings.")]),e._v(" "),o("p",[o("img",{attrs:{src:"img/ARE_Connection_Dialog.jpg",alt:"Screenshot: The ARE Connection Dialog",title:"Screenshot: The ARE Connection Dialog"}}),o("br"),e._v("\nThe ARE Connection Dialog")]),e._v(" "),o("p",[e._v("When the connection has been established, two special cases can occur:")]),e._v(" "),o("ul",[o("li",[e._v("An active model (deployment) has been detected on the ARE. The user will be asked to download this model or to proceed without downloading it.")]),e._v(" "),o("li",[e._v("An active model (deployment) has been detected and is running on the ARE. The user will be asked to download this model and switch the ACS to "),o("em",[e._v("Running")]),e._v(" mode or to proceed without downloading it.")])])]),e._v(" "),o("li",[o("p",[o("em",[e._v("Disconnect from ARE")]),e._v(" closes the connection to the ARE.")])]),e._v(" "),o("li",[o("p",[o("em",[e._v("Upload Model")]),e._v(" transmits the model in the drawing from the ACS to the ARE. The model on the ARE will be overwritten. Uploading the model to the ARE does not start the model on the ARE.")])]),e._v(" "),o("li",[o("p",[o("em",[e._v("Download Model")]),e._v(" transmits the active model from the ARE to the ACS. The model on the drawing area will be overwritten.")])]),e._v(" "),o("li",[o("p",[o("em",[e._v("Download Bundles")]),e._v(" transmits the bundel description (describing the components) form the connected ARE to the ACS. These bundel descrptions will be available as components in the components-tab. Then bundles can be managed with the "),o("em",[e._v("Bundle Manager")]),e._v(".")])])]),e._v(" "),o("p",[e._v("The group ARE Storage deals with the storage on the ARE. The storage is an area within the ARE where models can be stored and also activated using the ARE interface.")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("Store Model on ARE")]),e._v(" transmits the model in the drawing from the ACS to the ARE storage. A dialog appears to set the filename.")]),e._v(" "),o("li",[o("em",[e._v("Load Model from Storage")]),e._v(" transmits a model from the ARE storage to the ACS. The model on the ACS drawing area will be overwritten. A dialog appears to select the filename of the model.")]),e._v(" "),o("li",[o("em",[e._v("Activate a Stored Model")]),e._v(": A dialog appears to select the filename of a model in the storage. This model will be set active in the ARE and also will be started. Furthermore, the model on the ACS drawing area will be overwritten with the selected model and the ACS switches to run-mode.")]),e._v(" "),o("li",[o("em",[e._v("Delete a Stored Model")]),e._v(" deletes a model from the ARE storage using a file dialog.")]),e._v(" "),o("li",[o("em",[e._v("Set as Autorun")]),e._v(" sets the model as autorun model. This model will be started automatically when the ARE starts.")])]),e._v(" "),o("p",[e._v("Starting and stopping a model can be done with the buttons in the group Model.")]),e._v(" "),o("p",[o("img",{attrs:{src:"img/Model_Group_in_System_Tab.jpg",alt:"Screenshot: The Model Group in the System Tab",title:"Screenshot: The Model Group in the System Tab"}}),o("br"),e._v("\nThe Model Group in the System Tab")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("Start Model")]),e._v(" starts the model on the ARE and switches the ACS into run-mode. This means that now no components, channels and event channels can be added, edited or deleted. The drawing area is greyed out.")]),e._v(" "),o("li",[o("em",[e._v("Pause Model")]),e._v(" pauses the model on the ARE.")]),e._v(" "),o("li",[o("em",[e._v("Stop Model")]),e._v(" stops the model on the ARE and ends the run-mode.")])])])}],!1,null,null,null);a.options.__file="Control_the_ARE.md";t.default=a.exports}}]);