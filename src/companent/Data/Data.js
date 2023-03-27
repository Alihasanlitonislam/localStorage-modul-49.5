import React from 'react';
import { Quintity, QuintityRemove } from '../Utility/utility';
const Data = ({data}) => {
      const {name, age, diparment, id} = data
      // console.log(data)
      const quintity = (id) =>{
            Quintity(id)
      }
      const quintityRemove = (id) =>{
            QuintityRemove(id)
      }
      return (
            <div className='bg-green-400 rounded-md p-4'>
                  <h1>Name : {name}</h1>
                  <h3>Age : {age}</h3>
                  <p>diparment : {diparment}</p>
                  <h3>id : {id}</h3>
                  <button onClick={()=> quintity(id)} className='btn p-4 text-2xl bg-white text-black rounded-xl mr-2'>add me....</button>
                  <button onClick={()=> quintityRemove(id)} className='btn p-4 text-2xl bg-white text-black rounded-xl'>remove me....</button>
            </div>
      );
};
export default Data;