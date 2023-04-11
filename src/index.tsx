import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';

const ReactApp = () => <>React App</>;

createRoot(document.getElementById('reactApp'))
.render(<React.StrictMode><ReactApp /></React.StrictMode>);