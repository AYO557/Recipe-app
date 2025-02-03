import Button from "../../components/basic/button";
import TextField from "../../components/basic/textfield";

export default function Signup() {
  return (
    <form className="w-1/2 font-semibold flex flex-col gap-5">
      <h1 className="text-2xl font-extrabold text-center">SIGN UP</h1>

      <TextField
        label="Your email"
        type="email"
        placeholder="Enter your email"
      />

      <TextField
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <TextField
        label="Confirm Password"
        type="password"
        placeholder="Enter your password"
      />

      <Button text="SIGN UP" />
    </form>
  );
}
