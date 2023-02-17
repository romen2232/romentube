
export interface User {
    id?: number
    username?: string
    name?: string
    last_name?: string
    password?: string
}

/**
 * Get all users
 * @returns {Promise<User[]>} Array of users
 * @throws {Error} If users not found
 * */
const getAllUsers = async ()=>{
    const response = await fetch('localhost:8000/users');
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch users.');
    }
    return data;
}

/**
 * Get user by id
 * @param {number} id
 * @returns {Promise<User>} User
 * @throws {Error} If user not found
 * */
const getUserById = async (id: number)=>{
    const response = await fetch(`localhost:8000/users/${id}`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch user.');
    }
    return data;
}

/**
 * Create new user
 * @param {User} user
 * @returns {Promise<User>} User
 * @throws {Error} If user not created
 * */
const createUser = async (user: User)=>{
    const response = await fetch('localhost:8000/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Could not create user.');
    }
    return data;
}

/**
 * Update user
 * @param {User} user
 * @returns {Promise<User>} User
 * @throws {Error} If user not updated
 * */
const updateUser = async (user: User)=>{
    const response = await fetch(`localhost:8000/users/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Could not update user.');
    }
    return data;
}

/**
 * Delete user
 * @param {number} id
 * @returns {Promise<User>} User
 * @throws {Error} If user not deleted
 * */
const deleteUser = async (id: number)=>{
    const response = await fetch(`localhost:8000/users/${id}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Could not delete user.');
    }
    return data;
}


const UserAPI = {
    getAllUsers
    ,getUserById,
    createUser,
    updateUser,
    deleteUser
}

export default UserAPI