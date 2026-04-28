import Sidebar from '../components/Sidebar';
import { Users, UserPlus } from 'lucide-react';

export default function Network() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '3rem 4rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Mi Red de Confianza</h1>
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Users size={64} color="var(--accent-primary)" style={{ marginBottom: '1.5rem' }} />
          <h2 style={{ marginBottom: '1rem' }}>Árbol Criptográfico</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '2rem' }}>Tu nodo tiene 142 conexiones indirectas. Has invitado a 4 usuarios directos, de los cuales 3 han alcanzado el Nivel 2. Su buen comportamiento está aumentando tu Score pasivamente.</p>
          <button className="btn btn-primary"><UserPlus size={18}/> Invitar Nuevo Nodo</button>
        </div>
      </main>
    </div>
  );
}
