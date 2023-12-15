"use client";
import { WarningAmber } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function ClientError() {
  const router = useRouter();
  return (
    <div className="bg-rose-100 justify-center flex-col flex text-center gap-2 items-center p-6 lg:p-40 rounded-lg">
      <WarningAmber sx={{ color: "#C01048" }} />
      <Typography className="text-sm lg:text-base font-semibold text-rose-900">
        Opps! Unable to load clients
      </Typography>
      <Typography className="text-xs lg:text-sm text-rose-900">
        Something went wrong that we didn’t anticipate.
      </Typography>
      <LoadingButton
        onClick={() => router.push("/")}
        className="normal-case text-gray-700 rounded-lg bg-white outline outline-1 outline-gray-300 font-bold"
      >
        Retry
      </LoadingButton>
    </div>
  );
}
