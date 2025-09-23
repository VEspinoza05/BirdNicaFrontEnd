type ArticleProps = {
  name: string,
  picturePath: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const Article = ({name, picturePath, onClick} : ArticleProps) => {
  return(
    <article
      className="relative shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform"
      onClick={onClick}
    >
      <img
        src={picturePath}
        alt={name}
        className="h-48 w-full object-cover"
      />
      <div className="absolute bottom-0 w-full bg-black/50 p-2">
        <h2 className="text-lg font-semibold text-right">{name}</h2>
      </div>
    </article>
  )
}

export default Article;