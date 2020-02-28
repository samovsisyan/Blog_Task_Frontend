import React, {Component} from 'react';

class Registration extends Component {
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

export default Registration;
