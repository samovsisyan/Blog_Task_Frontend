import React, {Component} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { requestBlogApiData } from '../../store/actions/blog';

class Blog extends Component {

    componentDidMount() {
        this.props.requestBlogApiData();
    }

    render() {

        console.log(this.props.data,111);
        return (
            <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300" data-aos-easing="slide"
                 data-aos-duration="800" data-aos-delay="0">
                <Header/>
                <div className="project_blog ">
                    <div className="blog_background">
                        <div className="site-wrap">
                            <div className="site-section">
                                <div className="container">
                                    <div className="section-title">
                                        <h2>New information</h2>
                                    </div>
                                    <div className="row">

                                        <div className="col-lg-6">

                                                <form action="/blog" method="DELETE">
                                                    <div className="blog_product">
                                                        <div className="post-entry-2 d-flex">
                                                            <div className="thumbnail">
                                                            </div>
                                                            <div className="contents">
                                                                <h2><Link
                                                                    to='#'>blog.title</Link>
                                                                </h2>
                                                                <p className="mb-3">blog.short_description</p>


                                                                <div className="post-meta">
                                                                <span className="d-block"><Link
                                                                    to="#">USER ID</Link></span>
                                                                    <span className="date-read">blog.created_at<span
                                                                        className="mx-1">•</span> 3 min read <span
                                                                        className="icon-star2">Span</span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                        </div>

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

// export default Blog;
const mapStateToProps = state => ({data: state.blog });

const mapDispatchToProps = dispatch =>
    bindActionCreators({requestBlogApiData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

