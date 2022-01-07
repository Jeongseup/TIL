const obj = {
  a: 1,
  e: function () {
    console.log('in function')
    return 'out  func'
  },
}
// console.log(obj.e());
// console.log('test', obj.e());

obj.b = 'test1'
console.log(obj)

const obj2 = obj
console.log(obj, obj2)

obj2.b = 'test2'

console.log(obj, obj2)

const obj3 = Object.assign({}, obj)
obj2.b = 'test3'
console.log(obj, obj2, obj3)

// spread
const sums = [4, 5]
console.log('spread', ...sums)
// console.log('spread', sum(2 + 32));

const as = [1, 2, 3]
const bs = [4, 5, 6]
console.log('spread is', as)

let cs = as.concat(bs)
console.log('spread is', cs)

cs = [...as, ...bs]
console.log('spread is', cs)

const ob1 = { a: 1, b: 2 }

// 쉬운 얕은 복사
const ob2 = { ...ob1 }

console.log(ob2)
ob2.a = 3

console.log(ob1, ob2)

// promise
const foo1 = () => {
  console.log('pr1')

  setTimeout(() => {
    console.log('pr2')
  }, 1000)

  console.log('pr3')
}

const pr = new Promise((resolve) => {
  setTimeout(() => {
    resolve('pr2')
  }, 1000)
})

const foo2 = () => {
  console.log('pr1')

  pr.then((res) => {
    console.log(res)
    console.log('pr3')
  })
}

const foo3 = () => {
  console.log('pr1')

  pr.then((res) => {
    console.log(res)
    return pr
  }).then((res) => {
    console.log(res)
    console.log('pr3')
  })
}

// foo3();

const pr2 = (value) => {
  return new Promise((resolve, reject) => {
    if (value < 5) {
      setTimeout(() => {
        resolve('pr2')
      }, 1000)
    } else {
      reject(new Error('5보다 큼'))
    }
  })
}

function foo4() {
  console.log('pr1')
  pr2(4)
    .then((r) => {
      console.log(r)
      return pr2(6)
    })
    .then((res) => {
      console.log(res)
      console.log('pr3')
    })
    .catch((err) => {
      console.error(err.message)
    })
}

foo4()
