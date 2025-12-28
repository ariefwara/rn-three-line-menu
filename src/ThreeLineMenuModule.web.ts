import { registerWebModule, NativeModule } from 'expo';

import { ThreeLineMenuModuleEvents } from './ThreeLineMenu.types';

class ThreeLineMenuModule extends NativeModule<ThreeLineMenuModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ThreeLineMenuModule, 'ThreeLineMenuModule');
