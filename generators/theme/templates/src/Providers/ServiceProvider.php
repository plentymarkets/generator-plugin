<?php

namespace <%= name %>\Providers;

use Plenty\Plugin\ServiceProvider;
use Plenty\Plugin\Events\Dispatcher;
use IO\Helper\TemplateContainer;

/**
 * Class <%= name %>ServiceProvider
 * @package <%= name %>\Providers
 */
class <%= name %>ServiceProvider extends ServiceProvider
{
    const PRIORITY = 0;

    public function register()
    {
        
    }

    public function boot(Dispatcher $dispatcher)
    {
       	// Override template
        $dispatcher->listen('IO.tpl.home', function (TemplateContainer $container) {
            $container->setTemplate('<%= name %>::Homepage.Homepage');
            return false;
        }, self::PRIORITY);
    }
}