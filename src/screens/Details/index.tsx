import { StyleSheet } from 'react-native'

import { Container,
         ContainerInfo,
         Name,
         Subtitle,
         ContainerIngredient,
         Ingredient,
         Instruction,
         Button } from './styles'

export function Details({navigation,route}){
  const dataFood = route.params
  
  return(
    <Container>
      <img 
        src={dataFood.strMealThumb}
        style={styles.image}
      />
      <ContainerInfo>
        <Name>{dataFood.strMeal}</Name> 
        <Subtitle>Ingredients</Subtitle>
        <ContainerIngredient
          horizontal
          showsHorizontal='false'>
          <Ingredient>{dataFood.strIngredient1}</Ingredient>
          <Ingredient>{dataFood.strIngredient2}</Ingredient>
          <Ingredient>{dataFood.strIngredient3}</Ingredient>
          <Ingredient>{dataFood.strIngredient4}</Ingredient>
          <Ingredient>{dataFood.strIngredient5}</Ingredient>
          <Ingredient>{dataFood.strIngredient6}</Ingredient>
          <Ingredient>{dataFood.strIngredient7}</Ingredient>
          <Ingredient>{dataFood.strIngredient8}</Ingredient>
        </ContainerIngredient>
        <Subtitle>Instructions</Subtitle>
        <Instruction>{dataFood.strInstructions}</Instruction>
        <Button onPress={() => navigation.goBack()}>
          Back
        </Button>
      </ContainerInfo>
    </Container>
  )
}

const styles = StyleSheet.create({
  image:{
    width: '360px',
    height: '150px',
    borderRadius: '8px'
  }
})
