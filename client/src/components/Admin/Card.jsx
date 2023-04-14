import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDeleteProductMutation, useUpdateProductMutation } from "../../apiSlice";

export default function Card(props) {
  const [deletePr] = useDeleteProductMutation();
  const [updatePr] = useUpdateProductMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [category, setCategory] = useState(props.category);

  function deleteP(id) {
    if (confirm('Are you sure you want to delete this you cant restore it ?')) {
      deletePr(id);
      props.SetisLoged();
    }
  }

  function handleSave() {
    setIsEditing(false);
    const p = {
      id: props.id,
      title: title,
      category: category
    }
    updatePr(p)
  }

  function handleCancel() {
    setIsEditing(false);
    setTitle(props.title);
    setCategory(props.category);
  }

  function renderContent() {
    if (isEditing) {
      return (
        <>
          <div className="price">
            <select
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base"
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
          </div>
          <div className="title">
            <input value={title}
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base "

              onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="products_button buy_button">
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleSave}>Save</button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="price">
            <span>{category}</span>
          </div>
          <div className="title">
            <span>{title}</span>
          </div>
          <div className="products_button buy_button">
            <button onClick={() => deleteP(props.id)} style={{ borderRight: 'white 1px solid' }}>Supprimer</button>
            <button onClick={() => setIsEditing(true)}>Modifier</button>
          </div>
        </>
      );
    }
  }

  return (
    <div key={props.id} className="box">
      <Link>
        <img className="product_img" src={`http://localhost:5000/images/${props.image}`} alt="product" loading="lazy" />
        <div className="content">
          {renderContent()}
        </div>
      </Link>
    </div>
  );
}
