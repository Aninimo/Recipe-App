import { createContext, useCallback, useState } from 'react'
import axios from 'axios'

export const myContext = createContext()

export const AppContext = ({ children }) => {
  const[meals,setMeals] = useState([])

  const fetchHomeMeals = useCallback((search) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => {
      setMeals(res.data.meals)
    })
  },[])

  return(
    <myContext.Provider
      value={{
        fetchHomeMeals,
        meals
      }}>
      {children}
    </myContext.Provider>
  )
}
