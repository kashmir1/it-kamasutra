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

const App = (props) => {

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header />
                    <Navbar
                        sidebar={props.state.sidebar}
                    />
                    <div className="app-wrapper-content">
                        <Route path='/dialogs' render={ () =>
                            <Dialogs
                                state={props.state.messagesPage}
                                store={props.store}
                            />
                        }/>
                        <Route path='/profile' render={ () =>
                            <Profile
                                profilePage={props.state.profilePage}
                                dispatch={props.dispatch}
                                newPostText={props.state.profilePage.newPostText}
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
