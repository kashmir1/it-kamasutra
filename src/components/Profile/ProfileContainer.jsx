import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUsersProfile, setUserProfile } from "../../redux/profile-reducer";
import { Redirect, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUsersProfile(userId);

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});


let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { setUserProfile, getUsersProfile })(withUrlDataContainerComponent);
