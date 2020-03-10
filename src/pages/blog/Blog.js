// // import React, {Component} from 'react';
// // import Header from "../../components/Header";
// // import Footer from "../../components/Footer";
// // import {Link} from "react-router-dom";
// // import PropTypes from 'prop-types';
// // import _ from 'lodash';
// //
//
// // import {bindActionCreators} from "redux";
// // import {connect} from 'react-redux';
// // import {requestBlogApiData} from '../../store/actions/blog';
// //
// // class Blog extends Component {
// //        static propTypes = {
// //         requestBlogApiData: PropTypes.func.isRequired,
// //     };
// //
// //     componentDidMount() {
// //         this.props.requestBlogApiData();
// //     }
// //
// //
// //
// //
// //     render() {
// //         // const data = this.props.data.blog;
// //         // const data = this.props.data.blog;
// //
// //         // console.log(data, 111);
// //         const  data  = this.props.data.blog;
// //
// //         console.log("data", data);
// //
// //         return (
// //
// //             <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300" data-aos-easing="slide"
// //                  data-aos-duration="800" data-aos-delay="0">
// //                 <Header/>
// //                 {_.map(data,(blog) => (
// //
// //                     <div className="project_blog ">
// //                         <div className="blog_background">
// //                             <div className="site-wrap">
// //                                 <div className="site-section">
// //                                     <div className="container">
// //                                         <div className="section-title">
// //                                             <h2>New information</h2>
// //                                         </div>
// //                                         <div className="row">
// //
// //                                             <div className="col-lg-6">
// //
// //                                                 <form action="/blog" method="DELETE">
// //                                                     <div className="blog_product">
// //                                                         <div className="post-entry-2 d-flex">
// //                                                             <div className="thumbnail">
// //                                                             </div>
// //                                                             <div className="contents">
// //                                                                 <h2><Link
// //                                                                     to='#'>{blog.title}</Link>
// //                                                                 </h2>
// //                                                                 <p className="mb-3">{blog.short_description}</p>
// //
// //
// //                                                                 <div className="post-meta">
// //                                                                 <span className="d-block"><Link
// //                                                                     to="#">USER ID</Link></span>
// //                                                                     <span className="date-read">{blog.created_at}<span
// //                                                                         className="mx-1">•</span> 3 min read <span
// //                                                                         className="icon-star2">Span</span></span>
// //                                                                 </div>
// //                                                             </div>
// //                                                         </div>
// //                                                     </div>
// //                                                 </form>
// //                                             </div>
// //
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //
// //                 <Footer/>
// //             </div>
// //         );
// //     }
// // }
// //
// //
// // // export default Blog;
// // const mapStateToProps = state => ({data: state.blog});
// //
// // const mapDispatchToProps = dispatch =>
// //     bindActionCreators({requestBlogApiData}, dispatch);
// //
// // export default connect(mapStateToProps, mapDispatchToProps)(Blog);
//

// import React, {Component} from 'react';
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
//
// // import {bindActionCreators} from "redux";
// import {connect} from 'react-redux';
// // import {requestBlogApiData} from '../../store/actions/blog';
//
// import {fetchBlog} from "../../store/actions/blog"
// import {fetchBlogDetailsId} from "../../store/actions/details"
// // import Details from "./Details";
//
// class Blog extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         blog_details: [],
//     //     }
//     // }
//     componentDidMount() {
//         // const {id} = this.props.match.params;
//
//         this.props.fetchBlog();
//         this.props.fetchBlogDetailsId();
//
//     }
//     static propTypes = {
//         fetchBlog: PropTypes.func.isRequired,
//         fetchBlogDetailsId:PropTypes.func.isRequired,
//     };
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: [],
//             // id: props.match.params.id,
//     }
//     }
//
//
//
//     // handleChange = (e) => {
//     //     this.setState({
//     //         [e.target.id]: e.target.value,
//     //     });
//     // };
//
//     // handleClick = () => {
//     //     for (let i = 0; i < this.props.blog.length; i++) {
//     //         this.setState({id: this.props.blog[i]})
//     //     }
//     //
//     // };
//     //
//
//     handleClick = () => {
//         for (let i = 0; i < this.props.blog.length; i++) {
//             this.setState({id: this.props.blog[i].id})
//         // console.log(this.props.blog[i].id);
//         }
//         this.props.fetchBlogDetailsId(this.state.id);
//
//     }
//
//
//
//         // handleClick = () => {
//         //     this.props.fetchBlogDetailsId(this.state);
//         //     console.log("this.state", this.state)
//         //     // for (let i = 0; i < this.props.blog.length; i++) {
//         //     //     this.setState({
//         //     //         id: this.props.blog[i],
//         //     //     })
//         //     // }
//         //
//         // }
//
//     render() {
//         console.log("this.state", this.state)
//
//         // const { fetchBlog } = this.props;
//         const data = this.props.blog;
//         console.log('this.props.blog', data)
//
//         // const details = this.props.details
//         // console.log("details", details)
//         return (
//             <div>
//                 {data ?
//                     <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300" data-aos-easing="slide"
//                          data-aos-duration="800" data-aos-delay="0">
//                         <Header/>
//                         {/*<Route path={`details/:blogId`} render={props => <Details {...props} />}/>*/}
//                         <button  onClick={this.handleClick}>BUTTON</button>
//
//
//                         {data.map((blog) => (
//
//
//                             <div className="project_blog">
//
//                                 {/*<h1 onClick={this.handleClick}>{blog.title}</h1>*/}
//                                 {/*<h1><a href={`http://localhost:8000/blog/details/${blog.id}`}>{blog.title}</a></h1>*/}
//
//                                 <div className="blog_background">
//                                     <div className="site-wrap">
//                                         <div className="site-section">
//                                             <div className="container">
//                                                 <div className="section-title">
//                                                     <h2>New information</h2>
//                                                 </div>
//                                                 <div className="row">
//
//                                                     <div className="col-lg-6">
//
//                                                         <div className="blog_product" key={blog.id}>
//                                                             <Link to="/details">Hello</Link>
//                                                             <div className="post-entry-2 d-flex">
//                                                                 <div className="thumbnail">
//                                                                     <img className="blog_img"
//                                                                          src="/images/blog_img/person_1.jpg" alt=""/>
//                                                                 </div>
//                                                                 <div className="contents">
//                                                                     <button  onClick={this.handleClick}>BUTTON</button>
//                                                                     <h2 onClick={this.handleClick}><Link
//                                                                         // to="#">{blog.title}</Link>
//                                                                         to={`/details/${blog.id}`}>{blog.title}</Link>
//                                                                     </h2>
//                                                                     <p className="mb-3">{blog.short_description}</p>
//
//
//                                                                     <div className="post-meta">
//                                                                 <span className="d-block"><Link
//                                                                     to="#">USER ID</Link></span>
//                                                                         <span
//                                                                             className="date-read">{blog.created_at}<span
//                                                                             className="mx-1">•</span> 3 min read <span
//                                                                             className="icon-star2">Span</span></span>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//
//                         ))}
//                         <Footer/>
//
//                             </div>
//                     : <p>Please wait...</p>}
//
//             </div>
//         );
//     }
// }
//
//
// const mapStateToProps = state => ({
//     blog: state.blog.list,
//     id: state.details.details,
//
// });
//
// const mapDispatchToProps = {
//     fetchBlog,
//     fetchBlogDetailsId,
// };
//
// const Container = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Blog);
//
// export default Container;


// import React, {Component} from 'react';
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
//
// // import {bindActionCreators} from "redux";
// import {connect} from 'react-redux';
// // import {requestBlogApiData} from '../../store/actions/blog';
//
// import {fetchBlog} from "../../store/actions/blog"
// import {fetchBlogDetailsId} from "../../store/actions/details"
// // import Details from "./Details";
//
// class Blog extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         blog_details: [],
//     //     }
//     // }
//     componentDidMount() {
//         // const {id} = this.props.match.params;
//         this.props.fetchBlog();
//         this.props.fetchBlogDetailsId();
//     }
//     static propTypes = {
//         fetchBlog: PropTypes.func.isRequired,
//         fetchBlogDetailsId:PropTypes.func.isRequired,
//     };
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: [],
//             // id: props.match.params.id,
//         }
//     }
//
//
//
//     // handleChange = (e) => {
//     //     this.setState({
//     //         [e.target.id]: e.target.value,
//     //     });
//     // };
//
//     // handleClick = () => {
//     //     for (let i = 0; i < this.props.blog.length; i++) {
//     //         this.setState({id: this.props.blog[i]})
//     //     }
//     //
//     // };
//     //
//
//     handleClick = () => {
//         for (let i = 0; i < this.props.blog.length; i++) {
//             if (this.props.blog) {
//                 console.log("this.props.blog[i].id", this.props.blog[i].id)
//             }
//             const data = this.props.blog[i].id;
//                     // console.log(this.props.blog[i].id);
//             this.props.fetchBlogDetailsId(data);
//
//         }
//     }
//
//
//
//     // handleClick = () => {
//     //     this.props.fetchBlogDetailsId(this.state);
//     //     console.log("this.state", this.state)
//     //     // for (let i = 0; i < this.props.blog.length; i++) {
//     //     //     this.setState({
//     //     //         id: this.props.blog[i],
//     //     //     })
//     //     // }
//     //
//     // }
//
//     render() {
//         console.log("this.state", this.state)
//
//         // const { fetchBlog } = this.props;
//         const data = this.props.blog;
//         console.log('this.props.blog', data)
//
//         // const details = this.props.details
//         // console.log("details", details)
//         return (
//             <div>
//                 {data ?
//                     <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300" data-aos-easing="slide"
//                          data-aos-duration="800" data-aos-delay="0">
//                         <Header/>
//                         {/*<Route path={`details/:blogId`} render={props => <Details {...props} />}/>*/}
//                         <button  onClick={this.handleClick}>BUTTON</button>
//
//
//                         {data.map((blog) => (
//
//
//                             <div className="project_blog">
//
//                                 {/*<h1 onClick={this.handleClick}>{blog.title}</h1>*/}
//                                 {/*<h1><a href={`http://localhost:8000/blog/details/${blog.id}`}>{blog.title}</a></h1>*/}
//
//                                 <div className="blog_background">
//                                     <div className="site-wrap">
//                                         <div className="site-section">
//                                             <div className="container">
//                                                 <div className="section-title">
//                                                     <h2>New information</h2>
//                                                 </div>
//                                                 <div className="row">
//
//                                                     <div className="col-lg-6">
//
//                                                         <div className="blog_product" key={blog.id}>
//                                                             <Link to="/details">Hello</Link>
//                                                             <div className="post-entry-2 d-flex">
//                                                                 <div className="thumbnail">
//                                                                     <img className="blog_img"
//                                                                          src="/images/blog_img/person_1.jpg" alt=""/>
//                                                                 </div>
//                                                                 <div className="contents">
//                                                                     <button  onClick={this.handleClick}>BUTTON</button>
//                                                                     <h2 onClick={this.handleClick}><Link
//                                                                         // to="#">{blog.title}</Link>
//                                                                         to={`/details/${blog.id}`}>{blog.title}</Link>
//                                                                     </h2>
//                                                                     <p className="mb-3">{blog.short_description}</p>
//
//
//                                                                     <div className="post-meta">
//                                                                 <span className="d-block"><Link
//                                                                     to="#">USER ID</Link></span>
//                                                                         <span
//                                                                             className="date-read">{blog.created_at}<span
//                                                                             className="mx-1">•</span> 3 min read <span
//                                                                             className="icon-star2">Span</span></span>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//
//                         ))}
//                         <Footer/>
//
//                     </div>
//                     : <p>Please wait...</p>}
//
//             </div>
//         );
//     }
// }
//
//
// const mapStateToProps = state => ({
//     blog: state.blog.list,
//     id: state.details.details,
// });
//
// const mapDispatchToProps = {
//     fetchBlog,
//     fetchBlogDetailsId,
// };
//
// const Container = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Blog);
//
// export default Container;
//


import React, {Component} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

// import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
// import {requestBlogApiData} from '../../store/actions/blog';

import {fetchBlog} from "../../store/actions/blog"
import {fetchBlogDetailsId} from "../../store/actions/details"
// import Details from "./Details";

class Blog extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         blog_details: [],
    //     }
    // }
    componentDidMount() {
        // const {id} = this.props.match.params;

        this.props.fetchBlog();
        this.props.fetchBlogDetailsId();

    }
    static propTypes = {
        fetchBlog: PropTypes.func.isRequired,
        fetchBlogDetailsId:PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            id: [],
            // id: props.match.params.id,
        }
    }



    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value,
    //     });
    // };

    // handleClick = () => {
    //     for (let i = 0; i < this.props.blog.length; i++) {
    //         this.setState({id: this.props.blog[i]})
    //     }
    //
    // };
    //

    handleClick = () => {
        for (let i = 0; i < this.props.blog.length; i++) {
            if (this.props.blog) {
                console.log("this.props.blog[i].id", this.props.blog[i].id)
            }
            const data = this.props.blog[i].id;
            // console.log(this.props.blog[i].id);
            this.props.fetchBlogDetailsId(data);

        }
    }



    // handleClick = () => {
    //     this.props.fetchBlogDetailsId(this.state);
    //     console.log("this.state", this.state)
    //     // for (let i = 0; i < this.props.blog.length; i++) {
    //     //     this.setState({
    //     //         id: this.props.blog[i],
    //     //     })
    //     // }
    //
    // }

    render() {
        console.log("this.state", this.state);

        // const { fetchBlog } = this.props;
        const data = this.props.blog;
        console.log('this.props.blog', data);

        // const details = this.props.details
        // console.log("details", details)
        return (
            <div>
                {data ?
                    <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300" data-aos-easing="slide"
                         data-aos-duration="800" data-aos-delay="0">
                        <Header/>


                        {data.map((blog) => (


                            <div className="project_blog">


                                <div className="blog_background">
                                    <div className="site-wrap">
                                        <div className="site-section">
                                            <div className="container">
                                                <div className="section-title">
                                                    <h2>New information</h2>
                                                </div>
                                                <div className="row">

                                                    <div className="col-lg-6">
                                                        <div className="blog_product" key={blog.id}>
                                                            <Link to={`/details/${blog.id}`}>Hello</Link>
                                                            <div className="post-entry-2 d-flex">
                                                                <div className="thumbnail">
                                                                    <img className="blog_img"
                                                                         src="/images/blog_img/person_1.jpg" alt=""/>
                                                                </div>
                                                                <div className="contents">
                                                                    <button  onClick={this.handleClick}>BUTTON</button>
                                                                    <h2 onClick={this.handleClick}><Link
                                                                        to={`/details/${blog.id}`}>{blog.title}</Link>
                                                                    </h2>
                                                                    <p className="mb-3">{blog.short_description}</p>


                                                                    <div className="post-meta">
                                                                <span className="d-block"><Link
                                                                    to="#">USER ID</Link></span>
                                                                        <span
                                                                            className="date-read">{blog.created_at}<span
                                                                            className="mx-1">•</span> 3 min read <span
                                                                            className="icon-star2">Span</span></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <Footer/>
                    </div>
                    : <p>Please wait...</p>}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    blog: state.blog.list,
    id: state.details.details,
});

const mapDispatchToProps = {
    fetchBlog,
    fetchBlogDetailsId,
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Blog);

export default Container;
