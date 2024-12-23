export interface AppleAuthenticationResult {
  identityToken: string;
  user: {
    id: string;
    email?: string;
    name?: {
      firstName: string;
      lastName: string;
    };
  };
}

export interface AppleAuthenticationPort {
  authenticate(): Promise<AppleAuthenticationResult>;
}
