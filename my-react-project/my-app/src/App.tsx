import React, { useState } from 'react';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => {
const [form] = Form.useForm();
const [cards, setCards] = useState([
{ title: 'Nicolae', content: 'CR-212' },
{ title: 'Andrei', content: 'CR-214' },
{ title: 'Cătălin', content: 'CR-201' },
{ title: 'Ilie', content: 'CR-215' },
{ title: 'Marian', content: 'CR-217' },
{ title: 'Roma', content: 'CR-211' },


]);

const handleSubmit = (values: { title: string; content: string }) => {
const newCards = [...cards, values];
setCards(newCards);
console.log('Form values:', values);
alert('Forma s-a adăugat cu succes!');
};

return (
<Layout>
<Header>
<Menu theme="dark" mode="horizontal">
<Menu.Item key="1">Laboratorul 3</Menu.Item>
<Menu.Item key="2">Pagina 1</Menu.Item>
<Menu.Item key="3">Pagina 2</Menu.Item>
</Menu>
</Header>
<Content style={{ padding: '50px' }}>
<Form form={form} onFinish={handleSubmit}>
<Form.Item
name="title"
rules={[{ required: true, message: 'Introduceți titlul' }]}
>
<Input placeholder="Titlu" />
</Form.Item>
<Form.Item
name="content"
rules={[{ required: true, message: 'Introduceți contentul' }]}
>
<Input placeholder="Content" />
</Form.Item>
<Form.Item>
<Button type="primary" htmlType="submit">
Trimite
</Button>
</Form.Item>
</Form>
<div style={{ display: 'flex', flexWrap: 'wrap' }}>
{cards.map(card => (
<Card key={card.title} style={{ width: 300, margin: '20px' }}>
<Card.Meta title={card.title} description={card.content} />
</Card>
))}
</div>
</Content>
<Footer>Varzari Nicolae CR-212</Footer>
</Layout>
);
};

export default App;