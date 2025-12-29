import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Pressable, Modal, FlatList, Animated, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ThreeLineMenuProps } from './ThreeLineMenu.types';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.75;

export function ThreeLineMenuView({ data }: ThreeLineMenuProps) {
  const [isVisible, setIsVisible] = useState(false);
  const insets = useSafeAreaInsets();
  
  const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -SIDEBAR_WIDTH,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start(() => setIsVisible(false));
    } else {
      setIsVisible(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  return (
    <View style={styles.container}>

      <Pressable onPress={toggleMenu} style={[styles.iconButton, { marginTop: insets.top }]}>
        <Ionicons name="menu" size={30} color="#000" />
      </Pressable>

      <Modal visible={isVisible} transparent animationType="none" onRequestClose={toggleMenu}>
        <View style={styles.modalRoot}>
          
          <Animated.View style={[styles.backdrop, { opacity: fadeAnim }]}>
            <Pressable style={styles.fullClickable} onPress={toggleMenu} />
          </Animated.View>

          <Animated.View 
            style={[
              styles.sidebar, 
              { 
                transform: [{ translateX: slideAnim }],
                paddingTop: insets.top, 
                paddingBottom: insets.bottom 
              }
            ]}
          >
            <View style={styles.sidebarHeader}>
              <Pressable onPress={toggleMenu} hitSlop={10}>
                <Ionicons name="close" size={30} color="#000" />
              </Pressable>
            </View>

            <FlatList
              data={data}
              keyExtractor={(item) => item.label}
              contentContainerStyle={styles.listContent}
              renderItem={({ item }) => (
                <Pressable 
                  style={styles.menuItem} 
                  onPress={() => {
                    item.onPress();
                    toggleMenu();
                  }}
                >
                  <Text style={styles.menuLabel}>{item.label}</Text>
                  <Ionicons name="chevron-forward" size={18} color="#CCC" />
                </Pressable>
              )}
            />
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: { 
    padding: 10,
  },
  modalRoot: { 
    flex: 1, 
    flexDirection: 'row' 
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  fullClickable: { 
    flex: 1 
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    backgroundColor: '#FFF',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    position: 'absolute',
    left: 0,
    zIndex: 5,
  },
  sidebarHeader: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'flex-end',
  },
  listContent: {
    paddingBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EEE',
  },
  menuLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
});