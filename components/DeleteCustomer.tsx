"use client";
import { deleteData } from "@/actions/action";

export default function DeleteCustomer({ id }: { id: string }) {
  function handleClick() {
    deleteData(id);
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="border-2 p-2 rounded-sm hover:bg-slate-200 w-20 mt-1"
      >
        Delete
      </button>
    </div>
  );
}
