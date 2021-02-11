import React from "react";
import { useHistory } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

function Header() {
  const history = useHistory();
  const images = [
    {
      url:
        "https://upload.wikimedia.org/wikipedia/en/4/46/Comicstaan_poster.jpg",
    },
    {
      url:
        "https://i.pinimg.com/236x/b1/9e/d1/b19ed1b3817f68bbb3e992ff2f88650a.jpg",
    },
  ];
  const selectedEvent = (id) => {
    const name="Comicstaan";
    const url="https://upload.wikimedia.org/wikipedia/en/4/46/Comicstaan_poster.jpg"
    history.replace({
      pathname: `/movies/${name}`,
      state: { name,url }
    })
  };
  return (
    <div>
      <div>
        <SimpleImageSlider width={1000} height={400} images={images} onClick={(idx) => selectedEvent(idx)} />
      </div>
    </div>
  );
}

export default Header;
