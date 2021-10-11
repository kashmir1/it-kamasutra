import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeadersContainer from "./components/Header/HeadersContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeadersContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>
                           }/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>
                           }/>
                    <Route path='/login'
                           render={() => <Login/>
                           }/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/musics' component={Musics}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
