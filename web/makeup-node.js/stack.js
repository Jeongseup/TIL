let fn1 = () => {
    fn2();
};

let fn2 = () => {};

fn1();

console.log("stack");
