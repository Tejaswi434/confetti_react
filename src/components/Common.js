import React , {useState} from 'react'

function updatedFunction(Original){
function Common() 
{
    const [counter,setCounter] = useState(0);
    const data=()=>{
    setCounter(counter+1);
    } 
    return ( <Original counter={counter} data={data} setCounter={setCounter}/> );
}
return Common;
}

export default updatedFunction