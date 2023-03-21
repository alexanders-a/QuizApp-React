import { Howl } from "howler";
import correct from "./correct.mp3";
import incorrect from "./incorrect.mp3";

export const playone = () => {
  var sound = new Howl({
    src: [correct],
    autoplay: true,
    volume: 0.5,
  });

  sound.play();
};
export const play = () => {
  var sound = new Howl({
    src: [incorrect],
    autoplay: true,
  });

  sound.play();
};
