import { ReactNode } from "react";

interface SafeViewProps {
  children: ReactNode;
}

export default function SafeView({ children }: SafeViewProps) {
  return (
    <div
      className="
      p-1
      flex
      gap-1
      flex-col
      h-screen 
      w-screen 
      "
    >
      {children}
    </div>
  );
}
