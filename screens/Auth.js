import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Alert,
  Easing,
  StyleSheet,
  View,
} from 'react-native';
import { Title } from 'react-native-paper';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import * as authActions from '../store/auth.actions';
import { useDispatch } from 'react-redux';

const AuthScreen = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);

  const dispatch = useDispatch();
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  const translateYGradient = useRef(new Animated.Value(0)).current;
  const translateYGradientAnimation = {
    transform: [{ translateY: translateYGradient }, { scaleX: 1.5 }],
  };

  const translateYTitle = useRef(new Animated.Value(0)).current;
  const translateYTitleAnimation = {
    transform: [{ translateY: translateYTitle }],
  };

  const signUpAnimation = Animated.parallel([
    Animated.timing(translateYGradient, {
      toValue: -480,
      duration: 300,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }),
    Animated.timing(translateYTitle, {
      toValue: -110,
      duration: 300,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }),
  ]);

  const signUp = () => {
    setIsLogIn(false);
    signUpAnimation.start();
    setTimeout(() => setIsSignUp(true), 30);
  };

  const backToLogIn = () => {
    setIsSignUp(false);
    setIsLogIn(true);
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateYGradient, {
          toValue: 0,
          duration: 200,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.timing(translateYTitle, {
          toValue: 0,
          duration: 200,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  const logInHandler = async (userEmail, password, rememberMe) => {
    setIsLoadingLogin(true);
    const action = authActions.signupOrLogin('login', userEmail, password, rememberMe);
    try {
      await dispatch(action);
    } catch (err) {
      Alert.alert('Wait a sec..', err.message, [{ text: 'Okay' }]);
    }
    setIsLoadingLogin(false);
  };

  return (
    <View style={styles.screen}>
      <Animated.View
        style={[styles.gradientScreen, translateYGradientAnimation]}
      >
        <LinearGradient
          colors={['#F63A65', '#f9ab8f']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      </Animated.View>
      <Animated.View style={[styles.titleHolder, translateYTitleAnimation]}>
        <Title style={styles.title}>Crople®</Title>
      </Animated.View>
      {isLogIn && (
        <>
          {isLoadingLogin ? (
            <View style={styles.activityIndicator}>
              <ActivityIndicator
                size="large"
                color="white"
                
              />
            </View>
          ) : (
            <Login onSignUp={signUp} onLogIn={logInHandler} />
          )}
        </>
      )}
      {isSignUp && <SignUp onPressBack={backToLogIn} />}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradientScreen: {
    position: 'absolute',
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.8,
    borderBottomStartRadius: Dimensions.get('window').width / 2,
    borderBottomEndRadius: Dimensions.get('window').width / 2,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
  },
  titleHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
  },
  title: {
    fontFamily: 'Lexend',
    color: '#151515',
    fontSize: 30,
    marginBottom: 100,
  },
  activityIndicator: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthScreen;
