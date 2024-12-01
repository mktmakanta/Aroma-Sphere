import LogoutButton from "../components/LogoutButton";
import ProductItems from "../components/ProductCards";

export default function Home() {
  return (
    <main>
      <LogoutButton />
      <div className="max-w-7xl mx-auto py-10 px-5  space-y-5">
        <h1 className="text-lg lg:text-2xl "> Latest Products </h1>
        <ProductItems />
      </div>
    </main>
  );
}
