import React from "react";
import Image from "next/image";
import boltIcon from "@icon/bolt-alt.svg";
import highlight from "../../../../public/highlight.svg";

const SkillsCard = (props) => {
  const { marginTop } = props;
  return (
    <div style={{ marginTop: `${marginTop}px` }}>
      <span className="inline-block py-2">
        <h3 className="pl-4 font-['Caveat'] text-base capitalize text-gray-300">
          {props[0]}
        </h3>
        <Image src={highlight} alt="highlight" />
      </span>
      <div className="border-gradient">
        <figure className="flex min-w-[360px] flex-col rounded-2xl text-left">
          <figcaption className="p-6">
            {props[1].map((skill) => (
              <CardElement key={skill.name} {...skill} />
            ))}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

const CardElement = ({ name, desc: description }) => {
  return (
    <div className="flex w-full justify-between text-nowrap py-1">
      <span className="flex gap-1">
        <Image src={boltIcon} alt={name} width={20} height={20} />
        <span>{name}</span>
      </span>
      <p className="basis-2/3 text-sm text-gray-400">{"⏤" + description}</p>
    </div>
  );
};

export default SkillsCard;
