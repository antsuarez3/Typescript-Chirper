import * as React from 'react';
import { useState, useEffect } from 'react';
import { Chirp } from './OneChirp';
import { RouteComponentProps } from 'react-router-dom';

export interface DetailsProp extends RouteComponentProps<{ id: string }> { }

const ChirpDetails: React.FC<DetailsProp> = ({ match: { id } }) => {

    const [chirp, setChirp] = useState<Chirp>({
        id: null,
        username: null,
        message: null
    });

    const getChirp = async () => {
        let r = await fetch(`/api/chirps/${id}`);
        let chirp = await r.json();
        setChirp(chirp);
    }

    useEffect(() => { getChirp(); }, [id]);

    return (
        <section className="row my-5">
            <article className="col-md-12">
                <div className="card m-1 p-1 shadow">
                    <div className="card-body text-center">
                        <h4 className="card-title">{chirp.username}</h4>
                        <div className="d-flex justify-content-center align-items-center mb-2">
                            <p className="card-text mx-3">{chirp.message}</p>
                        </div>
                    </div>
                    <button className="btn btn-warning btn-block shadow mx-auto">Delete</button>
                </div>
            </article>
        </section>
    )
}

export default ChirpDetails;