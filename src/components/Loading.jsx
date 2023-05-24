import React from 'react'
import { Puff } from 'react-loader-spinner'
const Loading = () => {
  return (
    <div className='!flex w-full m-auto text-center justify-center  items-center'>
        <Puff
  height="100"
  width="100"
  radius={1}
  color="rgb(59, 130, 246)"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  className="!flex"
/>
    </div>
  )
}

export default Loading