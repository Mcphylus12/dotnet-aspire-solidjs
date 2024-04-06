import {Component, createResource} from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

interface Weather {
  Date: string
}

const fetchWeather = async () =>
    (await fetch(import.meta.env.services__apiservice__0 + '/weatherforecast')).json();

const App: Component = () => {

  const [user] = createResource(fetchWeather);
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid {JSON.stringify(user.latest)}
        </a>
      </header>
    </div>
  );
};

export default App;
