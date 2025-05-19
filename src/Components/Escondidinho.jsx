import { useState } from 'react'

export function Escondidinho(){
    const [MostrarTexto, setMostrarTexto] = useState(true)
    
    function Mudanca(){
        MostrarTexto === true ? setMostrarTexto(false) : setMostrarTexto(true)
    }


    return(
        <div>
        <button onClick={() => Mudanca()}>
        {MostrarTexto ? 'Esconder' : 'Mostrar'} texto
        </button>
        {MostrarTexto && <p>oierrrrrrrrr</p>}
        </div>
    )
}