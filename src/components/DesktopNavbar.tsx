import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import ThemeToggler from "./ThemeToggler";
import { Button } from "./ui/button";
import Link from "next/link";
import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const DesktopNavbar = async () => {
  const user = await currentUser();

  return (
    <div className="hidden md:flex items-center space-x-4">
      <ThemeToggler />

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="size-5" />
          <div className="hidden lg:inline">Home</div>
        </Link>
      </Button>

      {user ? (
        <>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/notifications">
              <BellIcon className="size-5" />
              <span className="hidden lg:inline">Notifications</span>
            </Link>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link
              href={`/profile/${user.username ??
                user.emailAddresses[0].emailAddress.split("@")[0]
                }`}
            >
              <UserIcon className="size-5" />
              <span className="hidden lg:inline">Profile</span>
            </Link>
          </Button>
          <UserButton />
        </>
      ) : (
        <SignInButton mode="modal" appearance={{ baseTheme: dark }}>
          <Button>Sign In</Button>
        </SignInButton>
      )}
    </div>
  );
};

export default DesktopNavbar;
