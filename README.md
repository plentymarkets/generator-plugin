# Plenty plugin generator

A plugin generator for plentymarkets plugins.

## Getting started

- Install Yeoman: `npm install -g yo`
- Install generator: Pull the generator-plenty repo and `npm link` it to make it global.
- Run: `yo plenty:plugin`


## Commands

* `yo plenty:plugin` generates new basic plugin files. The folder structure will look like this:

```
[Plugin]/
    ├── meta/
    │   ├── documents/
    │   │  └── files for user guides, change logs and support contact data in German and English   
    │   └── images/
    │      └── placeholders for author icons, plugin icons and preview image
    │
    ├── resources/
    │   └── views/
    │       └── Index.twig
    │
    ├── src/
    │   ├── Providers/
    │   │      │── [Plugin]ServiceProvider.php
    │   │      └── [Plugin]RouteServiceProvider.php
    │   └── Controllers/
    │          └── [Plugin]Controller.php
    │
    │── config.json // empty file
    └── plugin.json // plugin information
```

* `yo plenty:plugin-theme` generates new theme plugin files. The folder structure will look like this:

```
[Theme]/
    ├── meta/
    │   ├── documents/
    │   │  └── files for user guides, change logs and support contact data in German and English   
    │   └── images/
    │      └── placeholders for author icons, plugin icons and preview image
    │
    ├── resources/
    │   ├── css/
    │   │   └── main.css    
    │   └── views/
    │       └── Theme.twig
    │
    ├── src/
    │   ├── Providers/
    │   │      └── [Theme]ServiceProvider.php
    │   └── Containers/
    │          └── [Theme]Container.php
    │
    │── config.json // empty file
    └── plugin.json // plugin information
```
