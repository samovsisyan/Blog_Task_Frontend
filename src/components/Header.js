import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>

                <div className="project_blog">
                    <div className="header_background">
                        <div className="blog_img_logo">
                            <img src="/images/blog_img/blog.jpg" alt="Img Blog"/>
                        </div>
                        <div className="blog_manu">

                            <Link to="/">Home</Link>

                            <Link to="/blog">Blog</Link>

                            <Link to="/contact">Contact</Link>

                            <Link to="/user/signup">Sign Up</Link>

                            <Link to="/user/login">Sign In</Link>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;
