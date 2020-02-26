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


export default combineReducers({
      user,
      blog,
});
