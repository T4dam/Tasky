/*eslint-disable*/
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ onActiveColor }) => {
  const [color, setColor] = useState('#ff0000');
  const handleColor = (color) => {
    setColor(color.hex);
    onActiveColor(color);
  };
  return (
    <SketchPicker color={color} onChangeComplete={(color) => { handleColor(color) }} />
  );
};

export default ColorPicker;
