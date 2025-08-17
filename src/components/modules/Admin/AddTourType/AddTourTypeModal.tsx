/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateTourTypeMutation } from "@/redux/features/Tour/tour.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export function AddTourTypeModal() {
  const [createTourType] = useCreateTourTypeMutation();
  const [openModal, setOpenModal] = useState(false);
  const Schema = z.object({
    name: z.string(),
  });

  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await createTourType({
        name: data.name,
      }).unwrap();
      console.log(res);
      setOpenModal(false);
      if (res.success) {
        toast.success(res.message || "Tour Type created successfully");
      }
    } catch (err: any) {
      console.error(err);

      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setOpenModal(true)}>
            Add Tour Type
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Write tour type name</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              id="tourType-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>tour Type name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" form="tourType-form">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
