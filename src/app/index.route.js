export function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$urlRouterProvider.otherwise(function ($injector, $location) {
		var state = $injector.get('$state');
		state.go('404');
		return $location.path();
	});

	$stateProvider
		.state('catalog', {
			url: '/public/catalog',
			templateUrl: 'app/components/catalog/catalog.html',
			controller: 'CatalogController',
			controllerAs: 'catalog',
			resolve: {
				listCatalog: (Catalog)=> {
					return Catalog.ListCatalog();
				}
			}
		})
		.state('catalogItem', {
			url: '/public/catalog/:id',
			templateUrl: 'app/components/catalog-item/catalog-item.html',
			controller: 'CatalogItemController',
			controllerAs: 'catalogItem',
			resolve: {
				getCatalog: ($stateParams, Catalog)=> {
					return Catalog.GetCatalog({id: $stateParams.id});
				},
				getBundles: ($stateParams, Catalog)=> {
					return Catalog.GetBundles({id: $stateParams.id});
				}
			}
		})

		.state('404', {
			templateUrl: 'app/components/errors/404.html'
		})

}
