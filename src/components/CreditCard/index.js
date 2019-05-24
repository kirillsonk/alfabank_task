import React, { Component } from 'react'
import CardInput from 'arui-feather/card-input';
import Input from 'arui-feather/card-input';
import Button from 'arui-feather/button';
import FormField from 'arui-feather/form-field';
import MoneyInput from 'arui-feather/money-input';
// import { Formik } from 'formik';

import './style.css'

class CreditCard extends Component {
    // constructor(props) {
    //     super(props)
    // }

    state = { isOpen: false }

    getInitialState = function() {
        return {
          inputValue: ''
        };
      }

    render() {
        // const { data } = this.props
        const data = 555;
        // const body = this.state.isOpen && <h1>Body</h1>
        const json = {
            amount: data,
        }
        return (
            <div className='hello' style={{ color: 'red' }}>
                {/* <h2>
                    {data.title}
                    Title
                <button onClick={this.payClick}>
                        {this.state.isOpen ? 'Opened' : 'Closed'}
                    </button>
                </h2> */}
                <FormField size='l'>
                    <CardInput clear='true' size='l' label='Номер карты' placeholder='Введите номер карты'
                    value={this.state.inputValue} onChange={this.updateInputValue}/>
                </FormField>

                <FormField size='l'>
                    <Input maxLength='5' size='l' label='ММ/ГГ' placeholder='ММ/ГГ' />
                </FormField>

                <FormField size='l'>
                    <Input size='l' label='CVC' placeholder='CVC' />
                </FormField>

                <FormField size='l'>
                    <Input size='l' label='Имя держателя' placeholder='IVAN IVANOV' />
                </FormField>

                <FormField size='l'>
                    <MoneyInput showCurrency={true} currencyCode='RUR' label='Сумма'size='l'/>
                </FormField>

                <Button view='extra' size={'m'} onClick={this.payClick}> Оплатить</Button>
                <Button view='extra' size={'m'} disabled={true}>Оплатить</Button>
            </div>
        )
    }

    // handleClick = () => {
    //     console.log('Cick');
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // }

    payClick = () => {
        let params = {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify(),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch('http://127.0.0.1:8080/payment', params).catch((error) => {
            return error;
        });
    }
}

export default CreditCard