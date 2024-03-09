import { FaChevronDown } from "react-icons/fa6";

function NavButton({ children, open, setOpen }) {
  return (
    <button
      className={`hidden sm:flex gap-2 items-center hover:text-primary-blue ${
        open && "text-primary-blue"
      } transition-all`}
      onClick={() => {
        setOpen((state) => !state);
      }}
    >
      {children}
      <FaChevronDown
        className={`text-gray-400 transition-all ${open && "rotate-180"}`}
      />
    </button>
  );
}

export default NavButton;
