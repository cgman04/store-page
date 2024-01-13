import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const StoreDashboard = () => {
    const [stores, setStores] = useState([])
    const navigate = useNavigate() 

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores')
            .then(res => setStores(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const navigateToAddStore = () => {
        navigate(`/api/stores/create`)
    }

    const deleteStore = (id) => {
        axios.delete(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                const filteredStores = stores.filter(store => store._id !== id)
                setStores(filteredStores)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Store Finder</h1>
            <p className='mt-3 col-md-5'>Find stores in your area!</p>
            <table className=" w-75 mx-auto mt-3 table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Store</th>
                        <th scope="col">Store Number</th>
                        <th scope="col">Open</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {stores.map((store) =>
                        <tr key={store._id}>
                            <td>{store.storeName}</td>
                            <td>{store.storeNumber}</td>
                            <td>{store.openStatus}</td>
                            <td><button className="btn btn-danger" onClick={() => deleteStore(store._id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={navigateToAddStore}>Can't find your store?</button>
        </div>
    )
}

export default StoreDashboard;