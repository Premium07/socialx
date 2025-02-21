"use client";
import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
// import { useTheme } from "next-themes";
import React, { useState } from "react";
import { Button } from "./ui/button";
import ThemeToggler from "./ThemeToggler";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BellIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

const MobileNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isSignedIn } = useAuth();
  //   const { theme, setTheme } = useTheme();

  return (
    <section className="flex md:hidden items-center space-x-2">
      <ThemeToggler />

      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side={"right"} className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-6">
            <Button
              variant="ghost"
              className="flex items-center gap-3 justify-start"
              asChild
            >
              <Link href="/">
                <HomeIcon className="size-5" />
                Home
              </Link>
            </Button>

            {isSignedIn ? (
              <>
                <Button
                  variant="ghost"
                  className="flex items-center gap-3 justify-start"
                  asChild
                >
                  <Link href="/notifications">
                    <BellIcon className="size-5" />
                    Notifications
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center gap-3 justify-start"
                  asChild
                >
                  <Link href="/profile">
                    <UserIcon className="size-5" />
                    Profile
                  </Link>
                </Button>
                <SignOutButton>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-3 justify-start w-full"
                  >
                    <LogOutIcon className="size-5" />
                    Logout
                  </Button>
                </SignOutButton>
              </>
            ) : (
              <SignInButton mode="modal">
                <Button className="w-full">Sign In</Button>
              </SignInButton>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
