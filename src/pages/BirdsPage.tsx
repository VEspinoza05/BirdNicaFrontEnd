import { birds } from "../mocks/birdsData"
import Article from "@/components/ui/article"
import { useNavigate } from "react-router-dom"
import type { IBirdModel } from "@/models/models";

function BirdsPage() {
  const navigate = useNavigate();

  const handleGoToInfo = (bird: IBirdModel) => {
    navigate('/birdinfo', { state: bird })
  }

  return (
    <div className="p-6 h-full bg-[#304F47]">
      <div className="grid grid-cols-3 gap-4">
        {birds.map((bird: IBirdModel) => (
          <Article
            key={bird.id}
            name={bird.name}
            picturePath={bird.picture}
            onClick={() => handleGoToInfo(bird)}
          />
        ))}
      </div>
    </div>
  )
}

export default BirdsPage