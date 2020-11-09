import * as React from 'react';
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export interface ChirpProps { }

export interface Chirp {
    id: number,
    username: string,
    message: string 
}

const Chirps: React.FC<ChirpProps> = (props) => {

    const[chirps, setChirps] = useState<Chirp[]>([]);

    const getChirps = async () => {
        let r = await fetch('/api/chirps');
        let chirps = await r.json();
        setChirps(chirps);
    }

    useEffect(() => { getChirps(); }, [])

    return (
        <section className="row my-2">
            <ul className="col-md-6 offset-md-3 list-group">
                {chirps.map(chirp => (
                    <li key={chirp.id} className="list-group-item d-flex justify-content-between">
                        <h3>{chirp.username}</h3>
                        <Link to={`/${chirp.id}/details`} className='btn btn-info shadow-sm'>Get Details</Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Chirps;