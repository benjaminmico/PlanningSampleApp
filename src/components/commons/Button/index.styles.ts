import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  label: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: 'black',
    height: 30,
    width: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white',
  },
});

export default styles;
