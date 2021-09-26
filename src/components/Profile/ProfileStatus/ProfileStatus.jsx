import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    editStatus() {
        this.setState({
            editMode: true
        })
    }

    exitEditStatus() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode && <div><span onDoubleClick={this.editStatus.bind(this)}>{this.props.status}</span></div>}
                {this.state.editMode && <div><input autoFocus={true} onBlur={this.exitEditStatus.bind(this)} value={this.props.status} type="text"/></div>}
            </>
        )
    }

}



export default ProfileStatus;
