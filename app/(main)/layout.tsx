/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { BarLoader } from "react-spinners";
import { Calendar, BarChart, Users, Clock } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/meetings", label: "Meetings", icon: Users },
  { href: "/availability", label: "Availability", icon: Clock },
];

const MainLayout = ({ children }: any) => {
  const { isLoaded } = useUser();
  const pathname = usePathname();
  return (
    <SidebarProvider>
      {!isLoaded && <BarLoader width={"100%"} color="#36d7b7" />}
      <div className="flex flex-col h-screen bg-blue-50 md:flex-row w-full">
        <AppSidebar />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto w-[100%] p-4 md:p-8">
          <header className="flex justify-between items-center mb-4">
            <h2 className="text-5xl md:text-6xl gradient-title pt-2 md:pt-0 text-center md:text-left w-full gradient-title">
              {navItems.find((item) => item.href === pathname)?.label ||
                "Dashboard"}
            </h2>
          </header>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};
export default MainLayout;
