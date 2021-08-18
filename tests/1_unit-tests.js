const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator;

suite('Unit Tests', () => {

  suite('American to British English tests', () => {

    let type = "american-to-british";

    test('1', done => {
      assert.strictEqual(
        translator.translate('Mangoes are my favorite fruit.', type),
        'Mangoes are my '+ translator.wrapper('favourite') + ' fruit.');
      done();
    });

    test('2', done => {
      assert.strictEqual(
        translator.translate('I ate yogurt for breakfast.', type),
        'I ate ' + translator.wrapper('yoghurt') + ' for breakfast.');
      done();
    });

    test('3', done => {
      assert.strictEqual(
        translator.translate('We had a party at my friend\'s condo.', type),
        'We had a party at my friend\'s ' + translator.wrapper('flat') + '.');
      done();
    });

    test('4', done => {
      assert.strictEqual(
        translator.translate('Can you toss this in the trashcan for me?', type),
        'Can you toss this in the ' + translator.wrapper('bin') + ' for me?');
      done();
    });

    test('5', done => {
      assert.strictEqual(
        translator.translate('The parking lot was full.', type),
        'The ' + translator.wrapper('car park') + ' was full.');
      done();
    });

    test('6', done => {
      assert.strictEqual(
        translator.translate('Like a high tech Rube Goldberg machine.', type),
        'Like a high tech ' + translator.wrapper('Heath Robinson device') + '.');
      done();
    });

    test('7', done => {
      assert.strictEqual(
        translator.translate('To play hooky means to skip class or work.', type),
        'To ' + translator.wrapper('bunk off') + ' means to skip class or work.');
      done();
    });

    test('8', done => {
      assert.strictEqual(
        translator.translate('No Mr. Bond, I expect you to die.', type),
        'No ' + translator.wrapper('Mr') + ' Bond, I expect you to die.');
      done();
    });

    test('9', done => {
      assert.strictEqual(
        translator.translate('Dr. Grosh will see you now.', type),
        translator.wrapper('Dr') + ' Grosh will see you now.');
      done();
    });

    test('10', done => {
      assert.strictEqual(
        translator.translate('Lunch is at 12:15 today.', type),
        'Lunch is at ' + translator.wrapper('12.15') + ' today.');
      done();
    });
  });

  suite('British to American English tests', () => {

    let type = "british-to-american";

    test('1', done => {
      assert.strictEqual(
        translator.translate('We watched the footie match for a while.', type),
        'We watched the '+ translator.wrapper('soccer') + ' match for a while.');
      done();
    });

    test('2', done => {
      assert.strictEqual(
        translator.translate('paracetamol takes up to an hour to work.', type),
        translator.wrapper('Tylenol') + ' takes up to an hour to work.');
      done();
    });

    test('3', done => {
      assert.strictEqual(
        translator.translate('First, caramelise the onions.', type),
        'First, ' + translator.wrapper('caramelize') + ' the onions.');
      done();
    });

    test('4', done => {
      assert.strictEqual(
        translator.translate('I spent the bank holiday at the funfair.', type),
        'I spent the ' + translator.wrapper('public holiday') + ' at the ' + translator.wrapper('carnival') + ".");
      done();
    });

    test('5', done => {
      assert.strictEqual(
        translator.translate('I had a bicky then went to the chippy.', type),
        'I had a ' + translator.wrapper('cookie') + ' then went to the ' + translator.wrapper('fish-and-chip shop') + ".");
      done();
    });

    test('6', done => {
      assert.strictEqual(
        translator.translate('I\'ve just got bits and bobs in my bum bag.', type),
        'I\'ve just got ' + translator.wrapper('odds and ends') + ' in my ' + translator.wrapper('fanny pack') + ".");
      done();
    });

    test('7', done => {
      assert.strictEqual(
        translator.translate('The car boot sale at Boxted Airfield was called off.', type),
        'The ' + translator.wrapper('swap meet') + ' at Boxted Airfield was called off.');
      done();
    });

    test('8', done => {
      assert.strictEqual(
        translator.translate('Have you met Mrs Kalyani?', type),
        'Have you met ' + translator.wrapper('Mrs.') + ' Kalyani?')
      done();
    });

    test('9', done => {
      assert.strictEqual(
        translator.translate('Prof Joyner of King\'s College, London.', type),
        translator.wrapper('Prof.') + ' Joyner of King\'s College, London.');
      done();
    });

    test('10', done => {
      assert.strictEqual(
        translator.translate('Tea time is usually around 4 or 4.30.', type),
        'Tea time is usually around 4 or ' + translator.wrapper('4:30') + ".");
      done();
    });
  });

  suite('Highlight translation', () => {
    test('1', done => {
      assert.strictEqual(
        translator.translate('Mangoes are my favorite fruit.', "american-to-british"),
        'Mangoes are my '+ translator.wrapper('favourite') + ' fruit.');
      done();
    });

    test('2', done => {
      assert.strictEqual(
        translator.translate('I ate yogurt for breakfast.', "american-to-british"),
        'I ate ' + translator.wrapper('yoghurt') + ' for breakfast.');
      done();
    });

    test('1', done => {
      assert.strictEqual(
        translator.translate('We watched the footie match for a while.', "british-to-american"),
        'We watched the '+ translator.wrapper('soccer') + ' match for a while.');
      done();
    });

    test('2', done => {
      assert.strictEqual(
        translator.translate('paracetamol takes up to an hour to work.', "british-to-american"),
        translator.wrapper('Tylenol') + ' takes up to an hour to work.');
      done();
    });
  });
});
