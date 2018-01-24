import React, {Component} from 'react';
import * as styles from './css';

class TextField extends Component {
  state = {
    errorClass: '',
    value: '',
    asyncList: undefined,
  };

  componentDidMount() {
    const {type} = this.props;
    if (type === 'password') this.setState({isHide: true});
    this.setState({value: this.props.defaultValue || ''});
  }

  isValid = ({currentTarget}) => {
    const {
      setFormData,
      type,
      validator,
      field,
      list,
      id,
      multiple,
    } = this.props;
    const {asyncList} = this.state;
    let isValid;
    if (id || type === 'file' || type === 'date') return;
    const value = currentTarget.value;
    const options = asyncList || list || [];
    switch (validator) {
      case 'email':
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        isValid = Boolean(value.match(pattern));
        break;

      case 'no-empty':
        isValid = value.length > 0;
        break;

      case 'select':
        isValid = Boolean(options.find(e => e === value));
        if (multiple && value === '') isValid = multiple;
        if (!isValid) this.setState({value: ''});
        break;

      default:
        isValid = true;
        break;
    }
    if (!isValid) return this.setState({errorClass: 'error'});
    else if (!multiple) {
      this.setState({errorClass: ''});
      setFormData({[field]: value});
    } else if (multiple) this.setState({value: ''});
  };

  handleMultiple = currentTarget => {
    const {value} = currentTarget;
    const {async, multiple, list, setMultipleFormData, field} = this.props;
    const {asyncList} = this.state;
    const options = asyncList || list || [];
    if (value.length > 2 && value.length % 2 === 0 && async) {
      this.setState({
        asyncList: [
          'January',
          'January1',
          'January2',
          'January3',
          'January4',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
      });
    }
    if (multiple && options.find(e => value.match(new RegExp(e, 'i')))) {
      currentTarget.value = '';
      setMultipleFormData({[field]: value});
      this.setState({errorClass: ''});
    }
  };

  handleChange = ({currentTarget}) => {
    const {saveParrent, field, multiple} = this.props;
    if (multiple) this.handleMultiple(currentTarget);
    this.setState({value: currentTarget.value});
    if (saveParrent) saveParrent({[field]: currentTarget.value});
  };

  handleEnder = ({keyCode}) => {};

  render() {
    const {
      errmsg,
      type,
      list,
      label,
      id,
      field,
      extraClass,
      labelClass,
    } = this.props;
    const {inputCont, input, hideIcon} = styles;
    const {errorClass, value, asyncList} = this.state;
    const labelExtraClass = value ? 'notEmpty' : '';
    const finalList = list || asyncList;
    const inputClass = extraClass || input;
    const {isHide} = this.state;
    const svgSrc = isHide ? 'open' : 'closed';
    const inputType =
      type === 'password' && isHide
        ? 'password'
        : type === 'password' && !isHide
          ? 'text'
          : type;
    return (
      <div className={inputCont}>
        <label
          className={`inputLabel ${labelExtraClass} ${errorClass} ${labelClass}`}>
          {errorClass ? errmsg : label}
        </label>
        {type === 'textarea' ? (
          <textarea
            className={`${inputClass} textArea `}
            onChange={this.handleChange}
            onBlur={this.isValid}
          />
        ) : (
          <input
            value={value}
            className={`${input} ${errorClass} ${extraClass}`}
            onChange={this.handleChange}
            onKeyDown={this.props.pressEnter}
            type={inputType}
            onBlur={this.isValid}
            list={field}
            id={id}
          />
        )}
        {type === 'password' ? (
          <img
            alt=":)"
            className={hideIcon}
            onClick={e => this.setState({isHide: !this.state.isHide})}
            src={`/images/eye-${svgSrc}.svg`}
          />
        ) : null}
        {finalList && (
          <datalist id={field}>
            {finalList.map((opt, key) => <option key={key} value={opt} />)}
          </datalist>
        )}
      </div>
    );
  }
}

export default TextField;
