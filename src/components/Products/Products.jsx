import React, { useContext ,lazy ,useEffect,Suspense} from "react";
import "./Products.css";
import { FilterContext } from "../Context/ContextFilter";
import { useParams } from "react-router-dom";
import { FilterDispath } from "../Context/ContextFilter";
// import Card from "./Card/Card";


const LazyImage = lazy(() => import('./Card/Card'));
export default function Products() {
  const { type } = useParams();
  const { dispath } = useContext(FilterDispath);
  useEffect(() => {
    dispath({ type });
  }, [type]);
  const { state } = useContext(FilterContext);

  const productsList = state.filteredItems.filter((product) => {
    return product.title.includes(state.searchKey) || !state.searchKey;
  });


  return (
    <div className='wrapper'>
      <div className="product_container">
      <Suspense>
        {productsList.length > 0 ? (
          productsList.map((product) => <LazyImage key={product.id} {...product} />)
        ) : (
          <div className="not_products">
            <img
              className="products_empty_img"
              src="images/bare-tree.png"
              alt=""
            />
            {/* <span className="products_empty_title">
              با عرض پوزش هیچ محصولی با جستجوی شما مطابقت نداشت!
            </span>
            <span className="products_empty_guide">
              کلمه کلیدی دیگری را وارد کرده و امتحان کنید
            </span> */}
          </div>
        )}
        </Suspense>
      </div>

    </div>
  );
}
