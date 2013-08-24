// Generated by CoffeeScript 1.6.3
var OnCompileBrunch;

module.exports = OnCompileBrunch = (function() {
  OnCompileBrunch.prototype.brunchPlugin = true;

  function OnCompileBrunch(config) {
    this.config = config;
    null;
  }

  OnCompileBrunch.prototype.onCompile = function() {
    if ("function" === typeof this.config.onCompile) {
      return this.config.onCompile.apply(this.config, arguments);
    }
  };

  return OnCompileBrunch;

})();
