//componente
export default props =>{
  //recebendo children
  const elseChild = props.children.filter(child =>{
    return child.type && child.type.name === 'Else'
  })[0]
  
  //pega os outros filhos do if sem ser o else
  const ifChildren = props.children.filter(child =>{
    return child !== elseChild
  })

  console.log(elseChild)

  if(props.test){
    return ifChildren // todos os filhos de if sem quer o else
  } else if(elseChild){
    //renderiza nada
    return elseChild
  } else{
    //renderiza nada
    return false
  }
}


//constante relacionado ao componente, logo temos o componente Else
export const Else = props => props.children
   
