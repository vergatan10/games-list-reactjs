import { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenresId from "../Components/GamesByGenresId";

const Home = () => {
  const [allGameList, setAllGameList] = useState([]);
  const [gameList, setGameList] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState('Action')

  useEffect(() => {
    getAllGamesList();
  }, []);
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
      setGameList(resp.data.results);
    });
  };

  const getGameListByGenresId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameList(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList
          setGenreId={(setGenreId) => getGameListByGenresId(setGenreId)}
          selectGenresName={(data) => setSelectedGenreName(data)}
        />
      </div>
      <div className="col-span-4 md:col-span-3 mx-3">
        {allGameList.length > 0 && getGameListByGenresId.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenresId gameList={gameList} selectedGenreName={selectedGenreName} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
