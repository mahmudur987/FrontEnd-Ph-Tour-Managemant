import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CancelledPayment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-12 bg-gray-100">
      <Card className="p-5">
        <CardHeader>
          <CardTitle>Cancelled Payment</CardTitle>
        </CardHeader>
        <div>
          <p>
            Oops! Your payment has been cancelled. Don't worry, your account is
            still in good standing.
          </p>
          <p>
            If you believe this was an error, please contact support. Otherwise,
            you can try again at any time.
          </p>
        </div>
        <CardFooter>
          <Button>Go to Billing</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CancelledPayment;
