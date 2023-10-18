import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { handler_login } from "../../services/user_service"

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { textChangeRangeIsUnchanged } from 'typescript';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            is_show_password: false,
            message: ""
        }
    }

    handle_onchange_username = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handle_onchange_password = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handlerlogin = async () => {
        this.setState({
            message: ""
        })
        try {
            let data = await handler_login(this.state.username, this.state.password)
            if (data && data.err_code !== 0) {
                this.setState({
                    message: data.message
                })
            }

            if (data && data.err_code === 0) {
                //todo
                this.props.user_login_succss(data.user)
            }

        } catch (e) {
            console.log(e.message)
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        message: e.response.data.message
                    })
                }

            }
        }
    }

    handle_show_passowrd = () => {
        this.setState({
            is_show_password: !this.state.is_show_password
        })

    }
    render() {
        return (
            <div className='login_backgroud'>
                <div className='login_container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>User Name</label>
                            <input className='form-control' type='text' placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => this.handle_onchange_username(event)}
                                required />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <div className='customer_input_password'>
                                <input className='form-control' type={this.state.is_show_password ? 'text' : 'password'} placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => this.handle_onchange_password(event)}
                                    required />
                                <span onClick={() => { this.handle_show_passowrd() }}>
                                    <i className={this.state.is_show_password ? "far fa-eye" : "far fa-eye-slash"}></i>
                                </span>

                            </div>
                        </div>
                        <div className='col-12' style={{ color: "red" }}>
                            {this.state.message}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => { this.handlerlogin() }}>
                                Login
                            </button>
                        </div>

                        <div className='col-12'>
                            <span className='forgot-password'>
                                forgot your password ?
                            </span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className='text-other-login'>Or Login wiht:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i class="fab fa-google google"></i>
                            <i class="fab fa-facebook facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),

        // adminLoginFail: () => dispatch(actions.adminLoginFail()),
        user_login_succss: (user_info) => dispatch(actions.user_login_succss(user_info))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
