import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-2">
      <p className="text-base">bubble.agenciacreativa@gmail.com</p>
      <p className="text-base">+54 261 xxx xxxx</p>
      <Link href="/contact" className="text-sm ">
        Contacto
      </Link>
      <div className="flex gap-4 mt-2">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={24} className="hover:text-pink-400 transition" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} className="hover:text-blue-400 transition" />
        </a>
      </div>
    </div>
  );
}
