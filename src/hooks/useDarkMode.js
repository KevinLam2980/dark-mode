import React, {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'
import useMedia from './use-media'



export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode')
    const prefersDarkMode = usePrefersDarkMode();
    
    const enabled = typeof darkMode !== 'undefined' ? darkMode : prefersDarkMode;

    useEffect(
        () => {
          const className = 'dark-mode';
          const element = window.document.body;
          if (enabled) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
        },
        [enabled] // Only re-call effect when value changes
      );
    
    
    
    return [darkMode, setDarkMode]
}


function usePrefersDarkMode() {
    return useMedia(['(prefers-color-scheme: dark)'], [true], false);
  }
