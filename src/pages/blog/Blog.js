import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {requestBlogApiData} from "../../store/actions/blog";
import { connect } from 'react-redux';


class Blog extends Component {

    componentDidMount() {
        this.props.requestBlogApiData();
    }


    render() {
        const data = this.props.data.blog;
        console.log(data, "blog blog blog");
        console.log(this.props.data,88888888)

        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}


const mapStateToProps = state => ({data: state.blog });

const mapDispatchToProps = dispatch =>
    bindActionCreators({requestBlogApiData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
