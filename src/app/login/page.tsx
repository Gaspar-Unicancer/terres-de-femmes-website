export default function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  const hasError = searchParams?.error === '1'

  return (
    <main style={{
      minHeight: '100vh',
      background: '#1C1410',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Georgia, serif',
    }}>
      <div style={{ textAlign: 'center', width: '100%', maxWidth: '360px', padding: '0 24px' }}>

        {/* Logo text */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ color: '#C8A050', letterSpacing: '0.4em', fontSize: '10px', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'Arial, sans-serif' }}>
            Accès privé
          </p>
          <h1 style={{ color: '#F5EDE0', fontWeight: 300, fontSize: '28px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Terre de Femmes
          </h1>
          <div style={{ width: '40px', height: '1px', background: '#C8A050', margin: '14px auto 0' }} />
        </div>

        {/* Form */}
        <form method="POST" action="/api/login">
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            autoFocus
            required
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.05)',
              border: `1px solid ${hasError ? '#B05030' : '#C8A050'}`,
              color: '#F5EDE0',
              padding: '12px 16px',
              fontSize: '14px',
              letterSpacing: '0.1em',
              outline: 'none',
              marginBottom: '12px',
              fontFamily: 'Arial, sans-serif',
              boxSizing: 'border-box',
            }}
          />
          {hasError && (
            <p style={{ color: '#B05030', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '12px', fontFamily: 'Arial, sans-serif' }}>
              Mot de passe incorrect
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              background: '#C8A050',
              color: '#1C1410',
              border: 'none',
              padding: '12px',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 600,
            }}
          >
            Accéder au site
          </button>
        </form>

      </div>
    </main>
  )
}
