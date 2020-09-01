import React from "react";
import JumboWrapper from "../components/Jumbotron/JumboWrapper";
import JumboItem from "../components/Jumbotron/JumboItem";
import JumboTextWrapper from "../components/Jumbotron/JumpoTextWrapper";
import JumboTitle from "../components/Jumbotron/JumboTitle";
import JumboSubTitle from "../components/Jumbotron/JumboSubTitle";

function JumboCompound() {
  return (
    <JumboWrapper>
      <JumboItem>
        <JumboTextWrapper>
          <JumboTitle></JumboTitle>
          <JumboSubTitle></JumboSubTitle>
        </JumboTextWrapper>
      </JumboItem>
    </JumboWrapper>
  )
}

export default JumboCompound 