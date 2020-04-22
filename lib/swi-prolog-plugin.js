'use babel';

import SwiPrologOptions from './swi-prolog-options';

export default (function() {

  class SwiPrologPlugin {

    constructor() {
      this.options = SwiPrologOptions;
    }

    register(pluginClient) {
      this.pluginClient = pluginClient;
    }

    enableConsole() {
      return this.isConsoleEnabled = true;
    }

    disableConsole() {
      return this.isConsoleEnabled = false;
    }

    didLaunchError(message) {
      return atom.notifications.addError('XAtom Debug: SWI-Prolog', {
        detail: "Launcher error: " + message,
        dismissable: true
      });
    }

  };

  SwiPrologPlugin.prototype.name = 'SWI-Prolog';

  SwiPrologPlugin.prototype.iconPath = 'atom://xatom-debug-prolog/icons/swi-prolog.svg';

  SwiPrologPlugin.prototype.isConsoleEnabled = true;

  return SwiPrologPlugin;

}).call(this);
