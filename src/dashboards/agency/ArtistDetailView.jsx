import React from 'react'
import { useParams } from 'react-router-dom'
import { mockArtists } from '../../mockData'

const ArtistDetailView = () => {
  const { id } = useParams()
  const artist = mockArtists.find(a => a.id === parseInt(id))
  
  if (!artist) return <div>Artiste non trouvé</div>
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{artist.name} - {artist.group}</h2>
      <div className="bg-card rounded-lg p-4">
        <p>Détails complets à venir (graphiques, messages bruts, export PDF)</p>
      </div>
    </div>
  )
}

export default ArtistDetailView
