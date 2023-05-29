export default function ProjectMenu(props: {slug: string}) {
    return (
        <>
            <div class="div2">
                <a href={`https://bank.hackclub.com/donations/start/${props.slug}`}>Donate</a>
            </div>
            <div class="div3">
                <a href={`https://bank.hackclub.com/${props.slug}`}>View Project</a>
            </div>
        </>
    )
}