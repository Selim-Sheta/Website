import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="border-t p-6 flex justify-center space-x-6 bg-black/70">
        <a
          href="https://github.com/Selim-Sheta"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-style"
        >
          <FaGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/selim-sheta/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-style"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
        <a
          href="https://www.youtube.com/@mjrmls"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-style"
        >
          < FaYoutube className="w-8 h-8" />
        </a>
        <Link href="/contact" className="nav-style">
            <FaEnvelope className="w-8 h-8" />
        </Link>
        
      </footer>
    );
}