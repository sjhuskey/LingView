const fetch = require('isomorphic-fetch');
const { URL } = require('url');

function sleep(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}

function timeoutRetrier(asyncFn, { maxRetries = 5, retryDelay = 1000, timeout = 3000 } = {}) {
  return async function (...args) {
    const errors = [];
    for (let i = 0; i < maxRetries; i++) {
      try {
        const { result, err = '' } = await Promise.race([
          asyncFn(...args).then(result => ({ result })),
          sleep(timeout).then(() => ({ err: 'timed out' }))
        ]);
        if (err) {
          throw err;
        }
        return result;
      } catch (err) {
        errors.push(err);
        if (retryDelay > 0) {
          await sleep(retryDelay);
        }
      }
    }
    throw errors;
  }
}

const timeoutRetryFetch = timeoutRetrier(fetch);

async function urlExists(url) {
  const urlEncoded = new URL(url).href;

  console.log(`🔎 Checking URL: ${urlEncoded}`);

  try {
    const response = await timeoutRetryFetch(urlEncoded, { method: 'HEAD' });
    console.log(`🟡 HEAD status: ${response.status} (${response.statusText}) for ${urlEncoded}`);
    if (response.ok) return true;
  } catch (err) {
    console.warn(`⚠️ HEAD request failed for ${urlEncoded}:`, err.toString());
  }

  try {
    const response = await timeoutRetryFetch(urlEncoded, { method: 'GET' });
    console.log(`🟢 GET status: ${response.status} (${response.statusText}) for ${urlEncoded}`);
    return response.ok;
  } catch (err) {
    console.error(`❌ GET request failed for ${urlEncoded}:`, err.toString());
    return false;
  }
}

module.exports = () => urlExists;
