import { IoCContainer } from "./IOCContainer";

class Test {
}

class Test1 {
  constructor(
    test: Test
  ){}
}

describe('IOCContainer', () => {

  let ioc: IoCContainer;

  beforeEach(() => {
    ioc = new IoCContainer();
  });

  it('should resolve without dependencies', () => {

    let resolve = (c: IoCContainer) => {
      return new Test();
    }

    ioc.register(Test, resolve);

    let resolved = ioc.resolve(Test);
    let expected = resolve(ioc);

    expect(resolved).toEqual(expected);
  });


  it('should resolve with dependencies', () => {

    let resolve = (c: IoCContainer) => {
      return new Test1(c.resolve(Test));
    }

    ioc.register(Test, () => new Test());
    ioc.register(Test1, resolve);

    let resolved = ioc.resolve(Test1);

    let expected = resolve(ioc);

    expect(resolved).toEqual(expected);
  });
});
