import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  tabBar: ViewStyle;
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  tabBar: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
});

export default styles;
