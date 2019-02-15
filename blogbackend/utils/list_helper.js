const dummy = (blogs) => {
  if (blogs){
    return 1
  }
}
  
const totalLikes = (blogs) => 
  blogs.reduce((sum, blog) =>
    sum + blog.likes
  ,0)


const favoriteBlog = (blogs) => {

  const newBlogs = blogs.map(blog => 
    ({
      title: blog.title,
      author: blog.author,
      likes: blog.likes
    })
  ) 
  const reducer = (prev, current) => {
    return (prev.likes > current.likes) ? prev : current
  }
  if (newBlogs && newBlogs.length) {
    return newBlogs.reduce(reducer)
  } else {
    return null
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}