"use client";

import { useState } from "react";

import { LuLayoutDashboard } from "react-icons/lu";
import { MdTaskAlt, MdFaceRetouchingNatural } from "react-icons/md";
import { IoAnalyticsOutline, IoLogOutOutline, IoSearchOutline } from "react-icons/io5";
import { RiSettings4Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { Menu, X } from "lucide-react";

import DashboardComponent from "@/components/Dashboard/Dashboard";
import TaskBoard from "@/components/TaskBoard/Taskboard";

const buttonList = [
  { id: 1, label: "Dashboard", icon: <LuLayoutDashboard size={25} /> },
  { id: 2, label: "Tasks", icon: <MdTaskAlt size={25} /> },
  { id: 3, label: "AI Planner", icon: <MdFaceRetouchingNatural size={25} /> },
  { id: 4, label: "Analytics", icon: <IoAnalyticsOutline size={25} /> },
  { id: 5, label: "Settings", icon: <RiSettings4Line size={25} /> },
];

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-neutral)]">
      {/* Desktop Sidebar */}
      <aside className="hidden h-full w-[260px] shrink-0 lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile Overlay */}
      <div
        onClick={closeSidebar}
        className={[
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden",
          isSidebarOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* Mobile Drawer */}
      <aside
        className={[
          "fixed left-0 top-0 z-50 h-full w-[260px] bg-[var(--color-neutral)] transition-transform duration-300 ease-in-out lg:hidden",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* <div className="flex items-center justify-end px-5 pt-5">
          <button
            onClick={closeSidebar}
            className="rounded-md p-2 text-[var(--color-secondary)] hover:bg-[var(--color-bg-hover)] hover:text-black"
            aria-label="Close sidebar"
          >
            <X size={22} />
          </button>
        </div> */}

        <SidebarContent onNavigate={closeSidebar} />
      </aside>

      {/* Main Content */}
      <main className="flex min-w-0 flex-1 flex-col h-screen overflow-hidden">
        <header className="flex w-full shrink-0 items-center justify-between gap-3 bg-[var(--color-surface-card)] px-3 py-4 border-b-2 border-solid border-[var(--color-surface-high)]">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            {/* Hamburger Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex shrink-0 rounded-md p-2 text-[var(--color-secondary)] hover:bg-[var(--color-bg-hover)] hover:text-black lg:hidden"
              aria-label="Open sidebar"
            >
              <Menu size={22} />
            </button>

            {/* Search */}
            <div className="flex w-full max-w-lg items-center gap-2 rounded-md bg-[var(--color-surface-low)] p-2 text-sm text-[var(--color-secondary)] hover:border-2 hover:border-solid hover:border-[var(--color-surface-high)]">
              <IoSearchOutline size={20} className="shrink-0" />
              <input
                placeholder="Search tasks, insights or files...."
                className="w-full min-w-0 border-none bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-4 bg-transparent sm:gap-5">
            <button className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] cursor-pointer">
              <FaRegBell size={18} />
            </button>

            <div className="flex items-center justify-center gap-2 text-md font-bold sm:gap-3">
              <RxAvatar />
              <span className="hidden sm:inline">Vicky</span>
            </div>
          </div>
        </header>

        <section className="min-h-0 flex-1 overflow-y-auto p-5 scrollbar-none">
          {/* <DashboardComponent /> */}
          <TaskBoard/>
        </section>
      </main>
    </div>
  );
}

type SidebarContentProps = {
  onNavigate?: () => void;
};

function SidebarContent({ onNavigate }: SidebarContentProps) {
  return (
    <div className="flex h-full flex-col justify-between p-6">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-xl font-bold text-[var(--color-primary)]">
            Cognitive Sanctuary
          </h2>
          <span className="text-sm font-normal text-[var(--color-secondary)]">
            AI Task Manager
          </span>
        </div>

        <nav className="flex flex-col items-start justify-center">
          {buttonList.map((item) => (
            <button
              key={item.id}
              onClick={onNavigate}
              className="cursor-pointer flex w-full items-center justify-start gap-5 rounded-[var(--radius-md)] bg-[var(--color-neutral)] py-3 pl-3 pr-12 text-md font-semibold text-[var(--color-secondary)] duration-300 ease-out hover:bg-[var(--color-bg-hover)] hover:text-black"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex w-full flex-col items-start justify-center gap-7">
        <button className="cursor-pointer w-full rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] py-3 text-md font-normal text-[var(--color-neutral)] shadow-[var(--shadow-glow)] transition duration-300 ease-in-out hover:scale-105">
          Create Task
        </button>

        <button className="cursor-pointer flex items-center justify-start gap-3 bg-transparent text-md font-semibold text-[var(--color-secondary)] hover:text-[var(--color-tertiary)]">
          <IoLogOutOutline size={27} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}