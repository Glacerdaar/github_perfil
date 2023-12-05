import { useState, useEffect } from "react";

const Formulario = (props) => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou");
        
        return() => {
            console.log("O componente finalizou");
        }

    }, [])

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome])

    useEffect(() => {
        console.log("Matéria A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            // estadoAnterior = valornovo
            return evento.target.value;
        })
    }
    
    const renderizaResultado = () => {
        const media = (materiaA + materiaB + materiaC)/3;

        if (media >= 7) {
            return (
                <p>Olá {nome} foi aprovado</p>
            )
        } else if (media > 5 && media <= 6.9) {
            return (
                <p>Olá {nome} está de recuperação</p>
            ) 
        } else {
           return (
                <p>Olá {nome} está reprovado</p>
           ) 
        }
    }
        
    return (
        <form>
            <ul>
                {[1,2,3,4,5]. map(item => (
                    <li key={item}>{item}</li>
            ))}    
            </ul>
            

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={({target}) => setMateriaB(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={({target}) => setMateriaC(parseInt(target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;