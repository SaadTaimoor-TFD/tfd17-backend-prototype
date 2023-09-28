import { Button, Container, Form, Header } from "semantic-ui-react"
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from "react";
import CardsManager from "../services/cardsService"

const categoryOptions = [
  { key: 'B1', text: 'B1', value: 'B1' },
  { key: 'B2', text: 'B2', value: 'B2' },
  { key: 'B3', text: 'B3', value: 'B3' },
  { key: 'B4', text: 'B4', value: 'B4' },
  { key: 'S1', text: 'S1', value: 'S1' },
  { key: 'S2', text: 'S2', value: 'S2' },
  { key: 'S3', text: 'S3', value: 'S3' },
  { key: 'S4', text: 'S4', value: 'S4' },
]
const typeOptions = [
  { key: 'normal', text: 'Normal', value: 'normal' },
  { key: 'fillin', text: 'Fill in the Blank', value: 'fillin' },
]

const ItemPage = (params) => {
  const { id } = useParams();
  const pageIsEdit = !!id;
  const manager = new CardsManager();
  const [card, setCard] = useState(!!id ? manager.getCard(id) : manager.newCardTemplate());
  const navigate = useNavigate();

  const onSave = () => {
    if (pageIsEdit)
      manager.editCard(id, card)
    else
      manager.addCard(card)
    navigate("/")
    alert("Your changes have been saved!")
  }

  const editValue = (key, val) => {
    setCard({ ...card, [key]: val })
  }

  console.log(card)

  return (
    <Container>
      <Header as="h1">Omimo Card Manager</Header>
      <Header as="h3">{pageIsEdit ? `Editing Card: ${id}` : "Add New Card"}</Header>
      <Form>
        <Form.Group widths='equal'>
          <Form.Select
            fluid
            label='Category'
            options={categoryOptions} placeholder='Category'
            value={card.category}
            onChange={(_, { value }) => editValue("category", value)} />
          <Form.Select
            fluid
            label='Type'
            options={typeOptions}
            value={card.type}
            onChange={(_, { value }) => editValue("type", value)}
          />
          <Form.Input
            fluid
            label='Chapter'
            placeholder='Chapter'
            value={card.chapter}
            onChange={(e) => editValue("chapter", e.target.value)}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.TextArea
            label='Question'
            placeholder='Question'
            value={card.question}
            onChange={(e) => editValue("question", e.target.value)}
          />
          <Form.TextArea
            label='Answer'
            placeholder='Answer'
            value={card.answer}
            onChange={(e) => editValue("answer", e.target.value)}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input type="file" label="Question Image" disabled />
          <Form.Input type="file" label="Answer Image" disabled />
        </Form.Group>

        <Form.Field>
          <Form.Input
            label='References'
            placeholder='References'
            value={card.reference}
            onChange={(e) => editValue("reference", e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <Button color="primary" onClick={onSave}>Save</Button>
        </Form.Field>
      </Form>
    </Container>
  )
}

export default ItemPage