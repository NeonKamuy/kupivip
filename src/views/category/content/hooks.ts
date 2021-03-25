import { ICategoryContent } from "../../product/constants";

export function useSizes(contents: ICategoryContent[]): string[] {
  const sizes = new Set<string>();

  for(const content of contents){
    content.sizes.forEach(e => sizes.add(e.name));
  }

  return [...sizes];
}