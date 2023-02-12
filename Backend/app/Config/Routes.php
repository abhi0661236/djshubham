<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (is_file(SYSTEMPATH . 'Config/Routes.php')) {
    require SYSTEMPATH . 'Config/Routes.php';
}

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// // Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
// $routes->setAutoRoute(true);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
//website routes 
$routes->get('/', 'dataController::index');
$routes->match(['get','post'],'loginck', 'dataController::loginck');
$routes->get('logout', 'dataController::logout');
$routes->get('search', 'dataController::search');





// API Routes
$routes->post('userverify', 'apiController::mobileVerify');



$routes->post('userRegister', 'apiController::userRegister');
$routes->post('userVerify', 'apiController::userVerify');
$routes->post('userPlan', 'apiController::userPlan');

$routes->post('userPlanVerify', 'apiController::userPlanVerify');
$routes->post('user-delete', 'apiController::userDelete');


//admin dashboard
$routes->get('/dashboard', 'adminController::login');

    $routes->group('dashboard',function($routes){
        $routes->match(['get','post'],'logincheck', 'user/adminController::logincheck');
        $routes->get('/', 'adminController::index');
        $routes->match(['get','post'],'user-list', 'adminController::userList');
        $routes->match(['get','post'],'user-delete/(:any)', 'adminController::userDelete/$1');
        $routes->match(['get','post'],'user-delete-active/(:any)', 'adminController::activeuserDelete/$1');
        
        $routes->match(['get','post'],'plan-entry', 'adminController::planEntry');
        $routes->match(['get','post'],'plan-add', 'adminController::planAdd');
        $routes->match(['get','post'],'plan-edit/(:any)', 'adminController::planEdit/$1');
        $routes->match(['get','post'],'plan-list', 'adminController::planList');
        $routes->match(['get','post'],'active-list', 'adminController::activelist');

        $routes->match(['get','post'],'plan-delete/(:any)', 'adminController::planDelete/$1');

        $routes->match(['get','post'],'mobile-activate/', 'adminController::mobileActvateDeactivat');
        

        $routes->get('logout', 'adminController::logout');

        
        ///user route
        $routes->get('add-user', 'adminController::adduser');

        $routes->match(['get','post'],'add-user-entry', 'adminController::adduserdata');
        $routes->match(['get','post'],'login-user-list', 'adminController::loginuserlist');
        $routes->match(['get','post'],'user-delete/(:num)', 'adminController::userDelete/$1');
        $routes->match(['get','post'],'user-edit/(:num)/', 'adminController::userEdit/$1');
        $routes->match(['get','post'],'user-modify/(:num)/', 'adminController::userModify/$1');
        $routes->match(['get','post'],'user-activate/(:any)', 'adminController::userActvateDeactivat/$1/$2');
        $routes->match(['get','post'],'user-deactivate/(:any)/', 'adminController::userActvateDeactivat/$1/$2');

    });

/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
