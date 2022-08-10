import styled from "styled-components";
import drumsA from '../../assets/images/music_icons/Drums/drums_a.png';
import guitarA from '../../assets/images/music_icons/Guitars/guitar_a.png';
import vocalA from '../../assets/images/music_icons/Vocals/vocals_a.png';


export const DrumImg = styled.img.attrs({
  src: `${drumsA}`,
 })`
   height: 120px;
   max-width: 100%;
   border-radius: 60%;
   margin-right: 30px;
   margin-top: 20px;
   box-shadow: 0.5px 0.5px 8px 1px #A9A9A9;
   &:hover{
    box-shadow: 1px 1px 5px 1px pink;
    outline: none;
     }
   }
   `;

export const GuitarImg = styled.img.attrs({
  src: `${guitarA}`,
})`
  height: 120px;
  max-width: 100%;
  border-radius: 60%;
  margin-right: 30px;
  margin-top: 20px;
  box-shadow: 0.5px 0.5px 8px 1px #A9A9A9;
  &:hover{
  box-shadow: 1px 1px 5px 1px pink;
  outline: none;
   }}`;

export const VocalImg = styled.img.attrs({
    src: `${vocalA}`,
  })`
    height: 120px;
    max-width: 100%;
    border-radius: 60%;
    margin-right: 30px;
    margin-top: 20px;
    box-shadow: 0.5px 0.5px 8px 1px #A9A9A9;
    &:hover{
    box-shadow: 1px 1px 5px 1px pink;
    outline: none;
     }}`;

