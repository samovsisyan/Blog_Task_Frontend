import React, {Component} from 'react';

class Bloging extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h1>Name</h1>
                    <input
                        name="name"
                        placeholder="name"
                        onChange={e => this.handleChange(e)}
                        value={this.state.name}
                        type="text"/>
                    <h1>Password</h1>
                    <input
                        name="password"
                        placeholder="password"
                        onChange={e => this.handleChange(e)}
                        value={this.state.password}
                        type="text"/>
                    <button>Click</button>
                </form>
            </div>
        );
    }
}

export default Bloging;
