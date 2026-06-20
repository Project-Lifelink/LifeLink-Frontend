import React from 'react'

const Notifications = () => {
  const notifications = [
    
  ];
  return (
    <>
      <div id='notifications' className="h-screen">
        <h1 className = "text-2xl text-center font-bold">Notifications</h1>
        {notifications.map((item,index) => (
          <div key = {index}>
            {item.value}
          </div>
        ) ) }
      </div>
    </>
  )
}

export default Notifications