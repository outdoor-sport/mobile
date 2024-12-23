import { Http } from "@/domain/repositories/Http";
import { AppleAuthenticationPort } from "@/domain/repositories/authenticate_user/authenticate_with_apple";
import { User } from "@/domain/models/User";

export class SignInWithApple {
  constructor(
    private readonly appleAuth: AppleAuthenticationPort,
    private readonly http: Http
  ) {}

  async execute(): Promise<User> {
    const result = await this.appleAuth.authenticate();

    const response = await this.http.post("/auth/apple", {
      identityToken: result.identityToken,
      user: result.user,
    });

    return response.data.user;
  }
}
