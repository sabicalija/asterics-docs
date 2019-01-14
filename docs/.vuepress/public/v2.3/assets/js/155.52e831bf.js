(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{235:function(e,t,n){"use strict";n.r(t);var r=n(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("p",[e._v("Create EG file")]),e._v(" "),e._m(0),e._v(" "),n("p",[e._v("This document describe how to create sample "),n("a",{attrs:{href:"http://www.heatonresearch.com/encog",target:"_blank",rel:"noopener noreferrer"}},[e._v("Encog framework"),n("OutboundLink")],1),e._v(" EG file that store neural network. The example shown how to create the basic neural network that performs XOR operation.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Download the encog-workbench-3.0.1-release.zip package from the "),n("a",{attrs:{href:"http://www.heatonresearch.com/encog",target:"_blank",rel:"noopener noreferrer"}},[e._v("Encog page"),n("OutboundLink")],1),e._v(', unzip it and run the Encog Workbench using command: "java -jar encog-workbench-3.0.1-executable.jar". Create new folder for the project.')])]),e._v(" "),e._m(1)]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"create-encog-eg-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-encog-eg-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Create Encog EG file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v('To create Neural network, select "File > New file...". Select: the "Machine Learning Method (*.eg)" and enter name of the EG file. Then, select the "Feedforward Neural Network" and click OK. On the next window, enter 2 into the "Input Neuron Count" text box. Click Add and enter 4 neurons for the hidden layer. enter 1 into the "Output Neuron Count" text box. Change the Activation Function Hidden and Activation Function Output to the Activation Sigmoid. Then, click OK.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"img/NeuralNetwork.jpg",alt:"Thestructure of the neural network",title:"The structure of the\n          neural network"}}),t("br"),this._v("\nThe structure of the neural network")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"7"}},[t("li",[this._v('Next step is to create the Training File. Select "File > New file...". Select: "Training File (*.egb)" and enter name of the EGB file. Click OK. On the next window, enter 4 into the the "Training Set Elements" text box, enter 2 into the "Input Field Count" text box, enter 1 into the "Output Field Count" text box. Click OK. Click on the file and fill the table for the XOR operation.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"img/TrainingSet.jpg",alt:"Thetraining set",title:"The training set"}}),t("br"),this._v("\nThe training set")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"11"}},[t("li",[this._v('When the training set is ready, the neural network can be trained. Click on the neural network file and choose the "Train" option. In the Training Set select the training file, in the Neural Network select the neural network file and click OK. Select the Propagation - Resilient (RPROP) training method and click OK. Enter 0.01 into the Maximum Error Percent(0-100) box, choose the RPROP type: "RPROP+ (classic)" and click OK. Click the Start button to Train the network. When the Max Error is reached click Close.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The neural network file can be loaded by the "),t("a",{attrs:{href:"NeuralNetworkLoader.htm"}},[this._v("Neural Network Loader")]),this._v(" plugin.To load the neural network, enter the EG file path into the filePath plugin property. For this example, the input1 input port and the input2 input port will send the input data for the neural network and the output1 output port will give the XOR operation result.")])}],!1,null,null,null);i.options.__file="eg_example.md";t.default=i.exports}}]);