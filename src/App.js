import logo from "./twitter.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { CgSearchLoading } from "react-icons/cg";
import axios from "axios";
import profile from "../src/profile.png";
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [spaces, setSpaces] = useState([]);
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("nft");
  const [state, setState] = useState("live");
  const [sortt, setSortt] = useState(1);
  const [isLoading , setLoading] = useState(true)
  const [err , setErr] = useState(false)

  useEffect(() => getTrends(), [keyword, state,sortt]);
  useEffect(() => listTrends(), [sortt]);
 
 
  function getTrends() {
    axios
      .get("/api/spaces", {
        params: {
          keyword,
          state,
        },
      })
      .then((response) => {
        //console.log(response.data.includes.users)
        setUsers(response.data.includes.users);
        setSpaces(response.data.data);
        setLoading(false)
        console.log(response.data)
      })
      .catch((error) => {
        setErr(true)
        console.log(error.message)
      });
  }

  function handleSearch() {
    let mango = document.querySelector(".keyword").value
    setKeyword(mango);
    setErr(false)
    document.querySelector(".keyword").value = ""
  }

  function sortFunction(node){
     if(node == 3){
        spaces.sort((a, b) => {
          return b.participant_count - a.participant_count;
          });
     }else if(node == 2){
        spaces.sort((a, b) => {
          return a.scheduled_start - b.scheduled_start;
          });
     }else if (node == 1){
         
     }
  }

  function listTrends() {
    sortFunction(sortt);
    return ( err ? (<h5 className="loading">No Results</h5>) :(isLoading ?(<h5 className="loading">loading...</h5>) :(
      <div className="space-grid">
        {spaces.map((space, id) => {
          return (
            <div className="container" key={id} data-aos="fade-up">
              <a
                href={"https://twitter.com/i/spaces/" + space.id}
                target="_blank"
                className="space-link"
              >
                <div className="space-up">
                  <h4>{space.title}</h4>
                  <span className="status">
                    {space.state === "live"
                      ? space.participant_count + " Participants"
                      : new Date(space.scheduled_start).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}
                  </span>
                </div>
              </a>
              <div className="space-bottom">
                <a
                  href={"https://twitter.com/" + users[id]?.username}
                  className="user-box"
                >
                  <img
                    src={users[id]?.profile_image_url === undefined ? profile : users[id]?.profile_image_url }
                    alt="dp"
                    className="profile-img"
                  />
                  <div>
                    <p className="userName">{users[id]?.name}</p>
                    <p className="userId">{users[id]?.username === undefined ? "" : "@" + users[id]?.username}</p>
                  </div>
                </a>
                <span className="participants">{space.state}</span>
              </div>
            </div>
          );
        })}
      </div>
    )))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="twitter-logo" />
        <h3>Twitter Spaces</h3>
      </header>
      <div className="menu" data-aos="fade-up">
        <input name="keyword" className="keyword" placeholder="Search topics" />
        <div className="search" onClick={handleSearch}>
          <CgSearchLoading size={22}/>
        </div>
      </div>
      <div className="keyword-btns" data-aos="fade-up">
        <button
          className="key-btn"
          value="nft"
          onClick={(e) => {
            setKeyword(e.target.value)
            setLoading(true)
            setErr(false)}}
        >
          nft
        </button>
        <button
          className="key-btn"
          value="crypto"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          crypto
        </button>
        <button
          className="key-btn"
          value="web3"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          web3
        </button>
        <button
          className="key-btn"
          value="open source"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          open source
        </button>
        <button
          className="key-btn"
          value="fun"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          fun
        </button>
        <button
          className="key-btn"
          value="covid"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          covid
        </button>
        <button
          className="key-btn"
          value="career"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          career
        </button>
        <button
          className="key-btn"
          value="finance"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          finance
        </button>
        <button
          className="key-btn"
          value="health"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          health
        </button>
        <button
          className="key-btn"
          value="tech"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          tech
        </button>
        <button
          className="key-btn"
          value="chill"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          chill
        </button>
        <button
          className="key-btn"
          value="metaverse"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          metaverse
        </button>
        <button
          className="key-btn"
          value="music"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          music
        </button>
        <button
          className="key-btn"
          value="project"
          onClick={(e) => {
            setKeyword(e.target.value)
            setErr(false)
            setLoading(true)}}
        >
          project
        </button>
      </div>

      <div className="state-btns" data-aos="fade-up">
        <button className="clicked" value="live"
          onClick={(e) =>{
             setState(e.target.value);
             e.target.style.color = "#009dff"
             setLoading(true)
             setErr(false)
             document.querySelector(".btn").style.color = "gray"
             document.querySelector(".participant").style.display = "block"
          }}>Live</button>
        <button className="btn" value="scheduled"
          onClick={(e) =>{
             setState(e.target.value);
             e.target.style.color = "#009dff"
             setLoading(true)
             setErr(false)
             document.querySelector(".clicked").style.color = "gray"
             document.querySelector(".participant").style.display = "none"
          }}>Scheduled</button>
        <select className="sortable" onChange={(e) => setSortt(e.target.value)}>
          <option value="1">by default</option>
          <option value="2">by starting time</option>
          <option value="3" className="participant">by participant count</option>
        </select>
      </div>
      <div className="content">{listTrends()}</div>

      <h4 className="credits">Made with ❤️ by <a href="https://twitter.com/Sudhanss_u" target="_blank" className="me-twitter">Sudhanshu Ranjan</a></h4>
    </div>
  );
}

export default App;
