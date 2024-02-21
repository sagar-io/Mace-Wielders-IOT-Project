import { useState, useEffect } from 'react'

const useGetWindowSize = () => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(window.innerWidth)

    window.addEventListener('resize', () => {
      setSize(window.innerWidth);
    })
    return () => {
      window.removeEventListener('resize', () => {
        setSize(window.innerWidth);
      })
    }
  }, [])

  return size;
}

export default useGetWindowSize