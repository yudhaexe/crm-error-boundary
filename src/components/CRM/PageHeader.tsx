"use client";
import { Divider, Typography } from "@mui/material";
import React from "react";

export default function PageHeader({ title }: { title: String }) {
  return (
    <div className="mb-5">
      <Typography className="mb-5 font-semibold text-gray-900 text-3xl">
        {title}
      </Typography>
      <Divider />
    </div>
  );
}
