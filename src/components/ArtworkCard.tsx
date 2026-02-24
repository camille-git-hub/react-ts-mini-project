import type { Artwork } from "../services/api";

const ArtworkCard = ({ artworks, onSave, onDelete, mode }: { artworks: Artwork[], onSave?: (artwork: Artwork) => void, onDelete?: (id:number) =>void; mode?: "search" | "gallery" }) => {
    return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
        {artworks.map((artwork) => (
            <div key={artwork.id} className="border p-4 relative flex flex-col justify-between mb-6">
                <h3 className="text-lg font-bold">{artwork.title}</h3>
                <p>{artwork.artist_title}</p>
                <img className="object-cover w-full h-48 mb-2" src={artwork.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg` : 'https://via.placeholder.com/200x200?text=No+Image'} alt={artwork.title} />
                {mode === "search" ? (<button className="btn bg-gray-800 text-white hover:bg-gray-600" onClick={() => onSave?.(artwork)}>{artwork.saved ? "Added!" : "+ Add to Gallery"}</button>) : 
                (<button className="btn bg-gray-200 text-black hover:bg-red-400" onClick={() => onDelete?.(artwork.id)}>Remove from Gallery</button>)}
            </div>
        ))}
    </div>

)
}

export default ArtworkCard;