import React, { useEffect, useState } from 'react';

export const Footer = ({ darkTheme, setDarkTheme }) => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer
      className={`h-[5vh] pt-5 mt-[0.5em] pb-5 p-10 fixed mb-[0.5em] bottom-0 left-0 w-full text-center py-4 md:py-8 border-t dark:text-white dark:bg-gray-900 dark:border-gray-700 border-gray-200 ${showFooter ? '' : 'hidden'}`}
    >
      <p className="text-sm md:text-base dark:text-white">
        &copy; 2023 CeBrowse, Inc. All rights reserved.
      </p>
    </footer>
  );
};
