import React from "react"

function EyesOnMe() {
    const handleFocus = () => console.log('Good!');
    const handleBlur = () => console.log('Hey! Eyes on me!');

  return (
    <button onFocus={handleFocus} onBlur={handleBlur}>
      Eyes On Me
    </button>
  );
}

export default EyesOnMe

