// import { Switch, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';

import Login from '../views/login/Login';
import Dashboard from '../views/dashboard/Dashboard';

import MonthlyDeliveryPlan from '../views/sd/mdp/MonthlyDeliveryPlan';
import DispatchEntry from '../views/sd/dispatchEntry/DispatchEntry';
import TransferPackingPreparation from '../views/sd/ds_n_deliveries/transferPackingPreparation/TransferPackingPreparation';

import SalesOrder from '../views/sd/order/sales_order/SalesOrder'
import OrderApproval from '../views/sd/order/order_approval/OrderApproval'

import AddStock from '../views/sd/products/add_stock/AddStock'
import StockReport from '../views/sd/products/stock_report/StockReport'
import Products from '../views/sd/products/products/Products'
import ProductsList from '../views/sd/products/products_list/ProductsList'
import ProductPriceApproval from '../views/sd/products/product_price_approval/ProductPriceApproval'
import SpecialReqApproval from '../views/sd/products/special_req_approval/SpecialReqApproval'

import CustomerPendingList from '../views/sd/customers/customer_pending_list/CustomerPendingList'
import CustomerList from '../views/sd/customers/customer_list/CustomerList'
import CustomerCredit from '../views/sd/customers/customer_credit/CustomerCredit'

import Deliveries from '../views/sd/ds_n_deliveries/deliveries/deliveries/Deliveries'
import CustomerPayment from '../views/sd/ds_n_deliveries/deliveries/customer_payment/CustomerPayment'
import DeliverySchedule from '../views/sd/ds_n_deliveries/dp_ds/ds/DeliverySchedule'
import DeliveryPreparation from '../views/sd/ds_n_deliveries/dp_ds/dp/DeliveryPreparation'
import Collection from '../views/sd/ds_n_deliveries/deliveries/collection/Collection'
import Collection2 from '../views/sd/ds_n_deliveries/deliveries/collection/Collection2'
import DeliveryGRN from '../views/sd/ds_n_deliveries/deliveries/grn/GRN'
import GRN from '../views/sd/ds_n_deliveries/deliveries/grn/GRN'

import Employee from '../views/sd/employee/Employee'
import EmployeeProfile from '../views/sd/employee/EmployeeProfile'

import BalanceSheet from '../views/sd/balance_sheet/BalanceSheet'

import Requisition from '../views/sd/requisition/requisition/Requisition'
import CreateRequisition from '../views/sd/requisition/create_requisition/CreateRequisition'
import ApproveRequisition from '../views/sd/requisition/approve_requisition/ApproveRequisition'
import VerifiedRequisition from '../views/sd/requisition/verified_requisition/VerifiedRequisition'
import VerifiedRequisitionUpdate from '../views/sd/requisition/verified_requisition_update/VerifiedRequisitionUpdate'
import Transfer from '../views/sd/requisition/transfer/Transfer'

import ThirdPartyTender from '../views/sd/third_party_tender/ThirdPartyTender'

import SalesArea from '../views/sd/sales_area/SalesArea'

import SlabDiscount from '../views/sd/slab_discount/SlabDiscount'

import CashRegister from '../views/sd/register/cash_register/CashRegister'
import EftnRegister from '../views/sd/register/eftn_register/EftnRegister'
import ChallanRegister from '../views/sd/register/challan_register/ChallanRegister'
import BankRegister from '../views/sd/register/bank_register/BankRegister'
import ChequeRegister from '../views/sd/register/cheque_register/ChequeRegister'
import ExpenditureRegister from '../views/sd/register/expenditure_register/ExpenditureRegister'

import Page401 from '../views/errors/Page401';
import Page404 from '../views/errors/Page404';
import Page503 from '../views/errors/Page503';
import PageUnderConstruction from '../views/errors/PageUnderConstruction';
import PageUnderMaintenance from '../views/errors/PageUnderMaintenance';

import Reports from '../views/reports/Reports';

const Router = () => {

  return (
    <div className="App">
      <Switch>

        {/* DEFAULT */}
        <PublicRoute exact path="/" component={Login} />
        <PrivateRoute path="/features/users/dashboard" component={Dashboard} />

        {/* MDP */}
        <PrivateRoute path="/features/local_sales/delivery_plan" component={MonthlyDeliveryPlan} />

        {/* DISPATCH & PACKING PREPARATION */}
        <PrivateRoute path="/features/local_sales/dispatch-entry" component={DispatchEntry} />
        <PrivateRoute path="/features/local_sales/ds-transfer-packing-preparation" component={TransferPackingPreparation} />

        {/* ORDERS */}
        <PrivateRoute path="/features/local_sales/sales_order" component={SalesOrder} />
        <PrivateRoute path="/features/local_sales/order_approval" component={OrderApproval} />

        {/* PRODUCTS */}
        <PrivateRoute path="/features/goods_movement/add-stock" component={AddStock} />
        <PrivateRoute path="/features/reports/stock-report" component={StockReport} />
        <PrivateRoute path="/features/inventory/products" component={Products} />
        <PrivateRoute path="/features/inventory/all-products" component={ProductsList} />
        <PrivateRoute path="/features/inventory/product-price-approval" component={ProductPriceApproval} />
        <PrivateRoute path="/features/local_sales/special-req-approval" component={SpecialReqApproval} />

        {/* CUSTOMER */}
        <PrivateRoute path="/features/marketing_and_crm/customer-pending-list" component={CustomerPendingList} />
        <PrivateRoute path="/features/stakeholders/retailer" component={CustomerList} />
        <PrivateRoute path="/features/marketing_and_crm/customer-credit" component={CustomerCredit} />

        {/* DELIVERIES & DS */}
        <PrivateRoute path="/features/local_sales/deliveries" component={Deliveries} />
        <PrivateRoute path="/features/local_sales/customer-payment" component={CustomerPayment} />
        <PrivateRoute path="/features/local_sales/dp-ds" component={DeliverySchedule} />
        <PrivateRoute path="/features/local_sales/delivery-preparation" component={DeliveryPreparation} />
        <PrivateRoute path="/features/local_sales/collection" component={Collection} />
        <PrivateRoute path="/features/local_sales/collection2" component={Collection2} />
        <PrivateRoute path="/features/local_sales/delivery_grn" component={DeliveryGRN} />
        <PrivateRoute path="/features/inventory/grn" component={GRN} />

        {/* EMPLOYEE */}
        <PrivateRoute path="/features/configuration/employee" component={Employee} />
        <PrivateRoute path={'/features/configuration/employee:id'} component={EmployeeProfile} />

        {/* BAANCE SHEET */}
        <PrivateRoute path="/features/local_sales/balance-sheet" component={BalanceSheet} />

        {/* REQUISITION */}
        <PrivateRoute path="/features/inventory/requisition" component={Requisition} />
        <PrivateRoute path="/features/local_sales/create-requisition" component={CreateRequisition} />
        <PrivateRoute path="/features/goods_movement/approve-requisition" component={ApproveRequisition} />
        <PrivateRoute path="/features/goods_movement/verified-requisition" component={VerifiedRequisition} />
        <PrivateRoute path="/features/goods_movement/verified-requisition-update" component={VerifiedRequisitionUpdate} />
        <PrivateRoute path="/features/inventory/transfer" component={Transfer} />

        {/* TENDER, SALES AREA, SLAB DISCOUNT */}
        <PrivateRoute path="/features/local_sales/third-party-tender" component={ThirdPartyTender} />
        <PrivateRoute path="/features/configuration/sales_area" component={SalesArea} />
        <PrivateRoute path="/features/sales_promotion/slab-discount" component={SlabDiscount} />

        {/* REGISTERS */}
        <PrivateRoute path="/features/accounts/cash-register" component={CashRegister} />
        <PrivateRoute path="/features/accounts/eftn-register" component={EftnRegister} />
        <PrivateRoute path="/features/accounts/challan-register" component={ChallanRegister} />
        <PrivateRoute path="/features/accounts/bank-register" component={BankRegister} />
        <PrivateRoute path="/features/accounts/cheque-register" component={ChequeRegister} />
        <PrivateRoute path="/features/accounts/expenditure-register" component={ExpenditureRegister} />

        <PrivateRoute path="/features/reports/printing-reports" component={Reports} />

        {/* ERROR */}
        <PrivateRoute path="/unauthorized" component={Page401} />
        <PrivateRoute path="*" component={Page404} />
        <PrivateRoute path="/service-unavailable" component={Page503} />
        <PrivateRoute path="/under-construction" component={PageUnderConstruction} />
        <PrivateRoute path="/under-maintenance" component={PageUnderMaintenance} />

      </Switch>
    </div>
  );
}

export default Router;