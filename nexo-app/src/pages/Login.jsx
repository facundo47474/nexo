import { ShieldAlert, Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <div style={{ background: 'var(--border-subtle)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto' }}>
          <Key size={30} color="var(--accent-primary)" />
        </div>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Ingreso Privado</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Pega tu link de invitación o código de acceso firmado.</p>
        
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Ej: nexo.app/invite/x78f9a..." required style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', background: 'rgba(0,0,0,0.5)', color: 'white', marginBottom: '1.5rem', outline: 'none' }} />
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>Validar Acceso</button>
        </form>

        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <ShieldAlert size={16} /> Encriptación End-to-End
        </div>
      </div>
    </div>
  );
}
