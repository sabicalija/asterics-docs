(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{250:function(e,t,i){"use strict";i.r(t);var n=i(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("p",[e._v("SSVEP Detect")]),e._v(" "),i("h1",{attrs:{id:"ssvep-detect"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ssvep-detect","aria-hidden":"true"}},[e._v("#")]),e._v(" SSVEP Detect")]),e._v(" "),i("p",[e._v("This component is in charge of evaluating the SSVEP response (up to 4 different frequencies) among the frequencies defined by the user. It also calculates the config file based on previously recorded training files that will be used to evaluate the detection, and is also in charge of updating its parameters according to the config file")]),e._v(" "),i("h3",{attrs:{id:"component-type-processor-subcategory-dsp-and-feauture-extraction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-dsp-and-feauture-extraction","aria-hidden":"true"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: DSP and Feauture extraction)")]),e._v(" "),i("p",[i("img",{attrs:{src:"img/SSVEPDetect.jpg",alt:"Screenshot: SSVEPDetect plugin",title:"Screenshot: SSVEPDetect plugin"}}),i("br"),e._v("\nSSVEPDetect plugin")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v("SSVEPTrainFunction.exe and Matlab 2008B runtime engine")]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("O1 [double]:")]),e._v(" Input port for the EEG channel O1. "),i("strong",[e._v("This input port supports synchronization")])]),e._v(" "),i("li",[i("strong",[e._v("Oz [double]:")]),e._v(" Input port for the EEG channel Oz. "),i("strong",[e._v("This input port supports synchronization")])]),e._v(" "),i("li",[i("strong",[e._v("O2 [double]:")]),e._v(" Input port for the EEG channel O2. "),i("strong",[e._v("This input port supports synchronization")])]),e._v(" "),i("li",[i("strong",[e._v("UserName [string]:")]),e._v(" Name Identifying current the user.")]),e._v(" "),i("li",[i("strong",[e._v("NumberOfPanels [string]:")]),e._v(" Number of stimulation panels.")]),e._v(" "),i("li",[i("strong",[e._v("FreqP1 [string]:")]),e._v(" Stimulation frequency of panel 1.")]),e._v(" "),i("li",[i("strong",[e._v("FreqP2 [string]:")]),e._v(" Stimulation frequency of panel 2.")]),e._v(" "),i("li",[i("strong",[e._v("FreqP3 [string]:")]),e._v(" Stimulation frequency of panel 3.")]),e._v(" "),i("li",[i("strong",[e._v("FreqP4 [string]:")]),e._v(" Stimulation frequency of panel 4.")])]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("FreqP1 [integer]:")]),e._v(" Stimulation frequency of panel 1.")]),e._v(" "),i("li",[i("strong",[e._v("FreqP2 [integer]:")]),e._v(" Stimulation frequency of panel 2.")]),e._v(" "),i("li",[i("strong",[e._v("FreqP3 [integer]:")]),e._v(" Stimulation frequency of panel 3.")]),e._v(" "),i("li",[i("strong",[e._v("FreqP4 [integer]:")]),e._v(" Stimulation frequency of panel 4.")])]),e._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("StartStim:")]),e._v(" Event Informing that the stimulation period has started.")]),e._v(" "),i("li",[i("strong",[e._v("StopStim:")]),e._v(" Event Informing that the stimulation period has finished.")]),e._v(" "),i("li",[i("strong",[e._v("CalculateConfigFile:")]),e._v(" Event requesting the calculation of the configuration file")]),e._v(" "),i("li",[i("strong",[e._v("UpdateFromConfigFile:")]),e._v(" Event requested an update of the properties according to the configuration file.")]),e._v(" "),i("li",[i("strong",[e._v("UpdatePanelsConfig:")]),e._v(" Event reporting the stimulation panels plugin to update the stimulation frequencies.")])]),e._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("UpdatePanelsConfig:")]),e._v(" Event reporting the stimulation panels plugin to update the stimulation frequencies.")]),e._v(" "),i("li",[i("strong",[e._v("NonStimFreqD:")]),e._v(" Event reporting that none stimulation frequency could be detected.")]),e._v(" "),i("li",[i("strong",[e._v("StimFreq1D:")]),e._v(" Event reporting that stimulation frequency number 1 was detected.")]),e._v(" "),i("li",[i("strong",[e._v("StimFreq2D:")]),e._v(" Event reporting that stimulation frequency number 2 was detected.")]),e._v(" "),i("li",[i("strong",[e._v("StimFreq3D:")]),e._v(" Event reporting that stimulation frequency number 3 was detected.")]),e._v(" "),i("li",[i("strong",[e._v("StimFreq4D:")]),e._v(" Event reporting that stimulation frequency number 4 was detected.")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("SF1GO1 [double]:")]),e._v(" Spatial filter coefficient for stimulation frequency 1 and electrode O1.")]),e._v(" "),i("li",[i("strong",[e._v("SF1GOz [double]:")]),e._v(" Spatial filter coefficient for stimulation frequency 1 and electrode Oz.")]),e._v(" "),i("li",[i("strong",[e._v("SF1GO2 [double]:")]),e._v(" Spatial filter coefficient for stimulation frequency 1 and electrode O2.")]),e._v(" "),i("li",[i("strong",[e._v("SF2GO1 [double]:")]),e._v(" Spatial filter coefficient for stimulation frequency 2 and electrode O1.")]),e._v(" "),i("li",[i("strong",[e._v("SF2GOz [double]:")]),e._v(" Spatial filter coefficient for stimulation frequency 2 and electrode Oz.")]),e._v(" "),i("li",[i("strong",[e._v("SF2GO2 [double]:")]),e._v(" Spatial filter coefficient for stimulation frequency 2 and electrode O2.")]),e._v(" "),i("li",[i("strong",[e._v("SF3GO1 [double]:")]),e._v(" Spatial filter coefficient for stimulation frequency 3 and electrode O1.")]),e._v(" "),i("li",[i("strong",[e._v("SF3GOz [double]:")]),e._v(" Spatial filter coefficient for stimulation frequency 3 and electrode Oz.")]),e._v(" "),i("li",[i("strong",[e._v("SF3GO2 [double]:")]),e._v(" Spatial filter coefficient for stimulation frequency 3 and electrode O2.")]),e._v(" "),i("li",[i("strong",[e._v("SF4GO1 [double]:")]),e._v(" Spatial filter coefficient for stimulation frequency 4 and electrode O1.")]),e._v(" "),i("li",[i("strong",[e._v("SF4GOz [double]:")]),e._v(" Spatial filter coefficient for stimulation frequency 4 and electrode Oz.")]),e._v(" "),i("li",[i("strong",[e._v("SF4GO2 [double]:")]),e._v(" Spatial filter coefficient for stimulation frequency 4 and electrode O2.")]),e._v(" "),i("li",[i("strong",[e._v("StimFreq1 [integer]:")]),e._v(" Stimulation frequency number 2 in Hz. If its value is 0 it will not be evaluated in the SSVEP detection..")]),e._v(" "),i("li",[i("strong",[e._v("StimFreq2 [integer]:")]),e._v(" Stimulation frequency number 2 in Hz. If its value is 0 it will not be evaluated in the SSVEP detection.")]),e._v(" "),i("li",[i("strong",[e._v("StimFreq3 [integer]:")]),e._v(" Stimulation frequency number 3 in Hz. If its value is 0 it will not be evaluated in the SSVEP detection.")]),e._v(" "),i("li",[i("strong",[e._v("StimFreq4 [integer]:")]),e._v(" Stimulation frequency number 4 in Hz. If its value is 0 it will not be evaluated in the SSVEP detection.")]),e._v(" "),i("li",[i("strong",[e._v("BestHarm1 [integer]:")]),e._v(" Best harmonic to detect stimulation frequency 1.")]),e._v(" "),i("li",[i("strong",[e._v("BestHarm2 [integer]:")]),e._v(" Best harmonic to detect stimulation frequency 2.")]),e._v(" "),i("li",[i("strong",[e._v("BestHarm3 [integer]:")]),e._v(" Best harmonic to detect stimulation frequency 3.")]),e._v(" "),i("li",[i("strong",[e._v("BestHarm4 [integer]:")]),e._v(" Best harmonic to detect stimulation frequency 4.")])])])}],!1,null,null,null);r.options.__file="SSVEPDetect.md";t.default=r.exports}}]);