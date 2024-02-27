import CRUD from '../purchase_req/Crud';
import NewPurchaseRequestForm from '../purchase_req/new_purreq';

import PurchaseRequest from '../purchase_req/purchase_request';


const routes = [

    { path: '/home', component: <NewPurchaseRequestForm />, exact: true },
    { path: '/CRUD', component: <CRUD />, exact: true },
    { path: '/purchase_request', component: <PurchaseRequest /> },
  ];
  
  export default routes;