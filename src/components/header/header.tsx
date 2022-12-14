import { component$, useStylesScoped$ } from '@builder.io/qwik';
// import { Link } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header>
      <a href="/" class="logo" aria-label="A yellow triangle as a logo">
        <QwikLogo />
      </a>
      <div >
      </div>
    </header>
  );
});
