import { getSkill, Skill } from "../skills/config";
import SimpleChat from "./../../images/simple-chat.png";
import Kitties from "./../../images/kitties.png";
import Netflix from "./../../images/Netflix.png";
import Crypto from "./../../images/crypto-tracker.png";
import Diamond from "./../../images/diamond-hands.png";
import Coin from "./../../images/coin-flip.png";
import Whiteboard from "./../../images/whiteboard-app-preview.png";

export type Project = {
  name: string,
  description: string,
  image: any,
  github: string,
  technologies: Skill[],
}

export const projects: Project[] = [
  {
    name: "CryptoKitties",
    description: "CryptoKitties Evolution revolutionizes digital collectibles through Ethereum's ERC-721 standard. Create, breed, and trade unique cats with dynamic, rare traits via an innovative oracle mechanism.",
    image: Kitties,
    github: "https://github.com/abdelrahmansheta16/Kitty-Market",
    technologies: getSkill(["NEXT.js", "EthersJS", "alchemy sdk", "viem", "wagmi", "rainbow kit", "html", "css"])
  },
  {
    name: "Netflix-Clone",
    description: "Create a Netflix-inspired streaming platform using Next.js, offering user authentication, dynamic content, recommendations, and a responsive design. This project will deliver a seamless streaming experience with user profiles.",
    image: Netflix,
    github: "https://github.com/abdelrahmansheta16/Netflix-Clone",
    technologies: getSkill(["NEXT.js","GraphQL","Hasura","Magic", "html", "css"])
  },
  {
    name: "Collaborative Whiteboard",
    description: "An online collaborative whiteboard app, with private and public rooms for people to chat and draw in real-time. They can also mint NFTs!",
    image: Whiteboard,
    github: "https://github.com/abdelrahmansheta16/collaborative-canvas-main",
    technologies: getSkill(["react", "typescript", "nodejs", "socket.io", "moralis", "solidity"])
  },
  {
    name: "Simple Chat",
    description: "Chat groups with limitations based on your token balances, built in Moralis 7-day challenge.",
    image: SimpleChat,
    github: "https://github.com/abdelrahmansheta16/simple-crypto-chat-main",
    technologies: getSkill(["html", "css", "javascript", "moralis"])
  },
  {
    name: "Coin Flip",
    description: "Multiplayer Coin Flip game using smart contracts and chainlink VRF to determine a winner in decentralized way.",
    image: Coin,
    github: "https://github.com/abdelrahmansheta16/coin-flip-main",
    technologies: getSkill(["react", "solidity", "hardhat", "typescript", "chainlink", "moralis"])
  },
  {
    name: "Diamond Hands",
    description: "Funny blockchain game that prevents you to panic sell your cryptos by locking them in smart contract.",
    image: Diamond,
    github: "https://github.com/abdelrahmansheta16/diamond-hands-main",
    technologies: getSkill(["solidity", "hardhat", "react", "javascript", "moralis"])
  },
  {
    name: "Crypto Tracker",
    description: "Users can see all statistics about top 250 cryptos and create their own personal portfolio.",
    image: Crypto,
    github: "https://github.com/abdelrahmansheta16/crypto-tracker-main",
    technologies: getSkill(["react", "javascript", "moralis", "css", "html", "git", "npm"])
  }
];