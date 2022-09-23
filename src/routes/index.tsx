import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Flower from "~/components/flower";

export default component$(() => {
  return (
    <div class="home">
      <div class="w-full relative min-h-screen bg-gray-200">
        <div class="absolute inset-0 z-0">
          <Flower />
        </div>
      </div>
      <section>
        <Link class="mindblow" href="/about">
          <img
            src="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:good,w_750/v1630030314/stn-renders/123_lw5jtv.png"
            alt="blender render"
            width="750"
            height="750"
            loading="lazy"
            decoding="async"
          />
        </Link>
      </section>
      <section>
        <img
          src="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:good,w_750/v1630030301/stn-renders/567_vpomfk.png"
          alt="blender render"
          width="750"
          height="750"
          loading="lazy"
          decoding="async"
        />
      </section>
      <section>
        <img
          src="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:good,w_750/v1630030307/stn-renders/789_itwybi.png"
          alt="blender render"
          width="750"
          height="750"
          loading="lazy"
          decoding="async"
        />
      </section>
      <section>
        <img
          src="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:good,w_750/v1630030311/stn-renders/345_tw9zas.png"
          alt="blender render"
          width="750"
          height="750"
          loading="lazy"
          decoding="async"
        />
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Bienvenidos a Qwik",
};
