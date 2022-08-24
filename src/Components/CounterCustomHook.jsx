
import useCounter from '../hooks/useCounter'

const CounterCustomHook = ({stock, onAdd}) => {
    const {add, substract, reset, count} = useCounter(stock)
      return (
    <div>
         <div className="counter-box">
            <h1>Counter Custom hook</h1>
            <p>Stock: {stock} </p>
            <p>Cantidad: {count} </p>
        
            <div>
                <button className="btn" onClick={substract} > - </button>
                <button className="btn" onClick={reset} > Reset </button>
                <button className="btn" onClick={add}> + </button>
            </div>
            <div>
                <button className="btn" onClick={() => onAdd(count)}>Confirmar</button>
            </div>
        </div>

    </div>
  )
}

export default CounterCustomHook