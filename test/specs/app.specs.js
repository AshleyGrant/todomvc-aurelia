'use strict';

var system = require('../../jspm_packages/system.js');
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('App', function(){
    var sut;

    beforeEach(function(done) {
      system.import('src/app').then(function(module) {
        sut = new module.App();
        done();
      });
    });

    describe('when creating a new instance', function() {

      it('should init empty list of todos', function() {
        sut.todos.should.be.empty();
      });

      it('should init new todo field with empty value', function() {
        expect(sut.newTodoTitle).to.be.null();
      });

    });

    describe('when adding a new todo', function() {

      it('should add it to the list of todos', function() {
        sut.addNewTodo("foo");
        sut.todos[0].title.should.equal("foo");
      });

      it('should add current newTodo value if nothing passed into function', function() {
        sut.newTodoTitle = "foo";
        sut.addNewTodo();
        sut.todos[0].title.should.equal("foo");
      });

      it('should reset new todo field back to empty', function() {
        sut.newTodoTitle = "foo";
        sut.addNewTodo("foo");
        expect(sut.newTodoTitle).to.be.null();
      });

    });
});
