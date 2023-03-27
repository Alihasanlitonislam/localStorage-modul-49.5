import React from 'react';
import Data from '../Data/Data';
import "./Card.css"

const Card = () => {
      const card = [
            {name: 'ali hasan', age: 24, diparment: 'computer', roll: 404438, id: 3958430583757601},
            {name: 'liton islam', age: 20, diparment: 'computer', roll: 404439, id: 3958430583757602},
            {name: 'milon islam', age: 25, diparment: 'computer', roll: 404437, id: 3958430583757603},
            {name: 'jim islam', age: 26, diparment: 'computer', roll: 404433, id: 3958430583757604},
            {name: 'saddem', age: 21, diparment: 'computer', roll: 404432, id: 3958430583757605},
            {name: 'julfikar islam', age: 22, diparment: 'computer', roll: 404431, id: 3958430583757606},
            {name: 'jonaeid islam', age: 23, diparment: 'computer', roll: 404443, id: 3958430583757607},
            {name: 'liton islam', age: 20, diparment: 'computer', roll: 404439, id: 3958430583757602},
            {name: 'milon islam', age: 25, diparment: 'computer', roll: 404437, id: 395843058375760}
      ]
      return (
            <div className='data'>
                  {
                        card.map(data => <Data
                        data = {data}
                        ></Data>)
                  }
            </div>
      );
};
export default Card;