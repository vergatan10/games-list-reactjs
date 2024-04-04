import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = ({ setGenreId, selectGenresName }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  });

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genres</h2>
      {genreList.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-400 p-2 rounded-lg hover:dark:bg-gray-500 group
            ${activeIndex == index && "bg-gray-400 dark:bg-gray-600"}`}
            onClick={() => {
              setActiveIndex(index);
              setGenreId(item.id);
              selectGenresName(item.name);
            }}
          >
            <img
              src={item.image_background}
              alt={item.name}
              className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300
              ${activeIndex == index && "scale-105"}`}
            />
            <h3
              className={`dark:text-white group-hover:font-bold text-[20px] transition-all ease-out duration-300
            ${activeIndex == index && "font-bold"}`}
            >
              {item.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default GenreList;
