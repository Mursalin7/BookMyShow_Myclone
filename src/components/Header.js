import React, { useState } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [searchItem, setSearchItem] = useState("");
  const onChangeItem = item => {
      setSearchItem(item);
  }
  return (
    <div>
      <div className="header">
        <div className="header_logoclass">
          <Link to="/">
            <img
              className="header_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bookmyshow-logoid.png/800px-Bookmyshow-logoid.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <input
            type="text"
            className="SearchBox"
            onChange={e => onChangeItem(e.target.value)}
            value={searchItem}
            placeholder="Search for Movies,Events,Plays,Sport and Activities"
          />
        </div>
      </div>
      <div className="navbar">
        <ul>
          <Link to="/movies">
            <li>Movies</li>
          </Link>
          <Link to="/events">
            <li>Events</li>
          </Link>
          <Link to="/plays">
            <li>Plays</li>
          </Link>
          <Link to="/sports">
            <li>Sports</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
