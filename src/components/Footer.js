import React, {Component} from 'react';

import {withTranslation} from 'react-i18next';
import Select from 'react-select';
import { options } from '../config/options';

class Footer extends Component {

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


    render() {
        const {lang} = this.state;

        const {t} = this.props;
        console.log("this.props", this.props);

        console.log("this.state", this.state)


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
                    <div className="footer_background">
                        <div className="site-section subscribe bg-light">
                            <div className="container">
                                <form action="#" className="row align-items-center">
                                    <div className="col-md-5 mr-auto">
                                        <h2>{t('Newsletter Subcribe')}</h2>
                                        <p>{t('Lorem ipsum dolor sit...')}</p>
                                    </div>
                                    <div className="col-md-6 ml-auto">
                                        <div className="d-flex">
                                            <input type="email" className="form-control" placeholder="Enter your email" />
                                            <button type="submit" className="btn btn-secondary"><span
                                                className="icon-paper-plane">Span</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default withTranslation ()(Footer);
