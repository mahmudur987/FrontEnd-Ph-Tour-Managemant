/* eslint-disable @typescript-eslint/no-explicit-any */
import SingleFileUploader from "@/components/SingleFileUploader";
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
import { Textarea } from "@/components/ui/textarea";
import { useCreateDivisionMutation } from "@/redux/features/Division/division.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export function AddDivisionModal() {
  const [createDivision] = useCreateDivisionMutation();

  const [files, setFiles] = useState<File | null>(null);

  const [openModal, setOpenModal] = useState(false);
  const Schema = z.object({
    name: z.string(),
    description: z.string(),
  });

  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(JSON.stringify(data));
    console.log(files);
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({ name: data.name, description: data.description })
    );
    formData.append("file", files as File);
    try {
      const res = await createDivision(formData).unwrap();
      console.log(res);
      setOpenModal(false);
      if (res.success) {
        toast.success(res.message || "Division created successfully");
      }
    } catch (err: any) {
      console.error(err);

      toast.error(err?.data?.message || "Something went wrong");
    }

    // form.reset();
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setOpenModal(true)}>
            Add Division
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add new Division</DialogTitle>
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
                    <FormLabel>Division name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter division name"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="write description"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>

            <SingleFileUploader onChange={setFiles} />
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
