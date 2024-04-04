const TrendingGames = ({ gameList }) => {
  console.log(gameList);
  return (
    <div className="mt-4 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className=" md:grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {gameList.map((item, index) =>
          index < 4 ? (
            <div
              key={index}
              className="bg-[#76a8f75e] rounded-lg hover:scale-105 transition-all ease-out duration-300"
            >
              <img
                src={item.background_image}
                className="h-[270px] rounded-lg object-cover"
              />
              <h2 className="dark:text-white text-[15px] font-bold p-2 text-center">
                {item.name}
              </h2>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TrendingGames;
