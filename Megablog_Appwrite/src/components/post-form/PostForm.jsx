import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import service from "../../Appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
    const navigate = useNavigate();

    // Get logged-in user from Redux
    const userData = useSelector((state) => state.auth.userData);

    const {
        register,handleSubmit,watch,setValue,control,getValues,
    } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    // SLUG GENERATOR
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }

        return "";
    }, []);

    // AUTO CREATE SLUG
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), {
                    shouldValidate: true,
                });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    // SUBMIT
    const submit = async (data) => {
        try {
            // console.log("USER DATA:", userData);
            // console.log("USER ID:", userData?.$id);
            // console.log("USER NAME:", userData?.name);

            // UPDATE EXISTING POST
            if (post) {
                let file = null;

                if (data.image && data.image[0]) {
                    file = await service.uploadFile(data.image[0]);

                    if (!file) {
                        console.log("Image upload failed");
                        return;
                    }
                }

                const dbPost = await service.updatePost(post.$id, {
                    title: data.title,
                    content: data.content,
                    featuredImage: file ? file.$id : post.featuredImage,
                    status: data.status,
                });

                if (dbPost) {
                    if (file && post.featuredImage) {
                        await service.deleteFile(post.featuredImage);
                    }
                    navigate(`/post/${dbPost.$id}`);
                }
                return;
            }

            // CREATE NEW POST
            if (!userData?.$id) {
                console.log("User is not logged in");
                return;
            }

            if (!userData?.name) {
                // console.log("User name is not available");
                return;
            }

            if (!data.image || !data.image[0]) {
                // console.log("Please select an image");
                return;
            }

            const file = await service.uploadFile(data.image[0]);

            if (!file) {
                console.log("Image upload failed");
                return;
            }

            // console.log("UPLOADED FILE:", file);

            const dbPost = await service.createPost({
                title: data.title,
                slug: data.slug,
                content: data.content,
                status: data.status,
                featuredImage: file.$id,
                userId: userData.$id,
                ownerName: userData.name,
            });

            if (dbPost) {
                // console.log("POST CREATED:", dbPost);
                navigate(`/post/${dbPost.$id}`);
            }
        } catch (error) {
            console.log("PostForm :: submit :: error", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            {/* LEFT SIDE */}
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />

                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue(
                            "slug",
                            slugTransform(e.currentTarget.value),
                            { shouldValidate: true }
                        );
                    }}
                />

                <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />
            </div>

            {/* RIGHT SIDE */}
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png,image/jpg,image/jpeg,image/gif"
                    {...register("image", { required: !post })}
                />

                {/* Existing image */}
                {post?.featuredImage && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="w-full rounded-lg"
                        />
                    </div>
                )}

                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />

                <Button
                    type="submit"
                    bgColor={post ? "bg-green-500" : undefined}
                    className="w-full cursor-pointer"
                >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

export default PostForm;