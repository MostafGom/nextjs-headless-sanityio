import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import { getSanitySearchPosts } from './api'; // Assuming you have an API file

const SearchInput: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const debounce = (func: Function, delay: number) => {
        let timer: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    const handleSearch = debounce((keyword: string) => {
        router.push({
            pathname: '/search',
            query: { keyword },
        });
    }, 300); // Debounce delay of 300ms

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
        handleSearch(value);
    };

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
        />
    );
};

export default SearchInput;