"use client";
import { ArrowLeft } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="h-screen flex">
      <div className="flex flex-col my-auto">
        <div className="text-base font-semibold text-blue-700 mb-3">
          404 Error
        </div>
        <div className="text-6xl font-semibold text-gray-900 mb-6">
          We can’t find that page
        </div>
        <div className="text-xl text-gray-600 mb-12">
          Sorry, the page you are looking for doesn;&apos;t exist or has been
          moved.
        </div>
        <div className="flex gap-3">
          <Button
            onClick={() => router.push("/")}
            className="font-semibold px-7 py-4 bg-transparent outline outline-1 text-lg rounded-lg outline-gray-300 text-gray-700"
          >
            <ArrowLeft /> Go back
          </Button>
          <Button
            onClick={() => router.push("/")}
            className="font-semibold px-7 py-4 bg-blue-600  text-lg rounded-lg  text-white"
          >
            Take me home
          </Button>
        </div>
      </div>
    </div>
  );
}
