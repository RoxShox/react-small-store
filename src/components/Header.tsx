import React, { FC } from 'react';
import cn from 'classnames'
import GlobalSvgSelector from '../assets/icons/GlobalSvgSelector';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cart/action';


const Header:FC = () => {
	const [isShowCart, setIsShowCart] = React.useState(false)
	const cart = useTypedSelector(state=> state.cart)
	const total = cart.reduce((acc,item) => acc + item.price, 0)
	const dispatch = useDispatch()

	const removeHandler = (id:string) => {
		dispatch(removeFromCart(id))
	}
	

	return (
		<div className='flex items-center justify-between relative w-full py-1 px-3'
			 style={{
				background: 
			 	'linear-gradient(90deg, rgba(255,0,104,1) 0%, rgba(255,226,0,1) 100%)'}}>
			
			<GlobalSvgSelector id='logo'/>
			
			<button className='bg-transparent border-none relative' onClick={() => setIsShowCart(!isShowCart)}>
				<GlobalSvgSelector id='cart'/>
				<div className='text-red-500 absolute -bottom-3 -right-2 font-bold p-1 
								w-4 h-4 rounded-full bg-white flex items-center content-center'>
					{cart.length}
				</div>
			</button>

			<div className={cn('absolute right-0 shadow-md p-5 rounded-md', {
				hidden: !isShowCart
			})}
				style={{
					top: 180,
				}}
				>
				{cart.map(item => (
					<div className='flex items-center' key={item.name}>
						<img src={item.imagePath} alt={item.name} width='55' height='55' className='mr-3'/>
						<div className=''>
							<div>{item.name}</div>
							<div>{`${item.count} x ${item.price}`}</div>
							<button className='text-red-600 bg-transparent border-0'
									onClick={()=>removeHandler(item._id)}>
								Удалить
							</button>
						</div>
					</div>
				))}
				
				<div className='text-lg border-solid border-t-2 mt-2 pt-1 border-red-500'>
					Total: <b>${total}</b> 
				</div>
			</div>
		</div>
	);
};

export default Header;