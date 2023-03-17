//your JS code here. If required.
// Select the table element
const table = document.querySelector('table');

// Create an array of three Promises, each of which resolves after a random time between 1 and 3 seconds
const promises = [
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
];

// Add a row that spans 2 columns with the exact text Loading...
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.colSpan = 2;
loadingCell.innerText = 'Loading...';

// Use Promise.all to wait for all the Promises to resolve
Promise.all(promises)
  .then(results => {
    // Remove the loading text
    table.deleteRow(0);

    // Create a row for each Promise and its time taken to resolve
    results.forEach((time, index) => {
      const row = table.insertRow();
      const promiseCell = row.insertCell();
      const timeCell = row.insertCell();
      promiseCell.innerText = `Promise ${index + 1}`;
      timeCell.innerText = time.toFixed(3);
    });

    // Create a row for the total time taken to resolve all promises
    const totalTime = results.reduce((acc, time) => acc + time, 0);
    const totalRow = table.insertRow();
    const totalCell = totalRow.insertCell();
    const timeTakenCell = totalRow.insertCell();
    totalCell.innerText = 'Total';
    timeTakenCell.innerText = totalTime.toFixed(3);
  });

