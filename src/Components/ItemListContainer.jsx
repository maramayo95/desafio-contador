import React from 'react'
import Counter from './Counter'
import CounterCustomHook from './CounterCustomHook'
import CounterDisabledButton from './CounterDisabledButton'

const ItemListContainer = () => {
    function onAdd(count){
        console.log(`Se han seleccionado ${count} productos`)
    }
  return (
    <div>
        <Counter stock={5} onAdd={onAdd} min={1} sum={1} res={1}/>
        <CounterDisabledButton stock={5} onAdd={onAdd} min={1} sum={1} res={1}/>
        <CounterCustomHook stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer