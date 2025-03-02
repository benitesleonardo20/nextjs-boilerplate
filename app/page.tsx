'use client';

import Link from 'next/link';

export default function Home() {
  const handleMercadoLibreAuth = () => {
    // Redirige al endpoint del servidor que maneja la autorización
    window.location.href = '/api/auth/mercadolibre/authorize';
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Integración con MercadoLibre</h1>
      <button 
        onClick={handleMercadoLibreAuth}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Conectar con Mercado Libre
      </button>
    </div>
  );
}
