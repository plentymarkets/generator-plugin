<?php

namespace <%= name %>\Containers;

use Plenty\Plugin\Templates\Twig;

class <%= name %>Container
{
    public function call(Twig $twig):string
    {
        return $twig->render('<%= name %>::Theme');
    }
}