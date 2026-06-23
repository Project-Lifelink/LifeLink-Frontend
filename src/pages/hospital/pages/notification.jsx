import React from 'react'

const Notifications = () => {
  const notifications = [
    {
      index: 0,
      value: "ehy"
    },{
      index: 1,
      value: "notification2"
    },{
      index: 0,
      value: "notification3"
    },{
      index: 0,
      value: "notification4"
    }
  ];
  return (
    <>
      <div id='notifications' className="h-screen flex justify-center flex-col bg-gray-50">
        <h1 className="text-2xl text-center font-bold md:mb-10">Notifications</h1>
        <div className="flex items-center justify-center">
          <div className = "flex gap-2 flex-col" >


            {notifications.map((item, index) => (
              <div key={index} className = "bg-white px-4 py-2 rounded-xl shadow-2xl">
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Notifications