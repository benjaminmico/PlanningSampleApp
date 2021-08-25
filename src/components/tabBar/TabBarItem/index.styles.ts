import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  tabBarItem: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    height: 80,
    width: 70,
  },
});

export default styles;
