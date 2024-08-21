import { useSetRecoilState } from "recoil";
import { bgColorAtom } from "../atoms/bgColorAtom";


export function BgButton({name, color}) {
    const setBGColor = useSetRecoilState(bgColorAtom);
    return (<button className={`${color} rounded-lg p-2 w-20`} onClick={() => setBGColor(color)}>{name}</button>)
}