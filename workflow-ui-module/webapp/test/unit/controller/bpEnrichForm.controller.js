/*global QUnit*/

sap.ui.define([
	"bpmngmntnsp/workflow-ui-module/controller/bpEnrichForm.controller"
], function (Controller) {
	"use strict";

	QUnit.module("bpEnrichForm Controller");

	QUnit.test("I should test the bpEnrichForm controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
