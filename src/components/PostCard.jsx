import { Button } from "./index";
import storageService from "../appwrite/storageService/storage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PostCard({ post }) {

    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = storageService.getFile(post.featuredImage);
        setImage(img);

    }, []);

    return (
        <div className="w-full max-h-[500px] bg-custom-white grid grid-rows-custom-1 gap-2 rounded-xl">
            {image &&
                <div className="w-full rounded-xl overflow-hidden">
                    <img className="w-full h-full object-cover" src={image} alt={post.title} />
                </div>
                
            }
            {console.log("Image: ", image)}
            <div className="grid grid-rows-custom-2 justify-items-start gap-1">
                <p className="flex items-end gap-2">
                    <span className="text-sm font-bold font-sans">{post.category}</span>
                    <span className="text-sm font-semibold font-sans text-gray-600">
                        {new Date(post.$createdAt).toLocaleDateString()}
                    </span>
                </p>
                <h3 className="font-poppins font-semibold text-start ">{post.title}</h3>
                <p className="font-sans text-gray-600">{post.caption.substring(0, 100)}{post.caption.length > 100 ? '...' : ''}</p>

                <button
                    className=" text-custom-purple font-medium font-sans underline text-start"
                    onClick={() => navigate(`/post/${post.$id}`)}
                >Read More...</button>
            </div>
        </div>
    );
}

export default PostCard;