import Link from "next/link"


export default function Blogpost({ text }){
    console.log('>>>', {text});    
    const v = { ...text, nt_variants: undefined }         
    // if ("blog" in props) {
    //     const { blog } = props;
    //     const { articleTitle,slug,description, author } = blog?.fields;
    //     return <>
    //         <div className="card">
    //             <div className="content">
    //                 <div className="info">
    //                     <h3>{articleTitle}</h3>
    //                     <h4>{description}</h4>
    //                     <h5>{author}</h5>
    //                 </div>
    //                 <div className="details">
    //                     <Link href={'/posts/' + slug}><a>
    //                         Read article
    //                     </a>
    //                     </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // }
    // return <></>




    return <>{JSON.stringify(v)}</>
}