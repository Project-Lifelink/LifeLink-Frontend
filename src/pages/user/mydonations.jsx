import { div } from 'framer-motion/client'
import React from 'react'

const Mydonations = () => {
  const donations = [

  ]
  return (
    <>
      <h1 className="text-2xl font-bold text-center">
        Mydonations 
      </h1>
      <div id='mydonations' className="h-screen">
        {((item, index) => (
          <div key={index}>
            <h1>{item.value}</h1>

          </div>
        )
        )}
      </div>
    </>
  )
}

export default Mydonations