import { DefaultSession } from "next-auth";

export type User = DefaultSession["user"] & {
  githubProfile?: string;
};

export interface State {
  user: User | null;
}
