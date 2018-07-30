import React, {Component} from 'react';
import axios from 'axios'; 
import ToDoList from '../ToDoList/ToDoList';
import Button from '../Button/Button';
import styles from './App.css';



class App extends Component {

    state = {
        items: [],
        item: '',
    };

    componentDidMount() {
        axios.get('/tasks')
            .then(({data, status}) => {
                if (status === 200) {
                    this.setState({
                        items: data,
                    })
                }
            })
    };

    addItem = (e) => {
        e.preventDefault();
        // const value = this.state.item;
        // const task = {
        //     text: value,
        //     id: Date.now(),
        // };
        // if (value !== '') {
        //     this.setState(prevState => ({
        //         items: [task, ...prevState.items],
        //         item: '',
        //     }))
        // }
        const task = {text: this.state.item};
        axios.post('/tasks', task)
            .then(({data, status}) => {
                if (status === 201) {
                    this.setState(prev => ({
                        items: [data, ...prev.items],
                        item: '',
                    }))
                }
            }) 
    };

    itemChange = (e) => {
        // const value = e.target.value;
        // const name = e.target.name;
        const {name, value} = e.target;
            this.setState({
                [name]: value,
            })
    };

    deleteItem = (id) => {
        // const filter = this.state.items.filter(el => el.id !== id);
        // this.setState({
        //     items: filter,
        // })

        axios.delete(`/tasks/${id}`)
            .then(({status}) => {
                if (status === 200) {
                    this.setState({
                        items: this.state.items.filter(el => el.id !== id),
                    })
                }
            })
    };

    updateItem = (id, word) => {
        // const updateResult = this.state.items.map(el => (el.id === id ? {...el, text: text} : el));
        // this.setState({
        //     items: updateResult,
        // })

        const task = this.state.items.find(el => el.id === id);
        axios.put(`/tasks/${id}`, {...task, text: word,})
            .then(({status, data}) => {
                if (status === 200) {
                    this.setState ({
                        items: this.state.items.map(el => el.id === id ? data : el)
                    })
                }
            })
    }

    render() {
        return (
            <div className={styles.todoListMain}>
                <div className='header'>
                    <form onSubmit={this.addItem} action="POST">
                        <input name='item'
                               value={this.state.item}
                               onChange={this.itemChange}
                               placeholder="enter task"
                               type="text"
                               className={styles.input}/>
                        <Button type='submit' text='Add'/>
                    </form>
                    <ToDoList tasks={this.state.items}
                              deleteItem={this.deleteItem}
                              update={this.updateItem}/>
                </div>
            </div>
        )
    }
};

export default App;


