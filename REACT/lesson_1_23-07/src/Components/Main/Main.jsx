import React from 'react';
import Post from '../Post/Post';
import List from '../List/List';


const Main = () => {
    return (
    <div>
        <h1>Main</h1>
        <Post title='Title 1' text='Paragraph 1' likes={100} date='02.06.2018'/>
        <Post title='Title 2' text='Paragraph 2' likes={50} date='05.04.2018'/>
        <Post title='Title 3' text='Paragraph 3' likes={1} date='15.03.2018'/>
        <List arrNumbers = {[1, 2, 3, 4, 5, 6, 7, 8, 9]}/>
        <List arrNumbers = {[12, 235, 346, 4688, 685, 32846, 37, 538, 923]}/>
    </div>
    )
};

export default Main;

