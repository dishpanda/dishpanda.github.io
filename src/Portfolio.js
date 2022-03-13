import React from "react";
import ImgsViewer from "react-images-viewer";

export default class Demo extends React.Component {
  render() {
    return (
      <ImgsViewer
        imgs={[
          { src: "https://source.unsplash.com/random" },
          { src: "https://source.unsplash.com/random" },
        ]}
        currImg={this.state.currImg}
        isOpen={this.state.viewerIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeViewer}
      />
    );
  }
}