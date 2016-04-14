/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { CatalogController } from '../app/components/catalog/catalog.controller';
import { CatalogService } from '../app/components/catalog/catalog.service';
import { CatalogItemController } from '../app/components/catalog-item/catalog-item.controller';

angular.module('aggregion', ['ngAnimate', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'toastr'])
	.constant('malarkey', malarkey)
	.constant('moment', moment)
	.config(config)
	.config(routerConfig)
	.run(runBlock)
	.service('Catalog', CatalogService)
	.controller('CatalogController', CatalogController)
	.controller('CatalogItemController', CatalogItemController);
