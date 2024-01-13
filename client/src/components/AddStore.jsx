import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const AddStore = () => {
    const [store, setStore] = useState({
        storeName: "",
        storeNumber: "",
    })

    const navigate = useNavigate();

    const onChangeHandler = e => {
        setStore({
            ...store,
            [e.target.name]: e.target.value
        })
    }

    const formValidator = () => {
        let isValid = true
        if(store.storeName.length < 2) {
            return false
        }
        if(store.storeNumber.length < 2) {
            return false
        }
        return isValid
    }


    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post('http://localhost:8000/api/stores', store)
                .then(res => {
                    navigate('/')
                    console.log(res)
                })           
                .catch(err => console.log(err))
        }
        else {
            console.log('Form is not valid')
    }
}

    return (
        <div className='container-fluid w-50 mt-5 bg-dark-subtle'>
            <h1 className='text-primary p-2 w-50 mx-auto mt-2 fw-bold'>Create store</h1>
            <form className="col md-6 w-50 mx-auto" action="" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name" className='mt-3 fw-bold'>Store Name: </label>
                    <input type="text" name="name" id="name" className="form-control mt-1" onChange={onChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="position " className='mt-3 fw-bold'>Store Number: </label>
                    <input type="text" name="number" id="position" className="form-control mt-1" onChange={onChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="position " className='mt-3 fw-bold'>Open Status: </label>
                    <input type="text" name="open" id="position" className="form-control mt-1" onChange={onChangeHandler} />
                </div>
                <input type="submit" value="Create Store" className="btn btn-primary mt-3 mb-2" />
            </form>
        </div>
    )
}

export default AddStore;