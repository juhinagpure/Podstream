import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

// const PlayIcon = styled.div`
//   padding: 10px;
//   border-radius: 50%;
//   z-index: 100;
//   display: flex;
//   align-items: center;
//   background: #9000ff !important;
//   color: white !important;
//   backdrop-filter: blur(4px);
//   -webkit-backdrop-filter: blur(4px);
//   position: absolute !important;
//   top: 45%;
//   right: 10%;
//   display: none;
//   transition: all 0.4s ease-in-out;
//   box-shadow: 0 0 16px 4px #9000ff50 !important;
// `;
const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;

const Favorite = styled(IconButton)`
  color: white;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95} !important;
  color: white !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
`;

const CardImage = styled.img`
object-fit: cover;
  width: 220px;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  &:hover{
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
`;
const CardInformation = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 450;
  padding: 14px 0px 0px 0px;
  width: 100%;
`;
const MainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;
const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
`;
const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
`;
const CreatersInfo = styled.div``;
const Creator = styled.div``;
const CreaterName = styled.div``;
const Views = styled.div``;

const PodcastCard = () => {
  return (
    <Card>
      <Top>
        <Favorite>
          <FavoriteIcon />
        </Favorite>
        <CardImage src="" />
      </Top>
      <CardInformation>
        <MainInfo>
          <Title>The Tim Ferriss Show</Title>
          <Description>
            {" "}
            "The Tim Ferriss Show" is a popular podcast hosted by Tim Ferriss,
            an entrepreneur, author, and public speaker known for his books such
            as "The 4-Hour Workweek." In the podcast, Ferriss deconstructs the
            habits, routines, and strategies of world-class performers from
            diverse areas including investing, sports, business, art, and more.
          </Description>
          <CreatersInfo>
            <Creator>
              <Avatar>J</Avatar>
              <CreaterName>Juhi</CreaterName>
            </Creator>
            <Views>• 12 Views</Views>
          </CreatersInfo>
        </MainInfo>
      </CardInformation>
    </Card>
  );
};

export default PodcastCard;
