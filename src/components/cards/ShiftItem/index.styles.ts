import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  leftContainer: ViewStyle;
  lineSeparator: ViewStyle;
  rightContainer: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 80,
    borderRadius: 10,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineSeparator: {
    height: 2,
    marginTop: 3,
    marginBottom: 3,
    width: 10,
    backgroundColor: 'grey',
  },
  rightContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default styles;
