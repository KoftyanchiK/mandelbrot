self.postMessage('Prototype implementation started');

self.addEventListener('message', function(e) {
  self.postMessage(e.data);
}, false);