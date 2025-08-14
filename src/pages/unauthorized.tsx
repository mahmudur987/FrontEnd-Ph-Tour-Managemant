import { Link } from "react-router";

const Unauthorized = () => {
  return (
    <div className="text-center ">
      unauthorized Component
      <br />
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Unauthorized;
