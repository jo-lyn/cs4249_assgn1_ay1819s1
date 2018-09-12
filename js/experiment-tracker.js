// Class used to track experiment
class ExperimentTracker {
  constructor() {
    this.partId = (new URL(document.location)).searchParams.get("part_id");
    this.trials = [];
    this.attempt = 0;
    this.trial = null;
    this.attempt = null;
    this.menuType = null;
    this.menuDepth = null;
    this.inputStyle = null;
    this.targetItem = null;
    this.selectedItem = null;
    this.startTime = null;
    this.endTime = null;
    this.timeTake = null;
    this.numPopUps = null;
  }

  resetTimers() {
    this.startTime = null;
    this.endTime = null;
  }

  startTimer() {
    this.startTime = Date.now();
  }

  recordSelectedItem(selectedItem, numPopUps) {
    this.numPopUps = numPopUps;
    this.selectedItem = selectedItem;
    this.stopTimer();
  }

  stopTimer() {
    this.endTime = Date.now();
    this.timeTaken = (this.endTime - this.startTime) / 1000;
    this.trials.push([
      this.partId,
      this.trial,
      this.attempt,
      this.menuType,
      this.menuDepth,
      this.inputStyle,
      this.targetItem,
      this.selectedItem,
      this.startTime,
      this.endTime,
      this.timeTaken,
      this.numPopUps
    ]);
    this.resetTimers();
    this.attempt++;
  }

  addClick() {
    this.numPopUps++;
  }

  newTrial() {
    this.attempt = 1;
    this.numPopUps = 0;
  }

  toCsv() {
    var csvFile =
      'Participant ID,Trial,Attempt,Menu Type,Menu Depth,Input Style,Target Item,Selected Item,Start Time(ms), End Time(ms), Time Taken(s), Popups\n';
    for (var i = 0; i < this.trials.length; i++) {
      csvFile += this.trials[i].join(',');
      csvFile += '\n';
    }

    var hiddenLink = document.createElement('a');
    hiddenLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvFile);
    hiddenLink.target = '_blank';
    hiddenLink.download = 'experiment.csv';
    document.body.appendChild(hiddenLink);
    hiddenLink.click();
  }
}
