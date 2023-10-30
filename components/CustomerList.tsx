import { createData } from "@/actions/action";
export default function createCustomer() {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="text-xl">Create Customer </div>
      <form
        action={createData}
        className="flex flex-col justify-around w-1/4 h-96 border-2 border-black rounded-xl items-center"
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
    </div>
  );
}
