'use babel';

import SwiPrologOptions from './swi-prolog-options';

export default (function() {

  class SwiPrologPlugin {

    constructor() {
      this.options = SwiPrologOptions;
    }

    addEventListeners() {
      console.log('addEventListeners');
    }

    syncBreakpoints(breaks) {
      console.log('syncBreakpoints', breaks);
    }

    syncFramesScope(frames) {
      console.log('syncFramesScope', frames);
    }

    syncStateOnPause() {
      console.log('syncStateOnPause');
    }

    register(pluginClient) {
      console.log('register', pluginClient);
      this.pluginClient = pluginClient;
    }

    enableConsole() {
      console.log('enableConsole');
      return this.isConsoleEnabled = true;
    }

    disableConsole() {
      console.log('disableConsole');
      return this.isConsoleEnabled = false;
    }

    didLaunchError(message) {
      console.log('didLaunchError', message);
      return atom.notifications.addError('XAtom Debug: SWI-Prolog', {
        detail: "Launcher error: " + message,
        dismissable: true
      });
    }

    normalizePath(dir, verify) {
      console.log('normalizePath', dir, verify);
    }

    activateFirstFrame() {
      console.log('activateFirstFrame');
    }

    addBreakpointsForScript(script) {
      console.log('addBreakpointsForScript', script);
    }

    didAddBreakpoint(filePath, lineNumber, condition) {
      console.log('didAddBreakpoint', filePath, lineNumber, condition);
    }

    didChangeBreakpoint(filePath, lineNumber, condition) {
      console.log('didChangeBreakpoint', filePath, lineNumber, condition);
    }

    didRemoveBreakpoint(filePath, lineNumber) {
      console.log('didRemoveBreakpoint', filePath, lineNumber);
    }

    didRequestProperties(request, propertyView) {
      console.log('didRequestProperties', request, propertyView);
    }

    didEvaluateExpression(expression, evaluationView) {
      console.log('didEvaluateExpression', expression, evaluationView);
      //evaluationView.insertFromResult(42);
    }

    start() {
      console.log('start');
    }

    restart() {
      console.log('restart');
    }

    didStepOver() {
      console.log('didStepOver');
    }

    didStepInto() {
      console.log('didStepInto');
    }

    didStepOut() {
      console.log('didStepOut');
    }

    didStop() {
      console.log('didStop');
      this.pluginClient.toolbarView.resetStatus();
      this.pluginClient.stop();
    }

    didResume() {
      console.log('didResume');
      this.pluginClient.resume();
    }

    didPause() {
      console.log('didPause');
      this.pluginClient.pause();
    }

    async didRun() {
      console.log('didRun');
      this.pluginClient.run();
      var options = await this.pluginClient.getOptions();
      this.pluginClient.toolbarView.setStatus(options.commandline);
    }

  };

  SwiPrologPlugin.prototype.name = 'SWI-Prolog';

  SwiPrologPlugin.prototype.iconPath = 'atom://xatom-debug-prolog/icons/swi-prolog.svg';

  SwiPrologPlugin.prototype.isConsoleEnabled = true;

  return SwiPrologPlugin;

}).call(this);
