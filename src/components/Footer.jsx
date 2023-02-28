import classes from '../style/Footer.module.css';

function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.footertext}>
                <span>Haylance @ 2023 | <span className={classes.footerallr}>All Rights Reserved</span></span>
            </div>
        </div>
    )
}

export default Footer;