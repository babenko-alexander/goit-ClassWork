import React from 'react';
import PropTypes from 'prop-types';
import ToDo from '../ToDo/ToDo';
import FlipMove from 'react-flip-move';

import styles from './ToDoList.css';

const ToDoList = ({tasks, deleteItem, update}) => {
    return (
            <ul className={styles.theList}>
                <FlipMove>
                {tasks.map(el =>
                <ToDo key={el.id} text={el.text} id={el.id} 
                deleteItem={deleteItem}
                update={update}/>)}
                    {/* <li className={styles.theList__item} key={el.id} onClick={() => deleteItem(el.id)}>{el.text}</li> */}
                </FlipMove>
            </ul>
    )
};

ToDoList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
};

export default ToDoList;
