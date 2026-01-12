import { SquarePen, Trash } from "lucide-react";

type TableProps = {
  items: {
    id: number;
    product: string;
    price: number;
  }[];
};

export default function Table({ items }: TableProps) {
  return (
    <table className="w-2xl">
      <colgroup>
        <col className="w-16" />
        <col className="w-1/2" />
        <col className="w-32" />
        <col className="w-32" />
      </colgroup>
      <thead>
        <tr className="border-b border-muted-foreground/20">
          <th className="py-4 text-center">#</th>
          <th className="py-4 text-center">Product</th>
          <th className="py-4 text-center">Price</th>
          <th className="py-4 text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="">
        {items.map((item, key) => (
          <tr key={key} className="border-b border-muted-foreground/20">
            <td className="py-4 text-center">{item.id}</td>
            <td className="py-4 text-center">{item.product}</td>
            <td className="py-4 text-center">{item.price}</td>
            <td className="py-4 text-right">
              <div className="flex justify-end items-center gap-6">
                <SquarePen className="h-6 w-6 cursor-pointer bg-muted-foreground/10 p-1 rounded-md text-green-500 hover:text-green-700 shadow transition" />
                <Trash className="h-6 w-6 cursor-pointer bg-muted-foreground/10 p-1 rounded-md text-red-500 hover:text-red-700 shadow transition" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
