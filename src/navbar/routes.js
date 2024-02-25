import NewPurchaseRequestForm from '../purchase_req/new_purreq';

import PurchaseRequest from '../purchase_req/purchase_request';


const routes = [

    { path: '/', component: <NewPurchaseRequestForm />, exact: true },
    
    { path: '/purchase_request', component: <PurchaseRequest /> },
  ];
  
  export default routes;