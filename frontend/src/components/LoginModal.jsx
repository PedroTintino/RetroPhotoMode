import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginModal() {
  const navigate = useNavigate();  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const baseUrl = "http://localhost:3337";
  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate('/home');
    } catch (error) {
      console.error("Auth error:", error);
    }
  };
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-md">
        {/*content*/}
        <div className="p-5 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 text-white outline-none focus:outline-none">
          {/*header*/}
          <div className="p-3 border-solid border-blueGray-200 rounded-t text-center">
            <h3 className="text-3xl font-semibold">Log in</h3>
          </div>
          {/*body*/}
          <div className="relative p-2 flex-auto">
            <span>Please enter your login credentials!</span>
            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
              <form
                className="text-center flex flex-col gap-5"
                onSubmit={handleSubmit}
              >
                <input
                  className="border-purple-500  bg-transparent border-2 p-1 rounded"
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  className="border-purple-500 bg-transparent border-2 p-1 rounded"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button
                  className="bg-purple-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Enter
                </button>
              </form>
            </p>
            <div className="text-center">
              <span>Don't you have an account?</span>
              <br />
              <Link to="/createAccount">
                <button className="text-purple-500">Create an account</button>
              </Link>
            </div>
          </div>
          {/*footer*/}
        </div>
      </div>
    </div>
  );
}
export default LoginModal;
