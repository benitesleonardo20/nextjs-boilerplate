const handleMercadoLibreAuth = () => {
  // Redirige al endpoint del servidor que maneja la autorización
  window.location.href = '/api/auth/mercadolibre/authorize';
};

// ... en tu componente ...
return (
  <div>
    {/* ... código existente ... */}
    <button onClick={handleMercadoLibreAuth}>
      Conectar con Mercado Libre
    </button>
    {/* ... código existente ... */}
  </div>
); 