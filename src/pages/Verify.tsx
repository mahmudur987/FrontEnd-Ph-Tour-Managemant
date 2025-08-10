import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { set, z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { cn } from "@/lib/utils";

export default function Verify() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email] = useState(location.state);
  const [confirm, setConfirm] = useState(false);

  const [timer, setTimer] = useState(10);

  const FormSchema = z.object({
    pin: z.string().min(6, {
      message: "Your one-time password must be 6 characters.",
    }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  const handleSentOtp = () => {
    setConfirm(true);
    setTimer(10);
  };

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email]);
  useEffect(() => {
    if (!email && !confirm) {
      return;
    }

    const startTimer = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(startTimer);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => {
      clearInterval(startTimer);
    };
  }, [email, confirm, timer]);

  return (
    <section className="grid min-h-svh place-items-center">
      {!confirm ? (
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Verify your account</CardTitle>
            <CardDescription>
              we will sent OTP to your email:{email}
            </CardDescription>
            <CardAction></CardAction>
          </CardHeader>

          <CardFooter className="flex-col gap-2">
            <Button onClick={handleSentOtp} type="submit" className="w-full">
              Confirm
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Verify your account</CardTitle>
            <CardDescription>
              we sent OTP to your email:{email} plese enter the OTP
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
                id="otp-form"
              >
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>One-Time Password</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormDescription>
                        Please enter the one-time password sent to your Email.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end w-full">
                  <Button
                    onClick={handleSentOtp}
                    variant={"link"}
                    type="button"
                    disabled={timer > 0}
                    className={cn("p-0", {
                      "pointer-events-none text-gray-500": timer > 0,
                      "text-blue-500": timer === 0,
                    })}
                  >
                    Resend OTP {timer > 0 && timer}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" form="otp-form" className="w-full">
              Submit
            </Button>
          </CardFooter>
        </Card>
      )}
    </section>
  );
}
