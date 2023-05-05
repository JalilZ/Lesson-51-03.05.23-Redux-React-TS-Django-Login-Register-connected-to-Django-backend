import axios from 'axios'

export function login(user: any) {
  // console.log(user);
  return new Promise<{ data: any }>((resolve) =>
      axios.post("http://127.0.0.1:8000/login/", user).then( res => resolve({ data: res.data }))
  );
}



//just for test
export function testAbout(token: string) {
  const config = {headers: {'Authorization': `Bearer ${token}`}};
  return new Promise<{ data: any }>((resolve) =>
  
      axios.get("http://127.0.0.1:8000/about/", config).then( res => resolve({ data: res.data }))
  );
}

//just for test
export function testContact() {
  return new Promise<{ data: any }>((resolve) =>
      axios.get("http://127.0.0.1:8000/contact/").then( res => resolve({ data: res.data }))
  );
}


export function register(user: any) {
  // console.log(user);
  return new Promise<{ data: any }>((resolve) =>
      axios.post("http://127.0.0.1:8000/register/", user).then( res => resolve({ data: res.data }))
  );
}