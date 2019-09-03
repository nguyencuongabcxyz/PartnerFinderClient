import React from 'react';
import { removeModalBootstrap } from '../../_helpers/uiHelper';

const ServerError = () => {
    removeModalBootstrap();
    return (
        <div>ServerError</div>
    );
}

export default ServerError;