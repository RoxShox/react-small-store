import React from 'react';
import { TypeSetState } from '../types';

interface IQty {
	count: number
	setCount: TypeSetState<number>
}

const Quantity:React.FC<IQty> = ({count, setCount}) => {


	return (
		<div className='flex items-center'>
			<button onClick={() => setCount(prev => prev + 1)}>+</button>
			<input type="number" className='mx-2' onChange={e => setCount(+e.target.value)} value={count}/>
			<button onClick={() => setCount(prev => prev > 0 ? prev - 1 : 0)}>-</button>
		</div>
	);
};

export default Quantity;