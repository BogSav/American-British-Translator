'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body.text;
      let type = req.body.locale;

      if(text == null || type == null)
        return res.json({ error: 'Required field(s) missing' });
      
      if(text == "")
        return res.json({ error: 'No text to translate' });

      if(['british-to-american', 'american-to-british'].indexOf(type) == -1)
        return res.json({ error: 'Invalid value for locale field' });

      let translatedText = translator.translate(text, type);

      return res.json({text : text, translation : translatedText});
    });
};
