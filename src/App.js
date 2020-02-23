// import React, {Component} from 'react';
// import {connect} from "react-redux";
// // import { getUsers } from "./store/actions/user";
// import axios from 'axios';
//
// class App extends Component {
//      constructor(props) {
//          super(props);
//          this.state = {
//              people: []
//          }
//      }
//
//     componentDidMount() {
//         // const API_URL = 'http://localhost:5000';
//         axios.get( 'http://localhost:5000/users')
//             .then(res => {
//                 const people= res.data;
//                 console.log(people,88888)
//                 this.setState({ people});
//                 console.log(this.state.people,22222)
//             })
//     }
//
//
//
//     // handleClick = (values) => {
//     //     this.props.getUsers(values);
//     // }
//     render() {
//         return (
//             <div>
//                 <h1>
//
//                 </h1>
//
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = (state) => ({
//     authError: state.user.authError,
//     usersData: state.user.usersData,
// });
//
// const mapDispatchToProps = {
//     // getUsers,
// };
//
// const AppContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(App);
//
// export default AppContainer;


import React  from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import {requestApiData} from "./store/actions/user";


class App extends React.Component {



    componentDidMount() {
        this.props.requestApiData();
    }


   person = ( x, i ) => (
    <div key={x.id.value}>
        {/*<h1>{x.gender}</h1>*/}
        {/*<h1>{x.name.first}</h1>*/}
        {/*<h1>{x.name.last}</h1>*/}
        <h1>{x.username}</h1>
        <h1>{x.email}</h1>
        <h1>{x.role}</h1>
    </div>
)


    render() {
        const { results  = []} = this.props.data;
        console.log(results,"47451745745854")
        console.log(this.props.data.user,"asdlkjashgjks")
        return (
            <div>
                <h1>
                    {results.map(this.person)}
                </h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({requestApiData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
