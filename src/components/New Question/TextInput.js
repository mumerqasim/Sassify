import Styles from './TextInput.module.css';

const TextInput = (props) => {
    return(
        <div className={Styles.TextInputGroup + ' ' + Styles[props.groupClass]}>
            <label className={Styles.TextLabel} htmlFor={props.category}>{props.label}{props.asterick ? <span className='required'>*</span>:''}</label>
            {props.category === 'custom' ? 
                <textarea onChange={props.changed} className={Styles.TextArea} value={props.value} autoComplete='off' type="text" placeholder={props.placeholder} id={props.category} name={props.category}/> : 
                <input onChange={props.changed} className={Styles.TextInput} value={props.value} autoComplete='off' type="text" placeholder={props.placeholder} id={props.category} name={props.category}/>
            }
        </div>
    );
}

export default TextInput;