// import React, {Component} from 'react';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import blog from "./pages/blog/blog";
// import Home from "./pages/Home";
//
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <BrowserRouter>
//                     <Switch>
//                         <Route path="/" component={Home} />
//                         <Route path="/blog" component={blog} />
//                         <Route path="/" component={Home} />
//                     </Switch>
//                 </BrowserRouter>
//             </div>
//         );
//     }
// }
//
// export default App;


// import React  from 'react';
// import { bindActionCreators } from "redux";
// import { connect } from 'react-redux';
//
// import {requestUserApiData} from "./store/actions/user";
// import blog from './pages/blog/blog'
//
//
// class App extends React.Component {
//
//
//
//     componentDidMount() {
//         this.props.requestUserApiData();
//     }
//
//
//
//
//     render() {
//         // const { results  = []} = this.props.data;
//         // console.log(results,"47451745745854")
//         // console.log(this.props.data.user,"asdlkjashgjks")
//         const data = this.props.data.user;
//         console.log(data, "user user user");
//         console.log(this.props.data,88888888)
//
//         return (
//             <div>
//                 <blog />
//                 <h1>
//                    <button onClick={this.handelClick}>Click</button>
//                 </h1>
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = state => ({data: state.user });
//
// const mapDispatchToProps = dispatch =>
//     bindActionCreators({requestUserApiData}, dispatch);
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);


import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blog from "./pages/blog/Blog";
import Login from "./pages/user/Login";
import Registration from "./pages/user/Registration";
import Details from "./pages/blog/Details";
import Bloging from "./pages/Bloging";

// import {withTranslation} from 'react-i18next';
// import Select from 'react-select';
// import {options} from './config/options';


class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         lang: options[0],
    //     };
    // }
    //
    // changeLang = (lang) => {
    //     const {i18n} = this.props;
    //     const {value} = lang;
    //     this.setState({lang});
    //     i18n.changeLanguage(value);
    // };


    render() {

        // const {lang} = this.state;
        //
        // const {t} = this.props;

        return (
            <div>

                {/*<Select*/}
                {/*    defaultValue={options[0]}*/}
                {/*    options={options}*/}
                {/*    value={lang}*/}
                {/*    onChange={this.changeLang}*/}
                {/*    className="App-Select"*/}
                {/*/>*/}
                {/*<h3 className="text-center pt-5">*/}
                {/*    {t('Header')}*/}
                {/*</h3>*/}

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
