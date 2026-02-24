import { getGallery } from "../services/storage";
import {useState, useEffect} from "react";
import type {Artwork} from "../services/api"
import { removeArtwork } from "../services/storage";
import ArtworkCard from "./ArtworkCard";


const Gallery = () => {
    const [gallery, setGallery] = useState<Artwork[]>([]);

    useEffect(() => {
        const storedArtworks = getGallery();
        setGallery(storedArtworks);
    }, []); 

    const handleDelete = (id: number) => {
        removeArtwork(id);
        setGallery(prev => prev.filter(a => a.id !== id));
    }

    return (
    <div className=""> 
        <h1 className="text-3xl font-bold mb-4 p-4 text-center mt-4">My Art Gallery</h1>
        {gallery.length === 0 ? <p className="text-center">Your gallery is empty. Use the search function to add artworks to the gallery and display them here.</p> :
        <ArtworkCard key={gallery[0].id} artworks={gallery} onDelete={handleDelete} mode="gallery"/>}
    
    </div>
    )
}

export default Gallery;