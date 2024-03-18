import axios from 'axios';


export async function getUsers() {
    try {
      const users = await axios.get('http://localhost:3000/api/users');
      console.log(users.data)
      return users.data
    } catch (error) {
      console.error('Error fetching users:', error);
    }
}

export async function getUserById({params}) {
  try {
    const response = await axios.get(`http://localhost:3000/api/users/${params.userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
}

export async function getfullUserDetails({params}) {
  try {
    const response = await axios.get(`http://localhost:3000/api/users/${params.userId}/details`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
}
export async function postFormUserDetails(userData, id) {
  try {
    const response = await axios.put(`http://localhost:3000/api/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error posting user details:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
}

