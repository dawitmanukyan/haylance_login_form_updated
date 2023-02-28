import classes from '../style/Signup.module.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
function Signup() {
    const onChange = () => {};
    return (
        <div className={classes.loginpanel}>
            <div className={classes.loginform}>
                <form method='get' className={classes.lgform}>
                    <h3 className={classes.signinheader}>Sign Up</h3>
                    <input type='text' className={classes.lginput} placeholder='Email'/>
                    <input type='text' className={classes.lginput} placeholder='Username'/>
                    <input type='password' className={classes.lginput} placeholder='Password'/>
                    <input type='password' className={classes.lginput} placeholder='Repeat the password'/>
                    <div className={classes.rulesdiv}>
                        <input type='checkbox' className={classes.lginputck} name='rulesagree'/>
                        <label className={classes.rullab} htmlFor='rulesagree'>I am familiar with the <a href='/'>rules</a></label>
                    </div>
                    <div className={classes.recaptchadiv}>
                        <ReCAPTCHA sitekey="6LdBVrUkAAAAAJJHzg-fy3TP9SK4qMFqo-9WM8JR" onChange={onChange}/>
                    </div>
                    <button type='submit' className={classes.lgbtn}>Sign Up</button>
                </form>
            </div>
            <div className={classes.signup}>
                <div className={classes.signupdiv}>
                    <h3 className={classes.signupheader}>Already registered ?</h3>
                    <h3 className={classes.signupinf}>log in to your account</h3>
                    <Link to='/signin'>
                        <button className={classes.lgbtnsign}>Sign  In</button>
                    </Link>
                    <hr className={classes.lghr}></hr>
                    <div>
                        <h2 className={classes.haylance}>Haylance</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;