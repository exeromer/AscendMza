import { NavLink } from "../atoms/navLink";

export const Footer = () => {
  return (
    <footer className="bg-brand-footer-bg/90 text-white py-8 border-t border-white/5">
      {/* CAMBIO: grid-cols-2 en móvil para ahorrar espacio vertical */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">

        {/* Columna 1: Info General (Ocupa 2 espacios en móvil para quedar centrada arriba) */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="font-display text-2xl font-bold mb-4 tracking-widest">
            ASCEND<span className="text-brand-terracotta">MZA</span>
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Expertos en alta montaña. Transformamos desafíos en experiencias inolvidables.
          </p>
        </div>

        {/* Columna 2: Links (Ahora comparte fila en móvil) */}
        <div className="col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="font-bold mb-4 uppercase text-sm md:text-lg tracking-widest text-brand-terracotta">Explorar</h4>
          <ul className="space-y-2 text-gray-300 text-xs md:text-sm flex flex-col items-center md:items-start">
            <li><NavLink to="/" className="text-gray-300 hover:text-white transition-all">Inicio</NavLink></li>
            <li><NavLink to="/#experiencias" className="text-gray-300 hover:text-white transition-all">Aventuras</NavLink></li>
            <li><NavLink to="/#reviews" className="text-gray-300 hover:text-white transition-all">Nosotros</NavLink></li>
          </ul>
        </div>

        {/* Columna 3: Contacto (Comparte fila en móvil) */}
        <div className="col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="font-bold mb-4 uppercase text-sm md:text-lg tracking-widest text-brand-terracotta">Contacto</h4>
          <ul className="space-y-2 text-gray-300 text-xs md:text-sm flex flex-col items-center md:items-start">
            <li className="flex items-center gap-2"><span>📧</span> info@ascend.com</li>
            <li className="flex items-center gap-2"><span>📱</span> +54 9 261 213 132</li>
            <li className="flex items-center gap-2"><span>📍</span> Mendoza, Arg</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Ascend Mza. Todos los derechos reservados.
      </div>
    </footer>
);
};