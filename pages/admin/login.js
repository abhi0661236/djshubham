import { Button } from "@mui/material"

const Login = () => {
    return (
        <main className='container-fluid'>
            <div className="container d-flex align-items-center justify-content-center" style={{ height: "90vh" }}>
                <div className="w-100 shadow-lg  p-5 rounded-5" style={{maxWidth: "30rem"}}>
                    <form>
                        <h1 className='text-center mb-1'>Admin Login</h1>
                        <hr className='w-25 mx-auto bg-danger mb-5' style={{height: "2px"}} />
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="form-label">Email Id</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Enter your email...'
                                className='form-control'
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Enter your password...'
                                className='form-control'
                            />
                        </div>

                        <div className="text-center mt-4">
                            <Button variant="contained" className="bg-dark text-light">Login</Button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login