import { ConfirmDeleteModal } from "@/components/confirmDeleteModal";
import { AddTourTypeModal } from "@/components/modules/Admin/AddTourType/AddTourTypeModal";
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
import {
  useGetTourTypesQuery,
  useRemoveTourTypeMutation,
} from "@/redux/features/Tour/tour.api";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

const AddTourType = () => {
  const {
    data: tourTypes,
    isLoading,
    isError,
  } = useGetTourTypesQuery(undefined);
  const [deleteTourType] = useRemoveTourTypeMutation();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteTourType(id);
      console.log(res);
      toast.success("Tour Type deleted successfully");
    } catch (error: any) {
      console.log(error);

      toast.error(error?.data?.message || "Something went wrong");
    }
  };
  return (
    <div>
      <div className="flex justify-end">
        <AddTourTypeModal />
      </div>

      <Table className=" max-w-4xl  w-full mx-auto border my-10 px-2 p-5 rounded-2xl">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="flex justify-between">
            <TableHead className="w-[100px] text-xl font-bold">Name</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tourTypes &&
            !isLoading &&
            !isError &&
            tourTypes.data.map((tourType) => (
              <TableRow className="flex justify-between" key={tourType._id}>
                <TableCell className="font-medium">{tourType.name}</TableCell>
                <TableCell className="text-right">
                  <ConfirmDeleteModal
                    onConfirm={() => handleDelete(tourType._id)}
                  >
                    <Button variant="destructive">
                      <Trash2 size={20} />
                    </Button>
                  </ConfirmDeleteModal>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AddTourType;
