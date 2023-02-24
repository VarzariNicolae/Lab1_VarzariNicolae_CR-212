import React, { useState } from 'react';
import { useStore } from './MyStore';
import './index.css';

function MyComponent() {
    const store = useStore();

    // local state
    const [localData, setLocalData] = useState<any>({ name: '', address: '', phone: '' });

    // use data from MobX store
    const myData = store.myData;

    // update data in MobX store
    // add new object to MobX store
    const handleAddObject = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        if (!localData.name || !localData.address || !localData.phone) {
            alert('Introduceti toate campurile.');
            return;
        }
        store.addObject(localData);
        setLocalData({ name: '', address: '', phone: '' });
    };

    // delete object from MobX store
// delete object from MobX store and update local state
    const handleDeleteObject = (index: number) => {
        store.deleteObject(index);
        setLocalData({ name: "", address: "", phone: "" });
    };

    // update object in MobX store

    return (

        <div className="container">
            <h1 className="title">Varzari Nicolae Laboratorul 5</h1>
            <form className="form" onSubmit={handleAddObject}>
                <input className="input" type="text" placeholder="Nume" value={localData.name} onChange={e => setLocalData({ ...localData, name: e.target.value })} />
                <input className="input" type="text" placeholder="Adresa" value={localData.address} onChange={e => setLocalData({ ...localData, address: e.target.value })} />
                <input className="input" type="text" placeholder="Telefon" value={localData.phone} onChange={e => setLocalData({ ...localData, phone: e.target.value })} />
                <button className="button" type="submit">Trimite</button>
            </form>
            <div>
                <div className="grid">
                    {myData.map((data: any, index: number) => (
                        <div key={index} className="object">
                            <p>Nume: {data.name}</p>
                            <p>Adresa: {data.address}</p>
                            <p>Telefon: {data.phone}</p>
                            <button onClick={() => handleDeleteObject(index)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyComponent;
