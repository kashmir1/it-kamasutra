import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUsersProfile, setStatus, setUserProfile, updateStatus } from "../../redux/profile-reducer";
import { Redirect, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 18845;
        }

        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);

    }



    render() {

        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});


export default compose(
    connect(mapStateToProps, { setUserProfile, getUsersProfile, getStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
