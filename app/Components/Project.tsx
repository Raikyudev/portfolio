import React, { forwardRef, Ref } from 'react';
import icon2 from "img/icon2.png";
import AI from "img/AI.png";
import git from "img/git.png";
import web from "img/web.png";
import KermitMockup from "img/KermitMockup.png";
import Tool from "~/Components/Tool";
import { myFunction, hideMyDiv } from "~/Components/Show";

interface ProjectProps {
  tools: string[];
  image: string;
  projectName: string;
  description: string;
  id: string;
  role?: string;
  website?: string;
  git?: string;
  onHide: () => void;
}

const Project = forwardRef<HTMLDivElement, ProjectProps>((props, ref) => {
  const toolArray = [];
  for (let i = 0; i < props.tools.length; i++) {
    toolArray[i] = <Tool ToolName={props.tools[i]} key={i} />;
  }
  return (
    <div className="flex flex-row gap-20 justify-center" id={props.id} ref={ref}>
      <img onClick={props.onHide} src={props.image} alt="" className="cursor-pointer rounded-md h-96" />
      <div>
        <div className="w-120 my-6">
          <div className="flex flex-row gap-5 items-center">
            <p className="text-3xl text-green-1 my-2">{props.projectName}</p>
            <button onClick={props.onHide} className="cursor-pointer border-2 rounded-full px-3 h-10 font-bold">↑</button>
          </div>
          <p className="text-xl">{props.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xl flex flex-row gap-1">My role:
            <div className="text-green-1">{props.role}</div>
          </div>
          <p className="text-xl">Tools:</p>
          <div className="flex flex-row gap-2 mb-2">{toolArray}</div>
          <div className="flex flex-row gap-2">
            {props.website && <a href={props.website}><img src={web} className="h-10 cursor-pointer" /></a>}
            {props.git && <a href={props.git}><img src={git} className="h-10 cursor-pointer" /></a>}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Project;
