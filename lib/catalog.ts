export type Category = { name: string; image: string }
export type Product = { id: string; code: string; name: string; category: string; line?: string; price: number; sizes: string[]; colors: string[]; available: boolean; image: string; description: string; isNew?: boolean }

export const categories: Category[] = [
  {
    "name": "Lencería",
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85"
  },
  {
    "name": "Pijamas",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85"
  },
  {
    "name": "Trajes de baño",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85"
  }
]

export const products: Product[] = [
  {
    "id": "Lencería-1",
    "code": "KA-001",
    "name": "Body negro de encaje con tiras",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Body negro de encaje con tiras. Precio especial de $19,99.",
    "isNew": true
  },
  {
    "id": "Lencería-2",
    "code": "KA-002",
    "name": "Body negro de encaje y tiras cruzadas",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Body negro de encaje y tiras cruzadas. Precio especial de $19,99.",
    "isNew": true
  },
  {
    "id": "Lencería-3",
    "code": "KA-003",
    "name": "Conjunto rojo de encaje",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto rojo de encaje. Precio especial de $19,99.",
    "isNew": true
  },
  {
    "id": "Lencería-4",
    "code": "KA-004",
    "name": "Body negro de encaje con lazos laterales",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Body negro de encaje con lazos laterales. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-5",
    "code": "KA-005",
    "name": "Body rojo de encaje",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Body rojo de encaje. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-6",
    "code": "KA-006",
    "name": "Conjunto rojo de encaje floral",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto rojo de encaje floral. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-7",
    "code": "KA-007",
    "name": "Conjunto vino de encaje",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto vino de encaje. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-8",
    "code": "KA-008",
    "name": "Conjunto rojo con tiras decorativas",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto rojo con tiras decorativas. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-9",
    "code": "KA-009",
    "name": "Conjunto negro de encaje",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto negro de encaje. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-10",
    "code": "KA-010",
    "name": "Conjunto rojo con transparencias",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto rojo con transparencias. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-11",
    "code": "KA-011",
    "name": "Body blanco de encaje",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Body blanco de encaje. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-12",
    "code": "KA-012",
    "name": "Conjunto rojo delicado",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto rojo delicado. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-13",
    "code": "KA-013",
    "name": "Body negro de encaje floral",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Body negro de encaje floral. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-14",
    "code": "KA-014",
    "name": "Conjunto negro con detalles fucsia",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto negro con detalles fucsia. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-15",
    "code": "KA-015",
    "name": "Body rojo de encaje",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Body rojo de encaje. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-16",
    "code": "KA-016",
    "name": "Conjunto blanco de encaje",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto blanco de encaje. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-17",
    "code": "KA-017",
    "name": "Conjunto negro de tiras",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto negro de tiras. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Lencería-18",
    "code": "KA-018",
    "name": "Conjunto negro de encaje floral",
    "category": "Lencería",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto negro de encaje floral. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-1",
    "code": "KA-019",
    "name": "Accesorios de playa y bikini negro",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Accesorios de playa y bikini negro. Precio especial de $19,99.",
    "isNew": true
  },
  {
    "id": "Trajes de baño-2",
    "code": "KA-020",
    "name": "Bikini amarillo en la playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini amarillo en la playa. Precio especial de $19,99.",
    "isNew": true
  },
  {
    "id": "Trajes de baño-3",
    "code": "KA-021",
    "name": "Bikini aqua y accesorios playeros",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini aqua y accesorios playeros. Precio especial de $19,99.",
    "isNew": true
  },
  {
    "id": "Trajes de baño-4",
    "code": "KA-022",
    "name": "Bikini azul marino y accesorios playeros",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini azul marino y accesorios playeros. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-5",
    "code": "KA-023",
    "name": "Bikini azul pastel en la playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini azul pastel en la playa. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-6",
    "code": "KA-024",
    "name": "Bikini azul y gafas sobre arena",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini azul y gafas sobre arena. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-7",
    "code": "KA-025",
    "name": "Bikini boutique en la playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini boutique en la playa. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-8",
    "code": "KA-026",
    "name": "Bikini burdeos bajo el sol tropical",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini burdeos bajo el sol tropical. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-9",
    "code": "KA-027",
    "name": "Bikini burdeos en paraíso tropical",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini burdeos en paraíso tropical. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-10",
    "code": "KA-028",
    "name": "Bikini crema y accesorios de playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini crema y accesorios de playa. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-11",
    "code": "KA-029",
    "name": "Bikini Floral en la Playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini Floral en la Playa. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-12",
    "code": "KA-030",
    "name": "Bikini floral en playa soleada",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini floral en playa soleada. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-13",
    "code": "KA-031",
    "name": "Bikini floral gris sobre arena con accesorios playeros",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini floral gris sobre arena con accesorios playeros. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-14",
    "code": "KA-032",
    "name": "Bikini marfil y accesorios playeros elegantes",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini marfil y accesorios playeros elegantes. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-15",
    "code": "KA-033",
    "name": "Bikini negro en playa soleada",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini negro en playa soleada. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-16",
    "code": "KA-034",
    "name": "Bikini negro y accesorios de playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini negro y accesorios de playa. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-17",
    "code": "KA-035",
    "name": "Bikini rojo y accesorios sobre arena",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini rojo y accesorios sobre arena. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-18",
    "code": "KA-036",
    "name": "Bikini tejido con detalles marinos en la playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini tejido con detalles marinos en la playa. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-19",
    "code": "KA-037",
    "name": "Bikini turquesa y accesorios de playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini turquesa y accesorios de playa. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-20",
    "code": "KA-038",
    "name": "Bikini verde y joyería sobre arena",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini verde y joyería sobre arena. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-21",
    "code": "KA-039",
    "name": "Bikini y accesorios sobre arena dorada",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikini y accesorios sobre arena dorada. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-22",
    "code": "KA-040",
    "name": "Bikinis plisados bajo el sol de playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Bikinis plisados bajo el sol de playa. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-23",
    "code": "KA-041",
    "name": "Conjunto bikini negro en la playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto bikini negro en la playa. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-24",
    "code": "KA-042",
    "name": "Conjunto Crochet Azul en la Playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto Crochet Azul en la Playa. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-25",
    "code": "KA-043",
    "name": "Conjunto crochet marfil junto al mar",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto crochet marfil junto al mar. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-26",
    "code": "KA-044",
    "name": "Conjunto de baño negro en la playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto de baño negro en la playa. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-27",
    "code": "KA-045",
    "name": "Conjunto negro de playa sobre arena",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto negro de playa sobre arena. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-28",
    "code": "KA-046",
    "name": "Conjunto playero negro sobre arena",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto playero negro sobre arena. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-29",
    "code": "KA-047",
    "name": "Conjunto Turquesa y Verano en la Playa",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Conjunto Turquesa y Verano en la Playa. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-30",
    "code": "KA-048",
    "name": "Flat Lay Boutique de Playa Black Bikini",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Flat Lay Boutique de Playa Black Bikini. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-31",
    "code": "KA-049",
    "name": "Flat-Lay Boutique Playera en la Arena",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Flat-Lay Boutique Playera en la Arena. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-32",
    "code": "KA-050",
    "name": "Moda playera roja sobre arena cálida",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Moda playera roja sobre arena cálida. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-33",
    "code": "KA-051",
    "name": "Pantalones blancos sobre arena con logo boutique",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Pantalones blancos sobre arena con logo boutique. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-34",
    "code": "KA-052",
    "name": "Pantalón playero junto al mar",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Pantalón playero junto al mar. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-35",
    "code": "KA-053",
    "name": "Relajante conjunto de bikini junto al mar",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Relajante conjunto de bikini junto al mar. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-36",
    "code": "KA-054",
    "name": "Traje de baño boutique sobre arena tropical",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Traje de baño boutique sobre arena tropical. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-37",
    "code": "KA-055",
    "name": "Traje de baño y accesorios playeros",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Traje de baño y accesorios playeros. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-38",
    "code": "KA-056",
    "name": "Trajes de baño sobre arena con logo boutique",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Trajes de baño sobre arena con logo boutique. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-39",
    "code": "KA-057",
    "name": "Vestido Playero Rayado en la Arena",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Vestido Playero Rayado en la Arena. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Trajes de baño-40",
    "code": "KA-058",
    "name": "Vestido playero y accesorios sobre arena",
    "category": "Trajes de baño",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    "description": "Vestido playero y accesorios sobre arena. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Pijamas-1",
    "code": "KA-059",
    "name": "Pijama azul pastel con detalles de lazos",
    "category": "Pijamas",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    "description": "Pijama azul pastel con detalles de lazos. Precio especial de $19,99.",
    "isNew": true
  },
  {
    "id": "Pijamas-2",
    "code": "KA-060",
    "name": "Pijama de satén rosa con lazo",
    "category": "Pijamas",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    "description": "Pijama de satén rosa con lazo. Precio especial de $19,99.",
    "isNew": true
  },
  {
    "id": "Pijamas-3",
    "code": "KA-061",
    "name": "Pijama negro con corazones rosas",
    "category": "Pijamas",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    "description": "Pijama negro con corazones rosas. Precio especial de $19,99.",
    "isNew": true
  },
  {
    "id": "Pijamas-4",
    "code": "KA-062",
    "name": "Pijama negro con lazos rosas y logo boutique",
    "category": "Pijamas",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    "description": "Pijama negro con lazos rosas y logo boutique. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Pijamas-5",
    "code": "KA-063",
    "name": "Pijama satinado coral con corazones",
    "category": "Pijamas",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    "description": "Pijama satinado coral con corazones. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Pijamas-6",
    "code": "KA-064",
    "name": "Pijama satinado de lazo y corazones",
    "category": "Pijamas",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    "description": "Pijama satinado de lazo y corazones. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Pijamas-7",
    "code": "KA-065",
    "name": "Pijama satinado rosa con detalles negros",
    "category": "Pijamas",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    "description": "Pijama satinado rosa con detalles negros. Precio especial de $19,99.",
    "isNew": false
  },
  {
    "id": "Pijamas-8",
    "code": "KA-066",
    "name": "Pijamas satinados Good Night con logo boutique",
    "category": "Pijamas",
    "line": "Colección KA",
    "price": 19.99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Variado"
    ],
    "available": true,
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    "description": "Pijamas satinados Good Night con logo boutique. Precio especial de $19,99.",
    "isNew": false
  }
]

export const formatPrice = (price: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price)
