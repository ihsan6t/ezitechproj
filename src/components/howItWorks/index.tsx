import { Grid2 } from "@mui/material"
import { howItWorksData } from "../../data"

const HowItWorks = () => {
    return <>
        <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
            <Grid2 container style={{ width: 1170 }}>
                {howItWorksData.map((svgSrc, index) => (
                    <Grid2 display="flex" justifyContent="center" alignItems="center" size="grow">
                        <img style={{ width: 241 }} key={index} src={svgSrc} alt={`How it works ${index + 1}`} />
                    </Grid2>
                ))}
            </Grid2>
        </div>
    </>
}

export default HowItWorks