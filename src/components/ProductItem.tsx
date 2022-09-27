import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart/action';
import { IProduct } from '../types';
import Quantity from './Quantity';

interface IProductItem {
	product: IProduct
}

const ProductItem:React.FC<IProductItem> = ({product}) => {
	const dispatch = useDispatch()
	const [count, setCount] = React.useState(0)
	const addHandler = () => {
		dispatch(addToCart(product, count))
	}
	
	return (
		<div className='shadow-sm rounded-md p-5 w-full mx-auto mb-5 flex flex-col justify-center items-center'
		 	>
			<img src={product.imagePath} alt={product.name} width='500'/>
			<div className='text-lg font-bold'>{product.name}</div>
			<div className='text-sm text-gray-600'>${product.price}</div>
			<Quantity setCount={setCount} count={count}/>
			<button onClick={addHandler} 
					className='bg-orange-400 font-semibold text-white rounded-xl px-3 py-1' >
				В корзину
			</button>
		</div>
	);
};

export default ProductItem;