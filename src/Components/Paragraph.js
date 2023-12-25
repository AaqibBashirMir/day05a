import React from 'react'
import './Paragraph.css'
import { useState } from 'react'
import texts from './Data.js'

function Paragraph() {
    const [text, setText] = useState([]);
    const [count, setCount]=useState(0);
    const submitHandler=(e)=>{
        e.preventDefault();
        let tempTexts=parseInt(count);
        if (tempTexts>8){
               tempTexts=8;
               alert(" Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀");
            }
            if(tempTexts<1){
                alert("Please enter a number greater than zero");
            }
          setText(texts.slice(0,tempTexts))

    }
    return (
        <div>
            <h2>Paragrapgh Generator</h2>
            <form onSubmit={submitHandler}>
                <input
                    type='number'
                    id='input'
                    value={count}
                    onChange={(e)=>{setCount(e.target.value)}}
                />
                <button className='btn'>Generate</button>
            </form>
            <div style={{
                margin:"100px",
                border:"1px solid green"
            }}>
            {
            text.map((list)=>{
                return <p>{list}</p>
            })
           }
            </div>
          
           
        </div> 
    )
}

export default Paragraph
