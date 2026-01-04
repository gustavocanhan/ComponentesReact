# 🌗 Theme Toggle (Light / Dark) com Next.js + Tailwind

Este README explica **do zero** como configurar **dark mode** usando `next-themes`
com um **toggle animado estilo switch**, utilizando **tokens de cor do Tailwind (v4)**.

---

## 📦 Instalação

Instale o provider de tema:

```bash
npm install next-themes
```

Instale os ícones (Lucide):

```bash
npm install lucide-react
```

---

## 📁 Estrutura de pastas

```txt
src/
 └─ theme/
    ├─ ThemeProviderWrapper.tsx
    └─ ThemeToggle.tsx
```

---

## 🧩 Theme Provider

Crie a pasta:

```txt
src/theme
```

Crie o arquivo:

```txt
ThemeProviderWrapper.tsx
```

### Código

```tsx
"use client";

import { ThemeProvider } from "next-themes";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
```

---

## 🧱 Configuração no layout

No seu `layout.tsx`, importe o provider:

```ts
import ThemeProviderWrapper from "@/theme/ThemeProviderWrapper";
```

Envolva os `children` dentro do `<body>`:

```tsx
<body>
  <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
</body>
```

No `<html>`, adicione:

```tsx
<html lang="pt-BR" suppressHydrationWarning>
```

Isso evita problemas de hidratação ao alternar entre light e dark.

---

## 🔘 Botão Toggle de Tema (Switch Animado)

Crie o arquivo:

```txt
src/theme/ThemeToggle.tsx
```

### Código

```tsx
"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Switch Theme"
      className="
        relative inline-flex h-8 w-14 items-center
        rounded-full
        bg-muted
        border border-border
        shadow-md
        transition-colors
        cursor-pointer
      "
    >
      <span
        className={`
          absolute left-1 top-1
          h-6 w-6 rounded-full
          bg-primary
          text-primary-foreground
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          ${isDark ? "translate-x-6 rotate-180" : ""}
        `}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
    </button>
  );
}
```

---

## 🎨 Pré-requisito de cores

Este toggle assume que você já configurou:

- `@theme` com tokens de cor
- `.dark` para sobrescrever os tokens
- Tailwind CSS v4

Exemplo de tokens utilizados pelo botão:

- `bg-muted`
- `bg-primary`
- `text-primary-foreground`
- `border-border`

Nenhuma classe `dark:` é usada no componente.
