export class CatalogItemController {
	constructor(getCatalog, getBundles, $q, $log) {
		'ngInject';
		this.bundles = [];
		this.loading = true;

		const addCatalog = (data)=> {
			this.info = data;
		};

		const addBundles = (data)=> {
			this.bundles = data[0];
		};

		$q.all([
				getCatalog.$promise.then(addCatalog),
				getBundles.$promise.then(addBundles)
			])
			.catch(()=> {
				$log.info('Something went wrong..')
			})
			.finally(()=> {
				this.loading = false;
			})
	}

	getCover() {
		return `http://loremflickr.com/500/300`;
		/**
		 * Правообладатель их стёр - используем заглушки.
		 */
		//  	return `https://storage.aggregion.com/api/files/${item.cover}/shared/data`;
	}

	urlBuilder(id){
		return `https://storage.aggregion.com/api/files/${this.bundles[id]}/shared/data`;
	}
}


