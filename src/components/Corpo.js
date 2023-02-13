import Posts from "./Posts";
import Stories from "./Stories";
import SideBar from "./SideBar";

export default function Corpo(){
    return (
        <div className="corpo">
        <div className="esquerda">
            <Stories/>
            <Posts/>
        </div>
        <SideBar/>
        </div>
    )
};