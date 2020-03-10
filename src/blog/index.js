import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import _ from "lodash";

export default props =>
console.log(props) ||
    <Fragment>
        <ul>
            {props.blog.map(({id, title}) =>
            <li key={id}>
                <Link to="#">{title}</Link>
            </li>
            )}
        </ul>
    </Fragment>
