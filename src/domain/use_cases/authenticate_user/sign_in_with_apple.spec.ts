import { SignInWithApple } from "@/src/domain/use_cases/authenticate_user/sign_in_with_apple";
import { Http } from "@domain/repositories/Http";
import { AppleAuthenticationPort } from "@domain/repositories/authenticate_user/authenticate_with_apple";
import { User } from "@domain/models/User";

describe("SignInWithApple", () => {
  const mockHttp = {
    get: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    post: jest.fn(),
  } as jest.Mocked<Http>;

  const mockAppleAuth = {
    authenticate: jest.fn(),
  } as jest.Mocked<AppleAuthenticationPort>;

  let signInWithApple: SignInWithApple;

  beforeEach(() => {
    jest.clearAllMocks();
    signInWithApple = new SignInWithApple(mockAppleAuth, mockHttp);
  });

  it("should successfully sign in with Apple and return user data", async () => {
    const mockAuthResult = {
      identityToken: "fake-identity-token",
      user: {
        id: "1",
        email: "john@example.com",
        name: {
          firstName: "John",
          lastName: "Doe",
        },
      },
    };

    const mockUser: User = {
      id: "1",
      email: "john@example.com",
      firstName: "John",
      lastName: "Doe",
      password: "fake-password",
      phone: "+33123456789",
      isPremium: false,
    };

    mockAppleAuth.authenticate.mockResolvedValue(mockAuthResult);
    mockHttp.post.mockResolvedValue({ data: { user: mockUser } });

    const result = await signInWithApple.execute();

    expect(mockAppleAuth.authenticate).toHaveBeenCalledTimes(1);
    expect(mockHttp.post).toHaveBeenCalledWith("/auth/apple", {
      identityToken: mockAuthResult.identityToken,
      user: mockAuthResult.user,
    });
    expect(result).toEqual(mockUser);
  });

  it("should throw error when Apple authentication fails", async () => {
    const error = new Error("Apple authentication failed");
    mockAppleAuth.authenticate.mockRejectedValue(error);

    await expect(signInWithApple.execute()).rejects.toThrow(
      "Apple authentication failed"
    );
    expect(mockHttp.post).not.toHaveBeenCalled();
  });

  it("should throw error when API request fails", async () => {
    const mockAuthResult = {
      identityToken: "fake-identity-token",
      user: {
        id: "1",
        email: "john@example.com",
        name: {
          firstName: "John",
          lastName: "Doe",
        },
      },
    };
    const error = new Error("API request failed");

    mockAppleAuth.authenticate.mockResolvedValue(mockAuthResult);
    mockHttp.post.mockRejectedValue(error);

    await expect(signInWithApple.execute()).rejects.toThrow(
      "API request failed"
    );
  });
});
