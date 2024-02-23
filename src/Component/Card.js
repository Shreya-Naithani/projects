import React from 'react'

const Card = ({image,name,job}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col items-center hover:scale-105">
       <div className="flex w-full items-center justify-center object-cover">
      {image && (
          <img
            src={image}
            alt={name}
          className="w-[15rem] h-48 object-cover"
            style={{ maxHeight: '100%' }}
          />
        )}
      </div>
      <div className="text-center w-full hover:bg-teal-100 hover:rounded-t-md">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600">{job}</p>
      </div>
    </div>
 
  )
}

export default Card
