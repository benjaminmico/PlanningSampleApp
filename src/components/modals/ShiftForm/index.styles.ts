import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  modalContainer: ViewStyle;
  itemFormContainer: ViewStyle;
  itemFormLabel: TextStyle;
  itemDateLabel: TextStyle;
  itemErrorLabel: TextStyle;
  buttonStyle: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
  },
  itemFormContainer: {
    marginTop: 8,
    marginBottom: 8,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 16,
    paddingLeft: 16,
    borderWidth: 1,
  },
  itemFormLabel: {
    fontSize: 10,
  },
  itemDateLabel: {
    fontSize: 12,
  },
  itemErrorLabel: {
    fontSize: 12,
    color: 'red',
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default styles;
