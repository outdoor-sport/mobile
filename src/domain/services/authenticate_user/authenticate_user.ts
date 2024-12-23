import { User } from "@/domain/models/User";

export const authenticateUser = () => ({
  authenticateThroughApi: (user: User) => Promise<User>,
  authenticateThroughLocalStorage: (user: User) => Promise<User>,
  authenticateThroughApple: (user: User) => Promise<User>,
  authenticateThroughGoogle: (user: User) => Promise<User>,
});
