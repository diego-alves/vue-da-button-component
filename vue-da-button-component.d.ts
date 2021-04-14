import { DefineComponent, Plugin } from 'vue';

declare const VueDaButtonComponent: DefineComponent<{}, {}, any> & { install: Exclude<Plugin['install'], undefined> };
export default VueDaButtonComponent;
