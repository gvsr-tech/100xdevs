import { BgButton } from "../components/BgButton";
import { BG_COLORS } from "../enums/bgColors";

export function BackGroundColorComponent() {
    return (
        <div className="flex justify-around pt-20">
            {Object.keys(BG_COLORS).map((key) => (
                <BgButton key={key} name={key} color={BG_COLORS[key]}>
                    {key}
                </BgButton>
            ))}
        </div>
    );
}
