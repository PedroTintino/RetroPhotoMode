import CreateUser from "../components/CreateUser";

function CreateAccount() {
  return (
    <div className="mainContainer flex max-h-screen h-screen w-[100vw] bg-black text-white">
      <div className="infoContainer hidden bg-purple-800 text-white w-[40%] text-left md:flex items-center justify-center">
        <div className="w-40">
          <p className="text-5xl font-semibold">
            <span className="font-bold">Wellcome,</span> you are just a few steps away from creating your own design.
          </p>
        </div>
      </div>
      <div className="newUserForm w-[100%] m6-7 md:w-[60%] p-5 max-h-screen mt-0">
        <h2 className="text-3xl font-semibold text-center uppercase">Create an account</h2>
        <CreateUser />
      </div>
    </div>
  );
}
export default CreateAccount;