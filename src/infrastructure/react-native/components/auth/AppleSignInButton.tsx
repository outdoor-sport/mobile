import { SignInWithApple } from "@domain/services/authenticate_user/sign_in_with_apple";
import { AppleAuthAdapter } from "@infrastructure/react-native/auth/apple/apple_auth_adapter";
import { httpAxios } from "@infrastructure/instances/axios/httpAxios";
import {
  AppleAuthenticationButton,
  AppleAuthenticationButtonStyle,
  AppleAuthenticationButtonType,
} from "expo-apple-authentication";

export const AppleSignInButton = () => {
  const handleSignIn = async () => {
    try {
      const signInWithApple = new SignInWithApple(
        new AppleAuthAdapter(),
        httpAxios
      );

      const user = await signInWithApple.execute();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppleAuthenticationButton
      buttonType={AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={10}
      onPress={handleSignIn}
    />
  );
};
