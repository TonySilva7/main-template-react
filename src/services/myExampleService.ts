import { Api } from './api';

class ProductService extends Api {
	/**
	 * @author Tony Silva
	 * @Params url
	 * @return Objects Products
	 */
	async fetchMyData(url: string) {
		const config = this.myHeader();
		const response = await this.api.get(`${url}`, {
			...config,
		});

		return response;
	}

	/**
	 * @author Tony Silva
	 * @Params url, params
	 * @return 201 created
	 */
	async productRegister(url: string, params: any) {
		const config = this.myHeader();
		const response = await this.api.post(`${url}`, params, {
			...config,
		});

		return response;
	}
}

export const productService = new ProductService();

// export default new ProductService();
