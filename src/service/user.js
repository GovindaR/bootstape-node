import axios from 'axios';

export async function logIn(data) {
  console.log('tsting', response);
  const response = await axios.post('http://localhost:8080/api/user', data);
  return response.data;
}

export async function signUp(data) {
  return await axios
    .post('http://localhost:8080/api/user', data)
    .then(function(response) {
      console.log(response);
      return response;
    })

    .catch(function(error) {
      return error;
      console.log(error);
    });
}
