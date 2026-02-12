import { createContext, useContext, useEffect, useState } from "react";

interface SidebarContextProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  setIsCollapsed: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const toggleCollapse = () => setIsCollapsed((prev: boolean) => !prev);

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapse, setIsCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
