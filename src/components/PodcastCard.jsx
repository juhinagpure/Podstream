import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PlayIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: #9000ff !important;
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute !important;
  top: 45%;
  right: 10%;
  display: none;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px #9000ff50 !important;
`;
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
  &:hover ${PlayIcon} {
    display: flex;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;

const Favorite = styled(IconButton)``;
const CardImage = styled.img``;
const CardInformation = styled.div``;
const MainInfo = styled.div``;
const Title = styled.div``;
const Decryption = styled.div``;
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
        <CardImage src="https://th.bing.com/th/id/OIP.6GSP_4rcbcVRkU7EtuKx7wHaFb?rs=1&pid=ImgDetMain" />
      </Top>
      <CardInformation>
        <MainInfo>
          <Title>The Tim Ferriss Show</Title>
          <Decryption>
            {" "}
            "The Tim Ferriss Show" is a popular podcast hosted by Tim Ferriss,
            an entrepreneur, author, and public speaker known for his books such
            as "The 4-Hour Workweek." In the podcast, Ferriss deconstructs the
            habits, routines, and strategies of world-class performers from
            diverse areas including investing, sports, business, art, and more.
          </Decryption>
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
