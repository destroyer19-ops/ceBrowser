import React from 'react';

export const Footer = ({ darkTheme, setDarkTheme }) => {
  return (
    <footer className=" h-[5vh]
    p-10 fixed mb-[0.25em] bottom-0 left-0
     w-full text-center py-4 md:py-8 border-t dark:text-white dark:bg-gray-900 dark:border-gray-700 border-gray-200">
      <p className="text-sm md:text-base dark:text-white">
        &copy; 2023 CeBrowse, Inc. All rights reserved.
      </p>
      {/* <label>Settings:<br />
        <select name="devices">
          <option value="Theme"> <button onClick={() => setDarkTheme(!darkTheme)}
            className='text-xl dark:bg-gray-700 dark:text-gray-900 bg-white rounded-full 
            px-4 py-2 ml-4 md:block hover:shadow-lg'> */}
            {/* <button type='button' > */}
            {/* {darkTheme ? '☀' : '🌙'}
          </button>
          </option> */}
          {/* <option value="infinix">Infinix</option>
          <option value="samsung">Samsung</option>
          <option value="sony" selected>Choose a device</option> */}
        {/* </select>
      </label> */}
    </footer>
  );
};
