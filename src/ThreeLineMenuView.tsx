import { requireNativeView } from 'expo';
import * as React from 'react';

import { ThreeLineMenuViewProps } from './ThreeLineMenu.types';

const NativeView: React.ComponentType<ThreeLineMenuViewProps> =
  requireNativeView('ThreeLineMenu');

export default function ThreeLineMenuView(props: ThreeLineMenuViewProps) {
  return <NativeView {...props} />;
}
