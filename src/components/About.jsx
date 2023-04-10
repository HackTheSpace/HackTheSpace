import React from "react";
import StarsCanvas from "./Stars";

const About = () => {
  return (
    <div className="h-screen relative flex flex-col items-center justify-start">
      <h1 className="text-5xl">About</h1>
      <p className="mt-10 text-xl text-center max-w-[70%] md:max-w-[70%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates dolorem commodi unde, aliquid perferendis ipsum laboriosam obcaecati id veritatis nesciunt voluptatibus nulla delectus suscipit ipsa quaerat maxime, cupiditate dolor amet doloremque cum! Natus aliquid ipsam debitis at vel, provident porro sed quo maiores recusandae dicta laudantium, doloremque, doloribus placeat quis.</p>
      <p className="mt-5 text-xl text-center max-w-[60%] md:max-w-[60%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit . Fugit exercitationem eaque nam quaerat nostrum maxime dicta, corrupti odio aliquam aspernatur beatae minima cumque corporis provident asperiores possimus odit blanditiis consequuntur quos laudantium eveniet dolor . Consequatur debitis quaerat minima deserunt, sit optio facere, accusantium natus cum hic voluptatibus reprehenderit ducimus consectetur id vero, aliquid doloribus impedit ad beatae incidunt sunt voluptas exercitationem deleniti . Vel fugiat excepturi, aliquid corrupti quia atque, eveniet, accusamus doloribus placeat perferendis nisi repellendus eos non facilis sapiente?</p>
      <StarsCanvas />
    </div>
  );
};

export default About;
