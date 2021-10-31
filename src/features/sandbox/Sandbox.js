import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { increament, decreament } from "./textReducer";


export const SandBox = () => {
    const data = useSelector(state => state.test.data)
    const dispatch = useDispatch();



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Testing123...</h1>
                    </div>
                    <div className="col-6">
                        <h3>the data is: {data} </h3>
                    </div>
                </div>

                <div className="row">
                    <div className="buttons mt-2">
                        <button onClick={() => dispatch(increament(10))} className="btn btn-outline-success">Increment</button>
                        <button onClick={() => dispatch(decreament(5))} className="btn btn-danger">
                            Decrement</button>

                    </div>
                </div>
            </div>
        </>
    )
}
