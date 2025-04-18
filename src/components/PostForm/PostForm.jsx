import { Select, Input, RTE, Button, Loader } from "../index";
import { useForm } from "react-hook-form";
import databaseService from "../../appwrite/databaseService/database";
import storageService from "../../appwrite/storageService/storage";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../features/post/postSlice";

function PostForm({ post }) {

    const [preview, setPreview] = useState(null);
    const [error, setError] = useState("");
    const { register, handleSubmit, control, setValue, watch, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            caption: post?.caption || "",
            category: post?.category || "Art & Design",
            status: post?.status || "active",
        }
    });
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handlePost = async (data) => {
        setIsSubmitting(true);
        try {
            setError("");
            if (post) {

                const file = data.image ? await storageService.uploadFile(data.image[0]) : null;

                if (file) {
                    console.log("Hello file");
                    await storageService.deleteFile(post.featuredImage);

                }

                const updatedPost = await databaseService.updatePost(
                    post.$id,
                    {
                        ...data,
                        featuredImage: file ? file.$id : undefined,
                    }
                );

                if (updatedPost) {
                    console.log("helo update");

                    navigate(`/post/${updatedPost.$id}`);
                }

            } else {
                console.log(data.image);
                const file = data.image[0] ? await storageService.uploadFile(data.image[0]) : null;

                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;

                    const newPost = await databaseService.createPost({
                        ...data,
                        userId: userData ? userData.$id : undefined,
                    });

                    if (newPost) {
                        dispatch(addPost({ post: newPost }));
                        navigate(`/post/${newPost.$id}`);
                    }
                }
            }
        } catch (error) {
            setError(error.message);
        }
        setIsSubmitting(false);

    }


    const transform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .toLowerCase()
                .trim()
                .replace(/\s+/g, '-');
        }

        return "";
    }, []);

    useEffect(() => {
        if (post) setPreview(storageService.getFile(post.featuredImage));

        if (!post) {
            const subscription = watch((value, { name }) => {
                if (name === "title") {
                    const transformedTitle = transform(value.title).slice(0, 36); // Limit to 36 characters
                    setValue("slug", transformedTitle, { shouldValidate: true });
                }
            });

            return () => {
                subscription.unsubscribe();
            }
        }

    }, [watch, setValue, transform]);


    return (
        <div className="w-full">
            {isSubmitting &&
                <div className="w-full mt-45 bg-transparent flex justify-center items-center">
                    {isSubmitting && <Loader />}
                </div>
            }
            <div className="w-full">
                <form onSubmit={handleSubmit(handlePost)} className="w-full flex flex-col gap-5">
                    <Input
                        type="file"
                        label={preview ? "Change cover image" : "Add a cover image"}
                        labelClassName="block w-full cursor-pointer p-3 text-center rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        placeholder="Add a cover image"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        parentClassName="relative"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = () => {
                                    setPreview(reader.result);
                                };
                                reader.readAsDataURL(file);
                            } else {
                                setPreview(null);
                            }
                            setValue("image", e.target.files)
                        }}
                    />

                    {preview && <section className="w-full rounded-xl overflow-hidden mb-10 mt-5">
                        <div className="w-full h-104">
                            <img src={preview}
                                alt={post ? post.title : "preview"}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>}



                    <Input
                        type="text"
                        placeholder="My Awesome Story"
                        {...register("title", {
                            required: true,
                        })}
                        className="text-2xl font-semibold font-sans bg-white p-2 border-1 outline-none rounded-md"
                    />

                    <Input
                        type="text"
                        placeholder="Post slug"
                        {...register("slug", { required: true })}
                        disabled={post ? true : false}
                        className="py-2 px-2 font-medium font-sans rounded-md bg-white"
                    />

                    <Select
                        options={[
                            "Art & Design",
                            "Automobiles",
                            "Adventure & Travel",
                            "Business",
                            "Books & Literature",
                            "Career & Education",
                            "Cooking & Recipes",
                            "DIY Projects",
                            "Digital Marketing",
                            "Entertainment",
                            "Environment",
                            "Fashion & Beauty",
                            "Fitness & Health",
                            "Finance & Investments",
                            "Gaming",
                            "History",
                            "Inspirational Stories",
                            "Lifestyle",
                            "Love & Relationships",
                            "Movies & TV Shows",
                            "Music",
                            "Parenting",
                            "Pets & Animals",
                            "Science & Technology",
                            "Sports",
                            "Tech Tutorials",
                            "Writing & Blogging",
                            "World Affairs"
                        ]}
                        label="Choose a category: "
                        className="bg-white py-2 px-2 shadow-md rounded-md outline-none"
                        {...register("category", { required: false })}
                    />

                    <Input
                        type="text"
                        placeholder="A Short Description"
                        {...register("caption", {
                            required: true,
                        })}
                        className="pt-2 pb-5 px-2 font-medium font-sans text-md rounded-md bg-white"

                    />


                    <RTE name="content" control={control} defaultValue={getValues("content")} />




                    <Select
                        options={["active", "inactive"]}
                        label="Status: "
                        {...register("status", { required: true })}
                        className="bg-white py-2 px-2 shadow-md rounded-md outline-none"
                    />



                    {error && <p className="text-red-600 font-medium">{error}</p>}
                    {console.log(error)}
                    <Button
                        type="submit"
                        className="text-white hover:bg-violet-800"
                    >
                        {post ? "Update" : "Create"}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default PostForm;