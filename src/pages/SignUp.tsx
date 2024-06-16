import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div>This is the signup page</div>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </>
  );
};

export default SignUp;
