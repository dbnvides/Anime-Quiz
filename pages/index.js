import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';


/*const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;*/

export const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px){
  margin: auto;
  padding: 15px;
}
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <h1>Quiz AnimeBit</h1>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz Anime on Solo Leveling</h1>

          </Widget.Header>
          <Widget.Content>
            <p>Quero ver se você sabe mesmo tudo sobre o mundo de sololeveling</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quiz da Galera</h1>

          </Widget.Header>
          <Widget.Content>
            <p>Quiz de geral ta aqui</p>
          </Widget.Content>
        </Widget>
        <Footer/>   
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/dbnvides"/>
    </QuizBackground>
  )
}
