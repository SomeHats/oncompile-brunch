module.exports = class OnCompileBrunch
  brunchPlugin: yes

  constructor: (@config) -> null

  onCompile: ->
    if "function" is typeof @config.onCompile
      @config.onCompile.apply @config, arguments
