import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThreeLineMenuView } from '@ariefw-rn/three-line-menu';
import { MenuOption } from '@ariefw-rn/three-line-menu';

export default function App() {
  const menuData: MenuOption[] = [
    { 
      label: 'Dashboard', 
      onPress: () => Alert.alert('Dashboard') 
    },
    { 
      label: 'Account', 
      onPress: () => Alert.alert('Account') 
    },
    { 
      label: 'Help & Support', 
      onPress: () => Alert.alert('Support') 
    },
  ];

  return (
    <SafeAreaProvider style={styles.screen}>
      <View style={styles.header}>
        <ThreeLineMenuView data={menuData} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FAFAFA' },
  header: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
});