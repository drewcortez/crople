import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MenuReturn = (props) => {
  return (
    <View style={styles.menuBase}>
      <MaterialIcons
        name="keyboard-backspace"
        size={30}
        color="black"
        onPress={props.onPressBack}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuBase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 35,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  menuButtonContainer: {
    overflow: 'hidden',
    borderRadius: 17,
  },
  menuButton: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuReturn;