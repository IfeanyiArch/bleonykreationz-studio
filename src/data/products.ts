export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  longDescription: string;
  details: string[];
  care: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cozy Blanket",
    price: 85,
    description: "Hand-crocheted throw blanket in soft cotton blend",
    category: "Home",
    longDescription: "Wrap yourself in warmth with this beautifully hand-crocheted throw blanket. Made with premium cotton blend yarn, this blanket features an intricate pattern that adds texture and visual interest to any space. Perfect for cozy evenings on the couch or as a decorative accent on your bed.",
    details: ["Dimensions: 50\" x 60\"", "Material: 70% Cotton, 30% Acrylic", "Weight: Lightweight", "Color: Customizable"],
    care: ["Hand wash cold", "Lay flat to dry", "Do not bleach", "Steam iron if needed"],
  },
  {
    id: 2,
    name: "Amigurumi Bunny",
    price: 35,
    description: "Adorable handmade stuffed bunny toy",
    category: "Toys",
    longDescription: "Meet your new cuddly companion! This adorable amigurumi bunny is hand-crocheted with love and attention to detail. With its soft texture and sweet expression, it makes the perfect gift for children or anyone who appreciates handmade artistry. Each bunny is unique and crafted to be a treasured keepsake.",
    details: ["Height: 10 inches", "Material: 100% Cotton yarn", "Stuffing: Polyester fiberfill", "Safety eyes"],
    care: ["Spot clean only", "Air dry", "Keep away from heat sources"],
  },
  {
    id: 3,
    name: "Granny Square Bag",
    price: 55,
    description: "Vintage-style crochet tote bag",
    category: "Accessories",
    longDescription: "Embrace vintage charm with this stunning granny square tote bag. Featuring classic crochet patterns in a modern color palette, this bag is both functional and fashionable. Perfect for trips to the farmer's market, beach days, or as an everyday carry-all that makes a statement.",
    details: ["Dimensions: 14\" x 16\"", "Handle drop: 10 inches", "Material: Cotton yarn", "Lined interior"],
    care: ["Hand wash cold", "Reshape while damp", "Lay flat to dry"],
  },
  {
    id: 4,
    name: "Baby Booties Set",
    price: 28,
    description: "Soft crochet booties for newborns",
    category: "Baby",
    longDescription: "Keep little feet warm and stylish with these precious hand-crocheted baby booties. Made with ultra-soft yarn that's gentle on delicate skin, these booties feature a secure fit that stays on active little ones. A thoughtful gift for baby showers or new parents.",
    details: ["Sizes: 0-3, 3-6, 6-12 months", "Material: 100% Organic Cotton", "Adjustable ties", "Machine washable"],
    care: ["Machine wash gentle", "Tumble dry low", "Do not iron"],
  },
  {
    id: 5,
    name: "Plant Hanger",
    price: 42,
    description: "Macramé-style crochet plant holder",
    category: "Home",
    longDescription: "Elevate your plant game with this beautiful macramé-style crochet plant hanger. Designed to hold pots up to 6 inches in diameter, this hanger adds a bohemian touch to any room. The sturdy construction ensures your plants hang securely while the intricate knotwork creates visual interest.",
    details: ["Length: 36 inches", "Fits pots up to 6\" diameter", "Material: Cotton rope", "Includes mounting hook"],
    care: ["Dust regularly", "Spot clean with damp cloth", "Keep away from direct sunlight to prevent fading"],
  },
  {
    id: 6,
    name: "Winter Beanie",
    price: 32,
    description: "Warm chunky knit winter hat",
    category: "Accessories",
    longDescription: "Stay cozy all winter long with this chunky hand-crocheted beanie. Made with plush yarn that provides exceptional warmth without the bulk, this hat features a classic design that complements any outfit. The stretchy ribbed band ensures a comfortable, secure fit.",
    details: ["One size fits most", "Material: Wool blend", "Double-layered brim", "Pom-pom included"],
    care: ["Hand wash cold", "Lay flat to dry", "Do not wring"],
  },
  {
    id: 7,
    name: "Table Runner",
    price: 65,
    description: "Elegant lace crochet table runner",
    category: "Home",
    longDescription: "Add timeless elegance to your dining table with this exquisite lace crochet table runner. Featuring intricate patterns inspired by vintage designs, this runner is perfect for special occasions or everyday dining. The delicate lacework showcases the artistry of traditional crochet.",
    details: ["Dimensions: 14\" x 72\"", "Material: 100% Cotton thread", "Color: Natural white", "Vintage-inspired pattern"],
    care: ["Hand wash with mild detergent", "Starch lightly if desired", "Iron on low heat", "Store flat"],
  },
  {
    id: 8,
    name: "Amigurumi Bear",
    price: 38,
    description: "Cuddly handmade teddy bear",
    category: "Toys",
    longDescription: "This lovable amigurumi teddy bear is waiting for cuddles! Hand-crocheted with premium yarn, this bear features adorable details including an embroidered nose and button eyes. A perfect companion for children of all ages or a charming decoration for nurseries and bedrooms.",
    details: ["Height: 12 inches", "Material: Soft acrylic yarn", "Hypoallergenic stuffing", "Embroidered features"],
    care: ["Surface wash only", "Air dry completely", "Brush gently to maintain softness"],
  },
  {
    id: 9,
    name: "Market Bag",
    price: 45,
    description: "Reusable mesh crochet shopping bag",
    category: "Accessories",
    longDescription: "Shop sustainably with this stylish mesh crochet market bag. The open-weave design stretches to accommodate your groceries while remaining lightweight and easy to carry. When not in use, it folds up small enough to fit in your purse. A beautiful and eco-friendly alternative to plastic bags.",
    details: ["Expands to 15\" x 18\"", "Material: Cotton yarn", "Reinforced handles", "Machine washable"],
    care: ["Machine wash cold", "Tumble dry low", "Avoid overloading"],
  },
  {
    id: 10,
    name: "Baby Cardigan",
    price: 52,
    description: "Delicate crochet cardigan for infants",
    category: "Baby",
    longDescription: "Dress your little one in this sweet hand-crocheted cardigan. Made with soft, baby-safe yarn, this cardigan features delicate details including tiny buttons and a scalloped edge. Perfect for layering over onesies or dresses, it's an heirloom-quality piece that makes a wonderful gift.",
    details: ["Sizes: 0-3, 3-6, 6-12 months", "Material: Baby-soft cotton blend", "Button closure", "Scalloped hem"],
    care: ["Hand wash cold", "Lay flat to dry", "Store folded"],
  },
  {
    id: 11,
    name: "Coaster Set",
    price: 18,
    description: "Set of 4 decorative crochet coasters",
    category: "Home",
    longDescription: "Protect your surfaces in style with this set of four hand-crocheted coasters. Each coaster features a unique pattern while maintaining a cohesive color scheme that complements any decor. Functional and decorative, they add a handmade touch to your home.",
    details: ["Quantity: 4 coasters", "Diameter: 4 inches each", "Material: Cotton yarn", "Absorbent design"],
    care: ["Machine wash cold", "Tumble dry low", "Iron flat if needed"],
  },
  {
    id: 12,
    name: "Headband",
    price: 22,
    description: "Stylish ear warmer headband",
    category: "Accessories",
    longDescription: "Keep your ears warm without hat hair! This chic crochet headband is the perfect accessory for cool weather. The stretchy design fits comfortably and stays in place, while the beautiful texture adds interest to any outfit. Available in multiple colors to match your wardrobe.",
    details: ["Width: 4 inches", "Material: Wool blend", "Stretchy fit", "Button closure option"],
    care: ["Hand wash cold", "Reshape while damp", "Lay flat to dry"],
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};
