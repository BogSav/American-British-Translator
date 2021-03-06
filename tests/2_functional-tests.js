const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  test('Translation with text and locale fields', done => {
    chai.request(server)
      .post('/api/translate')
      .send({
        text : "Tea time is usually around 4 or 4.30.",
        locale : "british-to-american"
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isDefined(res.body);
        assert.isObject(res.body);
        assert.property(res.body, 'text');
        assert.property(res.body, 'translation');
        done();
      });
  });

  test('Translation with text and invalid locale field', done => {
    chai.request(server)
      .post('/api/translate')
      .send({
        text : "Tea time is usually around 4 or 4.30.",
        locale : "merge"
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isDefined(res.body);
        assert.isObject(res.body);
        assert.deepEqual(res.body, { error: 'Invalid value for locale field' });
        done();
      });
  });

  test('Translation with missing text field', done => {
    chai.request(server)
      .post('/api/translate')
      .send({
        locale : "british-to-american"
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isDefined(res.body);
        assert.isObject(res.body);
        assert.deepEqual(res.body, { error: 'Required field(s) missing' });
        done();
      });
  });

  test('Translation with missing locale field', done => {
    chai.request(server)
      .post('/api/translate')
      .send({
        text : "Tea time is usually around 4 or 4.30."
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isDefined(res.body);
        assert.isObject(res.body);
        assert.deepEqual(res.body, { error: 'Required field(s) missing' });
        done();
      });
  });

  test('Translation with empty text', done => {
    chai.request(server)
      .post('/api/translate')
      .send({
        text : "",
        locale : "british-to-american"
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isDefined(res.body);
        assert.isObject(res.body);
        assert.deepEqual(res.body, { error: 'No text to translate' });
        done();
      });
  });

  test('Translation with text that needs no translation', done => {
    chai.request(server)
      .post('/api/translate')
      .send({
        text : "Tea time is usually around 4 or 4.30.",
        locale : "american-to-british"
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isDefined(res.body);
        assert.isObject(res.body);
        assert.property(res.body, 'text');
        assert.property(res.body, 'translation');
        assert.strictEqual(res.body.translation, "Everything looks good to me!");
        done();
      });
  });
});
