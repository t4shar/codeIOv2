import Link from "next/link"



function notfound() {
  return (
    <section className="flow">
        <div className="container">
            <h2>Not Found</h2>
            <p>Sorry, The page you are looking for does not exists</p>
            <Link href="/">Return Home</Link>
        </div>
    </section>
  )
}

export default notfound