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
import comments_create from './comments_create';


export default combineReducers({
      user,
      blog,
      details,
      comments,
      comments_create
});
