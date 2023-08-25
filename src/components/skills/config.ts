import React from "./../../images/react-logo.png";
import HTML from "./../../images/html5-logo.png";
import CSS from "./../../images/css-logo.png";
import JS from "./../../images/js-logo.png";
import TS from "./../../images/ts-logo.png";
import Solidity from "./../../images/solidity-logo.png";
import Hardhat from "./../../images/hardhat-logo.png";
import Foundry from "./../../images/foundry-logo.png";
import Truffle from "./../../images/truffle-logo.png"; 
import Ganache from "./../../images/ganache-logo.png"; 
import Chainlink from "./../../images/chainlink-logo.png"; 
import NPM from "./../../images/npm-logo.png";
import YARN from "./../../images/yarn-logo.png";
import Git from "./../../images/git-logo.png";
import Moralis from "./../../images/moralis-logo.png";
import Flutter from "./../../images/flutter-logo.png";
import Ethers from "./../../images/ethers-logo.png";
import Wagmi from "./../../images/wagmi-logo.png";
import RainbowKit from "./../../images/rainbowkit-logo.png";
import Waffle from "./../../images/waffle.png";
import Next from "./../../images/nextjs-logo.png";
import IPFS from "./../../images/ipfs-logo.png";
import Apollo from "./../../images/apollo-logo.png";
import GraphQL from "./../../images/graphql-logo.png";
import Socket from "./../../images/socket.svg";
import NodeJS from "./../../images/nodej-js.png";

export type Skill = {
  name: string;
  img: any;
  url: string;
}

export const getSkill = (names: string[]) => {
  const toReturn: Skill[] = [];
  names.map((name: string) => {
    [...skills, ...additionalSkills].map((skill: Skill) => {
      if(skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  });
  return toReturn;
};

export const additionalSkills: Skill[] = [
  {
    name: "Open-Source Contribution",
    url: "",
    img: ""
  },
  {
    name: "Waffle",
    url: "https://getwaffle.io/",
    img: Waffle
  },
  {
    name: "Moralis",
    url: "https://moralis.io/",
    img: Moralis
  },
  
];

export const skills: Skill[] = [
  {
    name: "Solidity",
    url: "https://soliditylang.org/",
    img: Solidity
  },
  {
    name: "Hardhat",
    url: "https://hardhat.org/",
    img: Hardhat
  },
  {
    name: "Foundry",
    url: "https://book.getfoundry.sh/",
    img: Foundry
  },
  {
    name: "Truffle",
    url: "https://trufflesuite.com/",
    img: Truffle
  },
  {
    name: "Ganache",
    url: "https://trufflesuite.com/ganache/",
    img: Ganache
  },
  {
    name: "Chainlink",
    url: "https://chain.link/",
    img: Chainlink
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: JS
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    img: TS
  },
  {
    name: "NodeJS",
    url: "https://nodejs.org/en/",
    img: NodeJS
  },
  {
    name: "Socket.io",
    url: "https://socket.io/",
    img: Socket
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    img: React
  },
  {
    name: "NEXT.js",
    url: "https://nextjs.org/",
    img: Next
  },
  {
    name: "EthersJS",
    url: "https://docs.ethers.io/v5/",
    img: Ethers
  },
  {
    name: "Wagmi",
    url: "https://wagmi.sh/",
    img: Wagmi
  },
  {
    name: "Rainbow Kit",
    url: "https://www.rainbowkit.com/",
    img: RainbowKit
  },
  {
    name: "Apollo",
    url: "https://www.apollographql.com/",
    img: Apollo
  },
  {
    name: "GraphQl",
    url: "https://graphql.org/",
    img: GraphQL
  },
  {
    name: "IPFS",
    url: "https://ipfs.io/",
    img: IPFS
  },
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: HTML
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: CSS
  },
  {
    name: "Flutter",
    url: "https://flutter.dev/",
    img: Flutter
  },
  {
    name: "NPM",
    url: "https://www.npmjs.com/",
    img: NPM
  },
  {
    name: "YARN",
    url: "https://yarnpkg.com/",
    img: YARN
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    img: Git
  },
];