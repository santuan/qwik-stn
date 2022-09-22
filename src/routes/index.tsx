import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="text-center space-y-6">
      <h1 class="text-indigo-600 text-3xl font-bold underline">
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>
      <Link class="mindblow" href="/flower">
        Blow my mind 🤯
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
