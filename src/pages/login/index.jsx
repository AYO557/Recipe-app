import Button from "../../components/basic/button";
import TextField from "../../components/basic/textfield";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const logindata = {
      email,
      password,
    };

    console.log(logindata);
  };

  return (
    <form
      onSubmit={handleForm}
      className="w-1/2 font-semibold flex flex-col gap-5"
    >
      <h1 className="text-2xl font-extrabold text-center">SIGN IN</h1>

      <TextField
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        label="Your email"
        type="email"
        placeholder="Enter your email"
      />

      <TextField
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <p className="cursor-pointer">Recover Password</p>
      </div>

      <Button text="SIGN IN" />
    </form>
  );
}
