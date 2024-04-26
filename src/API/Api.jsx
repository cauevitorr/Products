import React from 'react';
import './Api.css'
import Produto from './Produto';
const Api = () => {

 const [data,setData] = React.useState(null)

 async function getData(event) {
  const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
  const json = await response.json();
  setData(json)

}

  return (
   <>
    <button onClick={getData}>Tablet</button>
    <button onClick={getData}>Notebook</button>
    <button onClick={getData}>Smartphone</button>
    {data != null ? <Produto datas={data}/> : null }
   </>
  )
 }
export default Api
