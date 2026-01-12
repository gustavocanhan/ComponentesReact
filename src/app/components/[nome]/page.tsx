"use client";

import { use, useEffect, useRef } from "react";
import Prism from "prismjs";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

import { componentsConfig } from "./components.config";

type PageProps = {
  params: Promise<{
    nome: string;
  }>;
};

export default function ComponentPage({ params }: PageProps) {
  const { nome } = use(params);

  const component = componentsConfig[nome as keyof typeof componentsConfig];

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
      <h1 className="text-3xl font-medium py-2">{component.title}</h1>

      <p className="text-muted-foreground pt-2 pb-12">
        {component.description}
      </p>

      {/* Preview */}
      <div className="border border-muted-foreground/10 shadow rounded-xl flex justify-center items-center py-12 mb-12">
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
    </div>
  );
}
