import { NativeModule, requireNativeModule } from 'expo';

import { ThreeLineMenuModuleEvents } from './ThreeLineMenu.types';

declare class ThreeLineMenuModule extends NativeModule<ThreeLineMenuModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ThreeLineMenuModule>('ThreeLineMenu');
