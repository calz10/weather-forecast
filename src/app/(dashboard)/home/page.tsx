"use client";

import { useAppSelector } from "@/app/hooks/useAppDispatch";
import { slices } from "@/lib";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const user = useAppSelector(slices.user.selectors.selectCurrentUser)
  
  return (
    <div>
      <div >{JSON.stringify(user)}</div>
      <div onClick={() => signOut()}>Logout</div>
    </div>
  );
}
