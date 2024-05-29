"use client";
import React, { useState } from "react";
import Plates from "@/components/Plates/Plates";
import Link from "next/link";

type Props = {};

function PlatesPage({}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  function toggleOpen() {
    setOpen((c) => !c);
  }

  function toggleError() {
    setError((c) => !c);
  }

  return (
    <div className="grid grid-rows-2 justify-items-center items-center w-full h-full bg-white">
      <div className="flex gap-4">
        <Link
          className="rounded-lg border border-slate-950 text-slate-950 font-semibold px-4 py-2"
          href={"/"}>
          back
        </Link>

        <button
          className="rounded-lg bg-slate-950 text-slate-50 font-semibold px-4 py-2"
          onClick={toggleOpen}>
          {open ? "close" : "open"}
        </button>

        <button
          className="rounded-lg bg-slate-950 text-slate-50 font-semibold px-4 py-2"
          onClick={toggleError}>
          {error ? "disable error" : "enable error"}
        </button>
      </div>

      <Plates open={open} width="50%" error={error ? "error" : ""}>
        <div className="flex flex-col gap-2" key="1">
          <span className="font-semibold">This is step ☝️</span>
          <p>
            Usually in this step we would explain why this thing exists and what
            it does. Also, we would show a button to go to the next step.
          </p>
        </div>
        <div className="flex flex-col gap-2" key="2">
          <span className="font-semibold">This is step ✌️</span>
          <p>
            Usually in this step we would explain why this thing exists and what
            it does. Also, we would show a button to go to the next step.
          </p>
          <div className="h-6 rounded w-full animate-pulse bg-neutral-300"></div>
        </div>
        <div className="flex flex-col gap-2" key="3">
          <span className="font-semibold">This is step ☝️ ✌️</span>
          <p>
            Usually in this step we would explain why this thing exists and what
            it does. Also, we would show a button to go to the next step.
          </p>
          <div className="h-6 rounded w-full animate-pulse bg-neutral-300"></div>
          <div className="h-6 rounded w-1/2 animate-pulse bg-neutral-300"></div>
        </div>
      </Plates>
    </div>
  );
}

export default PlatesPage;
