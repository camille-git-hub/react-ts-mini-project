import { useState } from "react";
import { fetchArtworks } from "./services/api";
import type { Artwork } from "./services/api";
import { SearchBar } from "./components/SearchBar";
import ArtworkCard from "./components/ArtworkCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      setArtworks(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center mt-4">Search the Art Institute of Chicago's Collection</h1>
      <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} onSearch={handleSearch} loading={loading} />
      {error && <p style={{color: 'red'}}>{error}</p>}
      {artworks.length > 0 && (
        <div>
          <h2>Results: {artworks.length} artworks found</h2>
          <ArtworkCard artworks={artworks} />
        </div>
      )}
      </div>
      <Footer />
    </div>
  )
}

export default App
