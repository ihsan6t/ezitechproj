import { Grid2 } from "@mui/material"
import { LocalPhone, AddLocation } from '@mui/icons-material';

const TopBar = () => {
    return <div style={{ minHeight: 38, backgroundColor: "#3275db", color: "white", fontSize: 14 }}>
        <Grid2 container sx={{ paddingTop: 1, width: "80%", margin: "auto" }} >
            <Grid2 size={2}>
                <LocalPhone sx={{ fontSize: 15 }} />
                +92 3455555396
            </Grid2>
            <Grid2 size={4}>
                <AddLocation sx={{ fontSize: 15 }} />
                Westridge 1, Office #304-G Peshawar Road, Rawalpindi, Pakistan
            </Grid2>
            <Grid2 size={2}>
                Mon - Fri 8.00 - 20.00
            </Grid2>
            <Grid2 container size={2}>
                <Grid2 size={1}>A</Grid2>
                <Grid2 size={1}>B</Grid2>
                <Grid2 size={1}>C</Grid2>
                <Grid2 size={1}>D</Grid2>
            </Grid2>
            <Grid2 size={2} container sx={{ display: "flex" }}>
                <Grid2 size={5}>Login</Grid2>
                <Grid2 size={5}>Register</Grid2>
            </Grid2>
        </Grid2 >
    </div>

}

export default TopBar