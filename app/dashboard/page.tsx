'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const searchParams = useSearchParams();
  const [authStatus, setAuthStatus] = useState('');
  
  useEffect(() => {
    if (searchParams.get('auth') === 'success') {
      setAuthStatus('Conectado exitosamente con Mercado Libre');
    }
  }, [searchParams]);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {authStatus && <p className="text-green-500 font-semibold">{authStatus}</p>}
      {/* Aquí puedes mostrar información de Mercado Libre o funcionalidades */}
    </div>
  );
} 