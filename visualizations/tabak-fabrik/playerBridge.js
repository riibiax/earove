var TabakFabrikPlayer = (function () {
  var origin = window.location.origin;
  var failed = false;
  var started = false;

  function post(message) {
    if (window.parent !== window) window.parent.postMessage(message, origin);
  }

  function fail() {
    if (failed) return;
    failed = true;
    post("tabak-fabrik:error");
  }

  window.addEventListener("error", fail, true);
  window.addEventListener("message", function (event) {
    if (!started || failed || event.origin !== origin || event.source !== window.parent) return;
    if (event.data === "tabak-fabrik:play") TabakFabrik.setPlaying(true);
    if (event.data === "tabak-fabrik:pause") TabakFabrik.setPlaying(false);
  });

  return {
    init: function () {
      if (failed) return;
      if (!Detector.webgl) {
        Detector.addGetWebGLMessage();
        fail();
        return;
      }
      TabakFabrik.init();
    },
    ready: function () {
      if (failed) return;
      started = true;
      post("tabak-fabrik:ready");
    },
    fail: fail,
  };
})();
