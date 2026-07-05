export interface Product {
  id: number;
  name: string;
  price: number;
  weight: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Kadumango Achar",
    price: 280,
    weight: "500g",
    category: "Mango",
    description:
      "Wild mango pickle with hand-ground mustard and raw sesame oil. Sun-dried for 7 days.",
  },
  {
    id: 2,
    name: "Naranga Achar",
    price: 220,
    weight: "400g",
    category: "Lime",
    description:
      "Kerala lime pickle aged in ceramic bharani. Sharp, tangy, with a slow burn of bird's eye chilli.",
  },
  {
    id: 3,
    name: "Nellikka Achar",
    price: 320,
    weight: "350g",
    category: "Gooseberry",
    description:
      "Indian gooseberry in a mustard-fenugreek base. A family recipe passed down three generations.",
  },
  {
    id: 4,
    name: "Prawns Achar",
    price: 450,
    weight: "300g",
    category: "Seafood",
    description:
      "Coastal Malabar prawns in coconut oil and red chilli. Small-batch, made to order.",
  },
  {
    id: 5,
    name: "Garlic Fire Achar",
    price: 180,
    weight: "250g",
    category: "Garlic",
    description:
      "Whole garlic cloves roasted and pickled with Kashmiri chilli. Fiery and addictive.",
  },
  {
    id: 6,
    name: "Mixed Vegetable Achar",
    price: 260,
    weight: "500g",
    category: "Mixed",
    description:
      "Seasonal vegetables — carrot, cauliflower, green chilli — in a classic Kerala masala base.",
  },
  {
    id: 7,
    name: "Inji Curry (Ginger)",
    price: 200,
    weight: "300g",
    category: "Ginger",
    description:
      "Sweet and sour ginger preserve. A Sadhya essential. Made with jaggery and tamarind.",
  },
  {
    id: 8,
    name: "Chicken Achar",
    price: 480,
    weight: "350g",
    category: "Non-Veg",
    description:
      "Bone-in chicken pieces slow-cooked in pickle masala. Rich, oily, meant for rice.",
  },
];

export const categories = [
  "All",
  "Mango",
  "Lime",
  "Gooseberry",
  "Seafood",
  "Garlic",
  "Mixed",
  "Ginger",
  "Non-Veg",
];

export const categoryShowcase = [
  { name: "Mango Pickles", slug: "Mango" },
  { name: "Lime & Citrus", slug: "Lime" },
  { name: "Seafood Special", slug: "Seafood" },
  { name: "Non-Veg", slug: "Non-Veg" },
  { name: "Mixed & Others", slug: "Mixed" },
];
