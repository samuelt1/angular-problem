export const baseEnvironment = {
  a: 'rgba(225,225,225,0.8)',
  c: 'string3',
  production: true,
};

const number2: any = {
  a: 'rgba(225,225,225,0.8)',
  production: true,
};
number2.c = 'string3';

export const base2 = number2;
