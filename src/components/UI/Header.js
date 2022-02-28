import Styles from './Header.module.css';

const Header = (props) => {

    return (
        <header className={Styles.Header}>
            <h1>sassify</h1>
            <div className={Styles.ButtonContainer}>
                {props.progressButton ? <button id='saveprogress' onClick={props.buttonClicked}>Save Progress</button> : <button disabled>Save Progress</button>}
                {props.restoreButton ? <button id='restore' onClick={props.buttonClicked}>Restore Previous</button> : <button disabled>Restore Previous</button>}
            </div>
        </header>
    );
}

export default Header;