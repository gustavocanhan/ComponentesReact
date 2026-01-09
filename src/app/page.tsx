"use client";
import Accordion from "@/components/accordion/Accordion";
import Alert from "@/components/alert/Alert";
import Button from "@/components/button/Button";
import DatePicker from "@/components/date/DatePicker";
import Dialog from "@/components/dialog/Dialog";
import { Input } from "@/components/input/Input";
import { InputLabel } from "@/components/input/InputLabel";
import Radio from "@/components/radio/Radio";
import Search from "@/components/search/Search";
import ThemeToggle from "@/theme/ThemeToggle";
import { useState } from "react";
import Card from "./../components/card/Card";
import Carousel from "@/components/carousel/Carousel";
import CarouselItem from "@/components/carousel/CarouselItem";
import CheckBox from "@/components/checkbox/CheckBox";
import Collapsible from "@/components/collapsible/Collapsible";
import ContextMenu from "@/components/contextmenu/ContextMenu";
import { Copy, Edit, Trash } from "lucide-react";

export default function Home() {
  const [input, setInput] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  function toggleDialog() {
    setOpenDialog(!openDialog);
  }

  function toggleAlert() {
    setOpenAlert(!openAlert);
  }

  return (
    <main className=" bg-background flex flex-col space-y-2">
      <div className="py-4 px-8 bg-secondary flex justify-between items-center">
        <h1 className="text-4xl text-primary">Componentes React</h1>
        <ThemeToggle />
      </div>
      {/* INPUT */}
      <div className="py-4 px-8 flex gap-8">
        <div className="w-full">
          <h1 className="text-2xl text-foreground uppercase pb-2">Input</h1>
          <div className="shadow-md w-full h-30 bg-background border rounded-lg border-foreground flex justify-center items-center">
            <Input
              type="text"
              placeholder="Digite um nome:"
              value={input}
              onChange={setInput}
              disabled={false}
            />
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-2xl text-foreground pb-2">INPUT with LABEL</h1>
          <div className="shadow-md w-full h-30 bg-background border rounded-lg border-foreground flex justify-center items-center">
            <InputLabel
              id="name"
              label="Name:"
              type="text"
              placeholder="Digite um nome:"
              value={input}
              onChange={setInput}
              disabled={false}
            />
          </div>
        </div>
      </div>
      {/* SEARCH */}
      <div className="py-4 px-8">
        <h1 className="text-2xl text-foreground pb-2">SEARCH</h1>
        <div className="shadow-md w-full h-30 bg-background border rounded-lg border-foreground flex justify-center items-center">
          <Search
            type="text"
            value={input}
            placeholder="Busque um nome"
            onChange={setInput}
          />
        </div>
      </div>
      {/* ACCORDION */}
      <div className="py-4 px-8">
        <h1 className="text-2xl text-foreground pb-2">ACCORDION</h1>
        <div className="px-2 shadow-md w-full h-70 bg-background border rounded-lg border-foreground flex justify-center items-center">
          <Accordion
            items={[
              {
                id: "1",
                title: "O que é este sistema?",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper tellus ut efficitur fermentum. Proin molestie eros quam, eu varius turpis hendrerit quis. In nibh ante, consectetur quis nisi porttitor, consectetur eleifend metus. Aliquam non odio ac eros molestie porta. Etiam odio ipsum, aliquam quis venenatis vitae, blandit nec nulla. Ut rutrum odio et convallis mattis. Sed lobortis, sem vitae condimentum rutrum, mi orci ultricies diam, ut scelerisque nisl sapien at lacus.",
              },
              {
                id: "2",
                title: "Quem pode acessar?",
                content: "Apenas usuários autorizados.",
              },
            ]}
          />
        </div>
      </div>
      {/* DIALOG */}
      <div className="py-4 px-8">
        <h1 className="text-2xl text-foreground pb-2">DIALOG</h1>
        <div className="px-2 shadow-md w-full h-30 bg-background border rounded-lg border-foreground flex justify-center items-center">
          <button
            onClick={toggleDialog}
            className="bg-accent-foreground text-accent px-4 py-2 rounded-md shadow-md cursor-pointer"
          >
            Open Dialog
          </button>
          {openDialog && (
            <Dialog isOpen={openDialog} setIsOpen={setOpenDialog} />
          )}
        </div>
      </div>
      {/* ALERT */}
      <div className="py-4 px-8">
        <h1 className="text-2xl text-foreground pb-2">ALERT</h1>
        <div className="px-2 shadow-md w-full h-30 bg-background border rounded-lg border-foreground flex justify-center items-center">
          <button
            onClick={toggleAlert}
            className="bg-accent-foreground text-accent px-4 py-2 rounded-md shadow-md cursor-pointer"
          >
            Show Alert
          </button>
          {openAlert && <Alert isOpen onClose={() => setOpenAlert(false)} />}
        </div>
      </div>
      {/* RADIO */}
      <div className="py-4 px-8">
        <h1 className="text-2xl text-foreground pb-2">RADIO</h1>
        <div className="px-2 shadow-md w-full h-30 bg-background border rounded-lg border-foreground flex justify-center items-center">
          <div className="flex flex-col gap-2">
            <Radio label="Feminino" value="Feminino" nameGroup="Genero" />
            <Radio label="Masculino" value="Masculino" nameGroup="Genero" />
            <Radio label="Outro" value="Outro" nameGroup="Genero" />
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="py-4 px-8">
        <h1 className="text-2xl text-foreground pb-2">BUTTON</h1>
        <div className="px-2 shadow-md w-full h-30 bg-background border rounded-lg border-foreground flex justify-center items-center gap-2">
          <Button value="Button" variant="default" />
          <Button value="Button" variant="primary" />
          <Button value="Button" variant="destructive" />
          <Button value="Button" variant="ghost" />
        </div>
      </div>
      {/* Calendar */}
      <div className="py-4 px-8">
        <h1 className="text-2xl text-foreground pb-2">CALENDAR</h1>
        <div className="px-2 shadow-md w-full h-90 bg-background border rounded-lg border-foreground flex justify-center py-4">
          <div className="flex flex-col gap-2">
            <DatePicker />
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="py-4 px-8">
        <h1 className="text-2xl text-foreground pb-2">CARD</h1>
        <div className="px-2 shadow-md w-full h-100 bg-background border rounded-lg border-foreground flex justify-center py-4">
          <div className="flex flex-col gap-2">
            <Card />
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="py-4 px-8">
        <h1 className="text-2xl text-foreground pb-2">CAROUSEL</h1>
        <div className="px-2 shadow-md w-full h-100 bg-background border rounded-lg border-foreground flex justify-center py-4">
          <div className="max-w-xl mx-auto p-6">
            <Carousel>
              <CarouselItem>1</CarouselItem>
              <CarouselItem>2</CarouselItem>
              <CarouselItem>3</CarouselItem>
              <CarouselItem>4</CarouselItem>
              <CarouselItem>5</CarouselItem>
              <CarouselItem>6</CarouselItem>
            </Carousel>
          </div>
        </div>
      </div>
      {/* CheckBox */}
      <div className="py-4 px-8">
        <h1 className="text-2xl text-foreground pb-2">CHECKBOX</h1>
        <div className="px-2 shadow-md w-full h-40 bg-background border rounded-lg border-foreground flex justify-center items-center">
          <div className="flex flex-col gap-2">
            <CheckBox
              labelChk="JavaScript"
              nameChk="tech"
              valueChk="js"
              isDisabled={false}
            />
            <CheckBox
              labelChk="TypeScript"
              nameChk="tech"
              valueChk="ts"
              isDisabled={true}
            />
            <CheckBox
              labelChk="C#"
              nameChk="tech"
              valueChk="c#"
              isDisabled={false}
            />
          </div>
        </div>
      </div>
      {/* Collapsible */}
      <div className="py-4 px-8">
        <h1 className="text-2xl text-foreground pb-2">COLLAPSIBLE</h1>
        <div className="px-2 shadow-md w-full h-60 bg-background border rounded-lg border-foreground flex justify-center items-center">
          <div className="flex flex-col gap-2">
            <Collapsible title="Detalhes">
              <p>Conteúdo um</p>
              <p>Conteúdo dois</p>
              <p>Conteúdo tres</p>
              <p>Conteúdo quatro</p>
            </Collapsible>
          </div>
        </div>
      </div>
      {/* Context Menu */}
      <div className="py-4 px-8">
        <h1 className="text-2xl text-foreground pb-2">CONTEXT MENU</h1>
        <div className="px-2 shadow-md w-full h-60 bg-background border rounded-lg border-foreground flex justify-center items-center">
          <div className="flex flex-col gap-2">
            <ContextMenu
              items={[
                {
                  label: "Editar",
                  icon: <Edit className="w-4 h-4" />,
                  onClick: () => alert("Editar"),
                },
                {
                  label: "Duplicar",
                  icon: <Copy className="w-4 h-4" />,
                  onClick: () => alert("Duplicar"),
                },
                {
                  label: "Excluir",
                  icon: <Trash className="w-4 h-4" />,
                  onClick: () => alert("Excluir"),
                },
              ]}
            >
              <div className="rounded-md border p-6">
                Clique com botao direito aqui
              </div>
            </ContextMenu>
          </div>
        </div>
      </div>
    </main>
  );
}
