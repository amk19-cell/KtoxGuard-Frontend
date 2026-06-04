import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, artists }) => {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={onClose}></div>}
      <aside className={`fixed md:sticky top-0 left-0 h-full w-64 bg-card border-r border-gray-800 transform transition-transform duration-300 ease-in-out z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={onClose} className="md:hidden text-text">✕</button>
        </div>
        <nav className="p-4 space-y-6">
          <div>
            <p className="text-textSecondary text-sm mb-2">Navigation</p>
            <NavLink to="/" onClick={onClose} className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${isActive ? 'bg-primary/20 text-primary' : 'text-textSecondary hover:bg-card/50 hover:text-text'}`}>📊 Dashboard</NavLink>
          </div>
          <div>
            <p className="text-textSecondary text-sm mb-2">Artistes suivis</p>
            <div className="space-y-2">
              {artists.map(artist => (
                <NavLink key={artist.id} to={`/artist/${artist.id}`} onClick={onClose} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-card/50 text-textSecondary">
                  <img src={artist.photo} alt={artist.name} className="w-6 h-6 rounded-full object-cover" />
                  <span>{artist.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
