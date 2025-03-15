const URL = 'http://localhost:3030/jsonstore/users/';

const createUser = async (data) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            imageUrl: data.imageUrl,
            phoneNumber: data.phoneNumber,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            address: {
                country: data.country,
                city: data.city,
                street: data.street,
                streetNumber: data.streetNumber,
            }
        })
    });

    const serverData = await response.json();
    return serverData;
}

const getAllUsers = async () => {
    const response = await fetch(URL);

    const data = await response.json();

    for (const key in data) {
        const date = new Date(data[key].createdAt);
        data[key].createdAt = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    return (Object.entries(data).map(([key, value]) => ({ key, value })));
}

const getOneUser = async (userId) => {
    const response = await fetch(URL + userId);
    return await response.json();
}

const editUser = async (userId, data) => {
    const response = await fetch(URL + userId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            imageUrl: data.imageUrl,
            phoneNumber: data.phoneNumber,
            updatedAt: new Date().toISOString(),
            address: {
                country: data.country,
                city: data.city,
                street: data.street,
                streetNumber: data.streetNumber,
            }
        })
    });
    return await response.json();
}

const deleteUser = async (userId) => {
    const response = await fetch(URL + userId, {
        method: 'DELETE'
    });
    return await response.json();
}

export default {
    createUser,
    getAllUsers,
    getOneUser,
    editUser,
    deleteUser
}