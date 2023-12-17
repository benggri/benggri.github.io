'use client';

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function ReactQueryProvider({
  children
} : {
  children: React.ReactNode
}) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false
        }
      }
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      {
        process.env.NEXT_PUBLIC_MODE === 'development' ? 
        <ReactQueryDevtools initialIsOpen={false} />
        :
        <></>
      }
    </QueryClientProvider>
  );
}