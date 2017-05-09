var Generator = require('yeoman-generator')

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  
  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your plugin name',
      default : this.appname // Default to current folder name
    },
    {
      type    : 'input',
      name    : 'type',
      message : 'The plugin type',
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
      this.destinationPath('public/plugin.json'),
      { name: answers.name,  type: answers.type}
    );

    this.fs.copyTpl(
      this.templatePath('src/Providers/ServiceProvider.php'),
      this.destinationPath('public/src/Providers/' + answers.name + 'ServiceProvider.php'),
      { name: answers.name}
    );

    this.fs.copyTpl(
      this.templatePath('src/Providers/RouteServiceProvider.php'),
      this.destinationPath('public/src/Providers/' + answers.name + 'RouteServiceProvider.php'),
      { name: answers.name}
    );

    this.fs.copyTpl(
      this.templatePath('resources/views/Index.twig'),
      this.destinationPath('public/resources/views/Index.twig'),
      { name: answers.name}
    );

    this.fs.copyTpl(
      this.templatePath('meta'),
      this.destinationPath('public/meta'),
      { name: answers.name}
    );
  }
}