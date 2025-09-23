import { reserves } from "../mocks/reservesData"
import Article from "@/components/ui/article"
import { useNavigate } from "react-router-dom"

function ReservesPage() {
  const navigate = useNavigate();

  const handleGoToInfo = (reserve: any) => {
    navigate('/reserveinfo', { state: reserve })
  }

  return (
    <div className="p-6 h-full bg-[#304F47]">
      <div className="grid grid-cols-3 gap-4">
        {reserves.map((reserve) => (
          <Article
            key={reserve.id}
            name={reserve.name}
            picturePath={reserve.picture}
            onClick={() => handleGoToInfo(reserve)}
          />
        ))}
      </div>
    </div>
  )
}

export default ReservesPage