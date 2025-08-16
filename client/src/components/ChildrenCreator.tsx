import {  useState, type FormEvent } from "react"

export default function ChildrenCreator() {
    const [status, setStatus] = useState<null|"ok"|"err">(null)
    const [msg, setMsg] = useState('')

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
    
        const form = e.currentTarget
        const fd = new FormData(form)

        const name = String(fd.get("name"))
        const age = Number(fd.get("age"))
        console.log(`children age:${age}`)

        // Client-side validation
        if (!name) {
            setStatus("err")
            setMsg("Name is required")
            return
        }
        if (Number.isNaN(age) || age<=0) {
            setStatus("err")
            setMsg("Age must be a valid number")
            return
        }
    
        fetch('http://localhost:5000/api/children', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, age })
        }).then(res => {
            if (!res.ok) {
                return res.json().catch(err => console.error(err))
            }
            return res.json()
        }).then((data: { name: string; age: number }) => {
            setStatus("ok")
            setMsg(`Created: ${data.name} age: ${data.age}`)
            form.reset()
        }).catch(err => {
            setStatus("err")
            setMsg("failed to create child")
            console.error(err)
        })
    }
  return (
      <form
          className="flex flex-col"
          onSubmit={handleSubmit}
      >
          <label htmlFor="ChildName" className="text-black">Name</label>
          <input type="text" name="name" id="ChildName" className="border-black border-2 p-2 m-4"/>
          <label htmlFor="ChildAge">Age</label>
          <input type="number" name="age" id="ChildAge"  className="border-black border-2 p-2 m-4"/>
          <button type="submit" className="bg-green-600 text-white">Send</button>
          {status === "ok" && <p className="text-green-500">{msg}</p>}
          {status === "err" && <p className="text-red-500">{msg}</p>}
    </form>
  )
}
