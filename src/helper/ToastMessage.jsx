import toast from "react-hot-toast";


export function showMagazinToast(message) {
	toast(message,
		{
			icon: '',
			position: "bottom-center",
			style: {
				borderRadius: '10px',
				background: '#333',
				color: '#fff',
			},
		}
	);
}
export function showErrorToast(message) {
	toast.error(message, {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		// theme: "light",
		theme: "colored",
	});
}

export function showSuccessToast(message) {
	toast.success(message, {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		// theme: "light",
		theme: "colored",
	});
}
