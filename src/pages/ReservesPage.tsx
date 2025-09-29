import { reserves } from "../mocks/reservesData"
import Article from "@/components/ui/article"
import { useNavigate } from "react-router-dom"
import type { IReserveModel } from "@/models/models";

function ReservesPage() {
  const navigate = useNavigate();

  const handleGoToInfo = (reserve: IReserveModel) => {
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