import Image from "next/image"
import agency from "@/app/components/images/agency.jpg"

export default  function Agency () {
    return (
        <div>
         <Image id="Picture" src={agency} alt="" />

          <h1 className="h1">**Top 19 US agency in powerhouses**</h1>

         <p className="paragraph">Before diving into its use in web development, it’s important to understand the core principles of blockchain technology.</p>

         <h1 className="h1">**What is Blockchain?**</h1>
         <p className="paragraph">Blockchain is a distributed ledger system that stores data in a series of blocks. Each block contains a set of records, and these blocks are linked together to form a chain. Unlike traditional centralized databases, a blockchain is decentralized, meaning no single entity has full control over the data. The data is stored across multiple nodes (computers), which ensures transparency, security, and immutability.</p>

         <h1 className="h1">**2. Decentralized Web Development: Web 3.0**</h1>

        </div>

    )
}