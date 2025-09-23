import { useLocation } from 'react-router-dom';

function ReserveInfo () {
  const location = useLocation();
  const reserveData = location.state || {};

  return (
    <div className="p-6 h-full bg-[#304F47]">
      <div className='flex gap-4'>
        <div className='w-1/2 flex items-center justify-center'>
          <img
          src={reserveData.picture}
          alt={reserveData.name}
          className="h-60 object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <div className="grid grid-cols-2">
            <h2>Nombre:</h2>
            <p>{reserveData.name}</p>
          </div>
          <div className="grid grid-cols-2">
            <h2>Division:</h2>
            <p>{reserveData.division}</p>
          </div>
          <div className="grid grid-cols-2">
            <h2>Superficie:</h2>
            <p>{reserveData.surface}</p>
          </div>
          <div className="grid grid-cols-2">
            <h2>Coordenadas:</h2>
            <p>{reserveData.coordinates}</p>
          </div>
          <div className="grid grid-cols-2">
            <h2>Pais:</h2>
            <p>{reserveData.country}</p>
          </div>
        </div>
      </div>
      <div className='mt-6'>
        {reserveData.Description}
      </div>
    </div>
  )
}

export default ReserveInfo