import { useEffect } from 'react';
import List from '../containers/List'

export default function Error(props) {

  
  return (
    <>
    <h3>OPS! CONFIRA SUAS INFORMAÇÕES E TENTE NOVAMENTES</h3>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
