import { Avatar,AvatarFallback,AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";



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
  
  

export default  function PostCard({post}:{post:IPost}) {





  return (
    <div className=" post flex flex-col  bg-white mx-10">
      <div className="flex flex-row">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <h1>{post.autor.nombre}</h1>
          <h1>@nicorubio96</h1>
        </div>
      </div>
      <div className="w-full">
        <Image
          src={post.imagen}
          alt=""
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
        <Button variant="ghost" className="flex items-center space-x-2 text-red-500 hover:text-red-600">
                  <Heart className="h-5 w-5" />
                  <span>35</span>
                </Button>


                <Button variant="ghost" className="flex items-center space-x-2 text-blue-500 hover:text-blue-600">
                  <MessageCircle className="h-5 w-5" />
                  <span>45</span>
                </Button>        
        </div>
        <div><span className="text-lg">nicorubio96</span> {post.descripcion}</div>

      </div>
    </div>
  );

  
}