/*eslint-disable*/
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = () => {
  const [color, setColor] = useState('#ff0000');
  return (
    <SketchPicker color={color} onChangeComplete={(color) => { setColor(color.hex); }} />
  );
};

export default ColorPicker;
