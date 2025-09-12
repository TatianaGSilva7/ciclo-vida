import React, {useState, useEffect} from 'react';
function Contador(){
  const [contador, setContador] = useState(0);

  //useEffect com array de dependencias vzaio
  //comportamento similar ao componentDidMount(montagem)

  useEffect(() =>{
    console.log('Componente montado');
  },[]);

  //useEffect com dependencia de 'contado':
  //Comportamento similar ao componentDidMount e componenteDidUpdate

  useEffect(() => {
    document.title = 'Contagem: ${contador}';
    console.log('Componente atualizado ou montado. Novo valor do contador:', contador);
  
    //o retono da função (funcçao limpeza)
    //comportamenteo similar ao componentWilllUnmount(desmontagem)

    return()=> {
      console.log('Função de limpeza executada. O contador será remivido')
    };

  }, [contador]);

  const incrementar = () => {
    setContador(contador+1);
  };

  return(
    <div>
      <h2>Contador Simples</h2>
      <p>O contador está em:{contador}</p>
      <button onClick={incrementar}>Incrementar</button>  
    </div>
  );
}
  export default Contador;

