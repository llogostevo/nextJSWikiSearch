import Link from "next/link"

type Props = {
    result: Result
}

export default function Item({result}: Props) {
  const itemTextCol = (
    // div flex container in tailwind
    <div className="flex flex-col justify-center">
        <h2>
            {/* target will open this in a new tab */}
            <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank"
            className="text-xl font-bold underline">
                {result.title}
            </Link>
        </h2>
        <p>{result.extract}</p>
    </div>
  )

//   ternary operator as not all results have a thumbnail
    const content = result?.thumbnail?.source
    // true
        ? (
            <article className="m-4 max-w-lg">
                <div className="flex flexrow gap-4">
                    <div className="flex flex-col justify-center">
                        <img 
                        src={result.thumbnail.source}
                        alt={result.title}
                        width={result.thumbnail.width}
                        height={result.thumbnail.height}
                        loading="lazy"
                        />
                    </div>
                    {itemTextCol}
                </div>
            </article>
        )
        // false fi there is no thumbnail present
        : (
            <article className="m-4 max-w-lg">
                {itemTextCol}
            </article>
        )

        return content


}

