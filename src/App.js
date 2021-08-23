import './App.css';
import React from "react";
import Header from "./components/Header/Headers";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {

        return (
                <div className='app-wrapper'>
                    <Header />
                    <Navbar
                        // sidebar={props.state.sidebar}
                        // dispatch={props.dispatch}
                    />
                    <div className="app-wrapper-content">
                        <Route path='/dialogs'
                               render={ () => <DialogsContainer />
                        }/>
                        <Route path='/profile'
                               render={ () => <ProfileContainer />
                        }/>
                        <Route path='/users' render={ () => <UsersContainer />}/>
                        <Route path='/news' component={News}/>
                        <Route path='/musics' component={Musics}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>

        );
    }
;


export default App;
