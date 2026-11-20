export type Category = {
  name: string
  image: string
}

export type Product = {
  id: string
  code: string
  name: string
  category: string
  line?: string
  price: number
  sizes: string[]
  colors: string[]
  available: boolean
  image: string
  description: string
  isNew?: boolean
}

const image = (id: string, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export const categories: Category[] = [
  { name: 'Lencería', image: image('photo-1490481651871-ab68de25d43d') },
  { name: 'Bragas', image: image('photo-1595341888016-a392ef81b7de') },
  { name: 'Corsets', image: image('photo-1539109136881-3be0616acf4b') },
  { name: 'Jeans', image: image('photo-1541099649105-f69ad21f3246') },
  { name: 'Camisas Oversize', image: image('photo-1598554747436-c9293d6a588f') },
  { name: 'Vestidos', image: image('photo-1496747611176-843222e1e57c') },
  { name: 'Trajes de baño', image: image('photo-1539109136881-3be0616acf4b') },
  { name: 'Conjuntos playeros', image: image('photo-1515886657613-9f3515b0c78f') },
  { name: 'Productos capilares', image: image('photo-1608248543803-ba4f8c70ae0b') },
  { name: 'Maquillaje', image: image('photo-1522335789203-aabd1fc54bc9') },
]

const collections = [
  { category: 'Lencería', names: ['Conjunto Amélie', 'Encaje Aurora', 'Bralette Rosé'], prices: [28, 32, 26], photo: 'photo-1490481651871-ab68de25d43d' },
  { category: 'Bragas', names: ['Braga Serena', 'Brief de encaje', 'Culotte Nube'], prices: [12, 14, 13], photo: 'photo-1595341888016-a392ef81b7de' },
  { category: 'Corsets', names: ['Corset Celeste', 'Bustier Perla', 'Corset Nocturne'], prices: [42, 48, 45], photo: 'photo-1539109136881-3be0616acf4b' },
  { category: 'Jeans', names: ['Denim Palazzo', 'Jean Riviera', 'Straight Lucía'], prices: [52, 48, 55], photo: 'photo-1490481651871-ab68de25d43d' },
  { category: 'Camisas Oversize', names: ['Camisa Sunday', 'Oxford Serena', 'Camisa Alba'], prices: [38, 42, 36], photo: 'photo-1598554747436-c9293d6a588f' },
  { category: 'Vestidos', names: ['Vestido Solana', 'Midi Camila', 'Vestido Valentina'], prices: [58, 64, 72], photo: 'photo-1496747611176-843222e1e57c' },
  { category: 'Trajes de baño', names: ['Bikini Maré', 'One-piece Coral', 'Bikini Isla'], prices: [36, 42, 39], photo: 'photo-1539109136881-3be0616acf4b' },
  { category: 'Conjuntos playeros', names: ['Set Brisa', 'Paréo Duna', 'Lino de verano'], prices: [44, 35, 52], photo: 'photo-1515886657613-9f3515b0c78f' },
  { category: 'Productos capilares', names: ['Sérum Brillo', 'Mascarilla Seda', 'Aceite de argán'], prices: [22, 26, 19], photo: 'photo-1608248543803-ba4f8c70ae0b' },
  { category: 'Maquillaje', names: ['Lip Tint Rose', 'Paleta Lumière', 'Blush Petal'], prices: [18, 32, 21], photo: 'photo-1522335789203-aabd1fc54bc9' },
]

const apparelSizes = ['S', 'M', 'L', 'XL']

export const products: Product[] = collections.flatMap(({ category, names, prices, photo }, categoryIndex) =>
  names.map((name, index) => ({
    id: `${categoryIndex}-${index}`,
    code: `KA-${String(categoryIndex + 1).padStart(2, '0')}${String(index + 1).padStart(2, '0')}`,
    name,
    category,
    line: category === 'Productos capilares' || category === 'Maquillaje' ? 'Belleza KA' : 'Colección Esencial',
    price: prices[index],
    sizes: category === 'Productos capilares' || category === 'Maquillaje' ? [] : apparelSizes,
    colors: ['Marfil', 'Negro', 'Rosa empolvado'],
    available: !(categoryIndex === 9 && index === 2),
    image: image(photo),
    description: `Una pieza especial de nuestra colección ${category.toLowerCase()}, seleccionada para acompañarte con elegancia todos los días.`,
    isNew: index === 0,
  }))
)

export const formatPrice = (price: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(price)
