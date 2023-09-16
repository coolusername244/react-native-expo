import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type IconButtonProps = {
  onPress: () => void;
  label: string;
  icon: any; // fix this
};

export default function IconButton({ onPress, label, icon }: IconButtonProps) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
