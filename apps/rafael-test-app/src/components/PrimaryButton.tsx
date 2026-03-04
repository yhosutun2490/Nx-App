import { StyleSheet, Text, View, Pressable } from 'react-native';
type PrimaryButtonProps = {
  children?: React.ReactNode;
};
const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#972d62',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
export default PrimaryButton;
