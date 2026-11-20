'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowLeft, ArrowRight, Check, ChevronDown, Heart, Menu, Minus, Plus, Search, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { categories, formatPrice, products, type Product } from '@/lib/catalog'

type CartLine = { productId: string; quantity: number; size: string; color: string }

const money = (n: number) => formatPrice(n).replace('US$', '$')

function ProductCard({ product, onOpen, onAdd }: { product: Product; onOpen: (product: Product) => void; onAdd: (product: Product) => void }) {
  return (
    <article className="product-card group">
      <button className="product-image" onClick={() => onOpen(product)} aria-label={`Ver detalles de ${product.name}`}>
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        {product.isNew && <span className="product-tag">NUEVO</span>}
        {!product.available && <span className="sold-tag">AGOTADO</span>}
      </button>
      <div className="product-info">
        <div><p className="product-category">{product.category}</p><button className="product-name" onClick={() => onOpen(product)}>{product.name}</button></div>
        <span className="product-price">{money(product.price)}</span>
      </div>
      <button onClick={() => onOpen(product)} className="quick-add">Ver producto <ArrowRight size={14} /></button>
    </article>
  )
}

export default function Storefront() {
  const [cart, setCart] = useState<CartLine[]>([])
  const [cartReady, setCartReady] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [category, setCategory] = useState('Todos')
  const [search, setSearch] = useState('')
  const [mobileMenu, setMobileMenu] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [sizeFilter, setSizeFilter] = useState('')
  const [colorFilter, setColorFilter] = useState('')
  const [availabilityFilter, setAvailabilityFilter] = useState(false)
  const [maxPrice, setMaxPrice] = useState(100)
  const [notice, setNotice] = useState('')

  useEffect(() => {
    try { const saved = window.localStorage.getItem('ka-boutique-cart'); if (saved) setCart(JSON.parse(saved) as CartLine[]) } catch { setCart([]) }
    setCartReady(true)
  }, [])
  useEffect(() => { if (cartReady) window.localStorage.setItem('ka-boutique-cart', JSON.stringify(cart)) }, [cart, cartReady])
  useEffect(() => {
    if (!notice) return
    const timer = window.setTimeout(() => setNotice(''), 2400)
    return () => window.clearTimeout(timer)
  }, [notice])

  const visibleProducts = useMemo(() => products.filter((product) =>
    (category === 'Todos' || product.category === category || (category === 'Novedades' && product.isNew) || (category === 'Más vendidos' && product.id.endsWith('-0'))) &&
    (!search || `${product.name} ${product.category} ${product.code}`.toLowerCase().includes(search.toLowerCase())) &&
    (!sizeFilter || product.sizes.includes(sizeFilter)) &&
    (!colorFilter || product.colors.includes(colorFilter)) &&
    (!availabilityFilter || product.available) && product.price <= maxPrice
  ), [category, search, sizeFilter, colorFilter, availabilityFilter, maxPrice])

  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0)
  const cartTotal = cart.reduce((sum, line) => sum + (products.find((product) => product.id === line.productId)?.price ?? 0) * line.quantity, 0)
  const cartProducts = cart.map((line) => ({ ...line, product: products.find((product) => product.id === line.productId)! })).filter((line) => line.product)

  function addToCart(product: Product, size = '', color = product.colors[0]) {
    if (!product.available) return
    const key = { productId: product.id, size: size || 'Única', color }
    setCart((current) => {
      const existing = current.find((line) => line.productId === key.productId && line.size === key.size && line.color === key.color)
      return existing ? current.map((line) => line === existing ? { ...line, quantity: line.quantity + 1 } : line) : [...current, { ...key, quantity: 1 }]
    })
    setActiveProduct(null)
    setCartOpen(true)
  }

  function changeQuantity(line: CartLine, delta: number) {
    setCart((current) => current.map((item) => item.productId === line.productId && item.size === line.size && item.color === line.color ? { ...item, quantity: item.quantity + delta } : item).filter((item) => item.quantity > 0))
  }

  function checkout() {
    const lines = cartProducts.map(({ product, size, color, quantity }) => `${product.name} · Código ${product.code}\nTalla: ${size} | Color: ${color} | Cantidad: ${quantity}\nPrecio: ${money(product.price)} c/u — ${money(product.price * quantity)}`)
    const message = `Hola KA Boutique, quiero realizar este pedido:\n\n${lines.join('\n\n')}\n\nTotal: ${money(cartTotal)}\n\n¿Me ayudan a confirmar disponibilidad y entrega?`
    window.open(`https://wa.me/584220420004?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  function openProduct(product: Product) { setActiveProduct(product); setSelectedSize(product.sizes[0] ?? ''); setSelectedColor(product.colors[0] ?? '') }

  return (
    <main>
      <div className="announcement">UNA PEQUEÑA ALEGRÍA PARA TI <span>·</span> ENVÍOS A TODA VENEZUELA</div>
      <header className="site-header">
        <button className="icon-button mobile-menu-button" aria-label="Abrir menú" onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X /> : <Menu />}</button>
        <nav className={`main-nav ${mobileMenu ? 'nav-open' : ''}`} aria-label="Navegación principal">
          <button onClick={() => { setCategory('Todos'); setMobileMenu(false) }}>Novedades</button>
          <button onClick={() => { setCategory('Lencería'); setMobileMenu(false) }}>Lencería</button>
          <button onClick={() => { setCategory('Vestidos'); setMobileMenu(false) }}>Ropa</button>
          <button onClick={() => { setCategory('Maquillaje'); setMobileMenu(false) }}>Belleza</button>
          <button onClick={() => { document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenu(false) }}>Colecciones</button>
        </nav>
        <a href="#inicio" className="brand" aria-label="KA Boutique, inicio"><Image src="/ka-boutique-logo.jpeg" alt="KA Boutique" width={100} height={100} priority /></a>
        <div className="header-actions">
          <label className="search-wrap"><Search size={17} /><input aria-label="Buscar productos" placeholder="Buscar" value={search} onChange={(event) => setSearch(event.target.value)} /><kbd>⌘ K</kbd></label>
          <button className="icon-button cart-trigger" aria-label={`Abrir bolsa, ${cartCount} artículos`} onClick={() => setCartOpen(true)}><ShoppingBag size={19} /><span>Bolsa ({cartCount})</span></button>
        </div>
      </header>

      <section id="inicio" className="hero">
        <Image className="hero-image" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2200&q=90" alt="Estilo de temporada KA Boutique" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content"><span className="eyebrow hero-eyebrow">ESTILO QUE SE SIENTE COMO TÚ</span><h1>Un encanto<br /><em>muy tuyo.</em></h1><p>Piezas para celebrar cada versión de ti.</p><button className="hero-cta" onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}>DESCUBRE LA COLECCIÓN <ArrowRight size={15} /></button></div>
        <span className="hero-index">01 — 03</span><span className="hero-caption">NUEVA TEMPORADA · 2026</span>
      </section>

      <div className="benefit-strip"><span>PIEZAS ELEGIDAS CON AMOR</span><i>✳</i><span>ATENCIÓN PERSONALIZADA</span><i>✳</i><span>ENVÍOS A TODA VENEZUELA</span></div>

      <section id="categorias" className="category-section section-wrap">
        <div className="section-heading"><div><span className="eyebrow">ENCUENTRA TU FAVORITO</span><h2>Un mundo <em>de posibilidades</em></h2></div><button className="text-link" onClick={() => { setCategory('Todos'); document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' }) }}>Ver todo <ArrowRight size={15} /></button></div>
        <div className="category-rail">{categories.map((item, index) => <button key={item.name} className={`category-tile ${category === item.name ? 'category-active' : ''}`} onClick={() => { setCategory(item.name); document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' }) }}><span className="category-image"><Image src={item.image} alt="" fill sizes="(max-width: 640px) 34vw, 16vw" className="object-cover" /></span><span className="category-label">{item.name}</span><span className="category-number">0{index + 1}</span></button>)}</div>
      </section>

      <section className="editorial-band"><div className="editorial-image"><Image src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85" alt="Look editorial de la colección KA Boutique" fill sizes="50vw" className="object-cover" /></div><div className="editorial-copy"><span className="eyebrow">ESENCIALES, CON UN GIRO</span><h2>El arte de<br />sentirte <em>increíble.</em></h2><p>Texturas que enamoran. Siluetas que celebran. Ese detalle que hace que todo se sienta más tú.</p><button className="text-link" onClick={() => { setCategory('Vestidos'); document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' }) }}>Explorar la selección <ArrowRight size={15} /></button><span className="editorial-mark">KA · 2026</span></div></section>

      <section id="catalogo" className="catalog-section section-wrap">
        <div className="section-heading catalog-heading"><div><span className="eyebrow">HECHO PARA ENAMORARTE</span><h2>{category === 'Todos' ? <>Nuestros <em>favoritos</em></> : <>{category} <em>para ti</em></>}</h2></div><span className="result-count">{visibleProducts.length} PIEZAS</span></div>
        <div className="catalog-toolbar"><div className="catalog-tabs"><button className={category === 'Todos' ? 'tab-active' : ''} onClick={() => setCategory('Todos')}>Todos</button><button className={category === 'Novedades' ? 'tab-active' : ''} onClick={() => setCategory('Novedades')}>Novedades</button><button className={category === 'Más vendidos' ? 'tab-active' : ''} onClick={() => setCategory('Más vendidos')}>Más vendidos</button></div><button className={`filter-trigger ${filtersOpen ? 'tab-active' : ''}`} onClick={() => setFiltersOpen(!filtersOpen)}><SlidersHorizontal size={15} /> Filtrar y ordenar <ChevronDown size={14} /></button></div>
        {filtersOpen && <div className="filter-panel"><label>Talla<select value={sizeFilter} onChange={(e) => setSizeFilter(e.target.value)}><option value="">Todas</option>{['S', 'M', 'L', 'XL'].map((size) => <option key={size}>{size}</option>)}</select></label><label>Color<select value={colorFilter} onChange={(e) => setColorFilter(e.target.value)}><option value="">Todos</option>{['Marfil', 'Negro', 'Rosa empolvado'].map((color) => <option key={color}>{color}</option>)}</select></label><label>Precio máximo <span>{money(maxPrice)}</span><input type="range" min="10" max="100" step="1" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} /></label><label className="availability-toggle"><input type="checkbox" checked={availabilityFilter} onChange={(e) => setAvailabilityFilter(e.target.checked)} /> Solo disponibles</label><button className="clear-filters" onClick={() => { setSizeFilter(''); setColorFilter(''); setMaxPrice(100); setAvailabilityFilter(false); setCategory('Todos') }}>Limpiar filtros</button></div>}
        {category === 'Novedades' || category === 'Más vendidos' ? null : null}
        {visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onOpen={openProduct} onAdd={addToCart} />)}</div> : <div className="empty-state"><p>No encontramos piezas con esos filtros.</p><button className="text-link" onClick={() => { setSizeFilter(''); setColorFilter(''); setAvailabilityFilter(false); setMaxPrice(100); setSearch(''); setCategory('Todos') }}>Ver toda la colección <ArrowRight size={15} /></button></div>}
        <button className="load-more" onClick={() => { setCategory('Todos'); setSizeFilter(''); setColorFilter(''); setAvailabilityFilter(false); setMaxPrice(100) }}>DESCUBRIR TODA LA COLECCIÓN <ArrowDown size={14} /></button>
      </section>

      <section className="newsletter"><span className="eyebrow">UNA NOTA BONITA DE VEZ EN CUANDO</span><h2>Un poquito de <em>inspiración.</em></h2><p>Novedades, favoritos y detalles solo para ti.</p><form onSubmit={(event) => { event.preventDefault(); setNotice('¡Gracias por estar aquí! Pronto tendrás noticias nuestras.'); (event.currentTarget as HTMLFormElement).reset() }}><label className="sr-only" htmlFor="newsletter-email">Tu correo electrónico</label><input id="newsletter-email" type="email" placeholder="Tu correo electrónico" required /><button type="submit" aria-label="Suscribirme"><ArrowRight size={18} /></button></form><small>Al suscribirte, aceptas recibir novedades de KA Boutique.</small></section>

      <footer className="site-footer"><div className="footer-brand"><a href="#inicio" className="footer-logo"><Image src="/ka-boutique-logo.jpeg" alt="KA Boutique" width={74} height={74} /></a><p>Una boutique hecha para celebrar<br />lo que te hace única.</p></div><div className="footer-column"><span>DESCUBRE</span><button onClick={() => { setCategory('Todos'); document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' }) }}>La colección</button><a href="#categorias">Categorías</a><a href="#inicio">Nuestra historia</a></div><div className="footer-column"><span>TE ACOMPAÑAMOS</span><a href="https://wa.me/584220420004" target="_blank" rel="noreferrer">Escríbenos por WhatsApp</a><a href="mailto:hola@kaboutique.com">hola@kaboutique.com</a><span className="footer-note">Lun – Sáb · 9:00 a. m. – 6:00 p. m.</span></div><div className="footer-social"><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">IG <ArrowRight size={14} /></a><p>VENEZUELA · CON CARIÑO</p></div><div className="footer-bottom"><span>© 2026 KA Boutique. Hecho con amor.</span><span>UNA PEQUEÑA ALEGRÍA PARA TI</span><a href="#inicio">Volver arriba ↑</a></div></footer>

      {notice && <div className="toast" role="status"><Check size={16} />{notice}</div>}

      {cartOpen && <div className="overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) setCartOpen(false) }}><aside className="cart-drawer" aria-label="Tu bolsa"><div className="drawer-header"><div><span className="eyebrow">TU SELECCIÓN</span><h2>Tu bolsa <span>({cartCount})</span></h2></div><button className="icon-button" aria-label="Cerrar bolsa" onClick={() => setCartOpen(false)}><X /></button></div>{cartProducts.length ? <><div className="cart-items">{cartProducts.map(({ product, quantity, size, color }) => <article key={`${product.id}-${size}-${color}`} className="cart-line"><div className="cart-thumb"><Image src={product.image} alt={product.name} fill sizes="90px" className="object-cover" /></div><div className="cart-line-content"><div className="cart-line-title"><div><h3>{product.name}</h3><p>{product.code} · {size} · {color}</p></div><button aria-label={`Quitar ${product.name}`} className="remove-line" onClick={() => setCart((current) => current.filter((line) => !(line.productId === product.id && line.size === size && line.color === color)))}><X size={14} /></button></div><div className="cart-line-bottom"><div className="quantity-control"><button aria-label="Disminuir cantidad" onClick={() => changeQuantity({ productId: product.id, size, color, quantity }, -1)}><Minus size={12} /></button><span>{quantity}</span><button aria-label="Aumentar cantidad" onClick={() => changeQuantity({ productId: product.id, size, color, quantity }, 1)}><Plus size={12} /></button></div><strong>{money(product.price * quantity)}</strong></div></div></article>)}</div><div className="cart-summary"><div><span>Subtotal</span><strong>{money(cartTotal)}</strong></div><p>El envío se coordina al confirmar tu pedido.</p><button className="checkout-button" onClick={checkout}>CONTINUAR POR WHATSAPP <ArrowRight size={16} /></button><button className="continue-shopping" onClick={() => setCartOpen(false)}><ArrowLeft size={14} /> Seguir explorando</button></div></> : <div className="cart-empty"><ShoppingBag size={32} strokeWidth={1} /><h3>Tu bolsa está esperando.</h3><p>Ese algo especial podría estar aquí.</p><button className="dark-button" onClick={() => setCartOpen(false)}>DESCUBRIR LA COLECCIÓN</button></div>}</aside></div>}

      {activeProduct && <div className="overlay product-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) setActiveProduct(null) }}><section className="product-modal" role="dialog" aria-modal="true" aria-label={`Detalles de ${activeProduct.name}`}><button className="icon-button modal-close" aria-label="Cerrar detalles" onClick={() => setActiveProduct(null)}><X /></button><div className="modal-photo"><Image src={activeProduct.image} alt={activeProduct.name} fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" /></div><div className="modal-details"><span className="eyebrow">{activeProduct.category} · {activeProduct.code}</span><h2>{activeProduct.name}</h2><strong className="modal-price">{money(activeProduct.price)}</strong><p className="modal-description">{activeProduct.description}</p><span className="option-label">COLOR <span>{selectedColor}</span></span><div className="color-options">{activeProduct.colors.map((color, index) => <button key={color} className={`color-swatch swatch-${index} ${selectedColor === color ? 'swatch-selected' : ''}`} aria-label={color} title={color} onClick={() => setSelectedColor(color)} />)}</div>{activeProduct.sizes.length > 0 && <><span className="option-label size-label">TALLA <span>Guía de tallas</span></span><div className="size-options">{activeProduct.sizes.map((size) => <button key={size} className={selectedSize === size ? 'size-selected' : ''} onClick={() => setSelectedSize(size)}>{size}</button>)}</div></>}<p className={`availability ${activeProduct.available ? '' : 'unavailable'}`}><span />{activeProduct.available ? 'Disponible para ti' : 'Agotado por ahora'}</p><button disabled={!activeProduct.available} className="checkout-button add-to-bag" onClick={() => addToCart(activeProduct, selectedSize, selectedColor)}>{activeProduct.available ? 'AÑADIR A MI BOLSA' : 'AGOTADO'} <ShoppingBag size={16} /></button><span className="modal-code">{activeProduct.line} · Código {activeProduct.code}</span></div></section></div>}
    </main>
  )
}
