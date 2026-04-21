import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children, userRole }) => {
  const isArtist = userRole === 'artist'
  
  return (
    <div className="min-h-screen bg-background">
      <Header 
        agencyName="SM Entertainment" 
        userRole="agency" 
        subRole={userRole} 
        securityLevel="calm" 
        scope="agency"
      />
      <div className="flex">
        {!isArtist && <Sidebar subRole={userRole} />}
        <main className={`flex-1 p-6 ${isArtist ? 'w-full' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
