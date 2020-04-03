import Vue from "vue";
import dialogPolyfill from "dialog-polyfill";

Vue.prototype.$registerDialog = function(dialog) {
  return dialogPolyfill.registerDialog(dialog);
};
