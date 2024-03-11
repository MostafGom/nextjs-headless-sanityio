'use client'
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button';

export default function PaginationButton({ cursor, page }: { cursor: string | null, page: string }) {

    const router = useRouter()
    function moveForward() {
        router.push(`/blog?page=${Number(page) + 1}&cursor=${cursor}`)
    }
    function moveBackward() {
        router.back()
    }

    return (
        <div className='flex justify-between my-12 bg-secondary py-2 rounded-2xl container'>
            <Button disabled={Number(page) == 1} variant='link' onClick={() => moveBackward()}>Prev</Button>
            <Button disabled={cursor === null} variant='default' onClick={() => moveForward()}>Next</Button>
        </div>
    );
}
