import React from 'react';
import { useTheme } from './theme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <i
      onClick={toggleTheme}
      className={`p-0 text-secondary m-0 bx  bx-${theme === 'light' ? 'moon' : 'sun'}`}>
    </i>
  );
}

export default ThemeToggle;
