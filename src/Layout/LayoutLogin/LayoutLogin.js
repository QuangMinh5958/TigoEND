import { useState } from "react";
import datas from "../../datas";
import { useNavigate } from "react-router-dom";

const LayoutLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);

  console.log("email", email);
  console.log("password", password);

  const handleSubmit = () => {
    let checkEmail = datas.accoutID.some((value) => value.email === email);
    let checkPassword = datas.accoutID.some(
      (value) => value.password === password
    );

    console.log(checkEmail);

    if (!checkEmail) {
      setEmailError(checkEmail);
      return;
    } else if (!checkPassword) {
      setPasswordError(checkPassword);
      return;
    } else {
      navigate("/");
    }
  };

  return (
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
        className="h-99 w-96 bg-cover bg-center bg-no-repeat rounded-md"
      >
        <div className="flex flex-col px-6 py-10 text-hr">
          <div className="flex justify-center mb-10">
            <p>My Accout</p>
          </div>
          <input
            style={{ backgroundColor: "#f4ebca" }}
            className="h-8 rounded-sm text-[#5c5d51]"
            type="email"
            placeholder="email..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!emailError) setEmailError(true);
            }}
          />
          {!emailError && (
            <p className="text-[#fe0000] text-xs">email does not exist</p>
          )}
          <input
            style={{ backgroundColor: "#f4ebca" }}
            className="h-8 rounded-sm mt-5 mb-10 text-[#5c5d51]"
            type="password"
            placeholder="passwork..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!passwordError && (
            <p className="text-[#fe0000] text-xs">email does not exist</p>
          )}
          <div
            onClick={handleSubmit}
            className="bg-[#5c5d51] flex justify-center items-center rounded-sm py-1 cursor-pointer"
          >
            <div className="text-hr">logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutLogin;
