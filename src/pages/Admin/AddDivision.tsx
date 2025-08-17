import { AddDivisionModal } from "@/components/modules/Admin/Adddivision/AddDivisionModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllDivisionQuery } from "@/redux/features/Division/division.api";
import type { IDivision } from "@/types/division.type";
import { Trash2 } from "lucide-react";

const AddDivision = () => {
  const { data, isLoading, isError } = useGetAllDivisionQuery(undefined);
  const divisions = data?.data as IDivision[];
  console.log(divisions);
  return (
    <section>
      <div>
        <AddDivisionModal />
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Thumbnail</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            !isLoading &&
            !isError &&
            divisions.map((division) => (
              <TableRow key={division._id}>
                <TableCell className="font-medium">
                  <figure className="w-5 h-5 rounded-full">
                    <img src={division.thumbnail} alt="" />
                  </figure>
                </TableCell>
                <TableCell>{division.name}</TableCell>
                <TableCell>{division.description}</TableCell>
                <TableCell className="flex gap-5 items-center justify-end">
                  <Button>Update</Button>

                  <Button>
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default AddDivision;
