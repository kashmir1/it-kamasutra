import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    editStatus = () => {
        this.setState({
            editMode: true
        })
    };

    exitEditStatus = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    render() {
        return (
            <>
                {!this.state.editMode && <div><span onDoubleClick={this.editStatus}>
                    {!this.props.status ? 'no status' : this.props.status}
                </span></div>}
                {this.state.editMode && <div><input
                    autoFocus={true}
                    onBlur={this.exitEditStatus}
                    value={this.state.status}
                    onChange={this.onStatusChange}
                    type="text"/>
                </div>}
            </>
        )
    }

}


export default ProfileStatus;
