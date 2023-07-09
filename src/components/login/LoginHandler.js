import useFetch from '@/Hooks/useFetch';
const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL;

console.log(LOGIN_URL, "URL")

const loginHandler = (userName, password) => {

  useFetch(`${LOGIN_URL}/login`, "POST", {userName, password});

}

export default loginHandler;