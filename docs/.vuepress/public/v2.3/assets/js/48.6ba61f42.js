(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{392:function(e,t,n){"use strict";n.r(t);var r=n(0),o=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("p",[e._v("AndroidPhoneControl")]),e._v(" "),n("h1",{attrs:{id:"androidphonecontrol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#androidphonecontrol","aria-hidden":"true"}},[e._v("#")]),e._v(" AndroidPhoneControl")]),e._v(" "),n("h3",{attrs:{id:"component-type-actuator-subcategory-phone-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-phone-interface","aria-hidden":"true"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Phone Interface)")]),e._v(" "),n("p",[e._v("This component controls a mobile phone with Android operating system through the TCP/IP connection. Currently this component is able to perform such action as: call a remote phone, drop a phone call, send and receive SMS message.")]),e._v(" "),n("p",[n("img",{attrs:{src:"img/AndroidPhoneControl.jpg",alt:"Screenshot: AndroidPhoneControl plugin",title:"Screenshot:\n        AndroidPhoneControl plugin"}}),n("br"),e._v("\nAndroidPhoneControl plugin")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("p",[e._v("Android phone running AsTeRICSPhoneServer application.")]),e._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("phoneID [string]:")]),e._v(" The phone number used for outgoing SMS and make phone calls.")]),e._v(" "),n("li",[n("strong",[e._v("SMSContent [string]:")]),e._v(" The SMS content which will be used for the send SMS action.")]),e._v(" "),n("li",[n("strong",[e._v("command [string]:")]),e._v(" String command that can be sent to this component from other plugins to trigger phone actions. Currently supported commands are:\n"),n("ul",[n("li",[e._v('@PHONE: SMS:Phone_ID, "Message_content"')]),e._v(" "),n("li",[e._v("@PHONE: SMS")]),e._v(" "),n("li",[e._v("@PHONE: CALL: Phone_ID")]),e._v(" "),n("li",[e._v("@PHONE: CALL")]),e._v(" "),n("li",[e._v("@PHONE: ACCEPT")]),e._v(" "),n("li",[e._v("@PHONE: DROP")]),e._v(" "),n("li",[e._v("@PHONE: SET_ID: Phone_ID")]),e._v(" "),n("li",[e._v('@PHONE: SET_SMS: "Message_content"')])])])]),e._v(" "),n("h2",{attrs:{id:"output-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("remotePhoneID [string]:")]),e._v(" This is a phone number of the caller or SMS sender.")]),e._v(" "),n("li",[n("strong",[e._v("receivedSMS [string]:")]),e._v(" This is the content of the incoming SMS.")]),e._v(" "),n("li",[n("strong",[e._v("errorNumber [integer]:")]),e._v(" The number of the error.")])]),e._v(" "),n("h2",{attrs:{id:"event-listener-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("sendSMS:")]),e._v(" Sends the SMS message.")]),e._v(" "),n("li",[n("strong",[e._v("makePhoneCall:")]),e._v(" Makes the phone call.")]),e._v(" "),n("li",[n("strong",[e._v("acceptPhoneCall:")]),e._v(" Accepts the incoming phone call.")]),e._v(" "),n("li",[n("strong",[e._v("dropPhoneCall:")]),e._v(" Drops the phone call.")])]),e._v(" "),n("h2",{attrs:{id:"event-trigger-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("idleState:")]),e._v(" Phone is in the idle state.")]),e._v(" "),n("li",[n("strong",[e._v("ringState:")]),e._v(" Phone is in the ring state.")]),e._v(" "),n("li",[n("strong",[e._v("connectedState:")]),e._v(" Phone is connected with the remote phone.")]),e._v(" "),n("li",[n("strong",[e._v("newSMS:")]),e._v(" There is a new SMS.")]),e._v(" "),n("li",[n("strong",[e._v("error:")]),e._v(" An error occurred.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("connectionType [integer]:")]),e._v(" Defines connection type for the plugin: client or server.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("IP [string]:")]),e._v(" IP of the remote server used in the client mode.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("port [integer]:")]),e._v(" TCP/IP port of the service.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("defaultPhoneID [string]:")]),e._v(" Default phone number for outgoing SMS and phone calls.")])])]),e._v(" "),n("p",[n("a",{attrs:{href:"Android_connection.htm"}},[e._v("Preparation of the connection with Android Phone.")])])])}],!1,null,null,null);o.options.__file="AndroidPhoneControl.md";t.default=o.exports}}]);