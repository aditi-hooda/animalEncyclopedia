import React, { useEffect, useState } from 'react'
import './FunFacts.css'
export default function ColorPages() {
    var pages = [
        {
            img: "https://s3.animalia.bio/animals/coloring_pages/small/meUDoK5IcHojID9uh5PuCdWLqNgmwcQM6u1QY6y5.webp",
            download: "https://s3.animalia.bio/animals/coloring_pages/pdf/KMH0srLwkxsHggsC5PEWGIsYeVWNWiMqa0ZohnhW.pdf"
        },
        {
            img: "https://s3.animalia.bio/animals/coloring_pages/small/09qcJx500foavM5EFAFYCWJw21dn6SWvKYR7agUT.webp",
            download: "https://s3.animalia.bio/animals/coloring_pages/pdf/tj6h1l1BD6qG88dad4BGrMHjyu9us7tAPJblCtUQ.pdf"
        },
        {
            img: "https://s3.animalia.bio/animals/coloring_pages/small/z8cE2KyNSd1nunP6f99W2pk9QGHGQW70EN50vcia.webp",
            download: "https://s3.animalia.bio/animals/coloring_pages/pdf/MM3f4odUNM3OKsCZ81uBoky6shbIh8kUDHg1mqVQ.pdf"
        },
        {
            img: "https://s3.animalia.bio/animals/coloring_pages/small/jYUGYii4Oynf56ct27L10tD5Iqkor2M1vCjwNKSj.webp",
            download: "https://s3.animalia.bio/animals/coloring_pages/pdf/MywkDdE0FiZSYJLarusqYA2ylhkxUKsEkW7SXre2.pdf"
        },
        {
            img: "https://s3.animalia.bio/animals/coloring_pages/small/3YElrt0RF40SwARSLA9zgUoxfAFYvfaxmDSXbitV.webp",
            download: "https://s3.animalia.bio/animals/coloring_pages/pdf/Ly1GQxNsQE11VT0toGctb0ELrjxmDqwgexoTr65D.pdf"
        },
        {
            img: "https://s3.animalia.bio/animals/coloring_pages/small/HCAEFV1Tz9du2EbnhbRwRPcrzFNVSJ6ZvreZ4FXA.webp",
            download: "https://s3.animalia.bio/animals/coloring_pages/pdf/Yu51oeLxtlmmhI0fmEmKcll8gpsoFnIcJZ0zve34.pdf"
        },
        {
            img: "https://s3.animalia.bio/animals/coloring_pages/small/NXiJc1lcL4ahD2DHPpxRPresMLYjgoHwWnEUpMi7.webp",
            download: "https://s3.animalia.bio/animals/coloring_pages/pdf/oKawVRqRxKVnRI1B9t8PSLaryEQg5eC0sD5g3hoh.pdf"
        }
    ]

    return (
        <div className='container my-5'>
            <h1>Have fun Coloring</h1>
            <h3>Click on the image to print it and start coloring</h3>
            {pages.map(page => {
                return (
                    <a href={page.download} target="blank"><img src={page.img} alt="" className="m-3" /></a>
                );
            })}
        </div>
    )
}
