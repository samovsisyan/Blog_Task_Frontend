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

export const fetchData  = async () => {
    try{
        const response = await fetch("http://localhost:5000/users");
        console.log(response);
        const data = await response.json();
        return data;
    }catch (e) {
        console.log(e)
    }
}

