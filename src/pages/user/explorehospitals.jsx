import React from 'react'

const ExploreHospitals = () => {
    const hospitals = [
        {
            id: 1, 
            name: "hospital1",
            description: "description"
        },
        {
            id: 2,
            name: "hospital2",
            description: "description"
        },
        {
            id: 3,
            name: "hospital3",
            description: "description"
        }
    ]
    return (
        <div id='explorehospitals' className = "">
            <h1 className="text-2xl font-bold text-center">Hospitals</h1>
            <div className = "flex flex-col gap-6 p-10">

                {hospitals.map((item, index) => (
                    <div key={index} className = "h-cover border-1 rounded-2xl p-5">
                        <h1 className = "text-sm font-bold">{item.name}</h1>
                        <p className = "text-center">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExploreHospitals