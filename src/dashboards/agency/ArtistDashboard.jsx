import React, { useState } from 'react'

const ArtistDashboard = () => {
  const [showSecurity, setShowSecurity] = useState(true)
  
  if (!showSecurity) {
    return (
      <div className="text-center py-20">
        <p className="text-textSecondary">Ton équipe veille sur toi. Si tu as besoin de nous, on est là.</p>
      </div>
    )
  }
  
  return (
    <div className="max-w-2xl mx-auto text-center py-10">
      <div className="bg-card rounded-lg p-8">
        <div className="text-6xl mb-4">🟢</div>
        <h2 className="text-2xl font-bold text-safe mb-2">Calme</h2>
        <p className="text-textSecondary">Rien d'inhabituel cette semaine</p>
        <div className="mt-6 p-4 bg-background rounded-lg">
          <p className="text-sm text-textSecondary">Conseil : Profite de cette période pour te ressourcer.</p>
        </div>
      </div>
    </div>
  )
}

export default ArtistDashboard
