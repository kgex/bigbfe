
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const Login = () => {
  const router = useRouter();

  useEffect (() => {

   localStorage.removeItem('token');
   localStorage.removeItem('user');
   router.push('/');

  }, [])


  return (
    <>

      <p>{" "}</p>
    </>
  );
};

export default Login;
