"use client";

import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "./hooks/useAppDispatch";
import { slices } from "@/lib";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { status, data } = useSession();
  const router = useRouter();
  const userState = useAppSelector(slices.user.selectors.selectCurrentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "authenticated" && data.user) {
      dispatch(
        slices.user.actions.setUser(data.user)
      )
      router.replace("/home");
    } else {
      router.replace("/");
    }
  }, [status, router, data]);

  const handleLogin = useCallback(() => signIn("github"), [signIn]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Welcome to the weather forecast web application, Please login with your
        Github user to use the application and view the weather in your city
      </div>
      <div onClick={handleLogin}>Login</div>
    </main>
  );
}
