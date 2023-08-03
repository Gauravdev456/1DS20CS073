import React, { useState, useEffect } from 'react';

export default function Prime() {
    let hel="kkkkk";
    let API = "http://20.244.56.144/numbers/primes";
    let API2="http://20.244.56.144/numbers/fibo";
    const [primeNumbers, setPrimeNumbers] = useState([]);
    const [fibNumbers, setfibNumbers] = useState([]);

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setPrimeNumbers(data.numbers); 
        } catch (error) {
            console.log(error);
        }
    };
    const fetchApiData2 = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setfibNumbers(data.numbers);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApiData(API);
    }, [API]);

    useEffect(() => {
        fetchApiData2(API2);
    }, [API2]);
    

    

    return (
        <>
            <h1>Prime Numbers</h1>
            <ul>
                {primeNumbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
            <h1>Fibonacci Numbers</h1>
            <ul>
                {fibNumbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </>
    );
}
