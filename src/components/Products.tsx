import { Product } from "@/types";

export const Products = ({ products }: { products: Product[] }) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {products.map(
        ({ id, thumbnail, title, permalink, price, currency_id }) => (
          <li key={id}>
            <a
              href={permalink}
              title={`Ir a la pagina de Mercado Libre para el producto ${title}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={thumbnail} alt={title} />
              <h3>{title}</h3>
              <strong>
                {price.toLocaleString("es-AR", {
                  currency: currency_id,
                  style: "currency",
                })}
              </strong>
            </a>
          </li>
        )
      )}
    </ul>
  );
};
