import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Linking,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Avatar, Checkbox, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSettingsUserName,
  setSettingsUserEmail,
} from '../store/temps.actions';
import { useTheme } from '@react-navigation/native';
import { PropTypes } from 'prop-types';
import config from '../config';

const SignUp = (props) => {
  const dispatch = useDispatch();
  const { colors, fonts } = useTheme();

  const [userName, setUserName] = useState(
    useSelector((state) => state.temps.settings.name)
  );
  const [userEmail, setUserEmail] = useState(
    useSelector((state) => state.temps.settings.email)
  );
  const [password, setPassword] = useState('');
  const [termsAgreement, setTermsAgreement] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const opacityAvatar = useRef(new Animated.Value(0)).current;
  const translateYAvatar = useRef(new Animated.Value(-8)).current;
  const avatarAnimation = {
    opacity: opacityAvatar,
    transform: [{ translateY: translateYAvatar }],
  };

  const opacityInputUserName = useRef(new Animated.Value(0)).current;
  const translateYInputUserName = useRef(new Animated.Value(-10)).current;
  const inputUserNameAnimation = {
    opacity: opacityInputUserName,
    transform: [{ translateY: translateYInputUserName }],
  };

  const opacityInputEmail = useRef(new Animated.Value(0)).current;
  const translateYInputEmail = useRef(new Animated.Value(-10)).current;
  const inputEmailAnimation = {
    opacity: opacityInputEmail,
    transform: [{ translateY: translateYInputEmail }],
  };

  const opacityInputPassword = useRef(new Animated.Value(0)).current;
  const translateYInputPassword = useRef(new Animated.Value(-8)).current;
  const inputPasswordAnimation = {
    opacity: opacityInputPassword,
    transform: [{ translateY: translateYInputPassword }],
  };

  const opacityInputAgreement = useRef(new Animated.Value(0)).current;
  const translateYInputAgreement = useRef(new Animated.Value(-8)).current;
  const inputAgreementAnimation = {
    opacity: opacityInputAgreement,
    transform: [{ translateY: translateYInputAgreement }],
  };

  const opacitySignUpButton = useRef(new Animated.Value(0)).current;
  const translateYSignUpButton = useRef(new Animated.Value(-8)).current;
  const signUpButtonAnimation = {
    opacity: opacitySignUpButton,
    transform: [{ translateY: translateYSignUpButton }],
  };

  const opacitySignUpWith = useRef(new Animated.Value(0)).current;
  const translateYSignUpWith = useRef(new Animated.Value(-8)).current;
  const signUpWithAnimation = {
    opacity: opacitySignUpWith,
    transform: [{ translateY: translateYSignUpWith }],
  };

  const opacitySignUpExternal = useRef(new Animated.Value(0)).current;
  const translateYSignUpExternal = useRef(new Animated.Value(-8)).current;
  const signUpExternalAnimation = {
    opacity: opacitySignUpExternal,
    transform: [{ translateY: translateYSignUpExternal }],
  };
  const opacityArrow = useRef(new Animated.Value(0)).current;
  const translateYArrow = useRef(new Animated.Value(-8)).current;
  const arrowAnimation = {
    opacity: opacityArrow,
    transform: [{ translateY: translateYArrow }],
  };

  const setName = (name) => {
    dispatch(setSettingsUserName(name));
    setUserName(name.trim().replace(/ /g, ''));
  };

  const setEmail = (email) => {
    dispatch(setSettingsUserEmail(email.trim()));
    setUserEmail(email.trim());
  };

  const formAnimation = Animated.stagger(50, [
    Animated.parallel([
      Animated.timing(opacityAvatar, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAvatar, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]),
    Animated.parallel([
      Animated.timing(opacityInputUserName, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateYInputUserName, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]),
    Animated.parallel([
      Animated.timing(opacityInputEmail, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateYInputEmail, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]),
    Animated.parallel([
      Animated.timing(opacityInputPassword, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateYInputPassword, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]),
    Animated.parallel([
      Animated.timing(opacityInputAgreement, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateYInputAgreement, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]),
    Animated.parallel([
      Animated.timing(opacitySignUpButton, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateYSignUpButton, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]),
    Animated.parallel([
      Animated.timing(opacitySignUpWith, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateYSignUpWith, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]),
    Animated.parallel([
      Animated.timing(opacitySignUpExternal, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateYSignUpExternal, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]),
    Animated.parallel([
      Animated.timing(opacityArrow, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateYArrow, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]),
  ]);

  useEffect(() => {
    formAnimation.start();
  }, [formAnimation]);

  return (
    <View style={styles.screen}>
      <View style={styles.formHolder}>
        <Animated.View style={[styles.avatarHolder, avatarAnimation]}>
          <TouchableWithoutFeedback onPress={props.onSetImage}>
            <View>
              {!props.image ? (
                <Avatar.Icon
                  size={80}
                  icon={() => <AntDesign name="user" size={50} color="white" />}
                  theme={{ colors: { primary: colors.cropleCircle.accent } }}
                />
              ) : (
                <Avatar.Image
                  size={80}
                  source={{
                    uri: 'data:image/jpg;base64,' + props.image.base64,
                  }}
                  theme={{ colors: { primary: colors.cropleCircle.accent } }}
                />
              )}
              <View style={styles.badge}>
                <MaterialIcons name="edit" size={24} color="white" />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
        <View style={styles.form}>
          <Animated.View style={[styles.inputHolder, inputUserNameAnimation]}>
            <TextInput
              label="Name (10 letters, no space!)"
              value={userName}
              onChangeText={(text) => setName(text)}
              underlineColor={colors.accent}
              autoCapitalize={'none'}
              maxLength={10}
              theme={{colors}}
            />
          </Animated.View>
          <Animated.View style={[styles.inputHolder, inputEmailAnimation]}>
            <TextInput
              label="Email"
              value={userEmail}
              onChangeText={(text) => setEmail(text)}
              underlineColor={colors.accent}
              keyboardType="email-address"
              autoCapitalize="none"
              theme={{colors}}
            />
          </Animated.View>
          <Animated.View style={[styles.inputHolder, inputPasswordAnimation]}>
            <TextInput
              label="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              underlineColor={colors.accent}
              secureTextEntry={isSecureEntry}
              minLenth={6}
              autoCapitalize="none"
              theme={{colors}}
              right={
                <TextInput.Icon
                  name={isSecureEntry ? 'eye-outline' : 'eye-off-outline'}
                  color="#808080"
                  onPress={() => {
                    setIsSecureEntry(!isSecureEntry);
                  }}
                />
              }
            />
          </Animated.View>
          <Animated.View
            style={[styles.inputAgreementHolder, inputAgreementAnimation]}
          >
            <View style={styles.checkBoxHolder}>
              <Checkbox
                status={rememberMe ? 'checked' : 'unchecked'}
                onPress={() => {
                  setRememberMe(!rememberMe);
                }}
                color={colors.accent}
              />
              <TouchableWithoutFeedback
                onPress={() => {
                  setRememberMe(!rememberMe);
                }}
              >
                <Text style={styles.text(colors)}>Remember me</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.checkBoxHolder}>
              <Checkbox
                status={termsAgreement ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTermsAgreement(!termsAgreement);
                }}
                color={colors.accent}
              />
              <TouchableWithoutFeedback
                onPress={() => {
                  setTermsAgreement(!termsAgreement);
                }}
              >
                <Text style={styles.text(colors)}>
                  {'I agree to the '}
                </Text>
              </TouchableWithoutFeedback>
              <Text style={styles.hyperlinkText(colors, fonts)} onPress={() => {Linking.openURL(config.POLICY_LINK)}}>Privacy Policy</Text>
            </View>
          </Animated.View>
          <Animated.View style={[styles.inputHolder, signUpButtonAnimation]}>
            <TouchableNativeFeedback
              onPress={props.onSignUpWithEmail.bind(
                this,
                userEmail,
                password,
                rememberMe,
                userName,
                termsAgreement
              )}
            >
              <View style={styles.buttonSignUp(colors)}>
                <Text style={styles.textButton}>Sign up</Text>
              </View>
            </TouchableNativeFeedback>
          </Animated.View>
          <Animated.View style={[styles.signUpText, signUpWithAnimation]}>
            <Text style={styles.text(colors)}>Or Sign up with</Text>
          </Animated.View>
          <Animated.View
            style={[styles.signUpExternal, signUpExternalAnimation]}
          >
            <Animated.View style={[styles.inputHolderButtonExternal]}>
              <TouchableNativeFeedback onPress={props.onSignUpWithFacebook}>
                <View style={styles.buttonFacebook}>
                  <View style={styles.buttonIcon}>
                    <FontAwesome name="facebook-f" size={20} color="white" />
                  </View>
                  <Text style={styles.textButton}>Facebook</Text>
                </View>
              </TouchableNativeFeedback>
            </Animated.View>
            <Animated.View style={[styles.inputHolderButtonExternal]}>
              <TouchableNativeFeedback onPress={() => {}}>
                <View style={styles.buttonGoogle}>
                  <View style={styles.buttonIcon}>
                    <AntDesign name="google" size={20} color="white" />
                  </View>
                  <Text style={styles.textButton}>Google</Text>
                </View>
              </TouchableNativeFeedback>
            </Animated.View>
          </Animated.View>
          <Animated.View style={[styles.backArrowView, arrowAnimation]}>
            <MaterialIcons
              name="keyboard-backspace"
              size={34}
              color={colors.text}
              onPress={props.onPressBack}
            />
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
  },
  formHolder: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  avatarHolder: {
    marginBottom: 20,
  },
  form: {
    width: '75%',
  },
  inputHolder: {
    marginVertical: 10,
    width: '100%',
  },
  inputHolderButtonExternal: {
    marginVertical: 10,
    width: '45%',
  },
  title: {
    fontFamily: 'Lexend',
    color: '#151515',
    fontSize: 30,
    marginBottom: 100,
  },
  signUpView: {
    flexDirection: 'row',
  },
  text: (colors) => ({
    fontFamily: 'OpenSans',
    color: colors.text,
    fontSize: 14,
  }),
  inputAgreementHolder: {
    alignItems: 'flex-start',
  },
  checkBoxHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  signUpText: {
    padding: 10,
    alignItems: 'center',
  },
  textButton: {
    fontFamily: 'OpenSans',
    color: 'white',
    fontSize: 14,
  },
  buttonSignUp: (colors) => ({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 40,
    borderRadius: 5,
  }),
  hyperlinkText: (colors, fonts) => ({
    fontFamily: fonts.regular,
    color: colors.primary,
    fontSize: 14,
    textDecorationLine: 'underline',
  }),
  buttonFacebook: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4e61b0',
    height: 40,
    borderRadius: 5,
  },
  buttonGoogle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d5513c',
    height: 40,
    borderRadius: 5,
  },
  signUpExternal: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonIcon: {
    position: 'absolute',
    left: 10,
  },
  backArrowView: {
    marginTop: 20,
    marginLeft: 10,
  },
  badge: {
    position: 'absolute',
    top: 50,
    left: 50,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7e7e7',
  },
});

SignUp.propTypes = {
  onSetImage: PropTypes.func.isRequired,
  image: PropTypes.object,
  onSignUpWithEmail: PropTypes.func.isRequired,
  onSignUpWithFacebook: PropTypes.func.isRequired,
  onPressBack: PropTypes.func.isRequired,
}

export default SignUp;
