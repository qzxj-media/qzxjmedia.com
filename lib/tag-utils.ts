export const tagsToString = (tags: string[]) => {
  return tags.map(tag => '#' + tag).join(', ')
}
