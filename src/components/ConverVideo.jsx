import styled from 'styled-components';
import video from '../assets/mave.mp4';

const VideoContainer = styled.div`
width: 100%;
video{
    width: 100%;
    height:auto;
}

@media (max-width: 64em){
  min-width: 40vh;
}
`;
function ConverVideo() {
  return (
    <VideoContainer><video src={video} type="video/mp4" autoPlay muted loop/></VideoContainer>
  )
}

export default ConverVideo