const songs = [
  {
    id: 1,
    penyanyi: "John Lennon",
    namaLagu: "Here We Comes",
    Band: "The Beatles",
    gambar: "./The Beatleas.jpeg",
  },
  {
    id: 2,
    penyanyi: "Mick Jagger",
    namaLagu: "Paint It, Black",
    Band: "The Rolling Stones",
    gambar: "./Rolling.jpg",
  },
  {
    id: 3,
    penyanyi: "Ariel Noah",
    namaLagu: "Menghapus Jejakmu",
    Band: "Noah",
    gambar: "Noah.jpg",
  },
  {
    id: 4,
    penyanyi: "Ahmad Dhani",
    namaLagu: "Arjuna",
    Band: "Dewa 19",
    gambar: "Dewa 19.jpg",
  },
  {
    id: 5,
    penyanyi: "Charly Van Houten",
    namaLagu: "Cari Pacar Lagi",
    Band: "ST12",
    gambar: "St12.jpeg",
  },
];

const MyList = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-gray-900 text-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={song.gambar}
              alt={song.band}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold font-music">{song.namaLagu}</h2>
            <p className="text-gray-400 mb-10 font-music">{song.Band}</p>
            <div className="flex justify-center">
              <button
                onClick={() =>
                  alert(
                    `Penyanyi  : ${song.penyanyi}\nBand        : ${song.Band}\nJudul        : ${song.namaLagu}`
                  )
                }
                className="items-center bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white px-4 py-1 rounded-full hover:bg-green-700 transition-colors duration-300 font-music"
              >
                Lihat Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
