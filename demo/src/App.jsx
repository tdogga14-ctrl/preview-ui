import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. HERO: Sell the dream */}
      <header className="max-w-4xl mx-auto pt-20 pb-12 px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-slate-900">
          Preview UI Plugin
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Instant loading states, progress bars, and layout utilities for Tailwind CSS.
        </p>
        
        <div className="inline-block bg-slate-900 text-slate-50 rounded-lg px-6 py-4 font-mono text-sm shadow-xl">
          <span className="text-pink-500 mr-2">$</span>
          npm install preview-ui
        </div>
      </header>

      {/* 2. GALLERY: Show off the classes */}
      <main className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CARD A: The Skeleton Loader */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              Skeleton Utility
            </h2>
            <code className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">.skeleton</code>
          </div>
          
          <div className="space-y-4">
            {/* Using your .skeleton class here */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full skeleton shrink-0"></div>
              <div className="space-y-2 w-full">
                <div className="h-4 w-3/4 rounded skeleton"></div>
                <div className="h-4 w-1/2 rounded skeleton"></div>
              </div>
            </div>
            <div className="h-32 w-full rounded-lg skeleton mt-6"></div>
          </div>
        </section>

        {/* CARD B: The Progress Bar */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Progress Components
            </h2>
            <code className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">.progress</code>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm font-medium text-slate-700 mb-1">
                <span>Uploading...</span>
                <span>60%</span>
              </div>
              {/* Using your .progress class here */}
              <div className="progress">
                <div className="progress-bar bg-emerald-500" style={{ width: "60%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium text-slate-700 mb-1">
                <span>Processing</span>
                <span>30%</span>
              </div>
              {/* Variation */}
              <div className="progress h-2 rounded-full">
                <div className="progress-bar bg-indigo-500" style={{ width: "30%" }} />
              </div>
            </div>
          </div>
        </section>

        {/* CARD C: The Layout Wrapper (Full Width) */}
        <section className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 relative z-10">
            <h2 className="font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              Layout Container
            </h2>
            <code className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">.preview-loading</code>
          </div>

          <div className="border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 p-4">
            {/* Using your .preview-loading class here to demonstrate centering */}
            <div className="preview-loading bg-white shadow-sm rounded-lg p-6 max-w-md mx-auto">
              <i className="text-4xl mb-2 not-italic">⏳</i>
              <h3 className="font-bold text-lg">Central Layout</h3>
              <p className="text-slate-500 text-sm mt-1">
                This content is automatically centered and spaced by the plugin wrapper.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="text-center pb-12 text-slate-400 text-sm">
        <p>Built with Tailwind CSS & Your Plugin</p>
      </footer>
    </div>
  );
}