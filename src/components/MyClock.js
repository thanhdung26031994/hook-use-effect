import useClock from "./useClock";

export default function MyClock(){
    const [time, ampm]  = useClock();
    return (
        <>
            <h1>Thời gian:</h1>
            <div id="Clock-style">
                {time}
                <span> {ampm}</span>
            </div>
        </>

    );
}