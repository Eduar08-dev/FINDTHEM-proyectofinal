const DonationButton = () => {
    return (
      <a
        href="/donaciones"
        className="fixed top-0 right-0 transform z-50 mr-9 "
      >
        <button
          className="bg-yellow-400 font-sans hover:bg-yellow-500 hover:text-white font-bold p-7 rounded-lg shadow-lg transition-colors duration-200 uppercase tracking-wide text-xl hidden md:block"
        >
          Donaciones
        </button>
      </a>
    );
  };
  
  export default DonationButton;