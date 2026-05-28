self.addEventListener('install',e=> self'skipwaiting());
  self.addEventListener('fetch'e => e.respondwith(fetch(e.request)));
