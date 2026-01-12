"use client";

import { useState } from "react";

const tabs = [
  {
    id: "account",
    title: "Account",
  },
  {
    id: "password",
    title: "Password",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="w-full max-w-xl">
      <div className="p-1 bg-muted-foreground/10 rounded-full shadow w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1 text-sm font-medium rounded-full transition duration-200 ${
              activeTab == tab.id ? "bg-background" : "cursor-pointer"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="border border-muted-foreground/10 shadow bg-background mt-4 px-6 py-4 w-sm rounded-xl">
        <h1 className="font-semibold py-2">
          {activeTab === "account" ? "Account" : "Password"}
        </h1>
        <p className="text-muted-foreground text-sm pb-6">
          {activeTab === "account"
            ? "Make changes to your account here. Click save when you're done."
            : "Change your password here. After saving, you'll be logged out."}
        </p>
        <label className="flex flex-col pb-4">
          <p className="pb-1 text-sm font-medium">
            {activeTab === "account" ? "Name" : "Current password"}
          </p>
          <input
            type="text"
            className="outline-none border border-border rounded-md px-2 py-1"
          />
        </label>
        <label className="flex flex-col pb-8">
          <p className="pb-1 text-sm font-medium">
            {activeTab === "account" ? "Username" : "New password"}
          </p>
          <input
            type="text"
            className="outline-none border border-border rounded-md px-2 py-1"
          />
        </label>
        <button className="bg-accent-foreground text-accent px-4 py-2 text-sm rounded-md hover:bg-accent-foreground/80 cursor-pointer flex">
          Save changes
        </button>
      </div>
    </div>
  );
}
