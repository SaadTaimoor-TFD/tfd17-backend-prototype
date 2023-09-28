import { Container, Header, Button, Image, List, Checkbox } from "semantic-ui-react"
import CardsManager from "../services/cardsService"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const CardItem = ({ card }) => {
  const text = card.question ? card.question : card.question_img
  const navigate = useNavigate()
  return (
    <List.Item>
      <List.Content floated='right'>
        <Button color="primary" onClick={() => navigate("./card/" + card.id)}>Edit</Button>
        <Checkbox toggle defaultChecked />
      </List.Content>
      <List.Content>{card.id}: {text}</List.Content>
    </List.Item>
  )
}

const MainPage = () => {
  const manager = new CardsManager()
  const [cards, setCards] = useState(manager.getCards())
  const navigate = useNavigate()

  const onEdit = (id) => {
    navigate("./card/" + id)
  }

  const onAdd = () => {
    navigate("./card/")
  }

  return (
    <Container>
      <Header as="h1">Omimo Card Manager</Header>
      <Header as="h3">Cards</Header>
      <Button color="primary" onClick={onAdd}>Add Card</Button>
      <List divided verticalAlign='middle'>
        {Object.values(cards).map(card => <CardItem key={card.id} card={card} onEdit={onEdit} />)}
      </List>
    </Container>
  )
}

export default MainPage