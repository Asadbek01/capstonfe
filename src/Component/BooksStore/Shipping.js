import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {countries} from "countries-list"
import { useDispatch, useSelector } from "react-redux";
import { SaveshipppingInfo } from "../../redux/action";

export const Shipping = () => {
    const shippingInfo = useSelector(state=> state.cart.shippingInfo)
    const [adress, setAdress]= useState(shippingInfo.adress)
    const [city, setcity]= useState(shippingInfo.city)
    const [postalCode, setpostalCode]= useState(shippingInfo.postalCode)
    const [phoneNo, setphoneNo]= useState(shippingInfo.phoneNo)
    const [country, setcountry]= useState(shippingInfo.country)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const countriesList = Object.values(countries)

    const submitHandler =(e) =>{
        e.preventDefault()
        dispatch(SaveshipppingInfo({adress, city, country, postalCode, phoneNo}))
        navigate('/confirm')
    }

  return (
    <div className="row wrapper d-flex">
    <div className="col-10 col-lg-5 m-auto text-white">
        <form className="shadow-lg">
            <h1 className="mb-4">Shipping Info</h1>
            <div className="form-group" onSubmit={submitHandler}>
                <label for="address_field">Address</label>
                <input
                    type="text"
                    id="address_field"
                    className="form-control"
                    value={adress}
                    onChange={(e)=> setAdress(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label for="city_field">City</label>
                <input
                    type="text"
                    id="city_field"
                    className="form-control"
                    value={city}
                    onChange={(e)=> setcity(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone_field">Phone No</label>
                <input
                    type="phone"
                    id="phone_field"
                    className="form-control"
                    value={phoneNo}
                    onChange={(e)=> setphoneNo(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label for="postal_code_field">Postal Code</label>
                <input
                    type="phone"
                    id="postal_code_field"
                    className="form-control"
                    value={postalCode}
                    onChange={(e)=> setpostalCode(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label for="country_field">Country</label>
                <select
                    id="country_field"
                    className="form-control"
                    value={country}
                    onChange={(e)=> setcountry(e.target.value)}
                    required
                >
                    {countriesList && countriesList.map(country=>(
                        <option key={country.name}>
                            {country.name}
                        </option>

                    ))
}

                </select>
            </div>

            <button
                id="shipping_btn"
                type="submit"
                className="btn btn-block py-3 btn-primary"
            >
                CONTINUE
                </button>
        </form>
    </div>
</div>  )
}
