"use client";
import { updateData } from "@/actions/action";
import { useState } from "react";

export default function EditCustomer({ id }: { id: string }) {
  const [form, setForm] = useState(false);
  function editFunction(formData: FormData) {
    updateData(formData, id);
  }
  return (
    <div className="">
      <button
        className="border-2 hover:bg-slate-200 w-20"
        onClick={() => setForm(!form)}
      >
        {form ? <>Close</> : <>Edit</>}
      </button>
      {form && (
        <form
          action={editFunction}
          className="absolute right-[5rem] top-[2rem] flex flex-col justify-around border-2 border-black rounded-md items-center"
        >
          <input
            type="text"
            name="first_name"
            placeholder="first name"
            required
            className="border-2 focus-visible:outline-none"
          />
          <input
            type="text"
            name="last_name"
            placeholder="last name"
            required
            className="border-2  focus-visible:outline-none"
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            required
            className="border-2  focus-visible:outline-none"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            className="border-2  focus-visible:outline-none"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            className="border-2  focus-visible:outline-none"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            required
            className="border-2  focus-visible:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            className="border-2  focus-visible:outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            required
            className="border-2  focus-visible:outline-none"
          />
          <button
            type="submit"
            className="border-2 w-20 rounded-md bg-slate-200 hover:bg-slate-400 text-l"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
}
