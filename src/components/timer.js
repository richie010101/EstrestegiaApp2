
import {useEffect,useState} from 'react'

export default function timer() {

    const[segundos,setSegundos]=useState(0);
    
    useEffect(()=> {
        if(segundos <= 0) return;

        const timeout = setTimeout(() => {
            setSegundos(segundos-1);
        },1000 ) 

        return() => clearTimeout(timeout);

    },[segundos]);


}