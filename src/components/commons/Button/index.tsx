import React from 'react';
import {Text, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './index.styles';

interface IProps {
  onPress: () => void;
  label: string;
  buttonStyle?: ViewStyle;
  disabled?: boolean;
}

/**
 * Button
 */
const Button: React.FC<IProps> = ({label, onPress, buttonStyle, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{...styles.container, ...buttonStyle}}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
