let firstDive = document.getElementById('firstDive').value;
let firstTime = document.getElementById('firstTime').value;
let secondDive = document.getElementById('secondDive').value;
let submit = document.getElementById('submit');
//the property/value pairs in the group are dive group/bottom time in minutes
const divePlan = {
  feet: {
    '35': {
      group: {
        a: 10,
        b: 19,
        c: 25,
        d: 29,
        e: 32,
        f: 36,
        g: 40,
        h: 44,
        i: 48,
        j: 52,
        k: 57,
        l: 62,
        m: 67,
        n: 73,
        o: 79,
        p: 85,
        q: 92,
        r: 100,
        s: 108,
        t: 117,
        u: 127,
        v: 139,
        w: 152,
        x: 168,
        y: 188,
        z: 205
      }
    },
    '40': {
      group: {
        a: 9,
        b: 16,
        c: 22,
        d: 25,
        e: 27,
        f: 31,
        g: 34,
        h: 37,
        i: 40,
        j: 44,
        k: 48,
        l: 51,
        m: 55,
        n: 60,
        o: 64,
        p: 69,
        q: 74,
        r: 79,
        s: 85,
        t: 91,
        u: 97,
        v: 104,
        w: 111,
        x: 120,
        y: 129,
        z: 140
      }
    },
    '50': {
      group: {
        a: 7,
        b: 13,
        c: 17,
        d: 19,
        e: 21,
        f: 24,
        g: 26,
        h: 28,
        i: 31,
        j: 33,
        k: 36,
        l: 39,
        m: 41,
        n: 44,
        o: 47,
        p: 50,
        q: 53,
        r: 57,
        s: 60,
        t: 63,
        u: 67,
        v: 71,
        w: 75,
        x: 80
      }
    },
    '60': {
      group: {
        a: 6,
        b: 11,
        c: 14,
        d: 16,
        e: 17,
        f: 19,
        g: 21,
        h: 23,
        i: 25,
        j: 27,
        k: 29,
        l: 31,
        m: 33,
        n: 35,
        o: 37,
        p: 39,
        q: 42,
        r: 44,
        s: 47,
        t: 49,
        u: 52,
        v: 54,
        w: 55
      }
    },
    '70': {
      group: {
        a: 5,
        b: 9,
        c: 12,
        d: 13,
        e: 15,
        f: 16,
        g: 18,
        h: 19,
        i: 21,
        j: 22,
        k: 24,
        l: 26,
        m: 27,
        n: 29,
        o: 31,
        p: 33,
        q: 35,
        r: 36,
        s: 38,
        t: 40
      }
    },
    '80': {
      group: {
        a: 4,
        b: 8,
        c: 10,
        d: 11,
        e: 13,
        f: 14,
        g: 15,
        h: 17,
        i: 18,
        j: 19,
        k: 21,
        l: 22,
        m: 23,
        n: 25,
        o: 26,
        p: 28,
        q: 29,
        r: 30
      }
    },
    '90': {
      group: {
        a: 4,
        b: 7,
        c: 9,
        d: 10,
        e: 11,
        f: 12,
        g: 13,
        h: 15,
        i: 16,
        j: 17,
        k: 18,
        l: 19,
        m: 21,
        n: 22,
        o: 23,
        p: 24,
        q: 25
      }
    },
    '100': {
      group: {
        a: 3,
        b: 6,
        c: 8,
        d: 9,
        e: 10,
        f: 11,
        g: 12,
        h: 13,
        i: 14,
        j: 15,
        k: 16,
        l: 17,
        m: 18,
        n: 19,
        o: 20
      }
    },
    '110': {
      group: {
        a: 3,
        b: 6,
        c: 7,
        d: 8,
        e: 9,
        f: 10,
        g: 11,
        h: 12,
        i: 13,
        j: 13,
        k: 14,
        l: 15,
        m: 16
      }
    },
    '120': {
      group: {
        a: 3,
        b: 5,
        c: 6,
        d: 7,
        e: 8,
        f: 9,
        g: 10,
        h: 11,
        i: 11,
        j: 12,
        k: 13
      }
    },
    '130': {
      group: {
        a: 3,
        b: 5,
        c: 6,
        d: 7,
        e: 7,
        f: 8,
        g: 9,
        h: 10
      }
    },
    '140': {
      group: {
        a: 3,
        b: 4,
        c: 5,
        d: 6,
        e: 7,
        f: 8
      }
    }
  }
}

function initialDive(time, depth) {
  if (time < 5 && depth < 40) {
    return groupA;
  } else if (time < 15 && depth < 100) {
    return groupB;
  } else if (time < 25 && depth < 130) {
    return groupC;
  } else if (time < )
}