<?php

namespace <%= name %>\Controllers;

use Plenty\Plugin\Controller;
use Plenty\Plugin\Templates\Twig;

class <%= name %>Controller extends Controller
{
    /**
     * @param Twig $twig
     * @return string
     */
    public function getHelloWorldPage(Twig $twig):string
    {
        return $twig->render('<%= name %>::Index');
    }
}