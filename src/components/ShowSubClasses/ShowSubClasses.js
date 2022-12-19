import React, { useContext } from 'react'
import { MyContexts } from '../MyContexts/MyContexts';
import './ShowSubClasses.css'

export const ShowSubClasses = () => {

  const {myClassList} = useContext(MyContexts)

  return (
    <div className='ShowSubClassesMainContainer'>
    <h3 style={{margin: '1rem 0 0 0'}}>Below Are the Classes you can subscribe to: </h3>
    <div className='classesToSubscribeContainer'>
    {myClassList.map((item)=> (
      <h3 className='classesToSubscribe'>{item}</h3>
    ))}
    </div>
    </div>
  )
}
