import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

const render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root'),
    );
};

render();

if (module.hot) {
    module.hot.accept('./app', () => {
        render();
    });
}
