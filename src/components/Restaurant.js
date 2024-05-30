import { useEffect } from "react";
import { useParams } from "react-router-dom";
import restaurant from "../data/restaurant";
import "./Restaurant.css"
import { useState } from "react";

export default function Restaurant() {
    const {id} = useParams()
    const [title,setTitle] = useState("");
    const [image,setImage] = useState("");
    const [content,setContent] = useState("");
    const [location,setLocation] = useState("");
    useEffect(()=>{
        const result = restaurant.find((item)=>item.id === parseInt(id))
        setTitle(result.title)
        setImage(result.image_url)
        setContent(result.content)
        setLocation(result.location)
    },[id])
  return (
    <div className="container">
      <h2 className="title">ร้านที่:{id} {title}</h2>
      <img src={image} alt="รูปภาพร้านอาหาร" className="blog-image"/>
      <div className="blog-detail">
        <p>{content}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}
