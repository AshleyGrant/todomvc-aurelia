'use strict';

var system = require('../../jspm_packages/system.js');
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('app.js', function(){
    var sut;

    beforeEach(function(done) {
      system.import('src/app').then(function(module) {
        sut = new module.App();
        done();
      });
    });

    describe('when creating a new instance', function() {

      it('it should simply work, dude', function() {
        expect(sut).to.not.be.null();
      });

    });
});
