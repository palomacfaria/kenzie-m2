function procuraSobremesa(sobremesas, valorDoInput) {
    const pesquisa = sobremesas.filter((sobremesa) => 
      sobremesa.nome.toLowerCase().includes(valorDoInput.toLowerCase())
    );
    return pesquisa;
}

// Equivalente
  //   return sobremesas.filter((sobremesa) =>
  //     sobremesa.nome.toLowerCase().includes(valorDoInput.toLowerCase())
  //   );


