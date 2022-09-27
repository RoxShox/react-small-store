import React from 'react';
import { IProduct } from '../types';
import ProductItem from './ProductItem';


const products:IProduct[] = [
	{
		_id:'gfdg',
		name: 'Ноутбук Huawei MateBook D 14 14',
		imagePath: 'https://items.s1.citilink.ru/1774328_v01_b.jpg',
		price: 1000,
	},
	{
		_id:'4235',
		name: 'Ультрабук Honor MagicBook 15',
		imagePath: 'https://items.s1.citilink.ru/1602659_v01_b.jpg',
		price: 1200,
	},
	{
		_id:'gwrg',
		name: 'Ноутбук Acer Aspire 3 A315-56-33X5',
		imagePath: 'https://items.s1.citilink.ru/1194672_v01_b.jpg',
		price: 700,
	}
]

const Products:React.FC = () => {


	return (
		<div className='mt-4 flex flex-col justify-center items-center'>
			
			{products.map(product => (
				<ProductItem product={product} key={product._id}/>
			))}

		</div>
	);
};

export default Products;