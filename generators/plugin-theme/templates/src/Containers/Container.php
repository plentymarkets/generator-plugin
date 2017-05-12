<?php

namespace <%= name %>\Containers;

class <%= name %>Container
{
    public function call(Twig $twig):string
    {
        return $twig->render('<%= name %>::Theme');
    }
}