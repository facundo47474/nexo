import { ShieldCheck, Copy, Users, TrendingUp, ChevronRight, Activity } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '3rem 4rem', overflowY: 'auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Bienvenido, Martín</h1>
            <p style={{ color: 'var(--text-muted)' }}>Tu reputación está al día. Tienes 3 cupos disponibles.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="glass-panel" style={{ padding: '0.5rem 1.2rem', display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '50px' }}>
              <ShieldCheck color="var(--accent-primary)" size={20}/>
              <span style={{ fontWeight: 800, color: 'var(--accent-primary)', fontSize: '0.9rem', letterSpacing: '1px' }}>NIVEL 1</span>
            </div>
            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--text-main)', color: 'var(--bg-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem' }}>M</div>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', color: 'var(--text-muted)' }}><TrendingUp size={20} /> Score</div>
            <div style={{ fontSize: '3.5rem', fontWeight: 800 }}>98.5</div>
            <p style={{ color: 'var(--accent-primary)', marginTop: '0.5rem', fontWeight: 600 }}>Alto prestigio</p>
          </div>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', color: 'var(--text-muted)' }}><Users size={20} /> Tu Red</div>
            <div style={{ fontSize: '3.5rem', fontWeight: 800 }}>142</div>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Generando valor pasivo</p>
          </div>
          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', fontWeight: 600 }}><ShieldCheck size={20} className="text-accent"/> Link de Aval</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Invita con responsabilidad.</p>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }}><Copy size={18} /> Copiar Enlace</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Mundos Activos</h2>
                <Link to="/worlds" style={{ color: 'var(--accent-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '0.9rem' }}>Ver todos <ChevronRight size={18}/></Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                {['Finanzas', 'Legal', 'Real Estate', 'Cripto'].map(mundo => (
                  <div key={mundo} className="glass-panel" style={{ padding: '1.5rem', cursor: 'pointer' }}>
                    <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.1rem' }}>{mundo}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Online ahora</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel" style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Activity size={20} className="text-accent"/> Actividad</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    {[
                        { text: "Sofía M. validó identidad", time: "Hace 2h" },
                        { text: "Ganancia de red acreditada", time: "Ayer" },
                        { text: "Respuesta votada", time: "Ayer" }
                    ].map((act, i) => (
                        <div key={i} style={{ borderBottom: i === 2 ? 'none' : '1px solid var(--border-subtle)', paddingBottom: i === 2 ? 0 : '1rem' }}>
                            <p style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}>{act.text}</p>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{act.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
