import React, { useEffect, useRef } from 'react'
import Item from './Item'
import Form from './Form'

const ScrollToBottom = () => {
  const elementRef = useRef()
  useEffect(() => elementRef.current.scrollIntoView())
  return <div ref={elementRef} />
}

const TodoList = ({ items, setItems, setMessage, toggle, setToggle, message }) => {
  const removeItem = (value) => {
    const filteredItems = items.filter(item => item !== value)
    setItems(filteredItems)
    setMessage('removed item')
    setTimeout(() => setMessage(''), 4000)
  }

  const removeAll = () => {
    localStorage.clear()
    setItems([])
    setMessage('removed all items')
    setTimeout(() => setMessage(''), 4000)
  }

  const removeCompleted = () => {
    const filteredItems = items.filter(item => item.completed !== true)
    if (filteredItems.length !== items.length){
      setItems(filteredItems)
      setMessage('removed completed items')
      setTimeout(() => setMessage(''), 4000)
    }
  }

  return (
    <div className='todo-list'>
      <h1>To-Do List</h1>
      {items.map((item, index) =>
        <div key={index}>
          <Item
            setItems={setItems}
            items={items}
            item={item}
            removeItem={removeItem}
            index={index}
          />
        </div>
      )}
      <p className='message'>{message}</p>
      <button
        className='add-item'
        onClick={() => setToggle(!toggle)}>
        <i className='far fa-edit'></i>
      </button>
      {toggle ?
        <Form
          items={items}
          setItems={setItems}
          setToggle={setToggle}
          toggle={toggle}
          setMessage={setMessage}
        />
        : ''}
      <br/>
      {items.length > 0 &&
        <>
          <button onClick={removeAll}>remove all</button>
          <button onClick={removeCompleted}>remove completed items</button>
        </>
      }
      <ScrollToBottom />
    </div>
  )
}

export default TodoList