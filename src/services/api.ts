import axios, { AxiosInstance } from 'axios';

interface IConfig {
  headers?: { [key: string]: string };
}

export class Api {
	api: AxiosInstance;

	constructor() {
		const api: AxiosInstance = axios.create({
			baseURL: `https://${process.env.REACT_APP_API_URL}/`,
		});

		this.api = api;
	}

	myHeader() {
		/**
		 * descomente para usar o token
		 */
		// const token = localStorage.getItem('@MyKey:token');
		const config: IConfig = {
			headers: {
				/**
				 * descomente para usar o token
				 */
				// Authorization: `Bearer ${token}`,
				Accept: 'application/json',
			},
		};

		return config;
	}
}
