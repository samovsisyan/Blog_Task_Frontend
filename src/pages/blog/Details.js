import React, {Component} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";
import {fetchBlog} from "../../store/actions/blog";
import {connect} from "react-redux";
import PropTypes from "prop-types";



class Details extends Component {

    static propTypes = {
        fetchBlog: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.fetchBlog();
        console.log("Data", this.props.blog)
    }



    render() {

        const blog = this.props.blog;
        console.log('this.props.blog',blog)

        return (
            <div>
                <Header />
                <h1>lkjhgdjsklxncl skjhkdmn</h1>
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
                                            {blog.title}Title
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
                                        <p>{blog.description}Description</p>


                                        <div className="pt-5">
                                            <p>Categories: <Link to="#">Design</Link>, <Link
                                                to="#">Events</Link> Tags: <Link
                                                to="#">#html</Link>, <Link to="#">#trends</Link></p>
                                        </div>


                                        {/*<div className="pt-5">*/}
                                        {/*    <div className="section-title">*/}
                                        {/*        <h2 className="mb-5">comments.length Comments</h2>*/}
                                        {/*    </div>*/}
                                        {/*    <ul className="comment-list">*/}
                                        {/*        <li className="comment">*/}
                                        {/*            <div className="vcard bio">*/}
                                        {/*                <img src="/images/person_1.jpg"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="comment-body">*/}
                                        {/*                /!*{comments.map((comment) => (*!/*/}
                                        {/*                    <div>*/}
                                        {/*                        <h3>comment.name</h3>*/}
                                        {/*                        <div className="meta">January 9, 2018 at 2:21pm</div>*/}

                                        {/*                        <p>comment.description</p>*/}
                                        {/*                    </div>*/}
                                        {/*                /!*))}*!/*/}

                                        {/*            </div>*/}

                                        {/*        </li>*/}


                                        {/*    </ul>*/}

                                            {/*<div className="comment-form-wrap pt-5">*/}
                                            {/*    <div className="section-title">*/}
                                            {/*        <h2 className="mb-5">Leave a comment</h2>*/}
                                            {/*    </div>*/}

                                            {/*    <form action="/comments" method="POST" className="p-5 bg-light">*/}
                                            {/*        <div className="form-group">*/}
                                            {/*            <label htmlFor="name">Name *</label>*/}
                                            {/*            <input type="text" name="name" className="form-control"*/}
                                            {/*                   id="name"/>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="form-group">*/}
                                            {/*            <label htmlFor="message">Message</label>*/}
                                            {/*            <textarea name="" id="message" cols="30" rows="10"*/}
                                            {/*                      name="description"*/}
                                            {/*                      className="form-control"></textarea>*/}
                                            {/*            <input type="hidden" name="blog_id" value="blog.id"/>*/}
                                            {/*            <input type="hidden" name="user_id" value="1"/>*/}

                                            {/*            <button>Commensssssssssts</button>*/}

                                            {/*        </div>*/}
                                            {/*    </form>*/}
                                            {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    blog: state.blog.list,
});

const mapDispatchToProps = {
    fetchBlog,
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Details);

export default Container;
