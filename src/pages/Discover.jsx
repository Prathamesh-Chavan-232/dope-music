import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {
  let genreTitle = "Pop";
  let songs = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col">
      {/* Flexbox */}
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt4 mb-10">
        {/* Page Title */}
        <h2 className=" font-bold txt-3xl text-left text-white">
          Discover {genreTitle}
        </h2>

        {/* Select genres */}
        <select
          // onChange={()=>{}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
        {/* Song card */}
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {songs.map((song, index) => (
            <SongCard key={song.key} value={song} i={index}></SongCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
