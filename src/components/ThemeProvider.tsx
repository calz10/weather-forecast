"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect, ReactNode } from "react";

export const  ThemeProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
