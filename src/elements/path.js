const React = require('react');

const DraggableBase = require('./base/draggable');

class Path extends DraggableBase {

  render() {
    const {
      d,
      fill,
      transform,
	  opacity,
    } = this.props;
    
    return (
      <path d={d}
            fill={fill}
            transform={transform}
			opacity={opacity}
            {...this.draggableProps} />
    );
  }

}

// Prop types
Path.propTypes = {
  d: React.PropTypes.string.isRequired
};

Path.defaultProps = {
   opacity: 1,
}

module.exports = Path;