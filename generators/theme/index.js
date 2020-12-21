const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts)
    {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts)

        // Next, add your custom code
        this.option('babel') // This method adds support for a `--babel` flag
    }

    prompting()
    {
        return this.prompt([
            {
                type   : 'input',
                name   : 'name',
                message: 'Enter the name of the plugin in UpperCamelCase',
                default: this.appname,
                validate: this._validatePluginName
            },
            {
                type   : 'input',
                name   : 'author',
                message: 'Enter your name'
            },
            {
                type   : 'list',
                name   : 'type',
                message: 'Select the type of the plugin',
                choices: [
                    'general',
                    'template',
                    'theme',
                    'export',
                    'payment',
                    'backend',
                    'shipping',
                    'widget',
                    'integration'
                ],
                default: 'theme'
            },
            {
                type   : 'input',
                name   : 'description',
                message: 'Your plugin description'
            },
            {
                type   : 'input',
                name   : 'version',
                message: 'Enter the plugin version in the format MAJOR.MINOR.PATCH',
                default: '0.0.1'
            }
            ]).then((answers) => {
                this.config.set("answers", answers)
    })
        ;
    }

    writing()
    {

        let answers = this.config.get("answers")

        this.fs.copyTpl(
            this.templatePath('plugin.json'),
            this.destinationPath('plugin.json'),
            {
                answers: answers
            }
        )

        this.fs.copyTpl(
            this.templatePath('config.json'),
            this.destinationPath('config.json')
        )

        this._copyPhpFiles(answers)
        this._copyMetaFiles(answers)
        this._copyTwigFiles(answers)
    }

    _copyPhpFiles(answers)
    {
        this.fs.copyTpl(
            this.templatePath('src/Providers/ServiceProvider.php'),
            this.destinationPath('src/Providers/' + answers.name + 'ServiceProvider.php'),
            {name: answers.name}
        )

        this.fs.copyTpl(
            this.templatePath('src/Containers/Container.php'),
            this.destinationPath('src/Containers/' + answers.name + 'Container.php'),
            {name: answers.name}
        )
    }

    _copyMetaFiles(answers)
    {
        this.fs.copyTpl(
            this.templatePath('meta'),
            this.destinationPath('meta'),
            {name: answers.name, version: answers.version}
        )
    }

    _copyTwigFiles(answers)
    {
        this.fs.copyTpl(
            this.templatePath('resources/views'),
            this.destinationPath('resources/views'),
            {name: answers.name}
        )
    }

    _validatePluginName(input)
    {
        const regex = /[A-Z][a-zA-Z0-9]+/;
            
        if(input.match(regex))
        {
            return true;
        }
        else
        {
            return "Invalid plugin name. Please use alphanumeric characters in UpperCamelCase only."
        }
    }
}