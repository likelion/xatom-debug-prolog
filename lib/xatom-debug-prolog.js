'use babel';

import SwiPrologPlugin from './swi-prolog-plugin';
import { CompositeDisposable } from 'atom';

export default {

  pluginManager: null,
  plugin: null,

  activate(state) {
    console.log('xatom-debug-prolog activated');
  },

  deactivate() {
    console.log('xatom-debug-prolog deactivated');
    //if (this.plugin) {
    //    this.plugin.didStop();
    //}
    if (this.pluginManager) {
        this.pluginManager.removePlugin(this.plugin);
    }
  },

  serialize() {
  },

  registerPlugin(pluginManager) {
    this.pluginManager = pluginManager;
    this.plugin = new SwiPrologPlugin();
    return this.pluginManager.addPlugin(this.plugin);
  }

};
