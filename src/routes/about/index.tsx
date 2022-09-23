import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import styles from './about.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <div class="about-page">
        <section>
          <article>
            aa
          </article>
        </section>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Flower',
};
