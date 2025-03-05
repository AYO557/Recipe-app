import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Route from "./route/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Provide the client to your App */}
    <QueryClientProvider client={queryClient}>
      <Route />
    </QueryClientProvider>
  </StrictMode>
);
