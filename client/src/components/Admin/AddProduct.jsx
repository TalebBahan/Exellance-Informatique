import React, { useState } from "react";
import axios from "axios";
import { useAddProductsMutation } from "../../apiSlice";

const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("");
    const [addProduct] = useAddProductsMutation()
    //  (useAddProductMutation)
    // const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);
        formData.append("category", category);
        addProduct(formData)
        // await axios.post("http://localhost:5000/api/products", formData, {
        //     headers: { "Content-Type": "multipart/form-data" },
        // });
        // history.push("/");
    };

    return (
        <form className="container px-5 py-24 mx-auto flex" onSubmit={(e)=>handleSubmit(e)}>
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-sm p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Ajouter</h2>
                <input
                    className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                    placeholder="Titre"
                    required
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                    placeholder="Image"
                    required
                    type="file"
                    id="image"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <select
                    className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                    placeholder="Nom"
                    required
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value={''}>Category</option>
                    <option value={'pc_fix'}>PC Fix</option>
                    <option value={'portable'}>Portable</option>
                    <option value={'impriment'}>Imprimante</option>
                    <option value={'camera'}>Camera</option>
                    <option value={'cominication'}>Communication</option>
                    <option value={'licence'}>Licence</option>
                    <option value={'resaux'}>Reseaux</option>
                    <option value={'dvr'}>DVR</option>
                    <option value={'ondileur'}>Ondileur</option>
                </select>
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ajouter</button>
            </div>
        </form >
    );
};

export default AddProduct;

