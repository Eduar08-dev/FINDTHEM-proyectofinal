import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialButtons = () => {
  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 translate-x-1/2">
      <div className="flex flex-col items-center space-y-4 bg-yellow-500 p-2 rounded-l-md shadow-lg origin-right hidden md:flex">
        {/* Botón de Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors"
        >
          <FaFacebookF size={24} />
        </a>
        
        {/* Botón de Twitter */}
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
        >
          <FaTwitter size={24} />
        </a>
        
        {/* Botón de Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
}

export default SocialButtons;