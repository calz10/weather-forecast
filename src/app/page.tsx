
"use client"

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const {data} = useSession()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          Welcome to the weather forecast web application, Please login with your 
          Github user to use the application and view the weather in your city

        {JSON.stringify(data?.user)}
        </div>
        <div onClick={() => signIn("github")}>
          Login
        </div>
        <div onClick={() => signOut()}>
          Logout
        </div>
    </main>
  );
}
