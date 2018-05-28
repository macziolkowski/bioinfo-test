export function submitUser(data) {
    return dispatch => {
        return fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).catch(e => console.log(e));
    };
}
