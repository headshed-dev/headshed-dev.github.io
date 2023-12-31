import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

interface Data {
    astro: {
        frontmatter: {
            estReadingTime?: number;
        };
    };
}

/** Estimated Reading time */
export function remarkReadingTime() {
    return function (tree: Node, { data }: { data: Data }) {
        const textOnPage = toString(tree);
        const readingTime = getReadingTime(textOnPage);
        data.astro.frontmatter.estReadingTime = readingTime.minutes;
    };
}