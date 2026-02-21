import { createContext, useContext, useState, type ReactNode } from "react";
import { load } from "../utils/localStorage";

type SideHustle = {
  name: string;
  income: string;
};

type SideHustlesContextType = {
  sideHustles: SideHustle[];
  addSideHustle: (name: string, income: string) => void;
};

const SideHustlesContext = createContext<SideHustlesContextType | null>(null);

export const useSideHustles = () => {
  const ctx = useContext(SideHustlesContext);
  if (!ctx) throw new Error("useSideHustles must be used within SideHustlesProvider");
  return ctx;
};

export const SideHustlesProvider = ({ children }: { children: ReactNode }) => {
  const [sideHustles, setSideHustles] = useState<SideHustle[]>(() => load("sideHustles", []));

  const addSideHustle = (name: string, income: string) => {
    setSideHustles((prev) => [...prev, { name, income }]);
  };

  return (
    <SideHustlesContext.Provider value={{ sideHustles, addSideHustle }}>
      {children}
    </SideHustlesContext.Provider>
  );
};
