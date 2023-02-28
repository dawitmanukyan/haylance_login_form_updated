import classes from '../style/Header.module.css';

function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.haylance}>
                <div className={classes.hy}>
                    <h3 className={classes.hay}>Hay</h3>
                    <h3 className={classes.lance}>lance</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;