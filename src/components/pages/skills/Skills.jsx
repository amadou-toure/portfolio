import React from "react";
import Style from "./Skills.module.scss";
import GlassCard from "../../glassCard";

export default () => {
  const frameworks = [
    {
      title: "React js",
      image:"src/assets/react.png",
      mainText:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere repellendus enim sit voluptatum iure laudantium id inventore repellat, ex molestias officiis doloribus. Eaque, accusantium. Dicta labore necessitatibus sequi quod vero!",
    },
    {
        title: "Angular js",
        image:"src/assets/angular.png",
        mainText:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere repellendus enim sit voluptatum iure laudantium id inventore repellat, ex molestias officiis doloribus. Eaque, accusantium. Dicta labore necessitatibus sequi quod vero!",
      },
      {
        title: "Next js",
        image:"src/assets/nextjs.png",
        mainText:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere repellendus enim sit voluptatum iure laudantium id inventore repellat, ex molestias officiis doloribus. Eaque, accusantium. Dicta labore necessitatibus sequi quod vero!",
      },
  ];
  return (
    <div className={Style.content}>
      <div className={Style.conChild}>{frameworks.map((frame)=>
        <GlassCard title={frame.title} mainText={frame.mainText} image={frame.image} />
      )}
        
      </div>
    </div>
  );
};
