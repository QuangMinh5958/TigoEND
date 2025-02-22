import { useState } from "react";
import datas from "../../datas";
import { useNavigate } from "react-router-dom";

const LayoutLogin = () => {
  let token = localStorage.getItem("token");

  console.log(token);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);

  if (token) {
    return navigate("/");
  }

  const handleSubmit = () => {
    let checkEmail = datas.accoutID.some((value) => value.email === email);
    let checkPassword = datas.accoutID.some(
      (value) => value.password === password
    );

    if (!checkEmail) {
      setEmailError(checkEmail);
      return;
    } else if (!checkPassword) {
      setPasswordError(checkPassword);
      return;
    } else {
      localStorage.setItem("token", "token");
      navigate("/");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div
        className="flex justify-center items-center h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://anhdepfree.com/wp-content/uploads/2022/09/background-black-gold-luxury_19534958102.jpg')",
        }}
      >
        <div
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/9d8ed5_2f6560dd528445bf8d0103d414a9d9de~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/9d8ed5_2f6560dd528445bf8d0103d414a9d9de~mv2.jpg",
          }}
          className="h-[400px] w-96 bg-cover bg-center bg-no-repeat rounded-md"
        >
          <div className="flex flex-col px-6 py-10 text-hr">
            <div className="flex justify-center mb-10">
              <p>My Accout</p>
            </div>
            <input
              style={{ backgroundColor: "#f4ebca" }}
              className="h-8 rounded-sm text-[#5c5d51] pl-2"
              type="email"
              placeholder="email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (!emailError) setEmailError(true);
              }}
            />
            {!emailError && (
              <p className="text-[#fe0000] text-xs">Email does not exist</p>
            )}
            <input
              style={{ backgroundColor: "#f4ebca" }}
              className="h-8 rounded-sm mt-5 text-[#5c5d51] pl-2"
              type="password"
              placeholder="passwork..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!passwordError && (
              <p className="text-[#fe0000] text-xs">Password incorrect</p>
            )}
            <button
              onClick={handleSubmit}
              className="bg-[#5c5d51] flex justify-center mt-10 items-center rounded-sm py-1 cursor-pointer"
            >
              <div className="text-hr">logout</div>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LayoutLogin;
