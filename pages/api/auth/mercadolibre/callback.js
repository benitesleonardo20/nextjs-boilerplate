export default async function handler(req, res) {
  // Obtener el código de autorización de la URL
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).json({ error: 'Código de autorización no recibido' });
  }

  try {
    // Intercambiar el código por un token de acceso
    const tokenResponse = await fetch('https://api.mercadolibre.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: process.env.ML_CLIENT_ID,
        client_secret: process.env.ML_CLIENT_SECRET,
        code,
        redirect_uri: process.env.ML_REDIRECT_URI,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      throw new Error(tokenData.message || 'Error al obtener el token');
    }

    // Guarda el token en la sesión o en una cookie segura
    // Por ejemplo, si usas next-auth u otra librería de gestión de sesiones

    // Redirigir al usuario a una página de éxito
    res.redirect('/dashboard?auth=success');
  } catch (error) {
    console.error('Error en la autenticación de Mercado Libre:', error);
    res.redirect('/error?message=Error-de-autenticacion');
  }
} 