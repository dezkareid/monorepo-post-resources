import { useState, useEffect } from 'react';

function useOnline () {
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener('offline', () => setOnline(false));
    window.addEventListener('online', () => setOnline(true));
  }, []);
  return { online };
}

export default useOnline;