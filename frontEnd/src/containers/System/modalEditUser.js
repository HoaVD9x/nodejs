import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from "lodash"// edit object 

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            address: ""
        }
    }



    componentDidMount() {
        let user = this.props.currentUser
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: "hascode",
                first_name: user.first_name,
                last_name: user.last_name,
                address: user.address
            })
        }
    }

    toggle = () => {
        this.props.topggerFromParent();
    }

    handlerOnchangeInput = (event, id) => {
        let copyState = { ... this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })

    }

    handlerEditUser = () => {
        let isValid = this.checkValidateInput(this.state)
        if (isValid) {
            // call api model
            this.props.editUser(this.state)
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
                <ModalHeader toggle={() => this.toggle()} className='text-center'>Edit new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label > Email</label>
                            <input
                                type='email'
                                onChange={(event) => { this.handlerOnchangeInput(event, "email") }}
                                value={this.state.email}
                                disabled
                            ></input>

                        </div>
                        <div className='input-container'>
                            <label > Password</label>
                            <input
                                type='password'
                                onChange={(event) => { this.handlerOnchangeInput(event, "password") }}
                                value={this.state.password}
                                disabled
                            ></input>

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
                        onClick={() => { this.handlerEditUser() }}>
                        Save User
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);

