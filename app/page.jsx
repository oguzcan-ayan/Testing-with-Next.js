"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function HomePage() {
    const router = useRouter();
    const [value, setValue] = useState('');


    const onSubmit = () => {
        router.replace(`/?test=${value}`);
        setValue("");
    }

    return (
        <div>
            <h1>HomePage</h1>
            <input
                value={value}
                placeholder="Search something..."
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={onSubmit}>Submit</button>
            <Link href="./about">Go about..</Link>
        </div>
    )
}

export default HomePage;




