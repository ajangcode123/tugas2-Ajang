const Header = () => {
  const name = "Ajang";

  return (
    <header className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 p-10 shadow-xl rounded-b-lg">
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full">
          <h1 className="text-5xl font-extrabold text-white text-center mb-2" style={{ fontFamily: 'Rock Salt, cursive' }}>
            Daftar Lagu
          </h1>
          <div className="text-2xl font-semibold text-white py-1 px-5 rounded-lg flex items-center" style={{ fontFamily: 'Concert One, cursive' }}>
            Welcome {name ? name : "Tanpa Nama"}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
