import React from 'react';

export default function VideoPlayer() {
  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Lemon Law Information Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="flex items-center gap-4">
          <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
          <div className="text-white text-sm">2:24</div>
          <div className="flex-1 bg-white/20 rounded-full h-1">
            <div className="bg-white h-1 rounded-full w-1/3"/>
          </div>
          <button className="text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 6h2v12H7zm8 0h2v12h-2z"/>
            </svg>
          </button>
          <button className="text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 8h8v8H8z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}