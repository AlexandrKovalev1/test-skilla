import { useEffect, useState } from "react";
import useSound from "use-sound";
import classes from './Player.module.css'




const Player = (props) => {
console.dir(props.voise)

    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound();

    const [currTime, setCurrTime] = useState({ min: "", sec: "", });

    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([]));
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min,
                    sec,
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);


    const playingButton = () => {
        if (isPlaying) {

            setIsPlaying(false);
            return props.voise.pause();
        } else {
            setIsPlaying(true);
            return props.voise.play();
        }
    };

    return (


        <div className={classes.player__body}>

            <div className={classes.time__record}>
                {props.time}
            </div>
            {!isPlaying ? (
                <button className={classes.playingButton} onClick={playingButton}>
                    <div className={classes.playingButton__container}>
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.287422 0.0693819C0.376104 0.0231631 0.475355 0 0.574754 0C0.673886 0 0.773106 0.0231631 0.862176 0.0693819L7.71255 4.55186C7.89006 4.64422 8 4.81521 8 5.00008C8 5.18493 7.89036 5.3559 7.71255 5.44814L0.862176 9.93081C0.684394 10.0231 0.465233 10.0231 0.287571 9.93081C0.109759 9.83824 0 9.6672 0 9.48246V0.51755C0 0.332781 0.10958 0.16182 0.287422 0.0693819Z" fill="#002CFB" />
                        </svg>
                    </div>

                </button>
            ) : (
                <button className={classes.playingButton} onClick={playingButton}>
                    <div className={classes.playingButton__container}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 8H2.66667V0H0V8ZM5.33333 0V8H8V0H5.33333Z" fill="#002CFB" />
                        </svg>

                    </div>
                </button>
            )}
            <div className={classes.audio__info}>
                <div className={classes.time}>
                    <p>
                        {currTime.min}:{currTime.sec}
                    </p>
                </div>


                <input
                    type="range"
                    min="0"
                    max={duration / 1000}
                    default="0"
                    value={seconds}
                    className={classes.timeLine}
                    onChange={(e) => {
                        sound.seek([e.target.value]);
                    }}
                />


            </div>
            <div className={classes.button__download}>
                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 16H13V14.1176H0V16ZM13 5.64706H9.28571V0H3.71429V5.64706H0L6.5 12.2353L13 5.64706Z" fill="#ADBFDF" />
                </svg>
            </div>
            {isPlaying && <div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#ADBFDF" />
                </svg></div>}
        </div>
    )
}


export default Player;

