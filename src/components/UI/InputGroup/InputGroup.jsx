import React from 'react';
import styles from './InputGroup.module.scss';
import Input from '../../UI/Input/Input';
import InputArea from '../../UI/InputArea/InputArea';

const InputGroup = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  type = 'text',
  isTextArea = false
}) => {

  return (
    <div className={styles.inputGroup}>
      <div className={styles.header}>
        <label htmlFor={id}>{label}</label>
        {error && <span className={styles.error}>{error}</span>}
      </div>
      {isTextArea ? (
        <InputArea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <Input
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
      )}
    </div>
  );
};

export default InputGroup;
