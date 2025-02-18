import Button from "../../components/basic/button";
import TextField from "../../components/basic/textfield";
import { useEffect, useState } from "react";
import SwitchAuthRoute from "../../components/basic/switchroute";
import { useNavigate } from "react-router-dom";
import findUser from "../../services/checkUser";
import handleError from "../../utils/handleError";

export default function Login() {
  const navigate = useNavigate();

  // retreive the user inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle responses
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  // toggle button disabled
  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const handleForm = async (e) => {
    e.preventDefault();

    // setIsLoading(true);
    // setIsDisabled(true);

    async function loginUser() {
      try {
        const res = await findUser(email, password);
        const user = res;
        console.log(user);

        if (user === "valid password") {
          localStorage.user = JSON.stringify(user);
          navigate("/");
        } else {
          throw new Error("Invalid password");
        }
      } catch (err) {
        handleError(err.message, setError, setIsDisabled, setIsLoading);
      }
    }

    loginUser();
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

      {isLoading ? (
        <Button text="loading..." />
      ) : (
        <Button isDisabled={isDisabled} text="SIGNIN" />
      )}
      {error && <p className="text-red-200">{error}</p>}

      <SwitchAuthRoute question="Don't have an account?" link="signup" />
    </form>
  );
}
