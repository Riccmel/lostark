import React from 'react'
import {data} from "./data.js"






const Submit = (props) => { 
    const [eng, setEng] = React.useState([]);
    const [p, setP] = React.useState("");
    const handleSubmit = () => {
        setP(`You choose ${props.eng1} and ${props.eng2}`);
        data.map(item => {
            if(item.engravingList.includes(props.eng1) && item.engravingList.includes(props.eng2) ){
                setEng(prev => {
                    return prev.concat(`Engraving used for ${item.name} stats suggested: ${item.stat1} and ${item.stat2}`);
                })
            }
        });

    }
console.log(eng);
  return (
    <div>
        <div className="submit">
            <button onClick={handleSubmit}>Submit</button>
            <p>{p}</p>
        </div>
        <div className="eng">
            {eng.map(item =>{
                return <p className="eng_p">{item}</p>
            })}
        </div>
    </div>
  )
}

export default Submit