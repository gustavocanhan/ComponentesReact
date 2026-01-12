"use client";

import { useState } from "react";
import Alert from "./Alert";

export default function AlertPreview() {
  const [openAlert, setOpenAlert] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpenAlert((prev) => !prev)}
        className="bg-accent-foreground text-accent px-4 py-2 rounded-md shadow-md cursor-pointer"
      >
        Show Alert
      </button>
      {openAlert && <Alert isOpen onClose={() => setOpenAlert(false)} />}
    </div>
  );
}
