
const url = 'https://jsonplaceholder.typicode.com'

const getUsers = () => {
    return  fetch(url + '/users', {
        method: 'Get'
    })
        .then(value => value.json())
}


const createUser = ({username, firstname, lastname, email, type, password}) => {
    return fetch(url + '', {
        method: 'POST',
        body: JSON.stringify({username, firstname, lastname, email, type, password}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(value => value.json())
}

const editUser = (obj) => {
    let {id, username, firstname, lastname, email, type, password} = obj;
    console.log(obj);
    return  fetch(url + '' + id, {
        method: 'PUT',
        body: JSON.stringify({id, username, firstname, lastname, email, type, password}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((value) => value.json())
}

const deleteUser = (id) => {
    return  fetch(url + ''+ id, {
        method:'DELETE'
    })
}

export {getUsers, createUser, editUser, deleteUser}
