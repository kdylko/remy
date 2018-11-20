import React from 'react';
import PropTypes from 'prop-types';

import clip from '~image/clip.svg';
import loader from '~image/loader.svg';
import fileIcon from '~image/file.svg';
import close from '~image/close.svg';

class UploadComponent extends React.PureComponent {
  static propTypes = {
    file: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    onChangeFile: PropTypes.func.isRequired,
    onCancelFile: PropTypes.func.isRequired,
  };

  handleCancelFile = () => {
    const { onCancelFile} = this.props;

    onCancelFile();
  };

  switchLabel = () => {
    const { fileName } = this.props;

    if (fileName.length) {
      return (
        <div className="is-uploaded">
          <img src={fileIcon} className="file" />
          <span className="file-name">{fileName}</span>
          <img
            src={close}
            className="file-cancel"
            onClick={this.handleCancelFile}
          />
        </div>
      );
    } else {
      return (
        <label htmlFor="file">
          <div className="flex-both-centered">
            <img src={clip} className="clip" />
            <span className="attach">Attach your CV</span>
            Max file size – 3Mb
          </div>
        </label>
      );
    }
  };

  render() {
    const {
      file,
      onChangeFile,
    } = this.props;
    const label = this.switchLabel();

    return (
      <div className="file-upload">
        <input
          type="file"
          name="file"
          id="file"
          className="inputfile"
          value={file}
          onChange={onChangeFile}
          accept=".pdf, .doc, .docx, .xlsx"
        />

        {label}
      </div>
    );
  }
}

export default UploadComponent;
