import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { get_all_user, createNewUserService, deleteUserService } from '../../services/user_service';
import ModalUser from './modal_user';
import modalEditUser from './modalEditUser';
import "./user_manage.scss";
import { emitter } from '../../utils/emitter';
import { couldStartTrivia, isEnumMember } from 'typescript';
import ModalEditUser from './modalEditUser';




class UserManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            editUser: []
        }
    }

    async componentDidMount() {
        await this.getAllUserFromData();

    }
    getAllUserFromData = async () => {
        let response = await get_all_user("ALL");
        if (response && response.err_code === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handler_add_new_user = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }
    /*** life cicle
     * run component
     * 1 run contructor -> init state  
     * 2 Did mount (set state)
     * 3 render
     * 
     * 
     */

    toggeUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }


    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)
            if (response && response.err_code !== 0) {
                alert(response.err_message)
            } else {
                await this.getAllUserFromData()
                this.toggeUserModal()
                emitter.emit("EVENT_CLEAR_MODAL_DATA", { "id": "your ID" })
            }
        } catch (e) {
            console.Console(e)
        }
    }

    handlerDeleteUser = async (user_id) => {
        try {
            let response = await deleteUserService(user_id)
            if (response && response.err_code === 0) {
                await this.getAllUserFromData()
            } else {
                alert(response.err_message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            editUser: user
        })
    }

    toggeEditUserModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }

    doEditUser = (user) => {
        console.log("user when save user", user)
    }
    render() {

        let arrUsers = this.state.arrUsers
        return (
            <div className="user_container ">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    topggerFromParent={this.toggeUserModal}
                    createNewUser={this.createNewUser}
                />
                <ModalEditUser
                    isOpen={this.state.isOpenModalEditUser}
                    topggerFromParent={this.toggeEditUserModal}
                    currentUser={this.state.editUser}
                // editUser={this.doEditUser}
                />
                <div className='title text-center'>Manage users</div>
                <div className='mx-3'>
                    <button className='btn btn-primary px-3' onClick={() => this.handler_add_new_user()}> <i className="fas fa-plus"></i> Add new User</button>
                </div>
                <div className='user_table mt-3 mx-1 text-center'>
                    <table className="table table-bordered mt-3 mx-1">
                        <thead>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button
                                                className='btn-edit'
                                                onClick={() => { this.handleEditUser(item) }}
                                            ><i className="fas fa-pencil-alt"></i></button>
                                            <button
                                                className='btn-delete'
                                                onClick={() => { this.handlerDeleteUser(item.id) }}
                                            ><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>

            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
