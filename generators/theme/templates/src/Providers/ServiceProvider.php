<?php

namespace <%= name %>\Providers;

use Plenty\Plugin\ServiceProvider;
use Plenty\Log\Services\ReferenceContainer;
use Plenty\Plugin\Events\Dispatcher;

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

    public function boot(Twig $twig, ReferenceContainer $container, Dispatcher $dispatcher)
    {
       	// Override template
        $dispatcher->listen("IO.tpl.home", function (TemplateContainer $container) {
            $container->setTemplate(<%= name %>::Homepage.Homepage);
        }, self::PRIORITY);
    }
}