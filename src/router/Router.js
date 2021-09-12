// import { Switch, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';

import Login from '../views/login/Login';
import Dashboard from '../views/Dashboard';
import MonthlyDeliveryPlan from '../views/mdp/MonthlyDeliveryPlan';
import Page404 from '../views/errors/Page404';

function Router() {

  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}

        {/* Pubic Routes */}
        {/* <PublicRoute path="/login" component={Login} props="none" name="Compop" id="123" /> */}
        {/* here we send component and other objects to PublicRoute and then it catch component as component and other object as rest */}
        {/* <PublicRoute path="/login" component={Login} /> */}
        <PublicRoute exact path="/" component={Login} />
        {/* <PublicRoute path="/other" component={Other} />
        <PublicRoute path="/vuejs/question-part-1" component={Question_Part_1} />

        <PublicRoute path="/data-pass" component={OtherMain} /> */}

        {/* Private Route */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}

        <PrivateRoute path="/features/users/dashboard" component={Dashboard} />
        <PrivateRoute path="/features/local_sales/delivery_plan" component={MonthlyDeliveryPlan} />
        {/* <PrivateRoute path="/features/local_sales/dispatch-entry" component={} />
        <PrivateRoute path="/features/local_sales/ds-transfer-packing-preparation" component={} />
        <PrivateRoute path="/features/local_sales/sales_order" component={} />
        <PrivateRoute path="/features/local_sales/order_approval" component={} />
        <PrivateRoute path="/features/goods_movement/add-stock" component={} />
        <PrivateRoute path="/features/marketing_and_crm/customer-pending-list" component={} />
        <PrivateRoute path="/features/stakeholders/retailer" component={} />
        <PrivateRoute path="/features/marketing_and_crm/customer-credit" component={} />
        <PrivateRoute path="/features/local_sales/deliveries" component={} />
        <PrivateRoute path="/features/local_sales/customer-payment" component={} />
        <PrivateRoute path="/features/local_sales/dp-ds" component={} />
        <PrivateRoute path="/features/local_sales/delivery-preparation" component={} />
        <PrivateRoute path="/features/local_sales/collection" component={} />
        <PrivateRoute path="/features/configuration/employee" component={} />
        <PrivateRoute path="/features/local_sales/balance-sheet" component={} />
        <PrivateRoute path="/features/reports/stock-report" component={} />
        <PrivateRoute path="/features/local_sales/delivery_grn" component={} />
        <PrivateRoute path="/features/inventory/grn" component={} />
        <PrivateRoute path="/features/inventory/requisition" component={} />
        <PrivateRoute path="/features/local_sales/create-requisition" component={} />
        <PrivateRoute path="/features/goods_movement/approve-requisition" component={} />
        <PrivateRoute path="/features/goods_movement/verified-requisition" component={} />
        <PrivateRoute path="/features/goods_movement/verified-requisition-update" component={} />
        <PrivateRoute path="/features/inventory/transfer" component={} />
        <PrivateRoute path="/features/inventory/products" component={} />
        <PrivateRoute path="/features/inventory/all-products" component={} />
        <PrivateRoute path="/features/inventory/product-price-approval" component={} />
        <PrivateRoute path="/features/local_sales/special-req-approval-2" component={} />
        <PrivateRoute path="/features/local_sales/third-party-tender" component={} />
        <PrivateRoute path="/features/configuration/sales_area" component={} />
        <PrivateRoute path="/features/sales_promotion/slab-discount" component={} />
        <PrivateRoute path="/features/accounts/cash-register" component={} />
        <PrivateRoute path="/features/accounts/eftn-register" component={} />
        <PrivateRoute path="/features/accounts/challan-register" component={} />
        <PrivateRoute path="/features/accounts/bank-register" component={} />
        <PrivateRoute path="/features/accounts/cheque-register" component={} />
        <PrivateRoute path="/features/accounts/expenditure-register" component={} /> */}

        <PrivateRoute path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default Router;