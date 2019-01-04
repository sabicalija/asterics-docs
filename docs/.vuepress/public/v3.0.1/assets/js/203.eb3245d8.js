(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{250:function(e,t,r){"use strict";r.r(t);var v=r(0),s=Object(v.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("p",[e._v("FS20Receiver")]),e._v(" "),e._m(0),e._v(" "),r("p",[e._v("Component Type: Sensor (Subcategory: Home Control)")]),e._v(" "),r("p",[e._v("The FS20Receiver receives commands of the home automation system FS20 for ELV Electronics. Depending on the received commands, events will be fired.")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("FS20 Receiver Plugin")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("This component requires the "),r("a",{attrs:{href:"http://www.elv.de/empfaenger-fs20-funkschaltsystem.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("FS20 PCE Receiver"),r("OutboundLink")],1),e._v(" connected to a USB port.")]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("FS20 PCE Receiver")]),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("Windows (x86,x64), Linux (x86, x64, arm(Raspberry Pi)), Mac OSX(x86, x64)")]),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("If you installed AsTeRICS as package, all necessary permission already set. If you built AsTeRICS on your own, please type following command on a terminal window:")]),e._v(" "),e._m(6),e._v(" "),r("p",[e._v("Onw additional command is necessary if you work on ARM based platforms (RaspberryPi, BananaPi,...):")]),e._v(" "),e._m(7),e._v(" "),r("p",[e._v("Afterwards, unplug and plug in the FS20 device and restart AsTeRICS.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),r("p",[e._v("Each received command triggers an event, being mapped to this command. The following table will describe this events:")]),e._v(" "),r("p",[e._v("Command Mapping")]),e._v(" "),r("p",[e._v("Event")]),e._v(" "),r("p",[e._v("Command")]),e._v(" "),r("p",[e._v("Off")]),e._v(" "),r("p",[e._v("0")]),e._v(" "),r("p",[e._v("Level1")]),e._v(" "),r("p",[e._v("1")]),e._v(" "),r("p",[e._v("Level2")]),e._v(" "),r("p",[e._v("2")]),e._v(" "),r("p",[e._v("Level3")]),e._v(" "),r("p",[e._v("3")]),e._v(" "),r("p",[e._v("Level4")]),e._v(" "),r("p",[e._v("4")]),e._v(" "),r("p",[e._v("Level5")]),e._v(" "),r("p",[e._v("5")]),e._v(" "),r("p",[e._v("Level6")]),e._v(" "),r("p",[e._v("6")]),e._v(" "),r("p",[e._v("Level7")]),e._v(" "),r("p",[e._v("7")]),e._v(" "),r("p",[e._v("Level8")]),e._v(" "),r("p",[e._v("8")]),e._v(" "),r("p",[e._v("Level9")]),e._v(" "),r("p",[e._v("9")]),e._v(" "),r("p",[e._v("Level10")]),e._v(" "),r("p",[e._v("10")]),e._v(" "),r("p",[e._v("Level11")]),e._v(" "),r("p",[e._v("11")]),e._v(" "),r("p",[e._v("Level12")]),e._v(" "),r("p",[e._v("12")]),e._v(" "),r("p",[e._v("Level13")]),e._v(" "),r("p",[e._v("13")]),e._v(" "),r("p",[e._v("Level14")]),e._v(" "),r("p",[e._v("14")]),e._v(" "),r("p",[e._v("Level15")]),e._v(" "),r("p",[e._v("15")]),e._v(" "),r("p",[e._v("Level16")]),e._v(" "),r("p",[e._v("16")]),e._v(" "),r("p",[e._v("OnOldLevel")]),e._v(" "),r("p",[e._v("17")]),e._v(" "),r("p",[e._v("Toggle")]),e._v(" "),r("p",[e._v("18")]),e._v(" "),r("p",[e._v("Dim Up")]),e._v(" "),r("p",[e._v("19")]),e._v(" "),r("p",[e._v("Dim Down")]),e._v(" "),r("p",[e._v("20")]),e._v(" "),r("p",[e._v("Dim Up and Down")]),e._v(" "),r("p",[e._v("21")]),e._v(" "),r("p",[e._v("Program internal timer")]),e._v(" "),r("p",[e._v("22")]),e._v(" "),r("p",[e._v("Off for timer then old brightness level")]),e._v(" "),r("p",[e._v("24")]),e._v(" "),r("p",[e._v("On for timer then off")]),e._v(" "),r("p",[e._v("25")]),e._v(" "),r("p",[e._v("On old brightness level for timer then off")]),e._v(" "),r("p",[e._v("26")]),e._v(" "),r("p",[e._v("On for timer then old brightness level")]),e._v(" "),r("p",[e._v("30")]),e._v(" "),r("p",[e._v("On for old level then previous state")]),e._v(" "),r("p",[e._v("31")]),e._v(" "),e._m(11),e._v(" "),e._m(12)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"fs20-receiver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fs20-receiver","aria-hidden":"true"}},[this._v("#")]),this._v(" FS20 Receiver")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"img/FS20Receiver.jpg",alt:"FS20 Receiver Plugin",title:"FS20 Receiver Plugin"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"img/fs20pce.jpg",alt:"FS20 PCE Receiver",title:"FS20 PCE Receiver"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"supported-oses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-oses","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported OSes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"notes-on-linux-platform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-linux-platform","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes on Linux platform")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v('sudo echo \'ATTRS{idProduct}=="e015", ATTRS{idVendor}=="18ef", MODE="0660", GROUP="plugdev"\' > /etc/udev/rules.d/50-asterics-fs20.rules')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("sudo ln -sf /lib/arm-linux-gnueabihf/libudev.so.1 /lib/arm-linux-gnueabihf/libudev.so.0")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"output-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[this._v("#")]),this._v(" Output Port Description")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("fs20command [string]:")]),this._v(" The received FS20 command will be send out of the plugin. The data has the following format: housecode_sendaddress_command, e.g. 11111111_3343_17")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"event-trigger-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Trigger Description")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Properties")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("strong",[e._v("housecode [integer]")]),e._v(" The housecode, the system should react on. The housecode has 8 digits, each from 1 to 4. This property influences the event triggers, but not the "),r("em",[e._v("fs20command")]),e._v(" output port.")]),e._v(" "),r("li",[r("strong",[e._v("sendaddress [integer]")]),e._v(" The sendaddress, the system should react on. The sendaddress has 4 digits, each from 1 to 4. This property influences the event triggers, but not the "),r("em",[e._v("fs20command")]),e._v(" output port.")])])}],!1,null,null,null);s.options.__file="FS20Receiver.md";t.default=s.exports}}]);