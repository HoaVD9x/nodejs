import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            address: ""
        }
    }

    componentDidMount() {
    }
    toggle = () => {
        this.props.topggerFromParent();
    }

    handlerOnchangeInput = (event, id) => {

        // bad Code
        // this.state[id] = event.target.value;
        // this.setState({
        //     ... this.state
        // }, () => {
        //     console.log("check bad Code", this.state)
        // })
        // this.state[id]= event.target.value;
        let copyState = { ... this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })

    }

    handler_add_new_user = () => {
        let isValid = this.checkValidateInput(this.state)
        if (isValid) {
            // call api model
            this.props.createNewUser(this.state)
        }
    }

    checkValidateInput = (data) => {
        let isValid = true;
        let arrInput = ["email", "password", "first_name", "last_name", "address"];
        for (let index = 0; index < arrInput.length; index++) {
            if (!this.state[arrInput[index]]) {
                isValid = false;
                alert("missing parameter: " + arrInput[index])
                break;
            }

        }
        return isValid;
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className='modal-container-user'
                size='lg'
                centered>
                <ModalHeader toggle={() => this.toggle()} className='text-center'>Create new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label > Email</label>
                            <input
                                type='email'
                                onChange={(event) => { this.handlerOnchangeInput(event, "email") }}
                                value={this.state.email}
                            ></input>

                        </div>
                        <div className='input-container'>
                            <label > Password</label>
                            <input
                                type='password'
                                onChange={(event) => { this.handlerOnchangeInput(event, "password") }}
                                value={this.state.password}></input>

                        </div>
                        <div className='input-container'>
                            <label > First Name</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handlerOnchangeInput(event, "first_name") }}
                                value={this.state.first_name}></input>

                        </div>
                        <div className='input-container'>
                            <label > Last Name</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handlerOnchangeInput(event, "last_name") }}
                                value={this.state.last_name}></input>

                        </div>
                        <div className='input-container max-width-input'>
                            <label > Address</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handlerOnchangeInput(event, "address") }}
                                value={this.state.address}></input>

                        </div>
                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                        className='px-3'
                        onClick={() => { this.handler_add_new_user() }}>
                        Add New User
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => this.toggle()}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

