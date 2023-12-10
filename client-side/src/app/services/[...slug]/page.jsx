

export default function Service({ params: my_params }) {
    
    return (
        <div>{my_params.slug.join(" ")}</div>
    )
}