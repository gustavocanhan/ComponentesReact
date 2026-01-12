"use client";

import { useState } from "react";
import Dialog from "./Dialog";

export default function DialogPreview() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpenDialog((prev) => !prev)}
        className="bg-accent-foreground text-accent px-4 py-2 rounded-md shadow-md cursor-pointer"
      >
        Open Dialog
      </button>
      {openDialog && <Dialog isOpen={openDialog} setIsOpen={setOpenDialog} />}
    </div>
  );
}
