import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';

/*ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/


// const el = React.createElement('h1', null, 'React the best');
// const el = React.createElement('h1', {className: 'title'}, 'React the best');
/*const el = React.createElement('div', {className: 'box'},
    React.createElement('h1', {className: 'title'}, 'React the best'),
    React.createElement('p', {className: 'text'}, 'Lorem ipsum dollor')
);
ReactDOM.render(el, document.getElementById('root'));*/


/*const el = <div className="box">
    <h1 className="title">Title</h1>
    <p className="text">Lorem ipsum dolor sit amet.</p>
</div>;*/


// const el = <h1>Sum 2 + 2 = {2 + 2}</h1>;


/*
const a = 4;
const b = 5;
// const el = <h1>sum 2 +2 = {2 + 2}</h1>;
// const el = <h1>sum {a + b}</h1>;
const isActive  = true;
const el = <h1 className={isActive ? 'active' : 'disable'}>Title</h1>;
*/

// ReactDOM.render(el, document.getElementById('root'));



ReactDOM.render(<App/>, document.getElementById('root'));


