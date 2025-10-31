import Comment from "./Comment";

export default function Post() {
  return (
    <div>
      <h2 className="bg-pink-200">Post Title</h2>
      <p className="bg-pink-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente accusantium cupiditate itaque doloribus ex tempore consectetur eum eius officiis cumque optio nobis facere alias, consequuntur natus sequi velit et!</p>
      <Comment />
    </div>
  )
}
