export const Footer = () => {
  return (
    <footer className="bg-brand-footer-bg text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Columna 1 */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-4 tracking-wider">
            ASCEND<span className="text-brand-terracotta">MZA</span>
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Expertos en alta montaña. Transformamos desafíos en experiencias inolvidables con la máxima seguridad.
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-lg tracking-widest text-brand-terracotta">Explorar</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="#inicio" className="hover:text-white hover:translate-x-1 transition-all inline-block">Inicio</a></li>
            <li><a href="#experiencias" className="hover:text-white hover:translate-x-1 transition-all inline-block">Aventuras</a></li>
            <li><a href="#nosotros" className="hover:text-white hover:translate-x-1 transition-all inline-block">Nosotros</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="font-bold mb-6 uppercase text-lg tracking-widest text-brand-terracotta">Contacto</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
                <span>📧</span> info@ascendmza.com
            </li>
            <li className="flex items-center gap-2">
                <span>📱</span> +54 9 261 123 4567
            </li>
            <li className="flex items-center gap-2">
                <span>📍</span> Mendoza, Argentina
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Ascend Mza. Todos los derechos reservados.
      </div>
    </footer>
  );
};