import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

const App: React.FC = () => {
  return <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>;
};

let portal = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(portal);

root.render(<App />);