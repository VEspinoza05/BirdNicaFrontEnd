import { birds } from "../mocks/birdsData"
import Article from "@/components/ui/article"

function BirdsPage() {
  return (
    <div className="p-6 h-full bg-[#304F47]">
      <div className="grid grid-cols-3 gap-4">
        {birds.map((bird) => (
          <Article
            key={bird.id}
            name={bird.name}
            picturePath={bird.picture}
          />
        ))}
      </div>
    </div>
  )
}

export default BirdsPage