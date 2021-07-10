import { React, useState } from 'react'

import '../style/jogo.scss'
// data import
import data from '../services/data'
import Cronometro from '../components/Cronometro'
// svg
import Next from '../assets/NextButton.svg'
// imagem
import level1 from '../assets/level1.jpg'

export default function Ncordenadas() {

    const [Nivel, setNivel] = useState(0)
    const [Achado, setAchado] = useState([])



    function between(x, min, max) {
        return x >= min && x <= max;
    }

    function larapio(exemplo) {



        // checa se o axis X e o axis Y do click bate com algum dos personagens 
        // e algo provisorio continuo pensando sobre esse pedaço de codigo pois o tamanho dele me deixa desconfortavel
        //  quero algo compacto e mais automatizado


        if (Nivel <= 2) {
            if (between(exemplo.pageY, data[Nivel].Yaxis[0], data[Nivel].Yaxis[1]) && between(exemplo.pageX, data[Nivel].Xaxis[0], data[Nivel].Xaxis[1])) {
                setNivel(Nivel + 1)
                setAchado(Achado.concat(data[Nivel].name))
                alert(`yee! you Found me the ${data[Nivel].name}`)

            }
        }


    }

    return (
        <div className='main'>
            <Cronometro></Cronometro>
            <div>
                <img onClick={(e) => larapio(e)} width="1920px" height="1342px" src={level1} alt='ache' />
            </div>

            <div className='botton'>
                <p className='Find'>Find: </p>
                <div className='encontrar'>

                    <p className={"Animais" + (Achado.length >= 1 ? ' achado' : '')}>Yeti</p>
                    <p className='separador'>&#62; </p>
                    <p className={"Animais" + (Achado.length >= 2 ? ' achado' : '')}>Dancing penguin</p>
                    <p className='separador'>&#62; </p>
                    <p className={"Animais" + (Achado.length >= 3 ? ' achado' : '')}>Rat</p>
                </div>



                {Achado.length >= 3 ? <div className='fase'><button>Next Image <img src={Next} alt="Arrow svg" /></button></div> : ''}

            </div>

        </div>
    )
}
