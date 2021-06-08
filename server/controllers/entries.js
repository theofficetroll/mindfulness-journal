const Entry = require('../../db/models/entries.js');

const endOfDay = require('date-fns/endOfDay');
const startOfDay = require('date-fns/startOfDay');

// TODO
// getMigration:
//   Pull from all previous dates
//   Only pull open items (events, tasks)

exports.getDaily = (req, res) => {
  Entry.find({
    date: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date())
    }
  })
  .then(result => {
    res.status(200).send(result);
  })
  .catch(err => {
    console.log('error retrieving entry data');
    res.status(500).send(err);
  })
}

exports.getMigration = (req, res) => {
  Entry.find({
    date: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date())
    }
  })
  .then(result => {
    res.status(200).send(result);
  })
  .catch(err => {
    console.log('error retrieving entry data');
    res.status(500).send(err);
  })
}

exports.getAll = (req, res) => {
  Entry.find({})
  .then(result => {
    res.status(200).send(result);
  })
  .catch(err => {
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
