import {
  AppleAuthenticationPort,
  AppleAuthenticationResult,
} from "@domain/repositories/authenticate_user/authenticate_with_apple";
import {
  AppleAuthenticationScope,
  signInAsync,
} from "expo-apple-authentication";

export class AppleAuthAdapter implements AppleAuthenticationPort {
  async authenticate(): Promise<AppleAuthenticationResult> {
    try {
      const credential = await signInAsync({
        requestedScopes: [
          AppleAuthenticationScope.EMAIL,
          AppleAuthenticationScope.FULL_NAME,
        ],
      });

      return {
        identityToken: credential.identityToken!,
        user: {
          id: credential.user,
          email: credential.email!,
          name: {
            firstName: credential.fullName?.givenName!,
            lastName: credential.fullName?.familyName!,
          },
        },
      };
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("User canceled")) {
          throw new Error("User canceled");
        } else {
          throw new Error("Something went wrong");
        }
      } else {
        throw new Error("Something went wrong");
      }
    }
  }
}
