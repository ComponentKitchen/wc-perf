export default (base) => {

  class Mixin3 extends base {

    createdCallback() {
      if (super.createdCallback) { super.createdCallback(); }
    }

    Mixin3_Method_1(a, b) {
      return a + b;
    }

    Mixin3_Method_2(a, b) {
      return a + b;
    }

  }

  return Mixin3;
};
