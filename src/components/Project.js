import React from "react";
import { useWindowSize } from "./useWindowSize";

export default function Project({ title, img, gif, body, link, itch }) {
  const mobile = useWindowSize();
  return (
    <div className="br2 project-container">
      <a className="no-underline disabled" href={!mobile ? link : undefined} target="_blank" rel="noreferrer">
        <img class="project-image br5 z-4" src={img} alt="project"/>
        <div class="project-info pa4 flex h-100 w-100">
          <div className="project-spacing h-100">
            <div className="f5 lh-title">{body}</div>
            {(link && !mobile) && <img className="project-link mv3" src={itch ? "/itchlogo.png" : "/github.png"} alt="github link" />}
          </div>
        </div>
        <img class="gif br5" src={gif} alt="project gif"/>
      </a>
    </div>
  );
}
