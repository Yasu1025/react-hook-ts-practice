import React, { useState, useEffect } from 'react'

const Clearnup: React.FC = () => {
  const [currentNum, setCurrentNum] = useState(0);

  const incrementNum = () => {
    console.log("Mouse event has been invoked!!");
    setCurrentNum((preNum) => preNum + 1);
  }

  useEffect(() => {
    console.log('useEffect in clearnup component has benn invoked!!!!!');
    window.addEventListener('mousedown', incrementNum);
    return () => {
      console.log("Cleanup invoked");
      window.removeEventListener('mousedown', incrementNum);
    }
  }, [])
  return (
    <div>
      { currentNum }
    </div>
  )
}

export default Clearnup
