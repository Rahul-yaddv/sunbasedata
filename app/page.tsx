import { cookies } from "next/headers";
import { Customer } from "../components/Customer";
import CustomerList from "@/components/CustomerList";
import { handleAuth } from "../actions/action";

export default function SignupPage() {
  const cookie = cookies();
  const auth = cookie.has("auth");

  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-xl mt-4">Customer Page</div>
      <div className="flex justify-center mt-2">
        <form
          action={handleAuth}
          className="flex flex-col justify-around w-1/4 border-2 border-black rounded-md items-center h-36"
        >
          <input
            type="text"
            name="login_id"
            placeholder="Username"
            required
            className="border-2 w-10/12 focus-visible:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border-2 w-10/12 focus-visible:outline-none"
          />
          <button
            type="submit"
            className="border-2 w-20 rounded-md bg-slate-200 hover:bg-slate-400 text-l"
          >
            Login
          </button>
        </form>
      </div>
      {auth == true && (
        <div className="flex flex-col">
          <Customer /> <CustomerList />
        </div>
      )}
    </div>
  );
}
