import React from 'react'
import { Puff } from 'react-loader-spinner'
const Loading = () => {
  return (
    <div className='flex w-full m-auto justify-center items-center'>
        <Puff
  height="100"
  width="100"
  radius={1}
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

export default Loading