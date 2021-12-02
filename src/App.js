import React, { Fragment, useEffect, useRef, useState } from 'react';
import Articles from './components/Articles';
import { Container, TextField, Typography} from '@mui/material';
import iguane from './assets/img/iguane.jpeg'
import lezard from './assets/img/lezard.jpeg'
import cameleon from './assets/img/cameleon.jpg'
import Argent from './components/Argent';
import Panier from './components/Panier';


const App = () => {
  console.log('[App.js] ComponentsDidMount');
//   useEffect(() => {
//     return () => {
//         // onDelArticle()
//         console.log('[App.js] ComponentsWillUnmount');
//     }
// }, [])
  const [article, setArticle] = useState([
    {picture: iguane, name: 'Iguane', prix: 150, stock: 3},
    {picture: lezard, name: 'Lezard', prix: 190, stock: 4},
    {picture: cameleon, name: 'Cameleon', prix: 250, stock: 6}
  ]) 
  const [argent, setArgent] = useState(1000)
  const [panier, setPanier] = useState([])
  const [addmoney, setAddmoney] = useState()
  
  const acheter = (i) => {
    let copieArticle = article
    if(argent < copieArticle[i].prix || copieArticle[i].stock === 0){
      let a =  argent < copieArticle[i].prix ? "no money:": "pas de stock"
      return console.log(a);
    }
    let copieArgent = argent
    copieArgent -= article[i].prix
    setArgent(copieArgent)
    article[i].stock -= 1
    setArticle(article)
    let copiePanier = panier
    copiePanier.push(copieArticle[i])
    setPanier(copiePanier)
  }
  const rendre = (i) => {
    let copiePanier = panier
    let copieArgent = argent
    let copieArticle = article
    copieArticle[copieArticle.indexOf(panier[i])].stock++;
    copieArgent += copieArticle[copieArticle.indexOf(panier[i])].prix;
    copiePanier.splice(i, 1)
    setPanier(copiePanier)
    setArticle(copieArticle)
    setArgent(copieArgent)
  }

  return (
    <Fragment>
      <Argent
        argent={argent} 
        />
      <Container sx={{ display: 'flex', justifyContent: 'center', mt:4}}>
          {article.map((item, index) => {
            return(
              <Articles
              onBuyArticle={()=>acheter(index)}
              key={{index}}
              picture={item.picture}
              name={item.name}
              prix={item.prix}
              stock={item.stock}
              />
              )
            })}
      </Container>
        <Typography sx={{ m:4 }} gutterBottom variant="h4">
          Mon panier:
        </Typography>
        {panier.map((item, index) => {
          return(
            <Panier
            onDelArticle={()=>rendre(index)}
            key={index}
            name={item.name}
            prix={item.prix}
            stock={1}
            />
            )
          })}
    </Fragment>
  );
};

export default App;
