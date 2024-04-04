const GamesByGenresId = ({ gameList, selectedGenreName }) => {
  console.log(gameList);
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        {selectedGenreName} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {gameList.map((item, index) => (
          <div
            key={index}
            className="bg-[#76a8f75e] p-2 rounded-lg hover:scale-110 transition-all ease-out duration-300 cursor-pointer"
          >
            <img
              src={item.background_image}
              alt=""
              className="w-full h-[150px] rounded-xl object-cover"
            />
            <h2 className="text-[15px] dark:text-white font-bold text-black">
              {item.name}
              <span className="bg-green-100 text-green-700 font-medium text-[10px] ml-2 rounded-sm">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-400 dark:text-gray-300">
              ⭐{item.rating} 💭{item.reviews_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesByGenresId;
