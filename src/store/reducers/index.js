// import {combineReducers} from 'redux'
// import user from './user';
// import blog from './blog';
//
// const reducers = combineReducers({
//     user,
//     blog
// });
//
// export default reducers;


import {combineReducers} from 'redux'

import user from './user';
import blog from './blog';
import details from './details';
import comments from './comments';


export default combineReducers({
      user,
      blog,
      details,
      comments
});
