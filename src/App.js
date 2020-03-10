

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
// import Lang from "./Lang";

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
                        <Route path="/details/:post_id" component={Details} />
                        <Route path="/bloging" component={Bloging} />
                        {/*<Route path="/lang" component={Lang} />*/}
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;


// import React, {Component, Fragment} from 'react';
// import Blog from "./blog";
// import {BrowserRouter, Route, Link} from "react-router-dom";
// class App extends Component {
//     state = {
//             blog: [],
//         };
//
//
//
//    async componentDidMount() {
//        const response = await fetch("http://localhost:8000/blog");
//        const blog = await response.json();
//        this.setState({blog})
//
//
//    }
//
//
//     render() {
//         const {blog} = this.state
//         return (
//             <BrowserRouter>
//                 <Fragment>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//
//                         <li>
//                             <Link to="/blog">Blog</Link>
//                         </li>
//                     </ul>
//
//                     <Route exact path="/" render={() => <div>Home</div>}/>
//                     <Route  path="/blog" render={
//                         props => <Blog {...props} blog={blog} />
//                     } />
//                 </Fragment>
//             </BrowserRouter>
//         );
//     }
// }
//
// export default App;
