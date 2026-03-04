import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonInnerContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonInnerContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 12,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
  },
  numberInput: {
    width: 50,
    height: 60,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#f0ca4c',
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonInnerContainer: {
     flex: 1,
  }
});
