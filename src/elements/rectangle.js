const React = require('react');

const DraggableBase = require('./base/draggable');

class Rectangle extends DraggableBase {

  render() {
    let {
      x, y,
      fill, gradient,
      height, width,
	  opacity,
    } = this.props;

    if(gradient) {
      fill = gradient;
    }
    
    return (
      <rect x={x}
            y={y}
            fill={fill}
            height={height}
            width={width}
			opacity={opacity}
            {...this.draggableProps} />
    );
  }

}

// Prop types
Rectangle.propTypes = {
  x: React.PropTypes.any.isRequired,
  y: React.PropTypes.any.isRequired,
  fill: React.PropTypes.string.isRequired,
  height: React.PropTypes.any.isRequired,
  width: React.PropTypes.any.isRequired
};

Rectangle.defaultProps = {
  x: 0,
  y: 0,
  fill: '#000',
  height: 100,
  width: 100,
  opacity: 1,
}

module.exports = Rectangle;