const obj = {
  a: 1,
  e: function () {
    console.log('in function');
    return 'out  func';
  },
};
console.log(obj.e());

console.log('test', obj.e());
