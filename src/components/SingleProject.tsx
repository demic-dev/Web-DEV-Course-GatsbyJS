import React from "react";
import styled from "styled-components";
import { H5, BodyText } from "../utils/typography";

type ProjectProps = {
  image: string;
  title: string;
  body: string;
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;

  width: 100%;
  background-color: #fff;

  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);

  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;

  cursor: pointer;
`;

const CardInfoContainer = styled.div`
  padding: 1rem 1.4rem;
`;

const CardTitle = styled(H5)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SingleProject: React.FC<ProjectProps> = ({ image, title, body }) => {
  return (
    <CardWrapper>
      <CardImage src={image} alt={`Image of ${title}`} />
      <CardInfoContainer>
        <CardTitle title={title}>{title}</CardTitle>
        <BodyText>{body}</BodyText>
      </CardInfoContainer>
    </CardWrapper>
  );
};

export default SingleProject;
