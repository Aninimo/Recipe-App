import { Container,
         Title,
         Button } from './styles'

export function GetStarted({navigation}){
  return(
    <Container>
      <img src='https://raw.githubusercontent.com/anditorx/GroceryApp/main/src/res/images/Illustrations/il_getStarted.png' width='180px'/>
      <Title>
        Search for your {'\n'} favories meals
      </Title>
      <Button onPress={() => navigation.navigate('Home')}>Get started</Button>
    </Container>
  )
}
