import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"

const UploadForm = () => {
    return (
        <div>
            <form style={{ width: "100%" }}>
                <FormControl
                    className='my-3'
                    sx={{ width: "100%" }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Song Title"
                        variant="outlined"
                        InputLabelProps={{
                            fontSize: "20px"
                        }}
                        type="text"
                        size="small"
                        name="song_title"
                        required
                        sx={{ fontSize: "20px"}}
                    />
                </FormControl>
                <div className='mb-3'>
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        name="song_description"
                        id="description"
                        rows={5}
                        className='form-control'
                    ></textarea>
                </div>
                <div className='mb-3'>
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                        name="song_category"
                        id="category"
                        className='form-select'
                        style={{ height: "4rem" }}
                        placeholder="Select a song category..."
                    >
                        <option value="bhojpuri">Bhojpuri</option>
                        <option value="bhojpuri">Punjabi</option>
                        <option value="bhojpuri">Hindi</option>
                        <option value="bhojpuri">Old Hindi</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor="title" className="form-label">Song Title</label>
                    <input type="text" name="title" id="title" className="form-control" />
                </div>
                <div className='mb-3'>
                    <label htmlFor="title" className="form-label">Song Title</label>
                    <input type="text" name="title" id="title" className="form-control" />
                </div>
            </form>
        </div>
    )
}

export default UploadForm