import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #EFF1ED;
`

export const Logo = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
  color: #4C956C;
`

export const Header = styled.View`
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 24px;
`

export const Input = styled.TextInput`
  width: 250px;
  height: 50px;
  border: 1px solid #4C956C;
  border-radius: 8px;
  padding: 1rem;
`

export const Button = styled.TouchableOpacity`
  padding: 15px 24px;
  background: #4C956C;
  border-radius: 8px;
`

export const Foods = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardFood = styled.TouchableOpacity`
  width: 170px;
  height: 200px;
  justify-content: center;
  align-items: center;
`
