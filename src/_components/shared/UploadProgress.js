import React from "react";

class UploadProgress extends React.Component {
  render() {
    const { customStyles, percentage, isHidden } = this.props;
    const displayStyles = isHidden ? 'none' : 'block';
    return (
      <div style={{...customStyles, display: `${displayStyles}`}} className="progress">
        <div
          className="progress-bar bg-danger"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {`${percentage}%`}
        </div>
      </div>
    );
  }
}

export default UploadProgress;
