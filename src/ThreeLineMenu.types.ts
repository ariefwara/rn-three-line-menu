export interface MenuOption {
  /** The text displayed in the sidebar for each item */
  label: string;
  /** The function executed when the item is tapped */
  onPress: () => void;
}

export interface ThreeLineMenuProps {
  /** Array of menu options to populate the sidebar */
  data: MenuOption[];
}