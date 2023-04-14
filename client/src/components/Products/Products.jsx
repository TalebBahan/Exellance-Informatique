import React, { lazy, Suspense } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../apiSlice";

const LazyImage = lazy(() => import('./Card'));

export default function Products() {

  const { data, isLoading } = useGetProductsQuery()

  const { type } = useParams();
  const filtered = (key) => {
    return data.filter((product) => {
      return product.category === key;
    });
  }

  return (
    <div className='wrapper'>
      <div className="product_container">
        <Suspense>
          {!isLoading && data?.length > 0 ? (
            filtered(type).map((product) => <LazyImage key={product.id} {...product} />)
          ) : (
            <div className="not_products">
              <img
                className="products_empty_img"
                src="images/bare-tree.png"
                alt=""
              />
            </div>
          )}
        </Suspense>
      </div>

    </div>
  );
}
