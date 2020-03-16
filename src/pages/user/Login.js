import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchLogin} from "../../store/actions/login";


class Login extends Component {
    componentDidMount() {
        this.props.fetchLogin();
    }

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            token: "",
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
        this.props.fetchLogin(this.state);

    }


    render() {
        const token  = this.props.token;
        console.log("this.props.token", token);
        console.log(this.state);
        localStorage.setItem('Token', this.props.token);
        const getItem = localStorage.getItem('Token');
        console.log("local", getItem)


        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-t-190 p-b-30">
                            <form onSubmit={this.handleSubmit} className="login100-form validate-form">
                            {/*<form method="POST" className="login100-form validate-form">*/}
                                <div className="login100-form-avatar">
                                    <img src="/images/avatar-01.jpg" alt="AVATAR"/>
                                </div>
                                <span className="login100-form-title p-t-20 p-b-45">
John Doe
</span>
                                <div className="wrap-input100 validate-input m-b-10"
                                     data-validate="Username is required">
                                    <input
                                        className="input100"
                                        type="text"
                                        required name="username"
                                        placeholder="Username"
                                        onChange={e => this.handleChange(e)}
                                        value={this.state.username}
                                    />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
<i className="fa fa-user"></i>
</span>
                                </div>
                                <div className="wrap-input100 validate-input m-b-10"
                                     data-validate="Password is required">
                                    <input
                                        className="input100"
                                        type="password"
                                        required name="password"
                                        placeholder="Password"
                                        onChange={e => this.handleChange(e)}
                                        value={this.state.password}
                                    />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
<i className="fa fa-lock"></i>
</span>
                                </div>
                                <div className="container-login100-form-btn p-t-10">
                                    {getItem ?
                                  <Link to='/'>
                                      <button
                                        onClick={this.handleClick}
                                        className="login100-form-btn">
                                        Sign In
                                    </button>
                                  </Link>
                                   : <Link to='/user/login'>
                                            <button
                                                onClick={this.handleClick}
                                                className="login100-form-btn">
                                                Sign In
                                            </button>
                                        </Link> }
                                </div>
                                <div className="text-center w-full p-t-25 p-b-230">
                                    <Link to="#" className="txt1">
                                        Forgot Username / Password?
                                    </Link>
                                </div>
                                <div className="text-center w-full">
                                    <Link className="txt1" to="#">
                                    {/*<Link className="txt1" to="/user/signup">*/}
                                        Create new account
                                        <i className="fa fa-long-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="text-center w-full">
                                    <Link className="txt1" to="#">
                                    {/*<Link className="txt1" to="/blog">*/}
                                        Back Blog
                                        <i className="fa fa-long-arrow-right"></i>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default Login;
const mapStateToProps = state => ({

    token: state.login.token
});

const mapDispatchToProps = {
    fetchLogin,
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);

export default Container;
