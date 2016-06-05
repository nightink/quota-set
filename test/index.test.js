'use strict';

const quotaSetFn = require('../index');

describe('quota-set', function() {
  it('< num Array', () => {
    const quotaSet = quotaSetFn(4);
    quotaSet('ccc').should.be.is.Array(1);
  });

  it('> num Array', () => {
    const quotaSet = quotaSetFn(3, ['quota', 'set', 'array']);
    const arr = quotaSet('map');
    arr.should.be.is.Array(3);
    arr[2].should.eql('set');
  });
});
