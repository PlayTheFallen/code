/**
 * # Edit array element
 * This will target a given element within an array and then merge a new object with the existing target.
 */

// not recommended, used only to target a random post within the table
r.table('posts').filter({author: 1}).limit(1).update({
  posts: r.row('posts').changeAt(0, r.row('posts').nth(0).merge({ content: "This is some replaced content" }))
})
