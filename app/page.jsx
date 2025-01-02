import Feed from "@components/Feed";
import React from "react";

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Get inspired by our AI-generated prompts and share your creations with
        the world.
      </p>

      <Feed />
    </section>
  );
};

export default page;
