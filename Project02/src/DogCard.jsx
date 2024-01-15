import ChildrenProps from "./ChildernProps"
import { Image } from "./Image"
export function DogCard(props) {
    return (
        <>
        <ChildrenProps>
        <h3>{props.dogName}</h3>

        </ChildrenProps>

            <Image src = {props.image}/>
        </>
    )




}