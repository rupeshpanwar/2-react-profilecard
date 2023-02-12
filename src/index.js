import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//  ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//     );

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App />);

