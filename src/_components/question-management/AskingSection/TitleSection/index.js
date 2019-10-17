import React from 'react';

import './style.css';

class TitleSection extends React.Component {
    render() {
        return (
            <div className="title-section">
                <h1>What's your question title?</h1>
                <div className="ui ignored info message">
                    <i className="info icon"></i>
                    Tip
                    <p>Entering a meaningfull title help other people easily know what you are asking for.</p>
                    <p>Examples:</p>
                    <p><i className="icon check circle outline"></i>"How to Use Prepositions of Time and Date?"</p>
                    <p><i className="icon times circle outline"></i>"Help me please!"</p>
                </div>
                
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" placeholder="Enter your question title"/>
                </div>
            </div>
        );
    }
}

export default TitleSection;