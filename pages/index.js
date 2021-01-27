/* eslint-disable max-len */
/* eslint-disable key-spacing */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/style-prop-object */
/* eslint-disable eol-last */
/* eslint-disable func-names */
/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AnimeBit</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Anime Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <div>
                <p>Teste os seus conhecimentos sobre Anime, se divirta encarando varios outros quizes! </p>
              </div>
              <input
                style={{
                  height: '38px',
                  width: '281px',
                  marginLeft: 'auto',
                }}
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  // State
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Escreva seu nome"
              />
              <p></p>
              <div>
                <button
                  style={{
                    height: '36px',
                    width: '238px',
                    backgroundColor:'#2196f3',
                    marginLeft: '20px',
                    borderRadius: '4px'
                  }}
                  type="submit"
                  disabled={name.length === 0}
                >
                  Jogar
                  {name}
                </button>
                <div>
                </div>
              </div>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Quiz de geral aqui</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/dbnvides" />
    </QuizBackground>
  );
}