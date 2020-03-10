import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchBlog} from "../../store/actions/blog";
import {fetchComments} from "../../store/actions/comments";
import {fetchCommentsCreate} from "../../store/actions/comments_create";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.props = {
            username: "",
            password: "",
            email: "",
            img: ""
        }
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
    }


    render() {
        return (
            <div>
                <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
                    <div className="wrapper wrapper--w790">
                        <div className="card card-5">
                            <div className="card-heading">
                                <h2 className="title">Event Registration Form</h2>
                            </div>
                            <div className="card-body">
                                <form method="POST">

                                    <div className="form-row">
                                        <div className="name">User Name</div>
                                        <div className="value">
                                            <div className="input-group">
                                                <input className="input--style-5" type="text" name="username" placeholder="username"/>                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="name">Password</div>
                                        <div className="value">
                                            <div className="input-group">
                                                <input className="input--style-5" type="text" name="password" placeholder="password"/>                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="name">Email</div>
                                        <div className="value">
                                            <div className="input-group">
                                                <input className="input--style-5" type="email" name="email" placeholder="email  "/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="name">Img</div>
                                        <div className="value">
                                            <div className="input-group">
                                                <input className="input--style-5" type="img" name="img" placeholder="img  "/>
                                            </div>
                                        </div>
                                    </div>


                                    <div>
                                        <button className="btn btn--radius-2 btn--red" type="submit">Register
                                        </button>
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

// export default Registration;
const mapStateToProps = state => {

};


const mapDispatchToProps = {

};


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Registration);
