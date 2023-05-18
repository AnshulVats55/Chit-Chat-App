import Instance from "./Interceptors";

const handleAddLikes = async (data) => {
  try {
    const response = await Instance({
      url: "/like",
      data,
      method: "POST",
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

 const handleDeleteLikes = async (id) => {
  try {
    const response = await Instance({
      url: `/like/${id}`,
      method: "DELETE",
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export{handleAddLikes,handleDeleteLikes}