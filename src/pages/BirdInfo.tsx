import { useLocation } from 'react-router-dom';
import Article from "@/components/ui/article"
import BirdAreaMap from '@/components/ui/bird-area-map';

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
            <h2 className="font-bold">Nombre común:</h2>
            <p>{birdData.name}</p>
          </div>
          <div className="grid grid-cols-2">
            <h2 className="font-bold">Nombre científico:</h2>
            <p>{birdData.scientificName}</p>
          </div>
          <div className="grid grid-cols-2">
            <h2 className="font-bold">Orden:</h2>
            <p>{birdData.order}</p>
          </div>
          <div className="grid grid-cols-2">
            <h2 className="font-bold">Familia:</h2>
            <p>{birdData.family}</p>
          </div>
          <div className="grid grid-cols-2">
            <h2 className="font-bold">Género:</h2>
            <p>{birdData.genus}</p>
          </div>
        </div>
      </div>
      <div className='mt-6'>
        {birdData.description}
      </div>
      <div>
        <h1 className="text-2xl font-bold my-4">Distribución</h1>
        <BirdAreaMap species="Garza blanca" area={birdData.birdArea} />

      </div>
      <div>
        <h1 className="text-2xl font-bold my-4">Reservas en las que habita</h1>
        <div className="grid grid-cols-3 gap-4">
          {birdData.reserves.map((reserve: any) => (
            <Article
              key={reserve.id}
              name={reserve.name}
              picturePath={reserve.picture}
              onClick={() => {}} /*  Temporal empty event */
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BirdInfo