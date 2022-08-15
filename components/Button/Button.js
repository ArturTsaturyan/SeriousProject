
import { Button } from '@mui/material'



export const ButtonComp = ({title}) => { 
    return (
        <>
        <Button variant="contained" sx={{marginTop : "90px"}}>
           {title}
        </Button>
        {/* <div style={{marginTop : "90px"}}>

        </div> */}
        </>
        
    )
}
