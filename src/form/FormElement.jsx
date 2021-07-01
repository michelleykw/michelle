import React from 'react';
import Input from './Input';
import TextArea from './TextArea';

function FormElement(props) {
    const { control="input", ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <TextArea {...rest} />
        // case 'select':
        //     return <Select {...rest} />
        // case 'radio':
        //     return <RadioButtons {...rest} />
        // case 'checkbox':
        //     return <CheckboxGroup {...rest} />
        // case 'date':
        //     return <DatePicker {...rest} />
        default:
            return null
    }
}

export default FormElement