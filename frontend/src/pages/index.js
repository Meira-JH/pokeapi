import { useEffect } from 'react';
import List from '../containers/List'

export default function Home(props) {

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token){
    }
  }, [] );

  return (
    <>
    <List />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
