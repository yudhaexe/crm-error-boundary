"use client";
import PageHeader from "@/components/CRM/PageHeader";
import { Container, Divider } from "@mui/material";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClientPage from "@/components/CRM/ClientPage";
const queryClient = new QueryClient();

export default function CertifiedSalesManager() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <PageHeader title="CRM" />
        <ClientPage />
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
