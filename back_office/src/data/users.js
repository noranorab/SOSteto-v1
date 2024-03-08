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
