
{
    class BeeKeeper {
        hasMask: boolean = true;
    }

    const create = function <T>(Entity: {new(): T; }): T {
        return new Entity();
    }

    console.log(create(BeeKeeper).hasMask)
}