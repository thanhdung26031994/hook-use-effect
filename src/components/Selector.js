import {useEffect, useState} from "react";

export default function Selector(){
    const [selected, setSelected] = useState('0');
    const [valueSelected, setValueSelected] = useState('');

    const choise = e =>{
        setSelected(e.target.value);
        console.log(0)
    };

    useEffect(() =>{
        switch (selected){
            case '0':
                setValueSelected('Java');
                console.log(1)
                break;
            case '1':
                setValueSelected('Angular');
                console.log(1)
                break;
            case '2':
                setValueSelected('Javascript');
                console.log(1)
                break;
            case '3':
                setValueSelected('Php');
                console.log(1)
                break;
            default:
        }
    }, [selected]);

    return(
        <>
            <div>
                Khoa hoc:
                <select onChange={event => {
                    choise(event);
                }}>
                    <option value={'0'}>Java</option>
                    <option value={'1'}>Angular</option>
                    <option value={'2'}>Javascript</option>
                    <option value={'3'}>Php</option>
                </select>
                <h2>Your selected: {valueSelected}</h2>
            </div>
        </>
    )
}