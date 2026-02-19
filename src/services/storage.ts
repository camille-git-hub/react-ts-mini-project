import type { Artwork } from "./api";

const STORAGE_KEY = 'artGallery'; 

export function getGallery(): Artwork[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : []
}

export function saveArtwork(artwork: Artwork): void {
    const savedArtworks = getGallery();
    if (!savedArtworks.some(a => a.id === artwork.id)) {
        savedArtworks.push(artwork);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedArtworks));
    }
}

export function removeArtwork(id: number): void {
    const savedArtworks = getGallery();
    const updatedArtworks = savedArtworks.filter(a => a.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedArtworks));
}