import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { get_all_user } from '../../services/user_service';

import "./user_manage.scss";




class UserManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrUsers: []
        }
    }

    async componentDidMount() {
        let response = await get_all_user("ALL");
        if (response && response.err_code === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }
    /*** life cicle
     * run component
     * 1 run contructor -> init state  
     * 2 Did mount (set state)
     * 3 render
     * 
     * 
     */

    render() {
        console.log("check render ", this.state)
        let arrUsers = this.state.arrUsers
        return (
            <div className="user_container ">
                <div className='title text-center'>Manage users
                    <div className='user_table mt-3 mx-1'>
                        <table class="table table-bordered">
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Action</th>
                            </tr>

                            {arrUsers && arrUsers.map((item, index) => {
                                console.log("check map ", item, index)
                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit'><i class="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete'><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })}


                        </table>
                    </div>
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
