export default function Section({ title, children, ...proxyprops }) {

    return (
        <section {...proxyprops}>
            <h2>{title}</h2>
            {children}
        </section>
    )

}