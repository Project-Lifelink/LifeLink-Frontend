import { div } from 'framer-motion/client'
import React from 'react'

const Mydonations = () => {
  const donations = [

  ]
  return (
    <>
      <h1 className="mt-12 text-center font-display text-4xl font-normal text-ink md:text-5xl">
        Mydonations
      </h1>
      <div id='mydonations' className="min-h-screen bg-canvas px-4 py-8 md:px-8">
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