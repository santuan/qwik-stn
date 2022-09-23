import { component$, useClientEffect$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import styles from './flower.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 30,
  });

  useClientEffect$(({ cleanup }) => {
    const timeout = setTimeout(() => (state.count = 1), 500);
    cleanup(() => clearTimeout(timeout));

    const internal = setInterval(() => state.count++, 7000);
    cleanup(() => clearInterval(internal));
  });

  return (
    <div class=" min-h-[100vh] grid place-content-center bg-indigo-900 relative overflow-hidden">
      <div class="absolute bottom-3 left-0 right-0 text-center text-white z-10">
        <span class="text-5xl">🌸</span>
        <h1 class="font-mono text-3xl font-bold flex flex-col-reverse py-6">
          Bienvenidos a Qwik
        </h1>
        <div class="max-w-sm mx-auto bg-gray-900 rounded-full px-3 pt-1 shadow-lg ">
          <input
            aria-label="Grow a html flower"
            type="range"
            min={3}
            class="accent-indigo-100 max-w-sm mx-auto"
            value={state.number}
            max={90}
            onInput$={(ev) => {
              state.number = (ev.target as HTMLInputElement).valueAsNumber;
            }}
          />
        </div>
      </div>
      <div class="absolute inset-0 z-0 opacity-50">
        <div
          style={{
            '--state': `${state.count * 0.05}`,
          }}
          class={{
            host: true,
            pride: loc.query['pride'] === 'true',
          }}
        >
          {Array.from({ length: state.number }, (_, i) => (
            <div
              key={i}
              class={{
                square: true,
                odd: i % 2 === 0,
              }}
              style={{ '--index': `${i + 1}` }}
            />
          )).reverse()}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Flower',
};
