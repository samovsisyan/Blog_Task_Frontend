import { stringify as qs } from 'querystringify';
import axios from "axios";


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


// export const fetchCommentsDataCreate = async ( name, description, user_id, blog_id ) => {
//     try{
//         const create = qs( name, description, user_id, blog_id );
//
//         const response = await fetch(`http://localhost:8000/comments/create/${create}`);
//         console.log("Comments Create response", response);
//         const data = await response.json();
//         console.log("COMMETNTS CTEARE DATA RESPONS", data);
//
//         return data;
//
//     }catch (e) {
//         console.log(e)
//     }
// }


export function fetchCommentsDataCreate(data) {
    console.log("AXIOS data", data)
    return axios.post("http://localhost:8000/comments/create", {
        name: data.name,
        description: data.description,
        user_id: data.user_id,
        blog_id: data.blog_id,
        x_access_token: data.x_access_token
    }).then(function (response) {
        console.log(response);
    })
        .catch(function (error) {
            console.log(error);
        });
}


export const fetchUserData = async () => {
    try {
        const response = await fetch("http://localhost:8000/users");
        const data = await response.json();
        console.log("user user user API", data)

        return data;
    } catch (e) {
        console.log(e)
    }
};


export function fetchUserDataCreate(data) {
    return axios.post("http://localhost:8000/users/create", {
        username: data.username,
        password: data.password,
        email: data.email,
        role: data.role,
        img: data.img,
    }).then(function (response) {
        console.log(response);
    })
        .catch(function (error) {
            console.log(error);
        });
}


export function fetchRegisterData(data) {
    return axios.post("http://localhost:8000/user/login/register", {
        username: data.username,
        password: data.password,
        email: data.email,
        role: data.role,
        img: data.img,
    }).then(function (response) {
        console.log(response);
    })
        .catch(function (error) {
            console.log(error);
        });
}


export function fetchLoginData (data)  {
        return axios.post("http://localhost:8000/user/login/login", {
        username: data.username,
        password: data.password,

    }).then(function (response) {
            const data = response.data;
        // console.log("datadatadatadatadata", data);
        return data
    })
        .catch(function (error) {
            console.log(error);
        });
}

