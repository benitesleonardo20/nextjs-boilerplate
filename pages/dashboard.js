import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const router = useRouter();
  const [authStatus, setAuthStatus] = useState('');
  
  useEffect(() => {
    if (router.query.auth === 'success') {
      setAuthStatus('Conectado exitosamente con Mercado Libre');
    }
  }, [router.query]);
  
  return (
    <div>
      <h1>Dashboard</h1>
      {authStatus && <p className="success-message">{authStatus}</p>}
      {/* Aquí puedes mostrar información de Mercado Libre o funcionalidades */}
    </div>
  );
} 