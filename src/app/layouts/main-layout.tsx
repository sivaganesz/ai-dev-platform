import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/layout/sidebar/sidebar";
import { SidebarProvider } from "@/components/layout/sidebar/sidebar-context";
import { SidebarMobile } from "@/components/layout/sidebar/sidebar-mobile";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <div className="flex min-h-screen bg-background">
          {/* Desktop Sidebar */}
          <Sidebar />

          <div className="flex flex-1 flex-col">
            {/* Topbar */}
            <header className="sticky top-0 z-40 flex h-16 w-full items-center border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex flex-1 items-center gap-4">
                <SidebarMobile />
                <div className="flex items-center gap-2 md:hidden">
                  <span className="font-bold">AI Dev Platform</span>
                </div>
                
                <div className="ml-auto flex items-center gap-4">
                  {/* Search or other topbar items could go here */}
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 md:p-6">
              <div className="mx-auto max-w-7xl">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </TooltipProvider>
    </SidebarProvider>
  );
}
