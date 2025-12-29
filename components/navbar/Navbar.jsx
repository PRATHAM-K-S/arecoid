import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex mx-6 justify-between items-center">
      <span className="flex py-3">
        <Image src="/nav/arecoid_logo.png" alt="Arecoid Logo" width={105.12} height={100} />
      </span>
      <button className="px-3 py-3">
        <Image src="/nav/arecoid_ham_menu.png" alt="Arecoid Logo" width={24} height={24} />
      </button>
    </nav>
  );
}