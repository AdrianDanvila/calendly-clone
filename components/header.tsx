import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { UserMenu } from "./user-menu";
export const Header = () => {
  return (
    <nav className="mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2">
      <Link href={"/"} className="flex items-center">
        <Image
          src="/logo.png"
          width="150"
          height="60"
          alt="logo"
          className="h-16 w-auto"
        />
      </Link>
      <div className="flex items-center gap-2">
        <Link href={"/events?create=true"}>
          <Button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-400">
            <Pencil1Icon /> Create event
          </Button>
        </Link>
        <SignedOut>
          <SignInButton forceRedirectUrl={"/url"}>
            <Button variant={"outline"}>Log in</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  );
};
