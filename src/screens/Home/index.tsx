import { useState, useContext, useCallback } from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { myContext } from '../../context'

import { Container,
         Header,
         Logo,
         Input,
         Button,
         Foods,
         CardFood } from './styles'

export function Home({ navigation }){
  const[search,setSearch] = useState('')

  const { fetchHomeMeals, meals } = useContext(myContext)

   const fetchMealsHandler = useCallback(() => {
    fetchHomeMeals(search)
  },[search,fetchHomeMeals])

  return(
    <Container>
      <Logo>Recipe App</Logo>
      <Header>
        <Input
          placeholder='Search for a food'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onPress={fetchMealsHandler}>
          <Feather
            name='search'
            size={18} 
            color='#FFF'
          />
        </Button>
      </Header>
      <Foods>
        {meals ? (
        ) : (
          meals.map((meal) => (
            <CardFood onPress={() => navigation.navigate('Details', meal)}>
              <img 
                src={meal.strMealThumb}
                style={styles.image}
              />
              <Text>{meal.strMeal}</Text>
            </CardFood>
          ))
        ) : (
          <>
            <Text>No meals found! Try another wprd</Text>
          </>
        )}
      </Foods>
    </Container>
  )
}

const styles = StyleSheet.create({
  image:{
    width: '150px',
    borderRadius: '8px',
    marginBottom: '5px'
  }
})
