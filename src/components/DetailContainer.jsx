import React, { useState,useEffect,useContext } from "react";
import "../components/detailPageSty.css";
import {
  FaInstagram,
  FaFacebook,
  FaReddit,
  FaTelegram,
  FaRegPlayCircle,
} from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { getWatchList,addToList } from "../api/userInfo";
import { setWatchId,removeWatchItem } from "../api/userInfo";
import { useNavigate } from "react-router-dom";
import { UsersInfo } from "../pages/AnimeDetailPage";
import { add } from "lodash";

const DetailCard = ({ cardDetails }) => {
  return (
    <div className="detail-card d-flex flex-column align-items-center h-100">
      <img
        src={cardDetails?.images?.jpg.large_image_url}
        className="card-img-top rounded"
        alt="..."
      />
      <button className="manga-btn rounded text-white">Read manga</button>
    </div>
  );
};

const DescCard = ({ Descdetails }) => {
  return (
    <div className="anime-desc d-flex flex-column justify-content-between">
      <h6 className="">
        Japanese :{" "}
        <span className="small-text text-dark">
          {Descdetails?.title_japanese}
        </span>
      </h6>
      <h6 >
        Aired :{" "}
        <span className="small-text text-dark">{`${
          Descdetails?.aired?.from?.slice(0, 10) || "unknown"
        } to ${Descdetails?.aired?.to?.slice(0, 10) || "unknown"}`}</span>
      </h6>
      <h6 >
        Premiered :{" "}
        <span className="small-text text-dark">{Descdetails?.year}</span>
      </h6>
      <h6 >
        Rank : <span className="small-text text-dark">{Descdetails?.rank}</span>
      </h6>
      <h6 >
        Status :{" "}
        <span className="small-text text-dark">{Descdetails?.status}</span>
      </h6>
      <h6 >
        Episodes :{" "}
        <span className="small-text text-dark">{Descdetails?.episodes}</span>
      </h6>
      <h6 >
        Source :{" "}
        <span className="small-text text-dark">{Descdetails?.source}</span>
      </h6>
      <h6 >
        Season :{" "}
        <span className="small-text text-dark">{Descdetails?.season}</span>
      </h6>
      <h6 >
        Duration :{" "}
        <span className="small-text text-dark">{Descdetails?.duration}</span>
      </h6>
    </div>
  );
};

const Synophsis = ({ details }) => {
  return (
    <div className="synophsis fs-5 fw-bold">
      Synopsis
      <br />
      <span className="synopsis text-dark fw-normal small-text">{`${details?.synopsis}`}</span>
    </div>
  );
};

const ButtonGroup = ({ id,list,users }) => {
  const navigate = useNavigate()

 let isAdded =list &&  list.some(item => item?.mal_id === id?.mal_id)
  return (
    <div className="button-group d-flex flex-column">
      <div className="watch-list">
        <button className="group-btn text-white">
          <FaRegPlayCircle /> Watch Now
        </button>
        {isAdded?
        <button 
        onClick={() => {
            removeWatchItem(users,id);
            navigate("/watchList")
        }}
        
        className="group-btn text-white bg-dark" >Remove</button>
        :<button
        onClick={() => {

             (users != '') && addToList(users,id);
             navigate("/watchList")
        }}
        className="group-btn text-white bg-dark"
      >
        
        <span className="add1">
          <IoIosAddCircleOutline />
        </span>
        Add to List
      </button>
        }
        {/* <button
        onClick={() => {
          setTimeout(() => {
            setWatchId(id);
          }, 2000);
        }}
        className="group-btn text-white bg-dark"
      >
        
        <span className="add1">
          <IoIosAddCircleOutline />
        </span>
        Add to List
      </button> */}
        
      </div>
      <div className="share-btn d-flex gap-2 align-items-center">
        <p className="fw-bold">Share with your friends </p>
        <button className="btn1">
          <FaInstagram />
        </button>
        <button className="btn2">
          <FaFacebook />
        </button>
        <button className="btn3">
          <FaReddit />
        </button>
        <button className="btn4">
          <FaTelegram />
        </button>
      </div>
    </div>
  );
};

const DetailContainer = ({ data }) => {
  
  const [localList,setLocalList] = useState()
  const {users,setUsers} = useContext(UsersInfo)
  useEffect(()=>{
    if(users != '') {
      const list = getWatchList(users);
      setLocalList([...list])
    }
    
  },[])


  return (
    <div className="detail-container container-fluid d-flex flex-column justify-items-around">
      <h2 className="gradient-header">{data?.title}</h2>
      <section className="card-detail-wrapper">
        <DetailCard cardDetails={data} />
        <ButtonGroup id={data}  list = {localList} users = {users} />
        <DescCard Descdetails={data} />
      </section>
      <Synophsis details={data} />
    </div>
  );
};

export default DetailContainer;
