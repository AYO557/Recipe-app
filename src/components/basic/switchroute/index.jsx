import { Link } from "react-router-dom";

export default function SwitchAuthRoute({ question, link }) {
  return (
    <div className="flex justify-center items-center gap-4">
      <p>{question}</p>
      <Link
        to={`${link === "signin" ? "/auth" : `/auth/${link}`}`}
        className="hover:text-amber-600"
      >
        {link}
      </Link>
    </div>
  );
}
