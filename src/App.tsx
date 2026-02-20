import { useState } from "react";
import { fetchArtworks } from "./services/api";
import type { Artwork } from "./services/api";
import { SearchBar } from "./components/SearchBar";
import ArtworkCard from "./components/ArtworkCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { saveArtwork } from "./services/storage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";

function App() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchArtworks(searchTerm);
      const savedArtworks = data.map(artwork => ({ ...artwork, saved: false }));
      setArtworks(savedArtworks);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveToGallery = (artwork: Artwork) => {
    saveArtwork(artwork);
    setArtworks(prev => prev.map(a => a.id === artwork.id ? {...a, saved: true} : a));
  }

  return (
    <BrowserRouter>
      <Navbar />
        <div className="p-4 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={
              <div className="">
                <h1 className="text-3xl font-bold mb-4 text-center mt-4">Search the Art Institute of Chicago's Collection</h1>
                <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} onSearch={handleSearch} loading={loading} />
                {error && <p style={{color: 'red'}}>{error}</p>}
                {artworks.length > 0 && (
                  <div>
                    <h2 className="mb-4">Results: {artworks.length} artworks found</h2>
                    <ArtworkCard artworks={artworks} onSave={handleSaveToGallery} mode="search"/>
                  </div>
                )}
              </div>
            } />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    ) 
}

export default App
