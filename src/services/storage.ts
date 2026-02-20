import type { Artwork } from "./api";

const STORAGE_KEY = 'artGallery'; 

export function getGallery(): Artwork[] {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error getting artworks from localStorage', error);
        return [];
    }
}

export function saveArtwork(artwork: Artwork): void {
    const savedArtworks = getGallery();
    if (!savedArtworks.some(a => a.id === artwork.id)) {
        savedArtworks.push(artwork);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(savedArtworks));
        } catch (error) {
            console.error('Error saving artwork to localStorage', error);
        }
    }
}

export function removeArtwork(id: number): void {
    const savedArtworks = getGallery();
    const updatedArtworks = savedArtworks.filter(a => a.id !== id);
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedArtworks));
    } catch (error) {
        console.error('Error deleting artwork from localstorage', error);
    }
}