sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
    "use strict";

    return Controller.extend("diogo.controller.View", {
        onInit: function() {
            // Initialize i18n model if needed
            var oModel = this.getOwnerComponent().getModel("i18n");
            if (!oModel) {
                var oResourceModel = new sap.ui.model.resource.ResourceModel({
                    bundleName: "diogo.i18n.i18n"
                });
                this.getOwnerComponent().setModel(oResourceModel, "i18n");
            }
        },

        onLanguageToggle: function() {
            var oCore = sap.ui.getCore();
            var sCurrentLanguage = oCore.getConfiguration().getLanguage();
            var sNewLanguage = sCurrentLanguage.includes("pt") ? "en" : "pt_BR";
            
            oCore.getConfiguration().setLanguage(sNewLanguage);
        }
    });
});
