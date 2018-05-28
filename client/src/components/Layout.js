import React, { Component } from 'react';
import { submitUser } from '../actions/actions';
import { connect } from 'react-redux';

class Layout extends Component {
    constructor() {
        super();

        this.state = {
            nickname: '',
            email: '',
            ipnumber: ''
        };

        this.submitSubmission = this.submitSubmission.bind(this);
    }

    handleFormChange(event) {
        let updatedState = Object.assign({}, this.state);

        updatedState[event.target.id] = event.target.value;
        this.setState(updatedState);
    }

    submitSubmission(event) {
        event.preventDefault();
        this.props.dispatch(submitUser(this.state));
    }

    render() {
        return (
            <div>
                <form action="">
                    <input
                        id="nickname"
                        type="text"
                        placeholder="Nickname"
                        onChange={this.handleFormChange.bind(this)}
                    />
                    <input
                        id="email"
                        type="email"
                        placeholder="email"
                        onChange={this.handleFormChange.bind(this)}
                    />
                    <input
                        id="ipnumber"
                        type="text"
                        placeholder="ip number"
                        onChange={this.handleFormChange.bind(this)}
                    />
                    <button id="submit" onClick={this.submitSubmission}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(Layout);
