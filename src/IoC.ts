import { IoCContainer } from "./IoCContainer";

export const IoC = {
  Container: new IoCContainer(),
  Dependency: function (dependences: any) {
    return function (target) {
      for(var p in dependences)
        if (dependences.hasOwnProperty(p))
        {
          //if (!target.prototype.hasOwnProperty(p))
          //  throw `IoC: trying to inject nonexistent property "${p}" to ${target.name}.`;
  
          target.prototype[p] = IoC.Container.resolve(dependences[p]);
        }
    }
  }
}
