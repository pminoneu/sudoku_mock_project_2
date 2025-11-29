import React from 'react';

// web button component
export default function CustomButton({ title, onPress }) {
  return (
    <button className="button-standard" onClick={onPress}>
      {title}
    </button>
  );
}
