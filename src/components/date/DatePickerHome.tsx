"use client";

import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function DatePickerHome() {
  const pickerRef = useRef<HTMLDivElement | null>(null);

  // Controla se o calendário está aberto ou fechado
  const [open, setOpen] = useState(true);

  // Guarda a data selecionada pelo usuário
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const CURRENT_YEAR = new Date().getFullYear();
  const YEARS = Array.from({ length: 11 }, (_, i) => CURRENT_YEAR - 5 + i);

  const today = new Date();

  // Data base que controle o mês e ano visiveis no calendario
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  // Extraimos mes e ano da data atual exibida
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Descobre:
  // - Qual dia da semana começa o mes
  // - Quantos dias o mes tem
  const firstDayofMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Criamos um array vazio que representa:
  // espaços vazios + dias reais do mes
  const days = Array.from({
    length: firstDayofMonth + daysInMonth,
  });

  useEffect(() => {
    if (!YEARS.includes(currentDate.getFullYear())) {
      const today = new Date();
      setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setOpen(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={pickerRef} className="relative w-72">
      {/* Input Fake */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full rounded-md border px-3 py-2 text-left text-sm flex justify-between items-center cursor-pointer"
      >
        <span>
          {selectedDate
            ? selectedDate.toLocaleDateString("pt-BR")
            : "Selecione uma data"}
        </span>
        <Calendar className="w-4 h-4" />
      </button>

      {/* Calendario */}
      {open && (
        <div className="absolute z-10 mt-2 w-full rounded-lg border bg-background p-4 shadow-lg">
          {/* header */}
          <div className="mb-3 flex items-center justify-center gap-2">
            {/* botao mes anterior */}
            <button
              onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
              className="rounded p-1 hover:bg-muted-foreground/10 cursor-pointer"
            >
              <ChevronLeft />
            </button>

            {/* select de mes */}
            <select
              value={month}
              onChange={(e) =>
                setCurrentDate(new Date(year, Number(e.target.value), 1))
              }
              className="rounded border px-2 py-1 text-sm cursor-pointer"
            >
              {MONTHS.map((m, index) => (
                <option key={m} value={index}>
                  {m}
                </option>
              ))}
            </select>

            {/* select de ano */}
            <select
              onChange={(e) =>
                setCurrentDate(new Date(Number(e.target.value), month, 1))
              }
              className="rounded border px-2 py-1 text-sm cursor-pointer"
              value={year}
            >
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            {/* botao mes posterior */}
            <button
              onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
              className="rounded p-1 hover:bg-muted-foreground/10 cursor-pointer"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dias da Semana */}
          <div className="mb-2 grid grid-cols-7 text-center text-xs text-muted-foreground">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          {/* Grid de Dias */}
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {days.map((_, index) => {
              // calcula o numero real do dia
              const day = index - firstDayofMonth + 1;

              // verifica se é um dia valido do mes
              const isValidDay = day > 0 && day <= daysInMonth;

              return (
                <button
                  key={index}
                  disabled={!isValidDay}
                  onClick={() => {
                    setSelectedDate(new Date(year, month, day));
                    setOpen(false);
                  }}
                  className={`h-8 rounded cursor-pointer ${
                    isValidDay
                      ? "hover:bg-muted-foreground/30"
                      : "cursor-default"
                  } ${
                    selectedDate &&
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === month &&
                    selectedDate.getFullYear() === year
                      ? "bg-accent-foreground text-accent"
                      : ""
                  }`}
                >
                  {isValidDay ? day : ""}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/*
  Array fixo com os nomes dos meses.
  Isso evita depender de locale e facilita o select.
*/
const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

/*
  Gera uma lista de anos.
  Aqui vai de 2020 até 2035, mas você pode ajustar.
*/
