import { Link } from "react-router-dom";

function LinkButton({ children, to, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
