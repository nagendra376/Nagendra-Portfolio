import React, { createContext, useContext, useEffect, useState } from "react";

interface VisitorContextType {
  count: number | null;
  isLoading: boolean;
}

const VisitorContext = createContext<VisitorContextType | undefined>(undefined);

export function VisitorProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      const KEY = "nagendra_visits";

      try {
        const hasVisited = sessionStorage.getItem("has_visited_session");

        // First visit in this browser session = +1
        // Subsequent visits = only read the count
        const endpoint = hasVisited ? "get" : "hit";

        const url = `https://countapi.mileshilliard.com/api/v1/${endpoint}/${KEY}`;

        if (!hasVisited) {
          sessionStorage.setItem("has_visited_session", "true");
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch count: ${response.status}`);
        }

        const data = await response.json();

        // CountAPI can return value as a string
        const value = Number(data.value);

        if (!Number.isNaN(value)) {
          setCount(value);
        } else {
          setCount(0);
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error);
        setCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCount();
  }, []);

  return (
    <VisitorContext.Provider value={{ count, isLoading }}>
      {children}
    </VisitorContext.Provider>
  );
}

export function useVisitor() {
  const context = useContext(VisitorContext);

  if (!context) {
    throw new Error("useVisitor must be used within a VisitorProvider");
  }

  return context;
}
