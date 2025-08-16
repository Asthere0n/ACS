import { useState, useEffect } from 'react'

type Child = {
    _id: string,
    name: string,
    age: number
}

export default function ChildrenDisplay() {
    const [children, setChildren] = useState <Child[]>([])

        useEffect(() => {
            fetch("http://localhost:5000/api/children")
                .then(res => {
                    if (!res.ok) {
                        console.error("Failed to fetch data")
                    }
                    return res.json()
                })
                .then(data=>setChildren(data))
                .catch(err => console.error(err))
        }, [])
    return (
    <ul>
            {children.map((child) => {
                return <li key={child._id}><span>{child.name}</span> - <span>{child.age}</span></li>
            })}
    </ul>
  )
}
