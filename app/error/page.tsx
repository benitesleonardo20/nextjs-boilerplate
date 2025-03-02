'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get('message') || 'Ha ocurrido un error desconocido';
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
      <p className="mb-4">{errorMessage.replace(/-/g, ' ')}</p>
      <Link 
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Volver al inicio
      </Link>
    </div>
  );
} 