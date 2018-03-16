// This works
// export const environment = {
//   production: true,
//   a: 'rgba(225,225,225,0.8)',
//   c: 'string3',
// };


// This works
import { baseEnvironment } from './environment.common';
// export const environment = baseEnvironment;

// This works
const b = {
    production: true,
    a: 'rgba(225,225,225,0.8)',
    c: 'string3',
  };
  // export const environment = b;

// This does not work
const a = Object.assign({
  production: true,
}, {
  a: 'rgba(225,225,225,0.8)',
  c: 'string3',
});
// export const environment = a;

// This does not work
const c: any = {};

// tslint:disable-next-line:forin
for (const o in baseEnvironment) {
  c[o] = baseEnvironment[o];
}
// export const environment = c;

// This does not work
const d: any = {};
d.a = 'rgba(225,225,225,0.8)';
d.c = 'string3';
d.production = true;

//  export const environment = d;


// ** This half work `a` gets through, but c does not
const e: any = {
  a: 'rgba(225,225,225,0.8)',
  production : true
};
e.c = 'string3';

//  export const environment = e;

// This works just as good as the last one
import { base2 } from './environment.common';
export const environment = base2;
