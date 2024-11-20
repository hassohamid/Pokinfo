function Pokemon({ data }) {
  const { name, sprites, types, weight, height } = data;
  const typeList = types.map((type) => type.type.name).join(", ");
  const imageUrl = sprites.other["showdown"].front_default;

  console.log(sprites);

  return (
    <div className="fetch-container">
      <h1> {name} </h1>
      <img src={imageUrl} alt="{name}" />
      <p> Weight: {weight} hg</p>
      <p> Height: {height} dm</p>
      <h2> Type: {typeList} </h2>
    </div>
  );
}

export default Pokemon;
