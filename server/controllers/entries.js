const Entry = require('../../db/models/entries.js');

exports.getAll = (req, res) => {
  Entry.find({})
  .then(result => {
    res.status(200).send(result);
  })
  .catch((err) => {
    console.log('error retrieving entry data');
    res.status(500).send(err);
  })
};

exports.add = (req, res) => {
  // TODO check if duplicate
  let entryData = req.body;
  Entry.create(entryData)
  .then(entryData => {
    res.status(201).send('New entry successfully added');
    console.log('entry saved');
  })
  .catch(err => {
    res.status(500).send(err);
  })
};

exports.update = (req, res) => {
  let entryData = req.body;
  let updateData = {
    entry: entryData.entry,
    keywords: entryData.keywords,
  }
  Entry.findOneAndUpdate({ entry: entryData.entry }, updateData)
  .then(result => {
    res.status(200).send('Entry successfully updated');
  })
  .catch(err => {
    res.status(500).send(err);
  })
}
