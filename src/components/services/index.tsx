import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
} from '@mui/material';
import { Grid2 } from "@mui/material"
import { servicesData } from "../../data"

const Services = () => {
    return <>
        <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
            <Grid2 container style={{ width: 1170 }} spacing={2}>
                {servicesData.map((item, index) => (
                    <Grid2 display="flex" justifyContent="center" alignItems="center" size={2}>
                        <Card key={index}
                            sx={{ width: 161, height: 170, display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" }}
                        >
                            <CardMedia
                                key={index}
                                component="img"
                                height={69}
                                width={69}
                                image={item.image}
                                alt={item.text}
                            />
                            <Typography sx={{display:"flex", justifyContent:"center", marginTop:5}} fontWeight={"bold"}  gutterBottom variant="body1" component="div">
                                {item.text}
                            </Typography>
                        </Card>

                    </Grid2>
                ))}
            </Grid2>
        </div>
    </>
}

export default Services