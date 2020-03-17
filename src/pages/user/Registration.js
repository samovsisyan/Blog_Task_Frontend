import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchUserCreate} from "../../store/actions/user_create";
import {fetchUser} from "../../store/actions/user";
import {fetchRegister} from "../../store/actions/register";
import {Link} from "react-router-dom";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            role: "",
            img: ""
        }
    }

    componentDidMount() {
        // this.props.fetchUserCreate();
        this.props.fetchUser();
        this.props.fetchRegister();
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
        // this.props.fetchUserCreate(this.state);
        this.props.fetchRegister(this.state);
    }


    render() {
        console.log(this.state);
        console.log("this.props.user", this.props.user)
        return (
            <div>
                <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
                    <div className="wrapper wrapper--w790">
                        <div className="card card-5">
                            <div className="card-heading">
                                <h2 className="title">Event Registration Form</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit} method="POST">

                                    <div className="form-row">
                                        <div className="name">User Name</div>
                                        <div className="value">
                                            <div className="input-group">
                                                <input
                                                    className="input--style-5"
                                                    type="text"
                                                    name="username"
                                                    placeholder="username"
                                                    onChange={e => this.handleChange(e)}
                                                    value={this.state.username}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="name">Password</div>
                                        <div className="value">
                                            <div className="input-group">
                                                <input
                                                    className="input--style-5"
                                                    type="text"
                                                    name="password"
                                                    placeholder="password"
                                                    onChange={e => this.handleChange(e)}
                                                    value={this.state.password}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="name">Email</div>
                                        <div className="value">
                                            <div className="input-group">
                                                <input
                                                    className="input--style-5"
                                                    type="email"
                                                    name="email"
                                                    placeholder="email"
                                                    onChange={e => this.handleChange(e)}
                                                    value={this.state.email}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="name">Role</div>
                                        <div className="value">
                                            <div className="input-group">
                                                <input
                                                    className="input--style-5"
                                                    type="role"
                                                    name="role"
                                                    placeholder="role"
                                                    onChange={e => this.handleChange(e)}
                                                    value={this.state.role = "user"}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="name">Img</div>
                                        <div className="value">
                                            <div className="input-group">
                                                <input
                                                    className="input--style-5"
                                                    type="img"
                                                    name="img"
                                                    placeholder="img"
                                                    onChange={e => this.handleChange(e)}
                                                    value={this.state.img}
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div>
                                        <Link to='/user/login'>
                                            <button onClick={this.handleClick} className="btn btn--radius-2 btn--red"
                                                    type="submit">Register
                                            </button>
                                        </Link>
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
const mapStateToProps = (state) => ({
    user: state.user.userData,
    register: state.register.register,
});


const mapDispatchToProps = {
    fetchUserCreate,
    fetchUser,
    fetchRegister
};


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Registration);
