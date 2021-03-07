import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Home from './index';

let container = null;

const fakeData = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
  },
];

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders home data', async () => {
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData),
    })
  );

  await act(async () => {
    render(<Home />, container);
  });

  expect(container.querySelector('h3').textContent).toBe(fakeData[0].name);
  expect(container.querySelector('.email').textContent).toBe(fakeData[0].email);
  expect(container.querySelector('.phone').textContent).toBe(fakeData[0].phone);

  global.fetch.mockRestore();
});

it('deletes user when clicked', async () => {
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData),
    })
  );

  await act(async () => {
    render(<Home />, container);
  });

  const button = container.querySelector('.container-btns button:nth-child(2)');
  expect(container.querySelector('h3').textContent).toBe(fakeData[0].name);
  expect(container.querySelector('.email').textContent).toBe(fakeData[0].email);
  expect(container.querySelector('.phone').textContent).toBe(fakeData[0].phone);

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(container.querySelector('h3').textContent).toBe(fakeData[1].name);
  expect(container.querySelector('.email').textContent).toBe(fakeData[1].email);
  expect(container.querySelector('.phone').textContent).toBe(fakeData[1].phone);
});
