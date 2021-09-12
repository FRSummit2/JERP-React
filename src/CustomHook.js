// import React, { useState } from 'react';
import { useState } from 'react';

const useMyFirstCustomHook = () => {
  const [myCount, setMyCount] = useState(0)
  // do some stuff
  return { myCount, setMyCount };
};

export default useMyFirstCustomHook;