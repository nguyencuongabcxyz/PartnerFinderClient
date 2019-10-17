import React from "react";

class UploadButton extends React.Component {
  styles = {
    border: "1px solid wheat",
    borderRadius: "5px",
    margin: "0 auto",
    width: "170px",
    display: "block",
    padding: "6px 12px",
    cursor: "pointer",
    backgroundColor: "#F8B906",
  };
  render() {
    const { content, callback, acceptType, id, customStyles } = this.props;
    return (
      <div>
        <label htmlFor={id} className="custom-file-upload" style={{...this.styles, ...customStyles}}>
          <i className="icon cloud upload upload-icon"></i>
          {content}
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          id={id}
          accept={acceptType}
          onChange={e => {
            callback(e);
          }}
        />
      </div>
    );
  }
}

export default UploadButton;
