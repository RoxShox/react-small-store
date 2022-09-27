import React from 'react';

interface Props {
	id: string;
  }

const GlobalSvgSelector = ({id}: Props) => {
	switch(id){
		case 'logo':
			return (
				<svg width="512" height="152" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="m504.511 21.49 7.427-19.237-.322-1.192-73.483 19.36C445.968 9.089 443.277 0 443.277 0s-23.466 14.986-41.212 14.593c-17.746-.392-23.466-5.128-50.677 3.553-27.211 8.673-34.9 35.3-42.789 41.02-7.888 5.72-32.639 24.35-32.639 24.35l.054.33 22.313-7.104s-6.12 5.767-19.122 23.29c0 0-.223-.208-.607-.561l.023.123s10.449 15.97 20.706 13.017c1.03-.3 2.19-.792 3.46-1.438 4.129 2.299 9.518 4.56 15.47 5.182 0 0-4.03-4.682-7.39-10.01.908-.585 1.838-1.192 2.784-1.808l-.438.308 8.496 3.122-.938-7.989c.03-.015.054-.038.084-.054l8.35 3.068-1.038-7.266a70.855 70.855 0 0 1 3.168-1.56l8.704-32.924 35.992-24.55-2.86 7.196c-7.297 17.946-20.999 22.182-20.999 22.182l-5.72 2.168c-4.252 5.029-6.044 6.267-7.505 23.144 3.43-.861 6.705-1.069 9.673-.27 15.377 4.145 20.706 22.675 16.562 27.804-1.038 1.284-3.507 3.475-6.62 6.05h-6.244l-.084 5.06c-.216.17-.431.33-.639.5h-6.35l-.077 4.936c-.562.43-1.123.846-1.661 1.253-5.967.123-13.525-5.082-13.525-5.082 0 4.736 3.944 12.025 3.944 12.025s.262-.123.7-.338c-.384.285-.6.438-.6.438s15.97 10.65 26.027 6.705c8.942-3.506 32.093-21.76 52.077-30.402l60.472-15.931 7.974-20.66-46.087 12.14V77.059l54.075-14.248 7.974-20.66-62.034 16.347V39.936l70.007-18.446ZM210.928 21.475c3.79 0 6.635.592 8.412 1.184l-3.314 11.372c-1.423-.477-2.722-.708-4.621-.708-5.329 0-8.412 5.567-9.358 10.657l-.476 2.484 10.912-.001-.002-.015h15.516v.016l.354 27.841c.115 5.451.238 9.48.115 13.74h.239c1.184-4.736 2.368-8.65 4.382-14.809l8.766-26.772h14.924L237.83 92.066c-5.69 13.271-12.202 24.405-19.306 30.917-3.437 3.199-7.459 5.69-9.95 6.75l-5.92-12.086c2.606-1.307 5.328-2.845 7.696-4.736 3.322-2.73 6.513-6.044 7.935-9.242.239-.83.47-1.423.354-2.607l-4.982-44.173h-13.863l-9.12 47.502h-14.808l9.119-47.501 2.022-10.426.469-2.368c1.307-6.867 3.914-12.795 8.765-17.293 3.553-3.314 8.766-5.328 14.686-5.328Zm-144.95 24.05c5.805 0 11.61.946 15.162 2.369l-6.39 32.208c-1.422 6.751-2.49 18.008-2.367 24.282l-12.795-.001.043-1.022c.124-2.76.324-5.632.427-8.68h-.354c-4.621 7.704-10.188 10.664-14.809 10.664-8.411 0-12.556-7.228-12.556-17.415 0-17.531 8.766-42.404 33.639-42.404Zm82.332-14.7-2.96 15.639h32.462L166.68 104.39H151.87l9.129-47.502h-17.664l-5.097 26.889c-.354 2.014-.477 3.79-.477 4.859 0 3.552 1.776 4.86 4.506 4.86 1.068 0 2.606 0 4.029-.239l-1.777 11.133c-2.721.715-6.043.946-8.888.946-8.88 0-13.27-4.975-13.27-12.794 0-2.607.476-5.805 1.068-8.65l5.098-27.01h-6.751l2.014-10.427h6.751l2.368-11.964 15.401-3.667Zm-40.858 14.693c5.097 0 8.765.946 10.895 2.13l-3.199 10.78c-1.66-.946-4.383-1.777-6.866-1.777-4.736 0-7.697 2.484-7.697 6.398 0 2.96 1.661 4.736 4.383 6.989 6.513 4.974 8.65 10.656 8.65 15.162 0 12.794-8.888 19.899-22.152 19.899-5.328 0-10.072-1.538-12.086-2.96l3.544-10.426c2.368 1.307 5.213 2.483 9.357 2.368 4.268-.116 6.636-2.845 6.636-6.513 0-3.198-1.538-5.451-5.567-8.65-4.974-4.029-7.343-9.119-7.343-14.093 0-10.665 8.289-19.307 21.445-19.307Zm-72.39-24.043c3.79 0 6.635.592 8.41 1.184L40.16 34.031c-1.423-.477-2.722-.708-4.621-.708-5.329 0-8.412 5.567-9.357 10.657l-.477 2.484H36.96L34.946 56.89H23.928l-9.12 47.501H0L9.119 56.89l2.022-10.426.47-2.368c1.306-6.867 3.913-12.795 8.764-17.293 3.553-3.314 8.766-5.328 14.686-5.328Zm26.78 35.061c-9.712 0-14.925 19.307-15.048 27.841 0 5.098.715 8.766 4.383 8.766 4.029 0 7.82-6.636 9.95-17.177l3.79-19.076c-1.184-.239-2.253-.354-3.076-.354Zm112.172-34c4.86 0 7.112 3.668 6.989 7.697-.115 5.92-4.144 9.242-8.527 9.242-4.736 0-6.866-3.437-6.75-7.82 0-4.26 3.075-9.119 8.288-9.119Z"/></svg>
		)
		case 'cart':
			return(
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"/><circle cx="10.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></svg>
		)

		default:
			return null
			
	}
};

export default GlobalSvgSelector;