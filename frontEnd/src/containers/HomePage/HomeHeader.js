import React, { Component } from 'react';

import { connect } from 'react-redux';
import "./HomeHeader.scss"
import logo from "../../assets/logo.svg"
import { FormattedMessage } from 'react-intl';
class HomeHeader extends Component {

    render() {
        console.log("check prop", this.props)
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <img className='header-logo' src={logo} alt="" />
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div>
                                    <b><FormattedMessage id="home-header.speciality" /></b>
                                </div>
                                <div className='sub-title'> <FormattedMessage id="home-header.search-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div>
                                    <b><FormattedMessage id="home-header.health-facility" /></b>
                                </div>
                                <div className='sub-title'><FormattedMessage id="home-header.Choose_a_hospital_or_clinic" /></div>
                            </div>
                            <div className='child-content'>
                                <div>
                                    <b><FormattedMessage id="home-header.doctor" /></b>
                                </div>
                                <div className='sub-title'><FormattedMessage id="home-header.Choose_a_good_doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div>
                                    <b><FormattedMessage id="home-header.examination_package" /></b>
                                </div>
                                <div className='sub-title'><FormattedMessage id="home-header.General_health_check" />
                                </div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                hỗ trợ
                            </div>
                            <div className='language-vi'>VN</div>
                            <div className='language-en'>EN</div>
                            <div className='language-ja'>JA</div>
                        </div>
                    </div>

                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title-1'>
                            <FormattedMessage id="banner.title1" />
                        </div>
                        <div className='title-2'>
                            <FormattedMessage id="banner.title2" />
                        </div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='tìm chuyên khoa khám bệnh ' className='text-center' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='option'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="far fa-hospital"></i>
                                </div>
                                <div className='text-child'>khám chuyên  khoa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className='text-child'>khám từ xa </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital"></i>
                                </div>
                                <div className='text-child'>khám tổng quát</div>
                            </div>

                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="far fa-hospital"></i>
                                </div>
                                <div className='text-child'>xét nghiệm y học </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-user-md"></i>
                                </div>
                                <div className='text-child'>sức khỏe tinh thần </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-briefcase-medical"></i>
                                </div>
                                <div className='text-child'>khám nha khoa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        languge: state.app.language
    };

};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
