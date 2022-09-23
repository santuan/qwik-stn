import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header>
      <Link href="/" class="logo">
        <QwikLogo />
      </Link>
      <div >
      </div>
    </header>
  );
});
