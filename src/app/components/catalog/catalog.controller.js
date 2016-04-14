export class CatalogController {
	constructor(listCatalog) {
		'ngInject';
		this.loading = true;

		listCatalog.$promise
			.then((data) => {
				this.list = data;
			})
			.finally(()=> {
				this.loading = false;
			})
	}

	getCover(item) {
		return `http://loremflickr.com/500/300?random=${item.id}`;
		/**
		 * Правообладатель их стёр - используем заглушки.
		 */
		//  	return `https://storage.aggregion.com/api/files/${item.cover}/shared/data`;
	}

	bookUrl(item) {
		return `/public/catalog/` + item.id;
	}
}


