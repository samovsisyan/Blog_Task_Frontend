// import React, {Component} from 'react';
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import {Link} from "react-router-dom";
// import {connect} from "react-redux";
// // import {fetchBlogDetails} from "../../store/actions/details";
// // import {connect} from "react-redux";
// // import PropTypes from "prop-types";
// // import details from "../../store/reducers/details";
//
//
//
// class Details extends Component {
//     //
//     // static propTypes = {
//     //     fetchBlogDetails: PropTypes.func.isRequired,
//     // };
//     //
//     // componentDidMount() {
//     //     this.props.fetchBlogDetails();
//     //     console.log("Data", this.props.blog)
//     // }
//
//
//
//     render() {
//         console.log("this.props.post", this.props.blog)
//         //     const blog = this.props.blog;
//         // console.log('this.props.blog',blog);
//         return (
//             <div>
//                 <Header />
//                 {/*<h1>lkjhgdjsklxncl skjhkdmn</h1>*/}
//                 {/*<div className="project_blog ">*/}
//                 {/*    <div className="blog_background">*/}
//
//
//                 {/*        <div className="site-section">*/}
//                 {/*            <div className="container">*/}
//                 {/*                <div className="row">*/}
//                 {/*                    <div className="col-lg-8 single-content">*/}
//                 {/*                        <p className="mb-5">*/}
//                 {/*                            <img src="/images/blog_img/person_1.jpg" alt="Image" className="img-fluid"/>*/}
//                 {/*                        </p>*/}
//                 {/*                        <h1 className="mb-4">*/}
//                 {/*                            Title*/}
//                 {/*                        </h1>*/}
//                 {/*                        <div className="post-meta d-flex mb-5">*/}
//                 {/*                            <div className="bio-pic mr-3">*/}
//                 {/*                                <img src="/images/person_1.jpg" alt="Image" className="img-fluidid"/>*/}
//                 {/*                            </div>*/}
//                 {/*                            <div className="vcard">*/}
//                 {/*                            <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link*/}
//                 {/*                                to="#">News</Link></span>*/}
//                 {/*                                <span className="date-read">Jun 14 <span*/}
//                 {/*                                    className="mx-1">•</span> 3 min read <span*/}
//                 {/*                                    className="icon-star2"></span></span>*/}
//                 {/*                            </div>*/}
//                 {/*                        </div>*/}
//                 {/*                        <p>Description</p>*/}
//
//
//                 {/*                        <div className="pt-5">*/}
//                 {/*                            <p>Categories: <Link to="#">Design</Link>, <Link*/}
//                 {/*                                to="#">Events</Link> Tags: <Link*/}
//                 {/*                                to="#">#html</Link>, <Link to="#">#trends</Link></p>*/}
//                 {/*                        </div>*/}
//
//
//                 {/*                        /!*<div className="pt-5">*!/*/}
//                 {/*                        /!*    <div className="section-title">*!/*/}
//                 {/*                        /!*        <h2 className="mb-5">comments.length Comments</h2>*!/*/}
//                 {/*                        /!*    </div>*!/*/}
//                 {/*                        /!*    <ul className="comment-list">*!/*/}
//                 {/*                        /!*        <li className="comment">*!/*/}
//                 {/*                        /!*            <div className="vcard bio">*!/*/}
//                 {/*                        /!*                <img src="/images/person_1.jpg"/>*!/*/}
//                 {/*                        /!*            </div>*!/*/}
//                 {/*                        /!*            <div className="comment-body">*!/*/}
//                 {/*                        /!*                /!*{comments.map((comment) => (*!/*!/*/}
//                 {/*                        /!*                    <div>*!/*/}
//                 {/*                        /!*                        <h3>comment.name</h3>*!/*/}
//                 {/*                        /!*                        <div className="meta">January 9, 2018 at 2:21pm</div>*!/*/}
//
//                 {/*                        /!*                        <p>comment.description</p>*!/*/}
//                 {/*                        /!*                    </div>*!/*/}
//                 {/*                        /!*                /!*))}*!/*!/*/}
//
//                 {/*                        /!*            </div>*!/*/}
//
//                 {/*                        /!*        </li>*!/*/}
//
//
//                 {/*                        /!*    </ul>*!/*/}
//
//                 {/*                            /!*<div className="comment-form-wrap pt-5">*!/*/}
//                 {/*                            /!*    <div className="section-title">*!/*/}
//                 {/*                            /!*        <h2 className="mb-5">Leave a comment</h2>*!/*/}
//                 {/*                            /!*    </div>*!/*/}
//
//                 {/*                            /!*    <form action="/comments" method="POST" className="p-5 bg-light">*!/*/}
//                 {/*                            /!*        <div className="form-group">*!/*/}
//                 {/*                            /!*            <label htmlFor="name">Name *</label>*!/*/}
//                 {/*                            /!*            <input type="text" name="name" className="form-control"*!/*/}
//                 {/*                            /!*                   id="name"/>*!/*/}
//                 {/*                            /!*        </div>*!/*/}
//                 {/*                            /!*        <div className="form-group">*!/*/}
//                 {/*                            /!*            <label htmlFor="message">Message</label>*!/*/}
//                 {/*                            /!*            <textarea name="" id="message" cols="30" rows="10"*!/*/}
//                 {/*                            /!*                      name="description"*!/*/}
//                 {/*                            /!*                      className="form-control"></textarea>*!/*/}
//                 {/*                            /!*            <input type="hidden" name="blog_id" value="blog.id"/>*!/*/}
//                 {/*                            /!*            <input type="hidden" name="user_id" value="1"/>*!/*/}
//
//                 {/*                            /!*            <button>Commensssssssssts</button>*!/*/}
//
//                 {/*                            /!*        </div>*!/*/}
//                 {/*                            /!*    </form>*!/*/}
//                 {/*                            /!*</div>*!/*/}
//                 {/*                    </div>*/}
//                 {/*                </div>*/}
//                 {/*            </div>*/}
//                 {/*        </div>*/}
//                 {/*    </div>*/}
//                 {/*</div>*/}
//                 <Footer/>
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = (state, ownProps) => {
//         let id = ownProps.match.params.details;
//         return {
//             post: state.blog.list.find(blog  => blog.id === id)
//         }
// };
// export default connect(mapStateToProps)(Details);
// //
// // const mapStateToProps = (state) => ({
// //     // blog: state.blog.list,
// //
// // });
// //
// // const mapDispatchToProps = {
// // };
// //
// // const Container = connect(
// //     mapStateToProps,
// //     mapDispatchToProps,
// // )(Details);
// //
// // export default Container;


// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {fetchBlog} from "../../store/actions/blog";
//
//
//
//
// // import {bindActionCreators} from "redux";
// // import {requestBlogApiData} from '../../store/actions/blog';
//
//
// class Details extends Component {
//
//     componentDidMount() {
//         this.props.fetchBlog()
//     }
//
//     render() {
//         let  details = this.props
//         console.log("details", details)
//         const blog = this.props.blog ? (
//             <div className="post">
//                 <h4 className="center">{this.props.blog.title}</h4>
//                 <p>{this.props.blog.description}</p>
//             </div>
//         ) : (
//             <div className="center">Loading post...</div>
//         );
//
//         return (
//             <div className="container">
//                 {blog}
//             </div>
//         )
//     }
// }
//
// const mapStateToProps = (state, ownProps) => {
//     let id = ownProps.match.params.post_id;
//     console.log( state.blog.list, 1111111111111);
//     console.log(id, 33333333333333);
//     return {
//         blog: state.blog.list.find(blog => blog.id === id)
//     }
//
// };
//
//
// const mapDispatchToProps = {
//     fetchBlog,
// };
//
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(Details)


import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchBlog} from "../../store/actions/blog";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {Link, Redirect} from "react-router-dom";
import {fetchComments} from "../../store/actions/comments";
import {fetchCommentsCreate} from "../../store/actions/comments_create";
import {fetchUser} from "../../store/actions/user";
import {fetchLogin} from "../../store/actions/login";


// import {bindActionCreators} from "redux";
// import {requestBlogApiData} from '../../store/actions/blog';


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            user_id: "",
            blog_id: "",
            x_access_token: this.props.token
        }
    }

    componentDidMount() {
        this.props.fetchBlog();
        this.props.fetchComments();
        this.props.fetchCommentsCreate();
        this.props.fetchUser();
        this.props.fetchLogin();

    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleClick = () => {
        this.props.fetchCommentsCreate(this.state);
    };


    render() {
        const token = this.props.user;
        console.log("DETAILS this.props.token", token);

        const user = this.props.users;
        console.log("user user user user user ", user);

        const comments = this.props.comments;
        console.log("DETAILS COMMENTS", comments);


        console.log("this.props.blog", this.props.blog);
        console.log("this.state", this.state);
        const getItem = localStorage.getItem('Token');
        console.log("local", getItem);

        const blog = this.props.blog ? (
            <div className="post">
                <div className="project_blog ">
                    <div className="blog_background">


                        <div className="site-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 single-content">
                                        <p className="mb-5">
                                            <img src="/images/blog_img/person_1.jpg" alt="Image" className="img-fluid"/>
                                        </p>
                                        <h1 className="mb-4">
                                            {this.props.blog.title}
                                        </h1>
                                        <div className="post-meta d-flex mb-5">
                                            <div className="bio-pic mr-3">
                                                <img src="/images/person_1.jpg" alt="Image" className="img-fluidid"/>
                                            </div>
                                            <div className="vcard">
                                                      <span className="d-block"><Link to="#">Dave Rogers</Link> in <Link
                                                          to="#">News</Link></span>
                                                <span className="date-read">Jun 14 <span
                                                    className="mx-1">•</span> 3 min read <span
                                                    className="icon-star2"></span></span>
                                            </div>
                                        </div>
                                        <p>{this.props.blog.description}</p>

                                        <div className="pt-5">
                                            <p>Categories: <Link to="#">Design</Link>, <Link
                                                to="#">Events</Link> Tags: <Link
                                                to="#">#html</Link>, <Link to="#">#trends</Link></p>
                                        </div>


                                        <div className="pt-5">
                                            <div className="section-title">
                                                <h2 className="mb-5">{comments.length} Comments</h2>
                                            </div>
                                            {comments.map((comment) => (

                                                <ul className="comment-list">
                                                    <li className="comment">
                                                        <div className="vcard bio">
                                                            <img src="/images/person_1.jpg"/>
                                                        </div>
                                                        <div className="comment-body">
                                                            <div>
                                                                <h3>{comment.name}</h3>
                                                                <div className="meta">January 9, 2018 at 2:21pm</div>

                                                                <p>{comment.description}</p>
                                                            </div>

                                                        </div>

                                                    </li>

                                                </ul>
                                            ))}
                                            {getItem ?
                                            <div className="comment-form-wrap pt-5">
                                                <div className="section-title">
                                                    <h2 className="mb-5">Leave a comment</h2>
                                                </div>

                                                <form onSubmit={this.handleSubmit} className="p-5 bg-light">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name *</label>
                                                        <input
                                                            name="name"
                                                            placeholder="name"
                                                            onChange={e => this.handleChange(e)}
                                                            value={this.state.name}
                                                            className="form-control"
                                                            id="name"
                                                            type="text"/>


                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="message">Message</label>
                                                        <textarea
                                                            name="description"
                                                            placeholder="description"
                                                            onChange={e => this.handleChange(e)}
                                                            value={this.state.description}
                                                            cols="30"
                                                            rows="10"
                                                            className="form-control"
                                                            type="text"/>

                                                        <input
                                                            type="hidden"
                                                            name="blog_id"
                                                            onChange={e => this.handleChange(e)}
                                                            value={this.state.blog_id = this.props.blog.id}
                                                        />
                                                        <input type="hidden"
                                                               name="user_id"
                                                               onChange={e => this.handleChange(e)}
                                                               value={this.state.user_id = 1}
                                                        />

                                                        <button onClick={this.handleClick} >Coments</button>
                                                    </div>
                                                </form>
                                            </div>
                                            : <div></div>}
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        );

        return (
            <div>
                <Header/>
                {blog}
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;

    return {
        blog: state.blog.list.find(blog => blog.id == id),
        comments: state.comments.comment,
        users: state.user.userData,
        user: state.login.token

    }
};


const mapDispatchToProps = {
    fetchBlog,
    fetchComments,
    fetchCommentsCreate,
    fetchUser,
    fetchLogin,

};


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Details);
