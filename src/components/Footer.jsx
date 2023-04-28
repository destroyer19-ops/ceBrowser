import React from 'react';

export const Footer = () => {
  return (
    <footer className=" 
    p-10 fixed bottom-0 left-0
    flex-shrink-0 w-full text-center py-4 md:py-8 border-t dark:text-white dark:bg-gray-900 dark:border-gray-700 border-gray-200">
      <p className="text-sm md:text-base dark:text-white">
        &copy; 2023 CeBrowse, Inc. All rights reserved.
      </p>
    </footer>
  );
};
