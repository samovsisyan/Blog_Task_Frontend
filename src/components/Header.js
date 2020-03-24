import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {withTranslation} from 'react-i18next';
import Select from 'react-select';
import { options } from '../config/options';

class Header extends Component {


    constructor(props) {
        super(props);
        this.state = {
            lang: options[0],
        };
    }

    changeLang = (lang) => {
        const {i18n} = this.props;
        const {value} = lang;
        this.setState({lang});
        i18n.changeLanguage(value);
    };


    handleClick = () => {
        localStorage.clear();
    };

    render() {

        const {lang} = this.state;

        const {t} = this.props;
        console.log("this.props", this.props);

        console.log("this.state", this.state)

        const getItem = localStorage.getItem('Token');
        console.log("local", getItem);
        return (
            <div>
                <div className="App-Root">

                    <Select
                        defaultValue={options[0]}
                        options={options}
                        value={lang}
                        onChange={this.changeLang}
                        className="App-Select"
                    />
                    <h3 className="text-center pt-5">
                        {t('Home')}
                    </h3>
                </div>
                <div className="project_blog">
                    <div className="header_background">
                        <div className="blog_img_logo">
                            <img src="/images/blog_img/blog.jpg" alt="Img Blog"/>
                        </div>
                        <div className="blog_manu">

                            <Link to="/">{t('Home')}</Link>

                            <Link to="/blog">{t('Blog')}</Link>

                            <Link to="/contact">{t('Contact')}</Link>

                            <Link to="/user/signup">{t('Sign Up')}</Link>
                            {getItem ?
                                <Link onClick={this.handleClick} to="/">{t('Log Out')}</Link>
                                : <Link to="/user/login">{t('Sign In')}</Link>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Header);
