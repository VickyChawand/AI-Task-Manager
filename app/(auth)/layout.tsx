"use client";

import Toggle from "@/components/Toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-black dark:text-white relative">
      
      {/* Toggle button */}
      <div className="absolute top-5 right-5 z-50">
        <Toggle />
      </div>

      {children}
    </div>
  );
}