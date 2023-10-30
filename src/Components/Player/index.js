import React from 'react'
import imgAlbum from '../../assets/images/album.png';
import { Favorite, Random, Back, Play, Repeat, Next, Sound, Playlist, Pause, Conection} from '../Utils/Icons';
import './player.css';
import { Progress } from '../Utils/Progress';

export default function Player() {
    // const [music, setMusic] = useState(props.music);

    // return (
    //     <div className='player'>
    //         <div className='album'>
    //             <img src={music.cover} alt={music.album}></img>
    //             <div>
    //                 <stong>{music.title}</stong>
    //                 <span>{music.artist}</span>
    //             </div>
    //         </div>
    //         <Favorite/>
    //     </div>
    // )

    // useEffect(() => {
    //     document.title = `Tocando ${music.title}`;
    //     console.log('Executou a primeira vez!');
    // });
    
  return (
    <div className='player'>
        <div className='album'>
            <img src={imgAlbum} alt='Album'/>
            <div>
                <strong>Como Tudo Deve Ser </strong>
                <span> Emicida</span>
            </div>
            <Favorite/>
        </div>
        <div className='controls'>
            <div>
                <Random/>
                <Back/>
                <Play/>
                <Pause/>
                <Next/>
                <Repeat/>
            </div>
            <div>
                <span>2:30</span>
                <Progress />
                <span>2:10</span>
            </div>
        </div>
        <div className='optionsControl'>
            <Playlist/>
            <Sound/>
            <Conection />
            <Progress />
        </div>
    </div>
  )
}
