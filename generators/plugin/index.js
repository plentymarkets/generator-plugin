var Generator = require('yeoman-generator')

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts)

    // Next, add your custom code
    this.option('babel') // This method adds support for a `--babel` flag
  }
  
  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your plugin name',
      default : this.appname // Default to current folder name
    },
    {
      type    : 'list',
      name    : 'type',
      message : 'The plugin type',
      choices : ['template', 'shipping', 'payment'],
      default : 'template',
      store   : true
    }]).then((answers) => {
      this.config.set("answers", answers)
    });
  }

  writing() {
    
    let answers = this.config.get("answers")

    this.fs.copyTpl(
      this.templatePath('plugin.json'),
      this.destinationPath('plugin.json'),
      { name: answers.name,  type: answers.type}
    )

    this.fs.copyTpl(
      this.templatePath('config.json'),
      this.destinationPath('config.json')
    )

    this._copyPhpFiles(answers)
    this._copyMetaFiles(answers)
    this._copyTwigFiles(answers)
  }

  _copyPhpFiles(answers) {
    this.fs.copyTpl(
      this.templatePath('src/Providers/ServiceProvider.php'),
      this.destinationPath('src/Providers/' + answers.name + 'ServiceProvider.php'),
      { name: answers.name}
    )

    this.fs.copyTpl(
      this.templatePath('src/Providers/RouteServiceProvider.php'),
      this.destinationPath('src/Providers/' + answers.name + 'RouteServiceProvider.php'),
      { name: answers.name}
    )

    this.fs.copyTpl(
      this.templatePath('src/Controllers/Controller.php'),
      this.destinationPath('src/Controllers/' + answers.name + 'Controller.php'),
      { name: answers.name}
    )
  }

  _copyMetaFiles(answers) {
    this.fs.copyTpl(
      this.templatePath('meta'),
      this.destinationPath('meta'),
      { name: answers.name}
    )
  }

  _copyTwigFiles(answers) {
    this.fs.copyTpl(
      this.templatePath('resources/views/Index.twig'),
      this.destinationPath('resources/views/Index.twig'),
      { name: answers.name}
    )
  }
}