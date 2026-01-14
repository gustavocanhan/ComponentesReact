import Button from "@/components/button/Button";
import Card from "@/components/card/Card";
import DatePicker from "@/components/date/DatePicker";
import DatePickerHome from "@/components/date/DatePickerHome";
import Search from "@/components/search/Search";
import Table from "@/components/table/Table";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-200 p-4">
      <div className="xl:w-1/2 h-full flex flex-col justify-center px-4">
        <h1 className="xl:text-6xl text-4xl pb-2">Componentes React</h1>
        <h2 className="xl:text-3xl xl:pl-2 text-2xl pl-1 pb-8">
          agradáveis e reutilizáveis.
        </h2>
        <p className="pl-2 text-xl text-muted-foreground">
          Escolha, copie e use em seus projetos.
        </p>
        <p className="pl-2 text-xl text-muted-foreground">
          Componentes isolados, código claro e design inspirado em shadcn.
        </p>
        <div className="flex gap-4 py-12 pl-2">
          <Link
            href={"/components"}
            className="bg-accent-foreground text-accent px-4 py-2 rounded-md shadow cursor-pointer transition hover:bg-accent-foreground/80"
          >
            Ver componentes
          </Link>
          <Link
            href={"/about"}
            className="bg-accent text-accent-foreground border-muted-foreground/10 px-4 py-2 rounded-md shadow cursor-pointer transition hover:bg-accent-foreground/20"
          >
            Sobre
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-full xl:flex items-center relative hidden">
        <div className="absolute top-12 left-18">
          <DatePickerHome />
        </div>

        <div className="absolute right-16 top-8">
          <Card />
        </div>

        <div className="absolute bottom-78 right-24">
          <Search />
        </div>

        <div className="absolute bottom-8 left-8">
          <Table
            items={[
              {
                id: 1,
                product: "Arroz",
                price: 29.8,
              },
              {
                id: 2,
                product: "Carne",
                price: 299.8,
              },
              {
                id: 3,
                product: "TV",
                price: 29.9998,
              },
            ]}
          />
        </div>
        <div className="absolute right-16 bottom-12">
          <div className="flex flex-col gap-2">
            <Button value="Button" variant="default" />
            <Button value="Button" variant="primary" />
            <Button value="Button" variant="destructive" />
            <Button value="Button" variant="ghost" />
          </div>
        </div>
      </div>
    </div>
  );
}
