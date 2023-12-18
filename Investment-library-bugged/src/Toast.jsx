import React from 'react';
import ReactDOM from 'react-dom';

const Toast = React.forwardRef(function Toast({ message }, ref) {
    return (
        <aside className="toast" data-testid="toast">
            <p>{message}</p>
        </aside>
    );
})

export default Toast;
