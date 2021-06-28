import './App.css';
import React from "react";
import Header from "./components/Header/Headers";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";

import {dialogs} from "./index";
import {messages} from "./index";
import {posts} from "./index";

const App = (props) => {
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header />
                    <Navbar />
                    <div className="app-wrapper-content">
                        <Route path='/dialogs' render={ () =>
                            <Dialogs
                                dialogs={dialogs}
                                messages={messages}
                            />
                        }/>
                        <Route path='/profile' render={ () =>
                            <Profile
                                posts={posts}
                            />
                        }/>
                        <Route path='/news' component={News}/>
                        <Route path='/musics' component={Musics}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
;


export default App;
