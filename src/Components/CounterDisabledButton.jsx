import {useState} from 'react'

const CounterDisabledButton = ({stock, onAdd , min, sum ,res  }) => {
    const [count, setCount] = useState(min)
    const [disabledAdd, setDisabledAdd] = useState(false)
    const [disabledRest, setDisabledRest] = useState(false)

    function add(){
        if(count < stock){
            setCount(count + sum)
            setDisabledAdd(false)
            setDisabledRest(false)
        }
        if(count === (stock - 1 )){
            setDisabledAdd(true)
        } 
    }

    function substract(){
            if(count > min){
                setCount(count - res)
                setDisabledRest(false)
                setDisabledAdd(false)
            }
            if(count === (min + 1) ){
                setDisabledRest(true)
            }
        }
    

    function reset(){
        setCount(min)
    }

    console.log(count)

  return (
    <div>
         <div className="counter-box">
            <h1>Counter</h1>
            <p>Stock: {stock} </p>
            <p>Cantidad: {count} </p>
        
            <div>
                <button className="" onClick={substract} disabled={disabledRest} > - </button>
                <button className="" onClick={reset} > Reset </button>
                <button className="" onClick={add} disabled={disabledAdd}> + </button>
            </div>
            <div>
                <button className="btn" onClick={() => onAdd(count)}>Confirmar</button>
            </div>
        </div>
    </div>
  )
}

export default CounterDisabledButton