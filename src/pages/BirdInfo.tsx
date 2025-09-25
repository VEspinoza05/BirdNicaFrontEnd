import { useLocation } from 'react-router-dom';

function BirdInfo() {
  const location = useLocation();
  const birdData = location.state || {};

  return(
    <div className="p-6 bg-[#304F47] min-h-full">
      <div className='flex gap-4'>
        <div className='w-1/2 flex items-center justify-center'>
          <img
          src={birdData.picture}
          alt={birdData.name}
          className="h-60 object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <div className="grid grid-cols-2">
            <h2>Nombre común:</h2>
            <p>{birdData.name}</p>
          </div>
          <div className="grid grid-cols-2">
            <h2>Nombre científico:</h2>
            <p>{birdData.scientificName}</p>
          </div>
          <div className="grid grid-cols-2">
            <h2>Orden:</h2>
            <p>{birdData.order}</p>
          </div>
          <div className="grid grid-cols-2">
            <h2>Familia:</h2>
            <p>{birdData.family}</p>
          </div>
          <div className="grid grid-cols-2">
            <h2>Género:</h2>
            <p>{birdData.genus}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BirdInfo