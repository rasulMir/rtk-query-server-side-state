export interface IFormInputs {
	name: string,
  email: string,
	password: string,
	chbx: boolean,
};

export interface IUser {
	id: string,
	name: string,
  email: string,
	password: string,
	chbx: boolean,
};

export interface IProducts {
	id: number,
	title: string,
	description: string,
	price: number,
	discountPercentage: number,
	rating: number,
	stock: number,
	brand: string,
	category: string,
	thumbnail: string,
	images: string[]
};

export interface ICartItem extends IProducts {
	amount: number,
	isAdded: boolean,
}