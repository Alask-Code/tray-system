import { ReactNode } from "react";

interface SafeViewProps {
  children: ReactNode;
}

export default function SafeView({ children }: SafeViewProps) {
  return (
    <div
      className="
  w-screen 
  h-screen 
  flex
  gap-1
  flex-col
  "
    >
      {children}
    </div>
  );
}
