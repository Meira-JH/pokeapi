import { useRouter } from 'next/router'
import { useEffect } from 'react';
import LoginSection from '../containers/LoginSection'

export default function Login(props) {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    if(token){
      router.push('/')
    }
  }, [] );

  return (
    <>
      <LoginSection />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
