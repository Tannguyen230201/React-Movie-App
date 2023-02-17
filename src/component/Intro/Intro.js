import ReactPlayer from 'react-player'
import '../Intro/Intro.scss';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import { useState } from 'react';

const Intro = () => {
    const [isMuted, setIsMuted] = useState(false)

    return (
        <div className='Intro'>
            <ReactPlayer
                playing={true}
                loop="true"
                width="100%"
                height="100%"
                volume={1}
                muted={isMuted}
                controls={false}
                url="https://vimeo.com/65879807"
                // url='https://youtu.be/TWB31WFomz4'
                className="videoIntro"
            />
            <div className='infoIntro'>
                <h1 className='headingIntro'>Iron Man</h1>
                <p className='overviewIntro'>
                    Trailer for Netflix series "Iron Man"
                    Production: Fox Devil Films GmbH for Netflix Amsterdam
                    Director: Simon Ritzler
                    Dop: Carlo Jelavic
                    Editor: Michael Timmers
                    Colorist: Mike Bothe
                    Compositing: Stathis Nafpliotis
                </p>
            </div>
            {
                isMuted ?
                    (<VscMute className='bntVolume' onClick={() => setIsMuted(false)} />)
                    : (<VscUnmute className='bntVolume' onClick={() => setIsMuted(true)} />)
            }
            <div className='bottomIntro'>

            </div>
        </div>
    )
}
export default Intro;