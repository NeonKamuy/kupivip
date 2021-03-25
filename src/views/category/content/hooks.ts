import { useMemo } from "react";
import { ICategoryContent } from "../../product/constants";
import { Sort } from "./interfaces";

// Return Available Sizes Of Contents
export function useSizes(contents: ICategoryContent[]): string[] {
    const sizes = new Set<string>();

    for (const content of contents) {
        content.sizes.forEach((e) => sizes.add(e.name));
    }

    return [...sizes];
}

// Return Filtered Contents
export function useFiltered(
    contents: ICategoryContent[],
    checkedSizes: Set<string>
): ICategoryContent[] {
    const filtered = useMemo(() => {
        const filtered = checkedSizes.size
            ? contents.filter((e) =>
                  e.sizes.some((e) => checkedSizes.has(e.name))
              )
            : contents;
        return [...filtered];
    }, [checkedSizes, contents]);

    return filtered;
}

// Return Sorted Contents
export function useSorted(
    contents: ICategoryContent[],
    sort: Sort
): ICategoryContent[] {
    const sorted = useMemo(() => {
        if (sort === Sort.PriceAsc) return sortByPriceAsc(contents);
        if (sort === Sort.PriceDesc) return sortByPriceDesc(contents);

        return [...contents];
    }, [sort, contents]);

    return sorted;
}


function sortByOurChoice(items: ICategoryContent[]): ICategoryContent[] {
  return items;
}

function sortByPriceAsc(items: ICategoryContent[]): ICategoryContent[] {
  return [...items].sort((a, b) => {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
  });
}

function sortByPriceDesc(items: ICategoryContent[]): ICategoryContent[] {
  return [...items].sort((a, b) => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
  });
}
