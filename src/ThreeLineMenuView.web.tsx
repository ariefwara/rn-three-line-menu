import * as React from 'react';

import { ThreeLineMenuViewProps } from './ThreeLineMenu.types';

export default function ThreeLineMenuView(props: ThreeLineMenuViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
