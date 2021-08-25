import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  separator: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {flex: 1, paddingLeft: 16, paddingRight: 16},
  separator: {paddingTop: 16, paddingBottom: 16},
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
