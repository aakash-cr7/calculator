import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  state = {
    window: { height: null, width: null },
  };

  getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  handleResize = () => {
    this.setState({
      window: this.getWindowDimensions(),
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  getPanelColor() {
    const {
      window: { width },
    } = this.state;
    const styles = {};

    if (width && width < 500) {
      styles["background"] = "red";
    }

    return styles;
  }

  render() {
    return (
      <div className="component-display" style={this.getPanelColor()}>
        <div>{this.props.value}</div>
      </div>
    );
  }
}
