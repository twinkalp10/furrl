export interface Product {
  images: ProductImages[];
  brandName: string;
  title: string;
  price: string;
  id: string;
}

interface ProductImages {
  src: string;
}

export interface VibeData {
  productData: Product[]
  vibeImageUrl: string;
  totalStoredProductIdsCount: number;
}
