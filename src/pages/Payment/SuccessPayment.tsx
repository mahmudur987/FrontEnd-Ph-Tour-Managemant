import { Link } from "react-router";

const SuccessPayment = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Payment Successful</h2>
      <p className="text-gray-500 mb-6">
        Your payment has been processed successfully.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        <Link to={"/"}>Home</Link>
      </button>
    </div>
  );
};

export default SuccessPayment;
