import React from 'react';

import CKEditor from 'ckeditor4-react';

class CustomEditor extends React.Component {
    state = {
        data: '',
    }
    setData = (data) => {
        this.setState({
            data: data,
        })
    }

    concatData = (data) => {
        this.setState(prevState => ({ data: prevState.data + data }))
    }

    onChange = (evt) => {
        const { setPreviewContent } = this.props;
        this.setState({
            data: evt.editor.getData(),
        });
        setPreviewContent(this.state.data);
    }

    // Function to support comment feature 
    addParentComment = (postId) => {
        const { submitData } = this.props;
        const { data } = this.state;
        submitData(postId, data);
    }

    addSubComment = (parentId) => {
        const { submitData } = this.props;
        const { data } = this.state;
        submitData(parentId, data);
    }


    render(){
        const { config, styles } = this.props;
        const { data } = this.state;
        return(
            <CKEditor
            onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) }
            config={config}
            data={data}
            onChange={this.onChange} 
            style={styles}
             />
        );
    }
}

export default CustomEditor;