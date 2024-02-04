"use client";

import { useSession, signIn } from "next-auth/react";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { slices } from "@/lib";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/common/button/Button";

export default function Home() {
  const { status, data } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "authenticated" && data.user) {
      dispatch(slices.user.actions.setUser(data.user));
      router.replace("/home");
    } else {
      router.replace("/");
    }
  }, [status, router, data, dispatch]);

  const handleLogin = useCallback(() => signIn("github"), []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full md:w-1/2">
        <div className="pb-10">
          Welcome to the weather forecast web application, Please login with
          your Github user to use the application and view the weather in your
          city
        </div>
        <Button onClick={handleLogin} color="primary">
          Login
        </Button>
      </div>
    </main>
  );
}
