import { useParams } from "react-router";
const UpdateGalleryForm = () => {
  const { id } = useParams();
  console.log(id);
  return <div className="text-white">UpdateGalleryForm UpdateGalleryForm</div>;
};

export default UpdateGalleryForm;
