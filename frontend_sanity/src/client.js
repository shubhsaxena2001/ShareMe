import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'wd220y7n',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'skDGog7MfjqNt4gdTe25w6cfSxRpVefeyu8y8zck7rn20lZhZ3aDnoY4scabLbAm2Q4fU4nVC3CIzuLJV6wFu5K51OTY7yEcCZqsDMjD1KF8bNyxIZksvn77dTcY0Dp63XlghakzyRiWlDrzLEJRnVIMqCbSY8pyChrio39QmG9rs9pHP210',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
