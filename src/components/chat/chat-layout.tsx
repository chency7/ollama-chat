"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "../sidebar";
import Chat, { ChatProps } from "./chat";

interface ChatLayoutProps {
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

type MergedProps = ChatLayoutProps & ChatProps;

export function ChatLayout({
  defaultCollapsed = false,
  navCollapsedSize,
  initialMessages,
  id,
}: MergedProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div className="flex w-full h-screen">
      {/* 侧边栏 */}
      <div
        className={cn(
          "hidden md:block border-r",
          isCollapsed ? "w-[70px]" : "w-[280px]",
          "transition-all duration-300 ease-in-out"
        )}
      >
        <Sidebar
          isCollapsed={isCollapsed || isMobile}
          messages={initialMessages}
          isMobile={isMobile}
          chatId={id}
        />
      </div>

      {/* 主内容区 */}
      <div className="flex-1 h-full flex justify-center items-center">
        <Chat id={id} initialMessages={initialMessages} isMobile={isMobile} />
      </div>
    </div>
  );
}
