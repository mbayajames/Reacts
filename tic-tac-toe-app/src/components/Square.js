import {useState} from 'react';

function Square({value ,onSquareClick}) {
    // const [value, setValue] = useState(null);

    // function handleClick(){
    //    setValue("X");

    // }       
    


    return (
        <>
            <button className="Square" onClick={onSquareClick}>{value}</button>
        </>   
    );
}  
  
  export default Square;
  