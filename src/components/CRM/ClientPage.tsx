"use client";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Tabs } from "@mui/material";
import React from "react";
import ClientTab from "./ClientTab";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ClientPage() {
  const [value, setValue] = React.useState("clients");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <TabList
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: "white" } }}
      >
        <Tab
          value={"clients"}
          label="Clients"
          className={`normal-case font-semibold text-sm  ${
            value === "clients"
              ? "bg-blue-50 text-blue-700 rounded-lg"
              : "text-gray-600"
          }`}
        />
        <Tab
          value={"policy"}
          label="Policy"
          className={`normal-case font-semibold text-sm  ${
            value === "policy"
              ? "bg-blue-50 text-blue-700 rounded-lg"
              : "text-gray-600"
          }`}
        />
        <Tab
          value={"support"}
          label="Support"
          className={`normal-case font-semibold text-sm  ${
            value === "support"
              ? "bg-blue-50 text-blue-700 rounded-lg"
              : "text-gray-600"
          }`}
        />
      </TabList>
      <TabPanel value="clients">
        <ClientTab />
      </TabPanel>
      <TabPanel value="policy">Policy</TabPanel>
      <TabPanel value="support">Support</TabPanel>
    </TabContext>
  );
}
