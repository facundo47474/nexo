import { Network, ArrowRight, ShieldCheck, Mail, User, Briefcase, Download, Share2, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Landing() {
  const [formData, setFormData] = useState({ name: '', email: '', type: 'inversor', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('¡Gracias por tu interés! Hemos registrado tus datos y te contactaremos a la brevedad.');
    setFormData({ name: '', email: '', type: 'inversor', message: '' });
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <div style={{ background: 'var(--bg-base)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Estilo Mercado Libre */}
      <header style={{ padding: '0.8rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'var(--accent-primary)', zIndex: 100, boxShadow: '0 1px 2px 0 rgba(0,0,0,.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.8rem', fontWeight: 800, color: '#333' }}>
          <Network color="#333" /> NEXO
        </div>
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#simulador" style={{ color: '#333', textDecoration: 'none', fontWeight: 400, transition: '0.3s' }} onMouseOver={e=>e.target.style.color='var(--accent-blue)'} onMouseOut={e=>e.target.style.color='#333'}>Simulador</a>
          <a href="#equipo" style={{ color: '#333', textDecoration: 'none', fontWeight: 400, transition: '0.3s' }} onMouseOver={e=>e.target.style.color='var(--accent-blue)'} onMouseOut={e=>e.target.style.color='#333'}>Equipo</a>
          <Link to="/login" className="btn" style={{ color: '#333', fontWeight: 600 }}>Ingreso Privado</Link>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        {/* Hero Section con Video */}
        <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 20px', position: 'relative', overflow: 'hidden' }}>
          
          {/* Video Background */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2, background: '#000' }}>
            <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}>
                <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-financial-district-4395-large.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Overlay gradient */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)', zIndex: -1 }}></div>

          <div style={{ maxWidth: '850px', position: 'relative', zIndex: 1, color: 'white' }}>
            <span style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--accent-primary)', padding: '0.5rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2rem', display: 'inline-block', backdropFilter: 'blur(4px)' }}>EXCLUSIVO INVITACIÓN</span>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>No entrás porque pagaste.<br/>Entrás porque alguien te <span style={{color: 'var(--accent-primary)'}}>avala.</span></h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', maxWidth: '650px', margin: '0 auto 3rem auto', textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>El marketplace premium basado 100% en cadenas de confianza humanas. Cero bots, cero reviews falsos, confianza garantizada.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="#contacto" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: 'var(--accent-primary)', color: '#333' }}>Quiero Participar <ArrowRight size={20}/></a>
            </div>
          </div>
        </section>

        {/* Resto del contenido (Mundos, Simulador, etc.) adaptado al estilo claro */}
        <section style={{ padding: '6rem 5%', background: 'var(--bg-base)' }}>
           <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem', color: '#333' }}>Modelo Estructural y Comercial</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                 <div className="glass-panel" style={{ padding: '3rem' }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}><ShieldCheck size={28}/> 3 Niveles de Confianza</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                       <li>
                          <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.3rem', color: '#333' }}>Nivel 3 / Explorador</strong>
                          <span style={{ color: 'var(--text-muted)' }}>Invitado por un nodo superior. Acceso básico de compra.</span>
                       </li>
                       <li>
                          <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.3rem', color: '#333' }}>Nivel 2 / Verificado</strong>
                          <span style={{ color: 'var(--text-muted)' }}>Valida perfil. Permite ofrecer servicios estándar.</span>
                       </li>
                       <li>
                          <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.3rem', color: 'var(--accent-blue)' }}>Nivel 1 / Élite</strong>
                          <span style={{ color: 'var(--text-muted)' }}>Validación estricta y reputación impecable &gt; 6 meses.</span>
                       </li>
                    </ul>
                 </div>
                 <div className="glass-panel" style={{ padding: '3rem', borderTop: '4px solid var(--accent-blue)' }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}><Activity size={28}/> Flujo de Ingresos</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                       <li>
                          <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.3rem', color: '#333' }}>Transacciones Seguras</strong>
                          <span style={{ color: 'var(--text-muted)' }}>Comisión del 3–7% en cada compra y venta.</span>
                       </li>
                       <li>
                          <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.3rem', color: '#333' }}>Asesorías</strong>
                          <span style={{ color: 'var(--text-muted)' }}>Comisión del 20% en consultas a expertos verificados.</span>
                       </li>
                       <li>
                          <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.3rem', color: '#333' }}>Suscripciones</strong>
                          <span style={{ color: 'var(--text-muted)' }}>Planes Pro para vendedores y Revenue Share en red.</span>
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* Simulador */}
        <section id="simulador" style={{ padding: '6rem 5%', background: 'white' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#333' }}>Simulación del Árbol de Confianza</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>Interactúa con los nodos para entender cómo la reputación fluye.</p>
            
            <div className="glass-panel" style={{ padding: '5rem 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  
                  <div style={{ textAlign: 'center' }}>
                     <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(52, 131, 250, 0.1)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                        <User size={32} />
                     </div>
                     <p style={{ marginTop: '1rem', fontWeight: 600, color: '#333' }}>Tutor (Nivel 1)</p>
                     <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Asume el riesgo</div>
                  </div>

                  <div style={{ width: '50px', height: '3px', background: 'var(--border-subtle)' }}></div>

                  <div style={{ textAlign: 'center' }}>
                     <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--accent-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxShadow: '0 0 20px rgba(52, 131, 250, 0.3)' }}>
                        <ShieldCheck size={40} />
                     </div>
                     <p style={{ marginTop: '1.5rem', fontWeight: 800, color: 'var(--accent-blue)', fontSize: '1.2rem' }}>TÚ (Nivel 2)</p>
                     <p style={{ fontSize: '0.85rem', color: '#333', marginTop: '5px', background: 'var(--bg-base)', padding: '5px 10px', borderRadius: '20px' }}>Score: 98.5</p>
                  </div>

                  <div style={{ width: '50px', height: '3px', background: 'var(--accent-blue)' }}></div>

                  <div style={{ textAlign: 'center' }}>
                     <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'white', border: '2px dashed var(--border-subtle)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                        <Share2 size={32} />
                     </div>
                     <p style={{ marginTop: '1rem', fontWeight: 600, color: '#333' }}>Invitado (Nivel 3)</p>
                     <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Afecta tu reputación</div>
                  </div>

               </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section id="equipo" style={{ padding: '6rem 5%', background: 'var(--bg-base)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#333' }}>El Equipo Detrás del Nexo</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', padding: '0 2rem', marginTop: '4rem' }}>
               <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 2rem auto', overflow: 'hidden', border: '3px solid var(--accent-blue)' }}>
                     <img src="https://i.pravatar.cc/300?img=11" alt="CEO" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#333' }}>Alexandre M.</h3>
                  <p style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>CEO & Visionary</p>
               </div>
               
               <div style={{ textAlign: 'center' }}>
                  <div className="glass-panel" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 2rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--text-muted)', background: 'white' }}>
                      <Briefcase size={50} color="var(--text-muted)" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#333' }}>Posición Abierta</h3>
                  <p style={{ color: 'var(--text-main)', fontWeight: 600 }}>CTO / Co-Founder Técnico</p>
               </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" style={{ padding: '6rem 5%', background: '#111' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="glass-panel" style={{ padding: '3.5rem', background: 'white' }}>
               <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center', color: '#333' }}>Construyamos Juntos</h2>
               <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem' }}>Déjanos tus datos y nos pondremos en contacto.</p>
               
               {formStatus && (
                 <div style={{ background: 'rgba(52, 131, 250, 0.1)', color: 'var(--accent-blue)', padding: '1rem', borderRadius: '4px', textAlign: 'center', marginBottom: '2rem', fontWeight: 600 }}>
                   {formStatus}
                 </div>
               )}

               <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                     <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 600, color: '#333' }}>Nombre Completo</label>
                     <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', outline: 'none' }} />
                  </div>
                  <div>
                     <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 600, color: '#333' }}>Email Profesional</label>
                     <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', outline: 'none' }} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}>Enviar Solicitud <Mail size={20}/></button>
               </form>
            </div>
          </div>
        </section>
      </main>
      
      <footer style={{ padding: '3rem 5%', textAlign: 'center', color: '#333', background: 'var(--accent-primary)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>
          <Network size={24} /> NEXO
        </div>
        <p>&copy; 2026 Nexo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
