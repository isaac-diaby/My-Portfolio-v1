import Vue from "vue";
import dialogPolyfill from "dialog-polyfill";

Vue.prototype.$registerDialog = function(dialog) {
  if (process.client) {
    return dialogPolyfill.registerDialog(dialog);
  } else {
    console.log("dialogPolyfill - server");
  }
};
