# @ariefw-rn/three-line-menu

A responsive and animated three-line menu (hamburger menu) component for React Native applications. This component provides a sleek animated sidebar that works seamlessly across iOS, Android, and Web platforms. The menu features smooth slide-in animations, backdrop dimming, and safe area handling for modern mobile devices.

## Demo

Try it out on [Expo Snack](https://snack.expo.dev/@ariefwara/rn-three-line-menu)!

## Background

This component follows an old-school philosophy similar to Java Swing components, focusing on functionality over appearance. It's designed for developers who prioritize getting things done quickly rather than spending time on extensive UI customization. The component provides a ready-to-use solution that requires minimal setup - you only need to provide the menu items themselves. This approach allows for fast development without the need for complex styling or detailed customization, making it ideal for applications where functionality takes precedence over visual appearance.

## Features

- 🎨 Smooth slide-in/slide-out animations
- 📱 Cross-platform support (iOS, Android, Web)
- 🛡️ Safe area awareness for notch devices
- 🎯 Touch-optimized interface
- 🎭 Backdrop dimming effect
- 📋 Customizable menu items
- ⚡ High-performance rendering

## Installation

### Expo Managed Projects

```bash
npx expo install @ariefw-rn/three-line-menu
```

### Bare React Native Projects

```bash
npm install @ariefw-rn/three-line-menu
```

For iOS, run:
```bash
npx pod-install
```

## Usage

Here's a basic example of how to use the ThreeLineMenu component:

```tsx
import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThreeLineMenuView, MenuOption } from '@ariefw-rn/three-line-menu';

export default function App() {
  const menuData: MenuOption[] = [
    {
      label: 'Dashboard',
      onPress: () => Alert.alert('Dashboard selected')
    },
    {
      label: 'Profile',
      onPress: () => Alert.alert('Profile selected')
    },
    {
      label: 'Settings',
      onPress: () => Alert.alert('Settings selected')
    },
    {
      label: 'Help & Support',
      onPress: () => Alert.alert('Help & Support selected')
    },
  ];

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.header}>
        <ThreeLineMenuView data={menuData} />
        <Text style={styles.title}>My App</Text>
      </View>
      {/* Your main app content goes here */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  title: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
  }
});
```

## API

### Components

#### `ThreeLineMenuView`

The main component that renders the hamburger menu and sidebar.

##### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `data` | `MenuOption[]` | Yes | Array of menu options to display in the sidebar |

#### `MenuOption`

Interface for menu items in the sidebar.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | Yes | The text displayed for the menu item |
| `onPress` | `() => void` | Yes | Function executed when the menu item is pressed |

## Platform Support

- ✅ iOS
- ✅ Android
- ✅ Web

## Dependencies

This component relies on:
- `react-native-safe-area-context` - For handling safe areas on iOS devices
- `@expo/vector-icons` - For menu and close icons (you may need to install this separately)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue on the [GitHub repository](https://github.com/ariefwara/rn-three-line-menu/issues).
