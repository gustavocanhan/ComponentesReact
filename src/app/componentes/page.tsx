"use client";
import ThemeToggle from "@/theme/ThemeToggle";
import Header from "@/ui/header/Header";
import { ComponentIcon, SearchIcon, XIcon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Componentes() {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");

  const data = ["Theme", "Accordion", "Alert", "Dialog", "Input", "Search"];

  return <Header />;
}
