import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blog from "./pages/blog/Blog";
import Login from "./pages/user/Login";
import Registration from "./pages/user/Registration";
import Details from "./pages/blog/Details";
import Bloging from "./pages/Bloging";


class App extends Component {




    render() {


        return (
            <div>

           }

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/user/login" component={Login}/>
                        <Route path="/user/signup" component={Registration}/>
                        <Route path="/details/:post_id" component={Details}/>
                        <Route path="/bloging" component={Bloging}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;


// import React, {Component} from 'react';
// import { withTranslation } from 'react-i18next';
// import Select from 'react-select';
// import { options } from './config/options';
//
//
// class App extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             lang: options[0],
//         };
//     }
//     changeLang = (lang) => {
//         const { i18n } = this.props;
//         const { value } = lang;
//         this.setState({ lang });
//         i18n.changeLanguage(value);
//     };
//
//     render() {
//
//         const { lang } = this.state;
//
//         const { t } = this.props;
//         console.log("this.props", this.props);
//
//         console.log("this.state", this.state)
//         return (
//             <div className="App-Root">
//
//                 <Select
//                     defaultValue={options[0]}
//                     options={options}
//                     value={lang}
//                     onChange={this.changeLang}
//                     className="App-Select"
//                 />
//                 <h3 className="text-center pt-5">
//                     {t('Header')}
//                 </h3>
//             </div>
//         );
//     }
// }
//
// export default withTranslation()(App);
