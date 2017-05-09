<?php

namespace <%= name %>\Providers;

use Plenty\Plugin\RouteServiceProvider;
use Plenty\Plugin\Routing\Router;

/**
 * Class <%= name %>RouteServiceProvider
 * @package <%= name %>\Providers
 */
class <%= name %>RouteServiceProvider extends RouteServiceProvider
{
    /**
     * @param Router $router
     */
    public function map(Router $router)
    {
        $router->get('hello-world','<%= name %>\Controllers\<%= name %>Controller@getHelloWorldPage');
    }
}