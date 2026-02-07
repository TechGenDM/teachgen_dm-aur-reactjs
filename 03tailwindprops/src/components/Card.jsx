import React from 'react'

function Card({username}) {
    console.log(username);
    
  return (
    <>
      {/* First Card */}
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img 
            className="size-48 shadow-xl rounded-md" 
            alt="Puppy" 
            src="https://images.pexels.com/photos/1346086/pexels-photo-1346086.jpeg" 
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-medium">Class Warfare</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>

      {/* Second Card */}
      <div
        className="flex flex-col rounded-xl p-4"
        style={{
          border: "0.88px solid",
          backdropFilter: "saturate(180%) blur(14px)",
          background: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="350"
            height="350"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col rounded-b-xl py-4">
          <div className="flex justify-between">
            <h1 className="font-RubikBold">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card