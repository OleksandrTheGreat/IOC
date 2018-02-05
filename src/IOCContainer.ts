export class IoCContainer {

  container = {};

  register < T > (type : Function, resolve : (container : IoCContainer) => T) : void {

    let name = type['name'];

    if (name === undefined) 
      throw 'IoCContainer: Unknown type registration attemption.';
    
    this.container[name] = resolve;
  }

  resolve < T > (type : Function) : T {

    let name = type['name'];

    if (!this.container.hasOwnProperty(name))
      throw `IoCContainer: "${name}" was not registered.`;

    return this.container[name](this);
  }
}
