const FailedPayment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Payment Failed</h1>
      <p className="mt-4 text-lg text-gray-600">
        Sorry, your payment was not successful. Please try again later.
      </p>
    </div>
  );
};

export default FailedPayment;
