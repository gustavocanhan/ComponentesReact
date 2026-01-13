"use client";

import { use, useEffect, useRef } from "react";
import Prism from "prismjs";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

import { componentsConfig } from "./components.config";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    nome: string;
  }>;
};

export default function ComponentPage({ params }: PageProps) {
  const { nome } = use(params);

  const component = componentsConfig[nome as keyof typeof componentsConfig];

  const componentsList = Object.entries(componentsConfig).map(
    ([key, value]) => ({
      key,
      ...value,
    })
  );

  const currentIndex = componentsList.findIndex((item) => item.key === nome);

  const prev = componentsList[currentIndex - 1] ?? null;
  const next = componentsList[currentIndex + 1] ?? null;

  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [nome]);

  if (!component) {
    return <p className="p-6">Component not found</p>;
  }

  return (
    <div className="md:w-4xl mx-auto px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-medium py-2">{component.title}</h1>
        <div className="flex items-center gap-2">
          {prev && (
            <Link
              href={prev.key}
              className="bg-muted-foreground/10 rounded-full cursor-pointer p-1 hover:bg-muted-foreground/30 transition"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
          )}

          {next && (
            <Link
              href={next.key}
              className="bg-muted-foreground/10 rounded-full cursor-pointer p-1 hover:bg-muted-foreground/30 transition"
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>

      <p className="text-muted-foreground pt-2 pb-12">
        {component.description}
      </p>

      {/* Preview */}
      <div className="border border-muted-foreground/10 shadow rounded-xl flex justify-center items-center h-110 mb-12 px-4">
        {component.preview}
      </div>

      <h2 className="text-xl font-medium pb-6">Code</h2>

      {/* Code block */}
      <div className="relative pb-12">
        <pre
          suppressHydrationWarning
          className="overflow-auto rounded-xl bg-[#2d2d2d] p-4 text-sm leading-relaxed"
        >
          <code
            suppressHydrationWarning
            ref={codeRef}
            className="language-tsx block whitespace-pre"
          >
            {component.code}
          </code>
        </pre>
      </div>
      <div
        className={`flex items-center pt-8 pb-20 ${
          !prev ? "justify-end" : "justify-between"
        }`}
      >
        {prev && (
          <Link
            href={prev.key}
            className="flex items-center gap-0.5 bg-muted-foreground/10 px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-muted-foreground/30 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            {prev.title}
          </Link>
        )}
        {next && (
          <Link
            href={next.key}
            className="flex items-center gap-1 bg-muted-foreground/10 px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-muted-foreground/30 transition"
          >
            {next.title}
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
