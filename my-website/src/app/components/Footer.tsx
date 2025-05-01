import { FaGithub, FaLinkedin, FaYoutube} from 'react-icons/fa';

export default function Footer() {
    return (
      <footer className="border-t p-6 flex justify-center space-x-6 bg-black/70">
        <a
          href="https://github.com/Selim-Sheta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black"
        >
          <FaGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/selim-sheta/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
        <a
          href="https://www.youtube.com/@mjrmls"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black"
        >
          < FaYoutube className="w-8 h-8" />
        </a>
        
      </footer>
    );
}