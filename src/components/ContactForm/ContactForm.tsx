import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseEmail, chooseAddress, choosePhone } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface ContactFormProps {
    id?: string;
    date?: {}
};

interface ContactState {
    name: string;
    email: string;
    address: string;
    phone_number: string;
};



export const ContactForm = (props:ContactFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<ContactState>(state => state.name);
    const {register, handleSubmit} = useForm({})

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated: ${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseName(data.name));
            dispatch(chooseEmail(data.email));
            dispatch(choosePhone(data.phone_number))
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Contact Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="name">Email</label>
                    <Input {...register('email')} name="email" placeholder='Email' />
                </div>
                <div>
                    <label htmlFor="name">Phone Number</label>
                    <Input {...register('phone_number')} name="phone_number" placeholder='Phone Number' />
                </div>
                <div>
                    <label htmlFor="name">Address</label>
                    <Input {...register('address')} name="address" placeholder='Address' />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
  )
}
