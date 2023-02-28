import classes from '../style/Login.module.css';
import ReCAPTCHA from 'react-google-recaptcha';
function Login() {
    const onChange = () => {};
    return (
        <div className={classes.loginpanel}>
            <div className={classes.signup}>
                <div className={classes.signupdiv}>
                    <h3 className={classes.signupheader}>No account ?</h3>
                    <h3 className={classes.signupinf}>Register for free</h3>
                    <a href='/signup'>
                        <button className={classes.lgbtnsign}>Sign Up</button>
                    </a>
                    <hr className={classes.lghr}></hr>
                    <div>
                        <h2 className={classes.haylance}>Haylance</h2>
                    </div>
                </div>
            </div>
            <div className={classes.loginform}>
                <form method='get' className={classes.lgform}>
                    <h3 className={classes.signinheader}>Sign In</h3>
                    <input type='text' className={classes.lginput} placeholder='Username'/>
                    <input type='password' className={classes.lginput} placeholder='Password'/>
                    <div className={classes.recaptchadiv}>
                        <ReCAPTCHA sitekey="6LdBVrUkAAAAAJJHzg-fy3TP9SK4qMFqo-9WM8JR" onChange={onChange}/>
                    </div>
                    <button type='submit' className={classes.lgbtn}>Sign In</button>
                    <hr></hr>
                    <a href='/' className={classes.frgpass}>
                        Forgot password?
                    </a>
                </form>
            </div>
        </div>
    )
}

export default Login;