import React, { useState } from 'react';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';
const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
    const [form] = Form.useForm();
    const [cards, setCards] = useState([
        { title: 'Contabilitate', content: 'CR-212', prenume: 'Varzari' },
        { title: 'Server', content: 'CR-214', prenume: 'Popescu' },
        { title: 'Bucatarie', content: 'CR-201', prenume: 'Ionescu' },
        { title: 'Testare', content: 'CR-215', prenume: 'Georgescu' },
        { title: 'Receptie', content: 'CR-217', prenume: 'Stoica' },
        { title: 'Sef', content: 'CR-211', prenume: 'Popa' },
    ]);

    const handleSubmit = (values: { title: string; content: string; prenume: string }) => {
        const newCard = { title: values.title, content: values.content, prenume: values.prenume };
        const newCards = [...cards, newCard];
        setCards(newCards);
        console.log('Form values:', values);
        alert('Forma s-a adăugat cu succes!');
    };

    return (
        <Layout>
            <Header style={{ display: 'flex', justifyContent: 'center' }}>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">LABORATORUL 3</Menu.Item>
                    <Menu.Item key="2">PAGINA 1</Menu.Item>
                    <Menu.Item key="3">PAGINA 2</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title="Meniu 1">
                            <Menu.Item key="1">Submeniu 1.1</Menu.Item>
                            <Menu.Item key="2">Submeniu 1.2</Menu.Item>
                            <Menu.Item key="3">Submeniu 1.3</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="Meniu 2">
                            <Menu.Item key="4">Submeniu 2.1</Menu.Item>
                            <Menu.Item key="5">Submeniu 2.2</Menu.Item>
                            <Menu.Item key="6">Submeniu 2.3</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title="Meniu 3">
                            <Menu.Item key="7">Submeniu 3.1</Menu.Item>
                            <Menu.Item key="8">Submeniu 3.2</Menu.Item>
                            <Menu.Item key="9">Submeniu 3.3</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                <Content style={{ padding: '50px' }}>
                    <Form form={form} onFinish={handleSubmit}>
                        <Form.Item name="title" rules={[{ required: true, message: 'Introduceți titlul' }]}>
                            <Input placeholder="Titlu" />
                        </Form.Item>
                        <Form.Item name="content" rules={[{ required: true, message: 'Introduceți contentul' }]}>
                            <Input placeholder="Content" />
                        </Form.Item>
                        <Form.Item name="prenume" rules={[{ required: true, message: 'Introduceți prenumele' }]}>
                            <Input placeholder="Prenume" />
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
                                <Card.Meta title={`${card.title} - ${card.prenume}`} description={card.content} />
                            </Card>
                        ))}
                    </div>
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>Varzari Nicolae CR-212</Footer>

        </Layout>
    );
};

export default App;
