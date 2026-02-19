import { z } from 'zod';

export const ArtworkSchema = z.object({
    id: z.number(),
    title: z.string(),
    artist_title: z.string().optional().default('Unknown Artist'),
    image_id: z.string().optional().nullable().default(null),
});

const ApiResponseSchema = z.object({
  data: z.array(ArtworkSchema)
});

export type Artwork = z.infer<typeof ArtworkSchema>;

export async function fetchArtworks(searchTerm: string){
    const res = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,title,artist_title,image_id`)
    if (!res.ok) {
        throw new Error('Failed to fetch artworks');
    }
    const data = await res.json();
    
    const result = ApiResponseSchema.safeParse(data);
    if (!result.success) {
        throw new Error('Invalid API response');
    }
    return result.data.data;
}



