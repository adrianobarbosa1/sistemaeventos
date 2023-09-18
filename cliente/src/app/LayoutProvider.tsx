"use client";

// Use usePathname for catching route name.
import { usePathname } from "next/navigation";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" ? (
        children
      ) : (
        <>
          <h1>HEADER</h1>
          {children}
          <h1>FOOTER</h1>
        </>
      )}
    </>
  );
};
