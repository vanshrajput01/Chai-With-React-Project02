import { Image } from "./Image"
export function DogCard(props) {
    return (
        <>
            <h3>{props.dogName}</h3>
            <Image src = {props.image}/>
        </>
    )




}