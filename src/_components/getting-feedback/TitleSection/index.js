import React from 'react';

import './style.css';

class TitleSection extends React.Component {
    render() {
        const { setPreviewTitle } = this.props;
        return (
            <div className="title-section">
                <h1>What's your feedback post's title?</h1>
                <div className="ui ignored info message">
                    <i className="info icon"></i>
                    Tip
                    <p>Entering a meaningfull title help other people easily know what you want to get feedback for.</p>
                    <p>Examples:</p>
                    <p><i className="icon check circle outline"></i>"Giúp sửa lỗi phát âm khi lồng tiếng phim"</p>
                    <p><i className="icon times circle outline"></i>"Nhận xét với"</p>
                </div>
                
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" id="ts-txt-title" onChange={(e) => { setPreviewTitle(e.target.value) }} placeholder="Enter your question title"/>
                </div>
            </div>
        );
    }
}

export default TitleSection;