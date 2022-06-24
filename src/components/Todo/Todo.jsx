import React, { Component } from 'react';
import styled from 'styled-components';


class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            arrData: [{
                id: '1',
                title: 'Project Todo List Progate.',
                done: false,
                date: new Date()
            }, {
                id: '2',
                title: 'Buy Coffee.',
                done: false,
                date: new Date()
            }],
            edit: false,
            id: null,
        }
    }

    onSubmitHandle(event) {
        event.preventDefault();
        if (event.target.item.value !== '') {
            this.setState({
                arrData: [...this.state.arrData, {
                    id: Date.now(),
                    title: event.target.item.value,
                    done: false,
                    date: new Date()
                }]
            });
        }

        event.target.item.value = '';
    }

    onDeleteHandle() {
        let id = arguments[0];

        this.setState({
            arrData: this.state.arrData.filter(item => {
                if (item.id !== id) {
                    return item;
                }
            })
        });
    }

    onEditHandle(event) {
        this.setState({
            edit: true,
            id: arguments[0],
            title: arguments[1]
        });
    }

    onUpdateHandle(event) {
        event.preventDefault();

        this.setState({
            arrData: this.state.arrData.map(item => {
                if (item.id === this.state.id) {
                    item['title'] = event.target.updatedItem.value;
                    return item;
                }

                return item;
            })
        });

        this.setState({
            edit: false
        });
    }

    onCompleteHandle() {
        let id = arguments[0];

        this.setState({
            arrData: this.state.arrData.map(item => {
                if (item.id === id) {
                    item['done'] = true;
                    return item;
                }

                return item;
            })
        });
    }

    renderEditForm() {
        if (this.state.edit) {
            return <Form onSubmit={this.onUpdateHandle.bind(this)}>
                <Input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />
                <Button className="update-add-item">Update</Button>
            </Form>
        }
    }

    render() {
        return (
            <Section>
                <TextHeader>
                    Todo List
                </TextHeader>
                {this.renderEditForm()}
                <Form onSubmit={this.onSubmitHandle.bind(this)}>
                    <Input type="text" name="item" className="item" />
                    <Button className="btn-add-item">Add</Button>
                </Form>
                {/* <ParentList> */}
                {/* <ParentList> */}
                {this.state.arrData.map(item => (
                    <ParentBox>
                        <ChildBox>
                            <input type="checkbox" key={item.id} onClick={this.onCompleteHandle.bind(this, item.id)} />
                            <ListText className={item.done ? 'done' : 'hidden'}>{item.title}</ListText>

                        </ChildBox>
                        <ChildBox>
                            <Button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</Button>
                            <Button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</Button>

                        </ChildBox>
                    </ParentBox>
                ))}
                <Author>
                    - Inggih Rembang Setyo - 149252629101-234 -
                </Author>
            </Section>
        );
    }
}

export default Todo;

const Button = styled.button`
  
    background: #54BAB9;
    box-shadow: 2px 3px #18978F;
    color: white;
    height:30px;
    font-size: 1em;
    margin: 0 2px;
    padding: 0.25em 1em;
    border:0;
    border-radius: 3px;
`;

const Section = styled.section`
    width: 50%;
    background-color: #eee;
    box-shadow: 5px 5px #ccc;
    border: 2px solid #eee;
    border-radius:5px;
    padding: 10px;
    margin: 20vh auto;
`

const TextHeader = styled.h1`
    text-align:center;
    color:#54BAB9;
    font-family: 'Courier', sans-serif;
    padding-bottom:5px;
`

const ParentBox = styled.div`
    display:flex;
    flex-wrap: wrap;
    border:0px solid #000;
    border-radius:5px;
    background: #fff;
    margin: 7px 20px;
    justify-content: space-between;
`

const ChildBox = styled.div`
    padding:5px 10px;
    flex-wrap: wrap;

`

const ListText = styled.span`
    font-size: 20px;
    padding-left: 5px;
    color: #000;
`

const Input = styled.input`
    height: 30px;
    border:0;
    min-width:300px;
    outline:none;
    border-radius:5px;
`

const Form = styled.form`
    text-align:center;
    margin: 20px 0;
`

const Author = styled.h5`
    text-align:center;
    margin-top:55px;
    color: #54BAB9;
`