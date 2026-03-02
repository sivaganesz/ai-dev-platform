import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarHeader } from "./sidebar-header";
import { SidebarNav } from "./sidebar-nav";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarProvider } from "./sidebar-context";

export function SidebarMobile() {
  return (
    <SidebarProvider>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[260px] flex flex-col">
          <SidebarHeader />
          <SidebarNav />
          <SidebarFooter />
        </SheetContent>
      </Sheet>
    </SidebarProvider>
  );
}
