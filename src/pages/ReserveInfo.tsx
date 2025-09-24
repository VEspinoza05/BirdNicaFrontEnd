import { useLocation } from 'react-router-dom';
import Article from "@/components/ui/article"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function ReserveInfo () {
  const location = useLocation();
  const reserveData = location.state || {};

  return (
    <div className="p-6 h-full bg-[#304F47] overflow-auto">
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
      <div>
        <h1 className="text-2xl font-bold my-4">Ubicación</h1>
        <MapContainer
          center={[reserveData.latitude,reserveData.longitude]}
          zoom={10}
          className='w-full h-[400px]'
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <Marker position={[reserveData.latitude,reserveData.longitude]}>
            <Popup>
              <strong>{reserveData.name}</strong><br />
              Division: {reserveData.division}
            </Popup>
          </Marker>
        </MapContainer>

      </div>
      <div>
        <h1 className="text-2xl font-bold my-4">Aves endémicas</h1>
        <div className="grid grid-cols-3 gap-4">
          {reserveData.birds.map((bird: any) => (
            <Article
              key={bird.id}
              name={bird.name}
              picturePath={bird.picture}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReserveInfo