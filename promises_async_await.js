// Promises and Async/Await in JavaScript
// ======================================
//
// Promises represent the eventual completion (or failure) of an async operation.

// Example: Creating a Promise
function asyncTask(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve('Task completed!');
      else reject('Task failed!');
    }, 1000);
  });
}

// Consuming a Promise with .then/.catch
asyncTask(true)
  .then(result => console.log(result)) // 'Task completed!'
  .catch(error => console.error(error));

// Async/Await syntax (ES2017+)
async function runTask() {
  try {
    const result = await asyncTask();
    console.log('Async/Await:', result);
  } catch (error) {
    console.error('Async/Await Error:', error);
  }
}

runTask();

// Promises are chainable and help avoid callback hell. 