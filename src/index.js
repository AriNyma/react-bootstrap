import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faker } from '@faker-js/faker';
import MyApp from './MyApp';

const card = [
    { vinkki: faker.word.adjective(), teksti: faker.lorem.sentence(), teksti1: faker.lorem.sentence(), teksti2: faker.lorem.sentence()},
    { vinkki: faker.word.adjective(), teksti: faker.lorem.sentence(), teksti1: faker.lorem.sentence(), teksti2: faker.lorem.sentence()},
    { vinkki: faker.word.adjective(), teksti: faker.lorem.sentence(), teksti1: faker.lorem.sentence(), teksti2: faker.lorem.sentence()},
    { vinkki: faker.word.adjective(), teksti: faker.lorem.sentence(), teksti1: faker.lorem.sentence(), teksti2: faker.lorem.sentence()},
    { vinkki: faker.word.adjective(), teksti: faker.lorem.sentence(), teksti1: faker.lorem.sentence(), teksti2: faker.lorem.sentence()},
    { vinkki: faker.word.adjective(), teksti: faker.lorem.sentence(), teksti1: faker.lorem.sentence(), teksti2: faker.lorem.sentence()},
    { vinkki: faker.word.adjective(), teksti: faker.lorem.sentence(), teksti1: faker.lorem.sentence(), teksti2: faker.lorem.sentence()}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
            <MyApp cards = {card}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
