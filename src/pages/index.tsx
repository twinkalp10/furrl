import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Navbar />
      <ProductList />
    </div>
  );
}
