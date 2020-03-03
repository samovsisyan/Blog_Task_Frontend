

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

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/user/login" component={Login} />
                        <Route path="/user/signup" component={Registration} />
                        <Route path="/details" component={Details} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
