import "../components/homepage.css";
import { FaRandom,FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import { getRandomData } from "../api/api";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiLogInCircle } from "react-icons/bi";
import { UsersProvider } from "../App";

const NavButtonGroup = () => {
  const [randAnimeId, setRandAnimeId] = useState();
  const {users,setUsers} = useContext(UsersProvider)

  useEffect(() => {
    async function getDetails() {
      const res = await getRandomData();
      setRandAnimeId(res.data?.mal_id);
    }

    getDetails();
    return setRandAnimeId();
  }, []);

  return (
    <section className="d-flex name">
      <Link
        style={{ textDecoration: "none", width: "100%" }}
        to={`/animeDetail/${randAnimeId}`}
      >
        <button className="nav-btns ">
          <FaRandom style={{ blockSize: "12px", margin: "5px 5px 0 0" }} />
          Random
        </button>
      </Link>
      <Link
        to={`/watchList`}
        style={{ textDecoration: "none", width: "100%"  }}
      >
        <button className="nav-btns">
          <span className="add">
            <IoIosAddCircleOutline />
          </span>
          WatchList
        </button>
      </Link>
   <Link
        to={`/srchResult`}
        style={{ textDecoration: "none", width: "100%"  }}
      >
        <button className="nav-btns d-flex align-items-center">
          <span className="add">
            <FaSearch />
          </span>
          Search
        </button>
      </Link>
      {(users === '')?<Link
         to={`/loginPage`}
         style={{ textDecoration: "none", width: "100%"  }}
      >
        <button className="nav-btns d-flex align-items-center">
          <span className="add">
            <BiLogInCircle />
          </span>
          SignIn
        </button>
      </Link>
      :
      <button className="nav-btns d-flex align-items-center"
      onClick={() => setUsers("")}>
          <span className="add">
            <BiLogInCircle />
          </span>
          SignOut
        </button>
      }
      
    
    </section>
  );
};

const NavBar = () => {
  const [srchValue, setSrchValue] = useState("");
  const [showSearch, setShowSearch] = useState(true)

  useEffect(()=> {
    window.addEventListener('resize', () => {
      let winWidth = window.innerWidth;
      if(winWidth <= 590)
        setShowSearch(false)
      else
        setShowSearch(true)

        
    })
  },[])

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <nav className="navbar navbar-expand-md show-top-nav navbar-dark">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navbar-brand fw-bold web-name d-flex align-items-center">
            <img
              className="web-icon"
              src="https://i.pinimg.com/564x/b4/c4/84/b4c484a289f0b065b471f13275be917a.jpg"
            />
            AnimePlay
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse collapse-nav"
          id="navbarSupportedContent"
        >
          <div className="nav-item d-flex align-items-center name">
            <NavButtonGroup />
          </div>


          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
