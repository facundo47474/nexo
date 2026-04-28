import { Network as NetworkIcon, Home, Users, LayoutGrid, Settings, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside style={{ width: '260px', borderRight: '1px solid var(--border-subtle)', height: '100vh', padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', background: 'var(--bg-base)' }}>
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 800, marginBottom: '3rem', color: 'var(--text-main)' }}>
        <NetworkIcon color="var(--accent-primary)" /> NEXO
      </Link>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        <NavItem to="/dashboard" icon={<Home size={20}/>} label="Dashboard" active={location.pathname === '/dashboard'} />
        <NavItem to="/worlds" icon={<LayoutGrid size={20}/>} label="12 Mundos" active={location.pathname === '/worlds'} />
        <NavItem to="/network" icon={<Users size={20}/>} label="Mi Red" active={location.pathname === '/network'} />
        <NavItem to="/dashboard" icon={<Settings size={20}/>} label="Configuración" />
      </nav>

      <Link to="/login" style={{ textDecoration: 'none', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.75rem 1rem' }}>
        <LogOut size={20} /> <span style={{ fontWeight: 600 }}>Salir</span>
      </Link>
    </aside>
  );
}

function NavItem({ to, icon, label, active }) {
  return (
    <Link to={to} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', background: active ? 'var(--border-subtle)' : 'transparent', color: active ? 'var(--accent-primary)' : 'var(--text-muted)', fontWeight: 600, transition: 'var(--transition-smooth)' }}>
      {icon} {label}
    </Link>
  );
}
