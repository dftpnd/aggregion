export function CatalogService($resource) {
	'ngInject';
	return $resource(
		'https://ds.aggregion.com/api/public/catalog/:id',
		{},
		{
			ListCatalog: {method: 'GET', isArray: true},
			GetCatalog: {method: 'GET', params: {id: 0, bundleId: 0}},
			GetBundles: {
				method: 'GET',
				isArray: true,
				url: 'https://ds.aggregion.com/api/public/catalog/:id/bundles',
				params: {id: 0}
			}
		});
}
