let called = 0;

// Session class that leverages Date
class Session {
    constructor() {
      this.lastUpdate = Date.now()
    }

    touch() {
      this.lastUpdate = Date.now()
    }
  }

  // A potential implementation to watch the Date Object
  function spyOn(Object, method) {
    called += 1;
    //called.push('i was called')
    //console.log(called);
    return called;
  }

  // A common way of using a spy
  const dateSpy = spyOn(Date, 'now')

  Date.now();
  Date.now();

  //spyOn(Date, 'now')
  // A commong way of checking the spy
  console.log(called);


