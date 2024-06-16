import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>This is the login page</div>
      <button>
        <Link to="/signup">SignUp</Link>
      </button>
    </>
  );
};

export default Login;
