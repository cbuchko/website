import React from "react";
import { useWindowSize } from "./useWindowSize";

const getImage = (imgType) => {
  if (imgType === "youtube") {
    return "/youtube.png";
  }
  if (imgType === "itch") {
    return "/itchlogo.png";
  }
  return "github.png";
};

const getLink = (mobile, link, imgType) => {
  if(!mobile){
    return link;
  }
  if(imgType === "youtube"){
    return link;
  }
  return;
}

const showImage = (link, mobile, imgType) => {
  if(mobile){
    if(imgType === "youtube"){
      return true;
    }
    return false;
  } else {
    if(link){
      return true;
    }
    return false;
  }
}
export default function Project({ title, img, gif, body, link, imgType }) {
  const mobile = useWindowSize();
  return (
    <div className="br2 project-container">
      <a
        className="no-underline disabled"
        href={getLink(mobile, link, imgType)}
        target="_blank"
        rel="noreferrer"
      >
        <img class="project-image br5 z-4" src={img} alt="project" />
        <div class="project-info pa4 flex h-100 w-100">
          <div className="project-spacing h-100">
            <div className="f5 lh-title">{body}</div>
            {showImage(link, mobile, imgType) && (
              <img
                className="project-link mv3"
                src={getImage(imgType)}
                alt="github link"
              />
            )}
          </div>
        </div>
        <img class="gif br5" src={gif} alt="project gif" />
      </a>
    </div>
  );
}