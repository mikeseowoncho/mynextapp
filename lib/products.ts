export type Product = {
  id: string;
  name: string;
  description: string;
  likes: number;
};

const products: Product[] = [
  { id: "1", name: "머그컵", description: "나의 최애 머그컵", likes: 3 },
  { id: "2", name: "휴대폰", description: "갤럭시 S26 Ultra", likes: 10 },
  { id: "3", name: "연필", description: "이제는 잘 안씀", likes: 2 },
  { id: "4", name: "노트", description: "이제는 잘 안씀", likes: 1 },
  { id: "5", name: "노트북", description: "없어서는 안될제품", likes: 10 },
  { id: "6", name: "next.js", description: "web framework", likes: 3 },
];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProducts(): Promise<Product[]> {
  await delay(700);
  return products;
}

export async function getProduct(id: string): Promise<Product | undefined> {
  await delay(400);
  return products.find((p) => p.id === id);
}

export async function likeProduct(id: string): Promise<number> {
  await delay(300);
  const product = products.find((p) => p.id === id);
  if (!product) return 0;
  product.likes += 1;
  return product.likes;
}
