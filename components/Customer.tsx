import { getData } from "@/actions/action";
import { Customer } from "../types/index";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteCustomer from "./deleteCustomer";
import EditCustomer from "./EditCustomer";

export async function Customer() {
  const data = await getData();
  return (
    <div className="flex flex-col items-center">
      <div>Customer List</div>
      <Table className="w-1/2 mt-2 ml-8">
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="">City</TableHead>
            <TableHead className="">State</TableHead>
            <TableHead className="">Email</TableHead>
            <TableHead className="">Phone</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((Customer: Customer) => (
            <TableRow key={Customer.uuid}>
              <TableCell className="font-medium">
                {Customer.first_name}
              </TableCell>
              <TableCell className="font-medium">
                {Customer.last_name}
              </TableCell>
              <TableCell className="font-medium">{Customer.address}</TableCell>
              <TableCell className="font-medium">{Customer.city}</TableCell>
              <TableCell className="font-medium">{Customer.state}</TableCell>
              <TableCell className="font-medium">{Customer.email}</TableCell>
              <TableCell className="font-medium">{Customer.phone}</TableCell>
              <TableCell>
                <EditCustomer id={Customer.uuid} />
                <DeleteCustomer id={Customer.uuid} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
