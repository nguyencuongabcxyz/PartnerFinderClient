import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = (props) => {
    return (
        <div style={{ display: `${props.display}`, marginTop: '30px', justifyContent: 'center' }}>
        <ClipLoader
            sizeUnit={"px"}
            size={40}
            color={'#123abc'}
            loading={true}
        />
    </div>
    );
}

export default Spinner;