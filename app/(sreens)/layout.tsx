"use client";

import { Suspense, ReactNode } from "react";
import Loader from "./loading";

interface ScreenLayoutProps {
  children: ReactNode;
}

//protected pages
export default function ScreenLayout({ children }: ScreenLayoutProps) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
