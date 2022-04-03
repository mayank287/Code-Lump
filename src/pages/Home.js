import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import codezump from "../images/codezump.png"
import  mainsvg from "../images/main.svg"


const Home = () => {
    const navigate = useNavigate();
  
    

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success("New Room Created");
 
      
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <div className="homePageWrapper">
            
                <img src={mainsvg} className = "svg-image"/>
               
            
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src={codezump}
                    alt="code-sync-logo"
                    height="200px"
                />
                <h4 className="mainLabel">Paste Invitation Room-ID Below</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Room ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a
                            onClick={createNewRoom}
                            href=""
                            className="createNewBtn"
                        >
                            new room
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Built with 💛 &nbsp; by &nbsp;
                    <a href="https://github.com/mayank287" target="_blank">Mayank Arora</a>
                </h4>
            </footer>
        </div>
    );
};

export default Home;
