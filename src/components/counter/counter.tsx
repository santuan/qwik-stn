import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ count: 0 });
  return (
    <button class="btn" type="button" onClick$={() => store.count++}>
      Increment {store.count}
    </button>
  );
});