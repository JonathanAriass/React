import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// We are saying that the root render should be changed with App
// this App which is a component.
root.render(<App />);
