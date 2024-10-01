import { X } from "lucide-react";
import PostCard from "./component/postCard";




interface Iuser{
  _id:string;
  nombre:string;
  email:string;
  contraseña:string;
  posts: IPost[];
  fechaDeRegistro:string
}


interface IPost {
  _id: string;
  descripcion: string;
  imagen: string;
  fechaDeRegistro: string;
  autor:Iuser

}





export default async function Page() {

  const data = await fetch('http://localhost:4000/post/getPost',{
    cache:'no-cache'
  })

  const posts = await data.json()
  const datafinal =posts.posts

  return (


    <div>
      {
        datafinal.map((post:IPost,index:number)=>(
          <PostCard key={index } post={post}/>
        ))

      }


    </div>

  );


}