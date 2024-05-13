import { grassImg, woodImg, dirtImg } from "./images";
import { TextureLoader } from "three";

const grassTexture = new TextureLoader().load(grassImg);
const woodTexture = new TextureLoader().load(woodImg);
const dirtTexture = new TextureLoader().load(dirtImg);

const groundTexture = new TextureLoader().load(grassImg);

export { grassTexture, woodTexture, dirtTexture, groundTexture };
