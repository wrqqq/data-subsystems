import { useState } from 'react'
import { Button, TextField } from '@mui/material'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

type FormProps = {
    response: object
}

const Form = ({ response }: FormProps) => {
    const [date, setDate] = useState(null)
    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Card number"
                variant="outlined"
                type="number"
            />
            <TextField
                id="outlined-basic"
                label="Expiration Date"
                variant="outlined"
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Basic example"
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <TextField id="outlined-basic" label="CVV" variant="outlined" />
            <TextField id="outlined-basic" label="Amount" variant="outlined" />
            <Button></Button>
        </div>
    )
}

export default Form
