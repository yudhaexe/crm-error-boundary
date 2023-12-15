"use client";
import PageHeader from "@/components/CRM/PageHeader";
import TabCRM from "@/components/CRM/ClientPage";
import { Container, Divider } from "@mui/material";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProfilePage from "@/components/CRM/ProfilePage";
const queryClient = new QueryClient();

export default function Profile() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <ProfilePage />
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
