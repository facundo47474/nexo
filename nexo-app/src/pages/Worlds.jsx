import Sidebar from '../components/Sidebar';
import { LayoutGrid, Lock } from 'lucide-react';

export default function Worlds() {
  const mundos = ['Finanzas', 'Legal', 'Tecnología', 'Real Estate', 'Salud', 'Educación', 'Consultoría', 'Diseño', 'Marketing', 'Cripto', 'Eventos', 'Lifestyle'];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '3rem 4rem', overflowY: 'auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Explorar 12 Mundos</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {mundos.map((m, i) => (
            <div key={m} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ background: 'var(--border-subtle)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
                <LayoutGrid color={i % 3 === 0 ? "var(--accent-primary)" : "var(--text-muted)"} size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{m}</h3>
              {i % 4 === 0 ? (
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600 }}>Premium Acceso</span>
              ) : (
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Acceso Básico</span>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
