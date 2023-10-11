function ConvertGridToData(tableau) {
  const userTypes = Object.keys(tableau[0]).filter((key) => key !== 'method' && key !== 'path' && key !== 'key')
  // creer une variable resultat dont les clefs sont les elements de userTypes et les valeurs sont des objets vides
  const resultat = userTypes.reduce((acc, userType) => {
    return {
      ...acc,
      [userType]: {},
    };
  }, {})

  userTypes.forEach((userType) => {
    tableau.forEach((pathObject) => {
      resultat[userType][pathObject.path] = {
        ...resultat[userType][pathObject.path],
        [pathObject.method]: pathObject[userType],
      };
    });
  });


  return resultat;
}

export default ConvertGridToData;