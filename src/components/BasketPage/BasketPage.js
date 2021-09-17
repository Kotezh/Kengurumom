import { useSelector, useDispatch } from 'react-redux';
import './BasketPage.css';
import BasketTableProduct from '../BasketTableProduct/BasketTableProduct';
import { clearBasket } from '../../redux/actions';

function BasketPage() {
  const goods = useSelector(state => state.goods.goodsInBasket);
  const goodsCounterInBasket = useSelector(state => state.goods.goodsCounterInBasket);
  const dispatch = useDispatch();

  return (
    <section className='basket-page basket-page_centered'>
      <h2 className='basket_page__title'>Корзина</h2>
      <div className='basket-page__top'>
        <p className='basket-page__info'>Ваш заказ({goodsCounterInBasket})</p>
        <button onClick={() => dispatch(clearBasket())} className='basket-page__clear-btn'>
          Очистить
        </button>
      </div>
      {goodsCounterInBasket > 0 && (
        <div className='basket-page__table'>
          {goods.map(product => (
            <BasketTableProduct product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default BasketPage;