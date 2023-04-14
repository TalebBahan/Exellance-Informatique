import React, { lazy, Suspense, useState } from "react";
import AddProduct from "./AddProduct";
import { useGetProductsQuery } from "../../apiSlice";
import Login from "./Login";
import UpdateProduct from "./UpdateProduct";
const LazyImage = lazy(() => import('./Card'));

export default function Admin() {
  const [isLoged, SetisLoged] = useState(false)
  const { data, isLoading, isError } = useGetProductsQuery()

  const Admin = () => {
    return (
      <div className='wrapper'>
        <AddProduct />
        <UpdateProduct />
        {!isError &&
          <div className="product_container">

            <Suspense>
              {!isLoading && data.length > 0 ? (
                data.map((product) => <LazyImage key={product.id} {...product} SetisLoged={()=>SetisLoged(false)}/>)
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
        }
      </div>
    )
  }


  return (
    isLoged ? <Admin /> : <Login SetisLoged={()=>SetisLoged(true)} />
  );
}
