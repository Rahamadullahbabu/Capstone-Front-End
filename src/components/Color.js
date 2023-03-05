import React,{useState} from 'react'
import TextField from "@mui/material/TextField";
// import "./App.css";
function AddColor() {

const [color,setColor]=useState('');
const [colorList,setColorList]=useState(['']);

    const styles= {
        color:color,
        width:"40%"
    }
    
  return (
    <div >
        <div className='add-color'>
<TextField  onChange={(event)=>setColor(event.target.value)} style={styles} type="text" value={color} placeholder="Enter color"






/>
<button className="color-button" onClick={()=>setColorList([...colorList,color])}>Add Color</button>
</div>

 {colorList.map((clr)=>(<ColorBox color={clr}/>))}

    </div>
  )
}



function ColorBox({color}){
    const styles={
        backgroundColor:color,
        borderRadius: "50%",
        width: "20px",
        height: "20px"
       
        
        
    }
    return(<div style={styles}></div>)
}

export default AddColor