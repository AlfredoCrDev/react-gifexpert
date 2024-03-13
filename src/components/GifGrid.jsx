import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

function GifGrid({ category }) {

  const { images, isLoading } = useFetchGifs( category );


  
  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      <div className="card-grid">
        { 
          images.map( (img) => (
            <GifItem 
              key={ img.id } 
              // Se envian todas las propiedades con {...img}
              { ...img } 
            />
            )
          )
        }
      </div>

      {/* <ol> Sin desestructurar img
        { 
          images.map( img => (
            <li key={img.id}>{img.title}</li>
            )
          )
        }
      </ol> */}

      {/* Desestructurando img
      <div className="card-grid">
        { 
          images.map( ({id, title}) => (
            <GifItem key={ id } title={title} />
            )
          )
        }
      </div> */}

    </>
  )
}

export default GifGrid