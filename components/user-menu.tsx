"use client";
import { UserButton } from "@clerk/nextjs";
import { PieChartIcon } from "@radix-ui/react-icons";
import React from "react";

export const UserMenu = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-10 h-10",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Events"
          labelIcon={<PieChartIcon />}
          href="/events"
        ></UserButton.Link>
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};
