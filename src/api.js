// import axios from 'axios';
//
//
// const API_URL = 'http://localhost:5000';
//
//
// export function getUser() {
//     return axios.get(API_URL + '/users', )
//         // .then(res => {
//         //     const user= res.data;
//         //     console.log(user,777777777777);
//         // })
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error(res.statusText)
//             }
//         })
//         .then(res => res.json())
// }


// const API_URL = 'http://localhost:5000';
//
// export function getUser(data) {
//     return fetch(API_URL + "/users",{
//         method: 'get',
//     }).then(r => r.json())
// }
//

import { stringify as qs } from 'querystringify';
import {AxiosInstance as axios} from "axios";


export const fetchData = async () => {
    try {

        const response = await fetch("http://localhost:8000/users");
        console.log(response, "user");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e)
    }
};


export const fetchBlogData = async () => {
    try {
        const response = await fetch("http://localhost:8000/blog");
        const data = await response.json();

        return data;
    } catch (e) {
        console.log(e)
    }
};


export const fetchBlogDetailsId = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/blog/details/${id}`);
        console.log("response", response)
        const data = await response.json();
        console.log("DATA RESPONS", data)
        return data;
    } catch (e) {
        console.log(e)
    }
};


export const fetchCommentsData = async () => {
    try {
        const response = await fetch("http://localhost:8000/comments");
        console.log("Comments response", response);
        const data = await response.json();
        console.log("COMMETNTS DATA RESPONS", data);

        return data;

    } catch (e) {
        console.log(e)
    }
};


export const fetchCommentsDataCreate = async ( name, description, user_id, blog_id ) => {
    try{
        const create = qs( name, description, user_id, blog_id );

        const response = await fetch(`http://localhost:8000/comments/create?${create}`);
        console.log("Comments Create response", response);
        const data = await response.json();
        console.log("COMMETNTS CTEARE DATA RESPONS", data);

        return data;

    }catch (e) {
        console.log(e)
    }
}


// export const fetchCommentsDataCreate = async (name, description, user_id, blog_id) => {
//     try {
//         // const create = qs(name, description, user_id, blog_id);
//         //
//         // const response = await axios.post(`http://localhost:8000/comments/create/${create}`);
//         // console.log("Comments Create response", response);
//         //
//         // const data = await response.json();
//         // console.log("COMMETNTS CTEARE DATA RESPONS", data);
//         //
//         // return data;
//
//
//         axios.put(`http://localhost:8000/comments/create/`, {
//             name: 'asdasd',
//             description: 'Fliasdsadntstone',
//             user_id: "1",
//             blog_id:  "3"
//         })
//             .then(function (response) {
//                 console.log(response);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//
//     } catch (error) {
//         console.error(error);
//     }
// }

