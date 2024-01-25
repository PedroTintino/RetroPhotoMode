import { Link } from "react-router-dom";

function CreateUser() {
  return (
    <form className="flex flex-col justify-center gap-10 p-6 rounded text-black">
      <input
        type="text"
        required
        className="rounded p-3"
        placeholder="Username"
        onChange={(e) => {
        setEmail(e.target.value);
        }}
      />
      <input
        type="email"
        required
        className="rounded p-3"
        placeholder="Type your email"
        onChange={(e) => {
        setPassword(e.target.value);
        }}
      />
      <input
        type="email"
        required
        className="rounded p-3"
        placeholder="Type your email again"
        onChange={(e) => {
        setPassword(e.target.value);
        }}
      />
      <input
        type="password"
        required
        className="rounded p-3"
        placeholder="Type your password"
        onChange={(e) => {
        setPassword(e.target.value);
        }}
      />
      <button className="rounded p-3 text-white bg-purple-800 font-semibold hover:bg-purple-700">
        Entrar
      </button>
      <a className="text-white text-center"><Link to='/'>or return home</Link></a>
    </form>
  );
}
export default CreateUser;
